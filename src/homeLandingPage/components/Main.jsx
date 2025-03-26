
import AboutUs from './AboutUs.JSX'
import Hero from './Hero'
import References from './References'
import TripleInfo from './TripleInfo'
const Main = () => {
  return (
    <div className='flex flex-col w-full'> 
      <Hero />
      <TripleInfo />
      <References />
      <AboutUs />
    </div>
  )
}

export default Main