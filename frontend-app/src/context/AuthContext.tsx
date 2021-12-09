import { createContext, useState } from 'react';

import { signIn, signUp, SigninData, SignupData, me, IUserDTO } from '../services/resources/user';

interface IContextData {
  user: IUserDTO;
  userSignIn: (userData: SigninData) => Promise<IUserDTO>;
  userSignUp: (userData: SignupData) => Promise<IUserDTO>;
  getCurrentUser: () => Promise<IUserDTO>;
}

export const AuthContext = createContext<IContextData>({} as IContextData);

export const AuthProvider: React.FC = ({children}) => {

  const [ user, setUser ] = useState<IUserDTO>(() => {
    const user = localStorage.getItem('@Inter:User');

    if(user) {
      return JSON.parse(user);
    }

    return {} as IUserDTO;
  });



  const userSignIn = async (userData: SigninData) => {
    const {data} = await signIn(userData);

    if(data?.status === 'error') {
      return data;
    }
    
    if(data.accessToken) {
      localStorage.setItem('@Inter:Token', data.accessToken);
    }

    const user = await getCurrentUser();
    return user;
  }

  const userSignUp = async (userData: SignupData) => {
    const {data} = await signUp(userData);
    
    if(data.accessToken) {
      localStorage.setItem('@Inter:Token', data.accessToken);
    }

    const user = await getCurrentUser();
    return user
  }

  const getCurrentUser = async () => {
    const {data} = await me();
    setUser(data);
    localStorage.setItem('@Inter:User', JSON.stringify(user));
    return data;
  }

  return (
    <AuthContext.Provider value={{user, userSignIn, userSignUp, getCurrentUser}}>
      {children}
    </AuthContext.Provider>
  )
}