import React from "react";
import { joinClassNames } from "@yakad/lib";
import styles from "./navigation.module.css";

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
    anchor?: "left" | "right" | "top" | "bottom" | "auto";
    open: boolean;
}

export default function Navigation(props: NavigationProps) {
    const joinedClassNames = joinClassNames(
        styles.navigation,
        props.anchor ? styles[props.anchor] : styles.auto,
        props.open ? styles.open : ""
    );

    return (
        <nav {...props} className={joinedClassNames}>
            {props.children as React.ReactNode}
        </nav>
    );
}
