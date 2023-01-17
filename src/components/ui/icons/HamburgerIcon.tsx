import React from "react";

export const HamburgerIcon = (props: {width?: number | null, height?: number | null}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width ?? 16}
            height={props.height ?? 16}
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
        >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
    );
}