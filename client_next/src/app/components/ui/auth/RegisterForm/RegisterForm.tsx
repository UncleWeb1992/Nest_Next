"use client";

import React, { FC } from "react";
import styles from "./RegisterForm.module.scss";
import { Button, Form, Input } from "antd";
import { useRegisterFormController } from "./RegisterForm.controller";

const RegisterForm: FC = () => {
  const { isLoading, onSubmit } = useRegisterFormController();
  return (
    <div className={styles.container}>
      <Form name="basic" labelCol={{ span: 8 }} onFinish={onSubmit}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Name"
          name="fullName"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button loading={isLoading} type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterForm;
