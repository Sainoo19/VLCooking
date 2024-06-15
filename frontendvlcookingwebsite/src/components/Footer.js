import React from "react";

export default function Footer() {
	return (
		<footer className="bg-slate-300 inset-0 bottom-0">
			<div className="flex justify-between max-w-6xl">
				<h1>Footer</h1>
				<div className="flex justify-between gap-10">
					<ul className="mr-10 items-center">
						<li className="font-bold p-4">Topic</li>
						<li className="p-4">About</li>
						<li className="p-4">About</li>
					</ul>
					<ul className="mr-10">
						<li className="font-bold p-4">Topic</li>
						<li className="p-4">About</li>
						<li className="p-4">About</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
