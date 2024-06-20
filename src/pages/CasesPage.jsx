import CertificateCarousel from "../components/CertificateCarousel";

const data = [
  { title: "BAŞAT KOMPANİ", images: ["/images/certificate-1.png", "/images/certificate-2.png", "/images/certificate-3.png"] },
  {
    title: "CamScanner 03-29-2024 13.20",
    images: ["/images/certificate-2.png"],
  },
  { title: "HAYDAN BAYİLİK", images: ["/images/certificate-3.png"] },
];

function CasesPage() {
  return (
    <div>
      <div className="max-w-[691px] mx-auto flex flex-col items-center mt-14 mb-16">
        <h1 className="text-[24px] md:text-[52px] flex items-center font-bold uppercase text-center">
          Наши кейсы
        </h1>
      </div>
      <div className="container mx-auto max-w-[700px]">
        <div className="divide-y divide-dashed">
          {data.map((certificate) => (
            <CertificateCarousel data={certificate} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CasesPage;
