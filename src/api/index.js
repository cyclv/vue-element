import axios from 'axios';

export const getUserListPage = params => { return axios.post(`https://cnodejs.org/api/v1/topics`, params).then(res => res); };
export const userlogin = params => { return axios.get(`http://192.168.2.34/main/login/auth`, params).then(res => res); };
export const getUserList = params => { return axios.get(`https://cnodejs.org/api/v1/topics`, { params: params }).then(res => res); };

