const Icon = ({ src, alt, className, id }) => {
  return <img id={id} src={src} alt={alt} className={className || ""} />;
};

export default Icon;
