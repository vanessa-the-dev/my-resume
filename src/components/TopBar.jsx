import { AppsIcon } from "./icons.jsx";

const TopBar = ({ onImagesClick }) => (
  <div className="flex h-[60px] items-center justify-end gap-4 px-4 text-[13px]">
    <a href="#" onClick={(e) => e.preventDefault()} className="text-black hover:underline">
      Gmail
    </a>
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onImagesClick?.();
      }}
      className="text-black hover:underline"
    >
      Images
    </a>
    <div
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black/5"
      title="Resume sections"
    >
      <AppsIcon />
    </div>
    <div className="g-avatar h-8 w-8 cursor-pointer text-[15px]" title="Vanessa Isidro">
      V
    </div>
  </div>
);

export default TopBar;
