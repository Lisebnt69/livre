import clsx from "clsx";
import { trackEvent } from "../data/ga";

interface CTAButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;

  eventName?: string;
  eventParams?: Record<string, any>;
}

const CTAButton = ({
  label,
  href,
  onClick,
  size = "md",
  fullWidth = false,
  className,
  disabled = false,
  eventName,
  eventParams,
}: CTAButtonProps) => {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primaryBlue/30";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const styles =
    "bg-primaryBlue text-white border border-primaryBlue hover:bg-white hover:text-primaryBlue hover:border-primaryBlue shadow-md hover:shadow-lg hover:scale-[1.03]";

  const disabledStyle = "opacity-50 pointer-events-none";

  const classes = clsx(
    base,
    sizes[size],
    styles,
    fullWidth && "w-full",
    disabled && disabledStyle,
    className
  );

  const isExternal = href?.startsWith("http");

  const handleClick = () => {
    // tracking GA
    if (eventName) {
      trackEvent(eventName, eventParams);
    }

    // ton onClick custom
    onClick?.();
  };

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={handleClick}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={classes}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default CTAButton;
