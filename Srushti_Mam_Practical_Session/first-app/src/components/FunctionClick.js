import React from 'react'

const FunctionClick = () => {
    
    // const clickHandler =  () => {
    //     console.log("Clicked..!")
    // }
    
    function clickHandler () {
        console.log("Clicked..!")
    }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick