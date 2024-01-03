import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

interface User {
    username: string;
    password: string;
}

class AuthService {
    private userKey = 'user';

    login(username: string, password: string): boolean {
        const validUser: User = { username: 'testuser', password: 'password' };

        if (username === validUser.username && password === validUser.password) {
            localStorage.setItem(this.userKey, JSON.stringify(validUser));
            return true;
        }

        return false;
    }

    logout(): void {
        localStorage.removeItem(this.userKey);
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem(this.userKey);
    }

    getCurrentUser(): User | null {
        const userString = localStorage.getItem(this.userKey);
        return userString ? JSON.parse(userString) : null;
    }
}

export default new AuthService();