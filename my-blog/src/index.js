import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAFHzM9kJ5bcc9kjFq-eFLYiKRje4NsFpo",
  authDomain: "my-react-blog-c72ab.firebaseapp.com",
  projectId: "my-react-blog-c72ab",
  storageBucket: "my-react-blog-c72ab.appspot.com",
  messagingSenderId: "712961342621",
  appId: "1:712961342621:web:4164d4e6cf4c3dd467a874",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
