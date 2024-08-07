const Drawer = ({ className, children, show, handleHidden }) => {
  return (
    <>
      <div
        className={`w-full p-2 pb-8 fixed bottom-0 left-0 bg-secondary z-40 rounded-tl-md rounded-tr-md transform transition duration-300 ease-in-out ${show ? "translate-y-0" : "translate-y-full"} ${className || ""}`}
      >
        {children}
      </div>

      {show && (
        <div
          className="modal-backdrop fixed inset-y-full w-full z-30"
          onClick={handleHidden}
        ></div>
      )}
    </>
  );
};

export default Drawer;
