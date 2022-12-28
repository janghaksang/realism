import React from 'react';

const attrs = ['left','top','width','height'];

export default (ref)=>{
  const [rect,setRect] = React.useState({left:0,top:0,width:0,height:0});
  React.useEffect(()=>{
    if(!ref.current) return;
    
    const bounding = ref.current.getBoundingClientRect();
    if(attrs.every(attr=>Math.floor(rect[attr])==Math.floor(bounding[attr]))) return;

    const {left,top,width,height} = bounding;
    setRect(()=>({left,top,width,height}));
  });
  return rect;
}
