import ContactForm from "./components/contact-form";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";

const Contacts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const splashes = [
    "Бутербродниця MAGIC",
    "Незамінна на кухні",
    "Швидке та красиве готування",
    "Чудовий подарунок",
    "Естетичні бутерброди",
    "Незамінна на кухні",
    "І подарунк",
  ]

  return (
    <section className="Contacts">
      <div className="md:grid-cols-2 grid grid-cols-1 gap-20">
        <div className="">
          <Slider {...settings}>
            {[...Array(7)].map((_, index) => (
              <div className="slide" key={index}>
                <img
                  src={`/tostik/img/home/product/${index + 1}.jpg`}
                  alt={`Слайд ${index + 1}`}
                />
                <h2>{splashes[index]}</h2>
              </div>
            ))}
          </Slider>
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
