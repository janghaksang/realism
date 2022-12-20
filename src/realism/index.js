import React from 'react';
import Recoil from 'recoil';
import * as Types from './types';

const modules = {};
const models = {};

const use = (names)=>{
  names.forEach(async name=>{
    const module = import(`models/${name}`);
    modules[name] = module;
    models[name] = (await module).default;
  });
};

const useModel = (name)=>{
  const module = models[name];
  const [values,setValues] = Recoil.useRecoilState(module);
  const interfaces = React.useMemo(()=>{
    const hash = {};
    Object.keys(values).forEach(key=>{
      const value = values[key];
      const setValue = (nextValue)=>setValues(({...vs})=>{
        vs[key] = typeof nextValues === 'function' ? nextValue(vs[key]) : nextValue
        return vs;
      });
      const input = (type)=>Types[type](value,setValue);
      hash[key] = {value,setValue,input};
    });
    return hash;
  },[values]);
  return interfaces;
};
const ready = (callback)=>{
  const moduleList = Object.values(modules);
  const all = Promise.all(moduleList);
  all.then(callback);
}

export default {
  use,
  useModel,
  ready,
}
