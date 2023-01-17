// Return a tokenized class list string based on a css module import (style) and an array of classNames
export const serializeClassNames = (styles: { [className: string]: string }, classNames: string[]): string => {
    return classNames.map(cn => styles[cn]).join(' ');
};