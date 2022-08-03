import axiosInstance from "./";

export function login(payload) {
  return axiosInstance.post("/users/login", payload);
}

export function register(payload) {
  return axiosInstance.post("/users/register", payload);
}
