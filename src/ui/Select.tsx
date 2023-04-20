import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

export type InputType = "Select" | "Search";
type SelectProps = {
  type: InputType;
  label: string;
  placeholder: string;
  options: Array<string>;
  onSelect: (value: any) => any;
  value: string;
};

// @ts-ignore
const Select: React.FC<SelectProps> = ({ type, label, placeholder, options, onSelect, value }) => {
  const dispatch = useDispatch()
  const [filtredOffers, setFiltredOffers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const selectRef = useRef(null);
  const selectInputRef = useRef(null);

  const [selectBodyToggle, setSelectBodyToggle] = useState(false);

  const closeSelectBody = (e) => {
    if (
      selectRef.current &&
      selectBodyToggle &&
      //@ts-ignore
      !selectRef.current.contains(e.target)
    ) {
      setSelectBodyToggle(false);
    }
  };

  const optionHandler = (e) => {
    dispatch(onSelect(e.target.innerText));
    setSelectBodyToggle(false);
  };

  document.addEventListener("mousedown", closeSelectBody);

  const filterListSearch = (list) => {
    let updatedList = [...list];
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().includes(searchValue.toLowerCase());
    });
    //@ts-ignore
    setFiltredOffers(updatedList);
  };

  useEffect(() => {
    filterListSearch(options);
  }, [searchValue, options]);


  return (
    <div className="select">
      <div className="select-label">{label}</div>
      <div className="select-container" ref={selectRef}>
        <div
          className="select-head"
          id="select-head"
          onClick={() => {
            setSelectBodyToggle(true);
          }}
        >
          {selectBodyToggle ? (
            <input
              ref={selectInputRef}
              className="select-input"
              id="search-input"
              maxLength={256}
              type="text"
              placeholder={placeholder}
              value={searchValue}
              onInput={searchHandler}
            />
          ) : (
            <span className="select-placeholder" id="search-placeholder">
              {value ? value : "Select..."}
            </span>
          )}

          <svg
            className="set-focus"
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="set-focus"
              d="M7.79187 7.83081L2.58374 1.16943H13L7.79187 7.83081Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>
        {selectBodyToggle && (
          <div
            className="select-body"
            id="select-body"
            style={{ width: "300px" }}
          >
            {filtredOffers.map((offer, i) => {
              return (
                <div key={i} className="select-option" onClick={optionHandler}>
                  {offer}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
