import { FC, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  SliderContainer,
  NextArrowStyled,
  ArrowNextIcon,
  ArrowPrevIcon,
  PrevArrowStyled,
  Dot,
  DotsContainer,
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
    >
      <ArrowPrevIcon />
    </PrevArrowStyled>
  );
};

export const ProjectSlider: FC<SliderProps> = ({ images }) => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: any) => (
      <DotsContainer>
        {dots.map((dot: any, index: number) => (
          <Dot
            key={index}
            className={dot.props.className}
            onClick={() => {
              if (sliderRef.current) {
                sliderRef.current.slickGoTo(index);
              }
            }}
          />
        ))}
      </DotsContainer>
    ),
  };
  return (
    <SliderContainer>
      <Slider ref={slider => (sliderRef.current = slider)} {...settings}>
        {images.map(image => {
          return (
            <div className='image-container' key={image}>
              <img
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
                src={image}
                alt={`Project${image}`}
              />
            </div>
          );
        })}
      </Slider>
    </SliderContainer>
  );
};
