import ContactForm from "./components/contact-form";
import "./index.scss";
import { useTranslation } from "react-i18next"; // Імпорт функції локалізації

const Contacts = () => {
  const { t } = useTranslation(); // Виклик функції локалізації

  return (
    <section className="Contacts">
      <img
        className="map"
        src="/assets/img/Map.svg"
        alt={t("footer.altLogo")}
      />

      <div className="md:grid-cols-2 grid grid-cols-1 gap-20">
        <div className="col-span-1 flex flex-col items-center">
          <div className="col-span-1 flex flex-col gap-10 w-full">
            <h2 className="w-full md:text-start text-center mb-4">
              {t("footer.contacts")}
            </h2>
            <div className="flex flex-col gap-2">
              <h6>{t("footer.email")}</h6>
              <a href={`mailto:${t("var.email")}`}>{t("var.email")}</a>
            </div>

            <div className="flex flex-col gap-2">
              <h6>{t("workingHours")}</h6>
              <p>
                {t("workingHoursText")} — <span>{t("workingHours24")}</span>
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h6>{t("footer.phone")}</h6>
              <a href={`tel:${t("var.tel")}`}>{t("var.tel")}</a>
            </div>

            <div className="flex flex-col gap-2">
              <h6>IČO:</h6>
              <p>22060910</p>
            </div>

            <div className="flex gap-3 flex-wrap justify-center md:justify-start m-auto w-[80%] md:w-full">
              <a href={`tel:${t("var.tel")}`} className="Btn telegram">
                <img src="/assets/icons/phone.svg" width="40px" alt="phone" />
              </a>

              <a href="https://t.me/+420775473171" className="Btn telegram">
                <img src="/assets/icons/tg.svg" width="40px" alt="Telegram" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61567518533792"
                className="Btn facebook"
              >
                <img src="/assets/icons/fb.svg" width="40px" alt="Facebook" />
              </a>

              <a href="https://m.me/bohrom.stehovani" className="Btn messenger">
                <img
                  src="/assets/icons/fb_msgr.svg"
                  width="40px"
                  alt="Messenger"
                />
              </a>

              <a href="viber://chat?number=%2B420775473171" className="Btn viber">
                <img src="/assets/icons/viber.svg" width="40px" alt="Viber" />
              </a>

              <a href="https://wa.me/420775473171" className="Btn whatsapp">
                <img
                  src="/assets/icons/whatsap.svg"
                  width="40px"
                  alt="WhatsApp"
                />
              </a>
            </div>
          </div>
        </div>

        <div
          className="col-span-1 flex flex-col items-end md:w-[75%]"
          id="contact-form"
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
