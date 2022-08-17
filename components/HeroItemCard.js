import Image from 'next/image'


const HeroItemCard = ({imgSrc,title}) => {
  
  return (
    <div className='relative min-w-[220px] text-white cursor-pointer group md:hover:scale-105  rounded-xl   transition-all ease-in duration-100 bg-black '>
      <Image
        layout='responsive'
        src={imgSrc}
        objectFit="cover"
        width={1920}
        height={1080}
        quality={100}
        className="item-left-mask rounded-xl md:group-hover:translate-x-1 transition-all ease-in duration-200"
      />
      <p className='pl-2  shadow-2xl shadow-black  md:opacity-0 md:group-hover:opacity-100 transition-all ease-in duration-100  absolute top-1/2 bottom-1/2'>
        {title}
      </p>
    </div>
  )
}

export default HeroItemCard
