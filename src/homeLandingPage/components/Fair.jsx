import styles from '../../style'
import canelizmir22 from '../../assets/canelizmir22.jpg'
import canelizmir2024 from '../../assets/canelizmir2024.jpg'
import blackMarble from '../../assets/blackMarble.jpg'
import bimLogo from "../../assets/bimLogo.png" 
import crystal from '../../assets/references/crystal.jpg';
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


const Fair = () => {
  return (
    <section className={`flex flex-col col-span-2 bg-white w-full justify-center shadow-2xl gap-3 px-20 ${styles.paddingY}`}>
      <h2 className='text-primary text-3xl font-medium tracking-wide font-abel '> <span className="border-t-2 border-l-2 pl-1">Fuarlar ve Etkinlikler </span> </h2>
      <div className={`md:grid md:grid-cols-5 flex flex-col  w-full gap-3 sm:pt-10 pt-3`}>
        <p className='text-primary col-span-2 text-lg font-normal '>Canel Münip Çoker Madencilik mermer sektörüne 1996 yılında <span className='font-bold'>Bursa</span> Bölgesinde başlamıştır.<br/>
        Daha sonra Susurluk, Akhisar ve Gönen bölgesinde bulunan ruhsatlarından üretimler yapılmıştır bu sayede Bej haricinde günümüzde moda olan Gri ve siyah mermerlerinizde üretim gamına katmışır.<br/>
        Özellikle <span className='font-bold'>Rain Gray</span> isimli mermerimiz gerek yurt içinde gerek yurt dışında çok önemli prestijli projelerde dizaynırların ve mimarların önde gelen tercihi olmuştur.</p>
        <div className='col-span-3 flex  flex-row justify-evenly w-full'>
          <img src={canelizmir2024} className='sm:w-[320px] w-[100px]' alt="" />
          <img src={canelizmir22} className='sm:w-[320px] w-[100px]' alt="" />
        </div>
      </div>
      <hr className='w-full border-1 border-primary my-5'/>
      <h2 className='text-primary text-2xl font-light font-abel'> <span className='font-medium'>—</span> Fuar Takvimi</h2>
      <div className='flex sm:flex-row flex-col justify-between items-center w-full gap-3 mt-2'>
        <div style={{backgroundImage:`url(${blackMarble})`}} className='flex flex-col justify-center items-center w-[250px] h-[100px] filter brightness-75 rounded-md'>
          <p className='text-center text-white font-semibold'>XIAMEN STONE</p>
          <p className='text-center text-white'>16.03.2024 - 19.03.2024</p>
        </div>
        <div style={{backgroundImage:`url(${blackMarble})`}} className='flex flex-col justify-center items-center w-[250px] h-[100px] filter brightness-75 rounded-md'>
          <p className='text-center text-white font-semibold'>İzmir Marble</p>
          <p className='text-center text-white'>16.03.2024 - 19.03.2024</p>
        </div>
        <div style={{backgroundImage:`url(${blackMarble})`}} className='flex flex-col justify-center items-center w-[250px] h-[100px] filter brightness-75 rounded-md'>
          <p className='text-center text-white font-semibold'>MARMO+MAC</p>
          <p className='text-center text-white'>16.03.2024 - 19.03.2024</p>
        </div>
        <div style={{backgroundImage:`url(${blackMarble})`}} className='flex flex-col justify-center items-center w-[250px] h-[100px] filter brightness-75 rounded-md'>
          <p className='text-center text-white font-semibold'>XIAMEN STONE</p>
          <p className='text-center text-white'>16.03.2024 - 19.03.2024</p>
        </div>
      </div>
      <h2 className='text-primary text-2xl font-light font-abel pt-5'> <span className='font-medium'>—</span> Referanslar</h2>
      <div className={`flex flex-row w-full justify-start items-center gap-3 overflow-hidden`}>
            <div className={`flex animate-scroll`}>
                      <img src={crystal} alt="Image 2" className="w-48 h-auto mx-4" />
                      <img src={cumhurbashkanligi} alt="Image 3" className="w-48 h-auto mx-4" />
                      <img src={garanti} alt="Image 4" className="w-48 h-auto mx-4" />
                      <img src={rixos} alt="Image 10" className="w-48 h-auto mx-4" />
                      <img src={hilton} alt="Image 5" className="w-48 h-auto mx-4" />
                      <img src={mallOfist} alt="Image 6" className="w-48 h-auto mx-4" />
                      <img src={medicalPark} alt="Image 7" className="w-48 h-auto mx-4" />
                      <img src={marriot} alt="Image 8" className="w-48 h-auto mx-4" />
                      <img src={migros} alt="Image 9" className="w-48 h-auto mx-4" />
                      <img src={palomo} alt="Image 10" className="w-48 h-auto mx-4" />
                      <img src={senator} alt="Image 10" className="w-48 h-auto mx-4" />
                      <img src={sunflower} alt="Image 10" className="w-48 h-auto mx-4" />
                      <img src={titanic} alt="Image 10" className="w-48 h-auto mx-4" />
                      <img src={bimLogo} alt="Image 1" className="w-48 h-auto mx-4" />

              
             
            </div>
          </div>
      
      
    </section>
  )
}

export default Fair