import React from 'react';
import Recoil from 'recoil';
import Realism from 'realism';
import classnames from 'classnames';

import './App.css';

import Login from 'components/Login';
import Websocket from 'modules/Websocket';

Realism.use(['app']);
export default function App() {
  const app = Realism.useModel('app',false);
  const onLogined = React.useCallback((data)=>{
    app.setValues(data);
  },[]);
  return (
    <div
      {...{
        className:classnames('App'),
      }}
      >
      <Login
        {...{
          onLogined,
        }}
        />
      {app.values&&(<Websocket {...{url:app.ws_url.value}}/>)}
    </div>
  );
}
