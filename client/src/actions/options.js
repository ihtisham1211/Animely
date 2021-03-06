import axios from "axios";
import { url } from ".././utils/Proxy";

//**********************************
//***********getOngoingSeries
//**********************************
export const setloading = () => async (dispatch) => {
  try {
    dispatch({
      type: "Loading",
    });
  } catch (error) {
    console.log(error);
  }
};