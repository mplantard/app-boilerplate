import React from "react";
import { IconSetting } from "./IconSetting.type";

export const Chevrons = (props: {settings: IconSetting}) => {
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
            <polyline points="13 17 18 12 13 7"></polyline>
            <polyline points="6 17 11 12 6 7"></polyline>
        </svg>
    );
}