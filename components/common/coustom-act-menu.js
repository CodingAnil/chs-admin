import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Dropdown } from "react-bootstrap";
import { MoreVertical } from "react-feather";
import { useDispatch } from "react-redux";
import { storeUserData } from "../../store/Reducers/user";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Link
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="text-muted text-primary-hover"
  >
    {children}
  </Link>
));

CustomToggle.displayName = "CustomToggle";

const ActionMenu = ({ item, handleClick, options, handelUpdate }) => {
  const router = useRouter();

  const handleClickMenu = (label) => {
    if (label == "View Model Profile") {
      router.push(`profile/model?id=${item?.receiverId?._id}`);
    } else if (label == "View Full Review" || label == "View Full Feedback") {
      handleClick("view", item);
    } else if (label == "Reply") {
      handleClick("replay", item);
    } else if (label == "Mark as Resolved") {
      handelUpdate(item?._id, { status: "Resolved" });
    }
  };

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle}>
        <MoreVertical size="15px" className="text-muted" />
      </Dropdown.Toggle>
      <Dropdown.Menu align="end">
        {options?.map((option, index) => (
          <Dropdown.Item
            key={index}
            eventKey={index}
            onClick={() => handleClickMenu(option)}
          >
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ActionMenu;
