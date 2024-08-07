import { memo } from "react";
import { Link } from "react-router-dom";

const ErrorElement = memo(() => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <span className="italic text-gray-300">Oops.. Page not found !!</span>
      <div>
        <Link
          to={-1}
          className="text-sm italic text-gray-300 underline hover:text-gray-100"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
});

ErrorElement.displayName = "ErrorElement";
export default ErrorElement;
