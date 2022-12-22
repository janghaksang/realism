import React from 'react';

const methodNames = ['close','error','message','open'];

export default function useWebsocket(url,methods) {
  const [socket,setSocket] = React.useState();
  const [connected,setConnected] = React.useState(false);

  const reconnect = React.useCallback(()=>{
    setSocket(new WebSocket(url));
  },[url]);

  React.useEffect(()=>{
    setSocket(new WebSocket(url));
  },[])

  React.useEffect(()=>{
    if(!socket) return;

    const onOpen = ()=>setConnected(true);
    const onClose = ()=>setConnected(false);

    const closures = {}
    socket.addEventListener('open',onOpen);
    socket.addEventListener('close',onClose);

    methodNames.forEach((name)=>{
      closures[name] = methods[name](reconnect);
      if(name in methods) socket.addEventListener(name,closures[name]);
    });
    return ()=>{
      methodNames.forEach((name)=>{
        if(name in methods) socket.removeEventListener(name,closures[name]);
      });
      socket.removeEventListener('open',onOpen);
      socket.removeEventListener('close',onClose);
    };
  },[socket]);

  return [socket,reconnect];
}
