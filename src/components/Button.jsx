import { Link } from "react-router-dom";

function Button({ children, styleClasses, isLink=false, to }) {
  return (
    isLink ? (
      <Link to={to} className={`inline-block ${styleClasses}`}>
        {children}
      </Link>
    ) : (
      <button className={styleClasses}>
        {children}
      </button>
    )
  );
}

export default Button;
