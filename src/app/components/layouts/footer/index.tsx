import React from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

// Оголошуємо тип для лінків
interface Links {
  start: string;
  about: string;
  services: string;
  tarifs: string;
  contacts: string;
}

interface SidebarProps {}

const Footer: React.FC<SidebarProps> = () => {
  const { t } = useTranslation();

  // Використовуйте тип для `links`
  const links: Links = t("nav.links", { returnObjects: true }) as Links;
  const tel = t("var.tel");
  const email = t("var.email");

  return (
    <footer className="Footer">
      <div className="container m-auto grid md:grid-cols-4 grid-cols-1 gap-10">
        <a href={links.start}>
          <img src="/assets/logo-black.svg" alt={t("footer.altLogo")} />
        </a>

        <div className="flex flex-col gap-2">
          <h6>{t("footer.navigation")}</h6>
          <ul className="flex flex-col gap-2">
            <li>
              <a href={links.about}>{t("footer.aboutUs")}</a>
            </li>
            <li>
              <a href={links.services}>{t("footer.services")}</a>
            </li>
            <li>
              <a href={links.tarifs}>{t("footer.tarifs")}</a>
            </li>
            <li>
              <a href={links.contacts}>{t("footer.contacts")}</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h6>{t("footer.email")}</h6>
          <ul>
            <li>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h6>{t("footer.phone")}</h6>
          <ul>
            <li>
              <a href={`tel:${tel}`}>{tel}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
