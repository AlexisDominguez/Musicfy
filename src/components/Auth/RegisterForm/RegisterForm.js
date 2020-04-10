import React, { useState } from "react";
import { Button, Icon, Form, Input } from "semantic-ui-react";
import { validateEmail } from "../../../utils/Validations";
import firebase from "../../../utils/Firebase";
import "firebase/auth";

import "./RegisterForm.scss";

export default function RegisterForm(props) {
  const { setSelectedForm } = props;
  const [formData, setFormData] = useState(defaultValueForm());
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {
    setFormError({});
    let errors = {};
    let formOk = true;

    if (!validateEmail(formData.email)) {
      errors.email = true;
      formOk = false;
    }

    if (formData.password.length < 6) {
      errors.password = true;
      formOk = false;
    }

    if (!formData.username) {
      errors.username = true;
      formOk = false;
    }

    setFormError(errors);

    if (formOk) {
      console.log("Formulario VALIDO");
    }
  };

  const handlerShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="register-form">
      <h1>Empieza a escuchar con una cuenta de Musicfy gratis</h1>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Field>
          <Input
            type="text"
            name="email"
            placeholder="Correo electrónico"
            icon="mail outline"
            error={formError.email}
          ></Input>
          {formError.email && (
            <span className="error-text">
              Por favor, introduce un correo electrónico válido.
            </span>
          )}
        </Form.Field>
        <Form.Field>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Contraseña"
            icon={
              showPassword ? (
                <Icon
                  name="eye slash outline"
                  link
                  onClick={handlerShowPassword}
                />
              ) : (
                <Icon name="eye" link onClick={handlerShowPassword} />
              )
            }
            error={formError.password}
          ></Input>
          {formError.password && (
            <span className="error-text">
              La contraseña debe tener más de 6 caractéres.
            </span>
          )}
        </Form.Field>
        <Form.Field>
          <Input
            type="text"
            name="username"
            placeholder="¿Cómo deberíamos llamarte?"
            icon="user circle outline"
            error={formError.username}
          ></Input>
          {formError.username && (
            <span className="error-text">Introduce un nombre de usuario.</span>
          )}
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

function defaultValueForm() {
  return {
    email: "",
    password: "",
    username: "",
  };
}
