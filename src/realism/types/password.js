export const type = (value,setValue)=>({
  type:'password',
  value,
  onChange:(e)=>setValue(e.currentTarget.value),
});
