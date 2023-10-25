
import { PropsWithChildren, useEffect, useState } from 'react';
import Layout from '.';
import { authAxios } from '@/service/Api';
import CircularProgress from '@mui/material/CircularProgress';

const AuthLayout: React.FC<PropsWithChildren> = ({children}) => {
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    setIsFetching(() => true);

    (async () => {
      console.log(await authAxios.get("/user"));
    })();

    setIsFetching(() => false);
  }, [isFetching]);
  
  if (isFetching) return <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}><CircularProgress/></div>;

  return (
    <Layout>
      {children}
    </Layout>
  )
}
export default AuthLayout;