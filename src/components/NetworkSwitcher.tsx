"use client";

import { useAccount, useChains, useSwitchChain } from "wagmi";
import { Button } from "@/components/ui/button"
import styles from "../styles/Home.module.css";

export default function NetworkSwitcher() {
  const chains = useChains();
  const { chain, chainId, isConnected } = useAccount();
  const { switchChain } = useSwitchChain();
  console.log({ chain, chains }, "chain");

  return (
    <div>
      <div>Current ChainId: {chainId}</div>
      <div>Current Chain name: {chain?.name}</div>
      {isConnected && (
        <div className={styles.options+" "}>
          {chains
            .filter((v) => v.id !== chainId)
            .map((c) => (
              <Button
                key={c.id}
                onClick={() => switchChain?.({ chainId: c.id })}
              >
                Switch to {c.name}
              </Button>
            ))}
        </div>
      )}
    </div>
  );
}
