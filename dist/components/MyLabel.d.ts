/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Set the text, if not it will be "No Label"
     */
    label: string;
    /**
     * The size default is normal.
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Boolean option to capitalize all letters
     */
    allCaps?: boolean;
    /**
     * Change the color between 3 types
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Change the color by a any type of css color
     */
    cssColor?: string;
    /**
     * Change the background-color by a any type of css color
     */
    bgColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, cssColor, bgColor }: MyLabelProps) => JSX.Element;
