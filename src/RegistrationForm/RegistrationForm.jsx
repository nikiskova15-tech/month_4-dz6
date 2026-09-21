import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import cls from "./RegistrationForm.module.scss"
import { toast } from 'react-toastify';

export const RegistrationForm = () => {
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        toast.success("Success")
    }

    return (
        <div className={cls.form}>
            <h2>RegistrationForm</h2>
            <div className={cls.item}>
                <input
                    type="text"
                    placeholder="name"
                    className={errors?.name?.message ? cls.errorInput : ""}
                    {...register("name", {
                        required: "name is required",
                        minLength: {
                            value: 2,
                            message: "name must be at least 2 characters",
                        },
                    })} />
                {errors?.name?.message && <p className={cls.error}>{errors.name.message}</p>}
            </div>
            <div className={cls.item}>
                <input
                    type="text"
                    placeholder="email"
                    className={errors?.email?.message ? cls.errorInput : ""}
                    {...register("email", {
                        required: "email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]{2,}@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address",
                        },
                    })} />
                {errors?.email?.message && <p className={cls.error}>{errors.email.message}</p>}
            </div>
            <div className={cls.item}>
                <input
                    type="password"
                    placeholder="password"
                    className={errors?.password?.message ? cls.errorInput : ""}
                    {...register("password", {
                        required: "password is required",
                        minLength: {
                            value: 6,
                            message: "password must be at least 6 characters",
                        },
                    })} />
                {errors?.password?.message && <p className={cls.error}>{errors.password.message}</p>}
            </div>
            <div className={cls.item}>
                <input
                    type="password"
                    placeholder="confirmPassword"
                    className={errors?.confirmPassword?.message ? cls.errorInput : ""}
                    {...register("confirmPassword", {
                        required: "confirm password is required",
                        validate: (value) =>
                            value === getValues("password") || "passwords do not match",
                    })} />
                {errors?.confirmPassword?.message && <p className={cls.error}>{errors.confirmPassword.message}</p>}
            </div>
            <div>
                <Button onClick={handleSubmit(onSubmit)} type='primary'>login</Button>
            </div>
        </div>
    );
}