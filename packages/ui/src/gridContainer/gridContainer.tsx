import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./gridContainer.module.css";

export interface GridContainerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    gap?: number;
    columns?: 10 | 12;
}

// Custom Button Element
export default function GridContainer(props: GridContainerProps) {
    const joinedClassNames = joinClassNames(
        styles.gridcontainer,
        props.columns
            ? styles["gridColumns" + props.columns]
            : styles.gridColumns12,
        props.className!
    );
    const joinedStyles = joinStyles(
        { columnGap: props.gap ? props.gap + "rem" : "1.5rem" },
        { rowGap: props.gap ? props.gap + "rem" : "1.5rem" },
        props.style!
    );
    return (
        <div {...props} className={joinedClassNames} style={joinedStyles}>
            {props.children as React.ReactNode}
        </div>
    );
}
