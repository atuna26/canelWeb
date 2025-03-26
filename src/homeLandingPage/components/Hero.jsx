import styles from '../../style'
import cnlbanner from "../../assets/cnlbanner.png"
const Hero = () => {
  return (
    <section className={`flex flex-col w-full justify-center items-center py-3 shadow-2xl`}>
        <div className='flex flex-col justify-between items-center w-full px-40 '>
            <h1 className='text-7xl font-light text-primary self-start tracking-tighter '>CANEL YENİLEBİLİR ENERJİLYE <span></span></h1>
            <h1 className='text-7xl font-light text-primary self-end tracking-tighter mt-2'>ÇOK DAHA GÜÇLÜ</h1>
        </div>
        <div className='w-full my-10 flex justify-end'>
            <img src={cnlbanner} className='shadow-2xl w-full brightness-90' alt="" />
        </div>
        <div className='w-full flex flex-row justify-start gap-2'>
            <h2 className={`pl-16 text-4xl font-normal text-primary self-start`}>
            —
            </h2>
            <h2 className={`text-4xl font-light text-primary self-start w-[500px] leading-8 tracking-tight`}>
            Üretim birimlerimizde yer alan kalite kontrol sistemlerimiz ile üretilen taşlar,dünya ve müşteri standartlarına uygun ve hazır hale getirilerek sevk edilmektedir.
            </h2>
        </div>
    </section>
  )
}

export default Hero