import { Link } from "react-router-dom";

var PageLink = ({ children, ...props }) => {
  return (
    <div className="hover:text-slate-400">
      <Link {...props}>{children}</Link>
    </div>
  );
};

export default PageLink;
