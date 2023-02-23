# evm-code-challenges

This repo contains my attempt at exploring Solidity and EVM chains in general. I completed the lessons on CryptoZombies.io to gain an understanding on Solidity development, particularly about writing Smart Contracts and decided to put my learning into practice.

This repo consists of two projects - `token-holder-retrieval` and `token-balances-retrieval`.

## Project #1 - Retrieve holders of the PancakeSwap token `token-holder-retrieval`

I implemented a script to retrieve the specified holders of CAKE token on the Binance Smart Chain network.

## Project #2 - Retrieve token balances of wallets on the devnet `token-balances-retrieval`

I deployed a utility EVM contract with a method to retrieve all token balances given a wallet address and the token contract addresses. Firstly, I deployed 2 ERC20 token contracts to the Goerli testnet. Subsequently, I used my deployed contract `RetrieveTokenBalances.sol` to query the corresponding token balances given a wallet address. 
