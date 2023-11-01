import React from 'react'
import { motion as m } from 'framer-motion'
import Animate from '../animate'

const About = props => {
  const data = props.data.reduce((res, obj) => (obj.block === 'About' ? obj : res), {})
  return (
    <m.section
      className='about'
      id='about'
      initial='hiden'
      whileInView='visible'
      viewport={{ amount: 0.5 }}
    >
      <div className='container'>
        <div className='about__item'>
          <span className='about__subtitle'>&#x1f610; ------ {data.foreword}</span>
          <m.h2 className='about__title' custom={1} variants={Animate}>
            {data.title}
          </m.h2>
        </div>
        <m.div className='about__item' custom={2} variants={Animate}>
          <p>{data.desc}</p>
          <a className='btn' href='https://www.instagram.com/'>
            Instagram
          </a>
        </m.div>
      </div>
    </m.section>
  )
}

export default About
