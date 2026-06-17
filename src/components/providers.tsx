"use client";

import { useState } from "react";
import { http, fallback } from "viem";
import { WagmiProvider } from "wagmi";
import { getDefaultConfig, RainbowKitProvider, darkTheme, lightTheme,
  midnightTheme,
  type Locale
 } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia, polygon, optimism } from "viem/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider } from '@mui/material';
import { createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'light', // light / dark 模式
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
  },
})

const walletConnectProjectId =
  process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;
  console.log(walletConnectProjectId);


export const config = getDefaultConfig({
  appName: "RainbowKit App",
  projectId: walletConnectProjectId,
  chains: [sepolia, mainnet, polygon, optimism],
  transports: {
    [sepolia.id]: fallback([
      http("https://sepolia.infura.io/v3/e6ef18a38ced42f7ba70ed9baa5ba336"),
      http("https://eth-sepolia.g.alchemy.com/v2/_oNnUhX3OmhrK6JroU33l"),
    ]),
    [mainnet.id]: fallback([
      http("https://mainnet.infura.io/v3/e6ef18a38ced42f7ba70ed9baa5ba336"),
      http("https://eth-mainnet.g.alchemy.com/v2/_oNnUhX3OmhrK6JroU33l"),
    ]),
    [polygon.id]: http(
      "https://polygon-amoy.infura.io/v3/e6ef18a38ced42f7ba70ed9baa5ba336",
    ),
    [optimism.id]: http(
      "https://optimism-sepolia.infura.io/v3/e6ef18a38ced42f7ba70ed9baa5ba336",
    ),
  },
  ssr: true,
});

export default function Providers({ locale, children }: { locale: Locale, children: React.ReactNode }) {
  // console.log('locale:',locale)
  // const { locale } = useRouter() as { locale: Locale };

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: 60 * 1000 } },
      }),
  );
  return (
    <ThemeProvider theme={theme}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            coolMode={true}
            locale={locale}
            theme={darkTheme({
              overlayBlur: "large"
            })}>
            {/* 重置全局样式 */}
            <CssBaseline />
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
}
