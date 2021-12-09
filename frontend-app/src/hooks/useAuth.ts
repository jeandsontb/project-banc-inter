import { useContext } from "react";

import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('Nenhum contexto encontrado');
  }

  return context;
}

export default useAuth;