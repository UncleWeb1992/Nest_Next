"use client";

import React, { FC } from "react";
import styles from "./LoginForm.module.scss";
import { Button, Form, Input } from "antd";
import { useLoginFormController } from "./LoginForm.controller";

const LoginForm: FC = () => {
  const { isLoading, onSubmit } = useLoginFormController();
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

export default LoginForm;
