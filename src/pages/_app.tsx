import "@/assets/styles/global.scss";
import { NextPageContext } from "next";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, props }: AppProps & { props: TypeAppProps }) {
  return (
    <>
      <Component {...pageProps} {...props} />
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