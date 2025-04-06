import newMachine from '../../assets/newMachine.jpeg'
import pandrosa from '../../assets/pandrosa.jpeg'
const News = () => {
  return (
    <section className="flex flex-col col-span-2 bg-black w-full items-start gap-3 pt-5 overflow-hidden">
        <h2 className='text-white text-3xl font-light font-abel self-center'> <span className="border-t-2 border-l-2 pl-1">Canel'den</span><span className="border-b-2 border-r-2 pr-1"> Haberler</span> </h2>
        <div className="flex flex-row items-center gap-3 py-3 mx-5">
            <div style={{
                backgroundImage: `url(${newMachine})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                }} className={`flex flex-row justify-center items-end w-[350px] h-[220px]`}>
                <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} className='w-full h-[50%]'>
                    <p className='text-start text-white font-semibold pt-2 text-xl font-poppins px-2'>Yeni Makineler</p>
                    <p className='text-start text-white font-poppins text-sm px-2'>Breton’un yeni mermer cila hattı, yüksek hassasiyet, enerji verimliliği ve gelişmiş otomasyonuyla öne çıkıyor.</p>
                </div>
                
            </div>
            <div style={{
                backgroundImage: `url(${pandrosa})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                }} className={`flex flex-row justify-center items-end w-[350px] h-[220px]`}>
                <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} className='w-full h-[50%]'>
                    <p className='text-start text-white font-semibold pt-2 text-xl font-poppins px-2'>Canel ve Pandorosa anlaştı</p>
                    <p className='text-start text-white font-poppins text-sm px-2'>Breton IMAGEPLUS, plakalarin yüksek çözünürlüklü fotoğraflarını çekmek, arşivlemek ve etiketlemek için geliştirilmiş bir sistemdir.</p>
                </div>
                
            </div>
            <div style={{
                backgroundImage: `url(${newMachine})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                }} className={`flex flex-row justify-center items-end w-[350px] h-[220px]`}>
                <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} className='w-full h-[50%]'>
                    <p className='text-start text-white font-semibold pt-2 text-xl font-poppins px-2'>Canel Avrupa Birincisi</p>
                    <p className='text-start text-white font-poppins text-sm px-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, dolores!</p>
                </div>
                
            </div>
            <div style={{
                backgroundImage: `url(${pandrosa})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                }} className={`flex flex-row justify-center items-end w-[350px] h-[220px]`}>
                <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} className='w-full h-[50%]'>
                    <p className='text-start text-white font-semibold pt-2 text-xl font-poppins px-2'>Canel Avrupa Birincisi</p>
                    <p className='text-start text-white font-poppins text-sm px-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, dolores!</p>
                </div>
                
            </div>
            

        </div>

    </section>
  )
}

export default News