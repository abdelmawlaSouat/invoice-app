interface Props {
  size?: number;
  color: string;
}

export const Oval = ({ size = 8, color = "#33D69F" }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="4" fill={color} />
    </svg>
  );
};
