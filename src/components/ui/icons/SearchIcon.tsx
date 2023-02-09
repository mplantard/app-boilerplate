import React from "react";
import { IconSetting } from "./IconSetting.type";

export const SearchIcon = (props: IconSetting) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width ?? 16}
            height={props.height ?? 16}
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={props.strokeWidth ?? 1}
        >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    );
}