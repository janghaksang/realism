import React from 'react';

export default (url,method)=>{
  const [response,setResponse] = React.useState(null);
  const [error,setError] = React.useState(null);
  const [loading,setLoading] = React.useState(false);

  const controller = React.useMemo(()=>new AbortController(),[]);
  const onAbort = React.useCallback(()=>controller.abort(),[controller]);
  const onFetch = React.useCallback((request)=>{
    const {signal} = controller;
    setLoading(true);
    fetch(url,{...request,signal,method}).then(res=>res.json()).then(res=>{
      setError(null)
      setResponse(res);
      setLoading(false);
    }).catch(e=>{
      setError(e.message);
      setResponse(null);
      setLoading(false);
    });
  },[]);

  return {onAbort,onFetch,response,error,loading};
}
