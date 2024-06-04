import React from 'react';
import Button from "../components/Button";

function CasesPage() {
  const pdfDocuments = [
    { title: 'BAŞAT KOMPANİ', src: '/pdf/BAŞAT%20KOMPANİ.pdf' },
    { title: 'CamScanner 03-29-2024 13.20', src: '/pdf/CamScanner%2003-29-2024%2013.20.pdf' },
    { title: 'HAYDAN BAYİLİK', src: '/pdf/HAYDAN%20BAYİLİK.pdf' }
  ];

  return (
    <div>
      <div className="max-w-[691px] mx-auto flex flex-col items-center mt-14 mb-16">
        <h1 className="text-[24px] md:text-[52px] flex items-center font-bold uppercase text-center">
          Наши кейсы
        </h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-around">
          {pdfDocuments.map((pdf, index) => (
            <div key={index} className="card border border-gray-300 rounded-lg shadow-lg w-full md:w-1/3 m-4">
              <div className="card-header bg-gray-100 p-4 text-center font-bold">
                {pdf.title}
              </div>
              <div className="card-body p-4">
                 <embed src={pdf.src} className="pdf-viewer w-full h-80" frameBorder="0"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CasesPage;
