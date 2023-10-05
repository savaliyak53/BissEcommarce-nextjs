"use client";
import React from "react";
import Navbar from "../../../../components/navbar";
import styles from "@/../style/style.module.css";
import Form from "antd/es/form";
import { Button, Input, Radio, Select, Space } from "antd";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import FormItem from "antd/es/form/FormItem";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Option = Select.Option;

const JoinUs:React.FC = () => {
  interface value {
    email: string;
    password: string;
  }
  const handleSubmit = (values: value) => {
    console.log(values);
  };

  const prefixSelector = <Form.Item name="prefix" noStyle></Form.Item>;

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
                <FormItem
                  name="firstName"
                  className="w-[45%]"
                  rules={[
                    {
                      required: true,
                      message: "Please input your First name!",
                    },
                  ]}
                >
                  <Input
                    type="text"
                    placeholder="First Name"
                    bordered={false}
                    className="inputBorder"
                  />
                </FormItem>
                <FormItem
                  name="lastName"
                  className="w-[45%]"
                  rules={[
                    {
                      required: true,
                      message: "Please input your last name!",
                    },
                  ]}
                >
                  <Input
                    type="text"
                    placeholder="Last Name"
                    bordered={false}
                    className="inputBorder"
                  />
                </FormItem>
              </div>
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
                className="!-mt-6"
              >
                <Input
                  placeholder="Email"
                  bordered={false}
                  className="inputBorder"
                />
              </FormItem>
              <Form.Item
                name="phone"
                label="Phone"
                rules={[
                  {
                    max: 15,
                    message: "check number",
                  },
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <PhoneInput
                  country={"in"}
                  placeholder="enter phone number"
                  buttonClass="phoneSelect"
                  inputClass="phoneSelect"
                  containerClass="phoneclass"
                />
              </Form.Item>
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
                dependencies={["password"]}
                hasFeedback
                rules={[
                  { required: true, message: "Please confirm your password!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Entered password does not match")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Confirm Password"
                  visibilityToggle={true}
                  bordered={false}
                  className="passwordBorder"
                />
              </FormItem>
              <FormItem
                name="dob"
                label="Date of Birth"
                className="pt-3 ml-3"
                rules={[
                  {
                    required: true,
                    message: "Please input your date of birth!",
                  },
                ]}
              >
                <Input
                  bordered={false}
                  className="inputBorder -mt-3"
                  type="Date"
                />
              </FormItem>
              <FormItem
                name="gender"
                label="Gender"
                className="ml-3"
                rules={[
                  {
                    required: true,
                    message: "Please input your gender!",
                  },
                ]}
              >
                <Select
                  className="w-[100%] -mt-3"
                  defaultValue="male"
                  bordered={false}
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </FormItem>
              <FormItem>
                <Button
                  htmlType="submit"
                  className="bg-blue-400 text-white  w-[50%]"
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
