import axios from 'axios';
import clinetAxios from '../../../client/request';
import serverAxios from '../../../server/request';
import { CHANGE_HOME_LIST } from './constants';

const changeList = (list) => {
  return {
    type: CHANGE_HOME_LIST,
    list
  }
}

export const getHomeList = (server) => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/news.json')
      .then((res) => {
        const list = res.data.data;
        dispatch(changeList(list));
      })
  }
}