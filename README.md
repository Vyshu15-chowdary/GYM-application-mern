# GYM-application-mern
# 🏋️ Gym App

A full-stack **Gym Application** built using the **React.js, Express.js, and Node.js**. This project includes core features such as user interaction forms, email functionality using **Nodemailer**, and a **BMI (Body Mass Index) calculator**. The application is responsive, user-friendly, and deployable on cloud platforms like **Render**.

---

## 🚀 Tech Stack

- **Frontend**: React.js  
- **Backend**: Node.js, Express.js  
- **Email Integration**: Nodemailer with App Password  
- **API Testing**: Thunder Client / Postman  

---

## ✨ Features

- 🧾 **Contact Form with Email Notification**: Sends user messages directly to your Gmail using Nodemailer.
- 🧮 **BMI Calculator**: Users can input their weight and height to get real-time BMI feedback.
- 🧱 **Modular Backend**: Clean API design using Express with separated routes and controllers.
- 📬 **App Password & Secure Mail Setup**: Configured Gmail authentication using secure app password.
- 🌐 **Deployed on Render**: Live and accessible with HTTPS support.

---

## 🧪 Challenges Tackled

While developing this app, I resolved several backend errors and refined my debugging skills:

- ❌ **404 Not Found**: Ensured all API routes were correctly defined and matched client requests.
- 💥 **500 Internal Server Error**: Handled exceptions using try-catch blocks and meaningful error responses.
- 🧍 **Body Undefined**: Resolved body parsing issues by configuring `express.json()` and `express.urlencoded()` correctly.

---

## 🧠 Learnings

- Learned to integrate secure mailing features using Nodemailer with Gmail’s app password.
- Gained hands-on experience in handling server-side errors and middleware setup.
- Improved skills in API design and frontend-backend integration.
- Understood the importance of user feedback tools like BMI calculators to increase interactivity.

---

## 🔧 Installation & Run Locally

npm install       # for backend
cd Frontend && npm install  # for frontend

Set up environment variables (.env file):

PORT=4000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Run backend
npm run dev

# In another terminal
cd Frontend
npm start

📩 Contact
Feel free to connect with me or reach out if you want to collaborate!

Developer: Vyshnavi Yendluri
LinkedIn: www.linkedin.com/in/vyshnaviyendluri
 Live Link : https://gym-app-frontend-j1rz.onrender.com/

