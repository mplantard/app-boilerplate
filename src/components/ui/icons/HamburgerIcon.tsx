import React from "react";
import { IconSetting } from "./IconSetting.type";

export const HamburgerIcon = (props: IconSetting) => {
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
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
    );
}