import React from 'react';
export default function Password(props) {
  const {
    validate,
    value:pValue,
    setValue:pSetValue,
    ...rest
  } = props;

  const [value,setValue] = React.useState(pValue);
  const onChange = React.useCallback((e)=>{
    const {checked} = e.currentTarget;
    if(validate&&!validate(checked)) return;
    setValue(checked)
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
          type:'checkbox',
          value,
          onChange,
          ...rest,
        }}
        />
    </div>
  )
}
