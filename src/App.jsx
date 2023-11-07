import { useState } from "react";
import "./App.css";
import CourseList from "./Components/courseList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleCourse from "./Components/singleCourse";
import StudentDashboard from "./Components/studentDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/course/:id" element={<SingleCourse />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
