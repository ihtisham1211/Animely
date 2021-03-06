import axios from "axios";
import { url } from ".././utils/Proxy";

//**********************************
//***********getOngoingSeries
//**********************************
export const getOngoingSeries = () => async (dispatch) => {
  try {
    const res = await axios.get(url + "/OngoingSeries");
    dispatch({
      type: "OngoingSeries",
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
//**********************************
//***********getRecentlyAddedSeries
//**********************************
export const getRecentlyAddedSeries = () => async (dispatch) => {
  try {
    const res = await axios.get(url + "/RecentlyAddedSeries");
    dispatch({
      type: "RecentlyAddedSeries",
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
//**********************************
//***********getRecentReleaseEpisodes
//**********************************
export const getRecentReleaseEpisodes = () => async (dispatch) => {
  try {
    const res = await axios.get(url + "/RecentReleaseEpisodes/1");
    dispatch({
      type: "RecentReleaseEpisodes",
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
//**********************************
//***********getPopular
//**********************************
export const getPopular = () => async (dispatch) => {
  try {
    const res = await axios.get(url + "/Popular/1");
    dispatch({
      type: "Popular",
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
