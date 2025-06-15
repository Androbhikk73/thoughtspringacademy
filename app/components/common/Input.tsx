import React from "react";

type InputProps = {
  id: string;
  name: string;
  type: string;
  placeholder: string;
};

export const classes =
  "block w-full rounded-md bg-white outline outline-gray-300 px-3 py-1.5 text-xs text-gray-900 -outline-offset-1 placeholder:text-gray-400 placeholder:text-xs focus:outline-1 focus:-outline-offset-2 focus:outline-[var(--theme)] sm:text-sm/6";

const Input = ({ id, name, type, placeholder }: InputProps) => {
  return (
    <>
      {type == "textarea" ? (
        <textarea
          id={id}
          name={name}
          autoComplete="off"
          placeholder={placeholder}
          rows={4}
          className={classes}
        ></textarea>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          autoComplete="off"
          placeholder={placeholder}
          className={classes}
        />
      )}
    </>
  );
};

export default Input;
