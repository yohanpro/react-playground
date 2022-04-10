import type { AppProps } from "next/app";
import "../styles/global.scss";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

type GetLayout = (page: ReactNode) => ReactNode;

const defaultGetLayout: GetLayout = (page: ReactNode): ReactNode => page;

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available

  const getLayout = Component.getLayout ?? defaultGetLayout;

  return getLayout(<Component {...pageProps} />);
}
