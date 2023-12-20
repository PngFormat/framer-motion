import axios, { AxiosPromise } from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
    getPublicContent(): AxiosPromise {
        return axios.get(API_URL + 'all');
    }

    getUserBoard(): AxiosPromise {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }

    getModeratorBoard(): AxiosPromise {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
    }

    getAdminBoard(): AxiosPromise {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }
}

export default new UserService();
