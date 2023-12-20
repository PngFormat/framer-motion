interface User {
    accessToken?: string;
}

export default function authHeader(): Record<string, string> {
    const user: User | null = JSON.parse(localStorage.getItem('user') || '{}');

    if (user && user.accessToken) {
        return { 'x-access-token': user.accessToken };
    } else {
        return {};
    }
}
