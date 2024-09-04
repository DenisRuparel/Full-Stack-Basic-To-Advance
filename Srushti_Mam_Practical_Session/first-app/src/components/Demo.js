import React from 'react'

const Demo = ({deptname}) => {
    if(deptname === "CSE")
        throw new Error('not valid');
        
  return (
    <div>
      {deptname}
    </div>
  )
}

export default Demo
