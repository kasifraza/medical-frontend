import { Input, Spin } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {useFormik} from 'formik';
import axios from 'axios';
import { loginStaticInitialValues, loginValidationSchema } from "../schema/loginSchema";
import Toast from "../components/Toaster/Toaster";
const Login = () => {
	const [loading,setLoading] = useState(false);
	const [loginFormInitialValues,setLoginFormValues] = useState(loginStaticInitialValues);
	const navigate = useNavigate();
	const formik = useFormik({
		validationSchema:loginValidationSchema,
		initialValues: loginFormInitialValues || loginStaticInitialValues,
		onSubmit: async(values) => {
			try {
				setLoading(true);
				const response = await axios.post(`${process.env.REACT_APP_API_URL}/admin/user/login`,values,{
					headers:{
						"Content-Type":"application/json"
					}
				});
				console.log(response);
				setLoading(false);
				if(response.status === 200){
					localStorage.setItem("medicalToken",response?.data?.data);
					// window.location.href = "/";
					Toast.fire({
						title:"Login Successfull!",
						icon:"success",
						timer:2000
					}).then(() => {
						navigate("/")
					})
				}
				
			} catch (error) {
				setLoading(false);
				Toast.fire({
					title:"Unable To Login!",
					text:error?.message,
					icon:"error"
				})
				console.error(error);
			}
		},
	});
	return (
		<>
			<Spin spinning={loading} fullscreen />
			<div className="w-full min-h-screen bg-white shadow-lg rounded-lg overflow-hidden md:flex justify-center">
				{/* Right side - Form */}
				<div className="w-full md:w-1/3 p-8">
					<div className="text-center mb-6">
						<img
							src="/imc.png"
							alt="Medical OPD Collection Logo"
							className="mx-auto"
						/>
						<h2 className="text-2xl font-bold mt-4">Sign in</h2>
					</div>
					<form>
						<div className="mb-4">
							<label htmlFor="email" className=" text-gray-700 flex items-center">
								Email <span className="text-red-500">*</span>
							</label>
							<Input
								type="text"
								id="email"
								name="email"
								className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
								placeholder="Enter your email address"
								value={formik.values.email}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.email && formik.errors.email ? <p className="text-red-500">{formik.errors.email}</p> : null}
						</div>
						
						<div className="mb-4">
							<label htmlFor="password" className=" text-gray-700 flex items-center">
								Password <span className="text-red-500">*</span>
							</label>
							<Input.Password
								iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
								id="password"
								name="password"
								className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
								placeholder="Enter Password"
								value={formik.values.password}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.password && formik.errors.password ? <p className="text-red-500">{formik.errors.password}</p> : null}
						</div>
						<div className="flex justify-center items-center mb-6">
							<button
								type="button"
								className="w-1/3 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
								onClick={formik.handleSubmit}
							>
								LOGIN
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
