import actions from '../actions';
const { authActions } = actions;

const initialState = {
  isLogin: false,
  accessToken: '',
  loader: false
};

export default function rootReducer(state = initialState, action){
  switch (action.type) {
    case authActions.LOGIN_REQUEST:
      return {
        ...state,
        loader: true
      };
    case authActions.LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: action.isLogin,
        accessToken: action.accessToken,
        loader: false
      };
    case authActions.LOGOUT:
      return {
          isLogin:false,
          accessToken:null
      };
    default:
      return state;
  }
};
