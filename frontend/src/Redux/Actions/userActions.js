import axios from "axios";
import { ADD_NEW_USER_FAIL, ADD_NEW_USER_REQUEST, ADD_NEW_USER_SUCCESS, DELETE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOUGOUT } from "../Types/types";
  


  export const register = (newUser) => async (dispatch) => {
    try {
      dispatch({ type: ADD_NEW_USER_REQUEST });
      const { data } = await axios.post(
        "user/adduser",
        newUser
      );
     
      dispatch({ type: ADD_NEW_USER_SUCCESS, payload: data });
  
    } catch (error) {
      
      dispatch({ type: ADD_NEW_USER_FAIL});
    }
  };
  


  export const getNewUser = (id) => async (dispatch) => {
    try {
      dispatch({ type: GET_USER_REQUEST });
      const { data } = await axios.get(`http://localhost:5001/api/user/${id}`);
      console.log(data)
      dispatch({ type: GET_USER_SUCCESS, payload: data });
    } catch (error) {
  
      dispatch({ type: GET_USER_FAIL });
    }
  };
  

//   export const updateLawyer = (id,newdesc) => async (dispatch,getState) => {
//     try {
//       dispatch({ type: UPDATE_LAWYER_REQUEST });
//       const {loginDetails:{user}}=getState()
//       const config={headers:{auth:user.token}}
//       const { data } = await axios.put(`http://localhost:4000/Lawyer/${id}`,newdesc,config);
//       dispatch({ type: UPDATE_LAWYER_SUCCESS, payload: data });
//     } catch (error) {
  
//       dispatch({ type: UPDATE_LAWYER_FAIL });
//     }
//   };
  
  export const deleteUser = (id) => async (dispatch,getState) => {
    try {
      dispatch({ type: DELETE_USER_REQUEST });
      const {loginDetails:{user}}=getState()
      const config={headers:{auth:user.token}}
      
      console.log(config)
      const { data } = await axios.delete(`http://localhost:5001/api/user/deleteuser/${id}`,config);
      console.log(data)
      localStorage.removeItem("auth")
  
  
      dispatch({ type: DELETE_USER_SUCCESS, payload: data });
    } catch (error) {
  
      dispatch({ type: DELETE_USER_FAIL });
    }
  };
  
  
 
  
  
  
  
  export const login = (userCred) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
      const { data } = await axios.post(
        `/user/login`,
        userCred
      );
      localStorage.setItem("auth", JSON.stringify(data));
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: "bad cred" });
    }
  };

//   export const loginn(blabla)=>{
//       console.log(loginn("blabla"))
//   }
  //arrow function
  //blabla= param
  //clg(loginn(arg))

  export const logout = () => (dispatch) => {
    dispatch({ type: LOUGOUT });
    localStorage.removeItem("auth");
  };
  
  