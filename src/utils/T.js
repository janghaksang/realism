import {tr} from './TR'

export default function T(query,...args) {
  const languages = (window.realism&&window.realism.languages) || window.navigator.languages;
  for(let i = 0; i < languages.length ; ++i) {
    const language = languages[i];
    if(!(language in tr)) continue;
    if(!(query in tr[language])) continue;
    query = tr[language][query];
  }
  args.forEach((arg,index)=>{
    query = query.replace(new RegExp(`\\{${index}\\}`,'i'),arg);
  });
  return query;
}
