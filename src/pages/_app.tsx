// 1. import `NextUIProvider` component
import { darkTheme } from '@/themes';
import { NextUIProvider } from '@nextui-org/react';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;