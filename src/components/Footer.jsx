import { motion as m } from 'framer-motion'
import Animate from '../animate'
import Form from './Form'

const Footer = props => {
  const data = props.data.reduce((res, obj) => (obj.block === 'Footer' ? obj : res), {})
  const social = [
    {
      id: '1',
      url: 'https://web.telegram.org',
      name: 'Telegram',
      img: 'https://img.icons8.com/color/48/null/telegram-app--v1.png',
    },
    {
      id: '2',
      url: 'https://www.skype.com',
      name: 'Skype',
      img: 'https://img.icons8.com/fluency/48/null/skype.png',
    },
    {
      id: '3',
      url: 'https://uk-ua.facebook.com/',
      name: 'Factbook',
      img: 'https://img.icons8.com/fluency/48/null/facebook-new.png',
    },
    {
      id: '4',
      url: 'https://www.instagram.com/',
      name: 'Instagram',
      img: 'https://img.icons8.com/fluency/48/null/instagram-new.png',
    },
  ]

  return (
    <m.footer
      className='footer'
      id='contacts'
      initial='hiden'
      whileInView='visible'
      viewport={{ amount: 0.5 }}
    >
      <div className='container'>
        <div className='footer__box'>
          <m.h2 className='footer__title' custom={1} variants={Animate}>
            {data.title}
          </m.h2>
          <Form />
          <m.span className='footer__desc' custom={3} variants={Animate}>
            {data.desc}
          </m.span>
          <m.ul className='social' custom={4} variants={Animate}>
            {social.map(item => (
              <li key={item.id}>
                <a className='social__item' href={item.url}>
                  <img src={item.img} alt={item.name} />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </m.ul>
        </div>
        <m.div className='footer__box' custom={5} variants={Animate}>
          <a className='contact-email' href='mailto:example@gmail.com'>
            example@gmail.com
          </a>
        </m.div>
      </div>
    </m.footer>
  )
}

export default Footer
