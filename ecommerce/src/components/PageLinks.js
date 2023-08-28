import { Link } from "react-router-dom";

var PageLink = ({ children, ...props }) => {
  return (
    <div>
      <Link {...props}>{children}</Link>
    </div>
  );
};

export default PageLink;
