# 🎬 Netflix GPT – AI Powered Movie Recommendation App

A Netflix-inspired movie streaming application built using React, Redux, Firebase Authentication, TMDB API, and Google Gemini AI.

This project combines real-time movie data with AI-powered recommendations, allowing users to discover movies using natural language prompts.

---

## 🚀 Live Features

### 🔐 Authentication (Firebase)
- Sign Up / Sign In
- Profile update (display name & photo)
- Protected routes
- Auto redirect based on auth state
- Sign out functionality
- Persistent login session

---

### 🎥 Browse Page (Netflix UI Clone)
- Fullscreen autoplay background trailer
- Featured movie banner with title & overview
- Multiple movie categories:
  - Now Playing
  - Popular
  - Top Rated
  - Upcoming
- Smooth horizontal scroll movie rows
- Clean Netflix-style UI using Tailwind CSS

---

### 🤖 AI Movie Recommendations (Gemini Powered)
- Natural language movie search
- Example:
  > "Suggest 5 horror movies like The Conjuring"

- Flow:
  1. Gemini generates movie names
  2. Movie names are sent to TMDB API
  3. Posters are fetched dynamically
  4. Results rendered with movie cards

- Redux state management for GPT results
- Suggestions auto-clear when navigating away

---

## 🛠️ Tech Stack

### Frontend
- React JS
- React Router DOM
- Redux Toolkit
- Tailwind CSS
- Axios

### APIs & Services
- Firebase Authentication
- TMDB API (The Movie Database)
- Google Gemini API (AI text generation)

---

## 🧠 Project Architecture

### Custom Hooks
- useNowPlayingMovies
- usePopularMovies
- useTopRatedMovies
- useUpcomingMovies
- useMovieTrailer

### Redux Slices
- userSlice
- moviesSlice
- gptSlice

### Key Concepts Used
- onAuthStateChanged with unsubscribe
- Protected routing
- Async API chaining (Gemini → TMDB)
- Conditional rendering
- Custom hooks abstraction
- Global state management
- Error handling & fallback logic

---

## 🎨 UI Highlights

- Fullscreen hero trailer
- Gradient overlays
- Shimmer loading UI
- Scrollbar hidden styling
- Responsive layout
- Clean component structure

---

## 📦 Installation

```bash
git clone https://github.com/VaibhaviMistri/Netflix-GPT.git
cd netflix-gpt
npm install
npm start

🔑 Environment Variables
Create a .env file in the root directory:
REACT_APP_GEMINI_API_KEY = your_gemini_api_key
REACT_APP_FIREBASE_API_KEY = your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN = your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID = your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET = your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = your_messaging_sender_id
REACT_APP_FIREBASE_API_ID = your_firebase_api_key
REACT_APP_FIREBASE_MEASUREMENT_ID = your_firebase_meaurement_id
REACT_APP_TMDB_BEARER_TOKEN = your_tmbd_bearer_token