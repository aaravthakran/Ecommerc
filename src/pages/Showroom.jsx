import React from 'react'
import './CSS/Showroom.css'
import Show from '../Components/Assests/show'
import Item1 from '../Components/Item/Item1'
const Showroom = () => {

  return (
    <div className='new-collections'>
      <h1>𝐎𝐔𝐑 𝐒𝐇𝐎𝐖𝐑𝐎𝐎𝐌𝐒</h1>
      <hr/>
      <div className='collections'>
        {Show.map((item,i)=>{
            return <Item1 key={i} id={item.id}  image={item.image}/>
        })}
      </div>
    </div>
  )
}
export default Showroom
