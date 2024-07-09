import { useAuth } from '../contexts/FakeAuthContext';
import '../css/components/User.css';

function User() {
  const { user } = useAuth();

  return (
    <div className="user">
      <div className="user__img-wrapper">
        <img src={user?.avatar} className="user__img" alt="User avatar" />
      </div>
    </div>
  );
}

export default User;
