const DaoToken = artifacts.require("./DaoToken")

module.exports = function(deployer){
    deployer.deploy(DaoToken);
}