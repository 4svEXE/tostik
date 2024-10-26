import React from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

const OurServices: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="OurServices flex flex-col md:gap-20 gap-10">
        <h2>
          {t("ourServices.title1")} <span>{t("ourServices.title2")}</span>
        </h2>

        <div className="services-grid grid-cols-1 md:grid-cols-4">
          <div className="grid-item">
            <h6>{t("ourServices.heading_1")}</h6>
            <p>{t("ourServices.paragraph_1")}</p>
          </div>
          <div className="grid-item">
            <h6>{t("ourServices.heading_2")}</h6>
            <p>{t("ourServices.paragraph_2")}</p>
          </div>
          <div className="grid-item">
            <h6>{t("ourServices.heading_3")}</h6>
            <p>{t("ourServices.paragraph_3")}</p>
          </div>
          <div className="grid-item">
            <h6>{t("ourServices.heading_4")}</h6>
            <p>{t("ourServices.paragraph_4")}</p>
          </div>
          <div className="grid-item">
            <h6>{t("ourServices.heading_5")}</h6>
            <p>{t("ourServices.paragraph_5")}</p>
          </div>
          <div className="grid-item">
            <h6>{t("ourServices.heading_6")}</h6>
            <p>{t("ourServices.paragraph_6")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
