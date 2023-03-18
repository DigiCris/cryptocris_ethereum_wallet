//////////////////////////////// Require necesarios para que funcione ////////////////////////////
//keccak256
const keccak256 = require('keccak256');

//ecdsa
let elliptic = require('elliptic');
let sha3 = require('js-sha3');
let ec = new elliptic.ec('secp256k1');

//eip55
let eip55 = require('eip55');
/////////////////////////////////Termina los requires ////////////////////////////////////////////


///////////////////////////////// Ejemplo ///////////////////////////////////////////////////////
// Objeto que contendrá la forma de la wallet a crear
const wallet = {
  privateKey: "12345",
  publicKey: "ABCDEFG",
  address: "0x123456789"
};


//Cuenta= instancia del objeto wallet en donde guardaremos los valores calculados
var account=Object.create(wallet);
/*
//Llamando a la creación de wallets determinista
deterministicWallet('password',2);

//Llamando a la creación de wallets aleatorias
//createNewWallet();

//Llamando a la importación de wallet usando clave privada
//importWallet('983e973ece74a9f345ad5a4ceafe4d38070a950d7efac48edf87ef807670c678');

// Verifico que pase la EIP55
console.log( "Pasa eip55= "+eip55.verify(account.address) );

//Imprimo la cuenta creada con los llamados anteriores
console.log(account);
*/
/////////////////////////////////////// Termina el Ejemplo /////////////////////////////////////


////////////////////////////////////// Comienza las funciones //////////////////////////////////

// Cada vez que se llama el account se genera con una cuenta aleatoria completando su address, privatekey y publickey
function createNewWallet() {
	//ECDSA
	let keyPair = ec.genKeyPair();
	account.privateKey='0x'+keyPair.getPrivate("hex");
	account.publicKey=keyPair.getPublic().encode("hex").substr(2);

	//keccak256
	account.address='0x'+keccak256('0x'+account.publicKey).toString('hex').substr(24,64);
	account.publicKey='0x'+account.publicKey;
	account.address= eip55.encode(account.address);
}

// Cada vez que se llama el account se genera con la clave privada prk enviada y calculando la publickey y el address
function importWallet(prk) {// prk es la privateKey
	//ECDSA
	let keyPair = ec.keyFromPrivate(prk);//"983e973ece74a9f345ad5a4ceafe4d38070a950d7efac48edf87ef807670c678");
	account.privateKey='0x'+keyPair.getPrivate("hex");// 983e973ece74a9f345ad5a4ceafe4d38070a950d7efac48edf87ef807670c678
	account.publicKey=keyPair.getPublic().encode("hex").substr(2);// A109E7AF3E6376D1C5EECE9568E5C340486578B0DDA09809E455678C2887B1D66DB4FFD36B739D753B48450D5017BFBC8E9BF71DFCB5ED4D86196DE4A579BB3D
	//keccak256 // "737f72154b26dd162de582862c8acb6355f29e0ddb37998bde2a25b6d3257627"
	account.address='0x'+keccak256('0x'+account.publicKey).toString('hex').substr(24,64);// "0x2C8ACB6355F29e0DdB37998BDE2a25B6D3257627"
	account.publicKey='0x'+account.publicKey;
	account.address= eip55.encode(account.address);
}

// Cada vez que se llama el account se genera con una cuenta completando su address, privatekey y publickey
// Siempre que se mande el mismo user y password generaremos la misma cuenta
//nota: para más seguridad podría mandarle otro parametro diciendo cuantas veces se aplica el keccak
function deterministicWallet(password,user) {
	prk='0x'+keccak256(password+user).toString('hex');
	importWallet(prk);
}

/////////////////////////// Termina las funciones ///////////////////////////////////////////////////

///////////////////////// Mejoras //////////////////////////////////////////////////////////////////
// Agregar BIP39 para los mnemonicos
//////////////////////// Termina mejoras //////////////////////////////////////////////////////////


module.exports = { wallet , createNewWallet, importWallet, deterministicWallet, account };


