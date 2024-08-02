import React from 'react'
import Image from 'next/image'
import './ServiceCard.css'

const ServiceCard = ({text, icon}) => {
  return (
    <div className='card flex flex-col'>
        <div className='icon_box'>
            <Image 
            src={icon}
            width={50}
            height={50}
            alt='coffee stack innovations services'/>
        </div>
        <div className='card_content'>
            <h1 className='service_heading'>{text}</h1>
            <p className='service_des'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea sed incidunt enim nulla! Autem soluta, aliquam asperiores optio eveniet sint repellat sed vitae laborum, distinctio enim veniam iste. Laudantium, corrupti?</p>
        </div>
    </div>
  )
}

export default ServiceCard