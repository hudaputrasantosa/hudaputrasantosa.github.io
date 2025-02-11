import { FaCode } from "react-icons/fa6";
const year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="w-full mx-auto mt-auto py-4 border-t bg-gray-50 dark:border-slate-700">
      <div className="flex items-center justify-center gap-2 font-semibold text-slate-700 dark:text-slate-300 lg:text-sm text-xs">
        <p>Build</p>
        <FaCode size="18" />
        <p>
          with 💖 by <span className="font-bold">Huda Putra Santosa</span>.
          &copy;
          {year}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
