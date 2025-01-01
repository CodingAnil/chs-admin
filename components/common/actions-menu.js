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

const ActionMenu = ({ type, item, handleClick }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const getOptions = () => {
    const baseOptions = [
      {
        label: "View Profile",
        href: type == "client" ? "/profile/client" : "/profile/model",
      },
      { label: "Send Message", href: "/chat" },
    ];

    if (type === "model") {
      baseOptions.push({ label: "Edit Profile", href: "/edit-profile" });
      if (
        item?.subscription?.subscriptionType == "Exclusive_Elite_Gent" &&
        item?.subscription?.stripeDiscount == 100
      ) {
        baseOptions.push({ label: "Downgrade" });
      } else if (
        item?.subscription?.subscriptionType == "Exclusive_Elite_Gent" ||
        item?.subscription?.subscriptionType == "Elite_Gent"
      ) {
        baseOptions.push({ label: "Upgrade" });
      }
      baseOptions.push({
        label:
          item?.status?.toLowerCase() == "suspended"
            ? "Re Activate Account"
            : "Suspend Account",
      });
    } else if (type === "pendingModel") {
      baseOptions.push({ label: "Edit Profile", href: "/edit-profile" });
    } else if (type === "client") {
      baseOptions.push({
        label:
          item?.status?.toLowerCase() == "suspended"
            ? "Re Activate Account"
            : "Suspend Account",
      });
    }
    return baseOptions.filter((option) => option);
  };

  const handleClickMenu = (label, type) => {
    dispatch(storeUserData({ label, value: item }));
    handleClick(label, item, type, router);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle}>
        <MoreVertical size="15px" className="text-muted" />
      </Dropdown.Toggle>
      <Dropdown.Menu align="end">
        {getOptions().map((option, index) => (
          <Dropdown.Item
            key={index}
            eventKey={index}
            onClick={() => handleClickMenu(option?.label, type)}
            // {...(option.href && { href: option.href } )}
          >
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ActionMenu;
