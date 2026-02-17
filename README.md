# ⛈️ SKY_CAST - Real-Time Weather Dashboard

> **Status:** Online & Functional via Vercel.
> A modern, glassmorphism-styled weather dashboard connecting to OpenWeatherMap API.

🔗 **Live Demo:** (https://sky-cast-eight-beryl.vercel.app/)



## ⚡ The Tech Stack
| Tech | Role |
| :--- | :--- |
| **React 18** | UI Library |
| **TypeScript** | Type Safety & Logic |
| **Tailwind CSS** | Glassmorphism & Responsive Design |
| **Axios** | API Requests & Data Fetching |
| **OpenWeatherMap** | Real-time Data Source |

## 🚀 Key Features
* **Real-Time Data:** Fetches live temperature, humidity, wind speed, and "feels like" metrics.
* **Smart Error Handling:** Friendly UI feedback when a city is not found or API fails.
* **Glassmorphism UI:** Modern, translucent aesthetics using Tailwind's backdrop-blur.
* **Secure Architecture:** API Keys protected via Environment Variables (`.env`).
* **Input Validation:** Prevents empty searches and handles keyboard events (Enter key).

## 🛠️ How to Run Locally
Since this project uses sensitive API Keys, you need to set up your own environment.

1.  Clone the repo:
    ```bash
    git clone [https://github.com/Henrique-Jean/sky-cast.git](https://github.com/Henrique-Jean/sky-cast.git)
    cd sky-cast
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  **Setup Environment Variables:**
    Create a `.env` file in the root directory and add your OpenWeatherMap Key:
    ```env
    VITE_API_KEY=your_api_key_here
    ```
4.  Start the app:
    ```bash
    npm run dev
    ```

## 🧠 Lessons Learned
* **API Integration:** Mastered `async/await` patterns with Axios to handle external data.
* **State Management:** Used `useState` to handle loading states (`isLoading`), data, and errors.
* **Security:** Learned the importance of `.env` files to keep keys out of public repositories.

---
*Developed by Henrique Jean.*