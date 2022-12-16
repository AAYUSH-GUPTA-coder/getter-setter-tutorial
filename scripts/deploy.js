const hre = require("hardhat");

async function main() {
  const GetterSetter = await hre.ethers.getContractFactory("GetterSetter");
  // this deploy function time
  const getterSetter = await GetterSetter.deploy();
  // deployed the smart contract
  await getterSetter.deployed();
  // print the address of our smart contract
  console.log("GetterSetter deploy to: ", getterSetter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
