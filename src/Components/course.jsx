import React from "react";

const Course = ({ course }) => {
  return (
    <div className="w-90 mx-auto p-8 cursor-pointer shadow-md hover:shadow-xl">
      <div className="rounded-lg overflow-hidden ">
        <img
          src={course.thumbnail}
          alt=""
          className="w-230 h-[200px] object-cover"
        />
      </div>
      <h1 className="text-xl font-bold mt-2 ">{course.name}</h1>
      <p className="text-[17px] font-medium text-[grey]">
        Instructor: {course.instructor}
      </p>
      <p className="text-[17px] font-medium">Duration: {course.duration}</p>
    </div>
  );
};

export default Course;
