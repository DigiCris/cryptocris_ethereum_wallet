#!/usr/bin/env node
let Wallet = require('../src/index.js');


//calling the deterministic account creation
Wallet.createNewWallet();

console.log(Wallet.account);

/////////////////////////////////////// example ends /////////////////////////////////////