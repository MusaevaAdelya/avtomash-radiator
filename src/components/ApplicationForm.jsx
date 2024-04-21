import Input from "./Input";

function ApplicationForm() {

    function handleSubmit(e){
        e.preventDefault();
        console.log("hello")
    }

  return (
    <form className="max-w-[320px] mx-auto space-y-4 mt-6" onSubmit={handleSubmit}>
      <Input icon="/images/form-person-icon.svg" placeholder="Ваше имя"/>
      <Input icon="/images/form-phone-icon.svg" placeholder="Ваш номер" />
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
