import styles from '../../style'
import bimLogo from "../../assets/bimLogo.png" 
import  crystal from '../../assets/references/crystal.jpg';
import cumhurbashkanligi from '../../assets/references/cumhurbaskanligi.jpg';
import garanti from '../../assets/references/garanti.jpg';
import hilton from '../../assets/references/hilton.jpg';
import mallOfist from '../../assets/references/mallOfist.jpg';
import marriot from '../../assets/references/marriot.jpg';
import medicalPark from '../../assets/references/medicalPark.jpg';
import migros from '../../assets/references/migros.jpg';
import palomo from '../../assets/references/palomo.jpg';
import rixos from '../../assets/references/rixos.jpg';
import senator from '../../assets/references/senator.jpg';
import sunflower from '../../assets/references/sunflower.jpg';
import titanic from '../../assets/references/titanic.jpg';

const References = () => {

  
  

  return (
    <section className={`flex flex-col w-full col-span-2 justify-center  gap-3 px-20 sm:py-10 py-4`}>
    <h2 className='text-primary text-4xl font-light'> <span className='font-medium'>—</span> Referanslar</h2>
    <div className={`flex flex-row w-full justify-start items-center gap-3 sm:pt-10 pt-3 overflow-hidden`}>
      <div className={`flex animate-scroll`}>
        <img src={bimLogo} alt="Image 1" className="w-48 h-auto mx-4" />
        <img src={crystal} alt="Image 2" className="w-48 h-auto mx-4" />
        <img src={cumhurbashkanligi} alt="Image 3" className="w-48 h-auto mx-4" />
        <img src={garanti} alt="Image 4" className="w-48 h-auto mx-4" />
        <img src={hilton} alt="Image 5" className="w-48 h-auto mx-4" />
        <img src={mallOfist} alt="Image 6" className="w-48 h-auto mx-4" />
        <img src={medicalPark} alt="Image 7" className="w-48 h-auto mx-4" />
        <img src={marriot} alt="Image 8" className="w-48 h-auto mx-4" />
        <img src={migros} alt="Image 9" className="w-48 h-auto mx-4" />
        <img src={palomo} alt="Image 10" className="w-48 h-auto mx-4" />
        <img src={rixos} alt="Image 10" className="w-48 h-auto mx-4" />
        <img src={senator} alt="Image 10" className="w-48 h-auto mx-4" />
        <img src={sunflower} alt="Image 10" className="w-48 h-auto mx-4" />
        <img src={titanic} alt="Image 10" className="w-48 h-auto mx-4" />


       
      </div>
    </div>
  </section>
  )
}

export default References