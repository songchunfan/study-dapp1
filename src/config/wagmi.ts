"use client";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http, fallback } from "viem";
import { mainnet, sepolia, polygon, optimism } from "viem/chains";

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
