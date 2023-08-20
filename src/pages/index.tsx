import Image from "next/image";
import { Inter } from "next/font/google";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
		>
			<h1 className="text-4xl font-bold text-center">Test App</h1>
			<h1 className="text-2xl font-bold text-center">Component 1</h1>
			<Component2 />
			<h1 className="text-2xl font-bold text-center">Component 2</h1>
			<Component1 />
		</main>
	);
}
