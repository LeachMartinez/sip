import CircularProgress from '@mui/material/CircularProgress';
import { PropsWithChildren } from 'react';
import styles from "./Loader.module.scss";

const Loader: React.FC = () => <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}><CircularProgress/></div>;
type TypeLoaderWrapperProps = {
  isActive: boolean;
}
const LoaderWrapper: React.FC<PropsWithChildren & TypeLoaderWrapperProps> = ({children, isActive}) => {
  return (
    <div className={[styles.loaderBackdrop, isActive ? styles.active : ""].join(" ") }>
      {children}
    </div>
  )
}
  
export { LoaderWrapper };
export default Loader;