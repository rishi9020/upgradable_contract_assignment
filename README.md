Prerequisites:
1. Node.JS (v12.22.6)
2. Set .env
   ---

   ``
    Get infura gateway link to interact with the blockchain node(in our case we used ropsten test-net). 
    Need private key of account which has some test ethers. 
    EthereScan API key for contract verifications.
    ``

Steps to test:

1. Install dependencies
   ```
   npm i
   ```

2. Set .env file
   
3. Run below command to deploy ContractA, Proxy contracts
   Note: Proxy contract will act as a gateway to ContractA
   ```
   env $(cat .env) npx hardhat run --network ropsten scripts/deploy_v1.js
   ```

4. Verify the deployed ContractA.
   ```
   env $(cat .env) npx hardhat verify --network ropsten <ADDRESS_OF_DEPLOYED_CONTRACTA>
   ```
   After deploying ContractA, perform some txns using Proxy contract to ContractA functions.

5. Before upgrading the contract copy the address of Proxy Contract in scripts/upgrade_contract.js file, To upgrade ContractA to ContractB run below command:
   ```
   env $(cat .env) npx hardhat run --network ropsten scripts/upgrade_contract.js
   ```

6. Verify the deployed ContractB
   ```
   env $(cat .env) npx hardhat verify --network ropsten <ADDRESS_OF_DEPLOYED_CONTRACTB>
   ```

7. Now you can invoke the new ContractB functions using Proxy contract.
---

Note:
Proxy contract has stored the blockchain data state, and ContractA/ContractB contains the logic
