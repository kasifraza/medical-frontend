import React, { useRef } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { useNavigate } from 'react-router-dom';

const IdleTimerContainer = ({ children }) => {
  const navigate = useNavigate()
  const idleTimerRef = useRef(null);

  const handleOnIdle = () => {
    console.log('User is idle');
    localStorage.removeItem('medicalToken');
    navigate('/login');
  };

  const handleOnActive = event => {
    console.log('User is active', event);
  };

  const handleOnAction = event => {
    console.log('User did something', event);
  };

  useIdleTimer({
    ref: idleTimerRef,
    timeout: 1000 * 60 * 60, // 1 hour in milliseconds
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    onAction: handleOnAction,
    debounce: 500,
  });

  return <>{children}</>;
};

export default IdleTimerContainer;
