// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

const PROXY = "0xd119a76Fc0055EcE1825723FA2602218dc2Dc758";

async function main() {
    const ContractB = await ethers.getContractFactory("ContractB");
    console.log("Upgrading ContractA");
    await upgrades.upgradeProxy(PROXY, ContractB);
    console.log("ContractA upgraded to ContractB");
}

main();