import React from 'react';
export default function Combo(props) {
  const {
    list,
    value:pValue,
    setValue:pSetValue,
    ...rest
  } = props;

  const [value,setValue] = React.useState(pValue);
  const onChange = React.useCallback((e)=>{
    const {value} = e.currentTarget;
    setValue(value)
  },[pSetValue]);

  React.useEffect(()=>{
    pSetValue&&pSetValue(value);
  },[value]);

  return (
    <div
      {...{
        className:'Realism-Views-Form-Row-Column-Cell Combo',
      }}
      >
      <select
        {...{
          value,
          onChange,
          ...rest,
        }}
        >
        {list.map((item,key)=>(
          <option {...{key,value:item,label:item}}/>
        ))}
      </select>
    </div>
  )
}
