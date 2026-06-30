import vanessa from "../assets/images/vanessa.jfif";
import { RESUME, ABOUT } from "../resumeData.js";
import { LinkedInIcon, GitHubIcon, MailIcon } from "./icons.jsx";

const firstName = RESUME.name.split(" ")[0];

const LINKS = [
  { label: "LinkedIn", href: RESUME.linkedin, icon: LinkedInIcon, external: true },
  { label: "GitHub", href: RESUME.github, icon: GitHubIcon, external: true },
  { label: "Email", href: `mailto:${RESUME.email}`, icon: MailIcon, external: false },
];

const FACTS = [
  { label: "Role", value: RESUME.tagline },
  { label: "Based in", value: RESUME.location },
  { label: "Focus", value: "Web apps · UI/UX · clean engineering" },
];

/** A single label/value row in the "quick facts" block. */
const Fact = ({ label, value }) => (
  <div className="flex gap-4 text-sm">
    <dt className="w-20 flex-none text-xs font-semibold uppercase tracking-wide text-ggrey">{label}</dt>
    <dd className="m-0 text-gresult">{value}</dd>
  </div>
);

/** A contact/social link row with a leading icon and a trailing arrow. */
const ProfileLink = ({ label, href, icon: Icon, external }) => (
  <a
    href={href}
    {...(external && { target: "_blank", rel: "noreferrer" })}
    className="group flex items-center gap-3.5 rounded-xl px-3.5 py-3 text-[15px] text-gresult transition hover:bg-ghover"
  >
    <span className="text-ggrey transition group-hover:text-gblue">
      <Icon size={20} />
    </span>
    <span className="flex-1 font-medium">{label}</span>
    <span className="text-lg text-ggrey transition group-hover:translate-x-0.5">↗</span>
  </a>
);

/**
 * Google-style "knowledge panel" shown on the right of the About page.
 * Fades/slides in via the `panelIn` animation when mounted.
 */
const AboutPanel = ({ onClose }) => (
  <aside className="hidden w-[520px] flex-none animate-panelIn lg:block">
    <div className="sticky top-5 overflow-hidden rounded-2xl border border-gborder bg-white shadow-[0_4px_24px_rgba(32,33,36,.14)]">
      {/* Banner */}
      <div className="relative h-[72px] bg-gradient-to-r from-[#4285F4] to-gblue">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close about panel"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-xl leading-none text-gtext transition hover:bg-white"
        >
          ×
        </button>
      </div>

      {/* Identity — photo left, details right (fills the width) */}
      <div className="flex items-center gap-5 px-6 pt-6">
        <img
          src={vanessa}
          alt={RESUME.name}
          className="h-[132px] w-[132px] flex-none rounded-full object-cover object-top shadow-[0_8px_22px_rgba(32,33,36,.18)] ring-4 ring-white outline outline-1 outline-black/5"
        />
        <div className="min-w-0">
          <h2 className="text-[26px] font-medium leading-tight text-gtext">{RESUME.name}</h2>
          <p className="mt-1.5 text-base font-medium text-gblue">{RESUME.tagline}</p>
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-ghover px-3.5 py-1.5 text-[13px] text-ggrey">
            <span aria-hidden="true">📍</span> {RESUME.location}
          </p>
        </div>
      </div>

      {/* Bio */}
      <p className="mt-5 px-6 text-sm leading-[1.7] text-gresult">
        {firstName} {ABOUT.bio}
      </p>

      {/* Quick facts */}
      <dl className="mx-6 mt-5 space-y-3 rounded-xl bg-ghover px-5 py-4">
        {FACTS.map((fact) => (
          <Fact key={fact.label} {...fact} />
        ))}
      </dl>

      {/* Links */}
      <div className="mt-5 border-t border-gborder p-3">
        {LINKS.map((link) => (
          <ProfileLink key={link.label} {...link} />
        ))}
      </div>
    </div>
  </aside>
);

export default AboutPanel;
