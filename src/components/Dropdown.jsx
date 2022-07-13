import React from 'react'

const Dropdown = ({setopen, open}) => {
  return (
    <div className='flex pointer' onClick={()=>setopen(!open)}>
        <img width={25} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBXu7PfjFOrpnvU4uuVG_uxXsLKEavS3GaWg&usqp=CAU" alt="india" />
        +91 
    </div>
  )
}

export default Dropdown