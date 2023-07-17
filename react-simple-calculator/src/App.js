import { useState, useRef } from "react";
import "./App.css";

function InputField({ inputRef }) {
	return (
		<input
			pattern="[0-9]"
			ref={inputRef}
			type="number"
			placeholder="Type a number"
		/>
	);
}

function Result({ result }) {
	return (
		<p>
			Your result: <span>{result}</span>
		</p>
	);
}

function Button({ onClick, label }) {
	return <button onClick={onClick}>{label}</button>;
}

function App() {
	const inputRef = useRef(null);
	const resultRef = useRef(null);
	const [result, setResult] = useState(0);

	function plus(e) {
		e.preventDefault();
		setResult((result) => result + Number(inputRef.current.value));
	}

	function minus(e) {
		e.preventDefault();
		setResult((result) => result - Number(inputRef.current.value));
	}

	function times(e) {
		e.preventDefault();
		setResult((result) => result * Number(inputRef.current.value));
	}

	function divide(e) {
		e.preventDefault();
		setResult((result) => result / Number(inputRef.current.value));
	}

	function resetInput(e) {
		e.preventDefault();
		inputRef.current.value = 0;
	}

	function resetResult(e) {
		e.preventDefault();
		setResult(0);
	}

	return (
		<div className="App">
			<div>
				<h1>Simplest Working Calculator</h1>
			</div>
			<form>
				<Result result={result} />
				<InputField inputRef={inputRef} />
				<div className="sectionButton">
					<Button onClick={plus} label="Add" />
					<Button onClick={minus} label="Minus" />
					<Button onClick={times} label="Multiply" />
					<Button onClick={divide} label="Divide" />
					<Button onClick={resetInput} label="Reset input" />
					<Button onClick={resetResult} label="Reset result" />
				</div>
			</form>
		</div>
	);
}

export default App;