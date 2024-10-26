import React from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="About grid md:grid-cols-2 gap-20">
        <div className="col-span-1">
          <img
            src="/assets/img/about/collage.png"
            alt="boxes for moving"
          />
        </div>
        <div className="col-span-1 flex flex-col justify-center">
          <ul className="list-disc list-outside pl-6 marker-custom">
            <li>
              <strong>{t("var.companyCaps")}</strong> {t("about.p1")}
            </li>
            <li>{t("about.p2")}</li>
            <li>{t("about.p3")}</li>
            <li>{t("about.p4")}</li>
            <li>{t("about.p5")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
