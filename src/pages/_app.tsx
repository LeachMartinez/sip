import "@/assets/styles/global.scss";
import { store } from "@/redux/store";
import { NextPageContext } from "next";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps, props }: AppProps & { props: TypeAppProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} {...props} />
      </Provider>
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