import React from 'react'
import Button from "../components/Button";

function CasesPage() {
  return (
      <div>
          <div className=" max-w-[691px] mx-auto flex flex-col items-center mt-14 mb-16">
              <h1 className="text-[24px] md:text-[52px] flex items-center font-bold uppercase text-center">
                  Наши кейсы</h1>
          </div>
          <iframe className="my-5" src="/pdf/BAŞAT%20KOMPANİ.pdf" width="100%" height="1200px">
              Ваш браузер не поддерживает отображение PDF-документов.
          </iframe>
          <iframe className="my-5" src="/pdf/CamScanner%2003-29-2024%2013.20.pdf" width="100%" height="1200px">
              Ваш браузер не поддерживает отображение PDF-документов.
          </iframe>
          <iframe className="my-5" src="/pdf/HAYDAN%20BAYİLİK.pdf" width="100%" height="1200px">
              Ваш браузер не поддерживает отображение PDF-документов.
          </iframe>
      </div>
  )
}

export default CasesPage