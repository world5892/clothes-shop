import { createContext, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

type AuthContextProps = {
  children: React.ReactNode;
};

type User = {
  name: string;
  email: string;
  password: string;
  avatar: string;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
};

type AuthAction =
  | {
      type: 'login';
      payload: User;
    }
  | {
      type: 'logout';
    };

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const AuthContext = createContext<{
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => string;
  logout: () => void;
}>({
  user: initialState.user,
  isAuthenticated: initialState.isAuthenticated,
  login: () => '',
  logout: () => undefined,
});

function reducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case 'logout':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

const FAKE_USER = {
  name: 'Mark',
  email: 'mark@example.com',
  password: 'test',
  avatar: 'https://i.pravatar.cc/100?u=zz',
};

function AuthProvider(props: AuthContextProps) {
  const { children } = props;

  const [{ user, isAuthenticated }, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  function login(email: string, password: string) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: 'login', payload: FAKE_USER });
      navigate('/kategorie/wszystkie');
      return '';
    } else {
      return 'Niepoprawny email i/lub hasło';
    }
  }

  function logout() {
    dispatch({ type: 'logout' });
    navigate('/');
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('AuthContext was used outside AuthProvider');

  return context;
}

export { AuthProvider, useAuth };
