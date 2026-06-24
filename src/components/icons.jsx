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