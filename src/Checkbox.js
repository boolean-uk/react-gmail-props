// for the hide read checkbox
function Checkbox({ checked, onChange }) {
  return (
    <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange} 
    />
  )
}

export default Checkbox