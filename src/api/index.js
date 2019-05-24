import axios from 'axios';

export const getUserListPage = params => { return axios.post(`https://cnodejs.org/api/v1/topics`, params).then(res => res); };
export const getUserList = params => { return axios.get(`https://cnodejs.org/api/v1/topics`, { params: params }); };