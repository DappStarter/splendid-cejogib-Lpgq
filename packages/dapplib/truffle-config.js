require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remain hole heavy kite surge shaft'; 
let testAccounts = [
"0xb66e0a6ec7452b01d1f80277290576e4f2af3482308b6cfa40ea0036239f8b0d",
"0x83330f315523cc70485bccfa2d2c7d24124aeb9c5165c707e88ce800b8884dac",
"0xed15b9815927b499e22596fda8faf892f949327c33ea2ac7da42e35c8f691136",
"0xd0e2e56df2de2c653e2532f303a92c22aeb6ee2b0e5eb4e778fc45913bf304d6",
"0x204b7c6c90548e988af6de05af3ec3700d85248107b39cee72634ed88b76e490",
"0xc6a77240489ed8c7e61c1456e1578a1251aa7e52908d6d6160b8dc140e080a47",
"0xdff2ad2e17e4b49feeacb79405e8a257062b40f97e82b0961a86ad9f024edad5",
"0x8be6cebd84162868a2052fa75f931ad2340af0dc60c33c4cc06f63d7c1938e70",
"0x7e61aefe56a547dd6a49d4218c74a8e28402cfd94d76734ad4dda47a22b6056c",
"0xfb3b26545ce9f853d8ce042ffbea557bbb4b1deb8c5404f9410367c8d93accde"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

