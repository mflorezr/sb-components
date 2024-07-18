import "./MyLabel.css";

export interface Props {
  /**
   *Text to display
   */
  label: string;

  /**
   *Label Size
   */
  size?: "normal" | "h1" | "h2" | "h3";

  /**
   *Capitalize All Leters
   */
  allCaps?: boolean;

  /**
   *Label Color
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";

  /**
   * Font Color 2
   */
  fontColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color,
  fontColor,
}: Props) => {
  return (
    <span className={`${size} ${color} label`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
