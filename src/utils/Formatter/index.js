export const fromFormattedString = (format)=>(value)=>{
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
  return tags['#'];
};

export const toFormattedString = (format)=>(value)=>{
  const result = [];
  const fs = format.split('');
  const vs = value.split('');
  let index = 0;
  fs.forEach((c)=>{
    if(c==='#') {
      result.push(vs[index]);
      ++index;
    } else if(index <= vs.length) {
      result.push(c);
    }
  });
  return result.join('');
};

export const toNumeralNumber = (count,delimeter)=>(value)=>{
  const result = []
  const vs = value.toString().split('').reverse();
  let pos = 0;
  vs.forEach((c,index)=>{
    result.push(vs[index]);
    if(pos < count-1) {
      ++pos;
    } else if(index < vs.length-1) {
      pos = 0;
      result.push(delimeter);
    }
  });
  return result.reverse().join('');
};

export const fromNumeralNumber = (delimeter)=>(value)=>{
  return +value.replace(new RegExp(delimeter,'g'),'')
}
