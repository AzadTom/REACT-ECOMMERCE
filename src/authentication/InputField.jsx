import React from "react";



function InputField({ field, id, type, value, onChange,  onFocus,
  error, toggleHide, hidePassword  }) {
  return (
    <>
      <div className=" h-full w-full relative">
        <input
        id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          className="border-none list-none px-4 py-2 w-full bg-gray-100 rounded"
          placeholder={field}
        />
         {toggleHide && (
          <span
            className={` absolute right-2 top-2`}
            onClick={toggleHide}
          >
            {hidePassword ? (
              <h1 className="cursor-pointer">😜</h1>
            ) : (
              <span className="cursor-pointer">👀</span>
            )}
          </span>
        )}
       
      </div>
      {error && (
        <div className="text-xs text-start text-red-600 w-[24rem]">
          {error}
        </div>
      )}
    </>
  );
}

export default InputField;

/*
 <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-600 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-600 peer-focus:after:scale-x-100 peer-focus:after:border-blue-600 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          {field}
        </label>

        input className ="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-blue-600 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"

        */