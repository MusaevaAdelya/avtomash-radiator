import { Link } from "react-router-dom";

function Button({ children, styleClasses, isLink=false, to, onClickHandler }) {
  return (
    isLink ? (
      <Link to={to} className={`inline-block ${styleClasses}`}>
        {children}
      </Link>
    ) : (
      <button type="button" className={styleClasses} onClick={onClickHandler}>
        {children}
      </button>
    )
  );
}

export default Button;
