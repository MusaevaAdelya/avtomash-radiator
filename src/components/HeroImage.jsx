import { Link } from "react-router-dom";

function HeroImage() {
    return (
        <Link to="/products/1">
            <div className="h-[473px] md:h-[587px] overflow-hidden relative rounded-3xl ">
                <img className="absolute object-cover w-full h-full transform -translate-x-1/2 -translate-y-1/2 -z-10 top top-1/2 left-1/2" src="/images/tractor-main-1.jpg" alt="tractor" />
                <div className="flex flex-col justify-end w-full h-full p-10 text-white bg-darken">
                    <p className="">Профессиональный трактор</p>
                    <h3 className="text-2xl font-semibold">John Deere E14</h3>
                </div>
            </div>
        </Link>
    )
}

export default HeroImage
