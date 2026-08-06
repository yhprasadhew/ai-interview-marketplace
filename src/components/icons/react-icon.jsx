export default function ReactIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      {...props}
    >
      <path d="M12 3.5c4.5 0 8.2 2.1 10.3 5.2-2.1 3.1-5.8 5.2-10.3 5.2S3.8 11.8 1.7 8.7C3.8 5.6 7.5 3.5 12 3.5Z" />
      <path d="M12 20.5c-4.5 0-8.2-2.1-10.3-5.2 2.1-3.1 5.8-5.2 10.3-5.2s8.2 2.1 10.3 5.2c-2.1 3.1-5.8 5.2-10.3 5.2Z" />
      <circle cx="12" cy="12" r="2.2" />
    </svg>
  );
}
