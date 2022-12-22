import React from 'react';
import Recoil from 'recoil';

import useWebsocket from 'hooks/useWebsocket';

const methods = {
  close:(reconnect)=>(e)=>{
    console.log('close',e);
    setTimeout(reconnect(),5000);
  },
  error:(reconnect)=>(e)=>{
    console.log('error',e);
  },
  message:(reconnect)=>(e)=>{
    console.log('message',e);
  },
  open:(reconnect)=>(e)=>{
    console.log('open',e);
  },
}

export default function Websocket({url}) {
  const [socket,reconnect] = useWebsocket(url,methods);
  return null;
}
