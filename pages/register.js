import React, {useEffect} from "react";
import Layout from "../components/Layout";
import {toast} from "react-toastify";
import getError from "../utils/error";
import {useRouter} from "next/router";
import {signIn, useSession} from "next-auth/react";
import {useForm} from "react-hook-form";
import axios from "axios";
import Link from "next/link";

const RegisterScreen = () => {
    const {data: session} = useSession();

    const router = useRouter();
    const {redirect} = router.query;

    useEffect(() => {
        if (session?.user) {
            router.push(redirect || "/");
        }
    }, [router, session, redirect]);

    const {
        handleSubmit,
        register,
        getValues,
        formState: {errors},
    } = useForm();
    const submitHandler = async ({name, email, password}) => {
        try {
            await axios.post("/api/auth/signup", {
                name,
                email,
                password,
            });

            const result = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });
            if (result.error) {
                toast.error(result.error);
            }
        } catch (err) {
            toast.error(getError(err));
        }
    };
    return (
        <Layout title="Create Account">
            <form
                className="mx-auto max-w-screen-md"
                onSubmit={handleSubmit(submitHandler)}
            >
                <h1 className="mb-4 text-xl font-bold font-mono">Create Account</h1>
                <div className="mb-4 flex flex-col">
                    <label htmlFor="name" className="font-bold font-mono">Name</label>
                    <input
                        type="text"
                        className="w-full md:w-96"
                        style={{border: "1px solid #ccc", outline: "none"}}
                        id="name"
                        autoFocus
                        {...register("name", {
                            required: "Please enter name",
                        })}
                    />
                    {errors.name && (
                        <div className="text-red-500">{errors.name.message}</div>
                    )}
                </div>

                <div className="mb-4 flex flex-col">
                    <label htmlFor="email" className="font-bold font-mono">Email</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Please enter email",
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                                message: "Please enter valid email",
                            },
                        })}
                        className="w-full md:w-96"
                        style={{border: "1px solid #ccc", outline: "none"}}
                        id="email"
                    ></input>
                    {errors.email && (
                        <div className="text-red-500">{errors.email.message}</div>
                    )}
                </div>
                <div className="mb-4 flex flex-col">
                    <label htmlFor="password" className="font-bold font-mono">Password</label>
                    <input
                        type="password"
                        {...register("password", {
                            required: "Please enter password",
                            minLength: {value: 6, message: "password is more than 5 chars"},
                        })}
                        className="w-full md:w-96"
                        style={{border: "1px solid #ccc", outline: "none"}}
                        id="password"
                        autoFocus
                    ></input>
                    {errors.password && (
                        <div className="text-red-500 ">{errors.password.message}</div>
                    )}
                </div>
                <div className="mb-4 flex flex-col">
                    <label htmlFor="confirmPassword" className="font-bold font-mono">Confirm Password</label>
                    <input
                        className="w-full md:w-96"
                        style={{border: "1px solid #ccc", outline: "none"}}
                        type="password"
                        id="confirmPassword"
                        {...register("confirmPassword", {
                            required: "Please enter confirm password",
                            validate: (value) => value === getValues("password"),
                            minLength: {
                                value: 6,
                                message: "confirm password is more than 5 chars",
                            },
                        })}
                    />
                    {errors.confirmPassword && (
                        <div className="text-red-500 ">
                            {errors.confirmPassword.message}
                        </div>
                    )}
                    {errors.confirmPassword &&
                        errors.confirmPassword.type === "validate" && (
                            <div className="text-red-500 ">Password do not match</div>
                        )}
                </div>

                <div className="mb-4">
                    <button className="primary-button w-full md:w-96 font-mono font-bold">Register</button>
                </div>
                <div className="mb-4 ">
                    Already have an account? &nbsp;
                    <Link href={`/login?redirect=${redirect || "/"}`}><a
                        className="border-b text-green-900">Login</a></Link>
                </div>
            </form>
        </Layout>
    );
};

export default RegisterScreen;
