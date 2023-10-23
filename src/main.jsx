import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import '@rainbow-me/rainbowkit/styles.css';
// Import RainbowKit and wagmi
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

//Configure desired chain and connectors
const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    alchemyProvider({ apiKey: 'raJMCLE882S6VCL4PNLiDs4nVcBwhE-9' }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'nft-marketplace',
  projectId: 'c603c769a0446c65a86585945f938991',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains}>
      <App />
    </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
)
