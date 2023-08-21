function EmailCheckbox({ checked, onToggle }) {
    return (
      <input 
          type="checkbox" 
          checked={checked} 
          onClick={(e) => e.stopPropagation()} 
          onChange={onToggle} 
      />
    )
}

export default EmailCheckbox