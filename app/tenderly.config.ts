import { defineChain } from '@reown/appkit/networks'
 
export const vTestnet = defineChain({
  id: 73571,  // Add this to match CaipNetwork's expected fields
  caipNetworkId: 'eip155:73571',
  chainNamespace: 'eip155',  // Assuming Ethereum-compatible chain namespace
  name: 'Virtual Sepolia',
  nativeCurrency: { name: 'vSepolia', symbol: 'vETH', decimals: 18 }, // Changed from nativeCurrency
  rpcUrls: {
    default:{
      http: [process.env.TENDERLY_VIRTUAL_TESTNET_RPC!],
    }
  },
  blockExplorers: {
    default:{
      name:'Tenderly Explorer',
      url: 'https://dashboard.tenderly.co/explorer/vnet/6a6910ba-5831-4758-9d89-1f8e3169433f', // Changed to explorerUrl
    }
  },
  contracts: {
    ensRegistry: {
      address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
    },
    ensUniversalResolver: {
      address: '0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
      blockCreated: 16773775
    },
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 14353601
    }
  }
})
