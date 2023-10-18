import { PropsWithChildren } from "react";
import styles from "./Input.module.scss";

type TypeInput = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type TypeInputLabel = {
  text?: string;
} & PropsWithChildren;

const Input: React.FC<TypeInput> = (props) => {
  return (
    <input className={styles.input} {...props}/>
  );
} 

const InputLabel: React.FC<TypeInputLabel> = ({ children, text }) => {
  return (
    <div className={styles.input__wrapper}>
      <span className={styles.input__text}>{text}</span>
      { children }
    </div>
  );
}

export { InputLabel };
export default Input;


