import { axiosInstance } from '../config';
import { useState, useRef } from 'react';
import './login.css';

import CancelIcon from '@mui/icons-material/Cancel';

const Login = ({ setShowLogin, myStorage, setCurrentUser }) => {
  const [failure, setFailure] = useState(false);
  const nameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: nameRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const res = await axiosInstance.post('/users/login', user);
      setCurrentUser(res.data.username);
      myStorage.setItem('user', res.data.username);
      setShowLogin(false);
    } catch (err) {
      setFailure(true);
    }
  };

  return (
    <div className='loginContainer'>
      <div className='logo'>Login</div>

      <form onSubmit={handleSubmit}>
        <input autoFocus type='text' placeholder='username' ref={nameRef} />
        <input type='password' placeholder='password' ref={passwordRef} />
        <button className='loginBtn' type='submit'>
          Login
        </button>

        {failure && (
          <span className='failure'>
            Something went wrong. Please try again!
          </span>
        )}
      </form>

      <CancelIcon className='loginCancel' onClick={() => setShowLogin(false)} />
    </div>
  );
};

export default Login;
