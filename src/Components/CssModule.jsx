import classes from "./CssModule.module.scss";

export const CssModule = () => {
  return (
    <div className={classes.container}>
      <p className={classes.titleContainer}>- CssModule -</p>
      <button className={classes.buttonContainer}>Fight!!</button>
    </div>
  );
};
