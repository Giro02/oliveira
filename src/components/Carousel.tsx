import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "../styles/carousel.css"
import imagem from "./../images/aa5.png";
export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel()
  useEmblaCarousel.globalOptions = { loop: true }

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide ">
          <div className="">
            <img src={imagem} className='' alt="filho" width="500" height="300"></img>

          </div>
          
        </div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  )
}






