import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-10 max-w-lg w-full text-center">

        <h1 className="text-8xl font-extrabold text-blue-600">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Oops!
        </h2>

        <p className="text-slate-600 mt-3 leading-7">
          The page you are looking for doesn't exist,
          has been moved, or the URL is incorrect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <Link
            to="/dashboard"
            className="
              flex-1
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-3
              rounded-xl
              font-semibold
              transition
            "
          >
            Dashboard
          </Link>

          <Link
            to="/"
            className="
              flex-1
              border
              border-slate-300
              hover:bg-slate-100
              py-3
              rounded-xl
              font-semibold
              transition
            "
          >
            Home
          </Link>

        </div>

      </div>

    </div>
  );
}

export default NotFoundPage;