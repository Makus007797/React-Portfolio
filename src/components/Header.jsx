import { Link } from 'react-scroll'

const Header = props => {
  return (
    <header className={props.scroll ? 'header scroll' : 'header'}>
      <div className='container'>
        <span className='header__logo'>Portfolio.</span>
        <nav className='nav'>
          <ul className='menu'>
            <li className='menu__items'>
              <Link
                to='home'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className='menu__link'
                href='#home'
              >
                Головна
              </Link>
            </li>
            <li className='menu__item'>
              <Link
                to='about'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className='menu__link'
                href='#about'
              >
                Про мене
              </Link>
            </li>
            <li className='menu__item'>
              <Link
                to='skils'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className='menu__link'
                href='#skils'
              >
                Скілс
              </Link>
            </li>
            <li className='menu__item'>
              <Link
                to='works'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className='menu__link'
                href='#works'
              >
                Роботи
              </Link>
            </li>
            <li className='menu__item'>
              <Link
                to='contacts'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className='menu__link'
                href='#contacts'
              >
                Контакти
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
