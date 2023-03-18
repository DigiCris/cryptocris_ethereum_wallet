#!/usr/bin/env node
let Wallet = require('../src/index.js');


//Llamando a la creación de wallets determinista
Wallet.deterministicWallet('password',3);

console.log(Wallet.account);

/////////////////////////////////////// Termina el Ejemplo /////////////////////////////////////