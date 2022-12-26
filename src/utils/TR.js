import {default as TR} from 'i18n/TR.json';

export const tr = {};
Object.keys(TR).forEach(language=>{
  if(typeof TR[language] === 'string') {
    import(`i18n/${TR[language]}.json`).then(({default:hash})=>{
      tr[language] = {};
      Object.keys(hash).forEach(key=>{
        tr[language][key] = hash[key];
      })
    });
  } else {
    tr[language] = TR[language];
  }
});
