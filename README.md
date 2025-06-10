![React](https://img.shields.io/badge/Frontend-React.js-61DAFB?logo=react)
![Flask](https://img.shields.io/badge/Backend-Flask-000000?logo=flask)
![Python](https://img.shields.io/badge/Language-Python-3776AB?logo=python)
![Spotify API](https://img.shields.io/badge/API-Spotify-1DB954?logo=spotify)
![Hugging Face](https://img.shields.io/badge/NLP-HuggingFace-yellow?logo=huggingface)
![License](https://img.shields.io/github/license/saifahmedarfi/vortex?color=green)
![Status](https://img.shields.io/badge/Developed-orange)



🎧 VORTEX – AI-Powered Music Discovery Platform

**VORTEX** is a smart, AI-enhanced music discovery web application that bridges emotional expression and sound. With a retro-themed, aesthetically pleasing UI and real-time music suggestions based on user sentiment or direct requests, VORTEX makes exploring Spotify's library intuitive, fun, and meaningful.


🌟 Overview

VORTEX allows users to chat with an intelligent AI assistant to:

* Discover songs based on **mood or emotion**
* Search for **specific artists, albums, or genres**
* Explore **Spotify content dynamically**, including **playback previews**

Whether you're sad, hyped, in love, or nostalgic—VORTEX finds your soundtrack.


 🎨 UI & Color Theme

The frontend of VORTEX features a **retro gaming-inspired aesthetic** with a romantic twist:

* **Design Elements:**

  * Google Fonts
  * Gradiented green and black backgrounds 
  * Floating conversation boxes & chat bubbles
  * Square album art with hover-expand playback
  * Vortex-inspired theme (Signature Theme)


## 🛠️ Tech Stack & Tools Used

| Layer          | Tools / Libraries                                                          |
| -------------- | -------------------------------------------------------------------------- |
| **Frontend**   |  HTML5, CSS3,                                                              |
| **Backend**    | Flask (Python), Flask-CORS, REST API                                       |
| **AI/ML**      | Hugging Face Transformers (DistilBERT - SST-2)                             |
| **Music API**  | Spotify Web API                                                            |
| **Deployment** | Localhost (development), GitHub Pages/Vercel (optional)         |
| **Extras**     | dotenv (env handling), axios, react-icons                                  |


 🔗 APIs Used

 🎧 **Spotify Web API**
  Used to search and fetch data for songs, artists, albums, EPs, and playlists based on the user’s mood or direct query.

 🤖 **Hugging Face Transformers – DistilBERT SST-2**
  A sentiment classification model that detects emotional tone from user messages (e.g., joy, sadness, excitement) and helps guide music recommendations.



 💡 Key Features

 🧠 **Sentiment-Aware Music Suggestions**
  VORTEX reads the emotional tone of your messages and recommends fitting songs or playlists.

 💬 **AI-Powered Chat Interface**
  Engage in a flowing chat with a virtual assistant designed to understand your music needs.

 🔍 **Smart Search Integration**
  Ask for artists, genres, moods, or playlists—and get immediate results.

 🎵 **Real-Time Spotify Content Display**
  See matching tracks, click to expand, preview music, and open in Spotify.

 🎨 **Themed UI**
  Retro, romantic, and playful—built with love for both form and function.



 📁 Folder Structure


vortex/
├── vortex-frontend/        # React frontend
│   ├── src/
│   │   ├── components/     # JSX Components
│   │   ├── styles/         # CSS files
│   │   └── App.jsx, index.js
│   └── public/
├── vortex-backend/         # Flask backend
│   ├── app.py              # Main Flask app
│   ├── chat_handler.py     # Handles chat + sentiment logic
│   ├── spotify_handler.py  # Spotify interaction logic
│   └── .env                # Spotify credentials




 🚀 Setup Instructions

 🧩 Prerequisites

* Node.js + npm
* Python 3.7+
* A Spotify Developer Account
* Hugging Face Transformers library



### 🖥️ Frontend Setup

```bash
cd vortex-frontend
npm install
npm start
```

---

### 🧠 Backend Setup

```bash
cd vortex-backend
pip install -r requirements.txt
python app.py
```

---

### 🔐 Environment Setup

Create a `.env` file in the backend root with the following:

```env
SPOTIPY_CLIENT_ID=your_spotify_client_id
SPOTIPY_CLIENT_SECRET=your_spotify_client_secret
```

---

## ⚙️ How It Works

1. User enters a message in the chatbot interface (e.g., “I'm feeling heartbroken”).
2. The backend uses **DistilBERT SST-2** to analyze the **sentiment** of the message.
3. Based on sentiment or user request, it maps to **keywords, genres, or direct entity search**.
4. Backend queries **Spotify API** to fetch relevant data.
5. Frontend dynamically renders the response with **interactive music cards**.



 📸 Screenshots

<img width="950" alt="image" src="https://github.com/user-attachments/assets/fbd1dad6-310c-4247-988b-94ad30d66c4b" />
<img width="954" alt="image" src="https://github.com/user-attachments/assets/4b4a4d1d-27df-427d-912f-4220c55ecd2b" />



 🤝 Contributions

Want to improve VORTEX or add new features like emotion-to-genre mapping or voice input? Fork the repo and create a pull request!



 📬 Contact

Developer: Saif Ahmed
Email: saifarfi1971@gmail.com
GitHub: saifahmedarfi
Spotify- https://open.spotify.com/artist/2s6wOTRvmZH4UGYNBpdIHy?si=BqQvVc8iRauYwaR4YOwJ5w&nd=1&dlsi=1d5f4f360b994c4c
YouTube- https://www.youtube.com/@saifahmedarfi
FaceBook- https://www.facebook.com/saifahmedarfi
Instagram- https://www.instagram.com/saifarfii


 ⭐️ Give a Star

If you enjoyed using VORTEX or found the idea interesting, consider leaving a ⭐️ to show support!

Thank You.......😊
