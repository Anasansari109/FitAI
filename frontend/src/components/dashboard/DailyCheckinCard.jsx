import { useState } from "react";
import { useProgress } from "../../context/ProgressContext";
import api from "../../services/api";

function DailyCheckinCard() {
  const {
    progressData,
    updateProgress,
  } = useProgress();

  const [weight, setWeight] = useState(
    progressData.currentWeight || ""
  );

  const [energy, setEnergy] = useState(
    progressData.energyLevel || ""
  );

  const handleSave = async () => {
    try {
      const newEntry = {
        date: new Date().toLocaleDateString(),
        weight: Number(weight),
      };

      await api.put("/progress/weight", {
        weight: Number(weight),
        date: newEntry.date,
      });

      await api.post("/progress/save", {
        ...progressData,
        currentWeight: Number(weight),
        energyLevel: energy,
        weightHistory: [
          ...(progressData.weightHistory ||
            []),
          newEntry,
        ],
      });

      updateProgress({
        currentWeight: Number(weight),

        energyLevel: energy,

        weightHistory: [
          ...(progressData.weightHistory ||
            []),
          newEntry,
        ],
      });

      alert("Check-in Saved");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to save check-in"
      );
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
      <h2 className="text-xl font-bold mb-6">
        Daily Check-in
      </h2>

      <div className="space-y-5">
        <div>
          <label className="block mb-2 font-medium">
            Today's Weight
          </label>

          <input
            type="number"
            value={weight}
            onChange={(e) =>
              setWeight(e.target.value)
            }
            placeholder="Enter Weight"
            className="w-full border border-slate-300 rounded-xl px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Energy Level
          </label>

          <div className="flex gap-3 flex-wrap">
            {[
              "Low",
              "Medium",
              "High",
            ].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setEnergy(item)
                }
                className={`px-4 py-2 border rounded-xl ${
                  energy === item
                    ? "bg-blue-600 text-white border-blue-600"
                    : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold"
        >
          Save Check-in
        </button>
      </div>
    </div>
  );
}

export default DailyCheckinCard;