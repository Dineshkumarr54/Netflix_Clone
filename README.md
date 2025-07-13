# 🎬 Netflix Clone with React + TMDB

A responsive clone of the Netflix web app built using **React**, **TMDB API**, and **Vite**.  
Users can view trending movies, top-rated content, and watch trailers via YouTube.

![Screenshot](./public/preview-desktop.png)

---

## 🚀 Features

- 🔍 Browse trending, top-rated & genre-specific movies
- 🎬 Watch trailers inside modal overlays
- 📱 Fully responsive for all screen sizes
- 🧠 Uses TMDB API and YouTube trailers
- ⚡ Built with React, Vite, and Axios

---

## 🛠️ Tech Stack

| Tech       | Purpose                  |
|------------|---------------------------|
| React      | Frontend UI               |
| Vite       | Fast dev server/build tool|
| TMDB API   | Movie data                |
| Axios      | HTTP requests             |
| react-youtube | YouTube player          |
| movie-trailer | Get trailer URL by name |

---

## 🌐 Live Demo

> You can deploy this using [Vercel](https://vercel.com/) or [Netlify](https://netlify.com)

---

## 🔧 Setup Instructions

```bash
# 1. Clone this repository
git clone https://github.com/yourusername/netflix-clone.git
cd netflix-clone

# 2. Install dependencies
npm install

# 3. Create .env file in root and add your TMDB API key
VITE_TMDB_API_KEY=your_tmdb_key_here

# 4. Run the development server
npm run dev
