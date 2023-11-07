import axios from "axios";

export const FETCH_COURSES_REQUEST = "FETCH_COURSES_REQUEST";
export const FETCH_COURSES_SUCCESS = "FETCH_COURSES_SUCCESS";
export const FETCH_COURSES_FAILURE = "FETCH_COURSES_FAILURE";
export const MARK_COURSE_AS_COMPLETED = "MARK_COURSE_AS_COMPLETED";

export const fetchCoursesRequest = () => ({
  type: FETCH_COURSES_REQUEST,
});

export const fetchCoursesSuccess = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses,
});

export const fetchCoursesFailure = (error) => ({
  type: FETCH_COURSES_FAILURE,
  payload: error,
});

export const markCourseAsCompleted = (courseId) => {
  return {
    type: MARK_COURSE_AS_COMPLETED,
    payload: courseId,
  };
};

export const fetchCourses = () => {
  return (dispatch) => {
    dispatch(fetchCoursesRequest());
    axios
      .get("https://sore-garment-tick.cyclic.app/api/courses")
      .then((response) => {
        const courses = response.data;
        dispatch(fetchCoursesSuccess(courses));
      })
      .catch((error) => {
        dispatch(fetchCoursesFailure(error));
      });
  };
};

// courseAction.js

export const fetchCoursesByQuery = (query) => {
  return (dispatch) => {
    dispatch(fetchCoursesRequest());
    axios
      .get(`https://sore-garment-tick.cyclic.app/api/courses?q=${query}`)
      .then((response) => {
        const courses = response.data;
        dispatch(fetchCoursesSuccess(courses));
      })
      .catch((error) => {
        dispatch(fetchCoursesFailure(error));
      });
  };
};
