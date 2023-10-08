"use client"
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Navbar from "../../../components/navbar";
import styles from "@/../style/style.module.css";
import Form from "antd/es/form";
import { Button, Input, Space } from "antd";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import FormItem from "antd/es/form/FormItem";
import Link from "next/link";
import { useGetAuth } from "../../../Hooks/api_hooks/auth";

interface value {
  username: string;
  password: string;
}

const Login:React.FC = () => {
  const router = useRouter()
  const [userData,setUserData] = useState<{username:string,password:string}>({username:"",password:""})
  const {data , isLoading}:any = useGetAuth(userData)

  const handleSubmit = (values: value) => {
    setUserData(values)
    if(data?.data?.token){
      localStorage.setItem("token",data?.data?.token)
      router.replace("/")
    }
  };

  useEffect(() => {
    userData
  },[userData])

  return (
    <div className=" text-gray-800 w-full">
      <Navbar />
      <div className={`${styles.loginImg} w-[100%]  bg-no-repeat h-[90vh]`}>
        <div className={`${styles.fadeInLeftBig} h-full`}>
          <div className=" sm:w-[50%] w-[100%] h-full flex-col flex justify-center items-center text-center">
            <h1 className="text-5xl font-semibold mx-3 leading-[4rem]">
              Login to Your Account
            </h1>
            <h2 className="mt-4 font-light">Login using social network</h2>
            <div className="flex justify-center mt-1 gap-x-4">
              <BsFacebook className="text-blue-900 w-12 h-12" />
              <FcGoogle className=" w-12 h-12" />
              <FaLinkedinIn className="text-blue-900 w-12 h-12" />
            </div>
            <div className="pt-7 pb-3">OR</div>
            <Form
              onFinish={handleSubmit}
              className="space-y-2  w-[80%] lg:w-[50%]"
            >
              <FormItem
                name="username"
                rules={[
                  { required: true, message: "Please add a username" },
                  {
                    type: "string",
                    message: "The input is not valid username!",
                  },
                  // {
                  //   pattern: new RegExp("^[a-z]+$"),
                  //   message: "All character must be in lowercase"
                  // }
                ]}
              >
                <Input
                  placeholder="Username"
                  bordered={false}
                  className="inputBorder"
                />
              </FormItem>
              <FormItem
                name="password"
                rules={[
                  { required: true, message: "Please add a password" },
                  {
                    min: 5,
                    message: "Password must have a minimum length of 8",
                  },
                  // {
                  //   pattern: new RegExp(
                  //     "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
                  //   ),
                  //   message:
                  //     "Password must contain at least one lowercase letter, uppercase letter, number, and special character",
                  // },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  visibilityToggle={true}
                  bordered={false}
                  className="passwordBorder mb-3"
                />
              </FormItem>
              <FormItem>
                <Button
                  htmlType="submit"
                  className="bg-blue-400 text-white mt-2 w-[50%] my-4"
                >
                  Log in
                </Button>
              </FormItem>
              <div className="flex justify-between">
                <Link href={"/forgetpassword"}>Forget password?</Link>
                <Link href={"/registration/joinus"}>Dont have an account?</Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
