import React from 'react';

import * as Formatter from 'utils/Formatter';

const id = (value)=>value;

export default function Text(props) {
  const {
    format,
    validate,
    value:pValue,
    setValue:pSetValue,
    ...rest
  } = props;

  const toFormattedString = React.useMemo(()=>!format?id:Formatter.toFormattedString(format),[]);
  const fromFormattedString = React.useMemo(()=>!format?id:Formatter.fromFormattedString(format),[]);
  const [value,setValue] = React.useState(toFormattedString(pValue));
  const onChange = React.useCallback((e)=>{
    const {value} = e.currentTarget;
    if(validate&&!validate(value)) return;
    setValue(fromFormattedString(value))
  },[pSetValue]);

  React.useEffect(()=>{
    pSetValue&&pSetValue(value);
  },[value]);

  return (
    <div
      {...{
        className:'Realism-Views-Form-Row-Column-Cell',
      }}
      >
      <input
        {...{
          type:'text',
          value,
          onChange,
          ...rest,
        }}
        />
    </div>
  )
}
