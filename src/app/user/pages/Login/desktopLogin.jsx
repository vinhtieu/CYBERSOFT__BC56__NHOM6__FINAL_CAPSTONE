import React, { useState } from "react";
import "./style.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { LOGGING_IN } from "../../../../constant/constants";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import userSlice from "../../../../lib/redux/slices/userSlice";

export default function DesktopLogin() {
  const { setUserAccount, setUserStatus } = userSlice.actions;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const account = {
      taiKhoan: values.username,
      matKhau: values.password,
    };

    dispatch(setUserStatus(LOGGING_IN));
    dispatch(setUserAccount(account));
  };

  return (
    <>
      <div className="relative w-screen h-screen">
        <div className="absolute z-10 flex flex-col items-center justify-start w-[26rem] transition-all p-6 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md h-2/3 top-1/2 left-1/2">
          <span className="block mt-4 mb-16 text-5xl font-medium text-black">
            Login
          </span>
          <Form
            name="normal_login"
            className="w-[85%] login-form"
            initialValues={{
              remember: false,
              size: "large",
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                className="h-12"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                className="h-12"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item className="">
              <Form.Item
                name="remember"
                className="mb-0"
                valuePropName="checked"
                style={{ display: "inline-block" }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item className="mb-0" style={{ display: "inline-block" }}>
                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button
                type=""
                htmlType="submit"
                className="login-form-button text-lg transition-all bg-[#ad3639] hover:bg-[#b73a3e] text-white w-full h-12"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
          <span className="mt-auto">
            Don't have an account? &nbsp;
            <div
              className="transition-all text-[#ad3639] hover:text-[#b73a3e] inline"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
