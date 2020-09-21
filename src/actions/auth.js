const authActions = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  loginRequest: data => {
    return {
      action: authActions.LOGIN_REQUEST,
      data
    };
  },
  loginSuccess: () => {
    return {
      action: authActions.LOGIN_SUCCESS
    };
  },
  logout: () => {
    return {
      action: authActions.LOGOUT
    };
  }
};

export default authActions;