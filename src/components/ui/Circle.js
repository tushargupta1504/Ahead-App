import React from "react";

const Circle = ({ size, backgroundColor, position }) => {
    return (
        <div
            style={{
                borderRadius: "50%",
                width: size || "20px",
                height: size || "20px",
                backgroundColor: backgroundColor,
                position: "absolute",
                ...position,
            }}
        ></div>
    );
};

export default Circle;
