import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export const DropDown = ({ dataObject, label, width }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef(null); // reference to the dropdown container

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup the listener when component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${width}`} ref={dropdownRef}>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex justify-between items-center border border-gray-700 ${
          open ? " border-b-0 rounded-b-none" : "rounded border "
        }   rounded px-4 py-2 h-9 ${!selected && "text-gray-500 text-[14px]"}`}
      >
        {selected ? dataObject.find((c) => c.value === selected)?.label : label}
        <FaChevronDown className="lg:text-[12px] text-[10px] ml-2" />
      </button>

      {/* Dropdown menu */}
      {open && (
        <ul className="absolute left-0 w-full bg-white border rounded shadow-lg border-t-0 z-10 rounded-t-none border-gray-700 p-1 lg:text-[16px] md:text-[14px] text-[13px] text-textColor">
          {dataObject
            .filter((c) => !c.placeholder)
            .map((category) => (
              <li
                key={category.value}
                onClick={() => {
                  setSelected(category.value);
                  setOpen(false);
                }}
                className={`ps-2 w-full  py-1 cursor-pointer rounded  text-nowrap ${
                  category.value === selected
                    ? "bg-gray-500 text-white"
                    : "hover:bg-gray-200 text-specialColor"
                }`}
              >
                {category.label}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
