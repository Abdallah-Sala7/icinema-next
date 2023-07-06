"use client";

function CustomBtn({ children, isLoading }) {
  return (
    <button
      type="submit"
      className={`
        text-base font-light text-center capitalize w-40 py-2
        rounded-lg transition duration-300
        lg:w-52 lg:py-2.5 lg:text-lg
        bg-primary border border-primary text-dark hover:text-primary hover:bg-transparent
        ${isLoading && "pointer-events-none opacity-70"}
        `}
    >
      {children}
    </button>
  );
}

export default CustomBtn;
