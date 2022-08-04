import axios from "axios";
import setInterceptors from "./common/interceptors";

function createInstance() {
  const instance = axios.create({
    baseURL: "http://localhost:3000",
    // cors에서는 기본적으로 쿠키를 request headers에 넣어주지 않는다. 
    withCredentials: true,
  });
 
  return setInterceptors(instance);
}

const instance = createInstance();

export default instance;
