import axios from "axios";
const apiBase = "http://backend:8080";

export const Login = async (username: string, password: string) => {
  try {
    const response = await axios.post<any>(`${apiBase}/api/auth/login`, {
      userName: username,
      password: password,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response);
  }
};
export const Register = async (
  email: string,
  userName: string,
  password: string,
  role: string
) => {
  try {
    const response = await axios.post<any>(`${apiBase}/api/auth/register`, {
      userName: userName,
      email: email,
      password: password,
      role: role,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response);
  }
};
