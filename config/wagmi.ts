import { http, createConfig } from 'use-wagmi'
import { mainnet, sepolia } from 'use-wagmi/chains'

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})