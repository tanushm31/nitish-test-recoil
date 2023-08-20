import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { textState } from "./AllAtoms";
const Component1 = () => {
	// const count = useRecoilValue(textState);

	const [count, setCount] = useRecoilState(textState);

	return (
		<div>
			<button className="bg-green-300" onClick={() => setCount("0")}>
				Clear Count
			</button>
			Count of Letters in Input: {count}
		</div>
	);
};

export default Component1;
