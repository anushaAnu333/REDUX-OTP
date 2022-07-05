import React,{forwardRef} from "react";

const PinItem =forwardRef( ({onChange,value,onBackSpaceHandler},ref) => {
    const handleKeyUp=(e)=>{
        if(e.keyCode===8 && !e.target.value){
            onBackSpaceHandler(e);
        }else{
            onChange(e)
        }
    }
	return (
		<div>
			<input ref={ref}
				type={"text"}
				maxLength={1}
                value={value}
				onKeyUp={handleKeyUp}
			/>
		</div>
	);
});

export default PinItem;
