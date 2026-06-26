import { RESUME } from "../resumeData.js";

const [CITY, COUNTRY] = RESUME.location.split(",").map((part) => part.trim());
const MAP_URL = `https://www.google.com/maps/search/${encodeURIComponent(RESUME.location)}`;

// Bottom row of site links. External targets open in a new tab.
const SITE_LINKS = [
  { label: "Contact", href: `mailto:${RESUME.email}` },
  { label: "GitHub", href: RESUME.github },
];

const isExternal = (href) => /^https?:/.test(href);

const Footer = () => (
  <footer className="mt-10 bg-[#f2f2f2] text-sm text-ggrey">
    {/* Personalisation-style notice */}
    <p className="border-b border-[#dadce0] pl-[165px] px-[30px] py-[15px]">
      Results reflect {RESUME.name}'s real experience —{" "}
      <a href={RESUME.linkedin} target="_blank" rel="noreferrer" className="text-gblue hover:underline">
        verify on LinkedIn
      </a>
    </p>

    {/* Location: Country | ● City - context - action */}
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-[#dadce0] pl-[165px] px-[30px] py-[15px]">
      <span>{COUNTRY}</span>
      <span aria-hidden="true" className="h-4 w-px bg-[#dadce0]" />
      <span className="flex flex-wrap items-center gap-1.5">
        <span aria-hidden="true" className="text-[8px] leading-none">⬤</span>
        <span className="text-gtext">{CITY}</span>
        <span>- Open to remote &amp; on-site roles -</span>
        <a href={MAP_URL} target="_blank" rel="noreferrer" className="text-gblue hover:underline">
          View on map
        </a>
      </span>
    </div>

    {/* Site links */}
    <nav className="flex flex-wrap pl-[152px] px-[18px]">
      {SITE_LINKS.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          {...(isExternal(href) && { target: "_blank", rel: "noreferrer" })}
          className="px-3 py-3.5 hover:underline"
        >
          {label}
        </a>
      ))}
    </nav>
  </footer>
);

export default Footer;
