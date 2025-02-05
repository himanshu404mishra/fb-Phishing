import { useEffect } from "react";
import { images } from "./bannerData";
import Banner from "./Banner";

export default function Marquee() {
  useEffect(() => {
    const marquee = document.querySelector(".marquee");
    let scrollAmount = 0;

    const scrollMarquee = () => {
      scrollAmount -= 1;
      marquee.style.transform = `translateX(${scrollAmount}px)`;
      if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
        scrollAmount = 0;
      }
      requestAnimationFrame(scrollMarquee);
    };

    scrollMarquee();
  }, []);
  return (
    <div className="marquee flex justify-evenly items-center mt-10 pointer-events-none select-none">
      {images.map((image, index) => {
        let isMeta = false;
        image.split("-").forEach((elem) => {
          if (elem === "meta") {
            isMeta = true;
          }
        });

        return <Banner key={index} img={image} isMeta={isMeta} />;
      })}
    </div>
  );
}
