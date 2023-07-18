"use client";
import React from "react";
import Navbar from "../../../../components/navbar";
import styles from "@/../style/style.module.css";
import Form from "antd/es/form";
import { Button, Input, Radio, Space } from "antd";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import FormItem from "antd/es/form/FormItem";
import Link from "next/link";

const JoinUs = () => {
  interface value {
    email: string;
    password: string;
  }
  const handleSubmit = (values: value) => {
    console.log(values);
  };

  return (
    <div className=" text-gray-800 w-full">
      <Navbar />
      <div className={`${styles.loginImg} w-[100%]  bg-no-repeat`}>
        <div className={`${styles.fadeInLeftBig} pt-20`}>
          <div className=" sm:w-[60%] w-[100%] flex-col flex items-center text-center">
            <h1 className="text-5xl font-semibold mx-3 leading-[4rem]">
              Create new account
            </h1>
            <h2 className="mt-4 font-light">sign up using social network</h2>
            <div className="flex justify-center mt-1 gap-x-4">
              <BsFacebook className="text-blue-900 w-12 h-12" />
              <FcGoogle className=" w-12 h-12" />
              <FaLinkedinIn className="text-blue-900 w-12 h-12" />
            </div>
            <div className="pt-7 pb-3">OR</div>
            <Form onFinish={handleSubmit} className="space-y-2  w-[60%]">
              <div className="flex justify-between">
                <FormItem name="firstName" className="w-[45%]">
                  <Input
                    type="text"
                    placeholder="First Name"
                    bordered={false}
                    className="inputBorder"
                  />
                </FormItem>
                <FormItem name="lastName" className="w-[45%]">
                  <Input
                    type="text"
                    placeholder="Last Name"
                    bordered={false}
                    className="inputBorder"
                  />
                </FormItem>
              </div>
              <FormItem name="Dob" label="Date of Birth" className="ml-3">
                <Input
                  placeholder="Date of birth"
                  bordered={false}
                  className="inputBorder"
                  type="Date"
                />
              </FormItem>
              <FormItem name="gender" label="Gender" className="pt-4 ml-3">
                <Radio.Group>
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                  <Radio value="other">Other</Radio>
                </Radio.Group>
              </FormItem>
              <FormItem
                name="email"
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
                <Input
                  placeholder="Email"
                  bordered={false}
                  className="inputBorder"
                />
              </FormItem>
              <FormItem
                name="password"
                rules={[
                  { required: true, message: "Please add a password" },
                  {
                    min: 8,
                    message: "Password must have a minimum length of 8",
                  },
                  {
                    pattern: new RegExp(
                      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
                    ),
                    message:
                      "Password must contain at least one lowercase letter, uppercase letter, number, and special character",
                  },
                ]}
                className="py-6"
              >
                <Input.Password
                  placeholder="Password"
                  visibilityToggle={true}
                  bordered={false}
                  className="passwordBorder"
                />
              </FormItem>
              <FormItem
                name="cpassword"
                rules={[
                  { required: true, message: "Please add a confirm password" },
                ]}
              >
                <Input.Password
                  placeholder="confirm password"
                  visibilityToggle={true}
                  bordered={false}
                  className="passwordBorder"
                />
              </FormItem>
              <FormItem>
                <Button
                  htmlType="submit"
                  className="bg-blue-400 text-white mt-2 w-[50%]"
                >
                  Sign up
                </Button>
              </FormItem>
              <Link href={"/registration"}>if have you an account?</Link>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JoinUs;
