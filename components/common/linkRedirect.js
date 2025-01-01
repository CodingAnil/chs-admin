import Link from "next/link";
import React from "react";

const Redirect = ({ child, path, className }) => {
  return (
    <div>
      <Link href={path} className={className}>
        {child}
      </Link>
    </div>
  );
};

export default Redirect;
