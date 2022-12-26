import * as CreditCard from './CreditCard';

export const range = (a,b)=>(value)=>a <= value && value <= b;
export const min = (a)=>(value)=>a <= value;
export const max = (a)=>(value)=>value <= a;
export const colorhex = ()=>(value)=>new RegExp(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/i).test(value);
export const creditcard = (type)=>(value)=>CreditCard[type].test(value);
export const uri = ()=>(value)=>new RegExp("^([A-Za-z][A-Za-z0-9+\\-.]*):(?:(//)(?:((?:[A-Za-z0-9\\-._~!$&'()*+,;=:]|%[0-9A-Fa-f]{2})*)@)?((?:\\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\\.[A-Za-z0-9\\-._~!$&'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-Za-z0-9\\-._~!$&'()*+,;=]|%[0-9A-Fa-f]{2})*))(?::([0-9]*))?((?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|/((?:(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)?)|((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|)(?:\\?((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?(?:\\#((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?$").test(value);
export const email = ()=>(value)=>/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(value);
export const phone = ()=>(value)=>/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(value);
export const zipcode = ()=>(value)=>/^[0-9]{5}(?:-[0-9]{4})?$/.test(value);
export const ipv4address = ()=>(value)=>/^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value);
export const ipv6address = ()=>(value)=>/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(value);
export const macaddress = ()=>(value)=>/^(?:[0-9A-Fa-f]{2}[:-]){5}(?:[0-9A-Fa-f]{2})$/.test(value);
export const date = (format)=>(value)=>{
  const exp = format.replace("YYYY","([0-9]{4})").replace("MM","(0[1-9]|1[0-2])").replace("DD","(0[1-9]|1[0-9]|2[0-9]|3[0-1])");
  const tags = {};
  const fs = format.split('');
  const vs = value.split('');
  fs.forEach((c,index)=>{
    if(!(c in tags)) tags[c] = [];
    tags[c].push(vs[index]);
  });
  Object.keys(tags).forEach(tag=>{
    tags[tag] = tags[tag].join('');
  });
  if(!('D' in tags)) tags['D'] = '01';
  const date = new Date(+tags['Y'],+tags['M']-1,+tags['D']);
  if((+tags['Y'])!==date.getFullYear()) return false;
  if((+tags['M']-1)!==date.getMonth()) return false;
  if((+tags['D'])!==date.getDate()) return false;
  return true;
};
export const time = (format)=>(value)=>{
  const exp = format.replace("hh","([0-1][0-9]|2[0-3])").replace("mm","([0-5][0-9])").replace("ss","([0-5][0-9])");
  const tags = {};
  const fs = format.split('');
  const vs = value.split('');
  fs.forEach((c,index)=>{
    if(!(c in tags)) tags[c] = [];
    tags[c].push(vs[index]);
  });
  Object.keys(tags).forEach(tag=>{
    tags[tag] = tags[tag].join('');
  });
  if(!('s' in tags)) tags['s'] = '00';
  return new RegExp(`^${exp}$`).test(value);
};
export const time24 = (format)=>(value)=>{
  const exp = format.replace("hh","([0-1][0-9]|2[0-4])").replace("mm","([0-5][0-9])").replace("ss","([0-5][0-9])");
  const tags = {};
  const fs = format.split('');
  const vs = value.split('');
  fs.forEach((c,index)=>{
    if(!(c in tags)) tags[c] = [];
    tags[c].push(vs[index]);
  });
  Object.keys(tags).forEach(tag=>{
    tags[tag] = tags[tag].join('');
  });
  if(!('s' in tags)) tags['s'] = '00';
  if(tags['h']=='24') {
    return tags['m']==='00'&&tags['d']==='00';
  } else {
    return new RegExp(`^${exp}$`).test(value);
  }
};
export const datetime = (format)=>(value)=>{
  const exp = format.replace("YYYY","([0-9]{4})").replace("MM","(0[1-9]|1[0-2])").replace("DD","(0[1-9]|1[0-9]|2[0-9]|3[0-1])").replace("hh","([0-1][0-9]|2[0-3])").replace("mm","([0-5][0-9])").replace("ss","([0-5][0-9])");
  const tags = {};
  const fs = format.split('');
  const vs = value.split('');
  fs.forEach((c,index)=>{
    if(!(c in tags)) tags[c] = [];
    tags[c].push(vs[index]);
  });
  Object.keys(tags).forEach(tag=>{
    tags[tag] = tags[tag].join('');
  });
  const date = new Date(+tags['Y'],+tags['M']-1,+tags['D'],+tags['h'],+tags['m'],+tags['s']);
  if((+tags['Y'])!==date.getFullYear()) return false;
  if((+tags['M']-1)!==date.getMonth()) return false;
  if((+tags['D'])!==date.getDate()) return false;
  if((+tags['h'])!==date.getHours()) return false;
  if((+tags['m'])!==date.getMinutes()) return false;
  if((+tags['s'])!==date.getSeconds()) return false;
  return true;
};
