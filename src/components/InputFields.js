import React from 'react'

const InputFields = ({handleChange, removeField, input}) => {
  return (
    <div>
        <input onChange={handleChange} value={input.name} type='text' name='name' placeholder='Name' />
        <input onChange={handleChange} value={input.age} type='text' name='age' placeholder='Age' />
        <button type='submit' onClick={removeField}>Remove</button>
    </div>
  )
}

export default InputFields