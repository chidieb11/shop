import React, {useEffect} from "react";
import Layout from "../components/Layout";
import {signIn, useSession} from "next-auth/react";
import {useForm} from "react-hook-form";
import axios from "axios";
import getError from "../utils/error";
import {toast} from "react-toastify";

const ProfileScreen = () => {
    const {data: session} = useSession();

    const {handleSubmit, register, getValues, setValue, formState: {errors}} = useForm();

    useEffect(() => {
        setValue("name", session.user.name);
        setValue("email", session.user.email);
    }, [session.user, setValue]);
    // console.log(session.user);

    const submitHandler = async ({name, email, password}) => {
        try {
            await axios.put(`/api/auth/update`, {name, email, password});
            const result = await signIn("credentials", {
                redirect: false,
                email,
                password
            });
            toast.success("Profile updated successfully");
            if (result.error) {
                toast.error(result.error);
            }
        } catch (error) {
            toast.error(getError(error));
        }
    };

    return (
        <Layout title="Profile">
            <form
                className="mx-auto max-w-screen-md"
                onSubmit={handleSubmit(submitHandler)}
            >
                <h1 className="mb-4 text-xl font-bold font-mono">Update Profile</h1>

                <div className="mb-4 flex flex-col">
                    <label htmlFor="name" className="font-mono font-bold">Name</label>
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
                    <label htmlFor="email" className="font-mono font-bold">Email</label>
                    <input
                        type="email"
                        className="w-full md:w-96"
                        style={{border: "1px solid #ccc", outline: "none"}}
                        id="email"
                        {...register("email", {
                            required: "Please enter email",
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                                message: "Please enter valid email",
                            },
                        })}
                    />
                    {errors.email && (
                        <div className="text-red-500">{errors.email.message}</div>
                    )}
                </div>

                <div className="mb-4 flex flex-col">
                    <label htmlFor="password" className="font-mono font-bold">Password</label>
                    <input
                        className="w-full md:w-96"
                        style={{border: "1px solid #ccc", outline: "none"}}
                        type="password"
                        id="password"
                        {...register("password", {
                            minLength: {value: 6, message: "password is more than 5 chars"},
                        })}
                    />
                    {errors.password && (
                        <div className="text-red-500 ">{errors.password.message}</div>
                    )}
                </div>

                <div className="mb-4 flex flex-col">
                    <label htmlFor="confirmPassword" className="font-mono font-bold">Confirm Password</label>
                    <input
                        className="w-full border-b md:w-96"
                        style={{border: "1px solid #ccc", outline: "none"}}
                        type="password"
                        id="confirmPassword"
                        {...register("confirmPassword", {
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
                    <button className="primary-button w-full md:w-96 font-mono font-bold">Update Profile</button>
                </div>
            </form>
        </Layout>
    );
};

ProfileScreen.auth = true;
export default ProfileScreen;
