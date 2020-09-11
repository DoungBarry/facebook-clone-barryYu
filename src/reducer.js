// 未登入的用戶
export const initialState = {
  user: null,
};
export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;

//redux好難！wed 1930:中正紀念堂運動 fitfam
