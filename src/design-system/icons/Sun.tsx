interface Props {
  size?: number;
  color?: string;
}

export const Sun = ({ size = 20, color = "#858BB2" }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="19" cy="15" r="15" fill={color} />
    </svg>
  );
};
