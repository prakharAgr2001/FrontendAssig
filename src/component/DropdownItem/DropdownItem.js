import "./DropdownItem.scss";

const DropdownItem = ({ children, onClick }) => {
  return (
    <div className="dropdown-item" onClick={onClick}>
      {children}
    </div>
  );
};

export default DropdownItem;