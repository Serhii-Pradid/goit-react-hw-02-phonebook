import PropTypes from 'prop-types';
import css from './Filter.module.css'

export const Filter = ({value, onChange}) => (
    <ul>
        <label> Find contacts by name
      <input 
      type="text" 
      value={value} 
      placeholder='Name Surname'
      onChange={onChange} />
     </label>
    </ul>
)

Filter.propTypes ={
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}