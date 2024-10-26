import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

const WhyUs: React.FC = () => {
  const { t } = useTranslation();
  const slidesRef = useRef<HTMLDivElement | null>(null);

  return (
    <section>
      <div className="WhyUs flex flex-col gap-20">
        <h2>
          Чому <mark>MAGIO</mark> ?
        </h2>
        <div className="slides" ref={slidesRef}>
          <div className="slide">
            <div className="advantage-container">
            <div className="advantage">{t("advantage1")}</div>
            </div>
          </div>
          <div className="slide">
            <div className="advantage-container">
            <div className="advantage">{t("advantage1")}</div>
            </div>
          </div>
          <div className="slide">
            <div className="advantage-container">
            <div className="advantage">{t("advantage1")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
