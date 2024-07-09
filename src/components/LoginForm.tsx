import { useEffect, useState } from 'react';
import Button from './Button';
import { useAuth } from '../contexts/FakeAuthContext';
import Message from './Message';
import '../css/components/LoginForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState('');

  const { login } = useAuth();

  useEffect(() => {
    if (validation) {
      const timer = setTimeout(() => setValidation(''), 4000);

      return () => clearTimeout(timer);
    }
  }, [validation]);

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const error = login(email, password);
    if (error) setValidation(error);
  }

  return (
    <>
      <form className="login-form" onSubmit={handleFormSubmit}>
        <div className="login-form__group mb-2">
          <label htmlFor="email" className="login-form__label mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            className="login-form__input"
            placeholder="mark@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login-form__group mb-5">
          <label htmlFor="password" className="login-form__label">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            className="login-form__input"
            placeholder="test"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button type="submit" className="btn__primary">
          Zaloguj się
        </Button>
      </form>
      {validation && <Message text={validation} result="failure" />}
    </>
  );
}

export default LoginForm;
