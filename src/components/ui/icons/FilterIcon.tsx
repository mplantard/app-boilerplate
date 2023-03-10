import React from "react";
import { IconSetting } from "./IconSetting.type";

export const FilterIcon = (props: IconSetting) => {
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
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
    );
}