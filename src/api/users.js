import axiosInstance from './';

export function login(payload) {
    return axiosInstance.post('/users/login', payload);
}