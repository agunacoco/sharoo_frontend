import axiosInstance from '.';

export function getHouses() {
    return axiosInstance.get('/houses');
}