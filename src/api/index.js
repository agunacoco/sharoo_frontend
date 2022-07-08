import axios from 'axios';
import setInterceptors from './common/interceptors';

function createInstance() {
    const instance = axios.create({
        baseURL: 'http://localhost:3000',
        withCredentials: true,
    });

    return setInterceptors(instance)
}

const instance = createInstance();

export default instance;