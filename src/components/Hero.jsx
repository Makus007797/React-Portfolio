import React from 'react'
import { motion as m } from 'framer-motion'
import Animate from '../animate'

const Hero = props => {
  const data = props.data.reduce((res, obj) => (obj.block === 'Hero' ? obj : res), {})
  return (
    <m.section
      className='hero'
      id='home'
      initial='hiden'
      whileInView='visible'
      viewport={{ amount: 0.5 }}
    >
      <div className='hero__box'>
        <div
          className='hero__left hero-box__item bg-cover'
          style={{ backgroundImage: `url(${data.image[0].image})` }}
        ></div>
        <m.div
          className='hero__right hero-box__item bg-cover'
          style={{ backgroundImage: `url(${data.image[1].image})` }}
          custom={2}
          variants={Animate}
        ></m.div>
      </div>
      <div className='container'>
        <div className='hero-content'>
          <span className='hero-content__friendly'>&#128075; ------ {data.foreword}</span>
          <m.h1 className='hero-content__title' custom={1} variants={Animate}>
            {data.title}
          </m.h1>
          <m.p className='hero-content__desc' custom={2} variants={Animate}>
            {data.desc}
          </m.p>
          <m.div className='btn-wrapper' custom={3} variants={Animate}>
            <a className='hero__btn' href='#contacts'>
              Зв'язок <span>&#8594;</span>
            </a>
          </m.div>
        </div>
      </div>
    </m.section>
  )
}

export default Hero
