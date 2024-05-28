import Input from "./Input";
import {useState} from "react";
import {postOrderRequest} from "../services/orderService";

function ApplicationForm({setIsSubmitted, productId = null}) {
    const [formData, setFormData] = useState({
        id: productId,
        name: "",
        phoneNumber: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        setIsSubmitted(true);
        // Вызываем postOrderRequest, передавая необходимые параметры из formData
        postOrderRequest(formData.name, formData.phoneNumber, productId)
            .then((response) => {
                console.log("Form data sent:", response);
                setIsSubmitted(true);  // Устанавливаем флаг успешной отправки
            })
            .catch((error) => {
                console.error("Error submitting form:", error);
                setIsSubmitted(false); // Устанавливаем флаг неудачной отправки, можно также уведомить пользователя
            });
    }

    function handleInputChange(e) {
        const {name, value} = e.target;
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
