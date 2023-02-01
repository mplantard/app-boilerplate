import React from "react";
import { IconSetting } from "./IconSetting.type";

export const Home = (props: {settings: IconSetting}) => {
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
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
    );
}