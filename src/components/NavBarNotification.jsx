import React, { useState } from "react";

const NavBarNotification = () => {
    const [showNotification, setShowNotification] = useState(false);
	return (
		<>
			<div className="relative mr-3">
				<div onClick={() => setShowNotification(!showNotification)}>
					<button
						type="button"
						className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
						id="user-menu-button"
						aria-expanded="false"
						aria-haspopup="true"
					>
						<span className="absolute -inset-1.5" />
						<span className="sr-only">Open user menu</span>
						<img
							className="h-8 w-8 rounded-full"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
					</button>
				</div>
				<div
					className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${showNotification ? 'block' : 'hidden'}`}
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="user-menu-button"
					tabIndex={-1}
				>
					{/* Active: "bg-gray-100", Not Active: "" */}
					<p
						className="block px-4 py-2 text-sm text-gray-700"
						role="menuitem"
						tabIndex={-1}
						id="user-menu-item-0"
					>
						Your Profile
					</p>
					<p
						className="block px-4 py-2 text-sm text-gray-700"
						role="menuitem"
						tabIndex={-1}
						id="user-menu-item-1"
					>
						Settings
					</p>
					<p
						className="block px-4 py-2 text-sm text-gray-700"
						role="menuitem"
						tabIndex={-1}
						id="user-menu-item-2"
					>
						Sign out
					</p>
				</div>
			</div>
		</>
	);
};

export default NavBarNotification;
