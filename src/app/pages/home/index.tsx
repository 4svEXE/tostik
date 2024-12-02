import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Hiro from "./components/hiro";
import "./index.scss";

// Динамічний імпорт компонентів з React.lazy
const Contacts = React.lazy(() => import("./components/contacts"));
const WhyUs = React.lazy(() => import("./components/why-choose-us"));
const Upsale = React.lazy(() => import("./components/upsale"));
const Recipes = React.lazy(() => import("./components/recipes"));
const Faq = React.lazy(() => import("./components/faq"));

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <Helmet>
        <title>{t("site-title")}</title>
      </Helmet>

      <div id="first-screen">
        <Hiro />
      </div>

      <div className="container m-auto">
        <React.Suspense fallback={<div>Loading...</div>}>
          <div id="why-us">
            <WhyUs />
          </div>

          <div id="upsale">
            <Upsale />
          </div>

          <div id="recipes">
            <Recipes />
          </div>

          <div id="faq">
            <Faq />
          </div>

          <div id="get-product">
            <Contacts />
          </div>
        </React.Suspense>
      </div>
    </div>
  );
}
