import classNames from "classnames";
import { League_Spartan } from "next/font/google";
import { ElementType, FC, HTMLAttributes } from "react";
import styles from "./Typography.module.scss";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant: "headingL" | "headingM" | "headingS" | "body";
  tag?: ElementType;
  htmlFor?: string;
}

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

export const Typography: FC<TypographyProps> = ({
  children,
  className,
  variant,
  tag: Tag = "p",
  htmlFor,
  ...props
}) => {
  return (
    <Tag
      className={classNames(
        styles[variant],
        leagueSpartan.className,
        className
      )}
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </Tag>
  );
};
