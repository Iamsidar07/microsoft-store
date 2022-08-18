import React, { useState } from "react";
import Features from "./Features";
import CardRow from "./CardRow";
import CardCol from "./CardCol";
import Banner from "./Banner";
import Collection from "./Collection";
import HomeBg from "./HomeBg";
import features, {
  labels,
  topFreeApps,
  freeMusicApps,
  bestSellingGames,
  featuredFreeApps,
  featuredFreeGames,
} from "../data/data";

const Hero = () => {
  const [feature, setFeature] = useState(
    features[Math.floor(Math.random() * 5)]
  );
  let {
    imgSrc,
    title,
    description,
    priceBeforeDiscount,
    priceAfterDiscount,
    ifFreeMessage,
  } = feature;

  return (
    <div className="relative md:w-[calc(100vw-3.5rem)] h-full  overflow-y-scroll overflow-x-hidden  space-y-5 no-scrollbar">
      
      <HomeBg
        imgSrc={imgSrc}
        title={title}
        description={description}
        priceBeforeDiscount={priceBeforeDiscount}
        priceAfterDiscount={priceAfterDiscount}
        ifFreeMessage={ifFreeMessage}
      />
     
      <Features features={features} setFeature={setFeature} />

      <div className="p-2 space-y-3">
        <CardRow
          rowTitle={"Top free apps"}
          rowMessage={"See all"}
          apps={topFreeApps}
        />
        <Banner
          bannerTitle={"Essential apps"}
          bannerDescription={
            "Take your windows experience to new heights with these must-have apps."
          }
          actionText={"See all"}
          apps={featuredFreeApps}
        />

        <CardCol
          rowTitle={"Music streaming apps"}
          rowMessage={"See all"}
          apps={freeMusicApps}
        />
        <CardCol
          rowTitle={"Best selling games"}
          rowMessage={"See all"}
          apps={bestSellingGames}
        />
        <Banner
          bannerTitle={"Featured free games"}
          bannerDescription={
            "Explore free fun to play games and find a new favorite."
          }
          actionText={"See all"}
          apps={featuredFreeGames}
        />
        <Collection
          heading={"Collections"}
          subHeading={"See all"}
          labels={labels}
        />
      </div>
    </div>
  );
};

export default Hero;
