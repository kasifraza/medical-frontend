import React from "react";
import { Link } from "react-router-dom";
import { DatePicker, Input, Radio, Select } from "antd";

const Register = () => {
	return (
		<>
			<div className="w-full bg-white shadow-lg rounded-lg overflow-hidden md:flex min-h-screen">
				{/* Left side - Image */}
				<div className="hidden md:block md:w-1/2 relative">
					<img
						src="/login.png"
						alt="Building"
						className="object-cover h-full w-full"
					/>
					<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center top-[90%]">
						<h1 className="text-white text-2xl font-bold">
                            Pradhan Mantri Awas Yojana (प्रधानमंत्री आवास योजना)
						</h1>
					</div>
				</div>

				{/* Right side - Form */}
				<div className="w-full md:w-1/2 p-8">
					<div className="text-center mb-6">
						<img
							src="/imc.png"
							alt="Indore Municipal Corporation Logo"
							className="mx-auto"
						/>
						<h2 className="text-2xl font-bold mt-4 border-b-2 border-gray-300">Registration</h2>
					</div>
					<form>
						<div className="flex mb-4">
                            <div className="w-1/2">
                                <Radio.Group options={[{label:'Head Of Family',value:'head'},{label:'Social Worker',value:'social'}]} optionType="button" />
                            </div>
                            <div className="w-1/2 flex justify-between">
                                <label htmlFor="gender" className="block text-gray-700">
                                    Gender
                                </label>
							<Select className="w-full ml-4" placeholder="Select Gender">
								<Select.Option value="male">Male</Select.Option>
								<Select.Option value="female">Female</Select.Option>
								<Select.Option value="other">Other</Select.Option>
							</Select>
                            </div>
						</div>
                        <div className="mb-4 flex space-x-4">
                            
                            <div className="w-1/2">

							<label htmlFor="name" className="block text-gray-700">
								Full Name
							</label>
							<Input
								type="text"
								id="name"
								className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
								placeholder="Enter your full name"
							/>
                            </div>
                            <div className="w-1/2">

								<label htmlFor="dob" className="block text-gray-700">
									Date of Birth
								</label>
                                <DatePicker className="w-full h-12" format="DD/MM/YYYY" placeholder="DD/MM/YYYY" />
                            </div>
						</div>
						<div className="mb-4 flex space-x-4">
                        <div className="w-1/2">
								<label htmlFor="mobile" className="block text-gray-700">
									Mobile Number
								</label>
								<Input.OTP
                                    length={10}
                                    typeof="number"
									id="mobile"
									className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
									placeholder="Enter your mobile number"
								/>
							</div>
							<div className="w-1/2">
								<label htmlFor="email" className="block text-gray-700">
									Email Address
								</label>
								<Input
									type="email"
									id="email"
									className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
									placeholder="Enter your email address"
								/>
							</div>
						</div>
						<div className="mb-4 flex space-x-4">
							<div className="w-1/2">
								<label htmlFor="mobileOtp" className="block text-gray-700">
									Mobile OTP
								</label>
								<Input.OTP
                                    length={6}
                                    typeof="number"
									id="mobileOtp"
									className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
									placeholder="Enter OTP"
								/>
							</div>
                            <div className="w-1/2">
								<label htmlFor="emailOtp" className="block text-gray-700">
									Email OTP
								</label>
								<Input.OTP
                                    length={6}
                                    typeof="number"
									id="emailOtp"
									className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
									placeholder="Enter OTP"
								/>
							</div>
						</div>
						<div className="flex justify-between items-center mb-6">
							<button
								type="submit"
								className="w-1/2 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
							>
								REGISTER
							</button>
							<Link
								to="/login"
								className="w-1/2 py-3 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 ml-4 text-center"
							>
								Sign In
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Register;
