import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import "./Login.css"

const validation = Yup.object({
    email: Yup.string()
        .email("invalid format")
        .trim()
        .required("*Required")
        .nullable(),
    password: Yup.string()
        .required("Password is required")
        .min(4, "Password must be at least 4 characters long")
        .max(30, "Password cannot exceed 30 characters")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(
            /[!@#$%^&*()]/,
            "Password must contain at least one special character"
        ),
});

const Index = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validation),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
            <div className="left-container">
                <h1>Project Managment</h1>
            </div>
            <div className="right-container">
                <h2>Sign in</h2>
                <div className="email">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        autoComplete="off"
                        {...register("email")}
                    ></input>
                    <span className="errors">{errors?.email?.message}</span>
                </div>
                <div className="password">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        {...register("password")}
                    ></input>
                    <span className="errors">{errors?.password?.message}</span>
                </div>
                <div className="forgot-password">
                    <Link>Forgot password</Link>
                </div>
                <button className="submit-btn" type="submit"> Sign in</button>
            </div>
        </form>
    );
};

export default Index;
