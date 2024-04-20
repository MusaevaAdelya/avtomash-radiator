import HeroImage from "../components/HeroImage"
import HeroInfoBlock from "../components/HeroInfoBlock"
import Technologies from "../components/Technologies"
import Technics from "../components/Technics"
import ProductsMain from "../components/ProductsMain"
import AdditionalInfo from "../components/AdditionalInfo"

function HomePage() {
    return (
        <>
            <HeroInfoBlock/>
            <HeroImage/>
            <Technologies/>
            <Technics/>
            <ProductsMain/>
            <AdditionalInfo/>
        </>
    )
}

export default HomePage
