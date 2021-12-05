import React,{useRef} from "react";
export function InputWithFocusButton () {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      inputEl.current.focus();
    };
    return  (
        <div>
         <input ref={inputEl}  type='text'/>
         <button onClick={onButtonClick}>Focus input field</button>
        </div>
    );


  

   }
  