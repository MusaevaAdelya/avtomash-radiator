import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ApplicationForm from "./ApplicationForm";

export default function ModalWindow({ open, setOpen, title, isSubmitted, setIsSubmitted }) {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-dark-500/60" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`relative p-10 overflow-hidden text-left transition-all transform rounded-3xl shadow-xl ${
                  isSubmitted ? "bg-white" : "bg-black/50"
                } sm:my-8 sm:w-full sm:max-w-lg `}
              >
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center gap-5 text-lg text-center">
                    <img src="/images/done-orange.svg" alt="done" />
                    <h5 className="font-semibold">Спасибо!<br/> Мы позвоним как можно быстрее</h5>
                    <button className="pb-1 border-b border-dark-50 text-dark-50" onClick={()=> setOpen(false)}>Вернуться назад</button>
                  </div>
                ) : (
                  <>
                    <div className="text-center text-white">
                      <h5 className="mb-2 text-4xl font-semibold">{title}</h5>
                      <p className="font-medium">
                        Шестая планета по удалённости от Солнца и вторая по
                        размерам планета в Солнечной системе после Юпитера.
                      </p>
                    </div>

                    <ApplicationForm setIsSubmitted={setIsSubmitted} />
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
