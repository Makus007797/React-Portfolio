import React from 'react'
import { motion as m } from 'framer-motion'
import Animate from '../animate'

const Works = props => {
  const data = props.data.reduce((res, obj) => (obj.block === 'Works' ? obj : res), {})
  return (
    <m.section
      className='works'
      id='works'
      initial='hiden'
      whileInView='visible'
      viewport={{ amount: 0.2 }}
    >
      <div className='container'>
        <span className='works__subtitle'>&#128064; ------ {data.foreword}</span>
        <m.h2 className='works__title' custom={1} variants={Animate}>
          {data.title}
        </m.h2>
        <m.div className='galery' custom={2} variants={Animate}>
          {data.image.map(img => (
            <img key={img.id} src={img.image} alt={img.alt} className='galery__items' />
          ))}
        </m.div>
      </div>
    </m.section>
  )
}

export default Works
