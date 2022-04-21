import "./App.css";
import { Field, Form, Formik } from "formik";
import Postman from "./assets/gif/postman.gif";
import Button from "./components/UI/Button";
import Inputs from "./components/form/Inputs";
import TextEditor from "./components/UI/TextEditor";
import { ISendMail, sendMails } from "./services/mailing.service";

function App(): JSX.Element {
  const intials: ISendMail = {
    html: "",
    bcc: "mariano.trey@gmail.com,tuvieja218@hotmail.com,brosioalejo@hotmail.com,brosioalejo@gmail.com",
    subject: "ASUNTO",
  };

  const handleSubmit = async (values: ISendMail) => {
    console.log(values);
    await sendMails(values);
  };

  return (
    <div className="body">
      <Formik initialValues={intials} onSubmit={handleSubmit}>
        {(formik) => (
          <Form>
            <div className="formContainer">
              <div className="flexeado">
                <h1>El Cartero Peronista</h1>
                <div style={{ flex: 1 }} />
                <img src={Postman} alt="postman" width="100" />
              </div>
              <Inputs
                name="subject"
                label="Asunto"
                onChange={formik.handleChange}
              />
              <Field
                as="textarea"
                rows={8}
                name="bcc"
                placeholder="Destinatarios (separar mails con una coma ',')"
              />
              <div
                style={{ margin: 20, backgroundColor: "white", color: "black" }}
              >
                <TextEditor
                  onChange={(valor) => {
                    formik.setFieldValue("html", valor);
                    console.log(valor);
                  }}
                  text={formik.values.html || ""}
                />
              </div>
            </div>
            <Button
              block
              style={{ marginTop: 8 }}
              type="submit"
              label="Enviar"
            ></Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
