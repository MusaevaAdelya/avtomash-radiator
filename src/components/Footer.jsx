import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-10 md:py-28 bg-dark-400">
      <div className="mx-auto flex container items-start justify-between p-6 md:px-8 lg:max-w-[83rem] text-dark-200 font-medium gap-8 lg:gap-36 lg:flex-row flex-col">
          <img className="w-auto h-20" src="/images/logo_1.jpg" alt="Logo"/>
        <p className="text-xl">
          Шестая планета по удалённости от Солнца и вторая по размерам планета в
          Солнечной системе после Юпитера.
        </p>
        <div>
          {/*<p className="flex gap-5 whitespace-nowrap"><Link to="#">Про нас</Link><Link to="#">Преимущества</Link><Link to="#">Хиты продаж</Link></p>*/}
          <p className="flex gap-5 whitespace-nowrap"><Link to="/">Главная</Link><Link to="/products">Продукты</Link><Link to="/cases">Наши кейсы</Link></p>
        </div>
        <div className="flex gap-3">
          <Link to="#">
            <img src="/images/whatsapp-white.svg" alt="whatsapp icon" className="w-auto h-auto lg:h-20 lg:w-20" />
          </Link>
          <Link to="#">
            <img src="/images/instagram-white.svg" alt="instagram icon"  className="w-auto h-auto lg:h-20 lg:w-20"/>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
