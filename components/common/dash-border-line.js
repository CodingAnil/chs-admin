const DashedBorderLine = () => {
  return (
    <div className="overflow-hidden w-64 h-3.5 relative flex justify-between after:absolute after:border-b-1.5 after:border-dashed after:w-full after:border-darkGrey after:top-[6px] after:left-1">
      <span className="relative before:bg-darkGrey before:w-2.5 before:h-2.5 before:top-[2px] before:left-[2px] before:rounded-full before:absolute before:border-2 before:border-secondaryShade2 after:border-2 after:border-darkGrey after:rounded-full after:w-3.5 after:h-3.5  after:absolute after:z-10 before:z-10"></span>

      <span className=" relative before:bg-darkGrey before:w-2.5 before:h-2.5 before:top-[2px] before:right-[2px] before:rounded-full before:absolute before:border-2 before:border-secondaryShade2 after:border-2 after:border-darkGrey after:rounded-full after:w-3.5 after:h-3.5 after:right-[0px]  after:absolute after:z-10 before:z-10"></span>
    </div>
  );
};
export default DashedBorderLine;
