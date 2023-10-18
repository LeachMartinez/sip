import { PropsWithChildren } from "react";
import styles from "./Button.module.scss";

type TypeInput = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & PropsWithChildren;
type TypeInputLabel = {
  text?: string;
} & PropsWithChildren;

const Button: React.FC<TypeInput> = (props) => {
  return (
    <button className={styles.btn} {...props}>{props.children}</button>
  );
} 

const ButtonLabel: React.FC<TypeInputLabel> = ({ children, text }) => {
  return (
    <div className={styles.btn__wrapper}>
      {/* <span className={styles.input__text}>{text}</span> */}
      { children }
    </div>
  );
}

export { ButtonLabel };
export default Button;

