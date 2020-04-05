import React from "react";
import { Button, Icon, Form, Input } from "semantic-ui-react";
import firebase from "../../../utils/Firebase";
import "firebase/auth";

import "./RegisterForm.scss";

export default function RegisterForm(props) {
  const { setSelectedForm } = props;

  const onSubmit = () => {
    console.log("Formulario enviado...");
  };

  return (
    <div className="register-form">
      <h1>Empieza a escuchar con una cuenta de Musicfy gratis</h1>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <Input
            type="text"
            name="email"
            placeholder="Correo electrónico"
            icon="mail outline"
            /* onChange="" */
            /* error="" */
          ></Input>
        </Form.Field>

        <Form.Field>
          <Input
            type="password"
            name="password"
            placeholder="Contraseña"
            icon="eye"
            /* onChange="" */
            /* error="" */
          ></Input>
        </Form.Field>

        <Form.Field>
          <Input
            type="text"
            name="username"
            placeholder="¿Cómo deberíamos llamarte?"
            icon="user circle outline"
            /* onChange="" */
            /* error="" */
          ></Input>
        </Form.Field>
        <Button type="submit">Continuar</Button>
        <div className="register-form__options">
          <p onClick={() => setSelectedForm(null)}>Volver</p>
          <p>
            ¿Ya tienes Musicfy?{" "}
            <span onClick={() => setSelectedForm("login")}>Iniciar sesión</span>
          </p>
        </div>
      </Form>
    </div>
  );
}
