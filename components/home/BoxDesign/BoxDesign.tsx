const BoxDesign = () => {
  const boxStyle = {
    width: "15px",
    height: "10px",
    border: "1px solid black",
    backgroundColor: "rgba(33, 150, 243, 1)",
    display: "block",
  };

  const boxWithMarginStyle = {
    ...boxStyle,
    marginLeft: "0",
    marginTop: "10px",
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={boxWithMarginStyle}></div>{" "}
        {/* This div has a margin from the left */}
        <div style={boxStyle}></div>
      </div>
    </div>
  );
};

export default BoxDesign;
