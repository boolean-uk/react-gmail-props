// for the checkboxes
function Checkbox({ checked, onChange }) {
    return (
      <input className="checkbox" type="checkbox" checked={checked} onChange={onChange} />
    );
  }
  
  export default Checkbox