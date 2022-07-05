import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useRef } from "react";
import PinItem from "./PinItem";
const Pin = ({ len,setPinInput }) => {

	const [inputBoxLen] = useState(new Array(len).fill(1));
	const [inputBoxValue, setInputBoxValue] = useState(
		new Array(len).fill("")
	);
  const inputRef = useRef([]);


	const handleChange = (e, index) => {
		inputBoxValue[index] = e.target.value;
		setInputBoxValue(inputBoxValue);

		if (e.target.value.length > 0 && index < len - 1) {
			inputRef.current[index + 1].focus();
		}
		//console.log(inputBoxValue);
	setPinInput(inputBoxValue.join(""));
	};


	const handleBackSpace = (e, index) => {
		if (index > 0) {
			inputRef.current[index - 1].focus();
		}
  inputBoxValue[index]=e.target.value;
  setInputBoxValue(inputBoxValue);
  setPinInput(inputBoxValue.join(""))
	};


	const handlePaste = (e) => {
		e.preventDefault();
		const data = e.clipboardData
			.getData("text")
			.split("")
			.filter((item, index) => index < len);
      data.forEach((value,index)=>{
        inputBoxValue[index]=value;
        inputRef.current[index].value=value;
        if(index<len-1){
          inputRef.current[index+1].focus()
        }
      })
	};

	// console.log(inputRef.current);
	return (
		<div
			style={{ display: "flex", justifyContent: "center" }}
			onPaste={handlePaste}
		>
			{inputBoxLen.map((_, index) => {
				return (
					<PinItem
						key={index}
						onChange={(e) => handleChange(e, index)}
						onBackSpace={(e) => handleBackSpace(e, index)}
						ref={(element) => {
							// console.log(element)
							inputRef.current[index] = element;
						}}
					/>
				);
			})}
		</div>
	);
};
Pin.prototypes = {
	len: PropTypes.number.isRequired,
	setPin: PropTypes.func,
  pinInput:PropTypes.string,
  
};
export default Pin;
