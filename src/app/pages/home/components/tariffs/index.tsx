import React from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

const Tariffs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="Tariffs flex flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-3">
          <h2>{t("tariffs.title")}</h2>
          <p>{t("tariffs.p")}</p>
        </div>

        <div className="items-container">
          <div className="tariff-item">
            <img
              src="/assets/img/tariffs/1.svg"
              alt={t("tariffs.price1")}
            />
            <div className="flex flex-col gap-4 items-center justify-center">
              <p>{t("tariffs.vehicle")}</p>
              <strong>{t("tariffs.price1")}</strong>
            </div>
          </div>
          <div className="tariff-item">
            <img
              src="/assets/img/tariffs/2.svg"
              alt={t("tariffs.vehicle") + " " + t("tariffs.loader1")}
            />
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="flex flex-col items-center">
                <p>{t("tariffs.vehicle")}</p>+<p>{t("tariffs.loader1")}</p>
              </div>
              <strong>{t("tariffs.price2")}</strong>
            </div>
          </div>
          <div className="tariff-item">
            <img
              src="/assets/img/tariffs/3.svg"
              alt={t("tariffs.vehicle") + " " + t("tariffs.loader2")}
            />
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="flex flex-col items-center">
                <p>{t("tariffs.vehicle")}</p>+<p>{t("tariffs.loader2")}</p>
              </div>
              <strong>{t("tariffs.price3")}</strong>
            </div>
          </div>
          <div className="tariff-item">
            <img
              src="/assets/img/tariffs/4.svg"
              alt={t("tariffs.vehicle") + " " + t("tariffs.loader3")}
            />
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="flex flex-col items-center">
                <p>{t("tariffs.vehicle")}</p>+<p>{t("tariffs.loader3")}</p>
              </div>
              <strong>{t("tariffs.price4")}</strong>
            </div>
          </div>
          <div className="tariff-item">
            <img
              src="/assets/img/tariffs/5.svg"
              alt={t("tariffs.kmRate")}
            />
            <div className="flex flex-col gap-4 items-center justify-center">
              <p>{t("tariffs.kmRate")}</p>
              <strong>{t("tariffs.price5")}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tariffs;
