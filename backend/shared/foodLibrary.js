const foodLibrary = [
  // ===========================
  // DAIRY
  // ===========================

  {
    id: "milk",
    name: "Milk",
    category: "Dairy",
    foodType: "Vegetarian",
    mealTypes: [
      "Breakfast",
      "Snack",
      "Dinner"
    ],
    calories: 150,
    protein: 8,
    carbs: 12,
    fats: 5,
    serving: "250ml",
    imageUrl: ""
  },

  {
    id: "curd",
    name: "Curd",
    category: "Dairy",
    foodType: "Vegetarian",
    mealTypes: [
      "Lunch",
      "Dinner"
    ],
    calories: 98,
    protein: 11,
    carbs: 4,
    fats: 4,
    serving: "200g",
    imageUrl: ""
  },

  {
    id: "paneer",
    name: "Paneer",
    category: "Protein",
    foodType: "Vegetarian",
    mealTypes: [
      "Lunch",
      "Dinner"
    ],
    calories: 265,
    protein: 18,
    carbs: 4,
    fats: 20,
    serving: "100g",
    imageUrl: ""
  },

  // ===========================
  // PROTEIN
  // ===========================

  {
    id: "eggs",
    name: "Eggs",
    category: "Protein",
    foodType: "Eggetarian",
    mealTypes: [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    calories: 70,
    protein: 6,
    carbs: 1,
    fats: 5,
    serving: "1 Egg",
    imageUrl: ""
  },

  // ===========================
  // CARBS
  // ===========================

  {
    id: "rice",
    name: "Rice",
    category: "Carbs",
    foodType: "Vegetarian",
    mealTypes: [
      "Lunch",
      "Dinner"
    ],
    calories: 130,
    protein: 3,
    carbs: 28,
    fats: 0,
    serving: "100g",
    imageUrl: ""
  },

  // ===========================
  // FRUITS
  // ===========================

  {
    id: "banana",
    name: "Banana",
    category: "Fruits",
    foodType: "Vegetarian",
    mealTypes: [
      "Breakfast",
      "Snack",
      "Pre Workout"
    ],
    calories: 105,
    protein: 1,
    carbs: 27,
    fats: 0,
    serving: "1 Banana",
    imageUrl: ""
  },

  // ===========================
  // HEALTHY FATS
  // ===========================

  {
    id: "peanut_butter",
    name: "Peanut Butter",
    category: "Healthy Fats",
    foodType: "Vegetarian",
    mealTypes: [
      "Breakfast",
      "Snack"
    ],
    calories: 188,
    protein: 8,
    carbs: 6,
    fats: 16,
    serving: "2 tbsp",
    imageUrl: ""
  },

  // ===========================
  // PROTEIN (PART-2)
  // ===========================

  {
  id: "soy_chunks",
  name: "Soy Chunks",
  category: "Protein",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 345,
  protein: 52,
  carbs: 33,
  fats: 1,
  serving: "100g",
  imageUrl: ""
},

{
  id: "tofu",
  name: "Tofu",
  category: "Protein",
  foodType: "Vegan",
  mealTypes: ["Lunch", "Dinner"],
  calories: 144,
  protein: 17,
  carbs: 3,
  fats: 9,
  serving: "100g",
  imageUrl: ""
},

{
  id: "chicken_breast",
  name: "Chicken Breast",
  category: "Protein",
  foodType: "Non Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 165,
  protein: 31,
  carbs: 0,
  fats: 4,
  serving: "100g",
  imageUrl: ""
},

{
  id: "fish",
  name: "Fish",
  category: "Protein",
  foodType: "Non Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 206,
  protein: 22,
  carbs: 0,
  fats: 12,
  serving: "100g",
  imageUrl: ""
},

{
  id: "mutton",
  name: "Mutton",
  category: "Protein",
  foodType: "Non Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 294,
  protein: 25,
  carbs: 0,
  fats: 21,
  serving: "100g",
  imageUrl: ""
},

{
  id: "lean_mutton",
  name: "Lean Mutton",
  category: "Protein",
  foodType: "Non Vegetarian",
  mealTypes: ["Lunch", "Dinner"],

  calories: 220,
  protein: 29,
  carbs: 0,
  fats: 11,

  serving: "100g",

  imageUrl: ""
},

{
  id: "dal",
  name: "Dal",
  category: "Protein",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 116,
  protein: 9,
  carbs: 20,
  fats: 0,
  serving: "100g",
  imageUrl: ""
},

{
  id: "chickpeas",
  name: "Chickpeas",
  category: "Protein",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Snack"],
  calories: 164,
  protein: 9,
  carbs: 27,
  fats: 3,
  serving: "100g",
  imageUrl: ""
},

{
  id: "rajma",
  name: "Rajma",
  category: "Protein",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 127,
  protein: 9,
  carbs: 23,
  fats: 1,
  serving: "100g",
  imageUrl: ""
},

{
  id: "moong_dal",
  name: "Moong Dal",
  category: "Protein",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 105,
  protein: 7,
  carbs: 19,
  fats: 1,
  serving: "100g",
  imageUrl: ""
},

{
  id: "whey_protein",
  name: "Whey Protein",
  category: "Protein",
  foodType: "Vegetarian",
  mealTypes: ["Post Workout"],
  calories: 120,
  protein: 24,
  carbs: 3,
  fats: 1,
  serving: "1 Scoop",
  imageUrl: ""
},

// ===========================
// CARBS (PART-2)
// ===========================

{
  id: "oats",
  name: "Oats",
  category: "Carbs",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast"],
  calories: 389,
  protein: 17,
  carbs: 66,
  fats: 7,
  serving: "100g",
  imageUrl: ""
},

{
  id: "brown_rice",
  name: "Brown Rice",
  category: "Carbs",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 111,
  protein: 3,
  carbs: 23,
  fats: 1,
  serving: "100g",
  imageUrl: ""
},

{
  id: "roti",
  name: "Roti",
  category: "Carbs",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 120,
  protein: 4,
  carbs: 22,
  fats: 2,
  serving: "1 Roti",
  imageUrl: ""
},

{
  id: "daliya",
  name: "Daliya",
  category: "Carbs",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast"],
  calories: 342,
  protein: 12,
  carbs: 76,
  fats: 2,
  serving: "100g",
  imageUrl: ""
},

{
  id: "sprouts",
  name: "Mixed Sprouts",
  category: "Protein",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast", "Snack", "Lunch"],
  calories: 105,
  protein: 8,
  carbs: 18,
  fats: 1,
  serving: "100g",
  imageUrl: ""
},

{
  id: "whole_wheat_roti",
  name: "Whole Wheat Roti",
  category: "Carbs",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 120,
  protein: 4,
  carbs: 22,
  fats: 2,
  serving: "1 Roti",
  imageUrl: ""
},

{
  id: "sweet_potato",
  name: "Sweet Potato",
  category: "Carbs",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast", "Lunch"],
  calories: 86,
  protein: 2,
  carbs: 20,
  fats: 0,
  serving: "100g",
  imageUrl: ""
},

{
  id: "potato",
  name: "Potato",
  category: "Carbs",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 77,
  protein: 2,
  carbs: 17,
  fats: 0,
  serving: "100g",
  imageUrl: ""
},

{
  id: "poha",
  name: "Poha",
  category: "Carbs",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast"],
  calories: 130,
  protein: 3,
  carbs: 25,
  fats: 2,
  serving: "100g",
  imageUrl: ""
},

{
  id: "upma",
  name: "Upma",
  category: "Carbs",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast"],
  calories: 180,
  protein: 5,
  carbs: 30,
  fats: 5,
  serving: "100g",
  imageUrl: ""
},

{
  id: "bread",
  name: "Whole Wheat Bread",
  category: "Carbs",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast", "Snack"],
  calories: 265,
  protein: 9,
  carbs: 49,
  fats: 3,
  serving: "100g",
  imageUrl: ""
},

{
  id: "pasta",
  name: "Whole Wheat Pasta",
  category: "Carbs",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 131,
  protein: 5,
  carbs: 25,
  fats: 1,
  serving: "100g",
  imageUrl: ""
},

{
  id: "quinoa",
  name: "Quinoa",
  category: "Carbs",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 120,
  protein: 4,
  carbs: 21,
  fats: 2,
  serving: "100g",
  imageUrl: ""
},

// ===========================
// VEGETABLES
// ===========================

{
  id: "broccoli",
  name: "Broccoli",
  category: "Vegetables",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 34,
  protein: 3,
  carbs: 7,
  fats: 0,
  serving: "100g",
  imageUrl: ""
},

{
  id: "spinach",
  name: "Spinach",
  category: "Vegetables",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 23,
  protein: 3,
  carbs: 4,
  fats: 0,
  serving: "100g",
  imageUrl: ""
},

{
  id: "cauliflower",
  name: "Cauliflower",
  category: "Vegetables",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 25,
  protein: 2,
  carbs: 5,
  fats: 0,
  serving: "100g",
  imageUrl: ""
},

{
  id: "cabbage",
  name: "Cabbage",
  category: "Vegetables",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 25,
  protein: 1,
  carbs: 6,
  fats: 0,
  serving: "100g",
  imageUrl: ""
},

{
  id: "carrot",
  name: "Carrot",
  category: "Vegetables",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Snack"],
  calories: 41,
  protein: 1,
  carbs: 10,
  fats: 0,
  serving: "100g",
  imageUrl: ""
},

{
  id: "cucumber",
  name: "Cucumber",
  category: "Vegetables",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Snack"],
  calories: 16,
  protein: 1,
  carbs: 4,
  fats: 0,
  serving: "100g",
  imageUrl: ""
},

{
  id: "tomato",
  name: "Tomato",
  category: "Vegetables",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 18,
  protein: 1,
  carbs: 4,
  fats: 0,
  serving: "100g",
  imageUrl: ""
},

{
  id: "capsicum",
  name: "Capsicum",
  category: "Vegetables",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 31,
  protein: 1,
  carbs: 6,
  fats: 0,
  serving: "100g",
  imageUrl: ""
},

{
  id: "green_beans",
  name: "Green Beans",
  category: "Vegetables",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 31,
  protein: 2,
  carbs: 7,
  fats: 0,
  serving: "100g",
  imageUrl: ""
},

{
  id: "peas",
  name: "Green Peas",
  category: "Vegetables",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 81,
  protein: 5,
  carbs: 14,
  fats: 0,
  serving: "100g",
  imageUrl: ""
},

// ===========================
// FRUITS
// ===========================

{
  id: "apple",
  name: "Apple",
  category: "Fruits",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast", "Snack"],
  calories: 52,
  protein: 0,
  carbs: 14,
  fats: 0,
  serving: "100g",
  imageUrl: ""
},

{
  id: "seasonal_fruit",
  name: "Seasonal Fruit",
  category: "Fruits",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast", "Snack", "Pre Workout"],

  calories: 60,
  protein: 1,
  carbs: 15,
  fats: 0,

  serving: "100g",

  imageUrl: ""
},

{
  id: "orange",
  name: "Orange",
  category: "Fruits",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast", "Snack"],
  calories: 47,
  protein: 1,
  carbs: 12,
  fats: 0,
  serving: "100g",
  imageUrl: ""
},

{
  id: "mango",
  name: "Mango",
  category: "Fruits",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast", "Snack"],
  calories: 60,
  protein: 1,
  carbs: 15,
  fats: 0,
  serving: "100g",
  imageUrl: ""
},

{
  id: "watermelon",
  name: "Watermelon",
  category: "Fruits",
  foodType: "Vegetarian",
  mealTypes: ["Snack"],
  calories: 30,
  protein: 1,
  carbs: 8,
  fats: 0,
  serving: "100g",
  imageUrl: ""
},

{
  id: "papaya",
  name: "Papaya",
  category: "Fruits",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast", "Snack"],
  calories: 43,
  protein: 1,
  carbs: 11,
  fats: 0,
  serving: "100g",
  imageUrl: ""
},

{
  id: "pineapple",
  name: "Pineapple",
  category: "Fruits",
  foodType: "Vegetarian",
  mealTypes: ["Snack"],
  calories: 50,
  protein: 1,
  carbs: 13,
  fats: 0,
  serving: "100g",
  imageUrl: ""
},

{
  id: "grapes",
  name: "Grapes",
  category: "Fruits",
  foodType: "Vegetarian",
  mealTypes: ["Snack"],
  calories: 69,
  protein: 1,
  carbs: 18,
  fats: 0,
  serving: "100g",
  imageUrl: ""
},

{
  id: "guava",
  name: "Guava",
  category: "Fruits",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast", "Snack"],
  calories: 68,
  protein: 3,
  carbs: 14,
  fats: 1,
  serving: "100g",
  imageUrl: ""
},

{
  id: "pomegranate",
  name: "Pomegranate",
  category: "Fruits",
  foodType: "Vegetarian",
  mealTypes: ["Snack"],
  calories: 83,
  protein: 2,
  carbs: 19,
  fats: 1,
  serving: "100g",
  imageUrl: ""
},

{
  id: "kiwi",
  name: "Kiwi",
  category: "Fruits",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast", "Snack"],
  calories: 61,
  protein: 1,
  carbs: 15,
  fats: 1,
  serving: "100g",
  imageUrl: ""
},

// ===========================
// DAIRY
// ===========================

{
  id: "greek_yogurt",
  name: "Greek Yogurt",
  category: "Dairy",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast", "Snack"],
  calories: 97,
  protein: 10,
  carbs: 4,
  fats: 5,
  serving: "100g",
  imageUrl: ""
},

{
  id: "low_fat_milk",
  name: "Low Fat Milk",
  category: "Dairy",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast", "Snack"],
  calories: 42,
  protein: 3.4,
  carbs: 5,
  fats: 1,
  serving: "100ml",
  imageUrl: ""
},

{
  id: "cheese",
  name: "Cheese",
  category: "Dairy",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast", "Snack"],
  calories: 402,
  protein: 25,
  carbs: 1,
  fats: 33,
  serving: "100g",
  imageUrl: ""
},

{
  id: "cottage_cheese",
  name: "Low Fat Cottage Cheese",
  category: "Dairy",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast", "Lunch"],
  calories: 98,
  protein: 11,
  carbs: 3,
  fats: 4,
  serving: "100g",
  imageUrl: ""
},

{
  id: "lassi",
  name: "Lassi",
  category: "Dairy",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast", "Lunch"],
  calories: 154,
  protein: 6,
  carbs: 18,
  fats: 6,
  serving: "250ml",
  imageUrl: ""
},

{
  id: "buttermilk",
  name: "Buttermilk",
  category: "Dairy",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Snack"],
  calories: 40,
  protein: 3,
  carbs: 5,
  fats: 1,
  serving: "250ml",
  imageUrl: ""
},

{
  id: "skim_milk",
  name: "Skim Milk",
  category: "Dairy",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast", "Snack"],
  calories: 35,
  protein: 3.4,
  carbs: 5,
  fats: 0,
  serving: "100ml",
  imageUrl: ""
},

{
  id: "mozzarella",
  name: "Mozzarella Cheese",
  category: "Dairy",
  foodType: "Vegetarian",
  mealTypes: ["Lunch", "Dinner"],
  calories: 280,
  protein: 28,
  carbs: 3,
  fats: 17,
  serving: "100g",
  imageUrl: ""
},

{
  id: "flavored_yogurt",
  name: "Flavored Yogurt",
  category: "Dairy",
  foodType: "Vegetarian",
  mealTypes: ["Snack"],
  calories: 110,
  protein: 4,
  carbs: 16,
  fats: 3,
  serving: "100g",
  imageUrl: ""
},

{
  id: "kefir",
  name: "Kefir",
  category: "Dairy",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast", "Snack"],
  calories: 60,
  protein: 3,
  carbs: 5,
  fats: 3,
  serving: "100ml",
  imageUrl: ""
},

// ===========================
// HEALTHY FATS
// ===========================

{
  id: "almonds",
  name: "Almonds",
  category: "Healthy Fats",
  foodType: "Vegetarian",
  mealTypes: ["Snack"],
  calories: 579,
  protein: 21,
  carbs: 22,
  fats: 50,
  serving: "100g",
  imageUrl: ""
},

{
  id: "walnuts",
  name: "Walnuts",
  category: "Healthy Fats",
  foodType: "Vegetarian",
  mealTypes: ["Snack"],
  calories: 654,
  protein: 15,
  carbs: 14,
  fats: 65,
  serving: "100g",
  imageUrl: ""
},

{
  id: "cashews",
  name: "Cashews",
  category: "Healthy Fats",
  foodType: "Vegetarian",
  mealTypes: ["Snack"],
  calories: 553,
  protein: 18,
  carbs: 30,
  fats: 44,
  serving: "100g",
  imageUrl: ""
},

{
  id: "pistachios",
  name: "Pistachios",
  category: "Healthy Fats",
  foodType: "Vegetarian",
  mealTypes: ["Snack"],
  calories: 562,
  protein: 20,
  carbs: 28,
  fats: 45,
  serving: "100g",
  imageUrl: ""
},

{
  id: "peanuts",
  name: "Peanuts",
  category: "Healthy Fats",
  foodType: "Vegetarian",
  mealTypes: ["Snack"],
  calories: 567,
  protein: 26,
  carbs: 16,
  fats: 49,
  serving: "100g",
  imageUrl: ""
},

{
  id: "chia_seeds",
  name: "Chia Seeds",
  category: "Healthy Fats",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast"],
  calories: 486,
  protein: 17,
  carbs: 42,
  fats: 31,
  serving: "100g",
  imageUrl: ""
},

{
  id: "flax_seeds",
  name: "Flax Seeds",
  category: "Healthy Fats",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast"],
  calories: 534,
  protein: 18,
  carbs: 29,
  fats: 42,
  serving: "100g",
  imageUrl: ""
},

{
  id: "pumpkin_seeds",
  name: "Pumpkin Seeds",
  category: "Healthy Fats",
  foodType: "Vegetarian",
  mealTypes: ["Snack"],
  calories: 559,
  protein: 30,
  carbs: 11,
  fats: 49,
  serving: "100g",
  imageUrl: ""
},

{
  id: "sunflower_seeds",
  name: "Sunflower Seeds",
  category: "Healthy Fats",
  foodType: "Vegetarian",
  mealTypes: ["Snack"],
  calories: 584,
  protein: 21,
  carbs: 20,
  fats: 51,
  serving: "100g",
  imageUrl: ""
},

{
  id: "avocado",
  name: "Avocado",
  category: "Healthy Fats",
  foodType: "Vegan",
  mealTypes: ["Breakfast", "Snack"],
  calories: 160,
  protein: 2,
  carbs: 9,
  fats: 15,
  serving: "100g",
  imageUrl: ""
},

// ===========================
// DRINKS
// ===========================

{
  id: "water",
  name: "Water",
  category: "Drinks",
  foodType: "Vegan",
  mealTypes: ["Breakfast","Lunch","Dinner","Snack"],
  calories: 0,
  protein: 0,
  carbs: 0,
  fats: 0,
  serving: "250ml",
  imageUrl: ""
},

{
  id: "coconut_water",
  name: "Coconut Water",
  category: "Drinks",
  foodType: "Vegan",
  mealTypes: ["Snack","Post Workout"],
  calories: 19,
  protein: 1,
  carbs: 4,
  fats: 0,
  serving: "100ml",
  imageUrl: ""
},

{
  id: "black_coffee",
  name: "Black Coffee",
  category: "Drinks",
  foodType: "Vegan",
  mealTypes: ["Pre Workout"],
  calories: 2,
  protein: 0,
  carbs: 0,
  fats: 0,
  serving: "1 Cup",
  imageUrl: ""
},

{
  id: "green_tea",
  name: "Green Tea",
  category: "Drinks",
  foodType: "Vegan",
  mealTypes: ["Breakfast","Snack"],
  calories: 2,
  protein: 0,
  carbs: 0,
  fats: 0,
  serving: "1 Cup",
  imageUrl: ""
},

{
  id: "lemon_water",
  name: "Lemon Water",
  category: "Drinks",
  foodType: "Vegan",
  mealTypes: ["Breakfast"],
  calories: 6,
  protein: 0,
  carbs: 2,
  fats: 0,
  serving: "250ml",
  imageUrl: ""
},

{
  id: "protein_shake",
  name: "Protein Shake",
  category: "Drinks",
  foodType: "Vegetarian",
  mealTypes: ["Post Workout"],
  calories: 130,
  protein: 24,
  carbs: 3,
  fats: 2,
  serving: "1 Scoop",
  imageUrl: ""
},

{
  id: "fresh_orange_juice",
  name: "Fresh Orange Juice",
  category: "Drinks",
  foodType: "Vegan",
  mealTypes: ["Breakfast"],
  calories: 45,
  protein: 1,
  carbs: 10,
  fats: 0,
  serving: "100ml",
  imageUrl: ""
},

{
  id: "vegetable_juice",
  name: "Vegetable Juice",
  category: "Drinks",
  foodType: "Vegan",
  mealTypes: ["Snack"],
  calories: 30,
  protein: 1,
  carbs: 7,
  fats: 0,
  serving: "250ml",
  imageUrl: ""
},

{
  id: "smoothie",
  name: "Fruit Smoothie",
  category: "Drinks",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast","Snack"],
  calories: 140,
  protein: 5,
  carbs: 28,
  fats: 2,
  serving: "250ml",
  imageUrl: ""
},

{
  id: "electrolyte_drink",
  name: "Electrolyte Drink",
  category: "Drinks",
  foodType: "Vegan",
  mealTypes: ["Post Workout"],
  calories: 25,
  protein: 0,
  carbs: 6,
  fats: 0,
  serving: "250ml",
  imageUrl: ""
},

// ===========================
// SNACKS
// ===========================

{
  id: "roasted_chana",
  name: "Roasted Chana",
  category: "Snacks",
  foodType: "Vegetarian",
  mealTypes: ["Snack"],
  calories: 364,
  protein: 19,
  carbs: 61,
  fats: 6,
  serving: "100g",
  imageUrl: ""
},

{
  id: "mixed_nuts",
  name: "Mixed Nuts",
  category: "Snacks",
  foodType: "Vegetarian",
  mealTypes: ["Snack"],
  calories: 607,
  protein: 20,
  carbs: 21,
  fats: 54,
  serving: "100g",
  imageUrl: ""
},

{
  id: "protein_bar",
  name: "Protein Bar",
  category: "Snacks",
  foodType: "Vegetarian",
  mealTypes: ["Snack", "Post Workout"],
  calories: 200,
  protein: 20,
  carbs: 18,
  fats: 7,
  serving: "1 Bar",
  imageUrl: ""
},

{
  id: "makhana",
  name: "Roasted Makhana",
  category: "Snacks",
  foodType: "Vegetarian",
  mealTypes: ["Snack"],
  calories: 347,
  protein: 9,
  carbs: 77,
  fats: 0,
  serving: "100g",
  imageUrl: ""
},

{
  id: "popcorn",
  name: "Air Popped Popcorn",
  category: "Snacks",
  foodType: "Vegetarian",
  mealTypes: ["Snack"],
  calories: 387,
  protein: 13,
  carbs: 78,
  fats: 4,
  serving: "100g",
  imageUrl: ""
},

{
  id: "granola",
  name: "Granola",
  category: "Snacks",
  foodType: "Vegetarian",
  mealTypes: ["Breakfast", "Snack"],
  calories: 471,
  protein: 10,
  carbs: 64,
  fats: 20,
  serving: "100g",
  imageUrl: ""
},

{
  id: "trail_mix",
  name: "Trail Mix",
  category: "Snacks",
  foodType: "Vegetarian",
  mealTypes: ["Snack"],
  calories: 462,
  protein: 14,
  carbs: 45,
  fats: 25,
  serving: "100g",
  imageUrl: ""
},

{
  id: "rice_cakes",
  name: "Rice Cakes",
  category: "Snacks",
  foodType: "Vegetarian",
  mealTypes: ["Snack"],
  calories: 387,
  protein: 8,
  carbs: 81,
  fats: 3,
  serving: "100g",
  imageUrl: ""
},

{
  id: "sprouts_salad",
  name: "Sprouts Salad",
  category: "Snacks",
  foodType: "Vegetarian",
  mealTypes: ["Snack"],
  calories: 105,
  protein: 8,
  carbs: 18,
  fats: 1,
  serving: "100g",
  imageUrl: ""
},

{
  id: "boiled_corn",
  name: "Boiled Corn",
  category: "Snacks",
  foodType: "Vegetarian",
  mealTypes: ["Snack"],
  calories: 96,
  protein: 3,
  carbs: 21,
  fats: 1,
  serving: "100g",
  imageUrl: ""
}


];

module.exports = foodLibrary;