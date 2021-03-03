import { UPDATE_USERNAME,GET_USERNAME } from "../const/index";
export const updateUsername = (content) => {
    return {
      type: UPDATE_USERNAME,
      content,
    };
  };
  export const getUsername = () => {
    return {
      type: GET_USERNAME,
    };
  };