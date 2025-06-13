import "./stars.css";

export const Stars = () => {
  return (
    <div className="absolute -z-10 hidden h-full w-full max-w-[2000px] overflow-hidden motion-safe:flex">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
};
