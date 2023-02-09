import React from "react";
import { IconSetting } from "./IconSetting.type";

export const ArrowDown = (props: {settings: IconSetting}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.settings.width ?? 16}
            height={props.settings.height ?? 16}
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={props.settings.strokeWidth ?? 1}
        >
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );
}