import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../Redux/courseAction";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courses);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [unenrolledCourses, setUnenrolledCourses] = useState([]);

  useEffect(() => {
    // Load enrolled courses from local storage
    const storedEnrollments = localStorage.getItem("enrollments");
    if (storedEnrollments) {
      const enrolledCourseIds = JSON.parse(storedEnrollments);
      const enrolled = courses.filter((course) =>
        enrolledCourseIds.includes(course.id)
      );
      setEnrolledCourses(enrolled);
    }

    // Load unenrolled courses
    const unenrolled = courses.filter(
      (course) => !enrolledCourses.includes(course)
    );
    setUnenrolledCourses(unenrolled);

    dispatch(fetchCourses());
  }, [dispatch, courses]);

  const handleEnrollCourse = (courseData) => {
    if (!enrolledCourses.includes(courseData)) {
      // Add the course to the enrolled courses state
      setEnrolledCourses([...enrolledCourses, courseData]);

      // Update the local storage
      const updatedEnrollments = enrolledCourses.map((course) => course.id);
      updatedEnrollments.push(courseData.id);
      localStorage.setItem("enrollments", JSON.stringify(updatedEnrollments));
    }
  };

  return (
    <>
      <div className="justify-around w-full mx-auto h-auto py-8 bg-black">
        <Link to={"/"}>
          <button className="ml-4 bg-[white] rounded px-3 py-1 text-[black]">
            All Courses
          </button>
        </Link>
      </div>

      <div className="student-dashboard py-2 px-2">
        <div className=" block md:flex">
          <div className="w-[98%] md:w-[70%]">
            <div>
              <h1 className="font-bold text-xl">Your Courses</h1>

              {enrolledCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                  {enrolledCourses.map((course) => (
                    <div
                      key={course.id}
                      className="w-90 mx-auto p-8 cursor-pointer shadow-md hover:shadow-xl"
                    >
                      <div className="rounded-lg overflow-hidden">
                        <img
                          src={course.thumbnail}
                          alt=""
                          className="w-[400px] h-[200px] object-cover"
                        />
                      </div>
                      <div>
                        <h1 className="text-[20px] font-bold">{course.name}</h1>
                        <p className="text-[19px] font-medium text-[grey]">
                          <span className="text-black text-[16px]">by</span>{" "}
                          {course.instructor}
                        </p>
                        <div className="py-[0.5rem]">
                          <h1 className="mb-[0.5rem] font-medium text-[1rem]">
                            Progress:{" "}
                          </h1>
                          <div className="progress-bar">
                            <div
                              className="progress-bar-inner"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <h1 className="font-bold mt-[2rem] text-center m-auto text-2xl">
                    Click Enroll button to enroll some courses
                  </h1>
                  <img
                    src="https://png.pngtree.com/png-vector/20221227/ourmid/pngtree-having-bad-mark-in-education-concept-png-image_6540074.png"
                    alt=""
                    className="m-auto"
                  />
                </div>
              )}
            </div>
          </div>
          <div className=" mt-5 md:mt-0 w-[98%] md:w-[30%]">
            <h1 className=" font-bold text-xl">All Courses</h1>
            <div className="h-[90vh] overflow-y-auto">
              {unenrolledCourses.map((course) => (
                <div
                  key={course.id}
                  className="w-90 mx-auto p-8 cursor-pointer shadow-md hover:shadow-xl"
                >
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={course.thumbnail}
                      alt=""
                      className="w-230 h-[50px] object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-[18px] font-medium ">{course.name}</h1>
                    <p className="text-[17px] font-medium">
                      Instructor: {course.instructor}
                    </p>
                    <button
                      onClick={() => handleEnrollCourse(course)}
                      className={`mt-2 px-3 py-1 rounded ${
                        enrolledCourses.some(
                          (enrolledCourse) => enrolledCourse.id === course.id
                        )
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {enrolledCourses.some(
                        (enrolledCourse) => enrolledCourse.id === course.id
                      )
                        ? "Enrolled"
                        : "Enroll"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
