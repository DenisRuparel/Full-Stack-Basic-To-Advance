import React, { useState } from 'react'

const HookCounter3 = () => {
    const [name, setName] = useState({firstName : '', lastName : ''})
  return (
    <div>
      <input type='text' value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}/>
      <input type='text' value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}/>
      <h3>First Name : {name.firstName}</h3>
      <h3>Last Name : {name.lastName}</h3>
    </div>
  )
}

export default HookCounter3