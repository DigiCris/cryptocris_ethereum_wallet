# cryptocris_ethereum_wallet
This is a node application creating EIP55 compatible wallets.

## Install

```npm
npm install -g cryptocris_ethereum_wallet
```

# Usage

```bash
 cryptocris_ethereum_wallet

 Response:
 {
  privateKey: '0x25471ace97aef3505bb4091399d9826abb2f329580dba1166fb7bfe6db043b4
e',
  publicKey: '0x77963d51d3c6e28d8571b6ab1b065fcfd6466ee2282368fe216fdbc3a3930833
8ebb07b4f255305e0d07cc542e4cad02aa49b9d52bde1bb1f0f0f6867b87e670',
  address: '0x6748f309a4f806A0FC34d9fD4A1C9034f45EE957'
}

```

```node
/////////////////////////////////// Start of example //////////////////////////////////

// We need to require the library
let Wallet = require('cryptocris_ethereum_wallet/src/index.js');

//calling the creation of deterministic accounts given by a password('password') and a user(2)
Wallet.deterministicWallet('password',2);
//We print the account that was created.
console.log(Wallet.account);

//Random account generation
Wallet.createNewWallet();
//We print the account that was created.
console.log(Wallet.account);

//Generate account using a specific private key ('983e973ece74a9f345ad5a4ceafe4d38070a950d7efac48edf87ef807670c678')
Wallet.importWallet('983e973ece74a9f345ad5a4ceafe4d38070a950d7efac48edf87ef807670c678');
//We print the account that was created.
console.log(Wallet.account);

/////////////////////////////////////// End of example /////////////////////////////////////
```

# Contributing

If someone wants to add or improve something, I invite you to collaborate directly in this repository: [cryptocris_ethereum_wallet](https://github.com/DigiCris/cryptocris_ethereum_wallet)

# License

cryptocris_ethereum_wallet is released under the [MIT License](https://opensource.org/licenses/MIT).
