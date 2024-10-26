import i18next from "i18next";
const localesHelper = {toggleLanguage: ()=>{}};

localesHelper.toggleLanguage = () => {
  const language = window.localStorage.getItem("i18nextLng");

  language === "en"
    ? i18next.changeLanguage("cz")
    : i18next.changeLanguage("en");
};

export default localesHelper;
