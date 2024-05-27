import React from "react";
import { LuConstruction, LuBuilding } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { GiGreenhouse,GiFamilyHouse } from "react-icons/gi";
import { FcKindle } from "react-icons/fc";
const Dashboard = () => {
	return (
		<>
				<div className="min-h-screen">
					<div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
						<div className="p-5 bg-white rounded shadow-xl">
							<div className="flex items-center space-x-4">
								<div>
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-50 text-fuchsia-400">
										<LuConstruction className="text-3xl text-yellow-400" />
									</div>
								</div>
								<div>
									<div className="text-gray-400">Construction Going On</div>
									<div className="text-2xl font-bold text-gray-900">3</div>
								</div>
							</div>
						</div>
						<div className="p-5 bg-white rounded shadow-xl">
							<div className="flex items-center space-x-4">
								<div>
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-50 text-cyan-400">
                                        <FaUsers className="text-3xl text-cyan-400" />
									</div>
								</div>
								<div>
									<div className="text-gray-400">Total Users</div>
									<div className="text-2xl font-bold text-gray-900">752</div>
								</div>
							</div>
						</div>
						<div className="p-5 bg-white rounded shadow-xl">
							<div className="flex items-center space-x-4">
								<div>
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 text-amber-400">
										<LuBuilding className="text-3xl text-amber-400" />
									</div>
								</div>
								<div>
									<div className="text-gray-400">Total Flats</div>
									<div className="text-2xl font-bold text-gray-900">1375</div>
								</div>
							</div>
						</div>
						<div className="p-5 bg-white rounded shadow-xl">
							<div className="flex items-center space-x-4">
								<div>
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-400">
                                        <BsBuildingsFill className="text-3xl text-emerald-400" />
									</div>
								</div>
								<div>
									<div className="text-gray-400">Total Society</div>
									<div className="text-2xl font-bold text-gray-900">250</div>
								</div>
							</div>
						</div>

                        <div className="p-5 bg-white rounded shadow-xl">
							<div className="flex items-center space-x-4">
								<div>
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-green-400">
                                        <GiGreenhouse className="text-3xl text-green-400" />
									</div>
								</div>
								<div>
									<div className="text-gray-400">Total Booked Flats</div>
									<div className="text-2xl font-bold text-gray-900">25</div>
								</div>
							</div>
						</div>

                        <div className="p-5 bg-white rounded shadow-xl">
							<div className="flex items-center space-x-4">
								<div>
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-50 text-gray-400">
                                        <FcKindle className="text-3xl text-gray-400" />
									</div>
								</div>
								<div>
									<div className="text-gray-400">Total Applications Recieved</div>
									<div className="text-2xl font-bold text-gray-900">125</div>
								</div>
							</div>
						</div>

                        <div className="p-5 bg-white rounded shadow-xl">
							<div className="flex items-center space-x-4">
								<div>
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 text-blue-400">
                                        <GiFamilyHouse className="text-3xl text-blue-400" />
									</div>
								</div>
								<div>
									<div className="text-gray-400">Total Delivered Flats</div>
									<div className="text-2xl font-bold text-gray-900">11</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		</>
	);
};

export default Dashboard;
