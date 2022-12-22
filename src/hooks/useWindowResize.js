import React from 'react';

export default ()=>{
  const [update,setUpdate] = React.useState(0);
  React.useEffect(()=>{
    const onResize = ()=>setUpdate(u=>u+1);
    window.addEventListener('resize',onResize);
    return ()=>window.removeEventListener('resize',onResize);
  },[]);
}
