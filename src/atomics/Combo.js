import React from 'react';
export default function Combo(props) {
  const {
    value,
    onChange,
    list,
    ...rest
  } = props;

  const selectRef = React.useRef();
  const onKeyDown = React.useCallback((e)=>{
    if(e.key==='ArrowDown'||e.key==='ArrowUp') {
      selectRef.current.focus();
    }
  },[]);

  return (
    <div
      {...{
        className:'Realism-Views-Form-Row-Column-Cell Combo',
      }}
      >
      <select
        {...{ref:selectRef}}
        {...props}
        >
        {list.map((item,key)=>(
          <option {...{key,value:item,label:item}}/>
        ))}
      </select>
      <input
        {...{
          type:'text',
          value,
          onChange,
          onKeyDown,
          ...rest
        }}
        />
    </div>
  )
}
