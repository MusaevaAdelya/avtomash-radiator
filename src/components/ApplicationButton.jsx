import { useState } from "react";
import Button from "./Button";
import ModalWindow from "./ModalWindow";

function ApplicationButton({ children, formTitle }) {
  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <Button
        styleClasses="flex items-center py-2.5 px-8 bg-primary text-lg text-white font-medium rounded-full"
        onClickHandler={() => {
          setOpen(true);
          setIsSubmitted(false);
        }}
      >
        {children}
      </Button>

      <ModalWindow
        open={open}
        setOpen={setOpen}
        title={formTitle}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
      />
    </>
  );
}

export default ApplicationButton;
