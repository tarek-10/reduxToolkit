import axios from "axios";
import { userEror, userStart, userSuccess } from "./reducers/userSlice";

export const addUser = async (user, dispatch) => {
  dispatch(userStart());

  try {
    const res = await axios.post("http://localhost:5000/user/signin", user);
    console.log("=======>", res.data.user);
    dispatch(userSuccess(res.data.user));
  } catch (error) {
    dispatch(userEror());
  }
};
