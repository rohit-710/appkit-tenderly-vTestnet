"use client";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <main className="min-h-screen px-8 py-0 pb-12 flex-1 flex flex-col items-center">
      <header className="w-full py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/walletconnect.png" alt="logo" className="w-10 h-10 mr-2" />
          <div className="hidden sm:inline text-xl font-bold">WalletConnect - AppKit + Scroll</div>
        </div>
      </header>
      <h2 className="my-8 text-2xl font-bold leading-snug text-center">Examples</h2>
      <div className="max-w-4xl">
        <div className="grid bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <h3 className="text-sm font-semibold bg-gray-100 p-2 text-center">Connect to Scroll</h3>
          <div className="flex justify-center items-center p-4">
          <w3m-button />
          </div>
        </div> 
        <br></br>
        {isConnected && (
          <div className="grid bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <h3 className="text-sm font-semibold bg-gray-100 p-2 text-center">Network selection button</h3>
            <div className="flex justify-center items-center p-4">
              <w3m-network-button />
            </div>
          </div>
        )}
      </div>
      <h2 className="my-8 text-2xl font-bold leading-snug text-center">Docs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
        <a
          href="https://docs.walletconnect.com/appkit/overview" target="_blank"
          className="grid bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex justify-between items-center bg-gray-100 p-3">
            <h3 className="text-lg font-semibold">AppKit Docs</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div className="p-4">
            <p className="text-left">
            Learn how to integrate AppKit into your project, enabling seamless wallet connections, email and social logins, on-ramp integration, Smart Accounts, one-click authentication, and more.
            </p>
          </div>
        </a>
        <a
          href="https://docs.walletconnect.com/" target="_blank"
          className="grid bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex justify-between items-center bg-gray-100 p-3">
            <h3 className="text-lg font-semibold">WalletConnect Docs</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div className="p-4">
            <p className="text-left">
            If you're building a Web3 app, use AppKit by WalletConnect. For those creating a wallet, check out WalletKit by WalletConnect. Here are the docs to get started.           </p>
          </div>
        </a>
      </div>
    </main>
  );
}
