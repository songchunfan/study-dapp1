import { createPublicClient, createTestClient, http, webSocket } from 'viem'
import { mainnet, sepolia, polygon, optimism } from 'viem/chains'

const client = createPublicClient({
  chain: sepolia,
  transport: http("https://eth-sepolia.g.alchemy.com/v2/_oNnUhX3OmhrK6JroU33l")
})


const main = async () => {
  console.log('client:', client)
  // 获取最新区块
  const block = await client.getBlock();
  console.log(`Block ${block.number}:`, block.transactions)

  // 解析交易详情
  // const tx = await client.getTransaction({
  //   hash: '0xea2fd3c26f4cb5f8fc51377f19b795ec95348889ff88875ac5695de0ed448b4f'
  // })
  // console.log(`Transaction ${tx.hash}:`, tx)
}

export default function Page() {
  main()
  console.log("hello world")

  return (
    <>
      <h1>viem</h1>
    </>
  )
}