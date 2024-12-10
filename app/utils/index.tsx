import React from "react";

interface ContainerT {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerT> = ({ children, className }) => {
    return (
        <div className={`max-w-[83%] mx-auto ${className} `}>{children}</div>
    );
};

export default Container;
