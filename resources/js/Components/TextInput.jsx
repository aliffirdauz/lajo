import React, { useEffect, useRef } from 'react';
import PropsTypes from 'prop-types';

TextInput.propTypes = {
    type: PropsTypes.oneOf(["text", "email", "password", "number", "file"]),
    name: PropsTypes.string,
    value: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.number]),
    defaultValue: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.number]),
    className: PropsTypes.string,
    variant: PropsTypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: PropsTypes.string,
    required: PropsTypes.bool,
    isFocused: PropsTypes.bool,
    handleChange: PropsTypes.func,
    placeholder: PropsTypes.string,
    isError: PropsTypes.bool,
};

export default function TextInput({
    type = 'text',
    name,
    value,
    defaultValue,
    className,
    variant = 'primary',
    autoComplete,
    required,
    isFocused,
    handleChange,
    placeholder,
    isError,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                defaultValue={defaultValue}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError && "input-error"} input-${variant} ${className}`}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
            />
        </div>
    );
}
