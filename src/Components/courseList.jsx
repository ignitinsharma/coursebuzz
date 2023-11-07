import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses, fetchCoursesByQuery } from "../Redux/courseAction";
import { Link } from "react-router-dom";
import Course from "./course";

const CourseList = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courses);
  console.log(courses);

  useEffect(() => {
    if (query) {
      dispatch(fetchCoursesByQuery(query));
    } else {
      dispatch(fetchCourses());
    }
  }, [query, dispatch]);

  return (
    <div>
      <div className="block w-full mx-auto h-auto py-8 bg-black md:flex md:justify-around md:px-3">
        <h2 className="text-[white] font-medium text-[1.4rem]">CourseBuzz</h2>
        <input
          value={query}
          type="text"
          placeholder="Search.. (e.g., course name, instructor, "
          className="px-1 py-0.5 pl-4 w-[15rem] m-auto my-2 md:px-1 md:w-[20rem]"
          onChange={(e) => setQuery(e.target.value)}
        />

        <p></p>
        <Link to={"/dashboard"}>
          <button className="mt-2 bg-[white] rounded px-3 py-1 text-[black] md:mt-0 ">
            Dashboard
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-x-2 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Link key={course.id} to={`course/${course.id}`}>
            <Course course={course} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
