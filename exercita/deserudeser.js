export const importAccs = async () => {
  const { ethers, getNamedAccounts, provider } = require("hardhat");
  const { deployer } = await getNamedAccounts();
  const signer = await provider.getSigner(deployer);

  return { ethers, signer, deployer };
};
