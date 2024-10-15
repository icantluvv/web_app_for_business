import React from "react";

const ChooseAllButton = ({ params }: TakeAllProps) => {
  return (
    <button className="px-4 py-2 bg-white shadow-lg rounded-[15px] active:bg-purpleActive active:text-white transition-all duration-300 text-[14px] ">
      {params}
    </button>
  );
};

export default ChooseAllButton;
