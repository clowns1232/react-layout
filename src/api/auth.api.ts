import { SignupProps } from "../pages/Signup";
import { httpClient } from "./http";

interface LoginResponse {
  token: string;
}

export const signup = async (userData: SignupProps) => {
  const res = await httpClient.post("/users/signup", userData);
  return res.data;
};

export const resetRequest = async (data: SignupProps) => {
  const res = await httpClient.post("/users/reset", data);
  return res.data;
};
export const resetPassword = async (data: SignupProps) => {
  const res = await httpClient.put("/users/reset", data);
  return res.data;
};
export const login = async (data: SignupProps) => {
  const res = await httpClient.post<LoginResponse>("/users/signin", data);
  return res.data;
};
