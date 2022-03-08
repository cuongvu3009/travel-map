import { axiosInstance } from '../config';
import { useState, useRef } from 'react';
import './register.css';

import CancelIcon from '@mui/icons-material/Cancel';

const Register = ({ setShowRegister }) => {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      username: nameRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value,
    };

    try {
      await axiosInstance.post('/users/register', newUser);
      setFailure(false);
      setSuccess(true);
    } catch (error) {
      setFailure(true);
    }
  };

  return (
    <div className='registerContainer'>
      <div className='logo'>Register Account</div>

      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='username' ref={nameRef} />
        <input type='email' placeholder='email' ref={emailRef} />
        <input type='password' placeholder='password' ref={passwordRef} />
        <button className='registerBtn'>Register</button>
        {success ? (
          <span className='success'>
            Register successful. You can log in now
          </span>
        ) : (
          <span className='failure'>
            Something went wrong. Please try again!
          </span>
        )}

        <CancelIcon
          className='registerCancel'
          onClick={() => setShowRegister(false)}
        />
      </form>
    </div>
  );
};

export default Register;
