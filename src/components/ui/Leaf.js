import React from "react";

const Leaf = ({ position }) => {
    return (
        <div
            style={{
                position: "relative",
                height: "15px",
                ...position,
            }}
        >
            <div
                style={{
                    width: "49px",
                    height: "30px",
                    overflow: "hidden",
                    position: "relative",
                    top: "-16px"
                }}
            >
                <div
                    style={{
                        backgroundColor: "rgb(119, 197, 153)",
                        width: "106px",
                        height: "200px",
                        borderRadius: "50%",
                        position: "relative",
                        left: "-31px",
                        top: "20px",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Leaf;
