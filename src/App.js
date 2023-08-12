import CustomList from "./components/CustomList/CustomList";
import classes from "./styles.module.scss";
export default function App() {
  return (
    <div className={classes.app}>
      <h1 className={classes.heading}>SASS/SCSS in React</h1>
      <h2 className={classes.subHeading}>Used SCSS variables and mixins</h2>
      <p>Check the style file.</p>
      <code>npm i sass</code>
      <p>
        <span className={classes.warningIcon} />
        Warning: <code>LibSass</code> and <code>Node Sass</code> are deprecated.
      </p>
      <p>SCSS Variables are inside Assets folder</p>
      <p>Styles for this below list are inside components folder</p>
      <CustomList />
    </div>
  );
}
