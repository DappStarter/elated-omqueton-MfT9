require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift response remind concert grace pet swear gas'; 
let testAccounts = [
"0x8c14bb3d4ed927abb4a882cb4d570f0b89fa3bb7bed1672042bdffb0ad49e18f",
"0xc522a500f50b1806a8cee800b2b7b7c89208ce48e653672655ff74e52abe6a7f",
"0x0152ef42f79bfd9963f0ec8f48d73861b47f921fa3c69ea17c17df3885a32f3b",
"0x4914c9a38df4d0d210ee1becc727f841c81dfbf274ed5772f568762b29769da6",
"0x53c0c6afb053feb8a4232eef69e0f2c7cae05947282f880e8cdd1247132364fe",
"0x63dc25a8b1523d66b368f2047d24988be379cec3c09b3b6acebf82e2a47e1075",
"0xcf73ac0419bee7a84c4acd38eb6d88e207d12c229ed527d736b1954662128f58",
"0x324ff8e617ac9358d1b48eae71f34219cd25dfb69e7cf067e7dc6f9f5a117f6b",
"0x90b99625e66042e975177386fbe6c875a45ac520bff5237ea7ed11c2bc180dfa",
"0x98baa6d8393a571038990091cd3f484b1b3a396f1c0adb2ef930bf85860f337e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


