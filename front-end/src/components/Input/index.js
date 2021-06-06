import React,{} from 'react';
import './style.css';

const Input  = ({name, label, type ,...rest})=>{
    return(
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type={type}  id={name} {...rest} />
        </div>
    );
}

export default Input;