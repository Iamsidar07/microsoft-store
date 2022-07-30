import Image from 'next/image'


const HeroItemCard = ({imgSrc,title}) => {
  
  return (
    <div className='relative h-32 w-60 md:min-w-[254px] min-w-[220px] text-white cursor-pointer group md:hover:border-sky-600 md:hover:border-4 rounded-xl md:hover:scale-105  transition-all ease-in duration-100 bg-black '>
      <Image
        layout='fill'
        src={imgSrc}
        objectFit="cover"
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
