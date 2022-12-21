import React, { useState } from 'react'
import './Slider.Styles.scss'
import BtnSlider from './SliderButton'

function Slider({ slides }) {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== slides.length) {
      setSlideIndex(slideIndex + 1)
    }
    else if (slideIndex === slides.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1) {
      setSlideIndex(slides.length)
    }
  }

  const moveDot = index => {
    setSlideIndex(index)
  }

  // TODO : Research the interval in HoidanIT channel.

  return (
    <div className="container-slider">
      {slides.map((slide, index) => {
        return (
          <div
            key={slide.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
            <img src={require(`../../../assets/images/slides/img${index + 1}.jpg`)} alt='' />
          </div>
        )
      })}

      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div key={index} onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
        ))}
      </div>
    </div>
  )
}

export default Slider