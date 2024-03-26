import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import theme from '../theme';

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
    clientId="d7fa9f15010133d7f7ce5de173048f6a"
    secretKey="wp1n6Vz0hM8m0mqmLn17NkTosLxj65sF3cquS_Sn-vOgMpll42PXZ1D7i13p-lqpAOLCRhNcTEV9kgv5KDXK8g"
    activeChain={activeChain}>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
      
    </ThirdwebProvider>
  );
}

export default MyApp;