/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Login.css";
import patita from "./patita.png";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";
import FormItemLabel from "antd/lib/form/FormItemLabel";

const Login = () => {
  let navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div className="login_wrapper">
        <div class="div_login_wrapper">
          <div className="div_img_login">
            <img src={patita} width="70px" height="70px" alt="patita" />
            <h2>Login</h2>
          </div>

          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese su usuario!",
                },
              ]}
            >
              <Input
                className="input_name"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese su contraseña!",
                },
              ]}
            >
              <Input
                className="input_name"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="captcha"
              rules={[
                {
                  required: true,
                  message: "Ingrese Valor!",
                },
              ]}
            >
              <Card
                size="small"
                title="Validá que no sos un Robot"
                className="card_captcha"
                style={{  }}
              >
                <label style={{ width: 100, height:20}}>13 + 11 = </label>
                <Input className="input_number" type="text" placeholder="_ _" />
              </Card>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={() => navigate("/main")}
              >
                Iniciar sesión
              </Button>
            </Form.Item>

            <Form.Item>
              <a className="forget" onClick={() => navigate("/recuperar")}>
                ¿Olvidaste tu contraseña?
              </a>
            </Form.Item>
          </Form>
          <div className="volver">
            <a onClick={() => navigate("/")}>{"< "}Volver a Home</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
