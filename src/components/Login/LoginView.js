import React from 'react';
import Recoil from 'recoil';
import classnames from 'classnames';

export default function LoginView(props) {
  const {
    account,
    password,
    host_url,
    save_password,
    history_account,
    onSubmit,
  } = props;
  return (
    <form {...{className:classnames('LoginView')}} onSubmit={onSubmit}>
      <div>
        <span>ACCOUNT</span>
        <input
          {...account.input('text')}
          />
      </div>
      <div>
        <span>PASSWORD</span>
        <input
          {...password.input('password')}
          />
      </div>
      <div>
        <span>HOST URL</span>
        <input
          {...host_url.input('text')}
          />
      </div>
      <div>
        <span>SAVE PASSWORD</span>
        <input
          {...save_password.input('checkbox')}
          />
      </div>
      <div>
        <span>ACCOUNT HISTORY</span>
        <textarea
          {...history_account.input('text')}
          />
        <select
          {...{
            size:history_account.value.length
          }}
          >
          {history_account.value.map(item=>(
            <option {...{key:item,label:item,value:item}}/>
          ))}
        </select>
      </div>
      <div>
        <button type={'submit'}>SUBMIT</button>
      </div>
    </form>
  );
}
