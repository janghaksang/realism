import React from 'react';
import Recoil from 'recoil';
import classnames from 'classnames';
import Text from 'atomics/Text';
import Password from 'atomics/Password';
import Checkbox from 'atomics/Checkbox';
import Textarea from 'atomics/Textarea';
import Select from 'atomics/Select';
import * as Validator from 'utils/Validator';

const validate_url = Validator.uri();
const validate_latin = (value)=>new RegExp(/^([0-9a-zA-Z])*$/i).test(value);

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
        <Text
          {...{validate:validate_latin}}
          {...account}
          />
      </div>
      <div>
        <span>PASSWORD</span>
        <Password
          {...{validate:validate_latin}}
          {...password}
          />
      </div>
      <div>
        <span>HOST URL</span>
        <Text
          {...{validate:validate_url}}
          {...host_url}
          />
      </div>
      <div>
        <span>SAVE PASSWORD</span>
        <Checkbox
          {...save_password}
          />
      </div>
      <div>
        <span>ACCOUNT HISTORY</span>
        <Textarea
          {...{defaultValue:history_account.value}}
          />
        <Select
          {...{
            size:history_account.value.length,
            list:history_account.value
          }}
          />
      </div>
      <div>
        <button type={'submit'}>SUBMIT</button>
      </div>
    </form>
  );
}
