import api from "../api";

export interface SigninData {
  email: string;
  password: string;
}

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const signIn = async (data: SigninData) => {
  const result = await api.post('/user/signin', data);
  return result;
} 

const signUp = async (data: SignupData) => {
  const result = await api.post('/user/signup', data);
  return result;
}

const me = async () => {
  const result = await api.get('/user/me');
  return result;
}

export {signIn, signUp, me};