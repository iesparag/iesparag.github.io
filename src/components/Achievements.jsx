import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Ncc from "../assets/N.C.C_certificate .jpg";
import Goi from "../assets/GOI.jpg";
import Headquarter from "../assets/Headquarters_Certificate.jpg";
import masai from "../assets/masai_award.jpg";
import figma from "../assets/figma.png";
import bootstrap from "../assets/bootstrap.png";
import "./Achievements.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";

const Achievements = () => {
    const swiperBreakpoints = {
        // When window width is >= 320px
        240: {
            slidesPerView: 1,
        },
        // When window width is >= 768px
        768: {
            slidesPerView: 2,
        },
        // When window width is >= 992px
        992: {
            slidesPerView: 3,
        },
        // When window width is >= 1200px
    };
    return (
        <Box
            id="achievements"
            paddingTop={{ base: "70px", sm: "70px", md: "100px", lg: "100px" }}
        >
            <Box className="section-title">
                <Heading as="h2" opacity="0.5" size="2xl">
                    Achievements
                </Heading>
            </Box>
            <Swiper
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                speed={500}
                spaceBetween={40}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={swiperBreakpoints}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="SwiperSlide">
                    <img src={figma} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bootstrap} className="SwiperSlide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={masai} className="SwiperSlide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ncc} className="SwiperSlide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Headquarter} className="SwiperSlide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Goi} className="SwiperSlide" />
                </SwiperSlide>
            </Swiper>
        </Box>
    );
};

export default Achievements;
