import React, { useEffect, useState } from "react";
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	DashboardOutlined,
	CopyFilled,
	ContactsOutlined,
} from "@ant-design/icons";
import { jwtDecode } from "jwt-decode";
import { Button, Layout, Menu, theme } from "antd";
import NavBarNotification from "../components/NavBarNotification";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content, Footer } = Layout;
const AdminLayout = () => {
	const navigate = useNavigate();
	const [sideBarMenuItems,setSideBarMenuItems] = useState([]);
	// const sideBarMenuItems = [
	// 	{
	// 		key: "1",
	// 		icon: <DashboardOutlined />,
	// 		label: "Dashboard",
	// 		onClick: ()=>{
	// 			navigate('/')
	// 		}
	// 	},
	// 	{
	// 		key: "2",
	// 		label: "Collections",
	// 		icon: <CopyFilled />,
	// 		onClick: ()=>{
	// 			navigate('/admin/collections')
	// 		}
	// 	},
	// 	{
	// 		key: "3",
	// 		label: "Users",
	// 		icon: <ContactsOutlined />,
	// 	},
		
	// ];
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	useEffect(()=>{
		if(!localStorage.getItem('medicalToken')){
			navigate('/login')
		}
		else{
			const token = localStorage.getItem('medicalToken');
			const decoded = jwtDecode(token);
			console.log(decoded)
			if(decoded.role === 'SUPERADMIN' || decoded.role === 'ADMIN'){
				setSideBarMenuItems([
					{
						key: "1",
						icon: <DashboardOutlined />,
						label: "Dashboard",
						onClick: ()=>{
							navigate('/')
						}
					},
					{
						key: "2",
						label: "Collections",
						icon: <CopyFilled />,
						onClick: ()=>{
							navigate('/admin/collections')
						}
					},
					{
						key: "3",
						label: "Users",
						icon: <ContactsOutlined />,
					},
					
				])
			}else if(decoded?.role === 'EMP'){
				setSideBarMenuItems([
					{
						key: "2",
						label: "Collections",
						icon: <CopyFilled />,
						onClick: ()=>{
							navigate('/admin/collections')
						}
					}
				])
			}
		}
	},[navigate])
	return (
		<Layout>
			<Sider
				trigger={null}
				collapsible
				collapsed={collapsed}
				breakpoint="lg"
				onBreakpoint={(broken) => {
					setCollapsed(broken);
				}}
				theme="light"
			>
				<img
					src={`${collapsed ? "/imcsmall.png" : "/imc.png"}`}
					alt="logo"
					style={{ width: "100%", height: "50px" }}
				/>
				<Menu
					theme="light"
					mode="inline"
					defaultSelectedKeys={["1"]}
					items={sideBarMenuItems}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
					}}
					className="shadow-lg border-b-2 border-blue-500"
				>
					<div className="flex items-center justify-between">
						<Button
							type="text"
							icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
							onClick={() => setCollapsed(!collapsed)}
							style={{
								fontSize: "16px",
								width: 64,
								height: 64,
							}}
						/>
						<p className=" text-sm md:text-lg lg:text-xl font-bold text-black">
							One Medical OPD 
						</p>
						<NavBarNotification />
					</div>
				</Header>
				<Content
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
					}}
				>
					<Outlet />
				</Content>
				<Footer
					style={{
						textAlign: "center",
					}}
				>
					Kasif Raza ©{new Date().getFullYear()}
				</Footer>
			</Layout>
		</Layout>
	);
};

export default AdminLayout;
