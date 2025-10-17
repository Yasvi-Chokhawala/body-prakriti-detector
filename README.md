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

## Project Structure
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

