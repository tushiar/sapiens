import axios from "axios";
import { CLEAR_ALERT, THEME_UPDATED } from "./types";

//Get Posts
export const updateTheme = (theme) => async (dispatch) => {
  try {
    await axios.put("/api/auth/theme", { theme });
    dispatch({
      type: THEME_UPDATED,
      payload: {
        msg: "Theme updated Successfully",
        theme,
      },
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
      });
    }, 3000);
  } catch (error) {
    dispatch({
      type: THEME_UPDATED,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
