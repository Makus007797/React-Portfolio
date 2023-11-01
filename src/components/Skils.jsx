import { motion as m } from 'framer-motion'
import Animate from '../animate'

const Skils = props => {
  const data = props.data.reduce((res, obj) => (obj.block === 'Skills' ? obj : res), {})
  return (
    <m.section
      className='skils'
      id='skils'
      initial='hiden'
      whileInView='visible'
      viewport={{ amount: 0.5 }}
    >
      <div className='container'>
        <div className='skils__item'>
          <span className='skils__subtitle'>&#128170; ------ {data.foreword}</span>
          <m.h2 className='skils__title' custom={1} variants={Animate}>
            {data.title}
          </m.h2>
        </div>
        <div className='skils__item'>
          <m.ul className='skils-icons' custom={2} variants={Animate}>
            {data.image.map(img => (
              <li className='skils-icons__items' key={img.id}>
                <img src={img.image} alt={img.alt} />
              </li>
            ))}
          </m.ul>
          <m.p custom={3} variants={Animate}>
            {data.desc}
          </m.p>
        </div>
      </div>
    </m.section>
  )
}

export default Skils
