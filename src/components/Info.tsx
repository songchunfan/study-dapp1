"use client";

import { useAccount, useBalance  } from "wagmi";
import { formatUnits, parseUnits } from "viem";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from '@rainbow-me/rainbowkit';
import { Button } from "@/components/ui/button"

export default function Info() {
  const { address } = useAccount();
  const { data: balanceData, error: balanceError } = useBalance({ address });
  const { data: rccTokenData } = useBalance({
    address,
    token: "0x6FCE5Dd421c88B7df4552E037362Bcea35Ae0AcB",
  });
  console.log(rccTokenData, "balance");
  
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();
  
  return (
    <div>
      {openConnectModal && (
        <Button onClick={openConnectModal}>Click Connect</Button>
      )}
      {openAccountModal && (
        <Button onClick={openAccountModal}>Click Account</Button>
      )}
      {openChainModal && (
        <Button onClick={openChainModal}>Click Chain</Button>
      )}
      <div>Address: {address}</div>
      {balanceData && (
        <>
          <div>
            ETH Balance: {balanceData?.formatted} ---------------- frmatted:
            {formatUnits(balanceData.value, 18)} ETH
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>{formatUnits(balanceData.value, 18)} ether </div>
            <div>{formatUnits(balanceData.value, 15)} finney </div>
            <div>{formatUnits(balanceData.value, 12)} szabo </div>
            <div>{formatUnits(balanceData.value, 9)} gwei </div>
            <div>{formatUnits(balanceData.value, 0)} wei </div>
          </div>
        </>
      )}
      <div>Rcc Balance: {rccTokenData?.formatted}</div>
    </div>
  );
}
