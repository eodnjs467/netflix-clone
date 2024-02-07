"use client";

import { useState } from "react";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={"nav-element"}>
        <div className={"search-box"} onClick={() => setIsOpen(!isOpen)}>
          {/* TODO:  Button icon 추가 */}
          <button className={"search-tab"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && <div> Link 검색 페이지 이동</div>}
    </>
  );
}