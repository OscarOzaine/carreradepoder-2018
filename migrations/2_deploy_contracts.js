//var ConvertLib = artifacts.require("./ConvertLib.sol");
var Poll = artifacts.require("./Poll.sol");

module.exports = function(deployer) {
  //deployer.deploy(ConvertLib);
  //deployer.link(ConvertLib, Poll);
  deployer.deploy(Poll, 'Elecciones Mexico 2018');
};
