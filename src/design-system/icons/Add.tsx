interface Props {
  size?: number;
  circleColor?: string;
  iconColor?: string;
}

export const Add = ({
  size = 32,
  circleColor = "white",
  iconColor = "#7C5DFA",
}: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={"16"} cy={"16"} r={"16"} fill={circleColor} />
      <path
        d="M17.3131 21.0229V17.3131H21.0229V14.7328H17.3131V11.0229H14.7328V14.7328H11.0229V17.3131H14.7328V21.0229H17.3131Z"
        fill={iconColor}
      />
    </svg>
  );
};
