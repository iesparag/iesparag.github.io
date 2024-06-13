import React from "react";

const Responsibilites = ({ items }) => {
    console.log(items, "items");
    return (
        <div style={{ maxWidth: "80%", margin: "auto" }}>
            {items?.map((el) => {
                return (
                    <ul style={{ lineHeight: 2 }}>
                        <li>{el.description}</li>
                    </ul>
                );
            })}
        </div>
    );
};

export default Responsibilites;
