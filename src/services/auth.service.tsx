import axios, { AxiosResponse } from "axios";

const API_URL = "http://localhost:8080/api/auth/";

interface User {
    username: string;
    email: string;
    password: string;
    accessToken?: string;
}

class AuthService {
    login(username: string, password: string): Promise<User> {
        return axios
            .post<User>(API_URL + "signin", {
                username,
                password,
            })
            .then((response: AxiosResponse<User>) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout(): void {
        localStorage.removeItem("user");
    }

    register(username: string, email: string, password: string): Promise<void> {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password,
        });
    }

    getCurrentUser(): User | null {
        const userString = localStorage.getItem("user");
        return userString ? JSON.parse(userString) : null;
    }
}

export default new AuthService();
