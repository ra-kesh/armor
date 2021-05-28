export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REQUEST":
      return { loading: true };
    case "USER_REQUEST_FAIL":
      return { loading: false, error: action.payload };
    case "USER_LOGIN":
      return { loading: false, userInfo: action.payload };
    case "USER_REGISTER":
      return { loading: false, userInfo: action.payload };
    case "USER_LOGOUT":
      return {};
    default:
      return state;
  }
};

// export const userDetailsReducer = (state = { user: {} }, action) => {
//   switch (action.type) {
//     case USER_DETAILS_REQUEST:
//       return { ...state, loading: true };
//     case USER_DETAILS_SUCCESS:
//       return { loading: false, user: action.payload };
//     case USER_DETAILS_FAIL:
//       return { loading: false, error: action.payload };
//     case USER_DETAILS_RESET:
//       return { user: {} };
//     default:
//       return state;
//   }
// };

// export const userUpdateProfileReducer = (state = {}, action) => {
//   switch (action.type) {
//     case USER_UPDATE_PROFILE_REQUEST:
//       return { loading: true };
//     case USER_UPDATE_PROFILE_SUCCESS:
//       return { loading: false, success: true, userInfo: action.payload };
//     case USER_UPDATE_PROFILE_FAIL:
//       return { loading: false, error: action.payload };
//     case USER_UPDATE_PROFILE_RESET:
//       return {};
//     default:
//       return state;
//   }
// };
