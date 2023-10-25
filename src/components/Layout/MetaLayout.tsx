import Head from "next/head";
import { PropsWithChildren } from "react";

const Meta: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      {children}
    </>
  );
};

export default Meta;
