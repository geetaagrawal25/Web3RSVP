const hre = require("hardhat");

const main = async () =>{
    const rsvpContractFactory = await hre.ethers.getContractFactory("web3rsvp");
    const rsvpContract = await rsvpContractFactory.deploy();
    await rsvpContract.deployed();
    console.log("Contract deployed to:", rsvpContract.address);
};

const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();

  //0x9A52e8890538ed59827c24be6Ff766C946013105