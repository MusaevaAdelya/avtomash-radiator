import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-10 md:py-28 bg-dark-400">
      <div className="mx-auto flex container items-start justify-between p-6 md:px-8 lg:max-w-[83rem] text-dark-200 font-medium gap-8 lg:gap-36 lg:flex-row flex-col">
        <img className="w-auto h-20" src="/images/logo_1.jpg" alt="Logo" />
        <p className="text-xl">
          ЖСК Башат предоставляет широкий ассортимент сельскохозяйственной техники в
          лизинг и даем гарантию на продукцию на один год.
        </p>
        <div>
          {/*<p className="flex gap-5 whitespace-nowrap"><Link to="#">Про нас</Link><Link to="#">Преимущества</Link><Link to="#">Хиты продаж</Link></p>*/}
          <p className="flex gap-5 whitespace-nowrap">
            <Link to="/">Главная</Link>
            <Link to="/products">Продукты</Link>
            <Link to="/about-us">О нас</Link>
            <Link to="/cases">Наши кейсы</Link>
          </p>
        </div>
        <div className="flex gap-3">
          <Link to="https://wa.me/996550418181" target="_blank">
            <img
              src="/images/whatsapp-white.svg"
              alt="whatsapp icon"
              className="w-auto h-auto lg:w-20"
            />
          </Link>
          <Link
            to="https://www.instagram.com/jskbashat?igsh=MXh0czJ6cDA3NTc0Yg=="
            target="_blank"
          >
            <img
              src="/images/instagram-white.svg"
              alt="instagram icon"
              className="w-auto h-auto lg:w-20"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
