import React from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width: string;
  height: string;
  children?: React.ReactNode;
  variant: CardVariant;
}

const Card = ({ width, height, children, variant }: CardProps): JSX.Element => {
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid red" : "none",
        background: variant === CardVariant.primary ? "lightgrey" : "",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
