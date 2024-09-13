interface LoginProps {
    email: string;
    password: string;
    
}

const login = async ({ email, password }: LoginProps) => {
    const url = `${import.meta.env.VITE_URL}/login`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;  

    } catch (error) {
        console.error('Error during login:', error);
        return { error: error }; 
    }
};

export { login };