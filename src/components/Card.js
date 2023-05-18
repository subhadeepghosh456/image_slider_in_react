import React from 'react'

const Card = ({item}) => {
  return (
      <div className='card'>
          <img src={item.avater}  alt='card_image' className='card-img'/>
    </div>
  )
}

export default Card
