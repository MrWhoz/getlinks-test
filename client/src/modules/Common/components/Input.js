import React from 'react'
import './Input.scss'

const Input = props => {
  return (
    <span className='input-field'>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={e => props.onChange && props.onChange(e.target.value, props.type)}
      />
    </span>
  )
}

export default Input
