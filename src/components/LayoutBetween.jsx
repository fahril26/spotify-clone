const LayoutBetween = ({ className, children }) => {
  return (
    <div className={`flex justify-between ${className || ""}`}>{children}</div>
  );
};

export default LayoutBetween;
