import PropTypes from "prop-types";
import Button from "./Button";

export const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <div className="header-text">
        <img src="../logo192.png" alt="React Logo" width="50" height="50" />
        <h1>{title}</h1>
      </div>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
