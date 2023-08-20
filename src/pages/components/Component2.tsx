import React from "react";
import { atom, useRecoilState } from "recoil";
import { textState } from "./AllAtoms";

const Component2 = () => {
	const [count, setCount] = useRecoilState(textState);
	function countLetters(word: string) {
		console.log(word);
		setCount(word.length.toString());
	}
	return (
		<div>
			Enter some text:{" "}
			<input
				onChange={(e) => {
					countLetters(e.target.value);
				}}
				className="text-black bg-white py-2 px-3"
				type="text"
			/>
			<br />
			Count is: <span className="text-red-200">{count}</span>
		</div>
	);
};

export default Component2;
