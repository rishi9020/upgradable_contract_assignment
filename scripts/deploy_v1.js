// scripts/deploy_upgradeable_box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
    const ContractA = await ethers.getContractFactory("ContractA");
    console.log("Deploying ContractA");
    const contractA = await upgrades.deployProxy(ContractA);
    await contractA.deployed();
    console.log("Box deployed to:", contractA.address);
}

main();