import { Flex, FlexProps, useBreakpointValue } from '@chakra-ui/react';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import ContinentSlide from './ContinentSlide';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = {
  europe: '/images/backgrounds/europe.svg',
  asia: '/images/backgrounds/asia.svg',
  oceania: '/images/backgrounds/oceania.svg',
  africa: '/images/backgrounds/africa.svg',
  northAmerica: '/images/backgrounds/north-america.svg',
  southAmerica: '/images/backgrounds/south-america.svg'
};

function Continents({ ...rest }: FlexProps) {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  const swiperWidth = isMobile ? 414 : 1240;

  return (
    <Flex
      my={["24px", "52px"]}
      mx="auto"
      align="center"
      justify="center"
      textAlign="center"
      w={["100%", "1240px"]}
      h={["250px", "450px"]}
      pb={["24px", "40px"]}
      {...rest}
    >
      <Swiper
        cssMode={true}
        pagination={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Pagination, Navigation, Mousewheel, Keyboard]}
        width={swiperWidth}
      >

        <SwiperSlide>
          <ContinentSlide title='Europa' description='O continente mais antigo.' background={images.europe} link="/destinations/europe" />
        </SwiperSlide>
        <SwiperSlide>
          <ContinentSlide title='Ásia' description='O maior continente.' background={images.asia} link="/destinations/asia" />
        </SwiperSlide>
        <SwiperSlide>
          <ContinentSlide title='Oceania' description='O novíssimo mundo.' background={images.oceania} link="/destinations/oceania" />
        </SwiperSlide>
        <SwiperSlide>
          <ContinentSlide title='África' description='O berço da humanidade.' background={images.africa} link="/destinations/africa" />
        </SwiperSlide>
        <SwiperSlide>
          <ContinentSlide title='América do Sul' description='O novo mundo.' background={images.southAmerica} link="/destinations/south-america" />
        </SwiperSlide>
        <SwiperSlide>
          <ContinentSlide title='América do Norte' description='O novo mundo.' background={images.northAmerica} link="/destinations/north-america" />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}

export default Continents;