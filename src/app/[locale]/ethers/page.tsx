"use client";

import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Button } from '@mui/material'

import { useEthersSigner } from "@/hooks/useEthersSigner";
import { useStakeContract } from "@/hooks/useContract";

import { sepolia } from "viem/chains";
import { parseUnits } from "viem";

export default function Page() {
  const signer = useEthersSigner({ chainId: sepolia.id });
  // console.log("signer", signer);
  const stakeContract = useStakeContract(signer);
  const [end, setEnd] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleStake = async () => {
    try {
      setLoading(true);
      const tx = await stakeContract.depositETH({
        value: parseUnits("0.0002", 18),
      });
      if (tx.wait) {
        const res = await tx.wait();
        setEnd(JSON.stringify(res,['blockNumber', 'blockHash','from','to','gasPrice','gasUsed'],2));
        console.log(res, "deposit");
      }
      setLoading(false);
    } catch (e) {
      console.log(e)
      setLoading(false);
    }
  };

  useEffect(() => {
    const getStartBlock = async () => {
      if (!stakeContract) return;
      /* try {
        // 调用合约方法，增加容错
        const res = await stakeContract.endBlock();
        // 安全转换数字
        setEnd(Number(res).toString());
      } catch (err) {
        console.error("获取 endBlock 失败：", err);
        // 降级处理，避免页面崩溃
        setEnd("0");
      } */
    };
    if (stakeContract) {
      getStartBlock();
    }
  }, [stakeContract.provider]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        mt: "20px",
        mb: "20px",
      }}
    >
      <Box>EndBlock: {end}</Box>
      <Box>
        <LoadingButton
          loading={loading}
          onClick={handleStake}
          variant="contained"
        >
          Stake 0.1
        </LoadingButton>
      </Box>
    </Box>
  );
}
