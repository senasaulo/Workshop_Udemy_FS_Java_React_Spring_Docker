import React from 'react';

interface InputTextProps {
   style?: string;
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
   placeholder?: string;
   placeholderColor?: string;
   textColor?: string;
   id?: string;
   value?: string;
}

export const InputText: React.FC<InputTextProps> = ({ style, onChange, placeholder, placeholderColor = 'text-gray-300', textColor = 'text-gray-500', id, value }) => {
    return (
        <input type="text" 
            id={id}
            onChange={onChange}
            className={` ${style} border rounded-lg px-4 py-2 ${textColor} ${placeholderColor}`} 
            placeholder={placeholder} 
            value={value}/>
            
    );
}