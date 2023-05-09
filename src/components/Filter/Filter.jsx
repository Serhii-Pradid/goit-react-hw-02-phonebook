
export const Filter = ({value, onChange}) => (
    <ul>
        <label> Find contacts by name
      <input 
      type="text" 
      value={value} 
      onChange={onChange} />
     </label>
    </ul>
)