import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeCategories from "./components/category/HomeCategories";
import { TodosProvider } from "./contexts/todos-context";
import { CategoryProvider } from "./contexts/categories-context";
import Hometodos from "./components/todos/Home";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAUUIm5UmBQb8I_drq4m4OvZQnWHWPwcs",
  authDomain: "todo-app-8fc82.firebaseapp.com",
  projectId: "todo-app-8fc82",
  storageBucket: "todo-app-8fc82.appspot.com",
  messagingSenderId: "574371790760",
  appId: "1:574371790760:web:6b80f1f826f6f327e7e79d",
  measurementId: "G-7QR7NRNMR2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div>
      <TodosProvider>
        <CategoryProvider>
          <Routes>
            <Route path="/" element={<HomeCategories></HomeCategories>}></Route>
            <Route path="/todos" element={<Hometodos></Hometodos>}></Route>
          </Routes>
        </CategoryProvider>
      </TodosProvider>
    </div>
  );
}

export default App;
