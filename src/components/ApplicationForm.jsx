import Input from "./Input";
import { useState } from "react";

function ApplicationForm({ setIsSubmitted, productId=null }) {
  const [formData, setFormData] = useState({
    id:productId,
    name: "",
    phoneNumber: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);

    // axios
    //   .post("your_server_url", formData)
    //   .then((response) => {
    //     console.log("Form data sent:", formData);
    //     setIsSubmitted(true);
    //   })
    //   .catch((error) => {
    //     console.error("Error submitting form:", error);
    //   });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <form
      className="max-w-[320px] mx-auto space-y-4 mt-6"
      onSubmit={handleSubmit}
    >
      <Input
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        icon="/images/form-person-icon.svg"
        placeholder="Ваше имя"
      />
      <Input
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        icon="/images/form-phone-icon.svg"
        placeholder="Ваш номер"
      />
      <button
        type="submit"
        className="w-full px-8 py-4 text-lg font-medium text-white rounded-full bg-primary"
      >
        Отправить
      </button>
    </form>
  );
}

export default ApplicationForm;
