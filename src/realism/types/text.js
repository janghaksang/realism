export const type = (value,setValue)=>({
  type:'text',
  value,
  onChange:(e)=>setValue(e.currentTarget.value),
});
