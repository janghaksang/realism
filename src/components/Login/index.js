import React from 'react';
import Recoil from 'recoil';
import Realism from 'realism';

import './Login.css';

import LoginView from './LoginView';

Realism.use(['login']);
export default function Login() {
  const login = Realism.useModel('login');
  const {
    account,
    password,
    host_url,
    save_password,
    history_account,
  } = login;

  const onSubmit = React.useCallback((e)=>{
    e.preventDefault();
    console.log(login);
  },[login]);
  return (
    <LoginView {...login} {...{onSubmit}}/>
  );
}
