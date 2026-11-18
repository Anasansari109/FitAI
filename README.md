# FitAI – AI-Powered Fitness & Wellness Platform

**FitAI** is a full-stack AI-powered fitness and wellness platform built using the MERN stack. It helps users create personalized workout plans, get diet recommendations, explore exercises, and track their fitness progress based on their individual goals, lifestyle, and preferences.

The platform combines **Google Gemini AI with rule-based recommendation algorithms** to deliver personalized fitness recommendations.

---

## 🚀 Key Features

### 🔐 Authentication & User Experience
- Secure user authentication
- Responsive user interface
- Personalized fitness experience

### 🤖 AI-Powered Personalization
- AI-generated workout plans
- Personalized diet recommendations
- Exercise recommendations based on user preferences
- Fitness recommendations tailored to individual goals and lifestyle

### 🏋️ Exercise Library
- 107+ exercises with animated GIF demonstrations
- Exercise categories and muscle group information
- Equipment and difficulty-level details
- Instructions, tips, and common mistakes
- Alternative exercise recommendations

### 📊 Fitness Tracking & Planning
- Daily workout planner
- Fitness progress tracking
- Fitness analytics
- Water intake tracking
- Home and gym workout support

---

## 🧠 AI & Recommendation System

FitAI integrates **Google Gemini AI** to generate personalized fitness recommendations.

The recommendation process considers multiple user-specific factors:

| Category | Personalization Factors |
|---|---|
| Fitness Goals | Weight gain, weight loss, muscle gain, fat loss |
| Experience | User's fitness experience level |
| Workout Preferences | Workout days and duration |
| Equipment | Available gym or home workout equipment |
| Nutrition | Vegetarian or non-vegetarian food preferences |
| Budget & Lifestyle | Food budget and lifestyle |
| Health Context | User-provided medical conditions |

### Hybrid Recommendation Approach

FitAI combines AI-generated responses with structured, rule-based workout and diet templates.

This approach includes:
- Workout recommendation algorithm
- Diet recommendation algorithm
- Rule-based template selection
- AI response parsing
- Exercise filtering and matching

The combination helps organize personalized recommendations around the user's fitness requirements and preferences.

---

## 🥗 Personalized Diet Recommendations

FitAI provides diet recommendations based on different fitness goals and food preferences.

**Supported fitness goals:**
- Weight Gain
- Weight Loss
- Muscle Gain
- Fat Loss

**Food and lifestyle preferences:**
- Vegetarian and non-vegetarian diets
- Hostel-friendly food options
- Home-cooked meals
- Budget-friendly food recommendations

---

## 💪 Exercise Library

The platform includes a collection of **107+ exercises**, with information designed to help users understand and perform different exercises.

Each exercise includes:

- Exercise name and category
- Primary and secondary muscles
- Required equipment
- Difficulty level
- Exercise instructions
- Helpful tips
- Common mistakes
- Alternative exercises
- Animated GIF demonstration

---

## 💻 Technology Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Redux Toolkit

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### AI Integration
- Google Gemini API

---

## 🏗️ Project Structure

```text
FitAI/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── middleware/
│   ├── prompts/
│   └── shared/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   └── shared/
│
└── scripts/
```

---

## ⚙️ Getting Started

Follow these steps to run FitAI locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- MongoDB
- Google Gemini API access

### 1. Clone the Repository

```bash
git clone https://github.com/Anasansari109/FitAI.git
cd FitAI
```

### 2. Set Up the Backend

```bash
cd backend
npm install
npm run dev
```

### 3. Set Up the Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

**Note:** Configure the required environment variables for the backend, including database and Gemini API configuration, before running the application. Refer to the project's backend configuration for the exact variable names.

---

## 🔮 Future Improvements

Potential enhancements planned for future versions:

- AI Coach Chatbot
- Meal Image Recognition
- Barcode Scanner
- Smart Progress Prediction
- Wearable Device Integration
- Live Workout Sessions
- Exercise Video Recommendations

---

## 👨‍💻 Developer

**Mohd Anas Ansari**

B.Tech – Computer Engineering  
Jamia Millia Islamia

**Full-Stack Developer**

Java • JavaScript • React.js • Node.js • Express.js • MongoDB • Google Gemini AI

- GitHub: [Anasansari109](https://github.com/Anasansari109)
- Project Repository: [FitAI](https://github.com/Anasansari109/FitAI)

---

## ⭐ Support

If you find this project interesting, consider giving the repository a ⭐ on GitHub.

Your support is appreciated!
