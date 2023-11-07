import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let username = sessionStorage.getItem('username');
    let jwttoken = sessionStorage.getItem('jwttoken');
    if (username === '' || username === null) {
      navigate('/');
    }
  }, []);

  return (
    <div>
      <div className='header'>
        <Link to={'/'}>Home</Link>
        <Link style={{ float: 'right' }} to={'/login'}>
          Logout
        </Link>
      </div>
      <div className='text-center'>Welcome to the Home</div>
    </div>
  );
};

export default Home;
