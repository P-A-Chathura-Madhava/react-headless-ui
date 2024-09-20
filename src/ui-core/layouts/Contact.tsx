import InputField from "../components/atoms/InputField";
import ComboBox from "../components/atoms/ComboBox";
import ButtonComponent from "../components/atoms/ButtonComponent";

function Contact() {
  const data: string[] = ["Name", "Email", "Mobile", "Subject"];

  return (
    <div className="py-10 px-80">
      <h2 className="text-xl font-bold text-center">Contact Me</h2>
      {data?.map((data, key) => {
        return <InputField key={key} {...{ labelTitle: data }} />;
      })}
      <ComboBox />
      <div className="flex items-center justify-center mt-6">
        <ButtonComponent {...{ title: "Submit" }} />
      </div>
    </div>
  );
}

export default Contact;
