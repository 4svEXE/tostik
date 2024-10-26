import React from "react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

import "swiper/scss";
import "swiper/scss/navigation";

import "./index.scss";
import Loader from "../../../../components/shared/loader";

const OurTeam: React.FC = () => {
  const { t } = useTranslation();

  const teamMembers = [
    { id: 6, image: "/assets/img/our-team/6.jpg" },
    { id: 1, image: "/assets/img/our-team/1.jpg" },
    { id: 3, image: "/assets/img/our-team/3.jpg" },
    { id: 8, image: "/assets/img/our-team/8.jpg" },
    { id: 2, image: "/assets/img/our-team/2.jpg" },
    { id: 5, image: "/assets/img/our-team/5.jpg" },
    { id: 7, image: "/assets/img/our-team/7.jpg" },
    { id: 4, image: "/assets/img/our-team/4.jpg" },
  ];

  return (
    <section>
      <div className="OurTeam flex flex-col gap-20">
        <h2>
          {t("ourTeam.title")} <span>{t("ourTeam.subtitle")}</span>
        </h2>

        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={50}
            navigation
            breakpoints={{
              640: { slidesPerView: 1 }, // для мобільних
              1024: { slidesPerView: 3 }, // для планшетів
              1440: { slidesPerView: 4 }, // для десктопів
            }}
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="slide">
                  <Loader />
                  <img src={member.image} alt={t(`ourTeam.alt${member.id}`)} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
