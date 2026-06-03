import React from "react";

interface ButtonProps {
    color?: string;
    onClick?: () => void;
    label?: string;
    type?: "button" | "submit" | "reset" | undefined;
}

export const Button: React.FC<ButtonProps> = (
    {color, onClick, label, type}: ButtonProps) => {
        return (
            <button className={`${color} text-white px-4 py-2 rounded-lg `} 
                    onClick={onClick} 
                    type={type}>
                    {label}
            </button>
        );
    }