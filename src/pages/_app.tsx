import "@/assets/styles/global.scss";
import { store } from "@/redux/store";
import { NextPageContext } from "next";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps, props }: AppProps & { props: TypeAppProps }) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Component {...pageProps} {...props} />
        </Provider>
      </QueryClientProvider>
    </>
  );
}

interface Context extends NextPageContext {
  ctx: NextPageContext;
}

App.getInitialProps = async (context: Context) => {
  return {
    props: { pathName: context.ctx.asPath },
  };
};

type TypeAppProps = { pathName: string };