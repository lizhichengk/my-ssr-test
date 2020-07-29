import { CHANGE_LOGIN } from './constants';

const changeLogin = (login) => ({
  type: CHANGE_LOGIN,
  login
})

export const getHeaderInfo = (server) => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/isLogin.json')
      .then((res) => {
        dispatch(changeLogin(res.data.data.login));
      })
  }
}

export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/login.json')
      .then((res) => {
        dispatch(changeLogin(true));
      })
  }
}

export const logout = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/logout.json')
      .then((res) => {
        dispatch(changeLogin(false));
      })
  }
}