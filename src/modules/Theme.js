import React from 'react';
import Recoil from 'recoil';

export default function LocalStorage(props) {
  const keyValues = props.default;
  React.useEffect(()=>{
    Object.keys(keyValues).forEach(key=>{
      const value = localStorage.getItem(key);
      if(value==null) localStorage.setItem(key,keyValues[key]);
    });

    const head = document.getElementsByTagName('head')[0];
    const style = document.getElementsByTagName('style')[0];

    const stylePalette = document.createElement('style');
    const styleTypography = document.createElement('style');
    const variables = Object.keys(localStorage).reduce((a,key)=>{
      const root = document.querySelector(':root');
      if(key.indexOf('theme-palette-')==0) {
        const value = localStorage.getItem(key);
        a.palette.push(`--${key}: ${value}`);
      } else if(key.indexOf('theme-typography-')==0) {
        const value = localStorage.getItem(key);
        a.typography.push(`--${key}: ${value}`);
      }
      return a;
    },{palette:[],typography:[]});
    stylePalette.innerHTML = `
:root {
${variables.palette.join(';\n')}
}`;
    styleTypography.innerHTML = `
:root {
${variables.typography.join(';\n')}
}`;
    head.insertBefore(stylePalette,style);
    head.insertBefore(styleTypography,style);

  },[]);
  return null;
}
