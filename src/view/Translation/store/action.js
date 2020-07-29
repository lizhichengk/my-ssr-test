import axios from 'axios';
import { CHANGE_TRANSLATION_LIST } from './constants';

const changeList = (list) => {
  return {
    type: CHANGE_TRANSLATION_LIST,
    list
  }
}

export const getTranslationList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/translations.json')
      .then((res) => {
        if (res.data.success) {
          const list = res.data.data;
          dispatch(changeList(list));
        } else {
          dispatch(changeList([]));
        }
      })
  }
}