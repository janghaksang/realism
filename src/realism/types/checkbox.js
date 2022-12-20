export const type = (value,setValue)=>({
  type:'checkbox',
  checked:value,
  onChange:(e)=>setValue(e.currentTarget.checked),
});
