import { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderContainer } from './ProjectSlider.styled';

interface SliderProps {
  images: string[];
}

export const ProjectSlider: FC<SliderProps> = ({ images }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <SliderContainer>
      <Slider {...settings}>
        {images.map(image => {
          return (
            <div key={image}>
              <img src={image} alt="Project" />
            </div>
          );
        })}
      </Slider>
    </SliderContainer>
  );
};
