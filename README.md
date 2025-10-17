# Body Prakriti Detector

### Course: Indian Health, Wellness and Psychology (7th Semester)  
### Created by: Yasvi Chokhawala  
### Institute: Asha M. Tarsadia Institute of Computer Science and Technology (AMTICS), Uka Tarsadia University  

---

## Project Description

The **Body Prakriti Detector** is a **React + Node.js web application** that helps identify an individual's **Ayurvedic body type (Prakriti)** — **Vata**, **Pitta**, or **Kapha** — based on responses to a health and personality questionnaire.

According to Ayurveda, *Prakriti* determines the physical, mental, and emotional characteristics of an individual. This project blends ancient Indian wellness concepts with modern web technology to provide an interactive and insightful self-assessment tool.

Developed as part of the course **“Indian Health, Wellness and Psychology”**, this project demonstrates how digital systems can support traditional health philosophies.

---

## Features

- User-friendly web interface built with **React**
- Backend logic built with **Node.js** and **Express**
- Real-time analysis of questionnaire responses
- Displays dominant Prakriti type: Vata, Pitta, or Kapha
- Suggests wellness and lifestyle tips based on result
- Clean, modular, and easily extensible codebase

---

## Tech Stack

**Frontend:** React.js, HTML, CSS, JavaScript  
**Backend:** Node.js, Express.js

---

``````(## Project Structure
body-prakriti-detector/
│
├── client/ # React frontend
│ ├── public/
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Questionnaire & Result pages
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
├── server/ # Node.js backend
│ ├── routes/
│ │ └── prakritiRoutes.js # API routes
│ ├── controllers/
│ │ └── prakritiController.js
│ ├── server.js # Express server setup
│ └── package.json
│
├── README.md # Project documentation
└── docs/
└── documentation.md # Detailed conceptual report (optional)
``````)
# Install Dependencies

Backend setup:
cd body-prakriti-detector/server
npm install

Frontend setup:
cd ../client
npm install

# How to Run the Project?

Step 1: Start the Backend Server
cd server
npm start

This runs the Node.js server on a port (e.g., http://localhost:5000).

Step 2: Start the Frontend (React App)
Open a new terminal and run:
cd client
npm start

This runs the React app on another port (e.g., http://localhost:3000).

Step 3: View the App
Open your browser and go to:
http://localhost:3000

You can now answer the questionnaire and view your Prakriti result dynamically.

# Working Logic

1. Questionnaire Input:
The user answers questions related to physical, mental, and emotional traits.

2. Data Processing:
The frontend sends user responses to the backend API using HTTP requests.

3. Classification Logic:
The Node.js backend evaluates the responses using predefined score weights for Vata, Pitta, and Kapha.

4. Result Response:
The backend returns the dominant Prakriti type with health and lifestyle suggestions, displayed on the React UI.

# Example Output

Input:
User answers 15 lifestyle and personality-based questions.

Output:
Your dominant Prakriti is: Vata
You are creative, active, and energetic.  
Recommended: Eat warm foods, follow a grounded routine, and stay warm.

# Conceptual Background

In Ayurveda, every individual is a unique combination of the three doshas:

Vata (Air + Ether) – Creative, quick, light, and flexible

Pitta (Fire + Water) – Ambitious, focused, and strong

Kapha (Earth + Water) – Calm, grounded, and steady

The balance or imbalance among these defines one’s wellness.
This project brings this assessment online, making Ayurvedic analysis accessible and engaging.

# Future Enhancements

1. Connect to a database (MongoDB) to store user records

2. Integrate Machine Learning for automated Prakriti prediction

3. Develop a mobile-friendly version using React Native

4. Add personalized wellness recommendations and dietary charts

# References

1. Charaka Samhita – Ayurvedic text on body constitution

2. Ministry of AYUSH, Govt. of India

3. Research papers on computational Ayurveda and Prakriti detection

4. Course content from Indian Health, Wellness and Psychology (AMTICS)

# License

This project is developed for academic purposes only.
Free to use, learn, and adapt for non-commercial or educational use.

# Acknowledgments

Gratitude to the faculty of AMTICS, Uka Tarsadia University, for guidance and encouragement in bridging Indian health wisdom with modern computing through interdisciplinary learning.
