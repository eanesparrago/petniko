import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import store from "app/store";
import "styles/globals.css";
import initAuth from "utils/init-auth";

initAuth();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
