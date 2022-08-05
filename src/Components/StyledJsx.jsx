export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="titleContainer">- StyledJsx -</p>
        <button className="buttonContainer">Fight!!</button>
      </div>
      <style jsx="true">
        {`
          .container {
            border: solid 2px #392eff;
            border-radius: 20px;
            padding: 8px;
            margin: 8px;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          .titleContainer {
            margin: 0;
            color: #3d84a8;
          }
          .buttonContainer {
            background-color: #abedd8;
            border: none;
            padding: 8px;
            border-radius: 8px;
          }
        `}
      </style>
    </>
  );
};
