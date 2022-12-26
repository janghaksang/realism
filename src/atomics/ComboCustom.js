import React from 'react';
import useViewRect from 'hooks/useViewRect';

const defaultRenderer = (item,key)=>(<option {...{key,value:item,label:item}}/>)

export default function Combo(props) {
  const {
    value,
    onChange,
    list,
    renderer=defaultRenderer,
    ...rest
  } = props;

  const [opened,setOpened] = React.useState(false);

  const selectedRef = React.useRef(Math.max(0,list.indexOf(value)));
  const optionsRef = React.useRef({});

  const inputRef = React.useRef();
  const selectRef = React.useRef();
  const onSelectKeyDown = React.useCallback((e)=>{
    if(e.key==='Escape') {
      inputRef.current.focus();
      setOpened(false);
    }
  },[]);
  const onInputFocus = React.useCallback((e)=>{
    setOpened(false);
  },[]);

  React.useEffect(()=>{
    if(!opened) return;
    requestAnimationFrame(()=>{
      optionsRef.current[selectedRef.current].focus();
    });
  },[opened])

  React.useEffect(()=>{
    selectedRef.current = Math.max(0,list.indexOf(value));
  },[list,value]);

  const onInputKeyDown = React.useCallback((e)=>{
    if(e.key==='ArrowDown'||e.key==='ArrowUp') {
      e.preventDefault();
      setOpened(true);
    }
  },[]);

  const onInputMouseDown = React.useCallback((e)=>{
    setOpened(true);
  },[]);

  const onButtonKeyDown = React.useCallback((e)=>{
    if(e.key==='ArrowDown') {
      requestAnimationFrame(()=>{
        selectedRef.current = (list.length+selectedRef.current+1)%list.length;
        optionsRef.current[selectedRef.current].focus();
        onChange({target:optionsRef.current[selectedRef.current].children[0]})
      });
    } else if(e.key==='ArrowUp') {
      requestAnimationFrame(()=>{
        selectedRef.current = (list.length+selectedRef.current-1)%list.length;
        optionsRef.current[selectedRef.current].focus();
        onChange({target:optionsRef.current[selectedRef.current].children[0]})
      })
    } else if(e.key==='Enter') {
      onChange({target:optionsRef.current[selectedRef.current].children[0]})
      inputRef.current.focus();
      setOpened(false);
    }
  },[]);

  const onButtonClick = React.useCallback((e)=>{
    const target = e.currentTarget.children[0];
    requestAnimationFrame(()=>{
      onChange({target})
      inputRef.current.focus();
      setOpened(false);
    });
  },[]);

  const ref = React.useRef();
  const rect = useViewRect(ref);

  const memoList = React.useMemo(()=>list.map((item,key)=>{
    return (
      <button
        {...{
          ref:ref=>{optionsRef.current[key] = ref},
          key,
          onKeyDown:onButtonKeyDown,
          onClick:onButtonClick,
        }}
        >
        {renderer(item,key)}
      </button>
    )
  }),[list,renderer,onButtonKeyDown,onButtonClick]);

  return (
    <div
      {...{
        ref,
        className:'Realism-Views-Form-Row-Column-Cell ComboCustom',
        style:{
          "--popup-left":`${rect.left}px`,
          "--popup-top":`${rect.top}px`,
          "--popup-width":`${rect.width}px`,
          "--popup-height":`${rect.height}px`,
        },
      }}
      >
      <div
        {...{ref:selectRef}}
        {...rest}
        >
        <div
          {...{
            className:['Realism-Views-Popup',...(opened?['opened']:[])].join(' '),
            onKeyDown:onSelectKeyDown,
          }}
          >
          {memoList}
        </div>
      </div>
      <input
        {...{
          ref:inputRef,
          type:'text',
          value,
          onChange,
          onKeyDown:onInputKeyDown,
          onMouseDown:onInputMouseDown,
          onFocus:onInputFocus,
          ...rest
        }}
        />
    </div>
  )
}
