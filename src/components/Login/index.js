import React from 'react';
import Recoil from 'recoil';
import Realism from 'realism';

import './Login.css';

import LoginView from './LoginView';
import useFetch from 'hooks/useFetch';

import UTF8 from 'crypto-js/enc-utf8';
import BASE64 from 'crypto-js/enc-base64';
import MD5 from 'crypto-js/md5';
import SHA256 from 'crypto-js/sha256';

Realism.use(['login']);
export default function Login(props) {
  const {
    onLogined
  } = props;

  const login = Realism.useModel('login',true);
  const {
    account,
    password,
    host_url,
    save_password,
    history_account,
  } = login;

  const {onAbort,onFetch,response,error,loading} = useFetch(`http://${host_url.value}/v1/user/login`,'POST');
  const onSubmit = React.useCallback((e)=>{
    e.preventDefault();
    console.log(login);

    const md5 = MD5(password.value);
    const sha256 = SHA256(md5.toString());
    const user_pw = SHA256(sha256.toString()).toString();
    onFetch({
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        user_device_tp_cd:'P',
        user_id:account.value,
        user_pw,
        mac_addr:'00:00:00:00:00:00',
      }),
    });
  },[login]);

  React.useEffect(()=>{
    if(!response) return;
    if(response.res_code!==200) return;
    onLogined({
      account,
      host_url,
      ...response.data,
    });
  },[account,host_url,response]);

  return (
    <LoginView {...login} {...{onSubmit}}/>
  );
}
