import { RESUME, WORK, EDUCATION, PROJECTS, ABOUT, SKILLS, CONTACT } from "../resumeData.js";

/** Avatar + site name + url line shown above every result.
 *  The avatar always uses the brand initial; `name` is the displayed label. */
const SourceHeader = ({ name = RESUME.name, url }) => (
  <div className="g-source">
    <div className="g-avatar h-[26px] w-[26px] flex-none text-xs">{RESUME.name.charAt(0)}</div>
    <div>
      <div className="g-source-name">{name}</div>
      <div className="g-source-url">{url}</div>
    </div>
  </div>
);

/** Result shell: source line + clickable title; `children` is the body. */
const ResultBlock = ({ name, url, title, onTitleClick, children }) => (
  <div className="g-card">
    <SourceHeader name={name} url={url} />
    <h3 className="g-title" onClick={onTitleClick}>
      {title}
    </h3>
    {children}
  </div>
);

/** A single Google-style result card built from a data object */
const ResultCard = ({ item, onTitleClick }) => (
  <ResultBlock name={item.site} url={item.url} title={item.title} onTitleClick={onTitleClick}>
    <div className="g-snippet">
      {item.date && <span className="text-ggrey">{item.date} · </span>}
      {item.summary}
      {item.bullets && item.bullets.length > 0 && (
        <ul className="g-bullets">
          {item.bullets.map((b, i) => (
            <li key={i} className="mb-1">
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  </ResultBlock>
);

const Stats = ({ children }) => (
  <div className="mb-[22px] text-[13px] text-ggrey">{children}</div>
);

/** Wraps the results column and an optional right-hand panel */
const Layout = ({ children, panel }) => (
  <div className="flex items-start gap-10">
    <div className="min-w-0 flex-1">{children}</div>
    {panel}
  </div>
);

/* ---- About / "who is Vanessa Isidro?" ---- */
const AboutPage = ({ search, panel }) => {
  const sublink = "g-link cursor-pointer text-base";
  return (
    <Layout panel={panel}>
      <Stats>About 1 dedicated result (0.42 seconds)</Stats>

      <ResultBlock
        url={ABOUT.url}
        title={`Who is ${RESUME.name}? — About`}
        onTitleClick={() => search("Vanessa Isidro work experience")}
      >
        <div className="g-snippet">
          <span className="text-ggrey">Profile · </span>
          {RESUME.name} is a <b className="font-medium">{RESUME.tagline}</b> based in{" "}
          {RESUME.location} who {ABOUT.bio}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-x-10 gap-y-1">
          {ABOUT.links.map((l) => (
            <div key={l.q}>
              <a className={sublink} onClick={() => search(l.q)}>
                {l.label}
              </a>
              <div className="text-[13px] text-gresult">{l.desc}</div>
            </div>
          ))}
        </div>
      </ResultBlock>

      <div className="mb-7 max-w-[600px] overflow-hidden rounded-[10px] border border-[#ebebeb]">
        <h2 className="m-0 px-[18px] pb-1.5 pt-4 text-xl font-normal">People also ask</h2>
        {ABOUT.faq.map((item) => (
          <div
            key={item.q}
            onClick={() => search(item.q)}
            className="flex cursor-pointer items-center justify-between border-t border-[#ebebeb] px-[18px] py-3.5 text-[15px] text-gresult hover:bg-ghover"
          >
            <span>{item.label}</span>
            <span className="text-ggrey">▾</span>
          </div>
        ))}
      </div>
    </Layout>
  );
};

/* ---- Generic list page (work / education / projects) ---- */
const ListPage = ({ stats, items, search, panel, query }) => (
  <Layout panel={panel}>
    <Stats>{stats}</Stats>
    {items.map((item, i) => (
      <ResultCard key={i} item={item} onTitleClick={() => search(query)} />
    ))}
  </Layout>
);

/* ---- Skills ---- */
const SkillsPage = ({ panel }) => {
  return (
    <Layout panel={panel}>
      <Stats>About 1 result (0.19 seconds)</Stats>
      <ResultBlock url={SKILLS.url} title={SKILLS.title}>
        <div className="g-snippet">
          {SKILLS.intro}
          <ul className="g-bullets">
            {SKILLS.groups.map((g) => (
              <li key={g.label} className="mb-1">
                <b className="font-medium">{g.label}:</b> {g.items}
              </li>
            ))}
          </ul>
        </div>
      </ResultBlock>
    </Layout>
  );
};

/* ---- Contact ---- */
const ContactPage = ({ panel }) => {
  return (
    <Layout panel={panel}>
      <Stats>About 1 result (0.11 seconds)</Stats>
      <ResultBlock url={CONTACT.url} title={CONTACT.title}>
        <div className="g-snippet">
          {CONTACT.intro}
          <ul className="g-bullets">
            {CONTACT.items.map((c) => (
              <li key={c.label} className="mb-1">
                <b className="font-medium">{c.label}:</b>{" "}
                {c.href ? (
                  <a href={c.href} className="g-link">
                    {c.value}
                  </a>
                ) : (
                  c.value
                )}
              </li>
            ))}
          </ul>
        </div>
      </ResultBlock>
    </Layout>
  );
};

/** Router: pick the page component for a given key.
 *  `panel` is an optional right-hand element (the knowledge panel). */
const ResultPages = ({ pageKey, search, panel = null }) => {
  switch (pageKey) {
    case "work":
      return (
        <ListPage
          stats="About 3 roles (0.31 seconds)"
          items={WORK}
          search={search}
          panel={panel}
          query="Vanessa Isidro work experience"
        />
      );
    case "education":
      return (
        <ListPage
          stats="About 1 result (0.28 seconds)"
          items={EDUCATION}
          search={search}
          panel={panel}
          query="Vanessa Isidro academic experience"
        />
      );
    case "projects":
      return (
        <ListPage
          stats="About 3 results (0.22 seconds)"
          items={PROJECTS}
          search={search}
          panel={panel}
          query="Vanessa Isidro projects"
        />
      );
    case "skills":
      return <SkillsPage panel={panel} />;
    case "contact":
      return <ContactPage panel={panel} />;
    case "about":
    default:
      return <AboutPage search={search} panel={panel} />;
  }
};

export default ResultPages;
