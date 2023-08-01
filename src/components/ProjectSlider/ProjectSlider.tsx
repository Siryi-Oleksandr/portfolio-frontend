import { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  SliderContainer,
  NextArrowStyled,
  ArrowNextIcon,
  ArrowPrevIcon,
  PrevArrowStyled,
} from './ProjectSlider.styled';

interface SliderProps {
  images: string[];
}

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <NextArrowStyled
      
      className={'slick-next slick-arrow'}
      aria-hidden="true"
      aria-disabled={false}
      onClick={onClick}
    >
      <ArrowNextIcon />
    </NextArrowStyled>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <PrevArrowStyled
      className={'slick-prev slick-arrow'}
      aria-hidden="true"
      aria-disabled={false}
      onClick={onClick}
    ><ArrowPrevIcon /></PrevArrowStyled>
  );
};

export const ProjectSlider: FC<SliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <SliderContainer>
      <Slider {...settings}>
        {images.map(image => {
          return (
            <div key={image}>
              <img src={image} alt={`Project${image}`} />
            </div>
          );
        })}
      </Slider>
    </SliderContainer>
  );
};
