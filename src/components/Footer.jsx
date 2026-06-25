import { RESUME } from "../resumeData.js";

const Footer = () => {
  const link = "px-3 py-3.5 text-ggrey hover:underline";
  return (
    <div className="mt-10 bg-[#f2f2f2] text-sm text-ggrey">
      <div className="border-b border-[#dadce0] px-[30px] py-[15px]">
        Gifu, Japan
      </div>
      <div className="flex flex-wrap justify-between px-[30px]">
        <div className="flex">
          <a href="#" onClick={(e) => e.preventDefault()} className={link}>
            About
          </a>
          <a href="#" onClick={(e) => e.preventDefault()} className={link}>
            Portfolio
          </a>
        </div>
        <div className="flex">
          <a href={`mailto:${RESUME.email}`} className={link}>
            Contact
          </a>
          <a href="#" onClick={(e) => e.preventDefault()} className={link}>
            Settings
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
