import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post("/api/auth/login", { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const register = async (obj: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/UserRegistration/user-register`, obj);
    return response.data;
  } catch (error) {
    throw error;
  }
};