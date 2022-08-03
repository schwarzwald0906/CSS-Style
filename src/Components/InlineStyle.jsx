export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    padding: "20px",
    margin: "8px",
    display: "flex",
    justifyContent: "Space-around",
    alignItems: "center"
  };

  const titleStyle = {
    margin: 0,
    color: "#3d84a8"
  };

  const buttonStyle = {
    backGroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>-InlineStyle-</p>
      <button style={buttonStyle}>Fight!!</button>
    </div>
  );
};
