
import { PropsWithChildren, useEffect, useState } from 'react';
import Layout from '.';
import Loader from '../Loader';
import { authAxios } from '@/service/Api';
import { useAppDispatch } from '@/redux/hooks';
import { TypeUser } from '@/types/UserType';
import { authUser } from '@/redux/slices/user';
import { useRouter } from "next/router";

const AuthLayout: React.FC<PropsWithChildren> = ({children}) => {
  const Router = useRouter();
  const dispatch = useAppDispatch();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(() => true);

    (async () => {
      try {
        const result = await authAxios.get("/user");
        dispatch(authUser(result.data as TypeUser));
      } catch (error: any) {
        Router.push("/sign_in");
      }
    })();

    setIsFetching(() => false);
  }, [isFetching, dispatch, Router]);

  if (isFetching) return <Loader/>;

  return (
    <Layout>
      {children}
    </Layout>
  )
}
export default AuthLayout;