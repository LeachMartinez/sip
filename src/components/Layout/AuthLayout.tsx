
import { PropsWithChildren, useEffect, useState } from 'react';
import Layout from '.';
import Loader from '../Loader';
import { authAxios } from '@/service/Api';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { TypeUser } from '@/types/UserType';
import { authUser } from '@/redux/slices/user';
import { useRouter } from "next/router";

const AuthLayout: React.FC<PropsWithChildren> = ({children}) => {
  const Router = useRouter();
  const dispatch = useAppDispatch();
  const [isAuthUser, setIsAuthUser] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(() => true);

    (async () => {
      try {
        const result = await authAxios.get("/user");
        dispatch(authUser(result.data as TypeUser));
        setIsAuthUser(() => true);
      } catch (error) {
        console.log(error.response.status);
        error.response.status === 403 && setIsAuthUser(() => false);
        Router.push("/sign_in");
      }
    })();

    setIsFetching(() => false);
  }, [isFetching, dispatch, Router, isAuthUser]);

  if (isFetching) return <Loader/>;

  return (
    <Layout>
      {children}
    </Layout>
  )
}
export default AuthLayout;