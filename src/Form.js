import React from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; // for validation part
import ErroMsg from "./ErroMsg";

export default function Form() {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name Should Not Be Empty"),
    email: yup.string().email().required("Invalid Email"),
    age: yup.number().positive().integer().min(18).required("Invalid Age"),
    password: yup.string().min(4).max(20).required("Invalid Password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password Dont Match")
      .required("Confirm Password is a required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Hello world");
    console.log(data.valueOf());
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <input type={"text"} placeholder="Full Name" {...register("fullName")} />
      <ErroMsg ErroMsg={errors.fullName?.message} />

      <input type={"text"} placeholder="Email" {...register("email")} />
      <ErroMsg ErroMsg={errors.email?.message} />

      <input type={"number"} placeholder="Age" {...register("age")} />
      <ErroMsg ErroMsg={errors.age?.message} />

      <input
        type={"Password"}
        placeholder="Password"
        {...register("password")}
      />
      <ErroMsg ErroMsg={errors.password?.message} />

      <input
        type={"Password"}
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />
      <ErroMsg ErroMsg={errors.confirmPassword?.message} />

      <input type={"submit"} />
    </form>
  );
}
