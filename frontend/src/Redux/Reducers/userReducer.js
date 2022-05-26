import { ADD_NEW_USER_FAIL, ADD_NEW_USER_REQUEST, ADD_NEW_USER_SUCCESS, DELETE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOUGOUT } from "../Types/types";

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return { loading: true };
      case LOGIN_SUCCESS:
        return { laoding: false, users: action.payload };
      case LOGIN_FAIL:
        return { loading: false, message: action.payload };
      case LOUGOUT:
        return {};
      default:
        return state;
    }
  };
export const registerReducer = (state = {}, action) => {
    switch (action.type) {
      case ADD_NEW_USER_REQUEST:
        return { loading: true };
      case ADD_NEW_USER_SUCCESS:
        return { laoding: false, users: action.payload };
      case ADD_NEW_USER_FAIL:
        return { loading: false, message: action.payload };
      case LOUGOUT:
        return {};
      default:
        return state;
    }
  };
export const getUserReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_USER_REQUEST:
        return { loading: true };
      case GET_USER_SUCCESS:
        console.log(" success")

        return { laoding: false, oneuser: action.payload };
      case GET_USER_FAIL:
        console.log(" error")

        return { loading: false, msg: action.payload };
      default:
        return state;
    }
  };

  export const deleteUserReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_USER_REQUEST:
        return { loading: true };
      case DELETE_USER_SUCCESS:
        console.log(" success deleted ")

        return { loading: false, user: action.payload };
      case DELETE_USER_FAIL:
        console.log(" failed deleted ")
        return { loading: false, error: "server DELETED is down" };
      default:
        return state;
    }
  };
  