import { createContext, useState } from 'react';

import { signIn, signUp, SigninData, SignupData } from '../services/resources/user';

interface IUserDTO {
  id: string;
  firstName: string;
  lastName: string;
  accountNumber: number;
  accountDigit: number;
  wallet: number;
  email: string;
}

interface IContextData {
  user: IUserDTO;
  userSignIn: (userData: SigninData) => void;
  userSignUp: (userData: SignupData) => void;
}

export const AuthContext = createContext<IContextData>({} as IContextData);

export const AuthProvider: React.FC = ({children}) => {

  const [ user, setUser ] = useState<IUserDTO>({} as IUserDTO);

  const userSignIn = async (userData: SigninData) => {
    const {data} = await signIn(userData);
    localStorage.setItem('@Inter:Token', data.accessToken);
  }

  const userSignUp = async (userData: SignupData) => {
    const {data} = await signUp(userData);
    localStorage.setItem('@Inter:Token', data.accessToken);
  }

  return (
    <AuthContext.Provider value={{user, userSignIn, userSignUp}}>
      {children}
    </AuthContext.Provider>
  )
}