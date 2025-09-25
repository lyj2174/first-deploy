
import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

export function Badge({ children, variant = "default", style, ...props }: BadgeProps) {
  const baseStyle: React.CSSProperties = {
    display: "inline-block",
    padding: "4px 12px",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: 500,
  };

  const variants: Record<string, React.CSSProperties> = {
    default: { backgroundColor: "#2563eb", color: "white" }, // 파란색
    secondary: { backgroundColor: "#f3f4f6", color: "#374151" }, // 회색
    outline: { border: "1px solid #d1d5db", color: "#374151" }, // 테두리만
  };

  return (
    <span style={{ ...baseStyle, ...variants[variant], ...style }} {...props}>
      {children}
    </span>
  );
}
