import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const savedValue = localStorage.getItem(key);

            return savedValue ? JSON.parse(savedValue) : initialValue;
        } catch (error) {
            console.error(`Error reading "${key}" from localStorage:`, error);
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}