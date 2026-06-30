export const SearchIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1114 9.5 4.5 4.5 0 019.5 14z" />
  </svg>
);

export const MicIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path fill="#4285F4" d="M12 3a3 3 0 00-3 3v6a3 3 0 006 0V6a3 3 0 00-3-3z" />
    <path fill="#34A853" d="M17 11a5 5 0 01-10 0H5a7 7 0 006 6.92V21h2v-3.08A7 7 0 0019 11z" />
  </svg>
);

export const LensIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3" fill="#4285F4" />
    <path
      fill="#5f6368"
      opacity=".7"
      d="M9 3L7.17 5H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2h-3.17L15 3H9zm3 15a5 5 0 110-10 5 5 0 010 10z"
    />
  </svg>
);

export const SparkleIcon = ({ size = 16, color = "#1a73e8" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
  </svg>
);

export const AppsIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#5f6368">
    <path d="M6,8c1.1,0,2-0.9,2-2s-0.9-2-2-2S4,4.9,4,6S4.9,8,6,8z M12,20c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,20,12,20z M6,20c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S4.9,20,6,20z M6,14c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S4.9,14,6,14z M12,14c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,14,12,14z M16,6c0,1.1,0.9,2,2,2s2-0.9,2-2s-0.9-2-2-2S16,4.9,16,6z M12,8c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,8,12,8z M18,14c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S16.9,14,18,14z M18,20c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S16.9,20,18,20z" />
  </svg>
);

export const LinkedInIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 18.34V9.99H5.67v8.35h2.67zM7 8.8a1.55 1.55 0 100-3.1 1.55 1.55 0 000 3.1zm11.34 9.54v-4.58c0-2.45-1.31-3.59-3.06-3.59a2.64 2.64 0 00-2.39 1.31v-1.49H10.2c.04.75 0 8.35 0 8.35h2.67v-4.66c0-.24.02-.48.09-.65.18-.48.62-.97 1.35-.97.95 0 1.33.72 1.33 1.78v4.5h2.7z" />
  </svg>
);

export const GitHubIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85l-.01 2.74c0 .27.18.58.69.48A10 10 0 0012 2z" />
  </svg>
);

export const MailIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm8 7L4.4 6.8a.5.5 0 00-.4.9l8 4.8 8-4.8a.5.5 0 00-.4-.9L12 11z" />
  </svg>
);

/** Multi-colour wordmark used for both the home logo and the small header logo */
export const Wordmark = ({ text = "Vanessa", className }) => {
  const colors = ["#4285F4", "#EA4335", "#FBBC05", "#4285F4", "#34A853", "#EA4335", "#FBBC05"];
  return (
    <span className={className}>
      {text.split("").map((ch, i) => (
        <span key={i} style={{ color: colors[i % colors.length] }}>
          {ch}
        </span>
      ))}
    </span>
  );
};