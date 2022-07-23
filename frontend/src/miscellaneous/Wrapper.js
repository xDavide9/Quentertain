import "./Wrapper.css";

// redo completely

const Wrapper = (props) => {
  return (
    <div
      style={{
        width: "900px",
        minHeight: "1200px",
        overflowWrap: "break-word",
      }}
    >
      {props.children}
    </div>
  );
};

export default Wrapper;
