import React from 'react'
import axios from 'axios'
import BadResponce from './components/BadResponse'
import Preloader from './components/Preloader'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skils from './components/Skils'
import Works from './components/Works'
import Contract from './components/Contract'
import Footer from './components/Footer'
import './assets/scss/style.scss'

const App = () => {
  const API_SRC = 'https://portofilo-course.online/'
  const [scroll, setScroll] = React.useState(false)

  const [error, setError] = React.useState(null)
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 0)
    })
  }, [])

  React.useEffect(() => {
    axios.get(API_SRC).then(
      result => {
        setIsLoaded(true)
        setData((result = result.data))
      },
      error => {
        setIsLoaded(true)
        setError(error)
      },
    )
  }, [])

  if (error) {
    return <BadResponce error={error.message} />
  } else if (!isLoaded) {
    return <Preloader />
  } else {
    return (
      <>
        <Header scroll={scroll} />
        <Hero data={data} />
        <About data={data} />
        <Skils data={data} />
        <Works data={data} />
        <Contract data={data} />
        <Footer data={data} />
      </>
    )
  }
}

export default App
