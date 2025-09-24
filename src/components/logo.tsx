
export function Logo({ className }: { className?: string }) {
    return (
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50 0L100 100H0L50 0Z"
          fill="currentColor"
        />
        <path
          d="M50 25L75 75H25L50 25Z"
          fill="hsla(var(--background))"
        />
      </svg>
    );
  }
  