import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
  MARK_COURSE_AS_COMPLETED,
} from "./courseAction";

const initialState = {
  courses: [],
  loading: false,
  error: null,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: action.payload,
      };
    case FETCH_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case MARK_COURSE_AS_COMPLETED:
      return {
        ...state,
        courses: state.courses.map((course) =>
          course.id === action.payload ? { ...course, completed: true } : course
        ),
      };
    default:
      return state;
  }
};

export default courseReducer;
