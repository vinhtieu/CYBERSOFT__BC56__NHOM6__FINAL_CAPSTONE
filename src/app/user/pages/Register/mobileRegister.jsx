import React from "react";
import "./style.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";

import userSlice from "../../../../lib/redux/slices/userSlice";

export default function MobileRegister() {
  const { setRegisterStatus, setRegisterAccount } = userSlice.actions;
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const accountRegister = {
      taiKhoan: values.fullName,
      matKhau: values.password,
      hoTen: values.fullName,
      soDT: values.phone,
      maNhom: "GP01",
      email: values.email,
    };

    dispatch(setRegisterStatus(PROCESSING));
    dispatch(setRegisterAccount(accountRegister));
  };

  return (
    <div className="relative w-screen h-screen">
      <div className="absolute z-10 flex flex-col items-center justify-start p-8 transition-all -translate-x-1/2 -translate-y-1/2 bg-white rounded-md w-[600px] h-fit top-1/2 left-1/2">
        <span className="block mt-4 mb-10 text-5xl font-medium text-black">
          Register
        </span>

        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          style={{
            width: 500,
          }}
          scrollToFirstError
        >
          <Form.Item
            name="fullName"
            label="User"
            rules={[
              {
                type: "name",
                message: "Input is not valid!",
              },
              {
                required: true,
                message: "Please enter your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            className="mb-10"
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please enter your phone number!",
              },
            ]}
          >
            <Input
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 24,
              offset: 0,
            }}
            className="mb-16"
          >
            <Button
              type=""
              htmlType="submit"
              className="login-form-button text-base transition-all bg-[#ad3639] hover:bg-[#b73a3e] text-white w-full h-12"
            >
              Register
            </Button>
          </Form.Item>
        </Form>
        <span className="mt-auto">
          Already have an account?&nbsp;&nbsp;
          <div
            className="transition-all cursor-pointer text-[#ad3639] hover:text-[#b73a3e] inline-block"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in
          </div>
        </span>
      </div>
    </div>
  );
}
