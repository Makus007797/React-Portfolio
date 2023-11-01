import { motion as m } from 'framer-motion'
import Animate from '../animate'

const Contract = props => {
  const data = props.data.reduce((res, obj) => (obj.block === 'Contracts' ? obj : res), {})
  const staticData = [
    {
      id: '1',
      title: '1. Підпис договору',
      desc: 'Менеджер все підготував',
    },
    {
      id: '2',
      title: '2. Створення макета проекта',
      desc: 'Дизайнер все зробить',
    },
    {
      id: '3',
      title: '3. Front-End',
      desc: 'Команда професіоналів',
    },
    {
      id: '4',
      title: '4. Back-End',
      desc: 'Майстри Ddoss',
    },
    {
      id: '5',
      title: '5. Тестування',
      desc: 'Усе парцюе як годиник',
    },
    {
      id: '6',
      title: '6. Продакшен',
      desc: 'Задоволений кліент',
    },
  ]

  return (
    <m.section
      className='contract'
      initial='hiden'
      whileInView='visible'
      viewport={{ amount: 0.5 }}
    >
      <div className='container'>
        <span className='contract__subtitle'>&#129309; ------ {data.foreword}</span>
        <m.h2 className='contract__title' custom={1} variants={Animate}>
          {data.title}
        </m.h2>
        <m.ul className='steps' custom={2} variants={Animate}>
          {staticData.map(step => (
            <li className='steps__items' key={step.title}>
              <h3 className='steps__title'>{step.title}</h3>
              <span className='steps__desc'>{step.desc}</span>
            </li>
          ))}
        </m.ul>
      </div>
    </m.section>
  )
}

export default Contract
