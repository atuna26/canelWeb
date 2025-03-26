import styles from '../../style'
import bimLogo from "../../assets/bimLogo.png" 

const References = () => {
  return (
    <section className={`flex flex-col w-full justify-center shadow-2xl gap-3 px-20 sm:py-10 py-4`}>
    <h2 className='text-primary text-4xl font-light'> <span className='font-medium'>—</span> Referanslar</h2>
    <div className={`flex flex-row w-full justify-start items-center gap-3 sm:pt-10 pt-3 overflow-hidden`}>
      <div className={`flex animate-scroll`}>
        <img src={bimLogo} alt="Image 1" className="w-48 h-auto mx-4" />
        <img src={bimLogo} alt="Image 2" className="w-48 h-auto mx-4" />
        <img src={bimLogo} alt="Image 3" className="w-48 h-auto mx-4" />
        <img src={bimLogo} alt="Image 4" className="w-48 h-auto mx-4" />
        <img src={bimLogo} alt="Image 5" className="w-48 h-auto mx-4" />
        <img src={bimLogo} alt="Image 6" className="w-48 h-auto mx-4" />
        <img src={bimLogo} alt="Image 7" className="w-48 h-auto mx-4" />
        <img src={bimLogo} alt="Image 8" className="w-48 h-auto mx-4" />
        <img src={bimLogo} alt="Image 9" className="w-48 h-auto mx-4" />
        <img src={bimLogo} alt="Image 10" className="w-48 h-auto mx-4" />
       
      </div>
    </div>
  </section>
  )
}

export default References