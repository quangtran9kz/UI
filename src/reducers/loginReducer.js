import {
    UPDATE_USERNAME,GET_USERNAME
} from "../const/index";
const loginReducers = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_USERNAME:
            const generateID = new Date().getTime();
            state.user = {
                id: generateID,
                username: action.content
            };
            return state;
        case GET_USERNAME:
            return state;
        default:
            return state;
    }
}
export default loginReducers;