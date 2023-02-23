import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider(
  "https://bsc-dataseed.binance.org/"
);

const contract = new ethers.Contract(
  "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
  [
    "function balanceOf(address a) view returns (uint)",
    "function decimals() view returns (uint8)",
  ],
  provider
);

const formattedBalancesPromises = [
  "0xef4b64a5ef44bd7a9a230365ea6920413535cbdb",
  "0x0caa2a051d13d757f751d7b128e19b1984a0bb51",
  "0x3f10f5b2709ac83d999f090e73babd3cd8df1416",
].map(async (address) => {
  const balance = await contract.balanceOf(address);
  const decimals = await contract.decimals();
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: Number(decimals),
  });

  return [
    address,
    currencyFormatter.format(Number(ethers.formatUnits(balance, decimals))),
  ];
});

Promise.all(formattedBalancesPromises).then((formattedBalances) =>
  formattedBalances.forEach(([address, balance]) => {
    console.log(`${address} ${balance}`);
  })
);
