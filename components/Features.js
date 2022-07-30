
import HeroItemCard from "./HeroItemCard";

const Features = ({features,setFeature}) => {
  return (
    <div className="overflow-x-scroll overflow-hidden w-full  py-4 px-4 flex space-x-4 no-scrollbar ">
    {features.map((feature, i) => {
      return (
        <div key={i} onClick={() => setFeature(feature)}>
          <HeroItemCard imgSrc={feature.imgSrc} title={feature.title} />
        </div>
      );
    })}
  </div>
  )
}

export default Features
