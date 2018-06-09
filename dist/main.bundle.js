webpackJsonp(["main"],{

/***/ "./build/contracts/Poll.json":
/***/ (function(module, exports) {

module.exports = {"contractName":"Poll","abi":[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"proposals","outputs":[{"name":"name","type":"string"},{"name":"truc","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"voters","outputs":[{"name":"voted","type":"bool"},{"name":"proposalVoted","type":"uint256"},{"name":"voterIndex","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"question","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"votersHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_question","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"voter","type":"bytes32"},{"indexed":false,"name":"proposalName","type":"string"}],"name":"NewVote","type":"event"},{"constant":true,"inputs":[],"name":"proposalsCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votersHashCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numberOfVote","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"proposal","type":"uint256"}],"name":"numberOfVoteForProposal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numberOfVotePerProposal","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"addProposal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"bytes32"},{"name":"proposal","type":"uint256"}],"name":"vote","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x608060405234801561001057600080fd5b50604051610c33380380610c33833981018060405281019080805182019291905050508060009080519060200190610049929190610050565b50506100f5565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061009157805160ff19168380011785556100bf565b828001600101855582156100bf579182015b828111156100be5782518255916020019190600101906100a3565b5b5090506100cc91906100d0565b5090565b6100f291905b808211156100ee5760008160009055506001016100d6565b5090565b90565b610b2f806101046000396000f3006080604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063013cf08b146100b45780630a9f46ad146101655780632fdae3c51461019057806337f91f23146101f95780633fad9ae01461025057806384f2d403146102e057806397f160731461030b5780639ef1204c14610354578063affa6f19146103a7578063b44518aa146103e8578063da83bfdd14610413575b600080fd5b3480156100c057600080fd5b506100df6004803603810190808035906020019092919050505061047f565b604051808060200183151515158152602001828103825284818151815260200191508051906020019080838360005b8381101561012957808201518184015260208101905061010e565b50505050905090810190601f1680156101565780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561017157600080fd5b5061017a610557565b6040518082815260200191505060405180910390f35b34801561019c57600080fd5b506101f7600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610564565b005b34801561020557600080fd5b5061022860048036038101908080356000191690602001909291905050506105ec565b6040518084151515158152602001838152602001828152602001935050505060405180910390f35b34801561025c57600080fd5b50610265610623565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102a557808201518184015260208101905061028a565b50505050905090810190601f1680156102d25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102ec57600080fd5b506102f56106c1565b6040518082815260200191505060405180910390f35b34801561031757600080fd5b50610336600480360381019080803590602001909291905050506106ce565b60405180826000191660001916815260200191505060405180910390f35b34801561036057600080fd5b5061038d6004803603810190808035600019169060200190929190803590602001909291905050506106f1565b604051808215151515815260200191505060405180910390f35b3480156103b357600080fd5b506103d26004803603810190808035906020019092919050505061088a565b6040518082815260200191505060405180910390f35b3480156103f457600080fd5b506103fd61092f565b6040518082815260200191505060405180910390f35b34801561041f57600080fd5b5061042861093e565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561046b578082015181840152602081019050610450565b505050509050019250505060405180910390f35b60038181548110151561048e57fe5b9060005260206000209060020201600091509050806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561053a5780601f1061050f5761010080835404028352916020019161053a565b820191906000526020600020905b81548152906001019060200180831161051d57829003601f168201915b5050505050908060010160009054906101000a900460ff16905082565b6000600380549050905090565b60036040805190810160405280838152602001600115158152509080600181540180825580915050906001820390600052602060002090600202016000909192909190915060008201518160000190805190602001906105c5929190610a5e565b5060208201518160010160006101000a81548160ff02191690831515021790555050505050565b60016020528060005260406000206000915090508060000160009054906101000a900460ff16908060010154908060020154905083565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106b95780601f1061068e576101008083540402835291602001916106b9565b820191906000526020600020905b81548152906001019060200180831161069c57829003601f168201915b505050505081565b6000600280549050905090565b6002818154811015156106dd57fe5b906000526020600020016000915090505481565b6000806001600085600019166000191681526020019081526020016000209050600115158160000160009054906101000a900460ff16151514151561077157600280549050816002018190555060028490806001815401808255809150509060018203906000526020600020016000909192909190915090600019169055505b82816001018190555060018160000160006101000a81548160ff0219169083151502179055507f2e01fc1487154731683e21315c1f62e559e694840e977be0e1f8d8aa9869ff77846003858154811015156107c857fe5b9060005260206000209060020201600001604051808360001916600019168152602001806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156108705780601f1061084557610100808354040283529160200191610870565b820191906000526020600020905b81548152906001019060200180831161085357829003601f168201915b5050935050505060405180910390a1600191505092915050565b6000806000806000809350600092505b600280549050831015610923576002838154811015156108b657fe5b9060005260206000200154915060016000836000191660001916815260200190815260200160002090508581600101541480156109085750600115158160000160009054906101000a900460ff161515145b156109165783806001019450505b828060010193505061089a565b83945050505050919050565b60006109396106c1565b905090565b606080600080600060038054905060405190808252806020026020018201604052801561097a5781602001602082028038833980820191505090505b509350600092505b83518310156109b6576000848481518110151561099b57fe5b90602001906020020181815250508280600101935050610982565b600092505b600280549050831015610a54576002838154811015156109d757fe5b906000526020600020015491506001600083600019166000191681526020019081526020016000209050600115158160000160009054906101000a900460ff1615151415610a4757838160010154815181101515610a3157fe5b9060200190602002018051809190600101815250505b82806001019350506109bb565b8394505050505090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610a9f57805160ff1916838001178555610acd565b82800160010185558215610acd579182015b82811115610acc578251825591602001919060010190610ab1565b5b509050610ada9190610ade565b5090565b610b0091905b80821115610afc576000816000905550600101610ae4565b5090565b905600a165627a7a72305820e533b609347b56ed927814c5bcc4886e41f7a9c435ef1d49b594a1193a5330df0029","deployedBytecode":"0x6080604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063013cf08b146100b45780630a9f46ad146101655780632fdae3c51461019057806337f91f23146101f95780633fad9ae01461025057806384f2d403146102e057806397f160731461030b5780639ef1204c14610354578063affa6f19146103a7578063b44518aa146103e8578063da83bfdd14610413575b600080fd5b3480156100c057600080fd5b506100df6004803603810190808035906020019092919050505061047f565b604051808060200183151515158152602001828103825284818151815260200191508051906020019080838360005b8381101561012957808201518184015260208101905061010e565b50505050905090810190601f1680156101565780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561017157600080fd5b5061017a610557565b6040518082815260200191505060405180910390f35b34801561019c57600080fd5b506101f7600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610564565b005b34801561020557600080fd5b5061022860048036038101908080356000191690602001909291905050506105ec565b6040518084151515158152602001838152602001828152602001935050505060405180910390f35b34801561025c57600080fd5b50610265610623565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102a557808201518184015260208101905061028a565b50505050905090810190601f1680156102d25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102ec57600080fd5b506102f56106c1565b6040518082815260200191505060405180910390f35b34801561031757600080fd5b50610336600480360381019080803590602001909291905050506106ce565b60405180826000191660001916815260200191505060405180910390f35b34801561036057600080fd5b5061038d6004803603810190808035600019169060200190929190803590602001909291905050506106f1565b604051808215151515815260200191505060405180910390f35b3480156103b357600080fd5b506103d26004803603810190808035906020019092919050505061088a565b6040518082815260200191505060405180910390f35b3480156103f457600080fd5b506103fd61092f565b6040518082815260200191505060405180910390f35b34801561041f57600080fd5b5061042861093e565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561046b578082015181840152602081019050610450565b505050509050019250505060405180910390f35b60038181548110151561048e57fe5b9060005260206000209060020201600091509050806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561053a5780601f1061050f5761010080835404028352916020019161053a565b820191906000526020600020905b81548152906001019060200180831161051d57829003601f168201915b5050505050908060010160009054906101000a900460ff16905082565b6000600380549050905090565b60036040805190810160405280838152602001600115158152509080600181540180825580915050906001820390600052602060002090600202016000909192909190915060008201518160000190805190602001906105c5929190610a5e565b5060208201518160010160006101000a81548160ff02191690831515021790555050505050565b60016020528060005260406000206000915090508060000160009054906101000a900460ff16908060010154908060020154905083565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106b95780601f1061068e576101008083540402835291602001916106b9565b820191906000526020600020905b81548152906001019060200180831161069c57829003601f168201915b505050505081565b6000600280549050905090565b6002818154811015156106dd57fe5b906000526020600020016000915090505481565b6000806001600085600019166000191681526020019081526020016000209050600115158160000160009054906101000a900460ff16151514151561077157600280549050816002018190555060028490806001815401808255809150509060018203906000526020600020016000909192909190915090600019169055505b82816001018190555060018160000160006101000a81548160ff0219169083151502179055507f2e01fc1487154731683e21315c1f62e559e694840e977be0e1f8d8aa9869ff77846003858154811015156107c857fe5b9060005260206000209060020201600001604051808360001916600019168152602001806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156108705780601f1061084557610100808354040283529160200191610870565b820191906000526020600020905b81548152906001019060200180831161085357829003601f168201915b5050935050505060405180910390a1600191505092915050565b6000806000806000809350600092505b600280549050831015610923576002838154811015156108b657fe5b9060005260206000200154915060016000836000191660001916815260200190815260200160002090508581600101541480156109085750600115158160000160009054906101000a900460ff161515145b156109165783806001019450505b828060010193505061089a565b83945050505050919050565b60006109396106c1565b905090565b606080600080600060038054905060405190808252806020026020018201604052801561097a5781602001602082028038833980820191505090505b509350600092505b83518310156109b6576000848481518110151561099b57fe5b90602001906020020181815250508280600101935050610982565b600092505b600280549050831015610a54576002838154811015156109d757fe5b906000526020600020015491506001600083600019166000191681526020019081526020016000209050600115158160000160009054906101000a900460ff1615151415610a4757838160010154815181101515610a3157fe5b9060200190602002018051809190600101815250505b82806001019350506109bb565b8394505050505090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610a9f57805160ff1916838001178555610acd565b82800160010185558215610acd579182015b82811115610acc578251825591602001919060010190610ab1565b5b509050610ada9190610ade565b5090565b610b0091905b80821115610afc576000816000905550600101610ae4565b5090565b905600a165627a7a72305820e533b609347b56ed927814c5bcc4886e41f7a9c435ef1d49b594a1193a5330df0029","sourceMap":"25:3001:1:-;;;948:67;8:9:-1;5:2;;;30:1;27;20:12;5:2;948:67:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;999:9;988:8;:20;;;;;;;;;;;;:::i;:::-;;948:67;25:3001;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;","deployedSourceMap":"25:3001:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;703:27;;8:9:-1;5:2;;;30:1;27;20:12;5:2;703:27:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;703:27:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1086:97;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1086:97:1;;;;;;;;;;;;;;;;;;;;;;;2456:135;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2456:135:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;625:39;;8:9:-1;5:2;;;30:1;27;20:12;5:2;625:39:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;597:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;597:22:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;597:22:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1189:99;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1189:99:1;;;;;;;;;;;;;;;;;;;;;;;670:27;;8:9:-1;5:2;;;30:1;27;20:12;5:2;670:27:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2597:426;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2597:426:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1396:403;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1396:403:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1294:96;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1294:96:1;;;;;;;;;;;;;;;;;;;;;;;1805:580;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1805:580:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1805:580:1;;;;;;;;;;;;;;;;;703:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1086:97::-;1137:4;1160:9;:16;;;;1153:23;;1086:97;:::o;2456:135::-;2500:9;2515:68;;;;;;;;;2544:4;2515:68;;;;2568:4;2515:68;;;;;2500:84;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2500:84:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2456:135;:::o;625:39::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;597:22::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1189:99::-;1241:4;1264:10;:17;;;;1257:24;;1189:99;:::o;670:27::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2597:426::-;2657:4;2673:12;2688:6;:13;2695:5;2688:13;;;;;;;;;;;;;;;;;2673:28;;2758:4;2742:20;;:6;:12;;;;;;;;;;;;:20;;;;2738:120;;;2796:10;:17;;;;2776:6;:17;;:37;;;;2825:10;2841:5;2825:22;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2825:22:1;;;;;;;;;;;;;;;;;;;;;;;;;;;2738:120;2906:8;2883:6;:20;;:31;;;;2939:4;2924:6;:12;;;:19;;;;;;;;;;;;;;;;;;2954:40;2962:5;2969:9;2979:8;2969:19;;;;;;;;;;;;;;;;;;;;:24;;2954:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3012:4;3005:11;;2597:426;;;;;:::o;1396:403::-;1469:4;1485:14;1518:6;1572:13;1615:10;1502:1;1485:18;;1527:1;1518:10;;1513:254;1534:10;:17;;;;1530:1;:21;1513:254;;;1588:10;1599:1;1588:13;;;;;;;;;;;;;;;;;;1572:29;;1628:6;:13;1635:5;1628:13;;;;;;;;;;;;;;;;;1615:26;;1681:8;1659:4;:18;;;:30;:52;;;;;1707:4;1693:18;;:4;:10;;;;;;;;;;;;:18;;;1659:52;1655:102;;;1731:11;;;;;;;1655:102;1553:3;;;;;;;1513:254;;;1783:9;1776:16;;1396:403;;;;;;;:::o;1294:96::-;1343:4;1366:17;:15;:17::i;:::-;1359:24;;1294:96;:::o;1805:580::-;1865:6;1915:29;1990:6;2160:13;2203:10;1958:9;:16;;;;1947:28;;;;;;;;;;;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;148:4;140:6;136:17;126:27;;0:157;1947:28:1;;;;1915:60;;1999:1;1990:10;;1985:95;2006:15;:22;2002:1;:26;1985:95;;;2068:1;2047:15;2063:1;2047:18;;;;;;;;;;;;;;;;;:22;;;;;2030:3;;;;;;;1985:95;;;2115:1;2111:5;;2106:241;2122:10;:17;;;;2118:1;:21;2106:241;;;2176:10;2187:1;2176:13;;;;;;;;;;;;;;;;;;2160:29;;2216:6;:13;2223:5;2216:13;;;;;;;;;;;;;;;;;2203:26;;2261:4;2247:18;;:4;:10;;;;;;;;;;;;:18;;;2243:94;;;2285:15;2301:4;:18;;;2285:35;;;;;;;;;;;;;;;;;:37;;;;;;;;;;;2243:94;2141:3;;;;;;;2106:241;;;2363:15;2356:22;;1805:580;;;;;:::o;25:3001::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o","source":"pragma solidity ^0.4.4;\n\ncontract Poll {\n\n    //*****************\n    // Structure\n    //*****************\n\n    struct Voter {\n        bool voted;  // if true, that person already voted\n        uint proposalVoted;   // index of the voted proposal\n        uint voterIndex;   // index of the voter array\n    }\n\n    // This is a type for a single proposal.\n    struct Proposal {\n        string name;   // proposal name\n        bool truc;      //if only one variable, the struct is replace by the first argument type\n    }\n\n\n    //*****************\n    // State variables\n    //*****************\n\n    string public question;\n    mapping(bytes32 => Voter) public voters;\n    bytes32[] public votersHash;\n    Proposal[] public proposals;\n\n\n    //*****************\n    // Events\n    //*****************\n\n    event NewVote(\n        bytes32 voter,\n        string proposalName\n    );\n\n\n    //*****************\n    // Constructor\n    //*****************\n\n    constructor(string _question) {\n        question = _question;\n    }\n\n\n    //*****************\n    // Getters\n    //*****************\n\n    function proposalsCount() public constant returns (uint) {\n        return proposals.length;\n    }\n\n    function votersHashCount() public constant returns (uint) {\n        return votersHash.length;\n    }\n\n    function numberOfVote() public constant returns (uint) {\n        return votersHashCount();\n    }\n\n    function numberOfVoteForProposal(uint proposal) public constant returns (uint) {\n        uint voteCount = 0;\n        for (uint i = 0; i < votersHash.length; i++) {\n            bytes32 voter = votersHash[i];\n            Voter vote = voters[voter];\n            if (vote.proposalVoted == proposal && vote.voted == true) {\n                voteCount++;\n            }\n        }\n        return voteCount;\n    }\n\n    function numberOfVotePerProposal() public constant returns (uint[]) {\n        //init return structure\n        uint[] memory votePerProposal = new uint[](proposals.length);\n        for (uint i = 0; i < votePerProposal.length; i++) {\n          votePerProposal[i] = 0;\n        }\n\n        //count\n        for (i = 0; i < votersHash.length; i++) {\n            bytes32 voter = votersHash[i];\n            Voter vote = voters[voter];\n            if (vote.voted == true) {\n                votePerProposal[vote.proposalVoted]++;\n            }\n        }\n        return votePerProposal;\n    }\n\n\n    //*****************\n    // Actions\n    //*****************\n\n    function addProposal(string name) {\n        proposals.push(Proposal({\n            name: name,\n            truc: true\n        }));\n    }\n\n    function vote(bytes32 voter, uint proposal) public returns (bool) {\n        Voter sender = voters[voter];\n\n        //remove old vote\n        if (sender.voted != true) {\n          sender.voterIndex = votersHash.length;\n          votersHash.push(voter);\n        }\n\n        //vote\n        sender.proposalVoted = proposal;\n        sender.voted = true;\n\n        NewVote(voter, proposals[proposal].name);\n\n        return true;\n    }\n\n}","sourcePath":"/home/oz/Documents/Projects/Ethereum/voting/prod/contracts/Poll.sol","ast":{"absolutePath":"/home/oz/Documents/Projects/Ethereum/voting/prod/contracts/Poll.sol","exportedSymbols":{"Poll":[327]},"id":328,"nodeType":"SourceUnit","nodes":[{"id":58,"literals":["solidity","^","0.4",".4"],"nodeType":"PragmaDirective","src":"0:23:1"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":327,"linearizedBaseContracts":[327],"name":"Poll","nodeType":"ContractDefinition","nodes":[{"canonicalName":"Poll.Voter","id":65,"members":[{"constant":false,"id":60,"name":"voted","nodeType":"VariableDeclaration","scope":65,"src":"135:10:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":59,"name":"bool","nodeType":"ElementaryTypeName","src":"135:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"},{"constant":false,"id":62,"name":"proposalVoted","nodeType":"VariableDeclaration","scope":65,"src":"194:18:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":61,"name":"uint","nodeType":"ElementaryTypeName","src":"194:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":64,"name":"voterIndex","nodeType":"VariableDeclaration","scope":65,"src":"255:15:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":63,"name":"uint","nodeType":"ElementaryTypeName","src":"255:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"name":"Voter","nodeType":"StructDefinition","scope":327,"src":"112:195:1","visibility":"public"},{"canonicalName":"Poll.Proposal","id":70,"members":[{"constant":false,"id":67,"name":"name","nodeType":"VariableDeclaration","scope":70,"src":"384:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":66,"name":"string","nodeType":"ElementaryTypeName","src":"384:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":69,"name":"truc","nodeType":"VariableDeclaration","scope":70,"src":"424:9:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":68,"name":"bool","nodeType":"ElementaryTypeName","src":"424:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"name":"Proposal","nodeType":"StructDefinition","scope":327,"src":"358:160:1","visibility":"public"},{"constant":false,"id":72,"name":"question","nodeType":"VariableDeclaration","scope":327,"src":"597:22:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":71,"name":"string","nodeType":"ElementaryTypeName","src":"597:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"public"},{"constant":false,"id":76,"name":"voters","nodeType":"VariableDeclaration","scope":327,"src":"625:39:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_bytes32_$_t_struct$_Voter_$65_storage_$","typeString":"mapping(bytes32 => struct Poll.Voter)"},"typeName":{"id":75,"keyType":{"id":73,"name":"bytes32","nodeType":"ElementaryTypeName","src":"633:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"nodeType":"Mapping","src":"625:25:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_bytes32_$_t_struct$_Voter_$65_storage_$","typeString":"mapping(bytes32 => struct Poll.Voter)"},"valueType":{"contractScope":null,"id":74,"name":"Voter","nodeType":"UserDefinedTypeName","referencedDeclaration":65,"src":"644:5:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter"}}},"value":null,"visibility":"public"},{"constant":false,"id":79,"name":"votersHash","nodeType":"VariableDeclaration","scope":327,"src":"670:27:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes32_$dyn_storage","typeString":"bytes32[]"},"typeName":{"baseType":{"id":77,"name":"bytes32","nodeType":"ElementaryTypeName","src":"670:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"id":78,"length":null,"nodeType":"ArrayTypeName","src":"670:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes32_$dyn_storage_ptr","typeString":"bytes32[]"}},"value":null,"visibility":"public"},{"constant":false,"id":82,"name":"proposals","nodeType":"VariableDeclaration","scope":327,"src":"703:27:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Proposal_$70_storage_$dyn_storage","typeString":"struct Poll.Proposal[]"},"typeName":{"baseType":{"contractScope":null,"id":80,"name":"Proposal","nodeType":"UserDefinedTypeName","referencedDeclaration":70,"src":"703:8:1","typeDescriptions":{"typeIdentifier":"t_struct$_Proposal_$70_storage_ptr","typeString":"struct Poll.Proposal"}},"id":81,"length":null,"nodeType":"ArrayTypeName","src":"703:10:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Proposal_$70_storage_$dyn_storage_ptr","typeString":"struct Poll.Proposal[]"}},"value":null,"visibility":"public"},{"anonymous":false,"documentation":null,"id":88,"name":"NewVote","nodeType":"EventDefinition","parameters":{"id":87,"nodeType":"ParameterList","parameters":[{"constant":false,"id":84,"indexed":false,"name":"voter","nodeType":"VariableDeclaration","scope":88,"src":"824:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":83,"name":"bytes32","nodeType":"ElementaryTypeName","src":"824:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":86,"indexed":false,"name":"proposalName","nodeType":"VariableDeclaration","scope":88,"src":"847:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":85,"name":"string","nodeType":"ElementaryTypeName","src":"847:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"814:58:1"},"src":"801:72:1"},{"body":{"id":97,"nodeType":"Block","src":"978:37:1","statements":[{"expression":{"argumentTypes":null,"id":95,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":93,"name":"question","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":72,"src":"988:8:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":94,"name":"_question","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":90,"src":"999:9:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"988:20:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":96,"nodeType":"ExpressionStatement","src":"988:20:1"}]},"documentation":null,"id":98,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":91,"nodeType":"ParameterList","parameters":[{"constant":false,"id":90,"name":"_question","nodeType":"VariableDeclaration","scope":98,"src":"960:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":89,"name":"string","nodeType":"ElementaryTypeName","src":"960:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"959:18:1"},"payable":false,"returnParameters":{"id":92,"nodeType":"ParameterList","parameters":[],"src":"978:0:1"},"scope":327,"src":"948:67:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":106,"nodeType":"Block","src":"1143:40:1","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":103,"name":"proposals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":82,"src":"1160:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Proposal_$70_storage_$dyn_storage","typeString":"struct Poll.Proposal storage ref[] storage ref"}},"id":104,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1160:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":102,"id":105,"nodeType":"Return","src":"1153:23:1"}]},"documentation":null,"id":107,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"proposalsCount","nodeType":"FunctionDefinition","parameters":{"id":99,"nodeType":"ParameterList","parameters":[],"src":"1109:2:1"},"payable":false,"returnParameters":{"id":102,"nodeType":"ParameterList","parameters":[{"constant":false,"id":101,"name":"","nodeType":"VariableDeclaration","scope":107,"src":"1137:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":100,"name":"uint","nodeType":"ElementaryTypeName","src":"1137:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1136:6:1"},"scope":327,"src":"1086:97:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":115,"nodeType":"Block","src":"1247:41:1","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":112,"name":"votersHash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":79,"src":"1264:10:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes32_$dyn_storage","typeString":"bytes32[] storage ref"}},"id":113,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1264:17:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":111,"id":114,"nodeType":"Return","src":"1257:24:1"}]},"documentation":null,"id":116,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"votersHashCount","nodeType":"FunctionDefinition","parameters":{"id":108,"nodeType":"ParameterList","parameters":[],"src":"1213:2:1"},"payable":false,"returnParameters":{"id":111,"nodeType":"ParameterList","parameters":[{"constant":false,"id":110,"name":"","nodeType":"VariableDeclaration","scope":116,"src":"1241:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":109,"name":"uint","nodeType":"ElementaryTypeName","src":"1241:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1240:6:1"},"scope":327,"src":"1189:99:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":124,"nodeType":"Block","src":"1349:41:1","statements":[{"expression":{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"id":121,"name":"votersHashCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":116,"src":"1366:15:1","typeDescriptions":{"typeIdentifier":"t_function_internal_view$__$returns$_t_uint256_$","typeString":"function () view returns (uint256)"}},"id":122,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1366:17:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":120,"id":123,"nodeType":"Return","src":"1359:24:1"}]},"documentation":null,"id":125,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"numberOfVote","nodeType":"FunctionDefinition","parameters":{"id":117,"nodeType":"ParameterList","parameters":[],"src":"1315:2:1"},"payable":false,"returnParameters":{"id":120,"nodeType":"ParameterList","parameters":[{"constant":false,"id":119,"name":"","nodeType":"VariableDeclaration","scope":125,"src":"1343:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":118,"name":"uint","nodeType":"ElementaryTypeName","src":"1343:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1342:6:1"},"scope":327,"src":"1294:96:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":177,"nodeType":"Block","src":"1475:324:1","statements":[{"assignments":[133],"declarations":[{"constant":false,"id":133,"name":"voteCount","nodeType":"VariableDeclaration","scope":178,"src":"1485:14:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":132,"name":"uint","nodeType":"ElementaryTypeName","src":"1485:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":135,"initialValue":{"argumentTypes":null,"hexValue":"30","id":134,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1502:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"nodeType":"VariableDeclarationStatement","src":"1485:18:1"},{"body":{"id":173,"nodeType":"Block","src":"1558:209:1","statements":[{"assignments":[148],"declarations":[{"constant":false,"id":148,"name":"voter","nodeType":"VariableDeclaration","scope":178,"src":"1572:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":147,"name":"bytes32","nodeType":"ElementaryTypeName","src":"1572:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"}],"id":152,"initialValue":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":149,"name":"votersHash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":79,"src":"1588:10:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes32_$dyn_storage","typeString":"bytes32[] storage ref"}},"id":151,"indexExpression":{"argumentTypes":null,"id":150,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":137,"src":"1599:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1588:13:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"nodeType":"VariableDeclarationStatement","src":"1572:29:1"},{"assignments":[154],"declarations":[{"constant":false,"id":154,"name":"vote","nodeType":"VariableDeclaration","scope":178,"src":"1615:10:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter"},"typeName":{"contractScope":null,"id":153,"name":"Voter","nodeType":"UserDefinedTypeName","referencedDeclaration":65,"src":"1615:5:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter"}},"value":null,"visibility":"internal"}],"id":158,"initialValue":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":155,"name":"voters","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":76,"src":"1628:6:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_bytes32_$_t_struct$_Voter_$65_storage_$","typeString":"mapping(bytes32 => struct Poll.Voter storage ref)"}},"id":157,"indexExpression":{"argumentTypes":null,"id":156,"name":"voter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":148,"src":"1635:5:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1628:13:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage","typeString":"struct Poll.Voter storage ref"}},"nodeType":"VariableDeclarationStatement","src":"1615:26:1"},{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_bool","typeString":"bool"},"id":167,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":162,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":159,"name":"vote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":154,"src":"1659:4:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter storage pointer"}},"id":160,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"proposalVoted","nodeType":"MemberAccess","referencedDeclaration":62,"src":"1659:18:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"id":161,"name":"proposal","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":127,"src":"1681:8:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1659:30:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"BinaryOperation","operator":"&&","rightExpression":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_bool","typeString":"bool"},"id":166,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":163,"name":"vote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":154,"src":"1693:4:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter storage pointer"}},"id":164,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"voted","nodeType":"MemberAccess","referencedDeclaration":60,"src":"1693:10:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"74727565","id":165,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"1707:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"1693:18:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"src":"1659:52:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":172,"nodeType":"IfStatement","src":"1655:102:1","trueBody":{"id":171,"nodeType":"Block","src":"1713:44:1","statements":[{"expression":{"argumentTypes":null,"id":169,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"1731:11:1","subExpression":{"argumentTypes":null,"id":168,"name":"voteCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":133,"src":"1731:9:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":170,"nodeType":"ExpressionStatement","src":"1731:11:1"}]}}]},"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":143,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":140,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":137,"src":"1530:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<","rightExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":141,"name":"votersHash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":79,"src":"1534:10:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes32_$dyn_storage","typeString":"bytes32[] storage ref"}},"id":142,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1534:17:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1530:21:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":174,"initializationExpression":{"assignments":[137],"declarations":[{"constant":false,"id":137,"name":"i","nodeType":"VariableDeclaration","scope":178,"src":"1518:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":136,"name":"uint","nodeType":"ElementaryTypeName","src":"1518:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":139,"initialValue":{"argumentTypes":null,"hexValue":"30","id":138,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1527:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"nodeType":"VariableDeclarationStatement","src":"1518:10:1"},"loopExpression":{"expression":{"argumentTypes":null,"id":145,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"1553:3:1","subExpression":{"argumentTypes":null,"id":144,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":137,"src":"1553:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":146,"nodeType":"ExpressionStatement","src":"1553:3:1"},"nodeType":"ForStatement","src":"1513:254:1"},{"expression":{"argumentTypes":null,"id":175,"name":"voteCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":133,"src":"1783:9:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":131,"id":176,"nodeType":"Return","src":"1776:16:1"}]},"documentation":null,"id":178,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"numberOfVoteForProposal","nodeType":"FunctionDefinition","parameters":{"id":128,"nodeType":"ParameterList","parameters":[{"constant":false,"id":127,"name":"proposal","nodeType":"VariableDeclaration","scope":178,"src":"1429:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":126,"name":"uint","nodeType":"ElementaryTypeName","src":"1429:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1428:15:1"},"payable":false,"returnParameters":{"id":131,"nodeType":"ParameterList","parameters":[{"constant":false,"id":130,"name":"","nodeType":"VariableDeclaration","scope":178,"src":"1469:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":129,"name":"uint","nodeType":"ElementaryTypeName","src":"1469:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1468:6:1"},"scope":327,"src":"1396:403:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":253,"nodeType":"Block","src":"1873:512:1","statements":[{"assignments":[187],"declarations":[{"constant":false,"id":187,"name":"votePerProposal","nodeType":"VariableDeclaration","scope":254,"src":"1915:29:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[]"},"typeName":{"baseType":{"id":185,"name":"uint","nodeType":"ElementaryTypeName","src":"1915:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":186,"length":null,"nodeType":"ArrayTypeName","src":"1915:6:1","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"}],"id":194,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":191,"name":"proposals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":82,"src":"1958:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Proposal_$70_storage_$dyn_storage","typeString":"struct Poll.Proposal storage ref[] storage ref"}},"id":192,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1958:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":190,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"NewExpression","src":"1947:10:1","typeDescriptions":{"typeIdentifier":"t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_$","typeString":"function (uint256) pure returns (uint256[] memory)"},"typeName":{"baseType":{"id":188,"name":"uint","nodeType":"ElementaryTypeName","src":"1951:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":189,"length":null,"nodeType":"ArrayTypeName","src":"1951:6:1","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}}},"id":193,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1947:28:1","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory","typeString":"uint256[] memory"}},"nodeType":"VariableDeclarationStatement","src":"1915:60:1"},{"body":{"id":212,"nodeType":"Block","src":"2035:45:1","statements":[{"expression":{"argumentTypes":null,"id":210,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":206,"name":"votePerProposal","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"2047:15:1","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[] memory"}},"id":208,"indexExpression":{"argumentTypes":null,"id":207,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":196,"src":"2063:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"2047:18:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"30","id":209,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"2068:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"2047:22:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":211,"nodeType":"ExpressionStatement","src":"2047:22:1"}]},"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":202,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":199,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":196,"src":"2002:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<","rightExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":200,"name":"votePerProposal","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"2006:15:1","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[] memory"}},"id":201,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2006:22:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2002:26:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":213,"initializationExpression":{"assignments":[196],"declarations":[{"constant":false,"id":196,"name":"i","nodeType":"VariableDeclaration","scope":254,"src":"1990:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":195,"name":"uint","nodeType":"ElementaryTypeName","src":"1990:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":198,"initialValue":{"argumentTypes":null,"hexValue":"30","id":197,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1999:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"nodeType":"VariableDeclarationStatement","src":"1990:10:1"},"loopExpression":{"expression":{"argumentTypes":null,"id":204,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"2030:3:1","subExpression":{"argumentTypes":null,"id":203,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":196,"src":"2030:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":205,"nodeType":"ExpressionStatement","src":"2030:3:1"},"nodeType":"ForStatement","src":"1985:95:1"},{"body":{"id":249,"nodeType":"Block","src":"2146:201:1","statements":[{"assignments":[226],"declarations":[{"constant":false,"id":226,"name":"voter","nodeType":"VariableDeclaration","scope":254,"src":"2160:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":225,"name":"bytes32","nodeType":"ElementaryTypeName","src":"2160:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"}],"id":230,"initialValue":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":227,"name":"votersHash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":79,"src":"2176:10:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes32_$dyn_storage","typeString":"bytes32[] storage ref"}},"id":229,"indexExpression":{"argumentTypes":null,"id":228,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":196,"src":"2187:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2176:13:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"nodeType":"VariableDeclarationStatement","src":"2160:29:1"},{"assignments":[232],"declarations":[{"constant":false,"id":232,"name":"vote","nodeType":"VariableDeclaration","scope":254,"src":"2203:10:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter"},"typeName":{"contractScope":null,"id":231,"name":"Voter","nodeType":"UserDefinedTypeName","referencedDeclaration":65,"src":"2203:5:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter"}},"value":null,"visibility":"internal"}],"id":236,"initialValue":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":233,"name":"voters","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":76,"src":"2216:6:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_bytes32_$_t_struct$_Voter_$65_storage_$","typeString":"mapping(bytes32 => struct Poll.Voter storage ref)"}},"id":235,"indexExpression":{"argumentTypes":null,"id":234,"name":"voter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":226,"src":"2223:5:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2216:13:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage","typeString":"struct Poll.Voter storage ref"}},"nodeType":"VariableDeclarationStatement","src":"2203:26:1"},{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_bool","typeString":"bool"},"id":240,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":237,"name":"vote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":232,"src":"2247:4:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter storage pointer"}},"id":238,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"voted","nodeType":"MemberAccess","referencedDeclaration":60,"src":"2247:10:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"74727565","id":239,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2261:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"2247:18:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":248,"nodeType":"IfStatement","src":"2243:94:1","trueBody":{"id":247,"nodeType":"Block","src":"2267:70:1","statements":[{"expression":{"argumentTypes":null,"id":245,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"2285:37:1","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":241,"name":"votePerProposal","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"2285:15:1","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[] memory"}},"id":244,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":242,"name":"vote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":232,"src":"2301:4:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter storage pointer"}},"id":243,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"proposalVoted","nodeType":"MemberAccess","referencedDeclaration":62,"src":"2301:18:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"2285:35:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":246,"nodeType":"ExpressionStatement","src":"2285:37:1"}]}}]},"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":221,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":218,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":196,"src":"2118:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<","rightExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":219,"name":"votersHash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":79,"src":"2122:10:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes32_$dyn_storage","typeString":"bytes32[] storage ref"}},"id":220,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2122:17:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2118:21:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":250,"initializationExpression":{"expression":{"argumentTypes":null,"id":216,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":214,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":196,"src":"2111:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"30","id":215,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"2115:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"2111:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":217,"nodeType":"ExpressionStatement","src":"2111:5:1"},"loopExpression":{"expression":{"argumentTypes":null,"id":223,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"2141:3:1","subExpression":{"argumentTypes":null,"id":222,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":196,"src":"2141:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":224,"nodeType":"ExpressionStatement","src":"2141:3:1"},"nodeType":"ForStatement","src":"2106:241:1"},{"expression":{"argumentTypes":null,"id":251,"name":"votePerProposal","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"2363:15:1","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[] memory"}},"functionReturnParameters":183,"id":252,"nodeType":"Return","src":"2356:22:1"}]},"documentation":null,"id":254,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"numberOfVotePerProposal","nodeType":"FunctionDefinition","parameters":{"id":179,"nodeType":"ParameterList","parameters":[],"src":"1837:2:1"},"payable":false,"returnParameters":{"id":183,"nodeType":"ParameterList","parameters":[{"constant":false,"id":182,"name":"","nodeType":"VariableDeclaration","scope":254,"src":"1865:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[]"},"typeName":{"baseType":{"id":180,"name":"uint","nodeType":"ElementaryTypeName","src":"1865:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":181,"length":null,"nodeType":"ArrayTypeName","src":"1865:6:1","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"}],"src":"1864:8:1"},"scope":327,"src":"1805:580:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":268,"nodeType":"Block","src":"2490:101:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":263,"name":"name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":256,"src":"2544:4:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"hexValue":"74727565","id":264,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2568:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"}],"expression":{"argumentTypes":null,"id":262,"name":"Proposal","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":70,"src":"2515:8:1","typeDescriptions":{"typeIdentifier":"t_type$_t_struct$_Proposal_$70_storage_ptr_$","typeString":"type(struct Poll.Proposal storage pointer)"}},"id":265,"isConstant":false,"isLValue":false,"isPure":false,"kind":"structConstructorCall","lValueRequested":false,"names":["name","truc"],"nodeType":"FunctionCall","src":"2515:68:1","typeDescriptions":{"typeIdentifier":"t_struct$_Proposal_$70_memory","typeString":"struct Poll.Proposal memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_struct$_Proposal_$70_memory","typeString":"struct Poll.Proposal memory"}],"expression":{"argumentTypes":null,"id":259,"name":"proposals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":82,"src":"2500:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Proposal_$70_storage_$dyn_storage","typeString":"struct Poll.Proposal storage ref[] storage ref"}},"id":261,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2500:14:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_struct$_Proposal_$70_storage_$returns$_t_uint256_$","typeString":"function (struct Poll.Proposal storage ref) returns (uint256)"}},"id":266,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2500:84:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":267,"nodeType":"ExpressionStatement","src":"2500:84:1"}]},"documentation":null,"id":269,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"addProposal","nodeType":"FunctionDefinition","parameters":{"id":257,"nodeType":"ParameterList","parameters":[{"constant":false,"id":256,"name":"name","nodeType":"VariableDeclaration","scope":269,"src":"2477:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":255,"name":"string","nodeType":"ElementaryTypeName","src":"2477:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"2476:13:1"},"payable":false,"returnParameters":{"id":258,"nodeType":"ParameterList","parameters":[],"src":"2490:0:1"},"scope":327,"src":"2456:135:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":325,"nodeType":"Block","src":"2663:360:1","statements":[{"assignments":[279],"declarations":[{"constant":false,"id":279,"name":"sender","nodeType":"VariableDeclaration","scope":326,"src":"2673:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter"},"typeName":{"contractScope":null,"id":278,"name":"Voter","nodeType":"UserDefinedTypeName","referencedDeclaration":65,"src":"2673:5:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter"}},"value":null,"visibility":"internal"}],"id":283,"initialValue":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":280,"name":"voters","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":76,"src":"2688:6:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_bytes32_$_t_struct$_Voter_$65_storage_$","typeString":"mapping(bytes32 => struct Poll.Voter storage ref)"}},"id":282,"indexExpression":{"argumentTypes":null,"id":281,"name":"voter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":271,"src":"2695:5:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2688:13:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage","typeString":"struct Poll.Voter storage ref"}},"nodeType":"VariableDeclarationStatement","src":"2673:28:1"},{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_bool","typeString":"bool"},"id":287,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":284,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":279,"src":"2742:6:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter storage pointer"}},"id":285,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"voted","nodeType":"MemberAccess","referencedDeclaration":60,"src":"2742:12:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"hexValue":"74727565","id":286,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2758:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"2742:20:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":302,"nodeType":"IfStatement","src":"2738:120:1","trueBody":{"id":301,"nodeType":"Block","src":"2764:94:1","statements":[{"expression":{"argumentTypes":null,"id":293,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":288,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":279,"src":"2776:6:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter storage pointer"}},"id":290,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"voterIndex","nodeType":"MemberAccess","referencedDeclaration":64,"src":"2776:17:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":291,"name":"votersHash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":79,"src":"2796:10:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes32_$dyn_storage","typeString":"bytes32[] storage ref"}},"id":292,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2796:17:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2776:37:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":294,"nodeType":"ExpressionStatement","src":"2776:37:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":298,"name":"voter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":271,"src":"2841:5:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes32","typeString":"bytes32"}],"expression":{"argumentTypes":null,"id":295,"name":"votersHash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":79,"src":"2825:10:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes32_$dyn_storage","typeString":"bytes32[] storage ref"}},"id":297,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2825:15:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$","typeString":"function (bytes32) returns (uint256)"}},"id":299,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2825:22:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":300,"nodeType":"ExpressionStatement","src":"2825:22:1"}]}},{"expression":{"argumentTypes":null,"id":307,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":303,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":279,"src":"2883:6:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter storage pointer"}},"id":305,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"proposalVoted","nodeType":"MemberAccess","referencedDeclaration":62,"src":"2883:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":306,"name":"proposal","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":273,"src":"2906:8:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2883:31:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":308,"nodeType":"ExpressionStatement","src":"2883:31:1"},{"expression":{"argumentTypes":null,"id":313,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":309,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":279,"src":"2924:6:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter storage pointer"}},"id":311,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"voted","nodeType":"MemberAccess","referencedDeclaration":60,"src":"2924:12:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":312,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2939:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"2924:19:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":314,"nodeType":"ExpressionStatement","src":"2924:19:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":316,"name":"voter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":271,"src":"2962:5:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":317,"name":"proposals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":82,"src":"2969:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Proposal_$70_storage_$dyn_storage","typeString":"struct Poll.Proposal storage ref[] storage ref"}},"id":319,"indexExpression":{"argumentTypes":null,"id":318,"name":"proposal","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":273,"src":"2979:8:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2969:19:1","typeDescriptions":{"typeIdentifier":"t_struct$_Proposal_$70_storage","typeString":"struct Poll.Proposal storage ref"}},"id":320,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"name","nodeType":"MemberAccess","referencedDeclaration":67,"src":"2969:24:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes32","typeString":"bytes32"},{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}],"id":315,"name":"NewVote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":88,"src":"2954:7:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_bytes32_$_t_string_memory_ptr_$returns$__$","typeString":"function (bytes32,string memory)"}},"id":321,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2954:40:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":322,"nodeType":"ExpressionStatement","src":"2954:40:1"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":323,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"3012:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":277,"id":324,"nodeType":"Return","src":"3005:11:1"}]},"documentation":null,"id":326,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"vote","nodeType":"FunctionDefinition","parameters":{"id":274,"nodeType":"ParameterList","parameters":[{"constant":false,"id":271,"name":"voter","nodeType":"VariableDeclaration","scope":326,"src":"2611:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":270,"name":"bytes32","nodeType":"ElementaryTypeName","src":"2611:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":273,"name":"proposal","nodeType":"VariableDeclaration","scope":326,"src":"2626:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":272,"name":"uint","nodeType":"ElementaryTypeName","src":"2626:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2610:30:1"},"payable":false,"returnParameters":{"id":277,"nodeType":"ParameterList","parameters":[{"constant":false,"id":276,"name":"","nodeType":"VariableDeclaration","scope":326,"src":"2657:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":275,"name":"bool","nodeType":"ElementaryTypeName","src":"2657:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"2656:6:1"},"scope":327,"src":"2597:426:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":328,"src":"25:3001:1"}],"src":"0:3026:1"},"legacyAST":{"absolutePath":"/home/oz/Documents/Projects/Ethereum/voting/prod/contracts/Poll.sol","exportedSymbols":{"Poll":[327]},"id":328,"nodeType":"SourceUnit","nodes":[{"id":58,"literals":["solidity","^","0.4",".4"],"nodeType":"PragmaDirective","src":"0:23:1"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":327,"linearizedBaseContracts":[327],"name":"Poll","nodeType":"ContractDefinition","nodes":[{"canonicalName":"Poll.Voter","id":65,"members":[{"constant":false,"id":60,"name":"voted","nodeType":"VariableDeclaration","scope":65,"src":"135:10:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":59,"name":"bool","nodeType":"ElementaryTypeName","src":"135:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"},{"constant":false,"id":62,"name":"proposalVoted","nodeType":"VariableDeclaration","scope":65,"src":"194:18:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":61,"name":"uint","nodeType":"ElementaryTypeName","src":"194:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":64,"name":"voterIndex","nodeType":"VariableDeclaration","scope":65,"src":"255:15:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":63,"name":"uint","nodeType":"ElementaryTypeName","src":"255:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"name":"Voter","nodeType":"StructDefinition","scope":327,"src":"112:195:1","visibility":"public"},{"canonicalName":"Poll.Proposal","id":70,"members":[{"constant":false,"id":67,"name":"name","nodeType":"VariableDeclaration","scope":70,"src":"384:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":66,"name":"string","nodeType":"ElementaryTypeName","src":"384:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":69,"name":"truc","nodeType":"VariableDeclaration","scope":70,"src":"424:9:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":68,"name":"bool","nodeType":"ElementaryTypeName","src":"424:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"name":"Proposal","nodeType":"StructDefinition","scope":327,"src":"358:160:1","visibility":"public"},{"constant":false,"id":72,"name":"question","nodeType":"VariableDeclaration","scope":327,"src":"597:22:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":71,"name":"string","nodeType":"ElementaryTypeName","src":"597:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"public"},{"constant":false,"id":76,"name":"voters","nodeType":"VariableDeclaration","scope":327,"src":"625:39:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_bytes32_$_t_struct$_Voter_$65_storage_$","typeString":"mapping(bytes32 => struct Poll.Voter)"},"typeName":{"id":75,"keyType":{"id":73,"name":"bytes32","nodeType":"ElementaryTypeName","src":"633:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"nodeType":"Mapping","src":"625:25:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_bytes32_$_t_struct$_Voter_$65_storage_$","typeString":"mapping(bytes32 => struct Poll.Voter)"},"valueType":{"contractScope":null,"id":74,"name":"Voter","nodeType":"UserDefinedTypeName","referencedDeclaration":65,"src":"644:5:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter"}}},"value":null,"visibility":"public"},{"constant":false,"id":79,"name":"votersHash","nodeType":"VariableDeclaration","scope":327,"src":"670:27:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes32_$dyn_storage","typeString":"bytes32[]"},"typeName":{"baseType":{"id":77,"name":"bytes32","nodeType":"ElementaryTypeName","src":"670:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"id":78,"length":null,"nodeType":"ArrayTypeName","src":"670:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes32_$dyn_storage_ptr","typeString":"bytes32[]"}},"value":null,"visibility":"public"},{"constant":false,"id":82,"name":"proposals","nodeType":"VariableDeclaration","scope":327,"src":"703:27:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Proposal_$70_storage_$dyn_storage","typeString":"struct Poll.Proposal[]"},"typeName":{"baseType":{"contractScope":null,"id":80,"name":"Proposal","nodeType":"UserDefinedTypeName","referencedDeclaration":70,"src":"703:8:1","typeDescriptions":{"typeIdentifier":"t_struct$_Proposal_$70_storage_ptr","typeString":"struct Poll.Proposal"}},"id":81,"length":null,"nodeType":"ArrayTypeName","src":"703:10:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Proposal_$70_storage_$dyn_storage_ptr","typeString":"struct Poll.Proposal[]"}},"value":null,"visibility":"public"},{"anonymous":false,"documentation":null,"id":88,"name":"NewVote","nodeType":"EventDefinition","parameters":{"id":87,"nodeType":"ParameterList","parameters":[{"constant":false,"id":84,"indexed":false,"name":"voter","nodeType":"VariableDeclaration","scope":88,"src":"824:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":83,"name":"bytes32","nodeType":"ElementaryTypeName","src":"824:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":86,"indexed":false,"name":"proposalName","nodeType":"VariableDeclaration","scope":88,"src":"847:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":85,"name":"string","nodeType":"ElementaryTypeName","src":"847:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"814:58:1"},"src":"801:72:1"},{"body":{"id":97,"nodeType":"Block","src":"978:37:1","statements":[{"expression":{"argumentTypes":null,"id":95,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":93,"name":"question","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":72,"src":"988:8:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":94,"name":"_question","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":90,"src":"999:9:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"988:20:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":96,"nodeType":"ExpressionStatement","src":"988:20:1"}]},"documentation":null,"id":98,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":91,"nodeType":"ParameterList","parameters":[{"constant":false,"id":90,"name":"_question","nodeType":"VariableDeclaration","scope":98,"src":"960:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":89,"name":"string","nodeType":"ElementaryTypeName","src":"960:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"959:18:1"},"payable":false,"returnParameters":{"id":92,"nodeType":"ParameterList","parameters":[],"src":"978:0:1"},"scope":327,"src":"948:67:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":106,"nodeType":"Block","src":"1143:40:1","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":103,"name":"proposals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":82,"src":"1160:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Proposal_$70_storage_$dyn_storage","typeString":"struct Poll.Proposal storage ref[] storage ref"}},"id":104,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1160:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":102,"id":105,"nodeType":"Return","src":"1153:23:1"}]},"documentation":null,"id":107,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"proposalsCount","nodeType":"FunctionDefinition","parameters":{"id":99,"nodeType":"ParameterList","parameters":[],"src":"1109:2:1"},"payable":false,"returnParameters":{"id":102,"nodeType":"ParameterList","parameters":[{"constant":false,"id":101,"name":"","nodeType":"VariableDeclaration","scope":107,"src":"1137:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":100,"name":"uint","nodeType":"ElementaryTypeName","src":"1137:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1136:6:1"},"scope":327,"src":"1086:97:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":115,"nodeType":"Block","src":"1247:41:1","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":112,"name":"votersHash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":79,"src":"1264:10:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes32_$dyn_storage","typeString":"bytes32[] storage ref"}},"id":113,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1264:17:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":111,"id":114,"nodeType":"Return","src":"1257:24:1"}]},"documentation":null,"id":116,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"votersHashCount","nodeType":"FunctionDefinition","parameters":{"id":108,"nodeType":"ParameterList","parameters":[],"src":"1213:2:1"},"payable":false,"returnParameters":{"id":111,"nodeType":"ParameterList","parameters":[{"constant":false,"id":110,"name":"","nodeType":"VariableDeclaration","scope":116,"src":"1241:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":109,"name":"uint","nodeType":"ElementaryTypeName","src":"1241:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1240:6:1"},"scope":327,"src":"1189:99:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":124,"nodeType":"Block","src":"1349:41:1","statements":[{"expression":{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"id":121,"name":"votersHashCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":116,"src":"1366:15:1","typeDescriptions":{"typeIdentifier":"t_function_internal_view$__$returns$_t_uint256_$","typeString":"function () view returns (uint256)"}},"id":122,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1366:17:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":120,"id":123,"nodeType":"Return","src":"1359:24:1"}]},"documentation":null,"id":125,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"numberOfVote","nodeType":"FunctionDefinition","parameters":{"id":117,"nodeType":"ParameterList","parameters":[],"src":"1315:2:1"},"payable":false,"returnParameters":{"id":120,"nodeType":"ParameterList","parameters":[{"constant":false,"id":119,"name":"","nodeType":"VariableDeclaration","scope":125,"src":"1343:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":118,"name":"uint","nodeType":"ElementaryTypeName","src":"1343:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1342:6:1"},"scope":327,"src":"1294:96:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":177,"nodeType":"Block","src":"1475:324:1","statements":[{"assignments":[133],"declarations":[{"constant":false,"id":133,"name":"voteCount","nodeType":"VariableDeclaration","scope":178,"src":"1485:14:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":132,"name":"uint","nodeType":"ElementaryTypeName","src":"1485:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":135,"initialValue":{"argumentTypes":null,"hexValue":"30","id":134,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1502:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"nodeType":"VariableDeclarationStatement","src":"1485:18:1"},{"body":{"id":173,"nodeType":"Block","src":"1558:209:1","statements":[{"assignments":[148],"declarations":[{"constant":false,"id":148,"name":"voter","nodeType":"VariableDeclaration","scope":178,"src":"1572:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":147,"name":"bytes32","nodeType":"ElementaryTypeName","src":"1572:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"}],"id":152,"initialValue":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":149,"name":"votersHash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":79,"src":"1588:10:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes32_$dyn_storage","typeString":"bytes32[] storage ref"}},"id":151,"indexExpression":{"argumentTypes":null,"id":150,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":137,"src":"1599:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1588:13:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"nodeType":"VariableDeclarationStatement","src":"1572:29:1"},{"assignments":[154],"declarations":[{"constant":false,"id":154,"name":"vote","nodeType":"VariableDeclaration","scope":178,"src":"1615:10:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter"},"typeName":{"contractScope":null,"id":153,"name":"Voter","nodeType":"UserDefinedTypeName","referencedDeclaration":65,"src":"1615:5:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter"}},"value":null,"visibility":"internal"}],"id":158,"initialValue":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":155,"name":"voters","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":76,"src":"1628:6:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_bytes32_$_t_struct$_Voter_$65_storage_$","typeString":"mapping(bytes32 => struct Poll.Voter storage ref)"}},"id":157,"indexExpression":{"argumentTypes":null,"id":156,"name":"voter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":148,"src":"1635:5:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1628:13:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage","typeString":"struct Poll.Voter storage ref"}},"nodeType":"VariableDeclarationStatement","src":"1615:26:1"},{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_bool","typeString":"bool"},"id":167,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":162,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":159,"name":"vote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":154,"src":"1659:4:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter storage pointer"}},"id":160,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"proposalVoted","nodeType":"MemberAccess","referencedDeclaration":62,"src":"1659:18:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"id":161,"name":"proposal","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":127,"src":"1681:8:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1659:30:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"BinaryOperation","operator":"&&","rightExpression":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_bool","typeString":"bool"},"id":166,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":163,"name":"vote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":154,"src":"1693:4:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter storage pointer"}},"id":164,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"voted","nodeType":"MemberAccess","referencedDeclaration":60,"src":"1693:10:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"74727565","id":165,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"1707:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"1693:18:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"src":"1659:52:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":172,"nodeType":"IfStatement","src":"1655:102:1","trueBody":{"id":171,"nodeType":"Block","src":"1713:44:1","statements":[{"expression":{"argumentTypes":null,"id":169,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"1731:11:1","subExpression":{"argumentTypes":null,"id":168,"name":"voteCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":133,"src":"1731:9:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":170,"nodeType":"ExpressionStatement","src":"1731:11:1"}]}}]},"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":143,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":140,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":137,"src":"1530:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<","rightExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":141,"name":"votersHash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":79,"src":"1534:10:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes32_$dyn_storage","typeString":"bytes32[] storage ref"}},"id":142,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1534:17:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"1530:21:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":174,"initializationExpression":{"assignments":[137],"declarations":[{"constant":false,"id":137,"name":"i","nodeType":"VariableDeclaration","scope":178,"src":"1518:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":136,"name":"uint","nodeType":"ElementaryTypeName","src":"1518:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":139,"initialValue":{"argumentTypes":null,"hexValue":"30","id":138,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1527:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"nodeType":"VariableDeclarationStatement","src":"1518:10:1"},"loopExpression":{"expression":{"argumentTypes":null,"id":145,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"1553:3:1","subExpression":{"argumentTypes":null,"id":144,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":137,"src":"1553:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":146,"nodeType":"ExpressionStatement","src":"1553:3:1"},"nodeType":"ForStatement","src":"1513:254:1"},{"expression":{"argumentTypes":null,"id":175,"name":"voteCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":133,"src":"1783:9:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":131,"id":176,"nodeType":"Return","src":"1776:16:1"}]},"documentation":null,"id":178,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"numberOfVoteForProposal","nodeType":"FunctionDefinition","parameters":{"id":128,"nodeType":"ParameterList","parameters":[{"constant":false,"id":127,"name":"proposal","nodeType":"VariableDeclaration","scope":178,"src":"1429:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":126,"name":"uint","nodeType":"ElementaryTypeName","src":"1429:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1428:15:1"},"payable":false,"returnParameters":{"id":131,"nodeType":"ParameterList","parameters":[{"constant":false,"id":130,"name":"","nodeType":"VariableDeclaration","scope":178,"src":"1469:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":129,"name":"uint","nodeType":"ElementaryTypeName","src":"1469:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"1468:6:1"},"scope":327,"src":"1396:403:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":253,"nodeType":"Block","src":"1873:512:1","statements":[{"assignments":[187],"declarations":[{"constant":false,"id":187,"name":"votePerProposal","nodeType":"VariableDeclaration","scope":254,"src":"1915:29:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[]"},"typeName":{"baseType":{"id":185,"name":"uint","nodeType":"ElementaryTypeName","src":"1915:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":186,"length":null,"nodeType":"ArrayTypeName","src":"1915:6:1","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"}],"id":194,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":191,"name":"proposals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":82,"src":"1958:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Proposal_$70_storage_$dyn_storage","typeString":"struct Poll.Proposal storage ref[] storage ref"}},"id":192,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1958:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":190,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"NewExpression","src":"1947:10:1","typeDescriptions":{"typeIdentifier":"t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_$","typeString":"function (uint256) pure returns (uint256[] memory)"},"typeName":{"baseType":{"id":188,"name":"uint","nodeType":"ElementaryTypeName","src":"1951:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":189,"length":null,"nodeType":"ArrayTypeName","src":"1951:6:1","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}}},"id":193,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1947:28:1","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory","typeString":"uint256[] memory"}},"nodeType":"VariableDeclarationStatement","src":"1915:60:1"},{"body":{"id":212,"nodeType":"Block","src":"2035:45:1","statements":[{"expression":{"argumentTypes":null,"id":210,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":206,"name":"votePerProposal","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"2047:15:1","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[] memory"}},"id":208,"indexExpression":{"argumentTypes":null,"id":207,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":196,"src":"2063:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"2047:18:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"30","id":209,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"2068:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"2047:22:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":211,"nodeType":"ExpressionStatement","src":"2047:22:1"}]},"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":202,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":199,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":196,"src":"2002:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<","rightExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":200,"name":"votePerProposal","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"2006:15:1","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[] memory"}},"id":201,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2006:22:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2002:26:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":213,"initializationExpression":{"assignments":[196],"declarations":[{"constant":false,"id":196,"name":"i","nodeType":"VariableDeclaration","scope":254,"src":"1990:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":195,"name":"uint","nodeType":"ElementaryTypeName","src":"1990:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":198,"initialValue":{"argumentTypes":null,"hexValue":"30","id":197,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"1999:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"nodeType":"VariableDeclarationStatement","src":"1990:10:1"},"loopExpression":{"expression":{"argumentTypes":null,"id":204,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"2030:3:1","subExpression":{"argumentTypes":null,"id":203,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":196,"src":"2030:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":205,"nodeType":"ExpressionStatement","src":"2030:3:1"},"nodeType":"ForStatement","src":"1985:95:1"},{"body":{"id":249,"nodeType":"Block","src":"2146:201:1","statements":[{"assignments":[226],"declarations":[{"constant":false,"id":226,"name":"voter","nodeType":"VariableDeclaration","scope":254,"src":"2160:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":225,"name":"bytes32","nodeType":"ElementaryTypeName","src":"2160:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"}],"id":230,"initialValue":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":227,"name":"votersHash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":79,"src":"2176:10:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes32_$dyn_storage","typeString":"bytes32[] storage ref"}},"id":229,"indexExpression":{"argumentTypes":null,"id":228,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":196,"src":"2187:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2176:13:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"nodeType":"VariableDeclarationStatement","src":"2160:29:1"},{"assignments":[232],"declarations":[{"constant":false,"id":232,"name":"vote","nodeType":"VariableDeclaration","scope":254,"src":"2203:10:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter"},"typeName":{"contractScope":null,"id":231,"name":"Voter","nodeType":"UserDefinedTypeName","referencedDeclaration":65,"src":"2203:5:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter"}},"value":null,"visibility":"internal"}],"id":236,"initialValue":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":233,"name":"voters","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":76,"src":"2216:6:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_bytes32_$_t_struct$_Voter_$65_storage_$","typeString":"mapping(bytes32 => struct Poll.Voter storage ref)"}},"id":235,"indexExpression":{"argumentTypes":null,"id":234,"name":"voter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":226,"src":"2223:5:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2216:13:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage","typeString":"struct Poll.Voter storage ref"}},"nodeType":"VariableDeclarationStatement","src":"2203:26:1"},{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_bool","typeString":"bool"},"id":240,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":237,"name":"vote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":232,"src":"2247:4:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter storage pointer"}},"id":238,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"voted","nodeType":"MemberAccess","referencedDeclaration":60,"src":"2247:10:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"74727565","id":239,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2261:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"2247:18:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":248,"nodeType":"IfStatement","src":"2243:94:1","trueBody":{"id":247,"nodeType":"Block","src":"2267:70:1","statements":[{"expression":{"argumentTypes":null,"id":245,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"2285:37:1","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":241,"name":"votePerProposal","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"2285:15:1","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[] memory"}},"id":244,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":242,"name":"vote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":232,"src":"2301:4:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter storage pointer"}},"id":243,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"proposalVoted","nodeType":"MemberAccess","referencedDeclaration":62,"src":"2301:18:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"2285:35:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":246,"nodeType":"ExpressionStatement","src":"2285:37:1"}]}}]},"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":221,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":218,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":196,"src":"2118:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<","rightExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":219,"name":"votersHash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":79,"src":"2122:10:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes32_$dyn_storage","typeString":"bytes32[] storage ref"}},"id":220,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2122:17:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2118:21:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":250,"initializationExpression":{"expression":{"argumentTypes":null,"id":216,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":214,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":196,"src":"2111:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"30","id":215,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"2115:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"src":"2111:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":217,"nodeType":"ExpressionStatement","src":"2111:5:1"},"loopExpression":{"expression":{"argumentTypes":null,"id":223,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"2141:3:1","subExpression":{"argumentTypes":null,"id":222,"name":"i","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":196,"src":"2141:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":224,"nodeType":"ExpressionStatement","src":"2141:3:1"},"nodeType":"ForStatement","src":"2106:241:1"},{"expression":{"argumentTypes":null,"id":251,"name":"votePerProposal","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":187,"src":"2363:15:1","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[] memory"}},"functionReturnParameters":183,"id":252,"nodeType":"Return","src":"2356:22:1"}]},"documentation":null,"id":254,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"numberOfVotePerProposal","nodeType":"FunctionDefinition","parameters":{"id":179,"nodeType":"ParameterList","parameters":[],"src":"1837:2:1"},"payable":false,"returnParameters":{"id":183,"nodeType":"ParameterList","parameters":[{"constant":false,"id":182,"name":"","nodeType":"VariableDeclaration","scope":254,"src":"1865:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_memory_ptr","typeString":"uint256[]"},"typeName":{"baseType":{"id":180,"name":"uint","nodeType":"ElementaryTypeName","src":"1865:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":181,"length":null,"nodeType":"ArrayTypeName","src":"1865:6:1","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"}],"src":"1864:8:1"},"scope":327,"src":"1805:580:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":268,"nodeType":"Block","src":"2490:101:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":263,"name":"name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":256,"src":"2544:4:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"hexValue":"74727565","id":264,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2568:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"}],"expression":{"argumentTypes":null,"id":262,"name":"Proposal","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":70,"src":"2515:8:1","typeDescriptions":{"typeIdentifier":"t_type$_t_struct$_Proposal_$70_storage_ptr_$","typeString":"type(struct Poll.Proposal storage pointer)"}},"id":265,"isConstant":false,"isLValue":false,"isPure":false,"kind":"structConstructorCall","lValueRequested":false,"names":["name","truc"],"nodeType":"FunctionCall","src":"2515:68:1","typeDescriptions":{"typeIdentifier":"t_struct$_Proposal_$70_memory","typeString":"struct Poll.Proposal memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_struct$_Proposal_$70_memory","typeString":"struct Poll.Proposal memory"}],"expression":{"argumentTypes":null,"id":259,"name":"proposals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":82,"src":"2500:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Proposal_$70_storage_$dyn_storage","typeString":"struct Poll.Proposal storage ref[] storage ref"}},"id":261,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2500:14:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_struct$_Proposal_$70_storage_$returns$_t_uint256_$","typeString":"function (struct Poll.Proposal storage ref) returns (uint256)"}},"id":266,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2500:84:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":267,"nodeType":"ExpressionStatement","src":"2500:84:1"}]},"documentation":null,"id":269,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"addProposal","nodeType":"FunctionDefinition","parameters":{"id":257,"nodeType":"ParameterList","parameters":[{"constant":false,"id":256,"name":"name","nodeType":"VariableDeclaration","scope":269,"src":"2477:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":255,"name":"string","nodeType":"ElementaryTypeName","src":"2477:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"2476:13:1"},"payable":false,"returnParameters":{"id":258,"nodeType":"ParameterList","parameters":[],"src":"2490:0:1"},"scope":327,"src":"2456:135:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":325,"nodeType":"Block","src":"2663:360:1","statements":[{"assignments":[279],"declarations":[{"constant":false,"id":279,"name":"sender","nodeType":"VariableDeclaration","scope":326,"src":"2673:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter"},"typeName":{"contractScope":null,"id":278,"name":"Voter","nodeType":"UserDefinedTypeName","referencedDeclaration":65,"src":"2673:5:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter"}},"value":null,"visibility":"internal"}],"id":283,"initialValue":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":280,"name":"voters","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":76,"src":"2688:6:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_bytes32_$_t_struct$_Voter_$65_storage_$","typeString":"mapping(bytes32 => struct Poll.Voter storage ref)"}},"id":282,"indexExpression":{"argumentTypes":null,"id":281,"name":"voter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":271,"src":"2695:5:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2688:13:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage","typeString":"struct Poll.Voter storage ref"}},"nodeType":"VariableDeclarationStatement","src":"2673:28:1"},{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_bool","typeString":"bool"},"id":287,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":284,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":279,"src":"2742:6:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter storage pointer"}},"id":285,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"voted","nodeType":"MemberAccess","referencedDeclaration":60,"src":"2742:12:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"hexValue":"74727565","id":286,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2758:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"2742:20:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":302,"nodeType":"IfStatement","src":"2738:120:1","trueBody":{"id":301,"nodeType":"Block","src":"2764:94:1","statements":[{"expression":{"argumentTypes":null,"id":293,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":288,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":279,"src":"2776:6:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter storage pointer"}},"id":290,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"voterIndex","nodeType":"MemberAccess","referencedDeclaration":64,"src":"2776:17:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":291,"name":"votersHash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":79,"src":"2796:10:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes32_$dyn_storage","typeString":"bytes32[] storage ref"}},"id":292,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2796:17:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2776:37:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":294,"nodeType":"ExpressionStatement","src":"2776:37:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":298,"name":"voter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":271,"src":"2841:5:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes32","typeString":"bytes32"}],"expression":{"argumentTypes":null,"id":295,"name":"votersHash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":79,"src":"2825:10:1","typeDescriptions":{"typeIdentifier":"t_array$_t_bytes32_$dyn_storage","typeString":"bytes32[] storage ref"}},"id":297,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2825:15:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$","typeString":"function (bytes32) returns (uint256)"}},"id":299,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2825:22:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":300,"nodeType":"ExpressionStatement","src":"2825:22:1"}]}},{"expression":{"argumentTypes":null,"id":307,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":303,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":279,"src":"2883:6:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter storage pointer"}},"id":305,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"proposalVoted","nodeType":"MemberAccess","referencedDeclaration":62,"src":"2883:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":306,"name":"proposal","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":273,"src":"2906:8:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"2883:31:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":308,"nodeType":"ExpressionStatement","src":"2883:31:1"},{"expression":{"argumentTypes":null,"id":313,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":309,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":279,"src":"2924:6:1","typeDescriptions":{"typeIdentifier":"t_struct$_Voter_$65_storage_ptr","typeString":"struct Poll.Voter storage pointer"}},"id":311,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"voted","nodeType":"MemberAccess","referencedDeclaration":60,"src":"2924:12:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":312,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2939:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"2924:19:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":314,"nodeType":"ExpressionStatement","src":"2924:19:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":316,"name":"voter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":271,"src":"2962:5:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":317,"name":"proposals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":82,"src":"2969:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Proposal_$70_storage_$dyn_storage","typeString":"struct Poll.Proposal storage ref[] storage ref"}},"id":319,"indexExpression":{"argumentTypes":null,"id":318,"name":"proposal","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":273,"src":"2979:8:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2969:19:1","typeDescriptions":{"typeIdentifier":"t_struct$_Proposal_$70_storage","typeString":"struct Poll.Proposal storage ref"}},"id":320,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"name","nodeType":"MemberAccess","referencedDeclaration":67,"src":"2969:24:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes32","typeString":"bytes32"},{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}],"id":315,"name":"NewVote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":88,"src":"2954:7:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_bytes32_$_t_string_memory_ptr_$returns$__$","typeString":"function (bytes32,string memory)"}},"id":321,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2954:40:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":322,"nodeType":"ExpressionStatement","src":"2954:40:1"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":323,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"3012:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":277,"id":324,"nodeType":"Return","src":"3005:11:1"}]},"documentation":null,"id":326,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"vote","nodeType":"FunctionDefinition","parameters":{"id":274,"nodeType":"ParameterList","parameters":[{"constant":false,"id":271,"name":"voter","nodeType":"VariableDeclaration","scope":326,"src":"2611:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":270,"name":"bytes32","nodeType":"ElementaryTypeName","src":"2611:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":273,"name":"proposal","nodeType":"VariableDeclaration","scope":326,"src":"2626:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":272,"name":"uint","nodeType":"ElementaryTypeName","src":"2626:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2610:30:1"},"payable":false,"returnParameters":{"id":277,"nodeType":"ParameterList","parameters":[{"constant":false,"id":276,"name":"","nodeType":"VariableDeclaration","scope":326,"src":"2657:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":275,"name":"bool","nodeType":"ElementaryTypeName","src":"2657:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"2656:6:1"},"scope":327,"src":"2597:426:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":328,"src":"25:3001:1"}],"src":"0:3026:1"},"compiler":{"name":"solc","version":"0.4.23+commit.124ca40d.Emscripten.clang"},"networks":{"4":{"events":{},"links":{},"address":"0x5e4d348590fdd9302e0fb07a8ad3d60e5bd37a8a","transactionHash":"0xa1eaa1a48cb20de4a7853f84a41e55ff3f2fcdd685b9c4daed821603bcc0e7fc"}},"schemaVersion":"2.0.0","updatedAt":"2018-05-31T06:48:56.316Z"}

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".backdrop { \n\tbackground-color: rgba(0, 0, 0, 0.6);\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100vh;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<div [ngClass]=\"{'py-0 px-0 my-0 mx-0': specialPage}\"  class=\"pt-5 mx-lg-5\" >\n\t<div class=\"mt-4\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, location) {
        var _this = this;
        this.router = router;
        this.location = location;
        this.values = ['Tag 1', 'Tag 2', 'Tag 4'];
        this.title = '';
        this.specialPages = [];
        this.currentUrl = '';
        this.router.events.subscribe(function (route) {
            _this.currentUrl = route.url;
            _this.specialPage = _this.specialPages.indexOf(_this.currentUrl) !== -1;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.goBack = function () {
        this.location.back();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'mdb-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes_service__ = __webpack_require__("./src/app/app.routes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_util_module__ = __webpack_require__("./src/app/util/util.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_views_module__ = __webpack_require__("./src/app/views/views.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_layout_navigation_navigation_module__ = __webpack_require__("./src/app/main-layout/navigation/navigation.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// main layout

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: ''
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_12__main_layout_navigation_navigation_module__["a" /* NavigationModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routes_service__["a" /* AppRoutes */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_10__views_views_module__["a" /* ViewsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__util_util_module__["a" /* UtilModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_3__angular_core__["J" /* NO_ERRORS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_3__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_profile_profile_component__ = __webpack_require__("./src/app/views/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_home_home_component__ = __webpack_require__("./src/app/views/home/home.component.ts");



var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_2__views_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'profiles/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__views_profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: '**',
        redirectTo: ''
    },
];
var AppRoutes = __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "./src/app/main-layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Footer-->\n<div class=\"text-center font-medium primary-color-dark darken-2 mt-4 wow fadeIn  \">\n\n    <!--Copyright-->\n    <div class=\"footer-copyright py-3\" style=\"color: white;\">\n        Elecciones Presidenciales 2018\n    </div>\n    <!--/.Copyright-->\n\n</div>\n<!--/.Footer-->"

/***/ }),

/***/ "./src/app/main-layout/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/main-layout/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/main-layout/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/main-layout/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "    <!--Main Navigation-->\n    <header>\n\n        <!-- Navbar -->\n        <nav class=\"navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar\">\n            <div class=\"container-fluid\">\n  \n                <!-- Brand -->\n                <a class=\"navbar-brand waves-effect\" href=\"#\">\n                    <strong class=\"blue-text\">Candidatos</strong>\n                </a>\n  \n                <!-- Collapse -->\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n                    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <span class=\"navbar-toggler-icon\"></span>\n                </button>\n  \n                <!-- Links -->\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n  \n                    <!-- Left -->\n                    <ul class=\"navbar-nav mr-auto\">\n                        <!-- <li class=\"nav-item active\">\n                            <a class=\"nav-link waves-effect\" href=\"#\">Candidatos\n                                <span class=\"sr-only\">(current)</span>\n                            </a>\n                        </li> -->\n                    </ul>\n  \n                    <!-- Right -->\n                    <ul class=\"navbar-nav nav-flex-icons\">\n\n                    </ul>\n  \n                </div>\n  \n            </div>\n        </nav>\n        <!-- Navbar -->\n  \n    </header>\n    <!--Main Navigation-->\n\n\n"

/***/ }),

/***/ "./src/app/main-layout/navigation/navigation.component.scss":
/***/ (function(module, exports) {

module.exports = ".sidebar-fixed {\n  height: 100vh;\n  width: 270px;\n  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  z-index: 1050;\n  background-color: #fff;\n  padding: 1.5rem;\n  padding-top: 0; }\n\n.sidebar-fixed .list-group .active {\n  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 5px; }\n\n.sidebar-fixed .logo-wrapper {\n  padding: 2.5rem; }\n\n.sidebar-fixed .logo-wrapper img {\n  max-height: 50px; }\n\n@media (min-width: 1200px) {\n  .navbar,\n  .page-footer,\n  main {\n    padding-left: 270px; } }\n\n@media (max-width: 1199.98px) {\n  .sidebar-fixed {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/main-layout/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
        this.clicked = this.clicked === undefined ? false : true;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.setClicked = function (val) {
        this.clicked = val;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('sidenav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], NavigationComponent.prototype, "sidenav", void 0);
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("./src/app/main-layout/navigation/navigation.component.html"),
            styles: [__webpack_require__("./src/app/main-layout/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/main-layout/navigation/navigation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__typescripts_free_index__ = __webpack_require__("./src/app/typescripts/free/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_component__ = __webpack_require__("./src/app/main-layout/navigation/navigation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NavigationModule = (function () {
    function NavigationModule() {
    }
    NavigationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__typescripts_free_index__["a" /* MDBBootstrapModule */].forRoot(),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__navigation_component__["a" /* NavigationComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__navigation_component__["a" /* NavigationComponent */]
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_3__angular_core__["J" /* NO_ERRORS_SCHEMA */],
                __WEBPACK_IMPORTED_MODULE_3__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]
            ],
            providers: []
        })
    ], NavigationModule);
    return NavigationModule;
}());



/***/ }),

/***/ "./src/app/shared/components/cascading-card/cascading-card.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Card-->\n<div [ngClass]=\"(headerType==='wide')?'wider':(headerType==='narrow')?'narrower':''\" class=\"card card-cascade mt-3\">\n    <!--Card image-->\n    <div class=\"view overlay hm-white-slight waves-light\" mdbWavesEffect>\n        <img src={{src}} class=\"img-fluid\">\n        <a>\n            <div class=\"mask\"></div>\n        </a>\n    </div>\n    <!--/Card image-->\n    <!--Card content-->\n    <div class=\"card-body\" [ngClass]=\"(alignment==='left')?'text-left':(alignment==='right')?'text-right':'text-center'\">\n        <h4 class=\"card-title mb-3 font-bold\" *ngIf=\"title!==''\"><strong>{{title}}</strong></h4>\n            <ng-content></ng-content>\n    </div>\n    <!--/.Card content-->\n\n</div>\n<!--/.Card-->"

/***/ }),

/***/ "./src/app/shared/components/cascading-card/cascading-card.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/cascading-card/cascading-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CascadingCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CascadingCardComponent = (function () {
    function CascadingCardComponent() {
        this.headerType = '';
        this.title = '';
        this.alignment = 'center';
        this.src = '';
    }
    CascadingCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CascadingCardComponent.prototype, "headerType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CascadingCardComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CascadingCardComponent.prototype, "alignment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CascadingCardComponent.prototype, "src", void 0);
    CascadingCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'cascading-card',
            template: __webpack_require__("./src/app/shared/components/cascading-card/cascading-card.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/cascading-card/cascading-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CascadingCardComponent);
    return CascadingCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/cascading-panel/cascading-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Card-->\n<div [ngClass]=\"(headerType==='wide')?'wider':(headerType==='narrow')?'narrower':''\" class=\"card card-cascade\">\n  <!--Card image-->\n  <div class=\"view gradient-card-header {{panelClass}}\">\n    <h4 class=\"h4-responsive\">{{title}} </h4>\n  </div>\n  <!--/Card image-->\n  <!--Card content-->\n  <div class=\"card-body\" [ngClass]=\"(alignment==='left')?'text-left':(alignment==='right')?'text-right':'text-center'\">\n    <ng-content></ng-content>\n  </div>\n  <!--/.Card content-->\n</div>\n<!--/.Card-->"

/***/ }),

/***/ "./src/app/shared/components/cascading-panel/cascading-panel.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/cascading-panel/cascading-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CascadingPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CascadingPanelComponent = (function () {
    function CascadingPanelComponent() {
        this.headerType = '';
        this.title = '';
        this.panelClass = '';
        this.alignment = 'center';
    }
    CascadingPanelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CascadingPanelComponent.prototype, "headerType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CascadingPanelComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CascadingPanelComponent.prototype, "panelClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CascadingPanelComponent.prototype, "alignment", void 0);
    CascadingPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'cascading-panel',
            template: __webpack_require__("./src/app/shared/components/cascading-panel/cascading-panel.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/cascading-panel/cascading-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CascadingPanelComponent);
    return CascadingPanelComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- Button -->\n<button type=\"button\" class=\"btn btn-primary relative waves-light\" (click)=\"basicModal.show()\" mdbWavesEffect>Launch demo modal</button>\n<!-- /Button -->\n\n<div mdbModal #basicModal=\"mdb-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: true}\">\n    <div class=\"modal-dialog\" [ngClass]=\"getClass()\" role=\"document\">\n            <ng-content></ng-content>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/modal/modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = (function () {
    function ModalComponent() {
        this.type = '';
        this.side = '';
        this.size = '';
        this.getClass = function () {
            var type = this.type;
            var size = this.size;
            var side = this.side;
            if (type === 'central') {
                if (size === 'small') {
                    return 'modal-sm';
                }
                else if (size === 'large') {
                    return 'modal-lg';
                }
                else if (size === 'fluid') {
                    return 'modal-fluid';
                }
                else {
                    return '';
                }
            }
            else if (type === 'side') {
                if (side === 'top-left') {
                    return 'modal-side modal-top-left';
                }
                else if (side === 'bottom-left') {
                    return 'modal-side modal-bottom-left';
                }
                else if (side === 'bottom-right') {
                    return 'modal-side modal-bottom-right';
                }
                else {
                    return 'modal-side modal-top-right';
                }
            }
            else if (type === 'fluid') {
                if (side === 'right') {
                    return 'modal-full-height modal-right';
                }
                else if (side === 'left') {
                    return 'modal-full-height modal-left';
                }
                else if (side === 'bottom') {
                    return 'modal-full-height modal-bottom';
                }
                else {
                    return 'modal-full-height modal-top';
                }
            }
            else if (type === 'frame') {
                if (side === 'bottom') {
                    return 'modal-frame modal-bottom';
                }
                else {
                    return 'modal-frame modal-top';
                }
            }
            else {
                return '';
            }
        };
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "side", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "size", void 0);
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'modal',
            template: __webpack_require__("./src/app/shared/components/modal/modal.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/modal/modal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());

;


/***/ }),

/***/ "./src/app/shared/components/overlay-card/overlay-card.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"card card-image mb-3\" [ngStyle]=\"{'background-image': 'url(' + src + ')'}\"  [ngClass]=\"(alignment==='left')?'text-left':(alignment==='right')?'text-right':'text-center'\">\n  <div class=\"text-white d-flex py-5 px-4 {{color}}\"\n >\n      <ng-content></ng-content></div>\n  </div>"

/***/ }),

/***/ "./src/app/shared/components/overlay-card/overlay-card.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/overlay-card/overlay-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverlayCardComponent = (function () {
    function OverlayCardComponent() {
        this.alignment = 'center';
        this.src = '';
        this.color = '';
    }
    OverlayCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], OverlayCardComponent.prototype, "alignment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], OverlayCardComponent.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], OverlayCardComponent.prototype, "color", void 0);
    OverlayCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'overlay-card',
            template: __webpack_require__("./src/app/shared/components/overlay-card/overlay-card.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/overlay-card/overlay-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OverlayCardComponent);
    return OverlayCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/panel/panel.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Panel-->\n<div class=\"card mt-3\" [ngClass]=\"(alignment==='left')?'text-left':(alignment==='right')?'text-right':'text-center'\">\n  <h3 class=\"card-header {{color}} white-text\" *ngIf=\"header!==''\">{{header}}</h3>\n  <div class=\"card-body\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"card-footer text-muted {{color}} white-text\" *ngIf=\"footer!==''\">\n    <p class=\"mb-0\">{{footer}}</p>\n  </div>\n</div>\n<!--/.Panel-->"

/***/ }),

/***/ "./src/app/shared/components/panel/panel.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/panel/panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelComponent = (function () {
    function PanelComponent() {
        this.alignment = 'center';
        this.color = '';
        this.header = '';
        this.footer = '';
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], PanelComponent.prototype, "alignment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], PanelComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], PanelComponent.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], PanelComponent.prototype, "footer", void 0);
    PanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'panel',
            template: __webpack_require__("./src/app/shared/components/panel/panel.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/panel/panel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_modal_modal_component__ = __webpack_require__("./src/app/shared/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__typescripts_free_index__ = __webpack_require__("./src/app/typescripts/free/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_cascading_panel_cascading_panel_component__ = __webpack_require__("./src/app/shared/components/cascading-panel/cascading-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_cascading_card_cascading_card_component__ = __webpack_require__("./src/app/shared/components/cascading-card/cascading-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_overlay_card_overlay_card_component__ = __webpack_require__("./src/app/shared/components/overlay-card/overlay-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_panel_panel_component__ = __webpack_require__("./src/app/shared/components/panel/panel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__typescripts_free_index__["a" /* MDBBootstrapModule */].forRoot(),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__components_cascading_panel_cascading_panel_component__["a" /* CascadingPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_cascading_card_cascading_card_component__["a" /* CascadingCardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_overlay_card_overlay_card_component__["a" /* OverlayCardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_panel_panel_component__["a" /* PanelComponent */],
                __WEBPACK_IMPORTED_MODULE_0__components_modal_modal_component__["a" /* ModalComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__typescripts_free_index__["a" /* MDBBootstrapModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_cascading_panel_cascading_panel_component__["a" /* CascadingPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_cascading_card_cascading_card_component__["a" /* CascadingCardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_overlay_card_overlay_card_component__["a" /* OverlayCardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_panel_panel_component__["a" /* PanelComponent */],
                __WEBPACK_IMPORTED_MODULE_0__components_modal_modal_component__["a" /* ModalComponent */],
            ],
            providers: [],
            schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NO_ERRORS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/typescripts/free/buttons/buttons.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkbox_directive__ = __webpack_require__("./src/app/typescripts/free/buttons/checkbox.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__radio_directive__ = __webpack_require__("./src/app/typescripts/free/buttons/radio.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ButtonsModule = (function () {
    function ButtonsModule() {
    }
    ButtonsModule_1 = ButtonsModule;
    ButtonsModule.forRoot = function () {
        return { ngModule: ButtonsModule_1, providers: [] };
    };
    ButtonsModule = ButtonsModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__checkbox_directive__["a" /* ButtonCheckboxDirective */], __WEBPACK_IMPORTED_MODULE_2__radio_directive__["a" /* ButtonRadioDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__checkbox_directive__["a" /* ButtonCheckboxDirective */], __WEBPACK_IMPORTED_MODULE_2__radio_directive__["a" /* ButtonRadioDirective */]]
        })
    ], ButtonsModule);
    return ButtonsModule;
    var ButtonsModule_1;
}());



/***/ }),

/***/ "./src/app/typescripts/free/buttons/checkbox.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CHECKBOX_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonCheckboxDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// TODO: config: activeClass - Class to apply to the checked buttons
var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return ButtonCheckboxDirective; }),
    multi: true
};
/**
* Add checkbox functionality to any element
*/
var ButtonCheckboxDirective = (function () {
    function ButtonCheckboxDirective() {
        /** Truthy value, will be set to ngModel */
        this.btnCheckboxTrue = true;
        /** Falsy value, will be set to ngModel */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    // view -> model
    ButtonCheckboxDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    ButtonCheckboxDirective.prototype.ngOnInit = function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        get: function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        get: function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    ButtonCheckboxDirective.prototype.toggle = function (state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    // ControlValueAccessor
    // model -> view
    ButtonCheckboxDirective.prototype.writeValue = function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    ButtonCheckboxDirective.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    ButtonCheckboxDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonCheckboxDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ButtonCheckboxDirective.prototype, "btnCheckboxTrue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ButtonCheckboxDirective.prototype, "btnCheckboxFalse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.active'),
        __metadata("design:type", Object)
    ], ButtonCheckboxDirective.prototype, "state", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ButtonCheckboxDirective.prototype, "onClick", null);
    ButtonCheckboxDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[mdbCheckbox]', providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR] })
    ], ButtonCheckboxDirective);
    return ButtonCheckboxDirective;
}());



/***/ }),

/***/ "./src/app/typescripts/free/buttons/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buttons_module__ = __webpack_require__("./src/app/typescripts/free/buttons/buttons.module.ts");
/* unused harmony reexport ButtonsModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__radio_directive__ = __webpack_require__("./src/app/typescripts/free/buttons/radio.directive.ts");
/* unused harmony reexport ButtonRadioDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox_directive__ = __webpack_require__("./src/app/typescripts/free/buttons/checkbox.directive.ts");
/* unused harmony reexport ButtonCheckboxDirective */





/***/ }),

/***/ "./src/app/typescripts/free/buttons/radio.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RADIO_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonRadioDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return ButtonRadioDirective; }),
    multi: true
};
/**
* Create radio buttons or groups of buttons.
* A value of a selected button is bound to a variable specified via ngModel.
*/
var ButtonRadioDirective = (function () {
    function ButtonRadioDirective(el) {
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.el = el;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        get: function () {
            return this.mdbRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    // @HostBinding('class.active')
    ButtonRadioDirective.prototype.onClick = function () {
        if (this.el.nativeElement.attributes.disabled) {
            return;
        }
        if (this.uncheckable && this.mdbRadio === this.value) {
            this.value = undefined;
        }
        else {
            this.value = this.mdbRadio;
        }
        this.onTouched();
        this.onChange(this.value);
    };
    ButtonRadioDirective.prototype.ngOnInit = function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    ButtonRadioDirective.prototype.onBlur = function () {
        this.onTouched();
    };
    // ControlValueAccessor
    // model -> view
    ButtonRadioDirective.prototype.writeValue = function (value) {
        this.value = value;
    };
    ButtonRadioDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonRadioDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ButtonRadioDirective.prototype, "mdbRadio", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ButtonRadioDirective.prototype, "uncheckable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ButtonRadioDirective.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.active'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], ButtonRadioDirective.prototype, "isActive", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ButtonRadioDirective.prototype, "onClick", null);
    ButtonRadioDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[mdbRadio]', providers: [RADIO_CONTROL_VALUE_ACCESSOR] }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], ButtonRadioDirective);
    return ButtonRadioDirective;
}());



/***/ }),

/***/ "./src/app/typescripts/free/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div tabindex=\"0\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\" (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel {{ class }} {{ type }}\">\n  <div class=\"controls-top\" *ngIf=\"slides.length > 1 && !checkNavigation() && isControls\">\n    <a class=\"btn-floating\" [class.disabled]=\"activeSlide===0&&noWrap\" (click)=\"previousSlide()\"><i class=\"fa fa-chevron-left\"></i></a>\n    <a class=\"btn-floating\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\"><i class=\"fa fa-chevron-right\"></i></a>\n  </div>\n  <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && checkDots() && isControls\">\n   <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li>\n  </ol>\n  <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && !checkDots() && isControls\">\n   <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\">\n    <img class=\"img-fluid\" src=\"{{ getImg(slidez) }}\">\n   </li>\n  </ol>\n  <div class=\"carousel-inner\"><ng-content></ng-content></div>\n  <a class=\"carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\">\n  <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n  <span  class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\">\n  <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n  <span class=\"sr-only\">Next</span>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/typescripts/free/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Direction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__ = __webpack_require__("./src/app/typescripts/free/utils/ng2-bootstrap-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_linked_list_class__ = __webpack_require__("./src/app/typescripts/free/utils/linked-list.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_config__ = __webpack_require__("./src/app/typescripts/free/carousel/carousel.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Direction;
(function (Direction) {
    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
    Direction[Direction["NEXT"] = 1] = "NEXT";
    Direction[Direction["PREV"] = 2] = "PREV";
})(Direction || (Direction = {}));
/**
* Base element to create carousel
*/
var CarouselComponent = (function () {
    function CarouselComponent(config, el) {
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this._slides = new __WEBPACK_IMPORTED_MODULE_2__utils_linked_list_class__["a" /* LinkedList */]();
        this.destroyed = false;
        // protected el: ElementRef = null;
        this.el = null;
        this.animationEnd = true;
        this.isControls = true;
        this.class = '';
        this.type = '';
        this.animation = '';
        /** Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property */
        this.activeSlideChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](false);
        Object.assign(this, config);
        this.el = el;
    }
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        get: function () {
            return this._currentActiveSlide;
        },
        /** Index of currently displayed slide(started for 0) */
        set: function (index) {
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    CarouselComponent.prototype.checkNavigation = function () {
        if (this.type === 'carousel-multi-item') {
            return false;
        }
        return true;
    };
    CarouselComponent.prototype.checkDots = function () {
        if (this.type === 'carousel-thumbnails') {
            return false;
        }
        return true;
    };
    CarouselComponent.prototype.getImg = function (slide) {
        return slide.el.nativeElement.querySelector('img').src;
    };
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle automatically.
         */
        get: function () {
            return this._interval;
        },
        set: function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        get: function () {
            return !Object(__WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    CarouselComponent.prototype.ngOnDestroy = function () {
        this.destroyed = true;
    };
    /**
     * Adds new slide. If this slide is first in collection - set it as active and starts auto changing
     * @param slide
     */
    CarouselComponent.prototype.addSlide = function (slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    };
    /**
     * Removes specified slide. If this slide is active - will roll to another slide
     * @param slide
     */
    CarouselComponent.prototype.removeSlide = function (slide) {
        var _this = this;
        var remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            //  let nextSlideIndex: number = void 0;
            var nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is FALSE or to previous, if noWrap is TRUE
                // in case, if this slide in middle of collection, index of next slide is same to removed
                nextSlideIndex_1 = !this.isLast(remIndex) ? remIndex :
                    this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout(function () {
                _this._select(nextSlideIndex_1);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            var currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout(function () {
                // after removing, need to actualize index of current active slide
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }, 0);
        }
    };
    // Fixed problem while cannot swipe next / previous image while using HammerJS.
    CarouselComponent.prototype.swipe = function (action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.previousSlide();
        }
        if (action === this.SWIPE_ACTION.LEFT) {
            this.nextSlide();
        }
    };
    /**
     * Rolling to next slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    CarouselComponent.prototype.nextSlide = function (force) {
        if (force === void 0) { force = false; }
        if (this.animation === 'slide') {
            this.pause();
            var direction = Direction.NEXT;
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.NEXT, force));
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
        }
    };
    /**
     * Rolling to previous slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    CarouselComponent.prototype.previousSlide = function (force) {
        if (force === void 0) { force = false; }
        if (this.animation === 'slide') {
            this.pause();
            var direction = Direction.PREV;
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.PREV, force));
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
        }
    };
    CarouselComponent.prototype.fadeAnimation = function (goToIndex) {
        var _this = this;
        //const currentSlide = this._slides.get(this._currentActiveSlide);
        var goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            this.animationEnd = false;
            goToSlide.directionNext = true;
            setTimeout(function () {
                goToSlide.directionNext = false;
                _this.animationEnd = true;
                _this.activeSlide = goToIndex;
                _this.play();
            }, 100);
        }
    };
    CarouselComponent.prototype.slideAnimation = function (goToIndex, direction) {
        var _this = this;
        var currentSlide = this._slides.get(this._currentActiveSlide);
        var goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            if (direction === Direction.NEXT) {
                this.animationEnd = false;
                goToSlide.directionNext = true;
                setTimeout(function () {
                    goToSlide.directionLeft = true;
                    currentSlide.directionLeft = true;
                }, 100);
            }
            if (direction === Direction.PREV) {
                this.animationEnd = false;
                goToSlide.directionPrev = true;
                setTimeout(function () {
                    goToSlide.directionRight = true;
                    currentSlide.directionRight = true;
                }, 100);
            }
            setTimeout(function () {
                goToSlide.directionLeft = false;
                goToSlide.directionNext = false;
                currentSlide.directionLeft = false;
                currentSlide.directionNext = false;
                goToSlide.directionRight = false;
                goToSlide.directionPrev = false;
                currentSlide.directionRight = false;
                currentSlide.directionPrev = false;
                _this.animationEnd = true;
                _this.activeSlide = goToIndex;
                var directionName;
                if (direction === Direction.NEXT) {
                    directionName = 'Next';
                }
                else if (direction === Direction.PREV) {
                    directionName = 'Prev';
                }
                _this.activeSlideChange.emit({ 'direction': directionName, 'relatedTarget': _this.activeSlide });
                _this.play();
            }, 700);
        }
    };
    /**
     * Rolling to specified slide
     * @param index: {number} index of slide, which must be shown
     */
    CarouselComponent.prototype.selectSlide = function (index) {
        this.pause();
        if (this.animation === 'slide') {
            if (this.activeSlide < index) {
                this.slideAnimation(index, Direction.NEXT);
            }
            else if (this.activeSlide > index) {
                this.slideAnimation(index, Direction.PREV);
            }
        }
        else if (this.animation === 'fade') {
            if (index !== this.activeSlide) {
                this.fadeAnimation(index);
            }
        }
        this.play();
    };
    /**
     * Starts a auto changing of slides
     */
    CarouselComponent.prototype.play = function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * Stops a auto changing of slides
     */
    CarouselComponent.prototype.pause = function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * Finds and returns index of currently displayed slide
     */
    CarouselComponent.prototype.getCurrentSlideIndex = function () {
        return this._slides.findIndex(function (slide) { return slide.active; });
    };
    /**
     * Defines, whether the specified index is last in collection
     */
    CarouselComponent.prototype.isLast = function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * Defines next slide index, depending of direction
     * @param direction: Direction(UNKNOWN|PREV|NEXT)
     * @param force: {boolean} if TRUE - will ignore noWrap flag, else will return undefined if next slide require wrapping
  
     */
    CarouselComponent.prototype.findNextSlideIndex = function (direction, force) {
        var nextSlideIndex = 0;
        if (!force && (this.isLast(this.activeSlide) && direction !== Direction.PREV && this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled and need to going forward - select current slide, as a next
                nextSlideIndex = (!this.isLast(this._currentActiveSlide)) ? this._currentActiveSlide + 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled and need to going backward - select current slide, as a next
                nextSlideIndex = (this._currentActiveSlide > 0) ? this._currentActiveSlide - 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    };
    /**
     * Sets a slide, which specified through index, as active
     * @param index
     */
    CarouselComponent.prototype._select = function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        var currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        var nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            // this.activeSlideChange.emit(index);
        }
    };
    /**
     * Starts loop of auto changing of slides
     */
    CarouselComponent.prototype.restartTimer = function () {
        var _this = this;
        this.resetTimer();
        var interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = setInterval(function () {
                var nInterval = +_this.interval;
                if (_this.isPlaying && !isNaN(_this.interval) && nInterval > 0 && _this.slides.length) {
                    _this.nextSlide();
                }
                else {
                    _this.pause();
                }
            }, interval);
        }
    };
    /**
     * Stops loop of auto changing of slides
     */
    CarouselComponent.prototype.resetTimer = function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    };
    CarouselComponent.prototype.hasClass = function (el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        }
        else {
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        }
    };
    CarouselComponent.prototype.classAdd = function (el, className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!this.hasClass(el, className)) {
            el.className += ' ' + className;
        }
    };
    CarouselComponent.prototype.removeClass = function (el, className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (this.hasClass(el, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    };
    CarouselComponent.prototype.keyboardControl = function (event) {
        if (this.keyboard) {
            if (event.keyCode === 39) {
                this.nextSlide();
            }
            if (event.keyCode === 37) {
                this.previousSlide();
            }
        }
    };
    CarouselComponent.prototype.focus = function () {
        this.el.nativeElement.focus();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CarouselComponent.prototype, "noWrap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CarouselComponent.prototype, "noPause", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('isControls'),
        __metadata("design:type", Boolean)
    ], CarouselComponent.prototype, "isControls", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CarouselComponent.prototype, "keyboard", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('class'),
        __metadata("design:type", String)
    ], CarouselComponent.prototype, "class", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('type'),
        __metadata("design:type", String)
    ], CarouselComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('animation'),
        __metadata("design:type", String)
    ], CarouselComponent.prototype, "animation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CarouselComponent.prototype, "activeSlideChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], CarouselComponent.prototype, "activeSlide", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], CarouselComponent.prototype, "interval", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CarouselComponent.prototype, "play", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CarouselComponent.prototype, "pause", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], CarouselComponent.prototype, "keyboardControl", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CarouselComponent.prototype, "focus", null);
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'mdb-carousel',
            template: __webpack_require__("./src/app/typescripts/free/carousel/carousel.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__carousel_config__["a" /* CarouselConfig */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/typescripts/free/carousel/carousel.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CarouselConfig = (function () {
    function CarouselConfig() {
        /** Default interval of auto changing of slides */
        this.interval = 5000;
        /** Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /** Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        this.keyboard = false;
    }
    CarouselConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], CarouselConfig);
    return CarouselConfig;
}());



/***/ }),

/***/ "./src/app/typescripts/free/carousel/carousel.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_component__ = __webpack_require__("./src/app/typescripts/free/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slide_component__ = __webpack_require__("./src/app/typescripts/free/carousel/slide.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carousel_config__ = __webpack_require__("./src/app/typescripts/free/carousel/carousel.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CarouselModule = (function () {
    function CarouselModule() {
    }
    CarouselModule_1 = CarouselModule;
    CarouselModule.forRoot = function () {
        return { ngModule: CarouselModule_1, providers: [] };
    };
    CarouselModule = CarouselModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__slide_component__["a" /* SlideComponent */], __WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__slide_component__["a" /* SlideComponent */], __WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__carousel_config__["a" /* CarouselConfig */]]
        })
    ], CarouselModule);
    return CarouselModule;
    var CarouselModule_1;
}());



/***/ }),

/***/ "./src/app/typescripts/free/carousel/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel_component__ = __webpack_require__("./src/app/typescripts/free/carousel/carousel.component.ts");
/* unused harmony reexport CarouselComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_module__ = __webpack_require__("./src/app/typescripts/free/carousel/carousel.module.ts");
/* unused harmony reexport CarouselModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_component__ = __webpack_require__("./src/app/typescripts/free/carousel/slide.component.ts");
/* unused harmony reexport SlideComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_config__ = __webpack_require__("./src/app/typescripts/free/carousel/carousel.config.ts");
/* unused harmony reexport CarouselConfig */






/***/ }),

/***/ "./src/app/typescripts/free/carousel/slide.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_component__ = __webpack_require__("./src/app/typescripts/free/carousel/carousel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlideComponent = (function () {
    function SlideComponent(carousel, el) {
        this.animated = false;
        this.directionNext = false;
        this.directionLeft = false;
        this.directionPrev = false;
        this.directionRight = false;
        // public el: ElementRef = null;
        this.el = null;
        this.carousel = carousel;
        this.el = el;
    }
    /** Fires changes in container collection after adding a new slide instance */
    SlideComponent.prototype.ngOnInit = function () {
        this.carousel.addSlide(this);
    };
    /** Fires changes in container collection after removing of this slide instance */
    SlideComponent.prototype.ngOnDestroy = function () {
        this.carousel.removeSlide(this);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.active'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SlideComponent.prototype, "active", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.animated'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "animated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.carousel-item-next'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "directionNext", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.carousel-item-left'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "directionLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.carousel-item-prev'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "directionPrev", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.carousel-item-right'),
        __metadata("design:type", Object)
    ], SlideComponent.prototype, "directionRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.carousel-item')
        /** Link to Parent(container-collection) component */
        ,
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__carousel_component__["a" /* CarouselComponent */])
    ], SlideComponent.prototype, "carousel", void 0);
    SlideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'mdb-slide',
            template: "\n  <ng-content></ng-content>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__carousel_component__["a" /* CarouselComponent */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], SlideComponent);
    return SlideComponent;
}());



/***/ }),

/***/ "./src/app/typescripts/free/charts/chart.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseChartDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var BaseChartDirective = (function () {
    function BaseChartDirective(element, platformId) {
        this.labels = [];
        this.options = {
            legend: { display: false }
        };
        this.legend = false;
        this.chartClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.chartHover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.initFlag = false;
        this.isBrowser = false;
        this.element = element;
        this.isBrowser = Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* isPlatformBrowser */])(platformId);
    }
    BaseChartDirective.prototype.ngOnInit = function () {
        if (this.isBrowser) {
            this.ctx = this.element.nativeElement.getContext('2d');
            this.cvs = this.element.nativeElement;
            this.initFlag = true;
            if (this.data || this.datasets) {
                this.refresh();
            }
        }
    };
    BaseChartDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if (changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    };
    BaseChartDirective.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    BaseChartDirective.prototype.getChartBuilder = function (ctx /*, data:Array<any>, options:any*/) {
        var _this = this;
        var datasets = this.getDatasets();
        var options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = function (event, active) {
                if (active && active.length) {
                    _this.chartHover.emit({ event: event, active: active });
                }
            };
        }
        if (!options.onClick) {
            options.onClick = function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            };
        }
        var opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        return new Chart(ctx, opts);
    };
    BaseChartDirective.prototype.updateChartData = function (newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach(function (dataset, i) {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    };
    BaseChartDirective.prototype.getDatasets = function () {
        var _this = this;
        var datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = this.data.map(function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                });
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map(function (elm, index) {
                var newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    BaseChartDirective.prototype.refresh = function () {
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    };
    BaseChartDirective.defaultColors = [
        [255, 99, 132],
        [54, 162, 235],
        [255, 206, 86],
        [231, 233, 237],
        [75, 192, 192],
        [151, 187, 205],
        [220, 220, 220],
        [247, 70, 74],
        [70, 191, 189],
        [253, 180, 92],
        [148, 159, 177],
        [77, 83, 96]
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], BaseChartDirective.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], BaseChartDirective.prototype, "datasets", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], BaseChartDirective.prototype, "labels", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BaseChartDirective.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], BaseChartDirective.prototype, "chartType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], BaseChartDirective.prototype, "colors", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BaseChartDirective.prototype, "legend", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], BaseChartDirective.prototype, "chartClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], BaseChartDirective.prototype, "chartHover", void 0);
    BaseChartDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: 'canvas[mdbChart]', exportAs: 'mdb-base-chart' }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], String])
    ], BaseChartDirective);
    return BaseChartDirective;
}());

function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function () { return '#fff'; }),
        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointBorderColor: colors.map(function () { return '#fff'; }),
        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function (color) { return rgba(color, 1); }),
        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 */
function generateColors(count) {
    var colorsArr = new Array(count);
    for (var i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}


/***/ }),

/***/ "./src/app/typescripts/free/charts/chart.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart_directive__ = __webpack_require__("./src/app/typescripts/free/charts/chart.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ChartsModule = (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__chart_directive__["a" /* BaseChartDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__chart_directive__["a" /* BaseChartDirective */]
            ],
            imports: []
        })
    ], ChartsModule);
    return ChartsModule;
}());



/***/ }),

/***/ "./src/app/typescripts/free/charts/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chart_directive__ = __webpack_require__("./src/app/typescripts/free/charts/chart.directive.ts");
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart_module__ = __webpack_require__("./src/app/typescripts/free/charts/chart.module.ts");
/* unused harmony reexport namespace */




/***/ }),

/***/ "./src/app/typescripts/free/collapse/collapse.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// todo: add animations when https://github.com/angular/angular/issues/9947 solved

var CollapseDirective = (function () {
    function CollapseDirective(_el, _renderer) {
        this.showBsCollapse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.shownBsCollapse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.hideBsCollapse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.hiddenBsCollapse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /** This event fires as soon as content collapses */
        this.collapsed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /** This event fires as soon as content becomes visible */
        this.expanded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        // shown
        // @HostBinding('class.in')
        // @HostBinding('class.show')
        // @HostBinding('attr.aria-expanded')
        this.isExpanded = true;
        // hidden
        // @HostBinding('attr.aria-hidden')
        this.isCollapsed = false;
        // stale state
        // @HostBinding('class.collapse')
        this.isCollapse = true;
        // animation state
        // @HostBinding('class.collapsing')
        this.isCollapsing = false;
        this.collapsing = false;
        this.animationTime = 500;
        this._el = _el;
        this._renderer = _renderer;
    }
    CollapseDirective.prototype.ngOnInit = function () {
        this._el.nativeElement.classList.add('show');
        this._el.nativeElement.style.transition = this.animationTime + 'ms ease';
        if (!this.collapse) {
            this._el.nativeElement.classList.remove('show');
            this.hide();
        }
        else {
            this.show();
        }
        this.isExpanded = this.collapse;
    };
    CollapseDirective.prototype.ngAfterViewInit = function () {
        this.maxHeight = this._el.nativeElement.scrollHeight;
    };
    CollapseDirective.prototype.resize = function () {
        var container = this._el.nativeElement;
        this.maxHeight = this._el.nativeElement.scrollHeight;
        this._renderer.setStyle(container, 'height', this.maxHeight + 'px');
    };
    /** allows to manually toggle content visibility */
    CollapseDirective.prototype.toggle = function (event) {
        if (!this.collapsing) {
            if (this.isExpanded) {
                this.hide();
            }
            else {
                this.show();
            }
        }
        try {
            if (event.type === 'click') {
                this.maxHeight = event.target.parentElement.nextElementSibling.scrollHeight;
            }
            else if (event.type === 'mouseenter' || event.type === 'mouseleave') {
                this.maxHeight = event.target.nextElementSibling.scrollHeight;
            }
        }
        catch (error) { }
    };
    /** allows to manually hide content */
    CollapseDirective.prototype.hide = function () {
        var _this = this;
        this.collapsing = true;
        this.hideBsCollapse.emit();
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        var container = this._el.nativeElement;
        container.classList.remove('collapse');
        container.classList.remove('show');
        container.classList.add('collapsing');
        this._renderer.setStyle(container, 'height', '0px');
        setTimeout(function () {
            container.classList.remove('collapsing');
            container.classList.add('collapse');
            _this.hiddenBsCollapse.emit();
            _this.collapsing = false;
        }, this.animationTime);
        this.collapsed.emit(this);
    };
    /** allows to manually show collapsed content */
    CollapseDirective.prototype.show = function () {
        var _this = this;
        if (!this.isExpanded) {
            this.collapsing = true;
            this.showBsCollapse.emit();
            this.isCollapse = false;
            this.isCollapsing = true;
            this.isExpanded = true;
            this.isCollapsed = false;
            var container_1 = this._el.nativeElement;
            container_1.classList.remove('collapse');
            container_1.classList.add('collapsing');
            setTimeout(function () {
                _this._renderer.setStyle(container_1, 'height', _this.maxHeight + 'px');
            }, 10);
            setTimeout(function () {
                container_1.classList.remove('collapsing');
                container_1.classList.add('collapse');
                container_1.classList.add('show');
                _this.shownBsCollapse.emit();
                _this.collapsing = false;
            }, this.animationTime - (this.animationTime * 0.5));
            this.expanded.emit(this);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])('showBsCollapse'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CollapseDirective.prototype, "showBsCollapse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])('shownBsCollapse'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CollapseDirective.prototype, "shownBsCollapse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])('hideBsCollapse'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CollapseDirective.prototype, "hideBsCollapse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])('hiddenBsCollapse'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CollapseDirective.prototype, "hiddenBsCollapse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CollapseDirective.prototype, "collapsed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CollapseDirective.prototype, "expanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CollapseDirective.prototype, "collapse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], CollapseDirective.prototype, "animationTime", void 0);
    CollapseDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdbCollapse]',
            exportAs: 'bs-collapse',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */]])
    ], CollapseDirective);
    return CollapseDirective;
}());



/***/ }),

/***/ "./src/app/typescripts/free/collapse/collapse.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse_directive__ = __webpack_require__("./src/app/typescripts/free/collapse/collapse.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CollapseModule = (function () {
    function CollapseModule() {
    }
    CollapseModule_1 = CollapseModule;
    CollapseModule.forRoot = function () {
        return { ngModule: CollapseModule_1, providers: [] };
    };
    CollapseModule = CollapseModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__collapse_directive__["a" /* CollapseDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__collapse_directive__["a" /* CollapseDirective */]]
        })
    ], CollapseModule);
    return CollapseModule;
    var CollapseModule_1;
}());



/***/ }),

/***/ "./src/app/typescripts/free/collapse/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collapse_directive__ = __webpack_require__("./src/app/typescripts/free/collapse/collapse.directive.ts");
/* unused harmony reexport CollapseDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse_module__ = __webpack_require__("./src/app/typescripts/free/collapse/collapse.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__collapse_module__["a"]; });




/***/ }),

/***/ "./src/app/typescripts/free/dropdown/dropdown-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_state__ = __webpack_require__("./src/app/typescripts/free/dropdown/dropdown.state.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BsDropdownContainerComponent = (function () {
    function BsDropdownContainerComponent(_state) {
        var _this = this;
        this._state = _state;
        this.isOpen = false;
        this.display = 'block';
        this.position = 'absolute';
        this._subscription = _state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
        });
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        get: function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    BsDropdownContainerComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('style.display'),
        __metadata("design:type", Object)
    ], BsDropdownContainerComponent.prototype, "display", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('style.position'),
        __metadata("design:type", Object)
    ], BsDropdownContainerComponent.prototype, "position", void 0);
    BsDropdownContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'mdb-dropdown-container',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
            template: "\n  <div [class.dropup]=\"direction === 'up'\"\n  [class.dropdown]=\"direction === 'down'\"\n  [class.show]=\"isOpen\"\n  [class.open]=\"isOpen\">\n    <ng-content></ng-content>\n  </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dropdown_state__["a" /* BsDropdownState */]])
    ], BsDropdownContainerComponent);
    return BsDropdownContainerComponent;
}());



/***/ }),

/***/ "./src/app/typescripts/free/dropdown/dropdown-menu.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownMenuDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_state__ = __webpack_require__("./src/app/typescripts/free/dropdown/dropdown.state.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BsDropdownMenuDirective = (function () {
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    BsDropdownMenuDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdbDropdownMenu],[dropdownMenu]',
            exportAs: 'bs-dropdown-menu'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dropdown_state__["a" /* BsDropdownState */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */]])
    ], BsDropdownMenuDirective);
    return BsDropdownMenuDirective;
}());



/***/ }),

/***/ "./src/app/typescripts/free/dropdown/dropdown-toggle.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownToggleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_state__ = __webpack_require__("./src/app/typescripts/free/dropdown/dropdown.state.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BsDropdownToggleDirective = (function () {
    function BsDropdownToggleDirective(_state, _element) {
        var _this = this;
        this._state = _state;
        this._element = _element;
        this._subscriptions = [];
        this.ariaHaspopup = true;
        // @HostBinding('attr.disabled') isDisabled: boolean = null;
        this.isDisabled = null;
        // sync is open value with state
        this._subscriptions.push(this._state
            .isOpenChange.subscribe(function (value) { return _this.isOpen = value; }));
        // populate disabled state
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe(function (value) { return _this.isDisabled = value || null; }));
    }
    BsDropdownToggleDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit();
    };
    BsDropdownToggleDirective.prototype.onDocumentClick = function (event) {
        if (this._state.autoClose && event.button !== 2 &&
            !this._element.nativeElement.contains(event.target)) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.onEsc = function () {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('attr.aria-haspopup'),
        __metadata("design:type", Object)
    ], BsDropdownToggleDirective.prototype, "ariaHaspopup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('attr.disabled'),
        __metadata("design:type", Object)
    ], BsDropdownToggleDirective.prototype, "isDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('attr.aria-expanded'),
        __metadata("design:type", Boolean)
    ], BsDropdownToggleDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BsDropdownToggleDirective.prototype, "onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BsDropdownToggleDirective.prototype, "onDocumentClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('keyup.esc'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BsDropdownToggleDirective.prototype, "onEsc", null);
    BsDropdownToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdbDropdownToggle],[dropdownToggle]',
            exportAs: 'bs-dropdown-toggle'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dropdown_state__["a" /* BsDropdownState */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], BsDropdownToggleDirective);
    return BsDropdownToggleDirective;
}());



/***/ }),

/***/ "./src/app/typescripts/free/dropdown/dropdown.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** Default dropdown configuration */
var BsDropdownConfig = (function () {
    function BsDropdownConfig() {
        /** default dropdown auto closing behavior */
        this.autoClose = true;
    }
    BsDropdownConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], BsDropdownConfig);
    return BsDropdownConfig;
}());



/***/ }),

/***/ "./src/app/typescripts/free/dropdown/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_component_loader_component_loader_factory__ = __webpack_require__("./src/app/typescripts/free/utils/component-loader/component-loader.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_config__ = __webpack_require__("./src/app/typescripts/free/dropdown/dropdown.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdown_container_component__ = __webpack_require__("./src/app/typescripts/free/dropdown/dropdown-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdown_state__ = __webpack_require__("./src/app/typescripts/free/dropdown/dropdown.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_ng2_bootstrap_config__ = __webpack_require__("./src/app/typescripts/free/utils/ng2-bootstrap-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BsDropdownDirective = (function () {
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_4__dropdown_state__["a" /* BsDropdownState */], useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        get: function () {
            return this._state.autoClose;
        },
        /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         */
        set: function (value) {
            if (typeof value === 'boolean') {
                this._state.autoClose = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        get: function () { return this._isDisabled; },
        /**
         * Disables dropdown toggle and hides dropdown menu if opened
         */
        set: function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        get: function () {
            return !Object(__WEBPACK_IMPORTED_MODULE_5__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    BsDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._showInline = !this.container;
        // attach DOM listeners
        this._dropdown.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state
            .toggleClick.subscribe(function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe(function (element) {
            if (element === true) {
                _this.hide();
            }
        }));
        // attach dropdown menu inside of dropdown
        if (this._showInline) {
            this._state.dropdownMenu
                .then(function (dropdownMenu) {
                _this._inlinedMenu = dropdownMenu.viewContainer.createEmbeddedView(dropdownMenu.templateRef);
            });
        }
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        // material and dropup dropdown animation
        //const parent = this._elementRef.nativeElement.classList;
        var container = this._elementRef.nativeElement.lastElementChild;
        setTimeout(function () { container.classList.add('fadeInDropdown'); }, 200);
        if (this._showInline) {
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu
            .then(function (dropdownMenu) {
            // check direction in which dropdown should be opened
            var _dropup = _this.dropup === true ||
                (typeof _this.dropup !== 'undefined' && _this.dropup !== false);
            _this._state.direction = _dropup ? 'up' : 'down';
            var _placement = _this.placement ||
                (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            _this._dropdown
                .attach(__WEBPACK_IMPORTED_MODULE_3__dropdown_container_component__["a" /* BsDropdownContainerComponent */])
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        });
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.hide = function () {
        var _this = this;
        if (!this.isOpen) {
            return;
        }
        var parent = this._elementRef.nativeElement.classList;
        var container = this._elementRef.nativeElement.lastElementChild;
        if ((parent.value === 'dropdown open show') || (parent.value === 'btn-group dropup open show')) {
            container.classList.remove('fadeInDropdown');
            setTimeout(function () {
                if (_this._showInline) {
                    _this._isInlineOpen = false;
                    _this.onHidden.emit(true);
                }
                else {
                    _this._dropdown.hide();
                }
                _this._state.isOpenChange.emit(false);
            }, 560);
        }
        else {
            if (this._showInline) {
                this._isInlineOpen = false;
                this.onHidden.emit(true);
            }
            else {
                this._dropdown.hide();
            }
            this._state.isOpenChange.emit(false);
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.toggle = function (value) {
        if (this.isOpen || value === false) {
            return this.hide();
        }
        return this.show();
    };
    BsDropdownDirective.prototype.ngOnDestroy = function () {
        // clean up subscriptions and destroy dropdown
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._dropdown.dispose();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], BsDropdownDirective.prototype, "placement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], BsDropdownDirective.prototype, "triggers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], BsDropdownDirective.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.dropup'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], BsDropdownDirective.prototype, "dropup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], BsDropdownDirective.prototype, "autoClose", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], BsDropdownDirective.prototype, "isDisabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.open'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.show'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], BsDropdownDirective.prototype, "isOpen", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], BsDropdownDirective.prototype, "isOpenChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], BsDropdownDirective.prototype, "onShown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], BsDropdownDirective.prototype, "onHidden", void 0);
    BsDropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdbDropdown],[dropdown]',
            exportAs: 'bs-dropdown',
            providers: [__WEBPACK_IMPORTED_MODULE_4__dropdown_state__["a" /* BsDropdownState */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_1__utils_component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */],
            __WEBPACK_IMPORTED_MODULE_2__dropdown_config__["a" /* BsDropdownConfig */],
            __WEBPACK_IMPORTED_MODULE_4__dropdown_state__["a" /* BsDropdownState */]])
    ], BsDropdownDirective);
    return BsDropdownDirective;
}());



/***/ }),

/***/ "./src/app/typescripts/free/dropdown/dropdown.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_component_loader_component_loader_factory__ = __webpack_require__("./src/app/typescripts/free/utils/component-loader/component-loader.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_positioning_positioning_service__ = __webpack_require__("./src/app/typescripts/free/utils/positioning/positioning.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdown_container_component__ = __webpack_require__("./src/app/typescripts/free/dropdown/dropdown-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdown_menu_directive__ = __webpack_require__("./src/app/typescripts/free/dropdown/dropdown-menu.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdown_toggle_directive__ = __webpack_require__("./src/app/typescripts/free/dropdown/dropdown-toggle.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dropdown_config__ = __webpack_require__("./src/app/typescripts/free/dropdown/dropdown.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dropdown_directive__ = __webpack_require__("./src/app/typescripts/free/dropdown/dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dropdown_state__ = __webpack_require__("./src/app/typescripts/free/dropdown/dropdown.state.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DropdownModule = (function () {
    function DropdownModule() {
    }
    DropdownModule_1 = DropdownModule;
    DropdownModule.forRoot = function (config) {
        return {
            ngModule: DropdownModule_1, providers: [
                __WEBPACK_IMPORTED_MODULE_1__utils_component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */],
                __WEBPACK_IMPORTED_MODULE_2__utils_positioning_positioning_service__["a" /* PositioningService */],
                __WEBPACK_IMPORTED_MODULE_8__dropdown_state__["a" /* BsDropdownState */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__dropdown_config__["a" /* BsDropdownConfig */], useValue: config ? config : { autoClose: true } }
            ]
        };
    };
    ;
    DropdownModule = DropdownModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__dropdown_menu_directive__["a" /* BsDropdownMenuDirective */],
                __WEBPACK_IMPORTED_MODULE_5__dropdown_toggle_directive__["a" /* BsDropdownToggleDirective */],
                __WEBPACK_IMPORTED_MODULE_3__dropdown_container_component__["a" /* BsDropdownContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dropdown_directive__["a" /* BsDropdownDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__dropdown_menu_directive__["a" /* BsDropdownMenuDirective */],
                __WEBPACK_IMPORTED_MODULE_5__dropdown_toggle_directive__["a" /* BsDropdownToggleDirective */],
                __WEBPACK_IMPORTED_MODULE_7__dropdown_directive__["a" /* BsDropdownDirective */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__dropdown_container_component__["a" /* BsDropdownContainerComponent */]]
        })
    ], DropdownModule);
    return DropdownModule;
    var DropdownModule_1;
}());



/***/ }),

/***/ "./src/app/typescripts/free/dropdown/dropdown.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BsDropdownState = (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.isDisabledChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.toggleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    BsDropdownState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BsDropdownState);
    return BsDropdownState;
}());



/***/ }),

/***/ "./src/app/typescripts/free/dropdown/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dropdown_directive__ = __webpack_require__("./src/app/typescripts/free/dropdown/dropdown.directive.ts");
/* unused harmony reexport BsDropdownDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_menu_directive__ = __webpack_require__("./src/app/typescripts/free/dropdown/dropdown-menu.directive.ts");
/* unused harmony reexport BsDropdownMenuDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_toggle_directive__ = __webpack_require__("./src/app/typescripts/free/dropdown/dropdown-toggle.directive.ts");
/* unused harmony reexport BsDropdownToggleDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdown_container_component__ = __webpack_require__("./src/app/typescripts/free/dropdown/dropdown-container.component.ts");
/* unused harmony reexport BsDropdownContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdown_state__ = __webpack_require__("./src/app/typescripts/free/dropdown/dropdown.state.ts");
/* unused harmony reexport BsDropdownState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdown_config__ = __webpack_require__("./src/app/typescripts/free/dropdown/dropdown.config.ts");
/* unused harmony reexport BsDropdownConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dropdown_module__ = __webpack_require__("./src/app/typescripts/free/dropdown/dropdown.module.ts");
/* unused harmony reexport DropdownModule */









/***/ }),

/***/ "./src/app/typescripts/free/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDBRootModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDBBootstrapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inputs_deep_module__ = __webpack_require__("./src/app/typescripts/free/inputs/deep.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttons_buttons_module__ = __webpack_require__("./src/app/typescripts/free/buttons/buttons.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ripple_ripple_module__ = __webpack_require__("./src/app/typescripts/free/ripple/ripple.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inputs_active_module__ = __webpack_require__("./src/app/typescripts/free/inputs/active.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inputs_inputs_module__ = __webpack_require__("./src/app/typescripts/free/inputs/inputs.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbars_navbar_module__ = __webpack_require__("./src/app/typescripts/free/navbars/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_module__ = __webpack_require__("./src/app/typescripts/free/dropdown/dropdown.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__carousel_carousel_module__ = __webpack_require__("./src/app/typescripts/free/carousel/carousel.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__charts_chart_module__ = __webpack_require__("./src/app/typescripts/free/charts/chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__collapse__ = __webpack_require__("./src/app/typescripts/free/collapse/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modals_modal_module__ = __webpack_require__("./src/app/typescripts/free/modals/modal.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tooltip_tooltip_module__ = __webpack_require__("./src/app/typescripts/free/tooltip/tooltip.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__popover_popover_module__ = __webpack_require__("./src/app/typescripts/free/popover/popover.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__waves_waves_module__ = __webpack_require__("./src/app/typescripts/free/waves/waves.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__buttons___ = __webpack_require__("./src/app/typescripts/free/buttons/index.ts");
/* unused harmony reexport ButtonsModule */
/* unused harmony reexport ButtonRadioDirective */
/* unused harmony reexport ButtonCheckboxDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ripple___ = __webpack_require__("./src/app/typescripts/free/ripple/index.ts");
/* unused harmony reexport RippleModule */
/* unused harmony reexport RippleDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__waves___ = __webpack_require__("./src/app/typescripts/free/waves/index.ts");
/* unused harmony reexport WavesModule */
/* unused harmony reexport WavesDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__inputs___ = __webpack_require__("./src/app/typescripts/free/inputs/index.ts");
/* unused harmony reexport DeepModule */
/* unused harmony reexport DeepDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__inputs__ = __webpack_require__("./src/app/typescripts/free/inputs/index.ts");
/* unused harmony reexport InputsModule */
/* unused harmony reexport MdbInputDirective */
/* unused harmony reexport ActiveModule */
/* unused harmony reexport ActiveDirective */
/* unused harmony reexport InputValidateDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__navbars___ = __webpack_require__("./src/app/typescripts/free/navbars/index.ts");
/* unused harmony reexport NavbarModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dropdown___ = __webpack_require__("./src/app/typescripts/free/dropdown/index.ts");
/* unused harmony reexport BsDropdownConfig */
/* unused harmony reexport BsDropdownContainerComponent */
/* unused harmony reexport BsDropdownDirective */
/* unused harmony reexport BsDropdownMenuDirective */
/* unused harmony reexport DropdownModule */
/* unused harmony reexport BsDropdownState */
/* unused harmony reexport BsDropdownToggleDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__carousel___ = __webpack_require__("./src/app/typescripts/free/carousel/index.ts");
/* unused harmony reexport CarouselComponent */
/* unused harmony reexport CarouselConfig */
/* unused harmony reexport CarouselModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__charts___ = __webpack_require__("./src/app/typescripts/free/charts/index.ts");
/* unused harmony reexport ChartsModule */
/* unused harmony reexport BaseChartDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__collapse___ = __webpack_require__("./src/app/typescripts/free/collapse/index.ts");
/* unused harmony reexport CollapseDirective */
/* unused harmony reexport CollapseModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__modals___ = __webpack_require__("./src/app/typescripts/free/modals/index.ts");
/* unused harmony reexport ModalBackdropComponent */
/* unused harmony reexport ModalBackdropOptions */
/* unused harmony reexport ModalDirective */
/* unused harmony reexport ModalModule */
/* unused harmony reexport ModalOptions */
/* unused harmony reexport MDBModalService */
/* unused harmony reexport ModalContainerComponent */
/* unused harmony reexport MDBModalRef */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__tooltip___ = __webpack_require__("./src/app/typescripts/free/tooltip/index.ts");
/* unused harmony reexport TooltipConfig */
/* unused harmony reexport TooltipContainerComponent */
/* unused harmony reexport TooltipDirective */
/* unused harmony reexport TooltipModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__popover___ = __webpack_require__("./src/app/typescripts/free/popover/index.ts");
/* unused harmony reexport PopoverConfig */
/* unused harmony reexport PopoverContainerComponent */
/* unused harmony reexport PopoverModule */
/* unused harmony reexport PopoverDirective */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// free





























var MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__inputs_deep_module__["a" /* DeepModule */],
    __WEBPACK_IMPORTED_MODULE_2__buttons_buttons_module__["a" /* ButtonsModule */],
    __WEBPACK_IMPORTED_MODULE_3__ripple_ripple_module__["a" /* RippleModule */],
    __WEBPACK_IMPORTED_MODULE_14__waves_waves_module__["a" /* WavesModule */],
    __WEBPACK_IMPORTED_MODULE_5__inputs_inputs_module__["a" /* InputsModule */],
    __WEBPACK_IMPORTED_MODULE_4__inputs_active_module__["a" /* ActiveModule */],
    __WEBPACK_IMPORTED_MODULE_6__navbars_navbar_module__["a" /* NavbarModule */],
    __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_module__["a" /* DropdownModule */],
    __WEBPACK_IMPORTED_MODULE_8__carousel_carousel_module__["a" /* CarouselModule */],
    __WEBPACK_IMPORTED_MODULE_9__charts_chart_module__["a" /* ChartsModule */],
    __WEBPACK_IMPORTED_MODULE_10__collapse__["a" /* CollapseModule */],
    __WEBPACK_IMPORTED_MODULE_11__modals_modal_module__["a" /* ModalModule */],
    __WEBPACK_IMPORTED_MODULE_12__tooltip_tooltip_module__["a" /* TooltipModule */],
    __WEBPACK_IMPORTED_MODULE_13__popover_popover_module__["a" /* PopoverModule */],
];
var MDBRootModule = (function () {
    function MDBRootModule() {
    }
    MDBRootModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__buttons_buttons_module__["a" /* ButtonsModule */],
                __WEBPACK_IMPORTED_MODULE_1__inputs_deep_module__["a" /* DeepModule */],
                __WEBPACK_IMPORTED_MODULE_3__ripple_ripple_module__["a" /* RippleModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14__waves_waves_module__["a" /* WavesModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__inputs_inputs_module__["a" /* InputsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__inputs_active_module__["a" /* ActiveModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__navbars_navbar_module__["a" /* NavbarModule */],
                __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_module__["a" /* DropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__carousel_carousel_module__["a" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__charts_chart_module__["a" /* ChartsModule */],
                __WEBPACK_IMPORTED_MODULE_10__collapse__["a" /* CollapseModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__modals_modal_module__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__tooltip_tooltip_module__["a" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__popover_popover_module__["a" /* PopoverModule */].forRoot(),
            ],
            exports: MODULES,
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], MDBRootModule);
    return MDBRootModule;
}());

var MDBBootstrapModule = (function () {
    function MDBBootstrapModule() {
    }
    MDBBootstrapModule.forRoot = function () {
        return { ngModule: MDBRootModule };
    };
    MDBBootstrapModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({ exports: MODULES })
    ], MDBBootstrapModule);
    return MDBBootstrapModule;
}());



/***/ }),

/***/ "./src/app/typescripts/free/inputs/active.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ActiveDirective = (function () {
    function ActiveDirective(el, renderer, platformId) {
        this.renderer = renderer;
        this.isBrowser = false;
        this.isClicked = false;
        // public el: ElementRef = null;
        this.el = null;
        // public elLabel: ElementRef = null;
        this.elLabel = null;
        // public elIcon: Element = null;
        this.elIcon = null;
        this.el = el;
        this.isBrowser = Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* isPlatformBrowser */])(platformId);
    }
    ActiveDirective.prototype.onClick = function () {
        this.initComponent();
        this.isClicked = true;
    };
    ActiveDirective.prototype.Click = function () {
        this.isClicked = true;
    };
    ActiveDirective.prototype.onBlur = function () {
        this.checkValue();
        this.isClicked = false;
    };
    // ngAfterViewInit with checkValue after setTimeout is needed in situation when we have prefilled
    // forms, and label has to be lifted up.
    ActiveDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.initComponent();
        setTimeout(function () {
            _this.checkValue();
        }, 0);
    };
    ActiveDirective.prototype.ngAfterViewChecked = function () {
        this.initComponent();
        this.checkValue();
    };
    ActiveDirective.prototype.initComponent = function () {
        var inputId;
        var inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (err) { }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (err) { }
            this.elLabel = inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel != null) {
                this.renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
            if (this.elIcon) {
                this.renderer.addClass(this.elIcon, 'active');
            }
        }
    };
    ActiveDirective.prototype.checkValue = function () {
        var value = '';
        if (this.elLabel != null) {
            value = this.el.nativeElement.value || '';
            if (value === '') {
                this.renderer.removeClass(this.elLabel, 'active');
                if (this.elIcon) {
                    this.renderer.removeClass(this.elIcon, 'active');
                }
                // tslint:disable-next-line:max-line-length
            }
            if (value === '' && this.isClicked || value === '' && this.el.nativeElement.placeholder || value === '' && this.el.nativeElement.attributes.placeholder) {
                this.renderer.addClass(this.elLabel, 'active');
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", ActiveDirective)
    ], ActiveDirective.prototype, "mdbActive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('focus', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ActiveDirective.prototype, "onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ActiveDirective.prototype, "Click", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ActiveDirective.prototype, "onBlur", null);
    ActiveDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdbActive]'
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], String])
    ], ActiveDirective);
    return ActiveDirective;
}());



/***/ }),

/***/ "./src/app/typescripts/free/inputs/active.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__active_class__ = __webpack_require__("./src/app/typescripts/free/inputs/active.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_validate_directive__ = __webpack_require__("./src/app/typescripts/free/inputs/input-validate.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActiveModule = (function () {
    function ActiveModule() {
    }
    ActiveModule_1 = ActiveModule;
    ActiveModule.forRoot = function () {
        return { ngModule: ActiveModule_1, providers: [] };
    };
    ActiveModule = ActiveModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__active_class__["a" /* ActiveDirective */], __WEBPACK_IMPORTED_MODULE_2__input_validate_directive__["a" /* InputValidateDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__active_class__["a" /* ActiveDirective */], __WEBPACK_IMPORTED_MODULE_2__input_validate_directive__["a" /* InputValidateDirective */]]
        })
    ], ActiveModule);
    return ActiveModule;
    var ActiveModule_1;
}());



/***/ }),

/***/ "./src/app/typescripts/free/inputs/deep.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeepDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeepDirective = (function () {
    function DeepDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    DeepDirective.prototype.ngAfterViewInit = function () {
        this.renderer.addClass(this.el.nativeElement, 'onFocusSelect');
    };
    DeepDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdbDeepDirective]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */]])
    ], DeepDirective);
    return DeepDirective;
}());



/***/ }),

/***/ "./src/app/typescripts/free/inputs/deep.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeepModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deep_directive__ = __webpack_require__("./src/app/typescripts/free/inputs/deep.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DeepModule = (function () {
    function DeepModule() {
    }
    DeepModule_1 = DeepModule;
    DeepModule.forRoot = function () {
        return { ngModule: DeepModule_1, providers: [] };
    };
    DeepModule = DeepModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__deep_directive__["a" /* DeepDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_0__deep_directive__["a" /* DeepDirective */]]
        })
    ], DeepModule);
    return DeepModule;
    var DeepModule_1;
}());



/***/ }),

/***/ "./src/app/typescripts/free/inputs/equal-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidatorDirective = (function () {
    function EqualValidatorDirective(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidatorDirective_1 = EqualValidatorDirective;
    Object.defineProperty(EqualValidatorDirective.prototype, "isReverse", {
        get: function () {
            if (!this.reverse) {
                return false;
            }
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidatorDirective.prototype.validate = function (c) {
        var setToNullValue = null;
        // self value (e.g. retype password)
        var v = c.value;
        // control value (e.g. password)
        // const e: any = c.root.get(this.validateEqual);
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value) {
            return { validateEqual: false };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        // return null;
        return setToNullValue;
    };
    EqualValidatorDirective = EqualValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdb-validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return EqualValidatorDirective_1; }), multi: true }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Attribute */])('validateEqual')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Attribute */])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidatorDirective);
    return EqualValidatorDirective;
    var EqualValidatorDirective_1;
}());



/***/ }),

/***/ "./src/app/typescripts/free/inputs/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__active_module__ = __webpack_require__("./src/app/typescripts/free/inputs/active.module.ts");
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__active_class__ = __webpack_require__("./src/app/typescripts/free/inputs/active.class.ts");
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equal_validator_directive__ = __webpack_require__("./src/app/typescripts/free/inputs/equal-validator.directive.ts");
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_validate_directive__ = __webpack_require__("./src/app/typescripts/free/inputs/input-validate.directive.ts");
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdb_input_directive__ = __webpack_require__("./src/app/typescripts/free/inputs/mdb-input.directive.ts");
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deep_module__ = __webpack_require__("./src/app/typescripts/free/inputs/deep.module.ts");
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__deep_directive__ = __webpack_require__("./src/app/typescripts/free/inputs/deep.directive.ts");
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inputs_module__ = __webpack_require__("./src/app/typescripts/free/inputs/inputs.module.ts");
/* unused harmony reexport namespace */










/***/ }),

/***/ "./src/app/typescripts/free/inputs/input-validate.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputValidateDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputValidateDirective = (function () {
    function InputValidateDirective(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.value = '';
        this.minLength = '0';
        this.maxLength = '524288';
    }
    InputValidateDirective.prototype.ngOnInit = function () {
        // Inititalise a new <span> wrong/right elements and render it below the host component.
        this.wrongTextContainer = this._renderer.createElement(this._elRef.nativeElement.parentElement, 'span');
        this._renderer.setElementClass(this.wrongTextContainer, 'inputVal', true);
        this._renderer.setElementClass(this.wrongTextContainer, 'text-danger', true);
        var textWrong = this._elRef.nativeElement.getAttribute('data-error');
        this.wrongTextContainer.innerHTML = (textWrong ? textWrong : 'wrong');
        this._renderer.setElementStyle(this.wrongTextContainer, 'visibility', 'hidden');
        this.rightTextContainer = this._renderer.createElement(this._elRef.nativeElement.parentElement, 'span');
        this._renderer.setElementClass(this.rightTextContainer, 'inputVal', true);
        this._renderer.setElementClass(this.rightTextContainer, 'text-success', true);
        var textSuccess = this._elRef.nativeElement.getAttribute('data-success');
        this.rightTextContainer.innerHTML = (textSuccess ? textSuccess : 'success');
        this._renderer.setElementStyle(this.rightTextContainer, 'visibility', 'hidden');
    };
    InputValidateDirective.prototype.onBlur = function () {
        var inputType = this._elRef.nativeElement.type;
        if (inputType === 'email') {
            if (this.customRegex) {
                var re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    /*tslint:disable:max-line-length*/
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                }
            }
            else if (!this.customRegex) {
                /*tslint:disable:max-line-length*/
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                }
            }
        }
        else if (inputType === 'password') {
            if (this.customRegex) {
                var re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    // tslint:disable-next-line:max-line-length
                }
                else if (this._elRef.nativeElement.value.match(re) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                    // tslint:disable-next-line:max-line-length
                }
                else if (!this._elRef.nativeElement.value.match(re) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
            else if (!this.customRegex) {
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    // tslint:disable-next-line:max-line-length
                }
                else if (this._elRef.nativeElement.value.match(/^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]/g) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                    // tslint:disable-next-line:max-line-length
                }
                else if (!this._elRef.nativeElement.value.match(/^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]/g) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
        else if (inputType === 'text') {
            if (this.customRegex) {
                var re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    // tslint:disable-next-line:max-line-length
                }
                else if (this._elRef.nativeElement.value.match(re) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                    // tslint:disable-next-line:max-line-length
                }
                else if (!this._elRef.nativeElement.value.match(re) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
            else if (!this.customRegex) {
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    // tslint:disable-next-line:max-line-length
                }
                else if (this._elRef.nativeElement.value.match(/^[a-zA-Z0-9]+$/g) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                    // tslint:disable-next-line:max-line-length
                }
                else if (!this._elRef.nativeElement.value.match(/^[a-zA-Z0-9]+$/g) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
        else if (inputType === 'submit') {
            for (var i = 0; i < this._elRef.nativeElement.parentElement.length; i++) {
                if (this._elRef.nativeElement.parentElement[i].value == null || this._elRef.nativeElement.parentElement[i].value === '') {
                    this._renderer.setElementClass(this._elRef.nativeElement.parentElement[i], 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement.parentElement[i], 'counter-success', false);
                }
                else if (!this._elRef.nativeElement.parentElement[i].value == null) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
        else if (inputType === 'tel') {
            if (this.customRegex) {
                var re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length >= 8 && this._elRef.nativeElement.value.length <= 20) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length > 20) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
            else if (!this.customRegex) {
                var re = /^(1[ \-\+]{0,3}|\+1[ -\+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-\.]{0,3}[0-9]{2,4}))?([ \-\.][0-9])?([ \-\.]{0,3}[0-9]{2,4}){2,3}$/;
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length >= 8 && this._elRef.nativeElement.value.length <= 20) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length > 20) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
        else if (inputType === 'number') {
            if (this.customRegex) {
                var re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length > 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length < 1) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
            else if (!this.customRegex) {
                var re = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?$/;
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length > 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length < 1) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], InputValidateDirective.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('minLength'),
        __metadata("design:type", String)
    ], InputValidateDirective.prototype, "minLength", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('maxLength'),
        __metadata("design:type", String)
    ], InputValidateDirective.prototype, "maxLength", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('customRegex'),
        __metadata("design:type", Object)
    ], InputValidateDirective.prototype, "customRegex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InputValidateDirective.prototype, "onBlur", null);
    InputValidateDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdbInputValidate]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer */]])
    ], InputValidateDirective);
    return InputValidateDirective;
}());



/***/ }),

/***/ "./src/app/typescripts/free/inputs/inputs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdb_input_directive__ = __webpack_require__("./src/app/typescripts/free/inputs/mdb-input.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equal_validator_directive__ = __webpack_require__("./src/app/typescripts/free/inputs/equal-validator.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InputsModule = (function () {
    function InputsModule() {
    }
    InputsModule_1 = InputsModule;
    InputsModule.forRoot = function () {
        return { ngModule: InputsModule_1, providers: [] };
    };
    InputsModule = InputsModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__mdb_input_directive__["a" /* MdbInputDirective */], __WEBPACK_IMPORTED_MODULE_2__equal_validator_directive__["a" /* EqualValidatorDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_0__mdb_input_directive__["a" /* MdbInputDirective */], __WEBPACK_IMPORTED_MODULE_2__equal_validator_directive__["a" /* EqualValidatorDirective */]]
        })
    ], InputsModule);
    return InputsModule;
    var InputsModule_1;
}());



/***/ }),

/***/ "./src/app/typescripts/free/inputs/mdb-input.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdbInputDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MdbInputDirective = (function () {
    function MdbInputDirective(el, renderer, platformId) {
        this.renderer = renderer;
        this.minLength = '0';
        this.maxLength = '524288';
        this.mdbValidate = true;
        this.focusCheckbox = true;
        this.focusRadio = true;
        this.isBrowser = false;
        this.isClicked = false;
        this.el = null;
        this.elLabel = null;
        this.elIcon = null;
        this.el = el;
        this.isBrowser = Object(__WEBPACK_IMPORTED_MODULE_0__angular_common__["j" /* isPlatformBrowser */])(platformId);
    }
    MdbInputDirective.prototype.onfocus = function () {
        this.renderer.addClass(this.elLabel, 'active');
        this.isClicked = true;
    };
    MdbInputDirective.prototype.onBlur = function () {
        if (this.el.nativeElement.value === '') {
            this.renderer.removeClass(this.elLabel, 'active');
        }
        this.isClicked = false;
        // Validation:
        if (this.mdbValidate) {
            var inputType = this.el.nativeElement.type;
            if (inputType === 'email') {
                if (this.customRegex) {
                    var re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
                    if (this.el.nativeElement.length === 0) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        /*tslint:disable:max-line-length*/
                    }
                    else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.addClass(this.el.nativeElement, 'counter-success');
                    }
                    else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                    }
                }
                else if (!this.customRegex) {
                    /*tslint:disable:max-line-length*/
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (this.el.nativeElement.length === 0) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                    }
                    else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.addClass(this.el.nativeElement, 'counter-success');
                    }
                    else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                    }
                }
            }
            else if (inputType === 'password') {
                if (this.customRegex) {
                    var re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
                    if (this.el.nativeElement.length === 0) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        // tslint:disable-next-line:max-line-length
                    }
                    else if (this.el.nativeElement.value.match(re) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        // tslint:disable-next-line:max-line-length
                    }
                    else if (!this.el.nativeElement.value.match(re) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                        this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                    }
                }
                else if (!this.customRegex) {
                    if (this.el.nativeElement.length === 0) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        // tslint:disable-next-line:max-line-length
                    }
                    else if (this.el.nativeElement.value.match(/^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]/g) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        // tslint:disable-next-line:max-line-length
                    }
                    else if (!this.el.nativeElement.value.match(/^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]/g) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                        this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                    }
                }
            }
            else if (inputType === 'text') {
                if (this.customRegex) {
                    var re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
                    if (this.el.nativeElement.length === 0) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        // tslint:disable-next-line:max-line-length
                    }
                    else if (this.el.nativeElement.value.match(re) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        // tslint:disable-next-line:max-line-length
                    }
                    else if (!this.el.nativeElement.value.match(re) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                        this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                    }
                }
                else if (!this.customRegex) {
                    if (this.el.nativeElement.length === 0) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        // tslint:disable-next-line:max-line-length
                    }
                    else if (this.el.nativeElement.value.match(/^[a-zA-Z0-9]+$/g) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        // tslint:disable-next-line:max-line-length
                    }
                    else if (!this.el.nativeElement.value.match(/^[a-zA-Z0-9]+$/g) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                        this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                    }
                }
            }
            else if (inputType === 'submit') {
                for (var i = 0; i < this.el.nativeElement.parentElement.length; i++) {
                    if (this.el.nativeElement.parentElement[i].value == null || this.el.nativeElement.parentElement[i].value === '') {
                        this.renderer.addClass(this.el.nativeElement.parentElement[i], 'counter-danger');
                        this.renderer.removeClass(this.el.nativeElement.parentElement[i], 'counter-success');
                    }
                    else if (!this.el.nativeElement.parentElement[i].value == null) {
                        this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                    }
                }
            }
            else if (inputType === 'tel') {
                if (this.customRegex) {
                    var re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
                    if (this.el.nativeElement.length === 0) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                    }
                    else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length >= 8 && this.el.nativeElement.value.length <= 20) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.addClass(this.el.nativeElement, 'counter-success');
                    }
                    else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length > 20) {
                        this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                    }
                }
                else if (!this.customRegex) {
                    var re = /^(1[ \-\+]{0,3}|\+1[ -\+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-\.]{0,3}[0-9]{2,4}))?([ \-\.][0-9])?([ \-\.]{0,3}[0-9]{2,4}){2,3}$/;
                    if (this.el.nativeElement.length === 0) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                    }
                    else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length >= 8 && this.el.nativeElement.value.length <= 20) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.addClass(this.el.nativeElement, 'counter-success');
                    }
                    else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length > 20) {
                        this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                    }
                }
            }
            else if (inputType === 'number') {
                if (this.customRegex) {
                    var re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
                    if (this.el.nativeElement.length === 0) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                    }
                    else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length > 0) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.addClass(this.el.nativeElement, 'counter-success');
                    }
                    else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length < 1) {
                        this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                    }
                }
                else if (!this.customRegex) {
                    var re = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?$/;
                    if (this.el.nativeElement.length === 0) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                    }
                    else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length > 0) {
                        this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.addClass(this.el.nativeElement, 'counter-success');
                    }
                    else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length < 1) {
                        this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                        this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                    }
                }
            }
        }
    };
    MdbInputDirective.prototype.onchange = function () {
        this.checkValue();
    };
    MdbInputDirective.prototype.ngOnInit = function () {
        if (this.mdbValidate) {
            // Inititalise a new <span> wrong/right elements and render it below the host component.
            // this.wrongTextContainer = this.renderer.createElement(this.el.nativeElement.parentElement, 'span');
            this.wrongTextContainer = this.renderer.createElement('span');
            this.renderer.addClass(this.wrongTextContainer, 'inputVal');
            this.renderer.addClass(this.wrongTextContainer, 'text-danger');
            this.renderer.appendChild(this.el.nativeElement.parentElement, this.wrongTextContainer);
            var textWrong = this.el.nativeElement.getAttribute('data-error');
            this.wrongTextContainer.innerHTML = (textWrong ? textWrong : 'wrong');
            this.renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            // this.rightTextContainer = this.renderer.createElement(this.el.nativeElement.parentElement, 'span');
            this.rightTextContainer = this.renderer.createElement('span');
            this.renderer.addClass(this.rightTextContainer, 'inputVal');
            this.renderer.addClass(this.rightTextContainer, 'text-success');
            this.renderer.appendChild(this.el.nativeElement.parentElement, this.rightTextContainer);
            var textSuccess = this.el.nativeElement.getAttribute('data-success');
            this.rightTextContainer.innerHTML = (textSuccess ? textSuccess : 'success');
            this.renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
        }
    };
    MdbInputDirective.prototype.ngAfterViewInit = function () {
        var type = this.el.nativeElement.type;
        if (this.focusCheckbox && type === 'checkbox') {
            this.renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
        if (this.focusRadio && type === 'radio') {
            this.renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
    };
    MdbInputDirective.prototype.ngAfterViewChecked = function () {
        this.initComponent();
        this.checkValue();
        // tslint:disable-next-line:max-line-length
        if (this.el.nativeElement.tagName === 'MDB-COMPLETER' && this.el.nativeElement.getAttribute('ng-reflect-model') == null && !this.isClicked) {
            this.renderer.removeClass(this.elLabel, 'active');
        }
    };
    MdbInputDirective.prototype.initComponent = function () {
        var inputId;
        var inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (err) { }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (err) { }
            this.elLabel = inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel && this.el.nativeElement.value !== '') {
                this.renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
            if (this.elIcon) {
                this.renderer.addClass(this.elIcon, 'active');
            }
        }
    };
    MdbInputDirective.prototype.checkValue = function () {
        var value = '';
        if (this.elLabel != null) {
            value = this.el.nativeElement.value || '';
            if (value === '') {
                this.renderer.removeClass(this.elLabel, 'active');
                if (this.elIcon) {
                    this.renderer.removeClass(this.elIcon, 'active');
                }
                // tslint:disable-next-line:max-line-length
            }
            if (value === '' && this.isClicked ||
                value === '' && this.el.nativeElement.placeholder ||
                value === '' && this.el.nativeElement.attributes.placeholder) {
                this.renderer.addClass(this.elLabel, 'active');
            }
            if (this.el.nativeElement.getAttribute('ng-reflect-model') != null) {
                if (this.el.nativeElement.tagName === 'MDB-COMPLETER' && this.el.nativeElement.getAttribute('ng-reflect-model').length !== 0) {
                    this.renderer.addClass(this.elLabel, 'active');
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('mdbInputDirective'),
        __metadata("design:type", MdbInputDirective)
    ], MdbInputDirective.prototype, "mdbInputDirective", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('placeholder'),
        __metadata("design:type", String)
    ], MdbInputDirective.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('minLength'),
        __metadata("design:type", String)
    ], MdbInputDirective.prototype, "minLength", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('maxLength'),
        __metadata("design:type", String)
    ], MdbInputDirective.prototype, "maxLength", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('customRegex'),
        __metadata("design:type", Object)
    ], MdbInputDirective.prototype, "customRegex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('mdbValidate'),
        __metadata("design:type", Boolean)
    ], MdbInputDirective.prototype, "mdbValidate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('focusCheckbox'),
        __metadata("design:type", Boolean)
    ], MdbInputDirective.prototype, "focusCheckbox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('focusRadio'),
        __metadata("design:type", Boolean)
    ], MdbInputDirective.prototype, "focusRadio", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* HostListener */])('focus'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MdbInputDirective.prototype, "onfocus", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* HostListener */])('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MdbInputDirective.prototype, "onBlur", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* HostListener */])('change'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MdbInputDirective.prototype, "onchange", null);
    MdbInputDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */])({
            selector: '[mdbInputDirective]'
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_core__["T" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Z" /* Renderer2 */], String])
    ], MdbInputDirective);
    return MdbInputDirective;
}());



/***/ }),

/***/ "./src/app/typescripts/free/modals/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modalBackdrop_component__ = __webpack_require__("./src/app/typescripts/free/modals/modalBackdrop.component.ts");
/* unused harmony reexport ModalBackdropComponent */
/* unused harmony reexport ModalBackdropOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_options__ = __webpack_require__("./src/app/typescripts/free/modals/modal.options.ts");
/* unused harmony reexport ModalOptions */
/* unused harmony reexport MDBModalRef */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_directive__ = __webpack_require__("./src/app/typescripts/free/modals/modal.directive.ts");
/* unused harmony reexport ModalDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_module__ = __webpack_require__("./src/app/typescripts/free/modals/modal.module.ts");
/* unused harmony reexport ModalModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_service__ = __webpack_require__("./src/app/typescripts/free/modals/modal.service.ts");
/* unused harmony reexport MDBModalService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modalContainer_component__ = __webpack_require__("./src/app/typescripts/free/modals/modalContainer.component.ts");
/* unused harmony reexport ModalContainerComponent */








/***/ }),

/***/ "./src/app/typescripts/free/modals/modal.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__ = __webpack_require__("./src/app/typescripts/free/utils/facade/browser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__ = __webpack_require__("./src/app/typescripts/free/utils/ng2-bootstrap-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__ = __webpack_require__("./src/app/typescripts/free/utils/utils.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modalBackdrop_component__ = __webpack_require__("./src/app/typescripts/free/modals/modalBackdrop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_options__ = __webpack_require__("./src/app/typescripts/free/modals/modal.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_component_loader_component_loader_factory__ = __webpack_require__("./src/app/typescripts/free/utils/component-loader/component-loader.factory.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TRANSITION_DURATION = 300;
var BACKDROP_TRANSITION_DURATION = 150;
/** Mark any code with directive to show it's content in modal */
var ModalDirective = (function () {
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        /** This event fires immediately when the `show` instance method is called. */
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /** This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete) */
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /** This event is fired immediately when the hide instance method has been called. */
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /** This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete). */
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        // seems like an Options
        this.isAnimated = true;
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this._element = _element;
        this._renderer = _renderer;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        // public get config(): ModalOptions {
        get: function () {
            return this._config;
        },
        /** allows to set modal configuration via element property */
        set: function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    ModalDirective.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = __WEBPACK_IMPORTED_MODULE_5__modal_options__["b" /* DISMISS_REASONS */].BACKRDOP;
        this.hide(event);
    };
    // todo: consider preventing default and stopping propagation
    ModalDirective.prototype.onEsc = function () {
        if (this.config.keyboard) {
            this.dismissReason = __WEBPACK_IMPORTED_MODULE_5__modal_options__["b" /* DISMISS_REASONS */].ESC;
            this.hide();
        }
    };
    ModalDirective.prototype.ngOnDestroy = function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    ModalDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._config = this._config || this.getConfig();
        setTimeout(function () {
            if (_this._config.show) {
                _this.show();
            }
        }, 0);
    };
    /* Public methods */
    /** Allows to manually toggle modal visibility */
    ModalDirective.prototype.toggle = function () {
        return this._isShown ? this.hide() : this.show();
    };
    /** Allows to manually open modal */
    ModalDirective.prototype.show = function () {
        var _this = this;
        this.dismissReason = null;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body) {
            if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.classList.contains(__WEBPACK_IMPORTED_MODULE_5__modal_options__["a" /* ClassName */].OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body, __WEBPACK_IMPORTED_MODULE_5__modal_options__["a" /* ClassName */].OPEN);
            }
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    /** Allows to manually close modal */
    ModalDirective.prototype.hide = function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options__["a" /* ClassName */].IN);
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])()) {
            this._renderer.removeClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options__["a" /* ClassName */].SHOW);
        }
        if (this.isAnimated) {
            this.timerHideModal = setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /** Private methods @internal */
    ModalDirective.prototype.getConfig = function (config) {
        return Object.assign({}, __WEBPACK_IMPORTED_MODULE_5__modal_options__["f" /* modalConfigDefaults */], config);
    };
    /**
     *  Show dialog
     *  @internal
     */
    ModalDirective.prototype.showElement = function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            (this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE)) {
            // don't move modals dom position
            if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body) {
                __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this.isAnimated) {
            __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["a" /* Utils */].reflow(this._element.nativeElement);
        }
        this._renderer.addClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options__["a" /* ClassName */].IN);
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])()) {
            this._renderer.addClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options__["a" /* ClassName */].SHOW);
        }
        var transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        if (this.isAnimated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /** @internal */
    ModalDirective.prototype.hideModal = function () {
        var _this = this;
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (!_this.isNested) {
                if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body) {
                    _this._renderer.removeClass(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body, __WEBPACK_IMPORTED_MODULE_5__modal_options__["a" /* ClassName */].OPEN);
                }
                _this.resetScrollbar();
            }
            _this.resetAdjustments();
            _this.focusOtherModal();
            _this.onHidden.emit(_this);
        });
    };
    // todo: original show was calling a callback when done, but we can use promise
    /** @internal */
    ModalDirective.prototype.showBackdrop = function (callback) {
        var _this = this;
        if (this._isShown && this.config.backdrop && (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(__WEBPACK_IMPORTED_MODULE_4__modalBackdrop_component__["a" /* ModalBackdropComponent */])
                .to('body')
                .show({ isAnimated: this.isAnimated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this.isAnimated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            var callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    /** @internal */
    ModalDirective.prototype.removeBackdrop = function () {
        this._backdrop.hide();
    };
    ModalDirective.prototype.focusOtherModal = function () {
        var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[mdbModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        //  this._renderer.invokeElementMethod(otherOpenedModals[otherOpenedModals.length - 1], 'focus');
        otherOpenedModals[otherOpenedModals.length - 1].nativeElement.focus();
    };
    /** @internal */
    ModalDirective.prototype.resetAdjustments = function () {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /** Scroll bar tricks */
    /** @internal */
    ModalDirective.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.clientWidth < __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* window */].innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    ModalDirective.prototype.setScrollbar = function () {
        if (!__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */]) {
            return;
        }
        this.originalBodyPadding = parseInt(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* window */].getComputedStyle(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body).getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.style.paddingRight = this.originalBodyPadding + this.scrollbarWidth + "px";
        }
    };
    ModalDirective.prototype.resetScrollbar = function () {
        __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.style.paddingRight = this.originalBodyPadding;
    };
    // thx d.walsh
    ModalDirective.prototype.getScrollbarWidth = function () {
        var scrollDiv = this._renderer.createElement('div', void 0);
        this._renderer.appendChild(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body, scrollDiv);
        scrollDiv.className = __WEBPACK_IMPORTED_MODULE_5__modal_options__["a" /* ClassName */].SCROLLBAR_MEASURER;
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* document */].body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])()
        // public set config(conf: ModalOptions) {
        ,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ModalDirective.prototype, "config", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], ModalDirective.prototype, "onShow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], ModalDirective.prototype, "onShown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], ModalDirective.prototype, "onHide", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], ModalDirective.prototype, "onHidden", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ModalDirective.prototype, "onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('keydown.esc'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ModalDirective.prototype, "onEsc", null);
    ModalDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdbModal]',
            exportAs: 'mdb-modal'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_6__utils_component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */]])
    ], ModalDirective);
    return ModalDirective;
}());



/***/ }),

/***/ "./src/app/typescripts/free/modals/modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modalBackdrop_component__ = __webpack_require__("./src/app/typescripts/free/modals/modalBackdrop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_directive__ = __webpack_require__("./src/app/typescripts/free/modals/modal.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_positioning_positioning_service__ = __webpack_require__("./src/app/typescripts/free/utils/positioning/positioning.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_component_loader_component_loader_factory__ = __webpack_require__("./src/app/typescripts/free/utils/component-loader/component-loader.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modalContainer_component__ = __webpack_require__("./src/app/typescripts/free/modals/modalContainer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_service__ = __webpack_require__("./src/app/typescripts/free/modals/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ModalModule = (function () {
    function ModalModule() {
    }
    ModalModule_1 = ModalModule;
    ModalModule.forRoot = function () {
        return { ngModule: ModalModule_1, providers: [__WEBPACK_IMPORTED_MODULE_6__modal_service__["a" /* MDBModalService */], __WEBPACK_IMPORTED_MODULE_4__utils_component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_3__utils_positioning_positioning_service__["a" /* PositioningService */]] };
    };
    ModalModule = ModalModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__modalBackdrop_component__["a" /* ModalBackdropComponent */], __WEBPACK_IMPORTED_MODULE_2__modal_directive__["a" /* ModalDirective */], __WEBPACK_IMPORTED_MODULE_5__modalContainer_component__["a" /* ModalContainerComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__modalBackdrop_component__["a" /* ModalBackdropComponent */], __WEBPACK_IMPORTED_MODULE_2__modal_directive__["a" /* ModalDirective */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_1__modalBackdrop_component__["a" /* ModalBackdropComponent */], __WEBPACK_IMPORTED_MODULE_5__modalContainer_component__["a" /* ModalContainerComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], ModalModule);
    return ModalModule;
    var ModalModule_1;
}());



/***/ }),

/***/ "./src/app/typescripts/free/modals/modal.options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MDBModalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return modalConfigDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassName; });
/* unused harmony export Selector */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TransitionDurations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DISMISS_REASONS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModalOptions = (function () {
    function ModalOptions() {
    }
    ModalOptions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], ModalOptions);
    return ModalOptions;
}());

var MDBModalRef = (function () {
    function MDBModalRef() {
    }
    /**
     * Hides the modal
     */
    MDBModalRef.prototype.hide = function () { };
    MDBModalRef = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], MDBModalRef);
    return MDBModalRef;
}());

var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true
};
var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    SHOW: 'show' // bs4
};
var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
var TransitionDurations = {
    MODAL: 300,
    BACKDROP: 150
};
var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};


/***/ }),

/***/ "./src/app/typescripts/free/modals/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDBModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_component_loader_component_loader_factory__ = __webpack_require__("./src/app/typescripts/free/utils/component-loader/component-loader.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modalBackdrop_component__ = __webpack_require__("./src/app/typescripts/free/modals/modalBackdrop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modalContainer_component__ = __webpack_require__("./src/app/typescripts/free/modals/modalContainer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_options__ = __webpack_require__("./src/app/typescripts/free/modals/modal.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modalService_config__ = __webpack_require__("./src/app/typescripts/free/modals/modalService.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MDBModalService = (function () {
    // public constructor(private clf: ComponentLoaderFactory) {
    function MDBModalService(clf, el, v, r) {
        this.clf = clf;
        this.el = el;
        this.v = v;
        this.r = r;
        // constructor props
        this.config = __WEBPACK_IMPORTED_MODULE_4__modal_options__["f" /* modalConfigDefaults */];
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        // private lastDismissReason = '';
        this.lastDismissReason = '';
        this.loaders = [];
        //   this._backdropLoader = this.clf.createLoader<ModalBackdropComponent>(null, null, null);
        this._backdropLoader = this.clf.createLoader(this.el, this.v, this.r);
        __WEBPACK_IMPORTED_MODULE_5__modalService_config__["a" /* msConfig */].serviceInstance = this;
    }
    /** Shows a modal */
    MDBModalService.prototype.show = function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, __WEBPACK_IMPORTED_MODULE_4__modal_options__["f" /* modalConfigDefaults */], config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    MDBModalService.prototype.hide = function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }, this.config.animated ? __WEBPACK_IMPORTED_MODULE_4__modal_options__["e" /* TransitionDurations */].BACKDROP : 0);
    };
    MDBModalService.prototype._showBackdrop = function () {
        var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(__WEBPACK_IMPORTED_MODULE_2__modalBackdrop_component__["a" /* ModalBackdropComponent */])
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    };
    MDBModalService.prototype._hideBackdrop = function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        var duration = this.config.animated ? __WEBPACK_IMPORTED_MODULE_4__modal_options__["e" /* TransitionDurations */].BACKDROP : 0;
        setTimeout(function () { return _this.removeBackdrop(); }, duration);
    };
    MDBModalService.prototype._showModal = function (content) {
        var modalLoader = this.loaders[this.loaders.length - 1];
        var mdbModalRef = new __WEBPACK_IMPORTED_MODULE_4__modal_options__["c" /* MDBModalRef */]();
        var modalContainerRef = modalLoader
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_4__modal_options__["d" /* ModalOptions */], useValue: this.config })
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_4__modal_options__["c" /* MDBModalRef */], useValue: mdbModalRef })
            .attach(__WEBPACK_IMPORTED_MODULE_3__modalContainer_component__["a" /* ModalContainerComponent */])
            .to('body')
            .show({ content: content, isAnimated: this.config.animated });
        modalContainerRef.instance.level = this.getModalsCount();
        mdbModalRef.hide = function () {
            modalContainerRef.instance.hide();
        };
        mdbModalRef.content = modalLoader.getInnerComponent() || null;
        return mdbModalRef;
    };
    MDBModalService.prototype._hideModal = function (level) {
        var modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    MDBModalService.prototype.getModalsCount = function () {
        return this.modalsCount;
    };
    MDBModalService.prototype.setDismissReason = function (reason) {
        this.lastDismissReason = reason;
    };
    MDBModalService.prototype.removeBackdrop = function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
    /** Scroll bar tricks */
    /** @internal */
    MDBModalService.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    MDBModalService.prototype.setScrollbar = function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = this.originalBodyPadding + this.scrollbarWidth + "px";
        }
    };
    MDBModalService.prototype.resetScrollbar = function () {
        document.body.style.paddingRight = this.originalBodyPadding + 'px';
    };
    // thx d.walsh
    MDBModalService.prototype.getScrollbarWidth = function () {
        var scrollDiv = document.createElement('div');
        scrollDiv.className = __WEBPACK_IMPORTED_MODULE_4__modal_options__["a" /* ClassName */].SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    MDBModalService.prototype._createLoaders = function () {
        // const loader = this.clf.createLoader<ModalContainerComponent>(null, null, null);
        var loader = this.clf.createLoader(this.el, this.v, this.r);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    };
    MDBModalService.prototype.removeLoaders = function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach(function (loader, i) {
            loader.instance.level = i + 1;
        });
    };
    MDBModalService.prototype.copyEvent = function (from, to) {
        var _this = this;
        from.subscribe(function () {
            to.emit(_this.lastDismissReason);
        });
    };
    MDBModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */]])
    ], MDBModalService);
    return MDBModalService;
}());



/***/ }),

/***/ "./src/app/typescripts/free/modals/modalBackdrop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ModalBackdropOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBackdropComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_options__ = __webpack_require__("./src/app/typescripts/free/modals/modal.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__ = __webpack_require__("./src/app/typescripts/free/utils/ng2-bootstrap-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__ = __webpack_require__("./src/app/typescripts/free/utils/utils.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalBackdropOptions = (function () {
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());

/** This component will be added as background layout for modals if enabled */
var ModalBackdropComponent = (function () {
    function ModalBackdropComponent(element, renderer) {
        this.classNameBackDrop = true;
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: function () {
            return this._isAnimated;
        },
        set: function (value) {
            this._isAnimated = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
            this.renderer.setElementClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options__["a" /* ClassName */].IN, value);
            if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])()) {
                this.renderer.setElementClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options__["a" /* ClassName */].SHOW, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ModalBackdropComponent.prototype.ngOnInit = function () {
        if (this.isAnimated) {
            this.renderer.setElementClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options__["a" /* ClassName */].FADE, this.isAnimated);
            __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["a" /* Utils */].reflow(this.element.nativeElement);
        }
        this.isShown = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.modal-backdrop'),
        __metadata("design:type", Object)
    ], ModalBackdropComponent.prototype, "classNameBackDrop", void 0);
    ModalBackdropComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'mdb-modal-backdrop',
            template: "",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer */]])
    ], ModalBackdropComponent);
    return ModalBackdropComponent;
}());



/***/ }),

/***/ "./src/app/typescripts/free/modals/modalContainer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_options__ = __webpack_require__("./src/app/typescripts/free/modals/modal.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__ = __webpack_require__("./src/app/typescripts/free/utils/ng2-bootstrap-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modalService_config__ = __webpack_require__("./src/app/typescripts/free/modals/modalService.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalContainerComponent = (function () {
    function ModalContainerComponent(options, _element, _renderer) {
        this._renderer = _renderer;
        this.tabindex = -1;
        this.role = 'dialog';
        this.modla = true;
        this.isShown = false;
        this.isModalHiding = false;
        this.mdbModalService = __WEBPACK_IMPORTED_MODULE_3__modalService_config__["a" /* msConfig */].serviceInstance;
        this._element = _element;
        this.config = Object.assign({}, options);
    }
    ModalContainerComponent.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
        }
        this.mdbModalService.setDismissReason(__WEBPACK_IMPORTED_MODULE_1__modal_options__["b" /* DISMISS_REASONS */].BACKRDOP);
        this.hide();
    };
    ModalContainerComponent.prototype.onEsc = function () {
        if (this.config.keyboard && this.level === this.mdbModalService.getModalsCount()) {
            this.mdbModalService.setDismissReason(__WEBPACK_IMPORTED_MODULE_1__modal_options__["b" /* DISMISS_REASONS */].ESC);
            this.hide();
        }
    };
    ModalContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isAnimated) {
            this._renderer.setElementClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_1__modal_options__["a" /* ClassName */].FADE, true);
        }
        this._renderer.setElementStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.isShown = true;
            _this._renderer.setElementClass(_this._element.nativeElement, Object(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])() ? __WEBPACK_IMPORTED_MODULE_1__modal_options__["a" /* ClassName */].IN : __WEBPACK_IMPORTED_MODULE_1__modal_options__["a" /* ClassName */].SHOW, true);
        }, this.isAnimated ? __WEBPACK_IMPORTED_MODULE_1__modal_options__["e" /* TransitionDurations */].BACKDROP : 0);
        if (document && document.body) {
            if (this.mdbModalService.getModalsCount() === 1) {
                this.mdbModalService.checkScrollbar();
                this.mdbModalService.setScrollbar();
            }
            this._renderer.setElementClass(document.body, __WEBPACK_IMPORTED_MODULE_1__modal_options__["a" /* ClassName */].OPEN, true);
        }
    };
    ModalContainerComponent.prototype.ngOnDestroy = function () {
        if (this.isShown) {
            this.hide();
        }
    };
    ModalContainerComponent.prototype.hide = function () {
        var _this = this;
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.setElementClass(this._element.nativeElement, Object(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])() ? __WEBPACK_IMPORTED_MODULE_1__modal_options__["a" /* ClassName */].IN : __WEBPACK_IMPORTED_MODULE_1__modal_options__["a" /* ClassName */].SHOW, false);
        setTimeout(function () {
            _this.isShown = false;
            if (document && document.body && _this.mdbModalService.getModalsCount() === 1) {
                _this._renderer.setElementClass(document.body, __WEBPACK_IMPORTED_MODULE_1__modal_options__["a" /* ClassName */].OPEN, false);
            }
            _this.mdbModalService.hide(_this.level);
            _this.isModalHiding = false;
        }, this.isAnimated ? __WEBPACK_IMPORTED_MODULE_1__modal_options__["e" /* TransitionDurations */].MODAL : 0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('tabindex'),
        __metadata("design:type", Object)
    ], ModalContainerComponent.prototype, "tabindex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('role'),
        __metadata("design:type", Object)
    ], ModalContainerComponent.prototype, "role", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.modal'),
        __metadata("design:type", Object)
    ], ModalContainerComponent.prototype, "modla", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ModalContainerComponent.prototype, "onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('window:keydown.esc'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ModalContainerComponent.prototype, "onEsc", null);
    ModalContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'mdb-modal-container',
            template: "\n  <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n  <div class=\"modal-content\"><ng-content></ng-content></div>\n</div>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__modal_options__["d" /* ModalOptions */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer */]])
    ], ModalContainerComponent);
    return ModalContainerComponent;
}());



/***/ }),

/***/ "./src/app/typescripts/free/modals/modalService.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return msConfig; });
var msConfig = {
    serviceInstance: new Object()
};


/***/ }),

/***/ "./src/app/typescripts/free/navbars/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_module__ = __webpack_require__("./src/app/typescripts/free/navbars/navbar.module.ts");
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_component__ = __webpack_require__("./src/app/typescripts/free/navbars/navbar.component.ts");
/* unused harmony reexport namespace */




/***/ }),

/***/ "./src/app/typescripts/free/navbars/links.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_service__ = __webpack_require__("./src/app/typescripts/free/navbars/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LinksComponent = (function () {
    function LinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
    }
    LinksComponent.prototype.ngAfterContentInit = function () {
        var that = this;
        setTimeout(function () {
            that.links.forEach(function (element) {
                element.nativeElement.onclick = function () {
                    that._navbarService.setNavbarLinkClicks();
                };
            });
        }, 0);
    };
    LinksComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterLinkWithHref */], { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], descendants: true }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* QueryList */])
    ], LinksComponent.prototype, "links", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], LinksComponent.prototype, "linkClick", void 0);
    LinksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'links',
            template: "\n        <ng-content></ng-content>\n    ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__navbar_service__["a" /* NavbarService */]])
    ], LinksComponent);
    return LinksComponent;
}());



/***/ }),

/***/ "./src/app/typescripts/free/navbars/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LogoComponent = (function () {
    function LogoComponent() {
    }
    LogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'logo',
            template: "\n  <ng-content></ng-content>\n  "
        })
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/typescripts/free/navbars/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"{{SideClass}}\" #nav>\n  <div [ngClass]=\"{'container': containerInside}\" [ngStyle]=\"{'display': displayStyle}\" #container>\n    <ng-content select=\"logo\"></ng-content>\n    <ng-content *ngIf=\"this.doubleNav == true\" select=\"navlinks\"></ng-content>\n    <div *ngIf=\"this.doubleNav == false\">\n      <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggle($event)\" mdbWavesEffect *ngIf=\"this.el.nativeElement.children.length !== 0\">\n        <span class=\"navbar-toggler-icon\">\n        </span>\n      </button>\n    </div>\n    <div #navbar [style.height]=\"height\" class=\"navbar-collapse collapse\" [ngClass]=\"{'collapse': collapse, 'show': showClass, 'collapsing': collapsing}\">\n      <ng-content select=\"links\"></ng-content>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/typescripts/free/navbars/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_service__ = __webpack_require__("./src/app/typescripts/free/navbars/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(renderer, _navbarService) {
        var _this = this;
        this.renderer = renderer;
        this._navbarService = _navbarService;
        this.containerInside = true;
        this.shown = false;
        this.duration = 350; // ms
        this.collapse = false;
        this.showClass = false;
        this.collapsing = false;
        // tslint:disable-next-line:max-line-length
        this.subscription = this._navbarService.getNavbarLinkClicks().subscribe(function (navbarLinkClicks) { _this.closeNavbarOnClick(navbarLinkClicks); });
    }
    NavbarComponent.prototype.closeNavbarOnClick = function (navbarLinkClicks) {
        this.navbarLinkClicks = navbarLinkClicks;
        if (this.showClass) {
            this.hide();
        }
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var isDoubleNav = this.SideClass.split(' ');
        if (isDoubleNav.indexOf('double-nav') !== -1) {
            this.doubleNav = true;
        }
        else {
            this.doubleNav = false;
        }
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        /* bugfix - bez tego sypie ExpressionChangedAfterItHasBeenCheckedError -
        https://github.com/angular/angular/issues/6005#issuecomment-165951692 */
        setTimeout(function () {
            _this.height = _this.el.nativeElement.scrollHeight;
            _this.collapse = true;
            if (!_this.containerInside) {
                var childrens = Array.from(_this.container.nativeElement.children);
                childrens.forEach(function (child) {
                    // this.navbar.nativeElement.append(child);
                    _this.renderer.appendChild(_this.navbar.nativeElement, child);
                    _this.container.nativeElement.remove();
                });
            }
            if (_this.el.nativeElement.children.length === 0) {
                _this.el.nativeElement.remove();
            }
        });
    };
    NavbarComponent.prototype.toggle = function (event) {
        event.preventDefault();
        if (!this.collapsing) {
            if (this.shown) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    };
    NavbarComponent.prototype.show = function () {
        var _this = this;
        this.shown = true;
        this.collapse = false;
        this.collapsing = true;
        setTimeout(function () {
            _this.renderer.setStyle(_this.el.nativeElement, 'height', _this.height + 'px');
        }, 10);
        setTimeout(function () {
            _this.collapsing = false;
            _this.collapse = true;
            _this.showClass = true;
        }, this.duration);
    };
    NavbarComponent.prototype.hide = function () {
        var _this = this;
        this.shown = false;
        this.collapse = false;
        this.showClass = false;
        this.collapsing = true;
        setTimeout(function () {
            _this.renderer.setStyle(_this.el.nativeElement, 'height', '0px');
        }, 10);
        setTimeout(function () {
            _this.collapsing = false;
            _this.collapse = true;
        }, this.duration);
    };
    Object.defineProperty(NavbarComponent.prototype, "displayStyle", {
        get: function () {
            // if(!this.containerInside) {
            //  return 'flex';
            // } else {
            return '';
            // }
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent.prototype.onResize = function (event) {
        var _this = this;
        var breakpoit = 0;
        if (this.SideClass.includes('navbar-expand-xl')) {
            breakpoit = 1200;
        }
        else if (this.SideClass.includes('navbar-expand-lg')) {
            breakpoit = 992;
        }
        else if (this.SideClass.includes('navbar-expand-md')) {
            breakpoit = 768;
        }
        else if (this.SideClass.includes('navbar-expand-sm')) {
            breakpoit = 576;
        }
        else {
            breakpoit = event.target.innerWidth + 1;
        }
        if (event.target.innerWidth < breakpoit) {
            if (!this.shown) {
                this.collapse = false;
                this.renderer.setStyle(this.el.nativeElement, 'height', '0px');
                this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
                setTimeout(function () {
                    _this.height = _this.el.nativeElement.scrollHeight;
                    _this.collapse = true;
                    _this.renderer.setStyle(_this.el.nativeElement, 'opacity', '');
                }, 4);
            }
        }
        else {
            this.collapsing = false;
            this.shown = false;
            this.showClass = false;
            this.collapse = true;
            this.renderer.setStyle(this.el.nativeElement, 'height', '');
        }
    };
    NavbarComponent.prototype.onScroll = function () {
        if (this.navbar.nativeElement.classList.contains('scrolling-navbar')) {
            if (window.pageYOffset > 120) {
                this.renderer.addClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
            else {
                this.renderer.removeClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "SideClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "containerInside", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])('navbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
    ], NavbarComponent.prototype, "el", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])('mobile'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
    ], NavbarComponent.prototype, "mobile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
    ], NavbarComponent.prototype, "navbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
    ], NavbarComponent.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavbarComponent.prototype, "onResize", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* HostListener */])('document:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NavbarComponent.prototype, "onScroll", null);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'mdb-navbar',
            template: __webpack_require__("./src/app/typescripts/free/navbars/navbar.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Z" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__navbar_service__["a" /* NavbarService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/typescripts/free/navbars/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__links_component__ = __webpack_require__("./src/app/typescripts/free/navbars/links.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logo_component__ = __webpack_require__("./src/app/typescripts/free/navbars/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_service__ = __webpack_require__("./src/app/typescripts/free/navbars/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_component__ = __webpack_require__("./src/app/typescripts/free/navbars/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navlinks_component__ = __webpack_require__("./src/app/typescripts/free/navbars/navlinks.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NavbarModule = (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_0__links_component__["a" /* LinksComponent */], __WEBPACK_IMPORTED_MODULE_1__logo_component__["a" /* LogoComponent */], __WEBPACK_IMPORTED_MODULE_6__navlinks_component__["a" /* NavlinksComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_0__links_component__["a" /* LinksComponent */], __WEBPACK_IMPORTED_MODULE_1__logo_component__["a" /* LogoComponent */], __WEBPACK_IMPORTED_MODULE_6__navlinks_component__["a" /* NavlinksComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__navbar_service__["a" /* NavbarService */]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/typescripts/free/navbars/navbar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NavbarService = (function () {
    function NavbarService() {
        this.navbarLinkClicks = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    NavbarService.prototype.getNavbarLinkClicks = function () {
        return this.navbarLinkClicks.asObservable();
    };
    NavbarService.prototype.setNavbarLinkClicks = function () {
        this.navbarLinkClicks.next();
    };
    NavbarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], NavbarService);
    return NavbarService;
}());



/***/ }),

/***/ "./src/app/typescripts/free/navbars/navlinks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavlinksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_service__ = __webpack_require__("./src/app/typescripts/free/navbars/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavlinksComponent = (function () {
    function NavlinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* EventEmitter */]();
    }
    NavlinksComponent.prototype.ngAfterContentInit = function () {
        var that = this;
        setTimeout(function () {
            that.links.forEach(function (element) {
                element.nativeElement.onclick = function () {
                    that._navbarService.setNavbarLinkClicks();
                };
            });
        }, 0);
    };
    NavlinksComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterLinkWithHref */], { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], descendants: true }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* QueryList */])
    ], NavlinksComponent.prototype, "links", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], NavlinksComponent.prototype, "linkClick", void 0);
    NavlinksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'navlinks',
            template: "\n        <ng-content></ng-content>\n    ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__navbar_service__["a" /* NavbarService */]])
    ], NavlinksComponent);
    return NavlinksComponent;
}());



/***/ }),

/***/ "./src/app/typescripts/free/popover/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popover_directive__ = __webpack_require__("./src/app/typescripts/free/popover/popover.directive.ts");
/* unused harmony reexport PopoverDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_module__ = __webpack_require__("./src/app/typescripts/free/popover/popover.module.ts");
/* unused harmony reexport PopoverModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_config__ = __webpack_require__("./src/app/typescripts/free/popover/popover.config.ts");
/* unused harmony reexport PopoverConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_container_component__ = __webpack_require__("./src/app/typescripts/free/popover/popover-container.component.ts");
/* unused harmony reexport PopoverContainerComponent */






/***/ }),

/***/ "./src/app/typescripts/free/popover/popover-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_config__ = __webpack_require__("./src/app/typescripts/free/popover/popover.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__ = __webpack_require__("./src/app/typescripts/free/utils/ng2-bootstrap-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopoverContainerComponent = (function () {
    function PopoverContainerComponent(config) {
        this.show = '!isBs3';
        this.role = 'tooltip';
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    PopoverContainerComponent.prototype.ngOnInit = function () {
        this.class = 'popover-fadeIn popover in popover-' + this.placement + ' ' + this.placement + ' bs-popover-' + this.placement;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PopoverContainerComponent.prototype, "placement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PopoverContainerComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.show'),
        __metadata("design:type", Object)
    ], PopoverContainerComponent.prototype, "show", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('attr.role'),
        __metadata("design:type", Object)
    ], PopoverContainerComponent.prototype, "role", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class'),
        __metadata("design:type", Object)
    ], PopoverContainerComponent.prototype, "class", void 0);
    PopoverContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'mdb-popover-container',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
            template: "\n <h3 class=\"popover-header\" *ngIf=\"title\">{{title}}</h3>\n <div class=\"popover-body\">\n <ng-content></ng-content>\n </div>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__popover_config__["a" /* PopoverConfig */]])
    ], PopoverContainerComponent);
    return PopoverContainerComponent;
}());



/***/ }),

/***/ "./src/app/typescripts/free/popover/popover.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
var PopoverConfig = (function () {
    function PopoverConfig() {
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
    }
    PopoverConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], PopoverConfig);
    return PopoverConfig;
}());



/***/ }),

/***/ "./src/app/typescripts/free/popover/popover.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_config__ = __webpack_require__("./src/app/typescripts/free/popover/popover.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_component_loader_component_loader_factory__ = __webpack_require__("./src/app/typescripts/free/utils/component-loader/component-loader.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_container_component__ = __webpack_require__("./src/app/typescripts/free/popover/popover-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var PopoverDirective = (function () {
    function PopoverDirective(_elementRef, _renderer, _viewContainerRef, _config, cis) {
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_1__popover_config__["a" /* PopoverConfig */], useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
    }
    Object.defineProperty(PopoverDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: function () { return this._popover.isShown; },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.show = function () {
        if (this._popover.isShown) {
            return;
        }
        this._popover
            .attach(__WEBPACK_IMPORTED_MODULE_3__popover_container_component__["a" /* PopoverContainerComponent */])
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.mdbPopover,
            placement: this.placement,
            title: this.popoverTitle
        });
        this.isOpen = true;
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.hide = function () {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    PopoverDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._popover.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
    };
    PopoverDirective.prototype.dispose = function () {
        this._popover.dispose();
    };
    PopoverDirective.prototype.ngOnDestroy = function () {
        this._popover.dispose();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], PopoverDirective.prototype, "mdbPopover", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PopoverDirective.prototype, "popoverTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PopoverDirective.prototype, "placement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PopoverDirective.prototype, "triggers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PopoverDirective.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], PopoverDirective.prototype, "isOpen", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], PopoverDirective.prototype, "onShown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], PopoverDirective.prototype, "onHidden", void 0);
    PopoverDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[mdbPopover]', exportAs: 'bs-mdbPopover' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_1__popover_config__["a" /* PopoverConfig */],
            __WEBPACK_IMPORTED_MODULE_2__utils_component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */]])
    ], PopoverDirective);
    return PopoverDirective;
}());



/***/ }),

/***/ "./src/app/typescripts/free/popover/popover.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_component_loader_component_loader_factory__ = __webpack_require__("./src/app/typescripts/free/utils/component-loader/component-loader.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_positioning_positioning_service__ = __webpack_require__("./src/app/typescripts/free/utils/positioning/positioning.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_config__ = __webpack_require__("./src/app/typescripts/free/popover/popover.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popover_directive__ = __webpack_require__("./src/app/typescripts/free/popover/popover.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popover_container_component__ = __webpack_require__("./src/app/typescripts/free/popover/popover-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PopoverModule = (function () {
    function PopoverModule() {
    }
    PopoverModule_1 = PopoverModule;
    PopoverModule.forRoot = function () {
        return {
            ngModule: PopoverModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_4__popover_config__["a" /* PopoverConfig */], __WEBPACK_IMPORTED_MODULE_2__utils_component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_3__utils_positioning_positioning_service__["a" /* PositioningService */]]
        };
    };
    PopoverModule = PopoverModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__popover_directive__["a" /* PopoverDirective */], __WEBPACK_IMPORTED_MODULE_6__popover_container_component__["a" /* PopoverContainerComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__popover_directive__["a" /* PopoverDirective */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__popover_container_component__["a" /* PopoverContainerComponent */]]
        })
    ], PopoverModule);
    return PopoverModule;
    var PopoverModule_1;
}());



/***/ }),

/***/ "./src/app/typescripts/free/ripple/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ripple_effect_directive__ = __webpack_require__("./src/app/typescripts/free/ripple/ripple-effect.directive.ts");
/* unused harmony reexport RippleDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ripple_module__ = __webpack_require__("./src/app/typescripts/free/ripple/ripple.module.ts");
/* unused harmony reexport RippleModule */




/***/ }),

/***/ "./src/app/typescripts/free/ripple/ripple-effect.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RippleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RippleDirective = (function () {
    function RippleDirective(el) {
        this.el = el;
    }
    RippleDirective.prototype.click = function (event) {
        // event.stopPropagation();
        if (!this.el.nativeElement.classList.contains('disabled')) {
            var button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            var xPos = event.clientX - button.getBoundingClientRect().left;
            var yPos = event.clientY - button.getBoundingClientRect().top;
            var tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            var ripple = button.appendChild(tmp);
            var top_1 = yPos + 'px';
            var left = xPos + 'px';
            tmp.style.top = top_1;
            tmp.style.left = left;
            var scale = 'scale(' + ((button.clientWidth / 100) * 3) + ') translate(0,0)';
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            var duration = 750;
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    };
    RippleDirective.prototype.removeRipple = function (button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout(function () {
            ripple.style.opacity = '0';
            setTimeout(function () {
                button.removeChild(ripple);
            }, 750);
        }, 200);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RippleDirective.prototype, "click", null);
    RippleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdbRippleRadius]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], RippleDirective);
    return RippleDirective;
}());



/***/ }),

/***/ "./src/app/typescripts/free/ripple/ripple.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RippleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ripple_effect_directive__ = __webpack_require__("./src/app/typescripts/free/ripple/ripple-effect.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RippleModule = (function () {
    function RippleModule() {
    }
    RippleModule_1 = RippleModule;
    RippleModule.forRoot = function () {
        return { ngModule: RippleModule_1, providers: [] };
    };
    RippleModule = RippleModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__ripple_effect_directive__["a" /* RippleDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__ripple_effect_directive__["a" /* RippleDirective */]]
        })
    ], RippleModule);
    return RippleModule;
    var RippleModule_1;
}());



/***/ }),

/***/ "./src/app/typescripts/free/tooltip/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tooltip_component__ = __webpack_require__("./src/app/typescripts/free/tooltip/tooltip.component.ts");
/* unused harmony reexport TooltipContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_directive__ = __webpack_require__("./src/app/typescripts/free/tooltip/tooltip.directive.ts");
/* unused harmony reexport TooltipDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_module__ = __webpack_require__("./src/app/typescripts/free/tooltip/tooltip.module.ts");
/* unused harmony reexport TooltipModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_service__ = __webpack_require__("./src/app/typescripts/free/tooltip/tooltip.service.ts");
/* unused harmony reexport TooltipConfig */






/***/ }),

/***/ "./src/app/typescripts/free/tooltip/tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_service__ = __webpack_require__("./src/app/typescripts/free/tooltip/tooltip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__ = __webpack_require__("./src/app/typescripts/free/utils/ng2-bootstrap-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TooltipContainerComponent = (function () {
    function TooltipContainerComponent(config) {
        this.show = !this.isBs3;
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    TooltipContainerComponent.prototype.ngAfterViewInit = function () {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap['tooltip-' + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.popupClass) {
            this.classMap[this.popupClass] = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.show'),
        __metadata("design:type", Object)
    ], TooltipContainerComponent.prototype, "show", void 0);
    TooltipContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'mdb-tooltip-container',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
            // tslint:disable-next-line
            host: {
                '[class]': '"tooltip-fadeIn tooltip in tooltip-" + placement'
            },
            template: "\n  <div class=\"tooltip-arrow\"></div>\n  <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tooltip_service__["a" /* TooltipConfig */]])
    ], TooltipContainerComponent);
    return TooltipContainerComponent;
}());



/***/ }),

/***/ "./src/app/typescripts/free/tooltip/tooltip.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_component__ = __webpack_require__("./src/app/typescripts/free/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_service__ = __webpack_require__("./src/app/typescripts/free/tooltip/tooltip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_component_loader_component_loader_factory__ = __webpack_require__("./src/app/typescripts/free/utils/component-loader/component-loader.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_decorators__ = __webpack_require__("./src/app/typescripts/free/utils/decorators.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TooltipDirective = (function () {
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config) {
        /** Fired when tooltip content changes */
        this.tooltipChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.delay = 0;
        this.fadeDuration = 150;
        this._tooltip = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_2__tooltip_service__["a" /* TooltipConfig */], useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the tooltip is currently being shown
         */
        get: function () { return this._tooltip.isShown; },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    TooltipDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.tooltipChange.subscribe(function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        });
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.mdbTooltip) {
            return;
        }
        var showTooltip = function () { return _this._tooltip
            .attach(__WEBPACK_IMPORTED_MODULE_1__tooltip_component__["a" /* TooltipContainerComponent */])
            .to(_this.container)
            .position({ attachment: _this.placement })
            .show({
            content: _this.mdbTooltip,
            placement: _this.placement
        }); };
        if (this.delay) {
            this._delayTimeoutId = setTimeout(function () { showTooltip(); }, this.delay);
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.hide = function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(function () {
            _this._tooltip.hide();
        }, this.fadeDuration);
    };
    TooltipDirective.prototype.dispose = function () {
        this._tooltip.dispose();
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        this._tooltip.dispose();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__utils_decorators__["a" /* OnChange */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "mdbTooltip", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], TooltipDirective.prototype, "tooltipChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "placement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "triggers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TooltipDirective.prototype, "isOpen", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TooltipDirective.prototype, "isDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], TooltipDirective.prototype, "onShown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], TooltipDirective.prototype, "onHidden", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "delay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "fadeDuration", void 0);
    TooltipDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdbTooltip]',
            exportAs: 'mdb-tooltip'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_3__utils_component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */],
            __WEBPACK_IMPORTED_MODULE_2__tooltip_service__["a" /* TooltipConfig */]])
    ], TooltipDirective);
    return TooltipDirective;
}());



/***/ }),

/***/ "./src/app/typescripts/free/tooltip/tooltip.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_component__ = __webpack_require__("./src/app/typescripts/free/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_directive__ = __webpack_require__("./src/app/typescripts/free/tooltip/tooltip.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tooltip_service__ = __webpack_require__("./src/app/typescripts/free/tooltip/tooltip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_component_loader_component_loader_factory__ = __webpack_require__("./src/app/typescripts/free/utils/component-loader/component-loader.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_positioning_positioning_service__ = __webpack_require__("./src/app/typescripts/free/utils/positioning/positioning.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TooltipModule = (function () {
    function TooltipModule() {
    }
    TooltipModule_1 = TooltipModule;
    TooltipModule.forRoot = function () {
        return {
            ngModule: TooltipModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_4__tooltip_service__["a" /* TooltipConfig */], __WEBPACK_IMPORTED_MODULE_5__utils_component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_6__utils_positioning_positioning_service__["a" /* PositioningService */]]
        };
    };
    ;
    TooltipModule = TooltipModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__tooltip_directive__["a" /* TooltipDirective */], __WEBPACK_IMPORTED_MODULE_2__tooltip_component__["a" /* TooltipContainerComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__tooltip_directive__["a" /* TooltipDirective */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__tooltip_component__["a" /* TooltipContainerComponent */]]
        })
    ], TooltipModule);
    return TooltipModule;
    var TooltipModule_1;
}());



/***/ }),

/***/ "./src/app/typescripts/free/tooltip/tooltip.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** Default values provider for tooltip */
var TooltipConfig = (function () {
    function TooltipConfig() {
        /** tooltip placement, supported positions: 'top', 'bottom', 'left', 'right' */
        this.placement = 'top';
        /** array of event names which triggers tooltip opening */
        this.triggers = 'hover focus';
    }
    TooltipConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], TooltipConfig);
    return TooltipConfig;
}());



/***/ }),

/***/ "./src/app/typescripts/free/utils/component-loader/component-loader.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__triggers__ = __webpack_require__("./src/app/typescripts/free/utils/triggers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_ref_class__ = __webpack_require__("./src/app/typescripts/free/utils/component-loader/content-ref.class.ts");
// todo: add delay support
// todo: merge events onShow, onShown, etc...
// todo: add global positioning configuration?



var ComponentLoader = (function () {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * @internal
     */
    // tslint:disable-next-line
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onBeforeHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this._providers = [];
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        get: function () {
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    ComponentLoader.prototype.attach = function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    // todo: add behaviour: to target element, `body`, custom element
    ComponentLoader.prototype.to = function (container) {
        this.container = container || this.container;
        return this;
    };
    ComponentLoader.prototype.position = function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = opts.target || this._elementRef;
        return this;
    };
    ComponentLoader.prototype.provide = function (provider) {
        this._providers.push(provider);
        return this;
    };
    // todo: appendChild to element or document.querySelector(this.container)
    ComponentLoader.prototype.show = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content);
            var injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ReflectiveInjector */].resolveAndCreate(this._providers, this._injector);
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) {
                this.container.nativeElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (this.container === 'body' && typeof document !== 'undefined') {
                //  document.querySelector(this.container as string)
                document.querySelector(this.container)
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(this._componentRef.instance);
        }
        return this._componentRef;
    };
    ComponentLoader.prototype.hide = function () {
        if (!this._componentRef) {
            return this;
        }
        this.onBeforeHide.emit(this._componentRef.instance);
        var componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        this._componentRef.destroy();
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        // this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._componentRef.hostView));
        //
        // if (this._contentRef.viewRef && this._viewContainerRef.indexOf(this._contentRef.viewRef) !== -1) {
        //   this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        // }
        this._contentRef = null;
        this._componentRef = null;
        this.onHidden.emit();
        return this;
    };
    ComponentLoader.prototype.toggle = function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    ComponentLoader.prototype.dispose = function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    ComponentLoader.prototype.listen = function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        listenOpts.target = listenOpts.target || this._elementRef;
        listenOpts.show = listenOpts.show || (function () { return _this.show(); });
        listenOpts.hide = listenOpts.hide || (function () { return _this.hide(); });
        listenOpts.toggle = listenOpts.toggle || (function () { return _this.isShown
            ? listenOpts.hide()
            : listenOpts.show(); });
        this._unregisterListenersFn = Object(__WEBPACK_IMPORTED_MODULE_1__triggers__["a" /* listenToTriggers */])(this._renderer, listenOpts.target.nativeElement, this.triggers, listenOpts.show, listenOpts.hide, listenOpts.toggle);
        return this;
    };
    ComponentLoader.prototype.getInnerComponent = function () {
        return this._innerComponent;
    };
    ComponentLoader.prototype._subscribePositioning = function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone
            .onStable.subscribe(function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        });
    };
    ComponentLoader.prototype._unsubscribePositioning = function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    ComponentLoader.prototype._getContentRef = function (content) {
        if (!content) {
            return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["a" /* ContentRef */]([]);
        }
        if (content instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */]) {
            if (this._viewContainerRef) {
                var viewRef_1 = this._viewContainerRef.createEmbeddedView(content);
                return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["a" /* ContentRef */]([viewRef_1.rootNodes], viewRef_1);
            }
            var viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["a" /* ContentRef */]([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            var modalContentInjector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ReflectiveInjector */].resolveAndCreate(this._providers.concat([content]), this._injector);
            var componentRef = contentCmptFactory.create(modalContentInjector);
            this._applicationRef.attachView(componentRef.hostView);
            return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["a" /* ContentRef */]([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["a" /* ContentRef */]([[this._renderer.createText("" + content)]]);
    };
    return ComponentLoader;
}());



/***/ }),

/***/ "./src/app/typescripts/free/utils/component-loader/component-loader.factory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentLoaderFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_class__ = __webpack_require__("./src/app/typescripts/free/utils/component-loader/component-loader.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__positioning_positioning_service__ = __webpack_require__("./src/app/typescripts/free/utils/positioning/positioning.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentLoaderFactory = (function () {
    function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer2
     */
    ComponentLoaderFactory.prototype.createLoader = function (_elementRef, _viewContainerRef, _renderer) {
        return new __WEBPACK_IMPORTED_MODULE_1__component_loader_class__["a" /* ComponentLoader */](_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    };
    ComponentLoaderFactory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_2__positioning_positioning_service__["a" /* PositioningService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */]])
    ], ComponentLoaderFactory);
    return ComponentLoaderFactory;
}());



/***/ }),

/***/ "./src/app/typescripts/free/utils/component-loader/content-ref.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentRef; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var ContentRef = (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());



/***/ }),

/***/ "./src/app/typescripts/free/utils/decorators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = OnChange;
/*tslint:disable:no-invalid-this */
function OnChange() {
    var sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        var _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            get: function () { return this[_key]; },
            set: function (value) {
                var prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
/* tslint:enable */


/***/ }),

/***/ "./src/app/typescripts/free/utils/facade/browser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return document; });
/* unused harmony export location */
/* unused harmony export gc */
/* unused harmony export performance */
/* unused harmony export Event */
/* unused harmony export MouseEvent */
/* unused harmony export KeyboardEvent */
/* unused harmony export EventTarget */
/* unused harmony export History */
/* unused harmony export Location */
/* unused harmony export EventListener */
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var win = typeof window !== 'undefined' && window || {};

var document = win.document;
var location = win.location;
var gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
var performance = win['performance'] ? win['performance'] : null;
var Event = win['Event'];
var MouseEvent = win['MouseEvent'];
var KeyboardEvent = win['KeyboardEvent'];
var EventTarget = win['EventTarget'];
var History = win['History'];
var Location = win['Location'];
var EventListener = win['EventListener'];


/***/ }),

/***/ "./src/app/typescripts/free/utils/linked-list.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkedList; });
var LinkedList = (function () {
    function LinkedList() {
        // public length: = 0;
        this.length = 0;
        this.asArray = [];
        // Array methods overriding END
    }
    LinkedList.prototype.getNode = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    };
    LinkedList.prototype.createInternalArrayRepresentation = function () {
        var outArray = [];
        var current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    };
    // public get(position: number): T {
    LinkedList.prototype.get = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    };
    LinkedList.prototype.add = function (value, position) {
        if (position === void 0) { position = this.length; }
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        var node = {
            value: value,
            next: undefined,
            previous: undefined
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                var currentPreviousNode = this.getNode(position - 1);
                var currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.remove = function (position) {
        if (position === void 0) { position = 0; }
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            var removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.set = function (position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.toArray = function () {
        return this.asArray;
    };
    LinkedList.prototype.findAll = function (fn) {
        var current = this.head;
        var result = [];
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index: index, value: current.value });
            }
            current = current.next;
        }
        return result;
    };
    // Array methods overriding start
    LinkedList.prototype.push = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.forEach(function (arg) {
            _this.add(arg);
        });
        return this.length;
    };
    // public pop(): T {
    LinkedList.prototype.pop = function () {
        if (this.length === 0) {
            return undefined;
        }
        var last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    };
    LinkedList.prototype.unshift = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.reverse();
        args.forEach(function (arg) {
            _this.add(arg, 0);
        });
        return this.length;
    };
    // public shift(): T {
    LinkedList.prototype.shift = function () {
        if (this.length === 0) {
            return undefined;
        }
        var lastItem = this.head.value;
        this.remove();
        return lastItem;
    };
    LinkedList.prototype.forEach = function (fn) {
        var current = this.head;
        for (var index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    };
    LinkedList.prototype.indexOf = function (value) {
        var current = this.head;
        var position = 0;
        for (var index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    };
    LinkedList.prototype.some = function (fn) {
        var current = this.head;
        var result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.every = function (fn) {
        var current = this.head;
        var result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.toString = function () {
        return '[Linked List]';
    };
    // public find(fn: any): T {
    LinkedList.prototype.find = function (fn) {
        var current = this.head;
        // let result: T;
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.findIndex = function (fn) {
        var current = this.head;
        // let result: number;
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    };
    return LinkedList;
}());



/***/ }),

/***/ "./src/app/typescripts/free/utils/ng2-bootstrap-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isBs3;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__("./src/app/typescripts/free/utils/facade/browser.ts");

function isBs3() {
    return __WEBPACK_IMPORTED_MODULE_0__facade_browser__["b" /* window */].__theme === 'bs4';
}


/***/ }),

/***/ "./src/app/typescripts/free/utils/positioning/ng-positioning.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Positioning */
/* harmony export (immutable) */ __webpack_exports__["a"] = positionElements;
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
// tslint:disable
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            var bcRect = element.getBoundingClientRect();
            elPosition = {
                width: bcRect.width,
                height: bcRect.height,
                top: bcRect.top,
                bottom: bcRect.bottom,
                left: bcRect.left,
                right: bcRect.right
            };
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        var shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split(' ')[0] || 'top';
        var placementSecondary = placement.split(' ')[1] || 'center';
        var targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    Positioning.prototype.getStyle = function (element, prop) { return window.getComputedStyle(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    return Positioning;
}());

var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}


/***/ }),

/***/ "./src/app/typescripts/free/utils/positioning/positioning.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositioningService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_positioning__ = __webpack_require__("./src/app/typescripts/free/utils/positioning/ng-positioning.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PositioningService = (function () {
    function PositioningService() {
    }
    //  public position(options: PositioningOptions): void {
    PositioningService.prototype.position = function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        Object(__WEBPACK_IMPORTED_MODULE_1__ng_positioning__["a" /* positionElements */])(this._getHtmlElement(target), this._getHtmlElement(element), attachment, appendToBody);
    };
    PositioningService.prototype._getHtmlElement = function (element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return document.querySelector(element);
        }
        if (element instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) {
            return element.nativeElement;
        }
        return element;
    };
    PositioningService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], PositioningService);
    return PositioningService;
}());



/***/ }),

/***/ "./src/app/typescripts/free/utils/trigger.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trigger; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());



/***/ }),

/***/ "./src/app/typescripts/free/utils/triggers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parseTriggers */
/* harmony export (immutable) */ __webpack_exports__["a"] = listenToTriggers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trigger_class__ = __webpack_require__("./src/app/typescripts/free/utils/trigger.class.ts");

var DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var parsedTriggers = trimmedTriggers.split(/\s+/)
        .map(function (trigger) { return trigger.split(':'); })
        .map(function (triggerPair) {
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new __WEBPACK_IMPORTED_MODULE_0__trigger_class__["a" /* Trigger */](alias[0], alias[1]);
    });
    var manualTriggers = parsedTriggers
        .filter(function (triggerPair) { return triggerPair.isManual(); });
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
function listenToTriggers(renderer, target, triggers, showFn, hideFn, toggleFn) {
    var parsedTriggers = parseTriggers(triggers);
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    //  parsedTriggers.forEach((trigger: Trigger) => {
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, function () {
                toggleFn();
            }));
            // listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, function () {
            showFn();
        }), 
        // renderer.listen(target, trigger.open, showFn),
        renderer.listen(target, trigger.close, function () {
            hideFn();
        }));
        // renderer.listen(target, trigger.close, hideFn));
    });
    return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
}


/***/ }),

/***/ "./src/app/typescripts/free/utils/utils.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__("./src/app/typescripts/free/utils/facade/browser.ts");

var Utils = (function () {
    function Utils() {
    }
    Utils.reflow = function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    Utils.getStyles = function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = __WEBPACK_IMPORTED_MODULE_0__facade_browser__["b" /* window */];
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());



/***/ }),

/***/ "./src/app/typescripts/free/waves/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__waves_effect_directive__ = __webpack_require__("./src/app/typescripts/free/waves/waves-effect.directive.ts");
/* unused harmony reexport WavesDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__waves_module__ = __webpack_require__("./src/app/typescripts/free/waves/waves.module.ts");
/* unused harmony reexport WavesModule */




/***/ }),

/***/ "./src/app/typescripts/free/waves/waves-effect.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WavesDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WavesDirective = (function () {
    function WavesDirective(el) {
        this.el = el;
    }
    WavesDirective.prototype.click = function (event) {
        // event.stopPropagation();
        if (!this.el.nativeElement.classList.contains('disabled')) {
            var button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            var xPos = event.clientX - button.getBoundingClientRect().left;
            var yPos = event.clientY - button.getBoundingClientRect().top;
            var tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            var ripple = button.appendChild(tmp);
            var top_1 = yPos + 'px';
            var left = xPos + 'px';
            tmp.style.top = top_1;
            tmp.style.left = left;
            var scale = 'scale(' + ((button.clientWidth / 100) * 3) + ') translate(0,0)';
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            var duration = 750;
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    };
    WavesDirective.prototype.removeRipple = function (button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout(function () {
            ripple.style.opacity = '0';
            setTimeout(function () {
                button.removeChild(ripple);
            }, 750);
        }, 200);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WavesDirective.prototype, "click", null);
    WavesDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mdbWavesEffect]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], WavesDirective);
    return WavesDirective;
}());



/***/ }),

/***/ "./src/app/typescripts/free/waves/waves.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WavesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__waves_effect_directive__ = __webpack_require__("./src/app/typescripts/free/waves/waves-effect.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WavesModule = (function () {
    function WavesModule() {
    }
    WavesModule_1 = WavesModule;
    WavesModule.forRoot = function () {
        return { ngModule: WavesModule_1, providers: [] };
    };
    WavesModule = WavesModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__waves_effect_directive__["a" /* WavesDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__waves_effect_directive__["a" /* WavesDirective */]]
        })
    ], WavesModule);
    return WavesModule;
    var WavesModule_1;
}());



/***/ }),

/***/ "./src/app/util/util.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__web3_service__ = __webpack_require__("./src/app/util/web3.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UtilModule = (function () {
    function UtilModule() {
    }
    UtilModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__web3_service__["a" /* Web3Service */]
            ],
            declarations: []
        })
    ], UtilModule);
    return UtilModule;
}());



/***/ }),

/***/ "./src/app/util/web3.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Web3Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_truffle_contract__ = __webpack_require__("./node_modules/truffle-contract/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_truffle_contract___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_truffle_contract__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var Web3 = __webpack_require__("./node_modules/web3/src/index.js");
var Web3Service = (function () {
    function Web3Service() {
        var _this = this;
        this.ready = false;
        this.accountsObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Subject */]();
        window.addEventListener('load', function (event) {
            _this.bootstrapWeb3();
        });
    }
    Web3Service.prototype.bootstrapWeb3 = function () {
        var _this = this;
        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            this.web3 = new Web3(window.web3.currentProvider);
        }
        else {
            console.log('No web3? You should consider trying MetaMask!');
            // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
            Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
            // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
            // this.web3 = new Web3(new Web3.providers.HttpProvider('rinkeby.infura.io/dyPdDZacUv4bT2PzGIoS'));
            // this.web3 = new Web3(new Web3.providers.HttpProvider('rinkeby.infura.io/dyPdDZacUv4bT2PzGIoS'));
            this.web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io'));
        }
        setInterval(function () { return _this.refreshAccounts(); }, 750);
    };
    Web3Service.prototype.artifactsToContract = function (artifacts) {
        return __awaiter(this, void 0, void 0, function () {
            var delay, contractAbstraction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.web3) return [3 /*break*/, 3];
                        delay = new Promise(function (resolve) { return setTimeout(resolve, 100); });
                        return [4 /*yield*/, delay];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.artifactsToContract(artifacts)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        contractAbstraction = __WEBPACK_IMPORTED_MODULE_1_truffle_contract__(artifacts);
                        contractAbstraction.setProvider(this.web3.currentProvider);
                        return [2 /*return*/, contractAbstraction];
                }
            });
        });
    };
    Web3Service.prototype.refreshAccounts = function () {
        var _this = this;
        this.web3.eth.getAccounts(function (err, accs) {
            //console.log('Refreshing accounts');
            if (err != null) {
                console.warn('There was an error fetching your accounts.');
                return;
            }
            // Get the initial account balance so it can be displayed.
            if (accs.length === 0) {
                console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                return;
            }
            if (!_this.accounts || _this.accounts.length !== accs.length || _this.accounts[0] !== accs[0]) {
                console.log('Observed new accounts');
                _this.accountsObservable.next(accs);
                _this.accounts = accs;
            }
            // console.log(this.accounts);
            _this.ready = true;
        });
    };
    Web3Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Web3Service);
    return Web3Service;
}());



/***/ }),

/***/ "./src/app/views/css/colors/colors.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n    .color-block {\n        text-align: center;\n        height: 130px;\n        color: #fff;\n        padding: 40px;\n    }\n\n    .color-block-dark {\n        height: 130px;\n        text-align: center;\n        color: #fff;\n        padding: 40px;\n    }\n\n    .color-block-dark h5 {\n        font-size: 1rem;\n    }\n\n    .dynamic-color .col-md-4 {\n        margin-bottom: 2rem;\n    }\n\n    .dynamic-color .col-md-4 div {\n        padding: 7px 20px 7px 20px;\n    }\n\n    .color-block h5 {\n        font-size: 1rem;\n    }\n\n    .dynamic-color p {\n        font-size: 0.75rem\n    }\n</style>\n\n<!--Section: Intro-->\n<section id=\"bootstrap-colors\">\n\n    <!--Title-->\n    <h2 class=\"mt-lg-5 mb-3 font-bold\">\n        <strong>Bootstrap colors</strong>\n    </h2>\n\n    <!--Description-->\n    <p>MDB Admin Dashboard provides you with a sensational palette of 300 delightful, breathing colors.</p>\n\n    <p class=\"description mb-5\">Each color might be exposed in various tones varying from bright to dark. They all are collated in accessible section,\n        which will aid you in creating inviting, color consistent design. </p>\n\n    <!--Section: Live preview-->\n    <section>\n\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"color-block danger-color z-depth-2\">\n                    <h5>danger-color</h5>\n                    <h5>#ff4444</h5>\n                </div>\n                <div class=\"color-block-dark danger-color-dark z-depth-2\">\n                    <h5>danger-color-dark</h5>\n                    <h5>#CC0000</h5>\n                </div>\n\n            </div>\n\n            <div class=\"col-md-3\">\n                <div class=\"color-block warning-color z-depth-2\">\n                    <h5>warning-color</h5>\n                    <h5>#ffbb33</h5>\n                </div>\n                <div class=\"color-block-dark warning-color-dark z-depth-2\">\n                    <h5>warning-color-dark</h5>\n                    <h5>#FF8800</h5>\n                </div>\n\n            </div>\n\n            <div class=\"col-md-3\">\n                <div class=\"color-block success-color z-depth-2\">\n                    <h5>success-color</h5>\n                    <h5>#00C851</h5>\n                </div>\n                <div class=\"color-block-dark success-color-dark z-depth-2\">\n                    <h5>success-color-dark</h5>\n                    <h5>#007E33</h5>\n                </div>\n\n            </div>\n\n            <div class=\"col-md-3\">\n\n                <div class=\"color-block info-color z-depth-2\">\n                    <h5>info-color</h5>\n                    <h5>#33b5e5</h5>\n                </div>\n                <div class=\"color-block-dark info-color-dark z-depth-2\">\n                    <h5>info-color-dark</h5>\n                    <h5>#0099CC</h5>\n                </div>\n            </div>\n        </div>\n\n    </section>\n    <!--Section: Live preview-->\n\n</section>\n<!--/Section: Intro-->\n\n<hr class=\"my-5\">\n\n<!--Section: -->\n<section id=\"mdb-colors\">\n\n    <!--Title-->\n    <h4 class=\"mb-5 font-bold font-bold dark-grey-text\">\n        <strong>MDB Colors</strong>\n    </h4>\n\n    <!--Description-->\n    <p class=\"description\"></p>\n\n    <!--Section: Live preview-->\n    <section>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"color-block default-color z-depth-2\">\n                    <h5>default-color</h5>\n                    <h5>#2BBBAD</h5>\n                </div>\n                <div class=\"color-block-dark default-color-dark z-depth-2\">\n                    <h5>default-color-dark</h5>\n                    <h5>#00695c</h5>\n                </div>\n\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"color-block primary-color z-depth-2\">\n                    <h5>primary-color</h5>\n                    <h5>#4285F4</h5>\n                </div>\n                <div class=\"color-block-dark primary-color-dark z-depth-2\">\n                    <h5>primary-color-dark</h5>\n                    <h5>#0d47a1</h5>\n                </div>\n\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"color-block secondary-color z-depth-2\">\n                    <h5>secondary-color</h5>\n                    <h5>#aa66cc</h5>\n                </div>\n                <div class=\"color-block-dark secondary-color-dark z-depth-2\">\n                    <h5>secondary-color-dark</h5>\n                    <h5>#9933CC</h5>\n                </div>\n\n            </div>\n        </div>\n\n    </section>\n    <!--Section: Live preview-->\n\n</section>\n<!--/Section: -->\n\n<hr class=\"my-5\">\n\n<!--Section: -->\n<section id=\"dark-theme\">\n\n    <!--Title-->\n    <h4 class=\"mb-5 font-bold dark-grey-text\">\n        <strong>Dark Theme</strong>\n    </h4>\n\n    <!--Description-->\n    <p class=\"description\"></p>\n\n    <!--Section: Live preview-->\n    <section>\n\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"color-block elegant-color z-depth-2\">\n                    <h5>elegant-color</h5>\n                    <h5>#2E2E2E</h5>\n                </div>\n                <div class=\"color-block-dark elegant-color-dark z-depth-2\">\n                    <h5>elegant-color-dark</h5>\n                    <h5>#212121</h5>\n                </div>\n\n            </div>\n\n            <div class=\"col-md-3\">\n                <div class=\"color-block stylish-color z-depth-2\">\n                    <h5>stylish-color</h5>\n                    <h5>#4B515D</h5>\n                </div>\n                <div class=\"color-block-dark stylish-color-dark z-depth-2\">\n                    <h5>stylish-color-dark</h5>\n                    <h5>#3E4551</h5>\n                </div>\n\n            </div>\n\n            <div class=\"col-md-3\">\n                <div class=\"color-block unique-color z-depth-2\">\n                    <h5>unique-color</h5>\n                    <h5>#3F729B</h5>\n                </div>\n                <div class=\"color-block-dark unique-color-dark z-depth-2\">\n                    <h5>unique-color-dark</h5>\n                    <h5>#1C2331</h5>\n                </div>\n\n            </div>\n\n            <div class=\"col-md-3\">\n                <div class=\"color-block special-color z-depth-2\">\n                    <h5>special-color</h5>\n                    <h5>#37474F</h5>\n                </div>\n                <div class=\"color-block-dark special-color-dark z-depth-2\">\n                    <h5>special-color-dark</h5>\n                    <h5>#263238</h5>\n                </div>\n\n            </div>\n        </div>\n\n    </section>\n    <!--Section: Live preview-->\n\n</section>\n<!--/Section: -->\n\n<hr class=\"my-5\">\n\n<!--Section: -->\n<section id=\"full-palette\">\n\n    <!--Title-->\n    <h4 class=\"mb-5 font-bold dark-grey-text\">\n        <strong>Full Palette</strong>\n    </h4>\n\n    <!--Description-->\n    <p class=\"description\"></p>\n\n    <!--Section: Live preview-->\n    <section>\n\n        <div class=\"row dynamic-color\">\n            <div class=\"col-md-4\">\n                <div class=\"red lighten-5\">\n                    <p>#ffebee red lighten-5</p>\n                </div>\n                <div class=\"red lighten-4\">\n                    <p>#ffcdd2 red lighten-4</p>\n                </div>\n                <div class=\"red lighten-3\">\n                    <p>#ef9a9a red lighten-3</p>\n                </div>\n                <div class=\"red lighten-2\">\n                    <p>#e57373 red lighten-2</p>\n                </div>\n                <div class=\"red lighten-1\">\n                    <p>#ef5350 red lighten-1</p>\n                </div>\n                <div class=\"red\">\n                    <p>#f44336 red</p>\n                </div>\n                <div class=\"red darken-1 white-text\">\n                    <p>#e53935 red darken-1</p>\n                </div>\n                <div class=\"red darken-2 white-text\">\n                    <p>#d32f2f red darken-2</p>\n                </div>\n                <div class=\"red darken-3 white-text\">\n                    <p>#c62828 red darken-3</p>\n                </div>\n                <div class=\"red darken-4 white-text\">\n                    <p>#b71c1c red darken-4</p>\n                </div>\n                <div class=\"red accent-1 \">\n                    <p>#ff8a80 red accent-1</p>\n                </div>\n                <div class=\"red accent-2\">\n                    <p>#ff5252 red accent-2</p>\n                </div>\n                <div class=\"red accent-3\">\n                    <p>#ff1744 red accent-3</p>\n                </div>\n                <div class=\"red accent-4 white-text\">\n                    <p>#d50000 red accent-4</p>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"pink lighten-5\">\n                    <p>#fce4ec pink lighten-5</p>\n                </div>\n                <div class=\"pink lighten-4\">\n                    <p>#f8bbd0 pink lighten-4</p>\n                </div>\n                <div class=\"pink lighten-3\">\n                    <p>#f48fb1 pink lighten-3</p>\n                </div>\n                <div class=\"pink lighten-2\">\n                    <p>#f06292 pink lighten-2</p>\n                </div>\n                <div class=\"pink lighten-1\">\n                    <p>#ec407a pink lighten-1</p>\n                </div>\n                <div class=\"pink \">\n                    <p>#e91e63 pink</p>\n                </div>\n                <div class=\"pink darken-1 white-text\">\n                    <p>#d81b60 pink darken-1</p>\n                </div>\n                <div class=\"pink darken-2 white-text\">\n                    <p>#c2185b pink darken-2</p>\n                </div>\n                <div class=\"pink darken-3 white-text\">\n                    <p>#ad1457 pink darken-3</p>\n                </div>\n                <div class=\"pink darken-4 white-text\">\n                    <p>#880e4f pink darken-4</p>\n                </div>\n                <div class=\"pink accent-1\">\n                    <p>#ff80ab pink accent-1</p>\n                </div>\n                <div class=\"pink accent-2\">\n                    <p>#ff4081 pink accent-2</p>\n                </div>\n                <div class=\"pink accent-3\">\n                    <p>#f50057 pink accent-3</p>\n                </div>\n                <div class=\"pink accent-4 white-text\">\n                    <p>#c51162 pink accent-4</p>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"purple lighten-5\">\n                    <p>#f3e5f5 purple lighten-5</p>\n                </div>\n                <div class=\"purple lighten-4\">\n                    <p>#e1bee7 purple lighten-4</p>\n                </div>\n                <div class=\"purple lighten-3\">\n                    <p>#ce93d8 purple lighten-3</p>\n                </div>\n                <div class=\"purple lighten-2\">\n                    <p>#ba68c8 purple lighten-2</p>\n                </div>\n                <div class=\"purple lighten-1\">\n                    <p>#ab47bc #purple lighten-1</p>\n                </div>\n                <div class=\"purple\">\n                    <p>#9c27b0 purple</p>\n                </div>\n                <div class=\"purple darken-1 white-text\">\n                    <p>#8e24aa purple darken-1</p>\n                </div>\n                <div class=\"purple darken-2 white-text\">\n                    <p>#7b1fa2 purple darken-2</p>\n                </div>\n                <div class=\"purple darken-3 white-text\">\n                    <p>#6a1b9a purple darken-3</p>\n                </div>\n                <div class=\"purple darken-4 white-text\">\n                    <p>#4a148c purple darken-4</p>\n                </div>\n                <div class=\"purple accent-1\">\n                    <p>#ea80fc purple accent-5</p>\n                </div>\n                <div class=\"purple accent-2\">\n                    <p>#e040fb purple accent-5</p>\n                </div>\n                <div class=\"purple accent-3\">\n                    <p>#d500f9 purple accent-5</p>\n                </div>\n                <div class=\"purple accent-4 white-text\">\n                    <p>#aa00ff purple accent-4</p>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"deep-purple lighten-5\">\n                    <p>#ede7f6 deep-purple lighten-5</p>\n                </div>\n                <div class=\"deep-purple lighten-4\">\n                    <p>#d1c4e9 deep-purple lighten-4</p>\n                </div>\n                <div class=\"deep-purple lighten-3\">\n                    <p>#b39ddb deep-purple lighten-3</p>\n                </div>\n                <div class=\"deep-purple lighten-2\">\n                    <p>#9575cd deep-purple lighten-2</p>\n                </div>\n                <div class=\"deep-purple lighten-1\">\n                    <p>#7e57c2 deep-purple lighten-1</p>\n                </div>\n                <div class=\"deep-purple\">\n                    <p>#673ab7 deep-purple</p>\n                </div>\n                <div class=\"deep-purple darken-1 white-text\">\n                    <p>#5e35b1 deep-purple darken-1</p>\n                </div>\n                <div class=\"deep-purple darken-2 white-text\">\n                    <p>#512da8 deep-purple darken-2</p>\n                </div>\n                <div class=\"deep-purple darken-3 white-text\">\n                    <p>#4527a0 deep-purple darken-3</p>\n                </div>\n                <div class=\"deep-purple darken-4 white-text\">\n                    <p>#311b92 deep-purple darken-4</p>\n                </div>\n                <div class=\"deep-purple accent-1\">\n                    <p>#b388ff deep-purple accent-1</p>\n                </div>\n                <div class=\"deep-purple accent-2\">\n                    <p>#7c4dff deep-purple accent-2</p>\n                </div>\n                <div class=\"deep-purple accent-3\">\n                    <p>#651fff deep-purple accent-3</p>\n                </div>\n                <div class=\"deep-purple accent-4 white-text\">\n                    <p>#6200ea deep-purple accent-4</p>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"indigo lighten-5\">\n                    <p>#e8eaf6 indigo lighten-5</p>\n                </div>\n                <div class=\"indigo lighten-4\">\n                    <p>#c5cae9 indigo lighten-4</p>\n                </div>\n                <div class=\"indigo lighten-3\">\n                    <p>#9fa8da indigo lighten-3</p>\n                </div>\n                <div class=\"indigo lighten-2\">\n                    <p>#7986cb indigo lighten-2</p>\n                </div>\n                <div class=\"indigo lighten-1\">\n                    <p>#5c6bc0 indigo lighten-1</p>\n                </div>\n                <div class=\"indigo\">\n                    <p>#3f51b5 indigo</p>\n                </div>\n                <div class=\"indigo darken-1 white-text\">\n                    <p>#3949ab indigo darken-1</p>\n                </div>\n                <div class=\"indigo darken-2 white-text\">\n                    <p>#303f9f indigo darken-2</p>\n                </div>\n                <div class=\"indigo darken-3 white-text\">\n                    <p>#283593 indigo darken-3</p>\n                </div>\n                <div class=\"indigo darken-4 white-text\">\n                    <p>#1a237e indigo darken-4</p>\n                </div>\n                <div class=\"indigo accent-1\">\n                    <p>#8c9eff indigo accent-1</p>\n                </div>\n                <div class=\"indigo accent-2\">\n                    <p>#536dfe indigo accent-2</p>\n                </div>\n                <div class=\"indigo accent-3\">\n                    <p>#3d5afe indigo accent-3</p>\n                </div>\n                <div class=\"indigo accent-4 white-text\">\n                    <p>#304ffe indigo accent-4</p>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"blue lighten-5\">\n                    <p>#e3f2fd blue lighten-5</p>\n                </div>\n                <div class=\"blue lighten-4\">\n                    <p>#bbdefb blue lighten-4</p>\n                </div>\n                <div class=\"blue lighten-3\">\n                    <p>#90caf9 blue lighten-3</p>\n                </div>\n                <div class=\"blue lighten-2\">\n                    <p>#64b5f6 blue lighten-2</p>\n                </div>\n                <div class=\"blue lighten-1\">\n                    <p>#42a5f5 blue lighten-1</p>\n                </div>\n                <div class=\"blue\">\n                    <p>#2196f3 blue</p>\n                </div>\n                <div class=\"blue darken-1 white-text\">\n                    <p>#1e88e5 blue darken-1</p>\n                </div>\n                <div class=\"blue darken-2 white-text\">\n                    <p>#1976d2 blue darken-2</p>\n                </div>\n                <div class=\"blue darken-3 white-text\">\n                    <p>#1565c0 blue darken-3</p>\n                </div>\n                <div class=\"blue darken-4 white-text\">\n                    <p>#0d47a1 blue darken-4</p>\n                </div>\n                <div class=\"blue accent-1\">\n                    <p>#82b1ff blue accent-1</p>\n                </div>\n                <div class=\"blue accent-2\">\n                    <p>#448aff blue accent-2</p>\n                </div>\n                <div class=\"blue accent-3\">\n                    <p>#2979ff blue accent-3</p>\n                </div>\n                <div class=\"blue accent-4 white-text\">\n                    <p>#2962ff blue accent-4</p>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"light-blue lighten-5\">\n                    <p>#e1f5fe light-blue lighten-5</p>\n                </div>\n                <div class=\"light-blue lighten-4\">\n                    <p>#b3e5fc light-blue lighten-4</p>\n                </div>\n                <div class=\"light-blue lighten-3\">\n                    <p>#81d4fa light-blue lighten-3</p>\n                </div>\n                <div class=\"light-blue lighten-2\">\n                    <p>#4fc3f7 light-blue lighten-2</p>\n                </div>\n                <div class=\"light-blue lighten-1\">\n                    <p>#29b6f6 light-blue lighten-1</p>\n                </div>\n                <div class=\"light-blue\">\n                    <p>#03a9f4 light-blue</p>\n                </div>\n                <div class=\"light-blue darken-1 white-text\">\n                    <p>#039be5 light-blue darken-1</p>\n                </div>\n                <div class=\"light-blue darken-2 white-text\">\n                    <p>#0288d1 light-blue darken-2</p>\n                </div>\n                <div class=\"light-blue darken-3 white-text\">\n                    <p>#0277bd light-blue darken-3</p>\n                </div>\n                <div class=\"light-blue darken-4 white-text\">\n                    <p>#01579b light-blue darken-4</p>\n                </div>\n                <div class=\"light-blue accent-1\">\n                    <p>#l80d8ff ight-blue accent-1</p>\n                </div>\n                <div class=\"light-blue accent-2\">\n                    <p>#40c4ff light-blue accent-2</p>\n                </div>\n                <div class=\"light-blue accent-3\">\n                    <p>#00b0ff light-blue accent-3</p>\n                </div>\n                <div class=\"light-blue accent-4 white-text\">\n                    <p>#0091ea light-blue accent-4</p>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"cyan lighten-5\">\n                    <p>#e0f7fa cyan lighten-5</p>\n                </div>\n                <div class=\"cyan lighten-4\">\n                    <p>#b2ebf2 cyan lighten-4</p>\n                </div>\n                <div class=\"cyan lighten-3\">\n                    <p>#80deea cyan lighten-3</p>\n                </div>\n                <div class=\"cyan lighten-2\">\n                    <p>#4dd0e1 cyan lighten-2</p>\n                </div>\n                <div class=\"cyan lighten-1\">\n                    <p>#26c6da cyan lighten-1</p>\n                </div>\n                <div class=\"cyan\">\n                    <p>#00bcd4 cyan</p>\n                </div>\n                <div class=\"cyan darken-1 white-text\">\n                    <p>#00acc1 cyan darken-1</p>\n                </div>\n                <div class=\"cyan darken-2 white-text\">\n                    <p>#0097a7 cyan darken-2</p>\n                </div>\n                <div class=\"cyan darken-3 white-text\">\n                    <p>#00838f cyan darken-3</p>\n                </div>\n                <div class=\"cyan darken-4 white-text\">\n                    <p>#006064 cyan darken-4</p>\n                </div>\n                <div class=\"cyan accent-1\">\n                    <p>#84ffff cyan accent-1</p>\n                </div>\n                <div class=\"cyan accent-2\">\n                    <p>#18ffff cyan accent-2</p>\n                </div>\n                <div class=\"cyan accent-3\">\n                    <p>#00e5ff cyan accent-3</p>\n                </div>\n                <div class=\"cyan accent-4 white-text\">\n                    <p>#00b8d4 cyan accent-4</p>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"teal lighten-5\">\n                    <p>#e0f2f1 teal lighten-5</p>\n                </div>\n                <div class=\"teal lighten-4\">\n                    <p>#b2dfdb teal lighten-4</p>\n                </div>\n                <div class=\"teal lighten-3\">\n                    <p>#80cbc4 teal lighten-3</p>\n                </div>\n                <div class=\"teal lighten-2\">\n                    <p>#4db6ac teal lighten-2</p>\n                </div>\n                <div class=\"teal lighten-1\">\n                    <p>#26a69a teal lighten-1</p>\n                </div>\n                <div class=\"teal\">\n                    <p>#009688 teal</p>\n                </div>\n                <div class=\"teal darken-1 white-text\">\n                    <p>#00897b teal darken-1</p>\n                </div>\n                <div class=\"teal darken-2 white-text\">\n                    <p>#00796b teal darken-2</p>\n                </div>\n                <div class=\"teal darken-3 white-text\">\n                    <p>#00695c teal darken-3</p>\n                </div>\n                <div class=\"teal darken-4 white-text\">\n                    <p>#004d40 teal darken-4</p>\n                </div>\n                <div class=\"teal accent-1\">\n                    <p>#a7ffeb teal accent-1</p>\n                </div>\n                <div class=\"teal accent-2\">\n                    <p>#64ffda teal accent-2</p>\n                </div>\n                <div class=\"teal accent-3\">\n                    <p>#1de9b6 teal accent-3</p>\n                </div>\n                <div class=\"teal accent-4 white-text\">\n                    <p>#00bfa5 teal accent-4</p>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"green lighten-5\">\n                    <p>#e8f5e9 green lighten-5</p>\n                </div>\n                <div class=\"green lighten-4\">\n                    <p>#c8e6c9 green lighten-4</p>\n                </div>\n                <div class=\"green lighten-3\">\n                    <p>#a5d6a7 green lighten-3</p>\n                </div>\n                <div class=\"green lighten-2\">\n                    <p>#81c784 green lighten-2</p>\n                </div>\n                <div class=\"green lighten-1\">\n                    <p>#66bb6a green lighten-1</p>\n                </div>\n                <div class=\"green\">\n                    <p>#4caf50 green</p>\n                </div>\n                <div class=\"green darken-1 white-text\">\n                    <p>#43a047 green darken-1</p>\n                </div>\n                <div class=\"green darken-2 white-text\">\n                    <p>#388e3c green darken-2</p>\n                </div>\n                <div class=\"green darken-3 white-text\">\n                    <p>#2e7d32 green darken-3</p>\n                </div>\n                <div class=\"green darken-4 white-text\">\n                    <p>#1b5e20 green darken-4</p>\n                </div>\n                <div class=\"green accent-1\">\n                    <p>#b9f6ca green accent-1</p>\n                </div>\n                <div class=\"green accent-2\">\n                    <p>#69f0ae green accent-2</p>\n                </div>\n                <div class=\"green accent-3\">\n                    <p>#00e676 green accent-3</p>\n                </div>\n                <div class=\"green accent-4 white-text\">\n                    <p>#00c853 green accent-4</p>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"light-green lighten-5\">\n                    <p>#f1f8e9 light-green lighten-5</p>\n                </div>\n                <div class=\"light-green lighten-4\">\n                    <p>#dcedc8 light-green lighten-4</p>\n                </div>\n                <div class=\"light-green lighten-3\">\n                    <p>#c5e1a5 light-green lighten-3</p>\n                </div>\n                <div class=\"light-green lighten-2\">\n                    <p>#aed581 light-green lighten-2</p>\n                </div>\n                <div class=\"light-green lighten-1\">\n                    <p>#9ccc65 light-green lighten-1</p>\n                </div>\n                <div class=\"light-green\">\n                    <p>#8bc34a light-green</p>\n                </div>\n                <div class=\"light-green darken-1 white-text\">\n                    <p>#7cb342 light-green darken-1</p>\n                </div>\n                <div class=\"light-green darken-2 white-text\">\n                    <p>#689f38 light-green darken-2</p>\n                </div>\n                <div class=\"light-green darken-3 white-text\">\n                    <p>#558b2f light-green darken-3</p>\n                </div>\n                <div class=\"light-green darken-4 white-text\">\n                    <p>#33691e light-green darken-4</p>\n                </div>\n                <div class=\"light-green accent-1\">\n                    <p>#ccff90 light-green accent-1</p>\n                </div>\n                <div class=\"light-green accent-2\">\n                    <p>#b2ff59 light-green accent-2</p>\n                </div>\n                <div class=\"light-green accent-3\">\n                    <p>#76ff03 light-green accent-3</p>\n                </div>\n                <div class=\"light-green accent-4 white-text\">\n                    <p>#64dd17 light-green accent-4</p>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"lime lighten-5\">\n                    <p>#f9fbe7 lime lighten-5</p>\n                </div>\n                <div class=\"lime lighten-4\">\n                    <p>#f0f4c3 lime lighten-4</p>\n                </div>\n                <div class=\"lime lighten-3\">\n                    <p>#e6ee9c lime lighten-3</p>\n                </div>\n                <div class=\"lime lighten-2\">\n                    <p>#dce775 lime lighten-2</p>\n                </div>\n                <div class=\"lime lighten-1\">\n                    <p>#d4e157 lime lighten-1</p>\n                </div>\n                <div class=\"lime\">\n                    <p>#cddc39 lime</p>\n                </div>\n                <div class=\"lime darken-1 white-text\">\n                    <p>#c0ca33 lime darken-1</p>\n                </div>\n                <div class=\"lime darken-2 white-text\">\n                    <p>#afb42b lime darken-2</p>\n                </div>\n                <div class=\"lime darken-3 white-text\">\n                    <p>#9e9d24 lime darken-3</p>\n                </div>\n                <div class=\"lime darken-4 white-text\">\n                    <p>#827717 lime darken-4</p>\n                </div>\n                <div class=\"lime accent-1\">\n                    <p>#f4ff81 lime accent-1</p>\n                </div>\n                <div class=\"lime accent-2\">\n                    <p>#eeff41 lime accent-2</p>\n                </div>\n                <div class=\"lime accent-3\">\n                    <p>#c6ff00 lime accent-3</p>\n                </div>\n                <div class=\"lime accent-4 white-text\">\n                    <p>#aeea00 lime accent-4</p>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"yellow lighten-5\">\n                    <p>#fffde7 yellow lighten-5</p>\n                </div>\n                <div class=\"yellow lighten-4\">\n                    <p>#fff9c4 yellow lighten-4</p>\n                </div>\n                <div class=\"yellow lighten-3\">\n                    <p>#fff59d yellow lighten-3</p>\n                </div>\n                <div class=\"yellow lighten-2\">\n                    <p>#fff176 yellow lighten-2</p>\n                </div>\n                <div class=\"yellow lighten-1\">\n                    <p>#ffee58 yellow lighten-1</p>\n                </div>\n                <div class=\"yellow\">\n                    <p>#ffeb3b yellow</p>\n                </div>\n                <div class=\"yellow darken-1 white-text\">\n                    <p>#fdd835 yellow darken-1</p>\n                </div>\n                <div class=\"yellow darken-2 white-text\">\n                    <p>#fbc02d yellow darken-2</p>\n                </div>\n                <div class=\"yellow darken-3 white-text\">\n                    <p>#f9a825 yellow darken-3</p>\n                </div>\n                <div class=\"yellow darken-4 white-text\">\n                    <p>#f57f17 yellow darken-4</p>\n                </div>\n                <div class=\"yellow accent-1\">\n                    <p>#ffff8d yellow accent-1</p>\n                </div>\n                <div class=\"yellow accent-2\">\n                    <p>#ffff00 yellow accent-2</p>\n                </div>\n                <div class=\"yellow accent-3\">\n                    <p>#ffea00 yellow accent-3</p>\n                </div>\n                <div class=\"yellow accent-4 white-text\">\n                    <p>#ffd600 yellow accent-4</p>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"amber lighten-5\">\n                    <p>#fff8e1 amber lighten-5</p>\n                </div>\n                <div class=\"amber lighten-4\">\n                    <p>#ffecb3 amber lighten-4</p>\n                </div>\n                <div class=\"amber lighten-3\">\n                    <p>#ffe082 amber lighten-3</p>\n                </div>\n                <div class=\"amber lighten-2\">\n                    <p>#ffd54f amber lighten-2</p>\n                </div>\n                <div class=\"amber lighten-1\">\n                    <p>#ffca28 amber lighten-1</p>\n                </div>\n                <div class=\"amber\">\n                    <p>#ffc107 amber</p>\n                </div>\n                <div class=\"amber darken-1 white-text\">\n                    <p>#ffb300 amber darken-1</p>\n                </div>\n                <div class=\"amber darken-2 white-text\">\n                    <p>#ffa000 amber darken-2</p>\n                </div>\n                <div class=\"amber darken-3 white-text\">\n                    <p>#ff8f00 amber darken-3</p>\n                </div>\n                <div class=\"amber darken-4 white-text\">\n                    <p>#ff6f00 amber darken-4</p>\n                </div>\n                <div class=\"amber accent-1\">\n                    <p>#ffe57f amber accent-1</p>\n                </div>\n                <div class=\"amber accent-2\">\n                    <p>#ffd740 amber accent-2</p>\n                </div>\n                <div class=\"amber accent-3\">\n                    <p>#ffc400 amber accent-3</p>\n                </div>\n                <div class=\"amber accent-4 white-text\">\n                    <p>#ffab00 amber accent-4</p>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"orange lighten-5\">\n                    <p>#fff3e0 orange lighten-5</p>\n                </div>\n                <div class=\"orange lighten-4\">\n                    <p>#ffe0b2 orange lighten-4</p>\n                </div>\n                <div class=\"orange lighten-3\">\n                    <p>#ffcc80 orange lighten-3</p>\n                </div>\n                <div class=\"orange lighten-2\">\n                    <p>#ffb74d orange lighten-2</p>\n                </div>\n                <div class=\"orange lighten-1\">\n                    <p>#ffa726 orange lighten-1</p>\n                </div>\n                <div class=\"orange\">\n                    <p>#ff9800 orange</p>\n                </div>\n                <div class=\"orange darken-1 white-text\">\n                    <p>#fb8c00 orange darken-1</p>\n                </div>\n                <div class=\"orange darken-2 white-text\">\n                    <p>#f57c00 orange darken-2</p>\n                </div>\n                <div class=\"orange darken-3 white-text\">\n                    <p>#ef6c00 orange darken-3</p>\n                </div>\n                <div class=\"orange darken-4 white-text\">\n                    <p>#e65100 orange darken-4</p>\n                </div>\n                <div class=\"orange accent-1\">\n                    <p>#ffd180 orange accent-1</p>\n                </div>\n                <div class=\"orange accent-2\">\n                    <p>#ffab40 orange accent-2</p>\n                </div>\n                <div class=\"orange accent-3\">\n                    <p>#ff9100 orange accent-3</p>\n                </div>\n                <div class=\"orange accent-4 white-text\">\n                    <p>#ff6d00 orange accent-4</p>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"deep-orange lighten-5\">\n                    <p>#fbe9e7 deep-orange lighten-5</p>\n                </div>\n                <div class=\"deep-orange lighten-4\">\n                    <p>#ffccbc deep-orange lighten-4</p>\n                </div>\n                <div class=\"deep-orange lighten-3\">\n                    <p>#ffab91 deep-orange lighten-3</p>\n                </div>\n                <div class=\"deep-orange lighten-2\">\n                    <p>#ff8a65 deep-orange lighten-2</p>\n                </div>\n                <div class=\"deep-orange lighten-1\">\n                    <p>#ff7043 deep-orange lighten-1</p>\n                </div>\n                <div class=\"deep-orange\">\n                    <p>#ff5722 deep-orange</p>\n                </div>\n                <div class=\"deep-orange darken-1 white-text\">\n                    <p>#f4511e deep-orange darken-1</p>\n                </div>\n                <div class=\"deep-orange darken-2 white-text\">\n                    <p>#e64a19 deep-orange darken-2</p>\n                </div>\n                <div class=\"deep-orange darken-3 white-text\">\n                    <p>#d84315 deep-orange darken-3</p>\n                </div>\n                <div class=\"deep-orange darken-4 white-text\">\n                    <p>#bf360c deep-orange darken-4</p>\n                </div>\n                <div class=\"deep-orange accent-1\">\n                    <p>#ff9e80 deep-orange darken-1</p>\n                </div>\n                <div class=\"deep-orange accent-2\">\n                    <p>#ff6e40 deep-orange darken-2</p>\n                </div>\n                <div class=\"deep-orange accent-3\">\n                    <p>#ff3d00 deep-orange darken-3</p>\n                </div>\n                <div class=\"deep-orange accent-4 white-text\">\n                    <p>#dd2c00 deep-orange darken-4</p>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"brown lighten-5\">\n                    <p>#efebe9 brown lighten-5</p>\n                </div>\n                <div class=\"brown lighten-4\">\n                    <p>#d7ccc8 brown lighten-4</p>\n                </div>\n                <div class=\"brown lighten-3\">\n                    <p>#bcaaa4 brown lighten-3</p>\n                </div>\n                <div class=\"brown lighten-2\">\n                    <p>#a1887f brown lighten-2</p>\n                </div>\n                <div class=\"brown lighten-1\">\n                    <p>#8d6e63 brown lighten-1</p>\n                </div>\n                <div class=\"brown\">\n                    <p>#795548 brown</p>\n                </div>\n                <div class=\"brown darken-1 white-text\">\n                    <p>#6d4c41 brown darken-1</p>\n                </div>\n                <div class=\"brown darken-2 white-text\">\n                    <p>#5d4037 brown darken-2</p>\n                </div>\n                <div class=\"brown darken-3 white-text\">\n                    <p>#4e342e brown darken-3</p>\n                </div>\n                <div class=\"brown darken-4 white-text\">\n                    <p>#3e2723 brown darken-4</p>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"grey lighten-5\">\n                    <p>#fafafa grey lighten-5</p>\n                </div>\n                <div class=\"grey lighten-4\">\n                    <p>#f5f5f5 grey lighten-4</p>\n                </div>\n                <div class=\"grey lighten-3\">\n                    <p>#eeeeee grey lighten-3</p>\n                </div>\n                <div class=\"grey lighten-2\">\n                    <p>#e0e0e0 grey lighten-2</p>\n                </div>\n                <div class=\"grey lighten-1\">\n                    <p>#bdbdbd grey lighten-1</p>\n                </div>\n                <div class=\"grey\">\n                    <p>#9e9e9e grey</p>\n                </div>\n                <div class=\"grey darken-1 white-text\">\n                    <p>#757575 grey darken-1</p>\n                </div>\n                <div class=\"grey darken-2 white-text\">\n                    <p>#616161 grey darken-2</p>\n                </div>\n                <div class=\"grey darken-3 white-text\">\n                    <p>#424242 grey darken-3</p>\n                </div>\n                <div class=\"grey darken-4 white-text\">\n                    <p>#212121 grey darken-4</p>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"blue-grey lighten-5\">\n                    <p>#eceff1 blue-grey lighten-5</p>\n                </div>\n                <div class=\"blue-grey lighten-4\">\n                    <p>#cfd8dc blue-grey lighten-4</p>\n                </div>\n                <div class=\"blue-grey lighten-3\">\n                    <p>#b0bec5 blue-grey lighten-3</p>\n                </div>\n                <div class=\"blue-grey lighten-2\">\n                    <p>#90a4ae blue-grey lighten-2</p>\n                </div>\n                <div class=\"blue-grey lighten-1\">\n                    <p>#78909c blue-grey lighten-1</p>\n                </div>\n                <div class=\"blue-grey\">\n                    <p>#607d8b blue-grey</p>\n                </div>\n                <div class=\"blue-grey darken-1 white-text\">\n                    <p>#546e7a blue-grey darken-1</p>\n                </div>\n                <div class=\"blue-grey darken-2 white-text\">\n                    <p>#455a64 blue-grey darken-2</p>\n                </div>\n                <div class=\"blue-grey darken-3 white-text\">\n                    <p>#37474f blue-grey darken-3</p>\n                </div>\n                <div class=\"blue-grey darken-4 white-text\">\n                    <p>#263238 blue-grey darken-4</p>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"black white-text\">\n                    <p>#000000 black</p>\n                </div>\n                <div class=\"white\">\n                    <p>#ffffff white</p>\n                </div>\n                <div class=\"transparent\">\n                    <p>transparent</p>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"mdb-color lighten-5\">\n                    <p>#eceff1 mdb-color lighten-5</p>\n                </div>\n                <div class=\"mdb-color lighten-4\">\n                    <p>#cfd8dc mdb-color lighten-4</p>\n                </div>\n                <div class=\"mdb-color lighten-3\">\n                    <p>#b0bec5 mdb-color lighten-3</p>\n                </div>\n                <div class=\"mdb-color lighten-2\">\n                    <p>#90a4ae mdb-color lighten-2</p>\n                </div>\n                <div class=\"mdb-color lighten-1 white-text\">\n                    <p>#78909c mdb-color lighten-1</p>\n                </div>\n                <div class=\"mdb-color white-text\">\n                    <p>#607d8b mdb-color</p>\n                </div>\n                <div class=\"mdb-color darken-1 white-text\">\n                    <p>#546e7a mdb-color darken-1</p>\n                </div>\n                <div class=\"mdb-color darken-2 white-text\">\n                    <p>#455a64 mdb-color darken-2</p>\n                </div>\n                <div class=\"mdb-color darken-3 white-text\">\n                    <p>#37474f mdb-color darken-3</p>\n                </div>\n                <div class=\"mdb-color darken-4 white-text\">\n                    <p>#263238 mdb-color darken-4</p>\n                </div>\n            </div>\n        </div>\n\n    </section>\n    <!--Section: Live preview-->\n\n</section>\n<!--/Section: -->\n\n<hr class=\"my-5\">\n\n<!--Section: -->\n<section id=\"rgba-colors\">\n\n    <!--Title-->\n    <h4 class=\"mb-5 font-bold dark-grey-text\">\n        <strong>RGBA Colors</strong>\n    </h4>\n\n    <!--Description-->\n    <p class=\"description\"></p>\n\n    <!--Section: Live preview-->\n    <section>\n\n        <div class=\"row dynamic-color\">\n\n            <div class=\"col-md-4\">\n                <div class=\"rgba-blue-light\">\n                    <p>rgba(3, 169, 244, 0.3) rgba-blue-light</p>\n                </div>\n                <div class=\"rgba-red-light\">\n                    <p>rgba(244, 67, 54, 0.3) rgba-red-light</p>\n                </div>\n                <div class=\"rgba-pink-light\">\n                    <p>rgba(233, 30, 99, 0.3) rgba-pink-light</p>\n                </div>\n                <div class=\"rgba-purple-light\">\n                    <p>rgba(156, 39, 176, 0.3) rgba-purple-light</p>\n                </div>\n                <div class=\"rgba-indigo-light\">\n                    <p>rgba(63, 81, 181, 0.3) rgba-indigo-light</p>\n                </div>\n                <div class=\"rgba-cyan-light\">\n                    <p>rgba(0, 188, 212, 0.3) rgba-cyan-light</p>\n                </div>\n                <div class=\"rgba-teal-light\">\n                    <p>rgba(0, 150, 136, 0.3) rgba-teal-light</p>\n                </div>\n                <div class=\"rgba-green-light\">\n                    <p>#rgba(76, 175, 80, 0.3) rgba-green-light</p>\n                </div>\n                <div class=\"rgba-lime-light\">\n                    <p>rgba(205, 220, 57, 0.3) rgba-lime-light</p>\n                </div>\n                <div class=\"rgba-yellow-light\">\n                    <p>rgba(255, 235, 59, 0.3) rgba-yellow-light</p>\n                </div>\n                <div class=\"rgba-orange-light\">\n                    <p>rgba(255, 152, 0, 0.3) rgba-orange-light</p>\n                </div>\n                <div class=\"rgba-brown-light\">\n                    <p>rgba(121, 85, 72, 0.3) rgba-brown-light</p>\n                </div>\n                <div class=\"rgba-grey-light\">\n                    <p>rgba(158, 158, 158, 0.3) rgba-grey-light</p>\n                </div>\n                <div class=\"rgba-bluegrey-light\">\n                    <p>rgba(96, 125, 139, 0.3) rgba-bluegrey-light</p>\n                </div>\n                <div class=\"rgba-black-light\">\n                    <p>rgba(0, 0, 0, 0.3) rgba-black-light</p>\n                </div>\n                <div class=\"rgba-stylish-light\">\n                    <p>rgba(62, 69, 81, 0.3) rgba-stylish-light</p>\n                </div>\n                <div class=\"rgba-white-light\">\n                    <p>rgba(255, 255, 255, 0.3) rgba-white-light</p>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"rgba-blue-strong white-text\">\n                    <p>rgba(3, 169, 244, 0.7) rgba-blue-strong</p>\n                </div>\n                <div class=\"rgba-red-strong white-text\">\n                    <p>rgba(244, 67, 54, 0.7) rgba-red-strong</p>\n                </div>\n                <div class=\"rgba-pink-strong white-text\">\n                    <p>rgba(233, 30, 99, 0.7) rgba-pink-strong</p>\n                </div>\n                <div class=\"rgba-purple-strong white-text\">\n                    <p>rgba(156, 39, 176, 0.7) rgba-purple-strong</p>\n                </div>\n                <div class=\"rgba-indigo-strong white-text\">\n                    <p>rgba(63, 81, 181, 0.7) rgba-indigo-strong</p>\n                </div>\n                <div class=\"rgba-cyan-strong white-text\">\n                    <p>rgba(0, 188, 212, 0.7) rgba-cyan-strong</p>\n                </div>\n                <div class=\"rgba-teal-strong white-text\">\n                    <p>rgba(0, 150, 136, 0.7) rgba-teal-strong</p>\n                </div>\n                <div class=\"rgba-green-strong white-text\">\n                    <p>#rgba(76, 175, 80, 0.7) rgba-green-strong</p>\n                </div>\n                <div class=\"rgba-lime-strong\">\n                    <p>rgba(205, 220, 57, 0.7) rgba-lime-strong</p>\n                </div>\n                <div class=\"rgba-yellow-strong\">\n                    <p>rgba(255, 235, 59, 0.7) rgba-yellow-strong</p>\n                </div>\n                <div class=\"rgba-orange-strong white-text\">\n                    <p>rgba(255, 152, 0, 0.7) rgba-orange-strong</p>\n                </div>\n                <div class=\"rgba-brown-strong white-text\">\n                    <p>rgba(121, 85, 72, 0.7) rgba-brown-strong</p>\n                </div>\n                <div class=\"rgba-grey-strong white-text\">\n                    <p>rgba(158, 158, 158, 0.7) rgba-grey-strong</p>\n                </div>\n                <div class=\"rgba-bluegrey-strong white-text\">\n                    <p>rgba(96, 125, 139, 0.7) rgba-bluegrey-strong</p>\n                </div>\n                <div class=\"rgba-black-strong white-text\">\n                    <p>rgba(0, 0, 0, 0.7) rgba-black-strong</p>\n                </div>\n                <div class=\"rgba-stylish-strong white-text\">\n                    <p>rgba(62, 69, 81, 0.7) rgba-stylish-strong</p>\n                </div>\n                <div class=\"rgba-white-strong\">\n                    <p>rgba(255, 255, 255, 0.7) rgba-white-strong</p>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"rgba-blue-slight\">\n                    <p>rgba(3, 169, 244, 0.1) rgba-blue-slight</p>\n                </div>\n                <div class=\"rgba-red-slight\">\n                    <p>rgba(244, 67, 54, 0.1) rgba-red-slight</p>\n                </div>\n                <div class=\"rgba-pink-slight\">\n                    <p>rgba(233, 30, 99, 0.1) rgba-pink-slight</p>\n                </div>\n                <div class=\"rgba-purple-slight\">\n                    <p>rgba(156, 39, 176, 0.1) rgba-purple-slight</p>\n                </div>\n                <div class=\"rgba-indigo-slight\">\n                    <p>rgba(63, 81, 181, 0.1) rgba-indigo-slight</p>\n                </div>\n                <div class=\"rgba-cyan-slight\">\n                    <p>rgba(0, 188, 212, 0.1) rgba-cyan-slight</p>\n                </div>\n                <div class=\"rgba-teal-slight\">\n                    <p>rgba(0, 150, 136, 0.1) rgba-teal-slight</p>\n                </div>\n                <div class=\"rgba-green-slight\">\n                    <p>#rgba(76, 175, 80, 0.1) rgba-green-slight</p>\n                </div>\n                <div class=\"rgba-lime-slight\">\n                    <p>rgba(205, 220, 57, 0.1) rgba-lime-slight</p>\n                </div>\n                <div class=\"rgba-yellow-slight\">\n                    <p>rgba(255, 235, 59, 0.1) rgba-yellow-slight</p>\n                </div>\n                <div class=\"rgba-orange-slight\">\n                    <p>rgba(255, 152, 0, 0.1) rgba-orange-slight</p>\n                </div>\n                <div class=\"rgba-brown-slight\">\n                    <p>rgba(121, 85, 72, 0.1) rgba-brown-slight</p>\n                </div>\n                <div class=\"rgba-grey-slight\">\n                    <p>rgba(158, 158, 158, 0.1) rgba-grey-slight</p>\n                </div>\n                <div class=\"rgba-bluegrey-slight\">\n                    <p>rgba(96, 125, 139, 0.1) rgba-bluegrey-slight</p>\n                </div>\n                <div class=\"rgba-black-slight\">\n                    <p>rgba(0, 0, 0, 0.1) rgba-black-slight</p>\n                </div>\n                <div class=\"rgba-stylish-slight\">\n                    <p>rgba(62, 69, 81, 0.1) rgba-stylish-slight</p>\n                </div>\n                <div class=\"rgba-white-slight\">\n                    <p>rgba(255, 255, 255, 0.1) rgba-white-slight</p>\n                </div>\n            </div>\n\n        </div>\n\n    </section>\n    <!--Section: Live preview-->\n\n</section>\n<!--/Section: -->\n\n<hr class=\"my-5\">\n\n<!--Section: -->\n<section id=\"text-colors\">\n\n    <!--Title-->\n    <h4 class=\"mb-5 font-bold dark-grey-text\">\n        <strong>Text colors</strong>\n    </h4>\n\n    <!--Description-->\n    <p class=\"description\">MDBootstrap allows you to simply set the text color. All you have to to is add one of our color classes:</p>\n\n    <!--Section: Live preview-->\n    <section>\n\n        <p class=\"red-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n        <p class=\"pink-text\">Impedit architecto, totam hic sunt eum odio, deleniti.</p>\n        <p class=\"purple-text\">Similique ex, expedita minus assumenda a magni beatae dolorum itaque.</p>\n        <p class=\"deep-purple-text\">Veritatis eum libero nam, adipisci, necessitatibus eos.</p>\n        <p class=\"indigo-text\">Sapiente, ea. Molestias sunt nihil saepe numquam quas perferendis.</p>\n        <p class=\"blue-text\">Sapiente sit, possimus maiores, quo alias corporis cum eum nesciunt.</p>\n        <p class=\"light-blue-text\">Corrupti adipisci, praesentium iusto eos, iure debitis modi.</p>\n        <p class=\"cyan-text\">Odio autem veritatis aliquam consequuntur ea voluptatibus.</p>\n        <p class=\"teal-text\">Similique, adipisci ea, sequi magnam sit inventore.</p>\n        <p class=\"green-text\">Eos et vitae, odit deserunt dignissimos voluptas.</p>\n        <p class=\"light-green-text\">Fugit nihil numquam inventore accusantium tenetur ex est.</p>\n        <p class=\"lime-text\">Sed odit inventore illum excepturi officia, reiciendis numquam modi.</p>\n        <p class=\"yellow-text\">At odio animi distinctio, aut enim tempora nobis error odit mollitia.</p>\n        <p class=\"amber-text\">Quo at accusamus vel earum hic, inventore non, minima sint.</p>\n        <p class=\"orange-text\">Iusto odit eos distinctio temporibus voluptates ad, illo repellat.</p>\n        <p class=\"deep-orange-text\">Quas fugit fuga assumenda nihil esse et culpa reiciendis voluptatum.</p>\n        <p class=\"brown-text\">Excepturi iusto amet sunt illo ad debitis quibusdam eius, consequatur.</p>\n        <p class=\"grey-text\">Non sint nulla incidunt, odit repellat tempore, veniam ratione fugit.</p>\n        <p class=\"blue-grey-text\">Eius, provident. Quo similique, repellat atque voluptas explicabo odio.</p>\n        <p class=\"mdb-color white-text\">In consequuntur error, non consequatur expedita maxime dolorum.</p>\n\n    </section>\n    <!--Section: Live preview-->\n\n</section>\n<!--/Section: -->\n<div class=\"row justify-content-center pt-3\">\n    <div class=\"col-md-10\">\n        <!--Section: Docs link-->\n        <section class=\"pb-4 pt-4\">\n            <panel header=\"Full documentation\" color=\"primary-color\">\n                <p class=\"card-text\">Read the full documentation for these components.</p>\n                <a href=\"https://mdbootstrap.com/angular/css/colors/\" target=\"_blank\" class=\"btn btn-primary waves-effect waves-light\">Learn more</a>\n            </panel>\n        </section>\n        <!--/.Section: Docs link-->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/css/colors/colors.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/css/colors/colors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorsComponent = (function () {
    function ColorsComponent() {
    }
    ColorsComponent.prototype.ngOnInit = function () {
    };
    ColorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-colors',
            template: __webpack_require__("./src/app/views/css/colors/colors.component.html"),
            styles: [__webpack_require__("./src/app/views/css/colors/colors.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ColorsComponent);
    return ColorsComponent;
}());



/***/ }),

/***/ "./src/app/views/css/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-5 font-bold\">\n    <strong>Grid system</strong>\n</h2>\n\n<!--Section: Five grid tiers-->\n<section class=\"mt-5\">\n\n    <h4 class=\"my-5 dark-grey-text font-bold\">\n        <strong>Five grid tiers</strong>\n    </h4>\n\n    <div class=\"row\">\n\n        <!--Grid column-->\n        <div class=\"col-4\">\n            <div class=\"card white text-center z-depth-2\">\n                <div class=\"card-body\">\n                    <p class=\"mb-0\">.col-4</p>\n                </div>\n            </div>\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-4\">\n            <div class=\"card white text-center z-depth-2\">\n                <div class=\"card-body\">\n                    <p class=\"mb-0\">.col-4</p>\n                </div>\n            </div>\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-4\">\n            <div class=\"card white text-center z-depth-2\">\n                <div class=\"card-body\">\n                    <p class=\"mb-0\">.col-4</p>\n                </div>\n            </div>\n        </div>\n        <!--Grid column-->\n\n    </div>\n\n    <div class=\"row mt-4\">\n\n        <!--Grid column-->\n        <div class=\"col-sm-4\">\n            <div class=\"card white text-center z-depth-2\">\n                <div class=\"card-body\">\n                    <p class=\"mb-0\">.col-sm-4</p>\n                </div>\n            </div>\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-sm-4\">\n            <div class=\"card white text-center z-depth-2\">\n                <div class=\"card-body\">\n                    <p class=\"mb-0\">.col-sm-4</p>\n                </div>\n            </div>\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-sm-4\">\n            <div class=\"card white text-center z-depth-2\">\n                <div class=\"card-body\">\n                    <p class=\"mb-0\">.col-sm-4</p>\n                </div>\n            </div>\n        </div>\n        <!--Grid column-->\n\n    </div>\n\n    <div class=\"row mt-4\">\n\n        <!--Grid column-->\n        <div class=\"col-md-4\">\n            <div class=\"card white text-center z-depth-2\">\n                <div class=\"card-body\">\n                    <p class=\"mb-0\">.col-md-4</p>\n                </div>\n            </div>\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-md-4\">\n            <div class=\"card white text-center z-depth-2\">\n                <div class=\"card-body\">\n                    <p class=\"mb-0\">.col-md-4</p>\n                </div>\n            </div>\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-md-4\">\n            <div class=\"card white text-center z-depth-2\">\n                <div class=\"card-body\">\n                    <p class=\"mb-0\">.col-md-4</p>\n                </div>\n            </div>\n        </div>\n        <!--Grid column-->\n\n    </div>\n\n    <div class=\"row mt-4\">\n\n        <!--Grid column-->\n        <div class=\"col-lg-4\">\n            <div class=\"card white text-center z-depth-2\">\n                <div class=\"card-body\">\n                    <p class=\"mb-0\">.col-lg-4</p>\n                </div>\n            </div>\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-4\">\n            <div class=\"card white text-center z-depth-2\">\n                <div class=\"card-body\">\n                    <p class=\"mb-0\">.col-lg-4</p>\n                </div>\n            </div>\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-4\">\n            <div class=\"card white text-center z-depth-2\">\n                <div class=\"card-body\">\n                    <p class=\"mb-0\">.col-lg-4</p>\n                </div>\n            </div>\n        </div>\n        <!--Grid column-->\n\n    </div>\n\n    <div class=\"row mt-4\">\n\n        <!--Grid column-->\n        <div class=\"col-xl-4\">\n            <div class=\"card white text-center z-depth-2\">\n                <div class=\"card-body\">\n                    <p class=\"mb-0\">.col-xl-4</p>\n                </div>\n            </div>\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-xl-4\">\n            <div class=\"card white text-center z-depth-2\">\n                <div class=\"card-body\">\n                    <p class=\"mb-0\">.col-xl-4</p>\n                </div>\n            </div>\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-xl-4\">\n            <div class=\"card white text-center z-depth-2\">\n                <div class=\"card-body\">\n                    <p class=\"mb-0\">.col-xl-4</p>\n                </div>\n            </div>\n        </div>\n        <!--Grid column-->\n    </div>\n\n</section>\n<!--Section: Five grid tiers-->\n\n<!--Section: Three equal columns-->\n<section class=\"mb-5\">\n\n    <div class=\"container-fluid mt-5\">\n        <h4 class=\"my-5 pt-4 dark-grey-text font-bold\">\n            <strong>Three equal columns</strong>\n        </h4>\n\n        <div class=\"row mt-4\">\n\n            <!--Grid column-->\n            <div class=\"col-md-4\">\n                <div class=\"card white text-center z-depth-2\">\n                    <div class=\"card-body\">\n                        <p class=\" mb-0\">.col-md-4</p>\n                    </div>\n                </div>\n            </div>\n            <!--Grid column-->\n\n            <!--Grid column-->\n            <div class=\"col-md-4\">\n                <div class=\"card white text-center z-depth-2\">\n                    <div class=\"card-body\">\n                        <p class=\" mb-0\">.col-md-4</p>\n                    </div>\n                </div>\n            </div>\n            <!--Grid column-->\n\n            <!--Grid column-->\n            <div class=\"col-md-4\">\n                <div class=\"card white text-center z-depth-2\">\n                    <div class=\"card-body\">\n                        <p class=\" mb-0\">.col-md-4</p>\n                    </div>\n                </div>\n            </div>\n            <!--Grid column-->\n\n        </div>\n\n    </div>\n\n</section>\n<!--Section: Three equal columns-->\n\n<!--Section: Two columns-->\n<section class=\"mb-5\">\n\n    <div class=\"container-fluid mt-5\">\n        <h4 class=\"my-5 pt-4 dark-grey-text font-bold\">\n            <strong>Two columns</strong>\n        </h4>\n\n        <div class=\"row\">\n\n            <!--Grid column-->\n            <div class=\"col-md-8\">\n                <div class=\"card white text-center z-depth-2\">\n                    <div class=\"card-body\">\n                        <p class=\" mb-0\">.col-md-8</p>\n                    </div>\n                </div>\n            </div>\n            <!--Grid column-->\n\n            <!--Grid column-->\n            <div class=\"col-md-4\">\n                <div class=\"card white text-center z-depth-2\">\n                    <div class=\"card-body\">\n                        <p class=\" mb-0\">.col-md-4</p>\n                    </div>\n                </div>\n            </div>\n            <!--Grid column-->\n\n        </div>\n    </div>\n\n</section>\n<!--Section: Two columns-->\n\n<!--Section: Mixed: mobile and desktop-->\n<section class=\"mb-5\">\n\n    <div class=\"container-fluid mt-5\">\n        <h4 class=\"my-5 pt-4 dark-grey-text font-bold\">\n            <strong>Mixed: mobile and desktop</strong>\n        </h4>\n\n        <div class=\"row\">\n\n            <!--Grid column-->\n            <div class=\"col-12 col-md-8\">\n                <div class=\"card white text-center z-depth-2\">\n                    <div class=\"card-body\">\n                        <p class=\" mb-0\">.col-12 .col-md-8</p>\n                    </div>\n                </div>\n            </div>\n            <!--Grid column-->\n\n            <!--Grid column-->\n            <div class=\"col-6 col-md-4\">\n                <div class=\"card white text-center z-depth-2\">\n                    <div class=\"card-body\">\n                        <p class=\" mb-0\">.col-6 .col-md-4</p>\n                    </div>\n                </div>\n            </div>\n            <!--Grid column-->\n\n        </div>\n\n        <div class=\"row mt-4\">\n\n            <!--Grid column-->\n            <div class=\"col-6 col-md-4\">\n                <div class=\"card white text-center z-depth-2\">\n                    <div class=\"card-body\">\n                        <p class=\" mb-0\">.col-6 .col-md-4</p>\n                    </div>\n                </div>\n            </div>\n            <!--Grid column-->\n\n            <!--Grid column-->\n            <div class=\"col-6 col-md-4\">\n                <div class=\"card white text-center z-depth-2\">\n                    <div class=\"card-body\">\n                        <p class=\" mb-0\">.col-6 .col-md-4</p>\n                    </div>\n                </div>\n            </div>\n            <!--Grid column-->\n\n            <!--Grid column-->\n            <div class=\"col-6 col-md-4\">\n                <div class=\"card white text-center z-depth-2\">\n                    <div class=\"card-body\">\n                        <p class=\" mb-0\">.col-6 .col-md-4</p>\n                    </div>\n                </div>\n            </div>\n            <!--Grid column-->\n\n        </div>\n\n        <div class=\"row mt-4\">\n\n            <!--Grid column-->\n            <div class=\"col-6\">\n                <div class=\"card white text-center z-depth-2\">\n                    <div class=\"card-body\">\n                        <p class=\" mb-0\">.col-md-6</p>\n                    </div>\n                </div>\n            </div>\n            <!--Grid column-->\n\n            <!--Grid column-->\n            <div class=\"col-6\">\n                <div class=\"card white text-center z-depth-2\">\n                    <div class=\"card-body\">\n                        <p class=\" mb-0\">.col-6</p>\n                    </div>\n                </div>\n            </div>\n            <!--Grid column-->\n\n        </div>\n\n    </div>\n\n</section>\n<!--Section: Mixed: mobile and desktop-->\n\n<!--Section: Mixed: mobile, tablet, and desktop-->\n<section class=\"mb-5\">\n\n    <div class=\"container-fluid mt-5\">\n        <h4 class=\"my-5 pt-4 dark-grey-text font-bold\">\n            <strong>Mixed: mobile, tablet, and desktop</strong>\n        </h4>\n\n        <div class=\"row\">\n\n            <!--Grid column-->\n            <div class=\"col-12 col-sm-6 col-lg-8\">\n                <div class=\"card white text-center z-depth-2\">\n                    <div class=\"card-body\">\n                        <p class=\"mb-0\">.col-12 .col-sm-6 .col-lg-8</p>\n                    </div>\n                </div>\n            </div>\n            <!--Grid column-->\n\n            <!--Grid column-->\n            <div class=\"col-6 col-lg-4\">\n                <div class=\"card white text-center z-depth-2\">\n                    <div class=\"card-body\">\n                        <p class=\" mb-0\">.col-6 .col-lg-4</p>\n                    </div>\n                </div>\n            </div>\n            <!--Grid column-->\n\n        </div>\n\n        <div class=\"row mt-4\">\n\n            <!--Grid column-->\n            <div class=\"col-6 col-sm-4\">\n                <div class=\"card white text-center z-depth-2\">\n                    <div class=\"card-body\">\n                        <p class=\" mb-0\">.col-6. col-sm-4</p>\n                    </div>\n                </div>\n            </div>\n            <!--Grid column-->\n\n            <!--Grid column-->\n            <div class=\"col-6 col-sm-4\">\n                <div class=\"card white text-center z-depth-2\">\n                    <div class=\"card-body\">\n                        <p class=\" mb-0\">.col-6 .col-sm-4</p>\n                    </div>\n                </div>\n            </div>\n            <!--Grid column-->\n\n            <!--Grid column-->\n            <div class=\"col-6 col-sm-4\">\n                <div class=\"card white text-center z-depth-2\">\n                    <div class=\"card-body\">\n                        <p class=\" mb-0\">.col-6 .col-sm-4</p>\n                    </div>\n                </div>\n            </div>\n            <!--Grid column-->\n\n        </div>\n\n    </div>\n\n</section>\n<!--Section: Mixed: mobile, tablet, and desktop-->\n\n<!--Section: Two columns with two nested columns-->\n<section class=\"mb-5 pb-4\">\n\n    <div class=\"container-fluid mt-5\">\n        <h4 class=\"my-5 pt-4 dark-grey-text font-bold\">\n            <strong>Two columns with two nested columns</strong>\n        </h4>\n\n        <div class=\"row\">\n\n            <!--Grid column-->\n            <div class=\"col-md-8\">\n                <div class=\"card white text-center z-depth-2\">\n                    <div class=\"card-body\">\n                        <p class=\"mb-4 mt-2\">.col-md-8</p>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"card grey lighten-2 text-center z-depth-2\">\n                                    <div class=\"card-body\">\n                                        <p class=\"mb-0\">.col-md-6</p>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-md-6\">\n                                <div class=\"card grey lighten-2 text-center z-depth-2\">\n                                    <div class=\"card-body\">\n                                        <p class=\"mb-0\">.col-md-6</p>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n                <!--Grid column-->\n            </div>\n\n            <!--Grid column-->\n            <div class=\"col-md-4\">\n                <div class=\"card white text-center z-depth-2\">\n                    <div class=\"card-body\">\n                        <p class=\"my-5\">.col-md-4</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</section>\n<!--Section: Two columns with two nested columns-->\n<div class=\"row justify-content-center\">\n    <div class=\"col-md-10\">\n        <!--Section: Docs link-->\n        <section class=\"pb-4 pt-5\">\n            <panel header=\"Full documentation\" color=\"primary-color\">\n                <p class=\"card-text\">Read the full documentation for these components.</p>\n                <a href=\"https://mdbootstrap.com/angular/layout/bootstrap-grid/\" target=\"_blank\" class=\"btn btn-primary waves-effect waves-light\">Learn more</a>\n            </panel>\n        </section>\n        <!--/.Section: Docs link-->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/css/grid/grid.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/css/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridComponent = (function () {
    function GridComponent() {
    }
    GridComponent.prototype.ngOnInit = function () {
    };
    GridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-grid',
            template: __webpack_require__("./src/app/views/css/grid/grid.component.html"),
            styles: [__webpack_require__("./src/app/views/css/grid/grid.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/views/css/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Second row-->\n<div class=\"row mt-5\">\n  <div class=\"col-md-12\">\n    <!--Card-->\n    <div class=\"card card-cascade narrower mt-5\">\n        \n      <!--Card image-->\n      <div class=\"view gradient-card-header blue-gradient\">\n          <h4 class=\"h4-responsive\">Icons</h4>\n      </div>\n      <!--/Card image-->\n\n      <!--Card content-->\n      <div class=\"card-body text-center\">\n          <!--Icons-->\n          <div class=\"example\" id=\"ex1\">                \n\n          <ul class=\"example-list example-list-quad\">\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-address-book\"></i> fa-address-book </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-address-book-o\"></i> fa-address-book-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-address-card\"></i> fa-address-card </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-address-card-o\"></i> fa-address-card-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-adjust\"></i> fa-adjust </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-american-sign-language-interpreting\"></i> fa-american-sign-language-interpreting </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-anchor\"></i> fa-anchor </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-archive\"></i> fa-archive </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-archive\"></i> fa-archive </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-area-chart\"></i> fa-area-chart </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-arrows\"></i> fa-arrows </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-arrows-h\"></i> fa-arrows-h </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-arrows-v\"></i> fa-arrows-v </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-asl-interpreting\"></i> fa-asl-interpreting </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-assistive-listening-systems\"></i> fa-assistive-listening-systems </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-asterisk\"></i> fa-asterisk </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-at\"></i> fa-at </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-audio-description\"></i> fa-audio-description </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-automobile\"></i> fa-automobile </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-balance-scale\"></i> fa-balance-scale </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-ban\"></i> fa-ban </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bank\"></i> fa-bank </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bar-chart\"></i> fa-bar-chart </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bar-chart-o\"></i> fa-bar-chart-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-barcode\"></i> fa-barcode </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bars\"></i> fa-bars </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bath\"></i> fa-bath </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bathtub\"></i> fa-bathtub </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-battery\"></i> fa-battery </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-battery-0\"></i> fa-battery-0 </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-battery-1\"></i> fa-battery-1 </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-battery-2\"></i> fa-battery-2 </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-battery-3\"></i> fa-battery-3 </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-battery-4\"></i> fa-battery-4 </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-battery-empty\"></i> fa-battery-empty </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-battery-full\"></i> fa-battery-full </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-battery-half\"></i> fa-battery-half </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-battery-quarter\"></i> fa-battery-quarter </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-battery-three-quarters\"></i> fa-battery-three-quarters </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bed\"></i> fa-bed </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-beer\"></i> fa-beer </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bell\"></i> fa-bell </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bell-o\"></i> fa-bell-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bell-slash\"></i> fa-bell-slash </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bell-slash-o\"></i> fa-bell-slash-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bicycle\"></i> fa-bicycle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-binoculars\"></i> fa-binoculars </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-birthday-cake\"></i> fa-birthday-cake </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-blind\"></i> fa-blind </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bluetooth\"></i> fa-bluetooth </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bluetooth-b\"></i> fa-bluetooth-b </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bolt\"></i> fa-bolt </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bomb\"></i> fa-bomb </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-book\"></i> fa-book </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bookmark\"></i> fa-bookmark </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bookmark-o\"></i> fa-bookmark-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-braille\"></i> fa-braille </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-briefcase\"></i> fa-briefcase </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bug\"></i> fa-bug </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-building\"></i> fa-building </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-building-o\"></i> fa-building-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bullhorn\"></i> fa-bullhorn </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bullseye\"></i> fa-bullseye </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bus\"></i> fa-bus </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cab\"></i> fa-cab </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-calculator\"></i> fa-calculator </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-calendar\"></i> fa-calendar </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-calendar-check-o\"></i> fa-calendar-check-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-calendar-minus-o\"></i> fa-calendar-minus-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-calendar-o\"></i> fa-calendar-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-calendar-plus-o\"></i> fa-calendar-plus-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-calendar-times-o\"></i> fa-calendar-times-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-camera\"></i> fa-camera </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-camera-retro\"></i> fa-camera-retro </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-car\"></i> fa-car </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-caret-square-o-down\"></i> fa-caret-square-o-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-caret-square-o-left\"></i> fa-caret-square-o-left </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-caret-square-o-right\"></i> fa-caret-square-o-right </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-caret-square-o-up\"></i> fa-caret-square-o-up </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cart-arrow-down\"></i> fa-cart-arrow-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cart-plus\"></i> fa-cart-plus </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cc\"></i> fa-cc </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-certificate\"></i> fa-certificate </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-check\"></i> fa-check </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-check-circle\"></i> fa-check-circle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-check-circle-o\"></i> fa-cc </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-check-square\"></i> fa-check-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-check-square-o\"></i> fa-check-square-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-child\"></i> fa-child </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-circle\"></i> fa-circle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-circle-o\"></i> fa-circle-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-circle-o-notch\"></i> fa-circle-o-notch </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-circle-thin\"></i> fa-circle-thin </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-clock-o\"></i> fa-clock-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-clone\"></i> fa-clone </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-close\"></i> fa-close </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cloud\"></i> fa-cloud </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cloud-download\"></i> fa-cloud-download </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cloud-upload\"></i> fa-cloud-upload </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-code\"></i> fa-code </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-code-fork\"></i> fa-code-fork </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-coffee\"></i> fa-coffee </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cog\"></i> fa-cog </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cogs\"></i> fa-cogs </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-comment\"></i> fa-comment </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-comment-o\"></i> fa-comment-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-commenting\"></i> fa-commenting </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-commenting-o\"></i> fa-commenting-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-comments\"></i> fa-comments </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-comments-o\"></i> fa-comments-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-compass\"></i> fa-compass </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-copyright\"></i> fa-copyright </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-creative-commons\"></i> fa-creative-commons </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-credit-card\"></i> fa-credit-card </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-credit-card-alt\"></i> fa-credit-card-alt </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-crop\"></i> fa-crop </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-crosshairs\"></i> fa-crosshairs </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cube\"></i> fa-cube </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cubes\"></i> fa-cubes </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cutlery\"></i> fa-cutlery </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-dashboard\"></i> fa-dashboard </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-database\"></i> fa-database </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-deaf\"></i> fa-deaf </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-deafness\"></i> fa-deafness </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-desktop\"></i> fa-desktop </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-diamond\"></i> fa-diamond </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-dot-circle-o\"></i> fa-dot-circle-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-download\"></i> fa-download </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-dirvers-license\"></i> fa-dirvers-license </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-drivers-license-o\"></i> fa-drivers-license-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-edit\"></i> fa-edit </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-ellipsis-h\"></i> fa-ellipsis-h </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-ellipsis-v\"></i> fa-ellipsis-v </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-envelope\"></i> fa-envelope </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-envelope-o\"></i> fa-envelope-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-envelope-open\"></i> fa-envelope-open </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-envelope-open-o\"></i> fa-envelope-open-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-envelope-square\"></i> fa-envelope-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-eraser\"></i> fa-eraser </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-exchange\"></i> fa-exchange </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-exclamation\"></i> fa-exclamation </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-exclamation-circle\"></i> fa-exclamation-circle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-exclamation-triangle\"></i> fa-exclamation-triangle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-external-link\"></i> fa-external-link </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-external-link-square\"></i> fa-external-link-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-eye\"></i> fa-eye </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-eye-slash\"></i> fa-eye-slash </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-eyedropper\"></i> fa-eyedropper </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-fax\"></i> fa-fax </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-feed\"></i> fa-feed </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-female\"></i> fa-female </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-flighter-jet\"></i> fa-flighter-jet </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-archive-o\"></i> fa-file-archive-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-audio-o\"></i> fa-file-audio-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-code-o\"></i> fa-file-code-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-excel-o\"></i> fa-file-excel-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-image-o\"></i> fa-file-image-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-movie-o\"></i> fa-file-movie-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-pdf-o\"></i> fa-file-pdf-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-photo-o\"></i> fa-file-photo-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-picture-o\"></i> fa-file-picture-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-powerpoint-o\"></i> fa-file-powerpoint-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sound-o\"></i> fa-sound-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-video-o\"></i> fa-video-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-word-o\"></i> fa-word-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-zip-o\"></i> fa-zip-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-film\"></i> fa-film </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-filter\"></i> fa-filter </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-fire\"></i> fa-fire </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-fire-extinguisher\"></i> fa-fire-extinguisher </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-flag\"></i> fa-flag </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-flag-checked\"></i> fa-flag-checked </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-flag-o\"></i> fa-flag-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-flash\"></i> fa-flash </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-flask\"></i> fa-flask </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-folder\"></i> fa-folder </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-folder-o\"></i> fa-folder-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-folder-open\"></i> fa-folder-open </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-folder-open-o\"></i> fa-folder-open-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-frown-o\"></i> fa-frown-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-futbol-o\"></i> fa-futbol-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-gamepad\"></i> fa-gamepad </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-gavel\"></i> fa-gavel </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-gear\"></i> fa-gear </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-gears\"></i> fa-gears </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-gift\"></i> fa-gift </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-glass\"></i> fa-glass </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-globe\"></i> fa-globe </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-graduation-cap\"></i> fa-graduation-cap </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-group\"></i> fa-group </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-grab-o\"></i> fa-hand-grab-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-lizard-o\"></i> fa-hand-lizard-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-paper-o\"></i> fa-hand-paper-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-peace-o\"></i> fa-hand-peace-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-pointer-o\"></i> fa-hand-pointer-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-rock-o\"></i> fa-hand-rock-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-scissors-o\"></i> fa-hand-scissors-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-spock-o\"></i> fa-hand-spock-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-stop-o\"></i> fa-hand-stop-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-handshake\"></i> fa-handshake </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hard-of-hearing\"></i> fa-hard-of-hearing </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hashtag\"></i> fa-hashtag </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hdd-o\"></i> fa-hdd-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-headphones\"></i> fa-headphones </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-heart\"></i> fa-heart </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-heart-o\"></i> fa-heart-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-heartbeat\"></i> fa-heartbeat </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-history\"></i> fa-history </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-home\"></i> fa-home </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hotel\"></i> fa-hotel </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hourglass\"></i> fa-hourglass </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hourglass-1\"></i> fa-hourglass </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hourglass-2\"></i> fa-hourglass-2 </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hourglass-3\"></i> fa-hourglass-3 </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hourglass-end\"></i> fa-hourglass-end </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hourglass-half\"></i> fa-hourglass-half </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hourglass-o\"></i> fa-hourglass-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hourglass-start\"></i> fa-hourglass-start </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-i-cursor\"></i> fa-i-cursor </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-id-badge\"></i> fa-id-badge </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-id-card\"></i> fa-id-card </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-id-card-o\"></i> fa-id-card-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-image\"></i> fa-image </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-inbox\"></i> fa-inbox </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-industry\"></i> fa-industry </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-info\"></i> fa-info </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-info-circle\"></i> fa-info-circle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-institution\"></i> fa-institution </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-key\"></i> fa-key </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-keyboard-o\"></i> fa-keyboard-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-language\"></i> fa-language </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-laptop\"></i> fa-laptop </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-leaf\"></i> fa-leaf </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-legal\"></i> fa-legal </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-lemon-o\"></i> fa-lemon-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-level-down\"></i> fa-level-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-level-up\"></i> fa-level-up </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-life-bouy\"></i> fa-life-bouy </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-life-buoy\"></i> fa-life-buoy </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-life-ring\"></i> fa-life-ring </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-life-saver\"></i> fa-life-saver </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-lightbulb-o\"></i> fa-lightbulb-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-line-chart\"></i> fa-line-chart </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-location-arrow\"></i> fa-location-arrow </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-lock\"></i> fa-lock </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-low-vision\"></i> fa-low-vision </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-magic\"></i> fa-magic </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-magnet\"></i> fa-magnet </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-mail-forward\"></i> fa-mail-forward </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-mail-reply\"></i> fa-mail-reply </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-mail-reply-all\"></i> fa-mail-reply-all </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-male\"></i> fa-male </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-map\"></i> fa-map </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-map-marker\"></i> fa-map-marker </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-map-o\"></i> fa-map-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-map-pin\"></i> fa-map-pin </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-map-signs\"></i> fa-map-signs </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-meh-o\"></i> fa-meh-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-microchip\"></i> fa-microchip </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-microphone\"></i> fa-microphone </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-microphone-slash\"></i> fa-microphone-slash </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-minus\"></i> fa-minus </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-minus-circle\"></i> fa-minus-circle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-minus-square\"></i> fa-minus-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-minus-square-o\"></i> fa-minus-square-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-mobile\"></i> fa-mobile </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-mobile-phone\"></i> fa-mobile-phone </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-money\"></i> fa-money </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-moon-o\"></i> fa-moon-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-mortar-board\"></i> fa-mortar-board </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-motorcycle\"></i> fa-motorcycle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-mouse-pointer\"></i> fa-mouse-pointer </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-music\"></i> fa-music </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-navicon\"></i> fa-navicon </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-newspaper-o\"></i> fa-newspaper-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-object-group\"></i> fa-object-group </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-object-ungroup\"></i> fa-object-ungroup </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-paint-brush\"></i> fa-paint-brush </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-paper-plane\"></i> fa-paper-plane </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-paper-plane-o\"></i> fa-paper-plane-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-paw\"></i> fa-paw </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-pencil\"></i> fa-pencil </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-pencil-square\"></i> fa-pencil-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-pencil-square-o\"></i> fa-pencil-square-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-percent\"></i> fa-percent </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-phone\"></i> fa-phone </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-phone-square\"></i> fa-phone-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-photo\"></i> fa-photo </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-picture-o\"></i> fa-picture-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-pie-chart\"></i> fa-pie-chart </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-plane\"></i> fa-plane </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-plug\"></i> fa-plug </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-plus\"></i> fa-plus </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-plus-circle\"></i> fa-plus-circle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-plus-square\"></i> fa-plus-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-plus-square-o\"></i> fa-plus-square-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-podcast\"></i> fa-podcast </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-power-off\"></i> fa-power-off </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-print\"></i> fa-print </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-puzzle-piece\"></i> fa-puzzle-piece </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-qrcode\"></i> fa-qrcode </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-question\"></i> fa-question </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-question-circle\"></i> fa-question-circle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-question-circle-o\"></i> fa-question-circle-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-quote-left\"></i> fa-quote-left </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-quote-right\"></i> fa-quote-right </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-random\"></i> fa-random </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-recycle\"></i> fa-recycle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-refresh\"></i> fa-refresh </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-registered\"></i> fa-registered </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-remove\"></i> fa-remove </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-reorder\"></i> fa-reorder </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-reply\"></i> fa-reply </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-reply-all\"></i> fa-reply-all </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-retweet\"></i> fa-retweet </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-road\"></i> fa-road </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-rocket\"></i> fa-rocket </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-rss\"></i> fa-rss </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-rss-square\"></i> fa-rss-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-s15\"></i> fa-s15 </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-search\"></i> fa-search </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-search-minus\"></i> fa-search-minus </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-search-plus\"></i> fa-search-plus </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-send\"></i> fa-send </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-send-o\"></i> fa-send-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-server\"></i> fa-server </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-share\"></i> fa-share </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-share-alt\"></i> fa-share-alt </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-share-alt-square\"></i> fa-share-alt-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-share-square\"></i> fa-share-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-share-square-o\"></i> fa-share-square-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-shield\"></i> fa-shield </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-ship\"></i> fa-ship </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-shopping-bag\"></i> fa-shopping-bag </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-shopping-basket\"></i> fa-shopping-basket </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-shopping-cart\"></i> fa-shopping-cart </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-shower\"></i> fa-shower </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sign-in\"></i> fa-sign-in </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sign-language\"></i> fa-sign-language </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sign-out\"></i> fa-sign-out </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-signal\"></i> fa-signal </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-signing\"></i> fa-signing </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sitemap\"></i> fa-sitemap </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sliders\"></i> fa-sliders </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-smile-o\"></i> fa-smile-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-snowflake-o\"></i> fa-snowflake-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-soccer-ball-o\"></i> fa-soccer-ball-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sort\"></i> fa-sort </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sort-alpha-asc\"></i> fa-sort-alpha-asc </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sort-alpha-desc\"></i> fa-sort-alpha-desc </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sort-amount-asc\"></i> fa-sort-amount-asc </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sort-amount-desc\"></i> fa-sort-amount-desc </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sort-asc\"></i> fa-sort-asc </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sort-desc\"></i> fa-sort-desc </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sort-down\"></i> fa-sort-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sort-up\"></i> fa-sort-up </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sort-numeric-asc\"></i> fa-sort-numeric-asc </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sort-numeric-desc\"></i> fa-sort-numeric-desc </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sort-shuttle\"></i> fa-sort-shuttle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sort-spinner\"></i> fa-sort-spinner </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sort-spoon\"></i> fa-sort-spoon </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sort-square\"></i> fa-sort-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sort-square-o\"></i> fa-sort-square-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-star\"></i> fa-star </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-star-half\"></i> fa-star-half </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-start-half-empty\"></i> fa-start-half-empty </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-star-half-full\"></i> fa-star-half-full </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-star-half-o\"></i> fa-star-half-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-star-o\"></i> fa-star-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sticky-note\"></i> fa-sticky-note </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sticky-note-o\"></i> fa-sticky-note-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-street-view\"></i> fa-street-view </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-suitcase\"></i> fa-suitcase </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sun-o\"></i> fa-sun-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-support\"></i> fa-support </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-tablet\"></i> fa-tablet </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-tachometer\"></i> fa-tachometer </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-tag\"></i> fa-tag </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-tags\"></i> fa-tags </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-tasks\"></i> fa-tasks </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-taxi\"></i> fa-taxi </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-television\"></i> fa-television </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-terminal\"></i> fa-terminal </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-thermometer\"></i> fa-thermometer </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-thermometer-0\"></i> fa-thermometer-0 </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-thermometer-1\"></i> fa-thermometer-1 </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-thermometer-2\"></i> fa-thermometer-2 </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-thermometer-3\"></i> fa-thermometer-3 </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-thermometer-4\"></i> fa-thermometer-4 </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-thermometer-empty\"></i> fa-thermometer-empty </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-thermometer-full\"></i> fa-thermometer-full </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-thermometer-half\"></i> fa-thermometer-half </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-thermometer-quarter\"></i> fa-thermometer-quarter </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-thermometer-three-quarters\"></i> fa-thermometer-three-quarters </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-thumb-tack\"></i> fa-thumb-tack </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-thumbs-down\"></i> fa-thumbs-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-thumbs-o-down\"></i> fa-thumbs-o-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-thumbs-o-up\"></i> fa-thumbs-o-up </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-thumbs-up\"></i> fa-thumbs-up </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-ticket\"></i> fa-ticket </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-times\"></i> fa-times </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-times-circle\"></i> fa-times-circle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-times-circle-o\"></i> fa-times-circle-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-times-rectangle\"></i> fa-times-rectangle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-times-rectangle-o\"></i> fa-times-rectangle-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-tint\"></i> fa-tint </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-toggle-down\"></i> fa-toggle-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-toggle-left\"></i> fa-toggle-left </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-toggle-right\"></i> fa-toggle-right </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-toggle-off\"></i> fa-toggle-off </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-toggle-on\"></i> fa-toggle-on </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-toggle-right\"></i> fa-toggle-right </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-toggle-up\"></i> fa-toggle-up </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-trademark\"></i> fa-trademark </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-trash\"></i> fa-trash </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-trash-o\"></i> fa-trash-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-tree\"></i> fa-tree </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-trophy\"></i> fa-trophy </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-truck\"></i> fa-truck </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-tty\"></i> fa-tty </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-tv\"></i> fa-tv </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-umbrella\"></i> fa-umbrella </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-universal-access\"></i> fa-universal-access </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-university\"></i> fa-university </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-unlock\"></i> fa-unlock </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-unlock-alt\"></i> fa-unlock-alt </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-unsorted\"></i> fa-unsorted </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-upload\"></i> fa-upload </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-user\"></i> fa-user </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-user-circle\"></i> fa-user-circle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-user-circle-o\"></i> fa-user-circle-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-user-plus\"></i> fa-user-plus </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-user-times\"></i> fa-user-times </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-user-secret\"></i> fa-user-secret </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-users\"></i> fa-users </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-user-o\"></i> fa-user-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-vcard\"></i> fa-vcard </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-vcard-0\"></i> fa-vcard-0 </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-video-camera\"></i> fa-video-camera </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-volume-control-phone\"></i> fa-volume-control-phone </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-volume-down\"></i> fa-volume-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-volume-off\"></i> fa-volume-off </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-volume-up\"></i> fa-volume-up </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-warning\"></i> fa-warning </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-wheelchair\"></i> fa-wheelchair </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-wheelchair-alt\"></i> fa-wheelchair-alt </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-wifi\"></i> fa-wifi </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-window-close\"></i> fa-window-close </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-window-close-o\"></i> fa-window-close-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-window-maximize\"></i> fa-window-maximize </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-window-minimize\"></i> fa-window-minimize </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-window-restore\"></i> fa-window-restore </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-wrench\"></i> fa-wrench </span></li>\n              <h2 class=\"h2-responsive icons-list-header\">Accessibility Icons</h2>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-american-sign-language-interpreting\"></i> fa-american-sign-language-interpreting </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-asl-interpreting\"></i> fa-asl-interpreting </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-assistive-listening-systems\"></i> fa-assistive-listening-systems </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-audio-description\"></i> fa-audio-description </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-blind\"></i> fa-blind </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-braille\"></i> fa-braille </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cc\"></i> fa-cc </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-deaf\"></i> fa-deaf </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-deafness\"></i> fa-deafness </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hard-of-hearing\"></i> fa-hard-of-hearing </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-low-vision\"></i> fa-low-vision </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-question-circle-o\"></i> fa-question-circle-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sign-language\"></i> fa-sign-language </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-signing\"></i> fa-signing </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-tty\"></i> fa-tty </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-universal-access\"></i> fa-universal-access </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-volume-control-phone\"></i> fa-volume-control-phone </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-wheelchair\"></i> fa-wheelchair </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-wheelchair-alt\"></i> fa-wheelchair-alt </span></li>\n              <h2 class=\"h2-responsive icons-list-header\">Hand Icons</h2>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-grab-o\"></i> fa-hand-grab-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-lizard-o\"></i> fa-hand-lizard-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-o-down\"></i> fa-hand-o-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-o-left\"></i> fa-hand-o-left </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-o-right\"></i> fa-hand-o-right </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-o-up\"></i> fa-hand-o-up </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-paper-o\"></i> fa-hand-paper-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-peace-o\"></i> fa-hand-peace-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-pointer-o\"></i> fa-hand-pointer-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-rock-o\"></i> fa-hand-rock-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-scissors-o\"></i> fa-hand-scissors-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-spock-o\"></i> fa-hand-spock-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-stop-o\"></i> fa-hand-stop-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-thumbs-down\"></i> fa-thumbs-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-thumbs-o-down\"></i> fa-thumbs-o-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-thumbs-o-up\"></i> fa-thumbs-o-up </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-thumbs-up\"></i> fa-thumbs-up </span></li>\n              <h2 class=\"h2-responsive icons-list-header\">Transportation Icons</h2>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-ambulance\"></i> fa-ambulance </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-automobile\"></i> fa-automobile </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bicycle\"></i> fa-bicycle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bus\"></i> fa-bus </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cab\"></i> fa-cab </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-car\"></i> fa-car </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-fighter-jet\"></i> fa-fighter-jet </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-motorcycle\"></i> fa-motorcycle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-plane\"></i> fa-plane </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-rocket\"></i> fa-rocket </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-ship\"></i> fa-ship </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-space-shuttle\"></i> fa-space-shuttle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-subway\"></i> fa-subway </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-taxi\"></i> fa-taxi </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-train\"></i> fa-train </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-truck\"></i> fa-truck </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-wheelchair\"></i> fa-wheelchair </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-wheelchair-alt\"></i> fa-wheelchair-alt </span></li>\n              <h2 class=\"h2-responsive icons-list-header\">Gender Icons</h2>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-genderless\"></i> fa-genderless </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-intersex\"></i> fa-intersex </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-mars\"></i> fa-mars </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-mars-double\"></i> fa-mars-double </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-mars-stroke\"></i> fa-mars-stroke </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-mars-stroke-h\"></i> fa-mars-stroke-h </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-mars-stroke-v\"></i> fa-mars-stroke-v </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-mercury\"></i> fa-mercury </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-neuter\"></i> fa-neuter </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-transgender\"></i> fa-transgender </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-transgender-alt\"></i> fa-transgender-alt </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-venus\"></i> fa-venus </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-venus-double\"></i> fa-venus-double </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-venus-mars\"></i> fa-venus-mars </span></li>\n              <h2 class=\"h2-responsive icons-list-header\">File Type Icons</h2>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file\"></i> fa-file </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-archive-o\"></i> fa-file-archive-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-audio-o\"></i> fa-file-audio-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-code-o\"></i> fa-file-code-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-excel-o\"></i> fa-file-excel-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-image-o\"></i> fa-file-image-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-movie-o\"></i> fa-file-movie-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-o\"></i> fa-file-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-pdf-o\"></i> fa-file-pdf-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-photo-o\"></i> fa-file-photo-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-picture-o\"></i> fa-file-picture-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-powerpoint-o\"></i> fa-file-powerpoint-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-sound-o\"></i> fa-file-sound-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-text\"></i> fa-file-text </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-text-o\"></i> fa-file-text-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-video-o\"></i> fa-file-video-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-word-o\"></i> fa-file-word-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-zip-o\"></i> fa-file-zip-o </span></li>\n              <h2 class=\"h2-responsive icons-list-header\">Spinner Icons</h2>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-circle-o-notch\"></i> fa-circle-o-notch </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cog\"></i> fa-cog </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-gear\"></i> fa-gear </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-refresh\"></i> fa-refresh </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-spinner\"></i> fa-wrench </span></li>\n              <h2 class=\"h2-responsive icons-list-header\">Form Control Icons</h2>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-check-square\"></i> fa-check-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-check-square-o\"></i> fa-check-square-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-circle\"></i> fa-circle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-circle-o\"></i> fa-circle-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-dot-circle-o\"></i> fa-dot-circle-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-minus-square\"></i> fa-minus-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-minus-square-o\"></i> fa-minus-square-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-plus-square\"></i> fa-plus-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-plus-square-o\"></i> fa-plus-square-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-square\"></i> fa-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-square-o\"></i> fa-square-o </span></li>\n              <h2 class=\"h2-responsive icons-list-header\">Payment Icons</h2>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cc-amex\"></i> fa-cc-amex </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cc-diners-club\"></i> fa-cc-diners-club </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cc-discover\"></i> fa-cc-discover </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cc-jcb\"></i> fa-cc-jcb </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cc-mastercard\"></i> fa-cc-mastercard </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cc-paypal\"></i> fa-cc-paypal </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cc-stripe\"></i> fa-cc-stripe </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cc-visa\"></i> fa-cc-visa </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-credit-card\"></i> fa-credit-card </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-credit-card-alt\"></i> fa-credit-card-alt </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-google-wallet\"></i> fa-google-wallet </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-paypal\"></i> fa-paypal </span></li>\n              <h2 class=\"h2-responsive icons-list-header\">Chart Icons</h2>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-area-chart\"></i> fa-area-chart </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bar-chart\"></i> fa-bar-chart </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bar-chart-o\"></i> fa-bar-chart-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-line-chart\"></i> fa-line-chart </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-pie-chart\"></i> fa-pie-chart </span></li>\n              <h2 class=\"h2-responsive icons-list-header\">Currency Icons</h2>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bitcoin\"></i> fa-bitcoin </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-btc\"></i> fa-btc </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cny\"></i> fa-cny </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-dollar\"></i> fa-dollar </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-eur\"></i> fa-eur </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-euro\"></i> fa-euro </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-gbp\"></i> fa-gbp </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-gg\"></i> fa-gg </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-gg-circle\"></i> fa-gg-circle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-ils\"></i> fa-ils </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-inr\"></i> fa-inr </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-jpy\"></i> fa-jpy </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-krw\"></i> fa-krw </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-money\"></i> fa-money </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-rmb\"></i> fa-rmb </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-rouble\"></i> fa-rouble </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-rub\"></i> fa-rub </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-ruple\"></i> fa-ruple </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-rupee\"></i> fa-rupee </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-shekel\"></i> fa-shekel </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sheqel\"></i> fa-sheqel </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-try\"></i> fa-try </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-turkish-lira\"></i> fa-turkish-lira </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-usd\"></i> fa-usd </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-won\"></i> fa-won </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-yen\"></i> fa-yen </span></li>\n              <h2 class=\"h2-responsive icons-list-header\">Text Editor Icons</h2>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-align-center\"></i> fa-align-center </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-align-justify\"></i> fa-align-justify </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-align-left\"></i> fa-align-left </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-align-right\"></i> fa-align-right </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bold\"></i> fa-bold </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-chain\"></i> fa-chain </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-chain-broken\"></i> fa-chain-broken </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-clipboard\"></i> fa-clipboard </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-columns\"></i> fa-columns </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-copy\"></i> fa-copy </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cut\"></i> fa-cut </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-dedent\"></i> fa-dedent </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-earser\"></i> fa-earser </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file\"></i> fa-file </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-o\"></i> fa-file-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-text\"></i> fa-file-text </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-file-text-o\"></i> fa-file-text-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-files\"></i> fa-files </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-floppy-o\"></i> fa-floppy-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-font\"></i> fa-font </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-header\"></i> fa-header </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-indent\"></i> fa-indent </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-italic\"></i> fa-italic </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-link\"></i> fa-link </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-list\"></i> fa-list </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-list-alt\"></i> fa-list-alt </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-list-ol\"></i> fa-list-ol </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-list-ul\"></i> fa-list-ul </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-outdent\"></i> fa-outdent </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-paperclip\"></i> fa-paperclip </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-parapgraph\"></i> fa-parapgraph </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-paste\"></i> fa-paste </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-repeat\"></i> fa-repeat </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-rotate-left\"></i> fa-rotate-left </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-rotate-right\"></i> fa-rotate-right </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-save\"></i> fa-save </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-scissors\"></i> fa-scissors </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-strikethrought\"></i> fa-strikethrought </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-subscript\"></i> fa-subscript </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-superscript\"></i> fa-superscript </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-table\"></i> fa-table </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-text-height\"></i> fa-text-height </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-text-width\"></i> fa-text-width </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-th\"></i> fa-th </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-th-large\"></i> fa-th-large </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-th-list\"></i> fa-th-list </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-underline\"></i> fa-underline </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-undo\"></i> fa-undo </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-unlink\"></i> fa-unlink </span></li>\n              <h2 class=\"h2-responsive icons-list-header\">Directional Icons</h2>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-angle-double-down\"></i> fa-angle-double-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-angle-double-left\"></i> fa-angle-double-left </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-angle-double-right\"></i> fa-angle-double-right </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-angle-double-up\"></i> fa-angle-double-up </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-angle-down\"></i> fa-angle-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-angle-left\"></i> fa-angle-left </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-angle-right\"></i> fa-angle-right </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-angle-up\"></i> fa-angle-up </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-arrow-circle-down\"></i> fa-arrow-circle-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-arrow-circle-left\"></i> fa-arrow-circle-left </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-arrow-circle-o-down\"></i> fa-arrow-circle-o-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-arrow-circle-o-left\"></i> fa-arrow-circle-o-left </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-arrow-circle-o-right\"></i> fa-arrow-circle-o-right </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-arrow-circle-o-up\"></i> fa-arrow-circle-o-up </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-arrow-circle-right\"></i> fa-arrow-circle-right </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-arrow-circle-up\"></i> fa-arrow-circle-up </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-arrow-down\"></i> fa-arrow-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-arrow-left\"></i> fa-arrow-left </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-arrow-right\"></i> fa-arrow-right </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-arrow-up\"></i> fa-arrow-up </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-arrows\"></i> fa-arrows </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-arrows-alt\"></i> fa-arrows-alt </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-arrows-h\"></i> fa-arrows-h </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-arrows-v\"></i> fa-arrows-v </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-caret-down\"></i> fa-caret-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-caret-left\"></i> fa-caret-left </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-caret-right\"></i> fa-caret-right </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-caret-square-down\"></i> fa-caret-square-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-caret-square-o-left\"></i> fa-caret-square-o-left </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-caret-square-o-right\"></i> fa-caret-square-o-right </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-caret-square-o-up\"></i> fa-caret-square-o-up </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-caret-up\"></i> fa-caret-up </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-chevron-circle-down\"></i> fa-chevron-circle-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-chevron-circle-left\"></i> fa-chevron-circle-left </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-chevron-circle-right\"></i> fa-chevron-circle-right </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-chevron-circle-up\"></i> fa-chevron-circle-up </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-chevron-down\"></i> fa-chevron-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-chevron-left\"></i> fa-chevron-left </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-chevron-right\"></i> fa-chevron-right </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-chevron-up\"></i> fa-chevron-up </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-exchange\"></i> fa-exchange </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-o-down\"></i> fa-hand-o-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-o-left\"></i> fa-hand-o-left </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-o-right\"></i> fa-hand-o-right </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hand-o-up\"></i> fa-hand-o-up </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-long-arrow-down\"></i> fa-long-arrow-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-long-arrow-left\"></i> fa-long-arrow-left </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-long-arrow-right\"></i> fa-long-arrow-right </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-long-arrow-up\"></i> fa-long-arrow-up </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-toggle-down\"></i> fa-toggle-down </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-toggle-left\"></i> fa-toggle-left </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-toggle-right\"></i> fa-toggle-right </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-toggle-up\"></i> fa-toggle-up </span></li>\n              <h2 class=\"h2-responsive icons-list-header\">Video Player Icons</h2>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-arrows-alt\"></i> fa-arrows-alt </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-backward\"></i> fa-backward </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-compress\"></i> fa-compress </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-eject\"></i> fa-eject </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-expand\"></i> fa-expand </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-fast-backward\"></i> fa-fast-backward </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-fast-forward\"></i> fa-fast-forward </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-forward\"></i> fa-forward </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-pause\"></i> fa-pause </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-pause-circle\"></i> fa-pause-circle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-pause-circle-o\"></i> fa-pause-circle-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-play\"></i> fa-play </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-play-circle\"></i> fa-play-circle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-play-circle-o\"></i> fa-play-circle-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-random\"></i> fa-random </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-step-backward\"></i> fa-step-backward </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-step-forward\"></i> fa-step-forward </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-stop\"></i> fa-stop </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-stop-circle\"></i> fa-stop-circle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-stop-circle-o\"></i> fa-stop-circle-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-youtube-play\"></i> fa-youtube-play </span></li>\n              <h2 class=\"h2-responsive icons-list-header\">Brand Icons</h2>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-500px\"></i> fa-500px </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-adn\"></i> fa-adn </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-amazon\"></i> fa-amazon </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-android\"></i> fa-android </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-angellist\"></i> fa-angellist </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-apple\"></i> fa-apple </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bandcamp\"></i> fa-bandcamp </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-behance\"></i> fa-behance </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-behance-square\"></i> fa-behance-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bitbucket\"></i> fa-bitbucket </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bitbucket-square\"></i> fa-bitbucket-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bitcoin\"></i> fa-bitcoin </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-black-tie\"></i> fa-black-tie </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bluetooth\"></i> fa-bluetooth </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-bluetooth-b\"></i> fa-bluetooth-b </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-btc\"></i> fa-btc </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-buysellads\"></i> fa-buysellads </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cc-amex\"></i> fa-cc-amex </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cc-diners-club\"></i> fa-cc-diners-club </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cc-discover\"></i> fa-cc-discover </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cc-jcb\"></i> fa-cc-jcb </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cc-mastercard\"></i> fa-cc-mastercard </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cc-paypal\"></i> fa-cc-paypal </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cc-stripe\"></i> fa-cc-stripe </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-cc-visa\"></i> fa-cc-visa </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-chrome\"></i> fa-chrome </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-codepen\"></i> fa-codepen </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-codiepie\"></i> fa-codiepie </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-connectdevelop\"></i> fa-connectdevelop </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-contao\"></i> fa-contao </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-css3\"></i> fa-css3 </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-dashcube\"></i> fa-dashcube </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-delicious\"></i> fa-delicious </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-deviantart\"></i> fa-deviantart </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-digg\"></i> fa-digg </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-dribbble\"></i> fa-dribbble </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-dropbox\"></i> fa-dropbox </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-drupal\"></i> fa-drupal </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-edge\"></i> fa-edge </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-eercast\"></i> fa-eercast </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-empire\"></i> fa-empire </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-envira\"></i> fa-envira </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-etsy\"></i> fa-etsy </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-expeditedssl\"></i> fa-expeditedssl </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-fa\"></i> fa-fa </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-facebook\"></i> fa-facebook </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-facebook-f\"></i> fa-facebook-f </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-facebook-official\"></i> fa-facebook-official </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-facebook-square\"></i> fa-facebook-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-firefox\"></i> fa-firefox </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-first-order\"></i> fa-first-order </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-flickr\"></i> fa-flickr </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-font-awesome\"></i> fa-font-awesome </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-fonticons\"></i> fa-fonticons </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-fort-awesome\"></i> fa-fort-awesome </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-forumbee\"></i> fa-forumbee </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-foursquare\"></i> fa-foursquare </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-free-code-camp\"></i> fa-free-code-camp </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-ge\"></i> fa-ge </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-get-pocket\"></i> fa-get-pocket </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-gg\"></i> fa-gg </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-gg-circle\"></i> fa-gg-circle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-git\"></i> fa-git </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-git-square\"></i> fa-git-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-github\"></i> fa-github </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-github-alt\"></i> fa-github-alt </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-github-square\"></i> fa-github-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-gitlab\"></i> fa-gitlab </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-gittip\"></i> fa-gittip </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-glide\"></i> fa-glide </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-glide-g\"></i> fa-glide-g </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-google\"></i> fa-google </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-google-plus\"></i> fa-google-plus </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-google-plus-circle\"></i> fa-google-plus-circle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-google-plus-official\"></i> fa-google-plus-official </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-google-plus-square\"></i> fa-google-plus-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-google-wallet\"></i> fa-google-wallet </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-gratipay\"></i> fa-gratipay </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-grav\"></i> fa-grav </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hacker-news\"></i> fa-hacker-news </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-houzz\"></i> fa-houzz </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-html5\"></i> fa-html5 </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-imdb\"></i> fa-imdb </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-instagram\"></i> fa-instagram </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-internet-explorer\"></i> fa-internet-explorer </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-ioxhost\"></i> fa-ioxhost </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-joomla\"></i> fa-joomla </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-jsfiddle\"></i> fa-jsfiddle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-lastfm\"></i> fa-lastfm </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-lastfm-square\"></i> fa-lastfm-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-leanpub\"></i> fa-leanpub </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-linkedin\"></i> fa-linkedin </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-linkedin-square\"></i> fa-linkedin-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-linode\"></i> fa-linode </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-linux\"></i> fa-linux </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-maxcdn\"></i> fa-maxcdn </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-meanpath\"></i> fa-meanpath </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-medium\"></i> fa-medium </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-meetup\"></i> fa-meetup </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-mixcloud\"></i> fa-mixcloud </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-modx\"></i> fa-modx </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-odnoklassniki\"></i> fa-odnoklassniki </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-odnoklassniki-square\"></i> fa-odnoklassniki-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-opencart\"></i> fa-opencart </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-openid\"></i> fa-openid </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-opera\"></i> fa-opera </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-optin-monster\"></i> fa-optin-monster </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-pagelines\"></i> fa-pagelines </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-paypal\"></i> fa-paypal </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-pied-piper\"></i> fa-pied-piper </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-pied-piper-alt\"></i> fa-pied-piper-alt </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-pied-piper-pp\"></i> fa-pied-piper-pp </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-pinterest\"></i> fa-pinterest </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-pinterest-p\"></i> fa-pinterest-p </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-pinterest-square\"></i> fa-pinterest-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-product-hunt\"></i> fa-product-hunt </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-qq\"></i> fa-qq </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-quora\"></i> fa-quora </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-ra\"></i> fa-ra </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-ravelry\"></i> fa-ravelry </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-rebel\"></i> fa-rebel </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-reddit\"></i> fa-reddit </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-reddit-alien\"></i> fa-reddit-alien </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-reddit-square\"></i> fa-reddit-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-renren\"></i> fa-renren </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-resistance\"></i> fa-resistance </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-safari\"></i> fa-safari </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-scribd\"></i> fa-scribd </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-sellsy\"></i> fa-sellsy </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-share-alt\"></i> fa-share-alt </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-share-alt-square\"></i> fa-share-alt-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-shirtsinbulk\"></i> fa-shirtsinbulk </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-simplybuilt\"></i> fa-simplybuilt </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-skyatlas\"></i> fa-skyatlas </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-skype\"></i> fa-skype </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-slack\"></i> fa-slack </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-slideshare\"></i> fa-slideshare </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-snapchat\"></i> fa-snapchat </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-snapchat-ghost\"></i> fa-snapchat-ghost </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-snapchat-square\"></i> fa-snapchat-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-soundcloud\"></i> fa-soundcloud </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-spotify\"></i> fa-spotify </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-stack-exchange\"></i> fa-stack-exchange </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-stack-overflow\"></i> fa-stack-overflow </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-steam\"></i> fa-steam </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-steam-square\"></i> fa-steam-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-stumbleupon\"></i> fa-stumbleupon </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-stumbleupon-circle\"></i> fa-stumbleupon-circle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-superpowers\"></i> fa-superpowers </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-telegram\"></i> fa-telegram </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-tencent-weibo\"></i> fa-tencent-weibo </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-themeisle\"></i> fa-themeisle </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-trello\"></i> fa-trello </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-tripadvisor\"></i> fa-tripadvisor </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-tumblr\"></i> fa-tumblr </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-tumblr-square\"></i> fa-tumblr-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-twitch\"></i> fa-twitch </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-twitter\"></i> fa-twitter </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-twitter-square\"></i> fa-twitter-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-usb\"></i> fa-usb </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-viacoin\"></i> fa-viacoin </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-viadeo\"></i> fa-viadeo </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-viadeo-square\"></i> fa-viadeo-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-vimeo\"></i> fa-vimeo </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-vimeo-square\"></i> fa-vimeo-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-vine\"></i> fa-vine </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-vk\"></i> fa-vk </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-wechat\"></i> fa-wechat </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-weibo\"></i> fa-weibo </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-weixin\"></i> fa-weixin </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-whatsapp\"></i> fa-whatsapp </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-wikipedia-w\"></i> fa-wikipedia-w </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-windows\"></i> fa-windows </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-wordpress\"></i> fa-wordpress </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-wpbeginner\"></i> fa-wpbeginner </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-wpexplorer\"></i> fa-wpexplorer </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-wpforms\"></i> fa-wpforms </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-xing\"></i> fa-xing </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-xing-square\"></i> fa-xing-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-y-combinator\"></i> fa-y-combinator </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-y-combinator-square\"></i> fa-y-combinator-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-yahoo\"></i> fa-yahoo </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-yc\"></i> fa-yc </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-yc-square\"></i> fa-yc-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-yelp\"></i> fa-yelp </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-yoast\"></i> fa-yoast </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-youtube\"></i> fa-youtube </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-youtube-play\"></i> fa-youtube-play </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-youtube-square\"></i> fa-youtube-square </span></li>\n              <h2 class=\"h2-responsive icons-list-header\">Medical Icons</h2>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-ambulance\"></i> fa-ambulance </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-h-square\"></i> fa-h-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-heart\"></i> fa-heart </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-heart-o\"></i> fa-heart-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-heartbeat\"></i> fa-heartbeat </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-hospital-o\"></i> fa-hospital-o </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-medkit\"></i> fa-medkit </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-plus-square\"></i> fa-plus-square </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-stethoscope\"></i> fa-stethoscope </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-user-md\"></i> fa-user-md </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-wheelchair\"></i> fa-wheelchair </span></li>\n              <li><span class=\"instafilta-target\"><i class=\"fa fa-wheelchair-alt\"></i> fa-wheelchair-alt </span></li>\n          </ul>\n      </div>\n      <!--Icons-->\n      <div class=\"row justify-content-center pt-3\">\n          <div class=\"col-md-10\">\n            <!--Section: Docs link-->\n            <section class=\"pb-4 pt-5\">\n              <panel header=\"Full documentation\" color=\"primary-color\">\n                <p class=\"card-text\">Read the full documentation for these components.</p>\n                <a href=\"https://mdbootstrap.com/angular/content/icons-list/\" target=\"_blank\" class=\"btn btn-primary waves-effect waves-light\">Learn more</a>\n              </panel>\n            </section>\n            <!--/.Section: Docs link-->\n          </div>\n        </div>\n      </div>\n      <!--/.Card content-->\n    </div>\n    <!--/.Card-->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/css/icons/icons.component.scss":
/***/ (function(module, exports) {

module.exports = ".example-list {\n  padding: 0;\n  margin: .5em 0 1em;\n  list-style: none;\n  overflow-y: hidden; }\n\n.example-list-quad li {\n  float: left;\n  width: 100%;\n  max-width: 25%;\n  text-align: left; }\n\n#radius,\n#shadow,\n#size,\n#fontsize {\n  width: 20%; }\n\n.example li span {\n  cursor: pointer; }\n\n.icons-list-header {\n  width: 100%;\n  display: block;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15); }\n\n.icons-list-header:before {\n  content: \"\";\n  clear: both;\n  display: block;\n  margin-bottom: 2rem; }\n\n.instafilta-target {\n  -webkit-transition: .4s all;\n  transition: .4s all;\n  border-radius: 4px; }\n\n.instafilta-target:hover {\n  background-color: rgba(72, 198, 255, 0.8);\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/views/css/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconsComponent = (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-icons',
            template: __webpack_require__("./src/app/views/css/icons/icons.component.html"),
            styles: [__webpack_require__("./src/app/views/css/icons/icons.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/views/css/images/images.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Section: -->\n<section id=\"responsive-images\">\n\n    <!--Title-->\n    <h2 class=\"mt-lg-5 mb-5 font-bold\">\n        <strong>Responsive images</strong>\n    </h2>\n\n    <!--Section: Live preview-->\n    <section>\n\n        <div class=\"row mb-r\">\n            <div class=\"col-md-4\">\n                <img src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg\" class=\"img-fluid\" alt=\"Responsive image\">\n            </div>\n        </div>\n\n        <div class=\"row mb-r\">\n            <div class=\"col-md-6\">\n                <img src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg\" class=\"img-fluid\" alt=\"Responsive image\">\n            </div>\n        </div>\n\n        <div class=\"row mb-r\">\n            <div class=\"col-md-8\">\n                <img src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg\" class=\"img-fluid\" alt=\"Responsive image\">\n            </div>\n        </div>\n\n    </section>\n    <!--Section: Live preview-->\n\n</section>\n<!--/Section: -->\n\n<hr class=\"my-5\">\n\n<!--Section: -->\n<section id=\"image-thumbnails\">\n\n    <!--Title-->\n    <h4 class=\"mt-4 mb-5 font-bold dark-grey-text\">\n        <strong>With shadows</strong>\n    </h4>\n\n    <!--Section: Live preview-->\n    <section>\n\n        <!--Grid row-->\n        <div class=\"row\">\n\n            <!--Grid column-->\n            <div class=\"col-lg-4 col-md-12 mb-r\">\n\n                <img src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg\" class=\"img-fluid z-depth-1\" alt=\"\">\n\n            </div>\n            <!--Grid column-->\n\n            <!--Grid column-->\n            <div class=\"col-lg-4 col-md-6 mb-r\">\n\n                <img src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg\" class=\"img-fluid z-depth-1-half\" alt=\"\">\n\n            </div>\n            <!--Grid column-->\n\n            <!--Grid column-->\n            <div class=\"col-lg-4 col-md-6 mb-r\">\n\n                <img src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg\" class=\"img-fluid z-depth-2\" alt=\"\">\n\n            </div>\n            <!--Grid column-->\n\n        </div>\n        <!--Grid row-->\n\n        <!--Grid row-->\n        <div class=\"row\">\n\n            <!--Grid column-->\n            <div class=\"col-lg-4 col-md-12 mb-r\">\n\n                <img src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg\" class=\"img-fluid z-depth-3\" alt=\"\">\n\n            </div>\n            <!--Grid column-->\n\n            <!--Grid column-->\n            <div class=\"col-lg-4 col-md-6 mb-r\">\n\n                <img src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg\" class=\"img-fluid z-depth-4\" alt=\"\">\n\n            </div>\n            <!--Grid column-->\n\n            <!--Grid column-->\n            <div class=\"col-lg-4 col-md-6 mb-r\">\n\n                <img src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg\" class=\"img-fluid z-depth-5\" alt=\"\">\n\n            </div>\n            <!--Grid column-->\n\n        </div>\n        <!--Grid row-->\n\n    </section>\n    <!--Section: Live preview-->\n\n</section>\n<!--/Section: -->\n\n<hr class=\"my-5\">\n\n<!--Section: Overlay-->\n<section>\n\n    <h4 class=\"my-5 font-bold dark-grey-text\">\n        <strong>Overlays</strong>\n    </h4>\n\n    <!--Grid row-->\n    <div class=\"row\">\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-12 mb-r\">\n\n            <div class=\"view hm-teal-slight\">\n                <img src=\"https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg\" class=\"img-fluid\" alt=\"\">\n                <div class=\"mask flex-center waves-effect waves-light\">\n                    <p class=\"white-text\">super light overlay</p>\n                </div>\n            </div>\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-6 mb-r\">\n\n            <div class=\"view hm-teal-light\">\n                <img src=\"https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg\" class=\"img-fluid\" alt=\"\">\n                <div class=\"mask flex-center waves-effect waves-light\">\n                    <p class=\"white-text\">light overlay</p>\n                </div>\n            </div>\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-6 mb-r\">\n\n            <div class=\"view hm-teal-strong\">\n                <img src=\"https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg\" class=\"img-fluid\" alt=\"\">\n                <div class=\"mask flex-center waves-effect waves-light\">\n                    <p class=\"white-text\">strong overlay</p>\n                </div>\n            </div>\n\n        </div>\n        <!--Grid column-->\n\n    </div>\n    <!--Grid row-->\n\n</section>\n<!--Section: Overlay-->\n\n<hr class=\"my-5\">\n\n<!--Section: Patterns-->\n<section>\n\n    <h4 class=\"my-5 font-bold dark-grey-text\">\n        <strong>Patterns</strong>\n    </h4>\n\n    <!--Grid row-->\n    <div class=\"row\">\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-12 mb-r\">\n\n            <div class=\"view\">\n                <img src=\"https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg\" class=\"img-fluid\" alt=\"Image of ballons flying over canyons with mask pattern one.\">\n                <div class=\"mask pattern-1 flex-center waves-effect waves-light\">\n                    <p class=\"white-text\">.pattern-1</p>\n                </div>\n            </div>\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-6 mb-r\">\n\n            <div class=\"view\">\n                <img src=\"https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg\" class=\"img-fluid\" alt=\"\">\n                <div class=\"mask pattern-2 flex-center waves-effect waves-light\">\n                    <p class=\"white-text\">.pattern-2</p>\n                </div>\n            </div>\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-6 mb-r\">\n\n            <div class=\"view\">\n                <img src=\"https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg\" class=\"img-fluid\" alt=\"Image of ballons flying over canyons with mask pattern one.\">\n                <div class=\"mask pattern-3 flex-center waves-effect waves-light\">\n                    <p class=\"white-text\">.pattern-3</p>\n                </div>\n            </div>\n\n        </div>\n        <!--Grid column-->\n\n    </div>\n    <!--Grid row-->\n\n    <!--Grid row-->\n    <div class=\"row\">\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-12 mb-r\">\n\n            <div class=\"view\">\n                <img src=\"https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg\" class=\"img-fluid\" alt=\"Image of ballons flying over canyons with mask pattern one.\">\n                <div class=\"mask pattern-4 flex-center waves-effect waves-light\">\n                    <p class=\"white-text\">.pattern-4</p>\n                </div>\n            </div>\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-6 mb-r\">\n\n            <div class=\"view\">\n                <img src=\"https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg\" class=\"img-fluid\" alt=\"\">\n                <div class=\"mask pattern-5 flex-center waves-effect waves-light\">\n                    <p class=\"white-text\">.pattern-5</p>\n                </div>\n            </div>\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-6 mb-r\">\n\n            <div class=\"view\">\n                <img src=\"https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg\" class=\"img-fluid\" alt=\"Image of ballons flying over canyons with mask pattern one.\">\n                <div class=\"mask pattern-6 flex-center waves-effect waves-light\">\n                    <p class=\"white-text\">.pattern-6</p>\n                </div>\n            </div>\n\n        </div>\n        <!--Grid column-->\n\n    </div>\n    <!--Grid row-->\n\n    <!--Grid row-->\n    <div class=\"row mb-4\">\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-12\">\n\n            <div class=\"view\">\n                <img src=\"https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg\" class=\"img-fluid\" alt=\"Image of ballons flying over canyons with mask pattern one.\">\n                <div class=\"mask pattern-7 flex-center waves-effect waves-light\">\n                    <p class=\"white-text\">.pattern-7</p>\n                </div>\n            </div>\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-6\">\n\n            <div class=\"view\">\n                <img src=\"https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg\" class=\"img-fluid\" alt=\"\">\n                <div class=\"mask pattern-8 flex-center waves-effect waves-light\">\n                    <p class=\"white-text\">.pattern-8</p>\n                </div>\n            </div>\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-6\">\n\n            <div class=\"view\">\n                <img src=\"https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg\" class=\"img-fluid\" alt=\"Image of ballons flying over canyons with mask pattern one.\">\n                <div class=\"mask pattern-9 flex-center waves-effect waves-light\">\n                    <p class=\"white-text\">.pattern-9</p>\n                </div>\n            </div>\n\n        </div>\n        <!--Grid column-->\n\n    </div>\n    <!--Grid row-->\n\n</section>\n<!--Section: Patterns-->\n\n<hr class=\"my-5\">\n\n<!--Section: Hover effects-->\n<section>\n\n    <h4 class=\"my-5 font-bold dark-grey-text\">\n        <strong>Hover effects</strong>\n    </h4>\n\n    <!--Grid row-->\n    <div class=\"row mt-5\">\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-12 mb-r\">\n\n            <div class=\"view overlay hm-red-strong\">\n                <img src=\"https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg\" class=\"img-fluid \" alt=\"\">\n                <div class=\"mask flex-center waves-effect waves-light\">\n                    <p class=\"white-text\">Strong overlay</p>\n                </div>\n            </div>\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-6 mb-r\">\n\n            <div class=\"view overlay hm-red-light\">\n                <img src=\"https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg\" class=\"img-fluid \" alt=\"\">\n                <div class=\"mask flex-center waves-effect waves-light\">\n                    <p class=\"white-text\">Light overlay</p>\n                </div>\n            </div>\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-6 mb-r\">\n\n            <div class=\"view overlay hm-red-slight\">\n                <img src=\"https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg\" class=\"img-fluid \" alt=\"\">\n                <div class=\"mask flex-center waves-effect waves-light\">\n                    <p class=\"white-text\">Super light overlay</p>\n                </div>\n            </div>\n\n        </div>\n        <!--Grid column-->\n\n    </div>\n    <!--Grid row-->\n\n    <!--Grid row-->\n    <div class=\"row\">\n\n        <!--Grid column-->\n        <div class=\"col-md-6 mb-r\">\n\n            <!--Zoom effect-->\n            <div class=\"view overlay hm-zoom\">\n                <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg\" class=\"img-fluid \" alt=\"\">\n                <div class=\"mask flex-center waves-effect waves-light\">\n                    <p class=\"white-text\">Zoom effect</p>\n                </div>\n            </div>\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-md-5 mb-r\">\n\n            <h4 class=\"text-center\">Shadow effect</h4>\n            <br>\n\n            <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(132).jpg\" class=\"img-fluid rounded-circle hoverable\"\n                alt=\"\">\n\n        </div>\n        <!--Grid column-->\n\n    </div>\n    <!--Grid row-->\n\n</section>\n<!--Section: Hover effects-->\n\n<hr class=\"my-5\">\n\n<!--Section: Waves effect-->\n<section class=\"pb-5\">\n\n    <h4 class=\"my-5 font-bold dark-grey-text\">\n        <strong>Waves effect (click on the images)</strong>\n    </h4>\n\n    <!--Grid row-->\n    <div class=\"row\">\n\n        <!--Grid column-->\n        <div class=\"col-lg-6 mb-r\">\n\n            <!--Mask with wave-->\n            <div class=\"view overlay hm-white-slight\">\n                <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(54).jpg\" class=\"img-fluid\" alt=\"Sample image with waves effect.\">\n                <a>\n                    <div class=\"mask waves-effect waves-light\"></div>\n                </a>\n            </div>\n            <!--Mask with wave-->\n            <div class=\"view overlay hm-white-slight waves-light\" mdbWavesEffect>\n                <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(54).jpg\" class=\"img-fluid\" alt=\"Sample image with waves effect.\">\n                <a href=\"\">\n                    <div class=\"mask waves-effect\"></div>\n                </a>\n            </div>\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-6 mb-r\">\n\n            <!--Mask with wave-->\n            <div class=\"view overlay hm-white-slight\">\n                <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(53).jpg\" class=\"img-fluid\" alt=\"Sample image with waves effect.\">\n                <a>\n                    <div class=\"mask waves-effect\"></div>\n                </a>\n            </div>\n            <!--Mask with wave-->\n            <div class=\"view overlay hm-white-slight waves-light\" mdbWavesEffect>\n                <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(53).jpg\" class=\"img-fluid\" alt=\"Sample image with waves effect.\">\n                <a href=\"\" onClick=\"\">\n                    <div class=\"mask waves-effect\"></div>\n                </a>\n            </div>\n\n        </div>\n        <!--Grid column-->\n\n    </div>\n    <!--Grid row-->\n\n</section>\n<!--Section: Waves effect-->\n\n<div class=\"row justify-content-center pt-3\">\n    <div class=\"col-md-10\">\n        <!--Section: Docs link-->\n        <section class=\"pb-4 pt-2\">\n            <panel header=\"Full documentation\" color=\"primary-color\">\n                <p class=\"card-text\">Read the full documentation for these components.</p>\n                <a href=\"https://mdbootstrap.com/angular/content/bootstrap-images/\" target=\"_blank\" class=\"btn btn-primary waves-effect waves-light\">Learn more</a>\n            </panel>\n        </section>\n        <!--/.Section: Docs link-->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/views/css/images/images.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/css/images/images.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImagesComponent = (function () {
    function ImagesComponent() {
    }
    ImagesComponent.prototype.ngOnInit = function () {
    };
    ImagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-images',
            template: __webpack_require__("./src/app/views/css/images/images.component.html"),
            styles: [__webpack_require__("./src/app/views/css/images/images.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/app/views/css/media-object/media-object.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-5 font-bold\"><strong>Media object</strong></h2>\n\n<!--Section: Example-->\n<section class=\"mb-5 pb-5\">\n\n    <h4 class=\"my-5 dark-grey-text font-bold\"><strong>Example</strong></h4>\n\n    <!--Card-->\n    <div class=\"card\">\n\n        <!--Card content-->\n        <div class=\"card-body\">\n            <div class=\"media ml-3\">\n                <img class=\"d-flex mr-3 z-depth-1\" src=\"https://mdbootstrap.com/img/Photos/Othres/placeholder1.jpg\" alt=\"Generic placeholder image\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0\"><strong>Media heading</strong></h5>\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in\n                    vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n                    Donec lacinia congue felis in faucibus.\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <!--/.Card-->\n\n</section>\n<!--Section: Example-->\n\n<!--Section: Order-->\n<section class=\"mb-5 pb-5\">\n\n    <h4 class=\"my-5 dark-grey-text font-bold\"><strong>Order</strong></h4>\n\n    <!--Card-->\n    <div class=\"card\">\n\n        <!--Card content-->\n        <div class=\"card-body\">\n            <div class=\"media\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0 mb-1\"><strong>Media object</strong></h5>\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in\n                    vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n                    Donec lacinia congue felis in faucibus.\n                </div>\n                <img class=\"d-flex ml-3 z-depth-1\" src=\"https://mdbootstrap.com/img/Photos/Othres/placeholder1.jpg\" alt=\"Generic placeholder image\">\n            </div>\n        </div>\n\n    </div>\n    <!--/.Card-->\n\n</section>\n<!--Section: Order-->\n\n<!--Section: Nesting-->\n<section class=\"mb-5 pb-5\">\n\n    <h4 class=\"my-5 dark-grey-text font-bold\"><strong>Nesting</strong></h4>\n\n    <!--Card-->\n    <div class=\"card\">\n\n        <!--Card content-->\n        <div class=\"card-body\">\n            <div class=\"media\">\n                <img class=\"d-flex mr-3 rounded-circle z-depth-1\" src=\"https://mdbootstrap.com/img/Photos/Othres/avatar-min1.jpg\" alt=\"Generic placeholder image\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0\"><strong>Media heading</strong></h5>\n                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in\n                    vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n                    Donec lacinia congue felis in faucibus.\n\n                    <div class=\"media mt-4\">\n                        <a class=\"d-flex pr-3\" href=\"#\">\n                            <img src=\"https://mdbootstrap.com/img/Photos/Othres/avatar-min2.jpg\" alt=\"Generic placeholder image\" class=\"rounded-circle z-depth-1\">\n                        </a>\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0\"><strong>Media heading</strong></h5>\n                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in\n                            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n                            Donec lacinia congue felis in faucibus.\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <!--/.Card-->\n\n</section>\n<!--Section: Nesting-->\n\n<!--Section: Alignment-->\n<section class=\"mb-5 pb-5\">\n\n    <h4 class=\"my-5 dark-grey-text font-bold\"><strong>Alignment</strong></h4>\n    <!--Card-->\n    <div class=\"card mb-5\">\n\n        <!--Card content-->\n        <div class=\"card-body\">\n            <div class=\"media\">\n                <img class=\"d-flex align-self-start mr-3 z-depth-1\" src=\"https://mdbootstrap.com/img/Photos/Othres/placeholder6.jpg\" alt=\"Generic placeholder image\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0\"><strong>Top-aligned media</strong></h5>\n                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\n                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum\n                        nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque\n                        penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <!--/.Card-->\n\n    <!--Card-->\n    <div class=\"card mb-5\">\n\n        <!--Card content-->\n        <div class=\"card-body\">\n            <div class=\"media\">\n                <img class=\"d-flex align-self-center mr-3 z-depth-1\" src=\"https://mdbootstrap.com/img/Photos/Othres/placeholder6.jpg\" alt=\"Generic placeholder image\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0\"><strong>Center-aligned media</strong></h5>\n                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\n                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum\n                        nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                    <p class=\"mb-0\">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque\n                        penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <!--/.Card-->\n\n\n    <!--Card-->\n    <div class=\"card\">\n\n        <!--Card content-->\n        <div class=\"card-body\">\n            <div class=\"media\">\n                <img class=\"d-flex align-self-end mr-3 z-depth-1\" src=\"https://mdbootstrap.com/img/Photos/Othres/placeholder6.jpg\" alt=\"Generic placeholder image\">\n                <div class=\"media-body\">\n                    <h5 class=\"mt-0\"><strong>Bottom-aligned media</strong></h5>\n                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.\n                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum\n                        nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                    <p class=\"mb-0\">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque\n                        penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <!--/.Card-->\n\n</section>\n<!--Section: Alignment-->\n\n<!--Section: Media list-->\n<section class=\"mb-5\">\n\n    <h4 class=\"my-5 dark-grey-text font-bold\"><strong>Media list</strong></h4>\n\n    <!--Card-->\n    <div class=\"card\">\n\n        <!--Card content-->\n        <div class=\"card-body\">\n            <ul class=\"list-unstyled\">\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3 z-depth-1\" src=\"https://mdbootstrap.com/img/Photos/Othres/placeholder7.jpg\" alt=\"Generic placeholder image\">\n                    <div class=\"media-body\">\n                        <h5 class=\"mt-0 mb-1\"><strong>List-based media object</strong></h5>\n                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in\n                        vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n                        Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media my-5\">\n                    <img class=\"d-flex mr-3 z-depth-1\" src=\"https://mdbootstrap.com/img/Photos/Othres/placeholder7.jpg\" alt=\"Generic placeholder image\">\n                    <div class=\"media-body\">\n                        <h5 class=\"mt-0 mb-1\"><strong>List-based media object</strong></h5>\n                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in\n                        vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n                        Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n                <li class=\"media\">\n                    <img class=\"d-flex mr-3 z-depth-1\" src=\"https://mdbootstrap.com/img/Photos/Othres/placeholder7.jpg\" alt=\"Generic placeholder image\">\n                    <div class=\"media-body\">\n                        <h5 class=\"mt-0 mb-1\"><strong>List-based media object</strong></h5>\n                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in\n                        vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n                        Donec lacinia congue felis in faucibus.\n                    </div>\n                </li>\n            </ul>\n        </div>\n\n    </div>\n    <!--/.Card-->\n\n</section>\n<!--Section: Media list-->\n"

/***/ }),

/***/ "./src/app/views/css/media-object/media-object.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/css/media-object/media-object.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaObjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MediaObjectComponent = (function () {
    function MediaObjectComponent() {
    }
    MediaObjectComponent.prototype.ngOnInit = function () {
    };
    MediaObjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-media-object',
            template: __webpack_require__("./src/app/views/css/media-object/media-object.component.html"),
            styles: [__webpack_require__("./src/app/views/css/media-object/media-object.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MediaObjectComponent);
    return MediaObjectComponent;
}());



/***/ }),

/***/ "./src/app/views/css/shadow/shadow.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <style>\n        .shadow-box-example {\n            height: 120px;\n            width: 100%;\n            background-color: #64b5f6;\n        }\n    </style>\n\n    <!--Section: Examples-->\n    <section>\n\n        <h2 class=\"mt-lg-5 mb-5 font-bold\">\n            <strong>Shadows</strong>\n        </h2>\n\n        <div class=\"row\">\n\n            <div class=\"col-md-4 mb-r\">\n                <div class=\"shadow-box-example z-depth-1 flex-center\">\n                    <p class=\"white-text\">.z-depth-1</p>\n                </div>\n            </div>\n\n            <div class=\"col-md-4 mb-r\">\n                <div class=\"shadow-box-example z-depth-1-half flex-center\">\n                    <p class=\"white-text\">.z-depth-1-half</p>\n                </div>\n            </div>\n\n            <div class=\"col-md-4 mb-r\">\n                <div class=\"shadow-box-example z-depth-2 flex-center\">\n                    <p class=\"white-text\">.z-depth-2</p>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"row\">\n\n            <div class=\"col-md-4 mb-r\">\n                <div class=\"shadow-box-example z-depth-3 flex-center\">\n                    <p class=\"white-text\">.z-depth-3</p>\n                </div>\n            </div>\n\n            <div class=\"col-md-4 mb-r\">\n                <div class=\"shadow-box-example z-depth-4 flex-center\">\n                    <p class=\"white-text\">.z-depth-4</p>\n                </div>\n            </div>\n\n            <div class=\"col-md-4 mb-r\">\n                <div class=\"shadow-box-example z-depth-5 flex-center\">\n                    <p class=\"white-text\">.z-depth-5</p>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4 mb-r\">\n                <div class=\"shadow-box-example hoverable flex-center\">\n                    <p class=\"white-text\">hover me!</p>\n                </div>\n            </div>\n        </div>\n\n    </section>\n    <!--Section: Examples-->\n\n    <div class=\"row justify-content-center pt-3\">\n        <div class=\"col-md-10\">\n            <!--Section: Docs link-->\n            <section class=\"pb-4 pt-4\">\n                <panel header=\"Full documentation\" color=\"primary-color\">\n                    <p class=\"card-text\">Read the full documentation for these components.</p>\n                    <a href=\"https://mdbootstrap.com/angular/css/shadows/\" target=\"_blank\" class=\"btn btn-primary waves-effect waves-light\">Learn more</a>\n                </panel>\n            </section>\n            <!--/.Section: Docs link-->\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/views/css/shadow/shadow.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/css/shadow/shadow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShadowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShadowComponent = (function () {
    function ShadowComponent() {
    }
    ShadowComponent.prototype.ngOnInit = function () {
    };
    ShadowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-shadow',
            template: __webpack_require__("./src/app/views/css/shadow/shadow.component.html"),
            styles: [__webpack_require__("./src/app/views/css/shadow/shadow.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShadowComponent);
    return ShadowComponent;
}());



/***/ }),

/***/ "./src/app/views/css/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Section: Doc content-->\n<section class=\"documentation\">\n\n\n  <!--Section: -->\n  <section id=\"Typography\">\n\n    <!--Section: Live preview-->\n    <section>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <!--Card-->\n          <div class=\"card card-cascade  mt-5\">\n\n            <!--Card image-->\n            <div class=\"view gradient-card-header blue-gradient\">\n              <h4 class=\"h4-responsive\">Typography</h4>\n            </div>\n            <!--/Card image-->\n\n            <!--Card content-->\n            <div class=\"card-body text-center\">\n\n              <table class=\"table\">\n                <!-- <thead>\n                            <tr>\n                              <th>#</th>\n                              <th>First Name</th>\n                              <th>Last Name</th>\n                              <th>Username</th>\n                            </tr>\n                          </thead> -->\n                <tbody class=\"text-left\">\n                  <tr>\n                    <td>Header 1</td>\n                    <td>\n                      <h1>Material Design for Bootstrap Angular PRO</h1>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Header 2</td>\n                    <td>\n                      <h2>Material Design for Bootstrap Angular PRO</h2>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Header 3</td>\n                    <td>\n                      <h3>Material Design for Bootstrap Angular PRO</h3>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Header 4</td>\n                    <td>\n                      <h4>Material Design for Bootstrap Angular PRO</h4>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Header 5</td>\n                    <td>\n                      <h5>Material Design for Bootstrap Angular PRO</h5>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Header 6</td>\n                    <td>\n                      <h6>Material Design for Bootstrap Angular PRO</h6>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td></td>\n                    <td>\n                      <strong>\n                        <h1>Responsive Headings</h1>\n                      </strong>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Responsive Header 1</td>\n                    <td>\n                      <h1 class=\"h1-responsive\">Material Design for Bootstrap Angular PRO</h1>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Responsive Header 2</td>\n                    <td>\n                      <h2 class=\"h2-responsive\">Material Design for Bootstrap Angular PRO</h2>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Responsive Header 3</td>\n                    <td>\n                      <h3 class=\"h3-responsive\">Material Design for Bootstrap Angular PRO</h3>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Responsive Responsive Header 4</td>\n                    <td>\n                      <h4 class=\"h4-responsive\">Material Design for Bootstrap Angular PRO</h4>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Responsive Header 5</td>\n                    <td>\n                      <h5 class=\"h5-responsive\">Material Design for Bootstrap Angular PRO</h5>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Responsive Header 6</td>\n                    <td>\n                      <h6 class=\"h6-responsive\">Material Design for Bootstrap Angular PRO</h6>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Lead Paragraph</td>\n                    <td>\n                      <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam dignissimos itaque harum\n                        illo! Quidem, corporis at quae tempore nisi impedit cupiditate perferendis nesciunt, ex dolores doloremque!\n                        Sit, rem, in?</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Paragraph</td>\n                    <td>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam dignissimos itaque harum\n                        illo! Quidem, corporis at quae tempore nisi impedit cupiditate perferendis nesciunt, ex dolores doloremque!\n                        Sit, rem, in?</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Highlight</td>\n                    <td>\n                      <p>You can use the mark tag to\n                        <mark>highlight</mark> text.</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Delete</td>\n                    <td>\n                      <p>\n                        <del>This line of text is meant to be treated as deleted text.</del>\n                      </p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Crossed</td>\n                    <td>\n                      <p>\n                        <s>This line of text is meant to be treated as no longer accurate.</s>\n                      </p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Insert</td>\n                    <td>\n                      <p>\n                        <ins>This line of text is meant to be treated as an addition to the document.</ins>\n                      </p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Underline</td>\n                    <td>\n                      <p>\n                        <u>This line of text will render as underlined</u>\n                      </p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Small</td>\n                    <td>\n                      <p>\n                        <small>This line of text is meant to be treated as fine print.</small>\n                      </p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Strong</td>\n                    <td>\n                      <p>\n                        <strong>This line rendered as bold text.</strong>\n                      </p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Italic</td>\n                    <td>\n                      <p>\n                        <em>This line rendered as italicized text.</em>\n                      </p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Quotes</td>\n                    <td>\n                      <blockquote class=\"blockquote\">\n                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                      </blockquote>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Sourced quote</td>\n                    <td>\n                      <blockquote class=\"blockquote\">\n                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                        <footer class=\"blockquote-footer\">Someone famous in\n                          <cite title=\"Source Title\">Source Title</cite>\n                        </footer>\n                      </blockquote>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Reversed quote</td>\n                    <td>\n                      <blockquote class=\"blockquote blockquote-reverse\">\n                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                        <footer class=\"blockquote-footer\">Someone famous in\n                          <cite title=\"Source Title\">Source Title</cite>\n                        </footer>\n                      </blockquote>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Info</td>\n                    <td>\n                      <blockquote class=\"blockquote bq-primary\">\n                        <p class=\"bq-title\">Info notification</p>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam dignissimos itaque harum\n                          illo! Quidem, corporis at quae tempore nisi impedit cupiditate perferendis nesciunt, ex dolores\n                          doloremque! Sit, rem, in?</p>\n                      </blockquote>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Warning</td>\n                    <td>\n                      <blockquote class=\"blockquote bq-warning\">\n                        <p class=\"bq-title\">Warning notification</p>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam dignissimos itaque harum\n                          illo! Quidem, corporis at quae tempore nisi impedit cupiditate perferendis nesciunt, ex dolores\n                          doloremque! Sit, rem, in?</p>\n                      </blockquote>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Success</td>\n                    <td>\n                      <blockquote class=\"blockquote bq-success\">\n                        <p class=\"bq-title\">Success notification</p>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam dignissimos itaque harum\n                          illo! Quidem, corporis at quae tempore nisi impedit cupiditate perferendis nesciunt, ex dolores\n                          doloremque! Sit, rem, in?</p>\n                      </blockquote>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Danger</td>\n                    <td>\n                      <blockquote class=\"blockquote bq-danger\">\n                        <p class=\"bq-title\">Danger notification</p>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam dignissimos itaque harum\n                          illo! Quidem, corporis at quae tempore nisi impedit cupiditate perferendis nesciunt, ex dolores\n                          doloremque! Sit, rem, in?</p>\n                      </blockquote>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Colors</td>\n                    <td>\n                      <p class=\"red-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n                      <p class=\"pink-text\">Impedit architecto, totam hic sunt eum odio, deleniti.</p>\n                      <p class=\"purple-text\">Similique ex, expedita minus assumenda a magni beatae dolorum itaque.</p>\n                      <p class=\"deep-purple-text\">Veritatis eum libero nam, adipisci, necessitatibus eos.</p>\n                      <p class=\"indigo-text\">Sapiente, ea. Molestias sunt nihil saepe numquam quas perferendis.</p>\n                      <p class=\"blue-text\">Sapiente sit, possimus maiores, quo alias corporis cum eum nesciunt.</p>\n                      <p class=\"light-blue-text\">Corrupti adipisci, praesentium iusto eos, iure debitis modi.</p>\n                      <p class=\"cyan-text\">Odio autem veritatis aliquam consequuntur ea voluptatibus.</p>\n                      <p class=\"teal-text\">Similique, adipisci ea, sequi magnam sit inventore.</p>\n                      <p class=\"green-text\">Eos et vitae, odit deserunt dignissimos voluptas.</p>\n                      <p class=\"light-green-text\">Fugit nihil numquam inventore accusantium tenetur ex est.</p>\n                      <p class=\"lime-text\">Sed odit inventore illum excepturi officia, reiciendis numquam modi.</p>\n                      <p class=\"yellow-text\">At odio animi distinctio, aut enim tempora nobis error odit mollitia.</p>\n                      <p class=\"amber-text\">Quo at accusamus vel earum hic, inventore non, minima sint.</p>\n                      <p class=\"orange-text\">Iusto odit eos distinctio temporibus voluptates ad, illo repellat.</p>\n                      <p class=\"deep-orange-text\">Quas fugit fuga assumenda nihil esse et culpa reiciendis voluptatum.</p>\n                      <p class=\"brown-text\">Excepturi iusto amet sunt illo ad debitis quibusdam eius, consequatur.</p>\n                      <p class=\"grey-text\">Non sint nulla incidunt, odit repellat tempore, veniam ratione fugit.</p>\n                      <p class=\"blue-grey-text\">Eius, provident. Quo similique, repellat atque voluptas explicabo odio.</p>\n                      <p class=\"white-text\">In consequuntur error, non consequatur expedita maxime dolorum.</p>\n                    </td>\n                  </tr>\n\n                </tbody>\n              </table>\n            </div>\n            <!--/.Card content-->\n\n          </div>\n          <!--/.Card-->\n        </div>\n      </div>\n\n    </section>\n    <!--/Section: -->\n\n  </section>\n  <div class=\"row justify-content-center pt-3\">\n    <div class=\"col-md-10\">\n      <!--Section: Docs link-->\n      <section class=\"pb-4 pt-4\">\n        <panel header=\"Full documentation\" color=\"primary-color\">\n          <p class=\"card-text\">Read the full documentation for these components.</p>\n          <a href=\"https://mdbootstrap.com/angular/content/typography/\" target=\"_blank\" class=\"btn btn-primary waves-effect waves-light\">Learn more</a>\n        </panel>\n      </section>\n      <!--/.Section: Docs link-->\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/views/css/typography/typography.component.scss":
/***/ (function(module, exports) {

module.exports = ".blue-gradient {\n  background: linear-gradient(40deg, #45cafc, #4285f4); }\n\n.card.card-cascade .view {\n  -webkit-box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15), 0 3px 12px 0 rgba(0, 0, 0, 0.15);\n          box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15), 0 3px 12px 0 rgba(0, 0, 0, 0.15); }\n"

/***/ }),

/***/ "./src/app/views/css/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypographyComponent = (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-typography',
            template: __webpack_require__("./src/app/views/css/typography/typography.component.html"),
            styles: [__webpack_require__("./src/app/views/css/typography/typography.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/views/css/utilities/utilities.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n    \n                <span class=\"block-example border border-dark\"></span>\n    \n                <span class=\"block-example border-0 border-dark\"></span>\n    \n                <span class=\"block-example border border-dark border-top-0\"></span>\n    \n                <span class=\"block-example border border-dark border-right-0\"></span>\n    \n                <span class=\"block-example border border-dark border-bottom-0\"></span>\n    \n                <span class=\"block-example border border-dark border-left-0\"></span>\n    \n            </section>\n\n<h2 class=\"font-bold mt-5 mb-5\"><strong>Utilities / helpers</strong></h2>\n\n  <!--Description-->\n  <p class=\"description mb-4\"><strong>MDB Admin Dashboard</strong> includes dozens of utilities—classes with a single purpose. They’re designed to reduce the frequency\n      of highly repetitive declarations in your CSS while allowing for quick and easy development.</p>\n\n  <!-- List -->\n  <div class=\"list-group z-depth-1\">\n\n      <!-- Item -->\n      <a target=\"_blank\" href=\"https://mdbootstrap.com/angular/utilities/bootstrap-borders/\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\">\n          <div>\n              <div class=\"d-flex w-100 justify-content-between\">\n                  <h5 class=\"h5 mb-3\">Borders</h5>\n              </div>\n              <p class=\"mb-1 mr-4\">Use border utilities to quickly style the <code>border</code> and <code>border-radius</code> of an\n                  element. Great for images, buttons, or any other element.</p>\n          </div>\n\n          <i class=\"fa fa-chevron-right\" style=\"font-size: 1.3rem;\"></i>\n      </a>\n      <!-- Item -->\n\n      <!-- Item -->\n      <a target=\"_blank\" href=\"https://mdbootstrap.com/angular/utilities/bootstrap-clearfix/\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\">\n          <div>\n              <div class=\"d-flex w-100 justify-content-between\">\n                  <h5 class=\"h5 mb-3\">Clearfix</h5>\n              </div>\n              <p class=\"mb-1 mr-4\">Easily clear <code>floats</code> by adding <code>.clearfix</code> to the parent element. Utilizes\n                  the micro clearfix as popularized by Nicolas Gallagher. Can also be used as a mixin.</p>\n          </div>\n\n          <i class=\"fa fa-chevron-right\" style=\"font-size: 1.3rem;\"></i>\n      </a>\n      <!-- Item -->\n\n      <!-- Item -->\n      <a target=\"_blank\" href=\"https://mdbootstrap.com/angular/utilities/bootstrap-close-icon/\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\">\n          <div>\n              <div class=\"d-flex w-100 justify-content-between\">\n                  <h5 class=\"h5 mb-3\">Close icon</h5>\n              </div>\n              <p class=\"mb-1 mr-4\">Use a generic close icon for dismissing content like modals and alerts. <strong>Be sure to include text for screen readers</strong>,\n                  as we’ve done with <code>aria-label</code>.</p>\n          </div>\n\n          <i class=\"fa fa-chevron-right\" style=\"font-size: 1.3rem;\"></i>\n      </a>\n      <!-- Item -->\n\n      <!-- Item -->\n      <a target=\"_blank\" href=\"https://mdbootstrap.com/angular/utilities/bootstrap-display-property/\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\">\n          <div>\n              <div class=\"d-flex w-100 justify-content-between\">\n                  <h5 class=\"h5 mb-3\">Display</h5>\n              </div>\n              <p class=\"mb-1 mr-4\">Quickly and responsively toggle the display value of components and more with our display utilities.\n                  Includes support for some of the more common values, as well as some extras for controlling display\n                  when printing.</p>\n          </div>\n\n          <i class=\"fa fa-chevron-right\" style=\"font-size: 1.3rem;\"></i>\n      </a>\n      <!-- Item -->\n\n      <!-- Item -->\n      <a target=\"_blank\" href=\"https://mdbootstrap.com/angular/utilities/bootstrap-embeds/\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\">\n          <div>\n              <div class=\"d-flex w-100 justify-content-between\">\n                  <h5 class=\"h5 mb-3\">Embeds</h5>\n              </div>\n              <p class=\"mb-1 mr-4\">Create responsive video or slideshow embeds based on the width of the parent by creating an intrinsic\n                  ratio that scales on any device.</p>\n          </div>\n\n          <i class=\"fa fa-chevron-right\" style=\"font-size: 1.3rem;\"></i>\n      </a>\n      <!-- Item -->\n\n      <!-- Item -->\n      <a target=\"_blank\" href=\"https://mdbootstrap.com/angular/utilities/bootstrap-float/\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\">\n          <div>\n              <div class=\"d-flex w-100 justify-content-between\">\n                  <h5 class=\"h5 mb-3\">Float</h5>\n              </div>\n              <p class=\"mb-1 mr-4\">Toggle floats on any element, across any breakpoint, using our responsive float utilities.</p>\n          </div>\n\n          <i class=\"fa fa-chevron-right\" style=\"font-size: 1.3rem;\"></i>\n      </a>\n      <!-- Item -->\n\n      <!-- Item -->\n      <a target=\"_blank\" href=\"https://mdbootstrap.com/angular/utilities/flexbox/\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\">\n          <div>\n              <div class=\"d-flex w-100 justify-content-between\">\n                  <h5 class=\"h5 mb-3\">Flexbox</h5>\n              </div>\n              <p class=\"mb-1 mr-4\">Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more\n                  with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS\n                  may be necessary.</p>\n          </div>\n\n          <i class=\"fa fa-chevron-right\" style=\"font-size: 1.3rem;\"></i>\n      </a>\n      <!-- Item -->\n\n      <!-- Item -->\n      <a target=\"_blank\" href=\"https://mdbootstrap.com/angular/utilities/bootstrap-image-replacement/\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\">\n          <div>\n              <div class=\"d-flex w-100 justify-content-between\">\n                  <h5 class=\"h5 mb-3\">Image replacement</h5>\n              </div>\n              <p class=\"mb-1 mr-4\">Swap text for background images with the image replacement class.</p>\n          </div>\n\n          <i class=\"fa fa-chevron-right\" style=\"font-size: 1.3rem;\"></i>\n      </a>\n      <!-- Item -->\n\n      <!-- Item -->\n      <a target=\"_blank\" href=\"https://mdbootstrap.com/angular/utilities/bootstrap-position/\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\">\n          <div>\n              <div class=\"d-flex w-100 justify-content-between\">\n                  <h5 class=\"h5 mb-3\">Position</h5>\n              </div>\n              <p class=\"mb-1 mr-4\">Use these shorthand utilities for quickly configuring the position of an element.</p>\n          </div>\n\n          <i class=\"fa fa-chevron-right\" style=\"font-size: 1.3rem;\"></i>\n      </a>\n      <!-- Item -->\n\n      <!-- Item -->\n      <a target=\"_blank\" href=\"https://mdbootstrap.com/angular/utilities/bootstrap-screenreaders/\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\">\n          <div>\n              <div class=\"d-flex w-100 justify-content-between\">\n                  <h5 class=\"h5 mb-3\">Screenreaders</h5>\n              </div>\n              <p class=\"mb-1 mr-4\">Hide an element to all devices except screen readers with <code>.sr-only</code>. Combine <code>.sr-only</code>                            with <code>.sr-only-focusable</code> to show the element again when it’s focused (e.g. by a keyboard-only\n                  user). Can also be used as mixins.</p>\n          </div>\n\n          <i class=\"fa fa-chevron-right\" style=\"font-size: 1.3rem;\"></i>\n      </a>\n      <!-- Item -->\n\n      <!-- Item -->\n      <a target=\"_blank\" href=\"https://mdbootstrap.com/angular/utilities/bootstrap-sizing/\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\">\n          <div>\n              <div class=\"d-flex w-100 justify-content-between\">\n                  <h5 class=\"h5 mb-3\">Sizing</h5>\n              </div>\n              <p class=\"mb-1 mr-4\">Easily make an element as wide or as tall (relative to its parent) with our width and height utilities.\n                  Includes support for <code>25%</code>, <code>50%</code>, <code>75%</code>, and <code>100%</code>                            by default.</p>\n          </div>\n\n          <i class=\"fa fa-chevron-right\" style=\"font-size: 1.3rem;\"></i>\n      </a>\n      <!-- Item -->\n\n      <!-- Item -->\n      <a target=\"_blank\" href=\"https://mdbootstrap.com/angular/utilities/bootstrap-spacing/\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\">\n          <div>\n              <div class=\"d-flex w-100 justify-content-between\">\n                  <h5 class=\"h5 mb-3\">Spacing</h5>\n              </div>\n              <p class=\"mb-1 mr-4\">Assign responsive-friendly <code>margin</code> or <code>padding</code> values to an element or a\n                  subset of its sides with shorthand classes. Includes support for individual properties, all properties,\n                  and vertical and horizontal properties. Classes are built from a default Sass map ranging from\n                  <code>.25rem</code> to <code>3rem</code>.</p>\n          </div>\n\n          <i class=\"fa fa-chevron-right\" style=\"font-size: 1.3rem;\"></i>\n      </a>\n      <!-- Item -->\n\n      <!-- Item -->\n      <a target=\"_blank\" href=\"https://mdbootstrap.com/angular/utilities/bootstrap-text-utilities/\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\">\n          <div>\n              <div class=\"d-flex w-100 justify-content-between\">\n                  <h5 class=\"h5 mb-3\">Text</h5>\n              </div>\n              <p class=\"mb-1 mr-4\">Documentation and examples for common text utilities to control alignment, wrapping, weight, and\n                  more.</p>\n          </div>\n\n          <i class=\"fa fa-chevron-right\" style=\"font-size: 1.3rem;\"></i>\n      </a>\n      <!-- Item -->\n\n      <!-- Item -->\n      <a target=\"_blank\" href=\"https://mdbootstrap.com/angular/utilities/bootstrap-vertical-align/\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\">\n          <div>\n              <div class=\"d-flex w-100 justify-content-between\">\n                  <h5 class=\"h5 mb-3\">Vertical align</h5>\n              </div>\n              <p class=\"mb-1 mr-4\">Change the alignment of elements with the vertical-alignment utilities. Please note that vertical-align\n                  only affects inline, inline-block, inline-table, and table cell elements.</p>\n          </div>\n\n          <i class=\"fa fa-chevron-right\" style=\"font-size: 1.3rem;\"></i>\n      </a>\n      <!-- Item -->\n\n      <!-- Item -->\n      <a target=\"_blank\" href=\"https://mdbootstrap.com/angular/utilities/visibility/\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\">\n          <div>\n              <div class=\"d-flex w-100 justify-content-between\">\n                  <h5 class=\"h5 mb-3\">Visibility</h5>\n              </div>\n              <p class=\"mb-1 mr-4\">Control the visibility, without modifying the display, of elements with visibility utilities.</p>\n          </div>\n\n          <i class=\"fa fa-chevron-right\" style=\"font-size: 1.3rem;\"></i>\n      </a>\n      <!-- Item -->\n\n  </div>\n  <!-- List -->\n\n  <!--Section: Docs link-->\n  <section>"

/***/ }),

/***/ "./src/app/views/css/utilities/utilities.component.scss":
/***/ (function(module, exports) {

module.exports = ".block-example {\n  width: 6rem;\n  height: 6rem;\n  margin: 0.5rem;\n  background-color: #eee;\n  display: inline-block; }\n"

/***/ }),

/***/ "./src/app/views/css/utilities/utilities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilitiesComponent = (function () {
    function UtilitiesComponent() {
    }
    UtilitiesComponent.prototype.ngOnInit = function () {
    };
    UtilitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-utilities',
            template: __webpack_require__("./src/app/views/css/utilities/utilities.component.html"),
            styles: [__webpack_require__("./src/app/views/css/utilities/utilities.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UtilitiesComponent);
    return UtilitiesComponent;
}());



/***/ }),

/***/ "./src/app/views/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n.candidate-card {}\n@media only screen and (max-width: 720px) {\n  .candidate-card {\n    margin-left: 9%;\n    margin-bottom: 0.6em;\n  }\n}\n.newline {\n  white-space: pre-line\n}\n</style>\n\n<div mdbModal #loginAvatarForm=\"mdb-modal\" class=\"modal fade\" id=\"modalVote\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog cascading-modal modal-avatar modal-md\" role=\"document\">\n\n    <div class=\"modal-content\">\n\n      <div class=\"modal-header\">\n        <img \n          src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg\" \n          class=\"rounded-circle img-responsive modal-image\"\n          #imgCandidate\n          >\n      </div>\n\n      <div class=\"modal-body text-center mb-1\">\n\n        <h5 class=\"mt-1 mb-2\">\n          Confirmar Voto\n        </h5>\n\n        <div class=\"md-form ml-0 mr-0\">\n          <input mdbInputDirective type=\"text\" type=\"text\" id=\"nombre\" class=\"form-control ml-0\" #voterName>\n          <label for=\"nombre\" class=\"ml-0\">\n            Nombre\n          </label>\n        </div>\n\n        <input type=\"hidden\" value=\"\" #candidateId/>\n\n        <div class=\"text-center\">\n          <button class=\"btn btn-success mt-1 waves-light vote-button\" (click)=\"voteCandidate(voterName);\" mdbWavesEffect>\n            Votar\n          </button>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n\n\n<div mdbModal #descriptionForm=\"mdb-modal\" class=\"modal fade\" id=\"modalDescription\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog cascading-modal modal-avatar modal-md\" role=\"document\">\n    <!--Content-->\n    <div class=\"modal-content\">\n\n      <!--Header-->\n      <div class=\"modal-header\">\n        \n        <br />\n        <br />\n        <br />\n        <br />\n\n      </div>\n\n      <div class=\"modal-body text-center mb-1\">\n        <div [innerHTML]=\"text\">\n          <h5 class=\"mt-1 mb-2\">Mas Informacion</h5>\n        </div>\n        \n\n        <div class=\"text-center\">\n\n          <p>\n            Para poder votar se necesita descargar el plug-in de MetaMask: \n            <br />  \n            <a href=\"https://metamask.io\">https://metamask.io</a> \n            <br /> \n            Obtener recursos mediante la pagina <a href=\"https://faucet.rinkeby.io/\">faucet.rinkeby.io</a> \n          </p> \n\n          <p>\n            Obtener recursos por medio de Twitter, publica un tweet con tu direccion de Ethereum. Copia y pega el URL del tweet en la pagina mencionada\n            <br /> <br /> \n            Obtener recursos por medio de Google Plus, publica un post con tu direccion de Ethereum. Copia y pega el URL del Post en la pagina mencionada\n            <br /> <br /> \n            Obtener recursos por medio de Facebook, publica un post con tu direccion de Ethereum. Copia y pega el URL del post en la pagina mencionada\n            <br /> <br />\n          </p>\n\n          <p>\n            Al momento de escribir tu nombre y votar por tu candidato, confirma tu transaccion en el plugin para que se pueda registrar el voto.\n          </p>\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-xs-12 col-sm-8 pull-left\">\n    <div class=\"divider-new mt-0 mb-4 py-3\">\n      <h2 class=\"h3-responsive\">\n          <strong>\n            Votos\n          </strong>\n      </h2>\n    </div>\n  </div>\n\n  <div class=\"col-xs-12 col-sm-4 pull-right\">\n    <button type=\"button\" class=\"btn btn-primary waves-light pull-right\" data-toggle=\"modal\" (click)=\"descriptionForm.show();\" mdbWavesEffect v>\n      Como Votar\n    </button>\n  </div>\n</div>\n\n<div class=\"row\">\n\n    <div class=\"col-10 col-md-3 candidate-card\">\n\n        <div class=\"card card-cascade cascading-admin-card\">\n\n            <div class=\"admin-up\">\n                \n                <div class=\"data\">\n                    <h2 style=\"text-align: center;\">\n                      <strong>\n                        {{ votesPerProposal && votesPerProposal[0] }}\n                      </strong>\n                    </h2>\n                </div>\n            </div>\n\n            <div class=\"card-body\">\n                <div class=\"progress\">\n                    <div id=\"progress-bar-1\" class=\"progress-bar bg-primary\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"percentagePerProposalStyleOne\">\n                    </div>\n                      \n                </div>\n\n                <p class=\"card-text\"> \n                  {{ percentagePerProposal && percentagePerProposal[0] }} %\n                </p>\n            </div>\n\n        </div>\n\n    </div>\n\n    <div class=\"col-10 col-md-3 candidate-card\">\n\n        <div class=\"card card-cascade cascading-admin-card\">\n\n            <div class=\"admin-up\">\n                \n                <div class=\"data\">\n                    <h2 style=\"text-align: center;\">\n                      <strong>\n                        {{ votesPerProposal && votesPerProposal[1] }}\n                      </strong>\n                    </h2>\n                </div>\n            </div>\n\n            <div class=\"card-body\">\n                <div class=\"progress\">\n                    <div id=\"progress-bar-1\" class=\"progress-bar bg-primary\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"percentagePerProposalStyleTwo\">\n                    </div>\n                </div>\n\n                <p class=\"card-text\">\n                  {{ percentagePerProposal && percentagePerProposal[1] }} %\n                </p>\n            </div>\n\n        </div>\n\n    </div>\n\n    <div class=\"col-10 col-md-3 candidate-card\">\n\n        <div class=\"card card-cascade cascading-admin-card\">\n\n            <div class=\"admin-up\">\n                \n                <div class=\"data\">\n                    <h2 style=\"text-align: center;\">\n                      <strong>\n                        {{ votesPerProposal && votesPerProposal[2] }}\n                      </strong>\n                    </h2>\n                </div>\n            </div>\n\n            <div class=\"card-body\">\n                <div class=\"progress\">\n                    <div id=\"progress-bar-1\" class=\"progress-bar bg-primary\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"percentagePerProposalStyleThree\">\n                    </div>\n                </div>\n\n                <p class=\"card-text\">\n                  {{ percentagePerProposal && percentagePerProposal[2] }} %\n                </p>\n            </div>\n\n        </div>\n\n    </div>\n\n    <div class=\"col-10 col-md-3 candidate-card\">\n        <div class=\"card card-cascade cascading-admin-card\">\n\n            <div class=\"admin-up\">\n              \n              <div class=\"data\">\n                <h2 style=\"text-align: center;\">\n                  <strong>\n                    {{ votesPerProposal && votesPerProposal[3] }}\n                  </strong>\n                </h2>\n              </div>\n            </div>\n\n            <div class=\"card-body\">\n                <div class=\"progress\">\n                    <div id=\"progress-bar-1\" class=\"progress-bar bg-primary\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"percentagePerProposalStyleFour\">\n                    </div>\n                </div>\n                <p class=\"card-text\">\n                  {{ percentagePerProposal && percentagePerProposal[3] }} %\n                </p>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n\n<div class=\"divider-new mt-0 mb-4 py-3\">\n  <h2 class=\"h3-responsive\">\n      <strong>\n        Candidatos\n      </strong>\n  </h2>\n</div>\n\n<!-- \n<button (click)=\"createContract();\" type=\"button\" class=\"btn btn-outline-primary btn-rounded btn-sm\" mdbWavesEffect>\n  Create Contract\n</button>\n\n<button (click)=\"checkVoters();\" type=\"button\" class=\"btn btn-outline-primary btn-rounded btn-sm\" mdbWavesEffect>\n  Check Voters\n</button> \n-->\n\n<div class=\"row\">\n  <div class=\"col-10 col-md-3 candidate-card\" *ngFor=\"let candidate of candidates\">\n    <!-- <div > -->\n      <div class=\"card card-cascade narrower\">\n\n        <div class=\"view overlay hm-white-slight waves-light\" mdbWavesEffect>\n          <center>\n            <img src=\"{{ candidate.image }}\" class=\"img-fluid\">\n            <a>\n              <div class=\"mask\"></div>\n            </a>\n          </center>\n        </div>\n\n        <div class=\"card-body text-center\">\n\n          <h4 class=\"card-title font-bold mb-2\">\n              <strong>\n                {{ candidate.name }}\n              </strong>\n          </h4>\n\n          <h5 class=\"indigo-text\">\n              <strong>\n                {{ candidate.party }}\n              </strong>\n          </h5>\n\n          <div class=\"text-center\">\n            <button id=\"modal_button\" type=\"button\" class=\"btn btn-primary waves-light\" data-toggle=\"modal\" data-target=\"#centralFluid\" (click)=\"loginAvatarForm.show(); voteClick(candidate.id, imgCandidate)\" data-id=\"{{ candidate.id }}\" mdbWavesEffect v>\n              Votar\n            </button>\n          </div>\n\n        </div>\n\n      </div>\n\n    <!-- </div> -->\n  </div>\n</div>\n\n<div class=\"divider-new mt-0 mb-4 py-3\"></div>\n\n<div class=\"container\">\n\n  <!--Section: Main info-->\n  <section class=\"mt-5 wow fadeIn\">\n\n    <!--Grid row-->\n    <div class=\"row\">\n\n      <!--Grid column-->\n      <div class=\"col-md-6 mb-4\">\n\n        <img src=\"/assets/Ethereum.png\" class=\"img-fluid z-depth-1-half\" alt=\"\">\n\n      </div>\n      <!--Grid column-->\n\n      <!--Grid column-->\n      <div class=\"col-md-6 mb-4\">\n\n        <!-- Main heading -->\n        <h3 class=\"h3 mb-3\">\n          Votaciones Descentralizadas\n        </h3>\n\n        <p>\n          En carreradepoder.com se presenta una implementacion simple de votaciones descentralizadas basadas en un contrato inteligente en el <strong>Blockchain de Ethereum</strong>\n        </p>\n\n      </div>\n      <!--Grid column-->\n\n    </div>\n    <!--Grid row-->\n\n  </section>\n  <!--Section: Main info-->\n\n  <hr class=\"my-5\">\n\n  <!--Section: Main features & Quick Start-->\n  <section>\n\n    <h3 class=\"h3 text-center mb-5\">Como Funciona</h3>\n\n    <p class=\"grey-text\">\n      Las votaciones se manejan por medio de un contrato inteligente en el blockchain de Ethereum, el contrato inteligente esta en una red de prueba(Rinkeby Test Net).\n      <br />\n      La direccion del contrato es: \n      <br />\n\n    </p>\n    <!--Grid row-->\n    <div class=\"row wow fadeIn\">\n\n      <!--Grid column-->\n      <div class=\"col-lg-6 col-md-12 px-4\">\n\n        <!--First row-->\n        <div class=\"row\">\n\n          <div class=\"col-2 mr-3\">\n            <!-- <i class=\"fa fa-code fa-2x indigo-text\"></i> -->\n            <img src=\"/assets/ethereum-logo.png\" class=\"img-fluid\" alt=\"\">\n          </div>\n\n          <div class=\"col-9\">\n            <h5 class=\"feature-title\">\n              Ethereum\n            </h5>\n            <p class=\"grey-text\">\n              Ethereum provee la infraestructura que facilita la confianza y la seguridad de las transacciones o votos. En este caso se implementa un contrato inteligente para el manejo de votos\n            </p>\n          </div>\n\n        </div>\n\n        <div style=\"height:30px\"></div>\n\n      </div>\n\n      <div class=\"col-lg-6 col-md-12\">\n        \n        <div class=\"row\">\n\n          <div class=\"col-2 mr-3\">\n            <!-- <i class=\"fa fa-book fa-2x blue-text\"></i> -->\n            <img src=\"/assets/metamask.png\" class=\"img-fluid\" alt=\"\">\n          </div>\n\n          <div class=\"col-9\">\n            \n            <h5 class=\"feature-title\">\n              Metamask\n            </h5>\n\n            <p class=\"grey-text\">\n              Metamask es una herramienta que permite interactuar con el Blockchain de Ethereum, necesario para la implementacion de carreradepoder.com\n            </p>\n\n          </div>\n\n        </div>\n\n        <div style=\"height:30px\"></div>\n        \n      </div>\n      \n\n    </div>\n    \n\n  </section>\n  \n\n</div>"

/***/ }),

/***/ "./src/app/views/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_web3_service__ = __webpack_require__("./src/app/util/web3.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var poll_artifacts = __webpack_require__("./build/contracts/Poll.json");
var HomeComponent = (function () {
    function HomeComponent(router, web3Service) {
        this.router = router;
        this.web3Service = web3Service;
        this.type = '';
        this.side = '';
        this.size = '';
        this.candidates = [
            {
                id: 1,
                image: '/assets/amlo.png',
                name: 'Andres Manuel Lopez Obrador',
                description: 'Andres Manuel Lopez Obrador',
                party: 'MORENA',
                party_image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo_MORENA.jpg'
            },
            {
                id: 2,
                image: '/assets/anaya.png',
                name: 'Ricardo Anaya Cortes',
                description: 'Ricardo Anaya Cortes',
                party: 'PAN',
                party_image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo_MORENA.jpg'
            },
            {
                id: 3,
                image: '/assets/meade.jpeg',
                name: 'José Antonio Meade',
                description: 'José Antonio Meade',
                party: 'PRI',
                party_image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo_MORENA.jpg'
            },
            {
                id: 4,
                image: '/assets/bronco.jpg',
                name: 'Jaime Rodríguez Calderón',
                description: 'Jaime Rodríguez Calderón',
                party: 'Independiente',
                party_image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo_MORENA.jpg'
            },
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.candidates = this.candidates;
        this.web3Service.artifactsToContract(poll_artifacts)
            .then(function (PollAbstraction) {
            _this.Poll = PollAbstraction;
            _this.getVotes();
            console.log(_this.Poll);
        });
    };
    HomeComponent.prototype.voteClick = function (id, img) {
        img.src = this.candidates[id - 1].image;
        this.selectedCandidate = id;
    };
    HomeComponent.prototype.voteCandidate = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var account, deployedMetaCoin, voterName, voterHash, proposalsCount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        account = this.web3Service.accounts[0];
                        return [4 /*yield*/, this.Poll.deployed()];
                    case 1:
                        deployedMetaCoin = _a.sent();
                        voterName = name.value;
                        voterHash = Buffer.from(voterName).toString('hex');
                        return [4 /*yield*/, deployedMetaCoin.vote(voterHash, this.selectedCandidate - 1, { from: account })];
                    case 2:
                        proposalsCount = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.getVotes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deployedMetaCoin, numberOfVotePerProposal, proposals, totalVotes, i, votePercentageOne, votePercentageTwo, votePercentageThree, votePercentageFour, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.Poll.deployed()];
                    case 1:
                        deployedMetaCoin = _a.sent();
                        return [4 /*yield*/, deployedMetaCoin.numberOfVotePerProposal()];
                    case 2:
                        numberOfVotePerProposal = _a.sent();
                        return [4 /*yield*/, deployedMetaCoin.numberOfVotePerProposal()];
                    case 3:
                        proposals = _a.sent();
                        this.votesPerProposal = numberOfVotePerProposal;
                        totalVotes = 0;
                        for (i = 0; i < this.votesPerProposal.length; i++) {
                            totalVotes += this.votesPerProposal[i]['c'][0];
                        }
                        votePercentageOne = this.votesPerProposal[0]['c'][0] / totalVotes * 100;
                        votePercentageTwo = this.votesPerProposal[1]['c'][0] / totalVotes * 100;
                        votePercentageThree = this.votesPerProposal[2]['c'][0] / totalVotes * 100;
                        votePercentageFour = this.votesPerProposal[3]['c'][0] / totalVotes * 100;
                        this.firstCandidatePercentage = 33;
                        this.percentagePerProposal = [
                            votePercentageOne.toFixed(2),
                            votePercentageTwo.toFixed(2),
                            votePercentageThree.toFixed(2),
                            votePercentageFour.toFixed(2)
                        ];
                        this.percentagePerProposalStyleOne = { 'width': votePercentageOne + '%' };
                        this.percentagePerProposalStyleTwo = { 'width': votePercentageTwo + '%' };
                        this.percentagePerProposalStyleThree = { 'width': votePercentageThree + '%' };
                        this.percentagePerProposalStyleFour = { 'width': votePercentageFour + '%' };
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.checkVoters = function () {
        return __awaiter(this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                account = "0x1889e65dda92Fbe183F93F9D0232F4b6F09765B3";
                try {
                    console.log(this.votesPerProposal);
                }
                catch (e) {
                    console.log(e);
                }
                return [2 /*return*/];
            });
        });
    };
    HomeComponent.prototype.createContract = function () {
        return __awaiter(this, void 0, void 0, function () {
            var account, deployedMetaCoin, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        account = "0x1889e65dda92Fbe183F93F9D0232F4b6F09765B3";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.Poll.deployed()];
                    case 2:
                        deployedMetaCoin = _a.sent();
                        console.log(deployedMetaCoin);
                        deployedMetaCoin.addProposal("Andres Manuel Lopez Obrador", {
                            from: account
                        });
                        deployedMetaCoin.addProposal("Ricardo Anaya Cortes", {
                            from: account
                        });
                        deployedMetaCoin.addProposal("Jose Antonio Meade", {
                            from: account
                        });
                        deployedMetaCoin.addProposal("Jaime Rodriguez Calderon", {
                            from: account
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        console.log(e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "side", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "size", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/views/home/home.component.html"),
            styles: [__webpack_require__("./src/app/views/home/home.component.scss")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'modal',
            template: __webpack_require__("./src/app/shared/components/modal/modal.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__util_web3_service__["a" /* Web3Service */]])
    ], HomeComponent);
    return HomeComponent;
}());


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/app/views/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4 wow fadeIn\">\n  <div class=\"card-body d-sm-flex justify-content-between\">\n    <h4 class=\"mb-sm-0\">\n      <a href=\"/home\">\n        Inicio\n      </a>\n    </h4>\n  </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-3\">\n\n        <div class=\"card card-cascade narrower\">\n\n          <div class=\"view overlay hm-white-slight waves-light\" mdbWavesEffect>\n            <center>\n              <img src=\"{{ candidate.image }}\" class=\"img-fluid\">\n              <a>\n                <div class=\"mask\"></div>\n              </a>\n            </center>\n          </div>\n\n          <div class=\"card-body text-center\">\n\n            <h4 class=\"card-title font-bold mb-2\">\n                <strong>{{ candidate.name }}</strong>\n            </h4>\n\n            <h5 class=\"indigo-text\">\n                <strong>{{ candidate.party }}</strong>\n            </h5>\n\n            <h6 class='text-justify'>\n                <strong>About:</strong>\n            </h6>\n\n            <p class='text-justify'>\n                {{ candidate.name }}\n            </p>\n\n            <div class=\"text-right\">\n              <button (click)=\"btnClick(candidate.id);\" type=\"button\" class=\"btn btn-outline-primary btn-rounded  btn-sm\" mdbWavesEffect>\n                  More...\n              </button>\n            </div>\n\n          </div>\n\n        </div>\n\n    </div>\n\n    <div class=\"col-md-9\">\n\n        <section class=\"section text-center pb-3\">\n            <!-- <h2 class=\"section-heading h1 pt-4\"><strong>Latest projects:</strong></h2> -->\n        </section>\n\n    </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/views/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = ".card.card-cascade .view.gradient-card-header {\n  padding: 1rem 1rem;\n  text-align: center; }\n\n.card.card-cascade h3,\n.card.card-cascade h4 {\n  margin-bottom: 0px; }\n\n.blue-gradient {\n  background: linear-gradient(40deg, #45cafc, #4285f4); }\n\n.font-bold {\n  font-weight: 600; }\n\n.card.card-cascade .view {\n  -webkit-box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15), 0 3px 12px 0 rgba(0, 0, 0, 0.15);\n          box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15), 0 3px 12px 0 rgba(0, 0, 0, 0.15); }\n"

/***/ }),

/***/ "./src/app/views/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(route) {
        this.route = route;
        this.candidates = [
            {
                id: 1,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Len%C3%ADn_Moreno_con_el_l%C3%ADder_mexicano_L%C3%B3pez_Obrador_%28Recortado%29.png/220px-Len%C3%ADn_Moreno_con_el_l%C3%ADder_mexicano_L%C3%B3pez_Obrador_%28Recortado%29.png',
                name: 'Andres Manuel Lopez Obrador',
                description: 'Andres Manuel Lopez Obrador',
                party: 'MORENA',
                party_image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo_MORENA.jpg'
            },
            {
                id: 2,
                image: 'https://az620379.vo.msecnd.net/images/Contracts/8e213a2d-32cc-432c-b8dc-13b8e117d2da.png',
                name: 'Ricardo Anaya Cortes',
                description: 'Ricardo Anaya Cortes',
                party: 'PAN',
                party_image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo_MORENA.jpg'
            },
            {
                id: 3,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Ex1I1-Yd98ZUr4fbT7qWWt4lT5T8kGV4E21EqJFWm1OIX10T',
                name: 'José Antonio Meade',
                description: 'José Antonio Meade',
                party: 'PRI',
                party_image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo_MORENA.jpg'
            },
            {
                id: 4,
                image: 'https://lideresmexicanos.com/wp-content/uploads/2016/06/Rodriguez-Calderon-Jaime-1.jpg',
                name: 'Jaime Rodríguez Calderón',
                description: 'Jaime Rodríguez Calderón',
                party: 'Independiente',
                party_image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo_MORENA.jpg'
            },
        ];
        console.log('constructor');
        console.log(this.candidates[0]);
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit');
        this.sub = this.route.params.subscribe(function (params) {
            // this.id = + params['id']; // (+) converts string 'id' to a number
            console.log(params);
            _this.candidate = _this.candidates[params['id'] - 1];
            console.log(_this.candidates[params['id'] - 1]);
            // In a real app: dispatch action to load the details here.
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/views/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/views/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/profile/profile1/profile1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-3\">\n\n\n        <!--Card-->\n        <div class=\"card card-cascade narrower\">\n\n            <!--Card image-->\n            <div class=\"view overlay hm-white-slight waves-light\" mdbWavesEffect>\n                <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg\" class=\"img-fluid\">\n                <a>\n                    <div class=\"mask\"></div>\n                </a>\n            </div>\n            <!--/Card image-->\n\n            <!--Card content-->\n            <div class=\"card-body text-center\">\n                <!--Title-->\n                <h4 class=\"card-title font-bold mb-2\"><strong>Alice Mayer</strong></h4>\n                <h5 class=\"indigo-text\"><strong>Photographer</strong></h5>\n\n                <h6 class='text-justify'><strong>About:</strong></h6>\n                <p class='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione perferendis quod animi dignissimos consectetur\n                    quibusdam numquam laboriosam, minus, provident...</p>\n\n                <div class=\"text-right\">\n                    <button type=\"button\" class=\"btn btn-outline-primary btn-rounded  btn-sm\" mdbWavesEffect>More...</button>\n                </div>\n\n            </div>\n            <!--/.Card content-->\n\n        </div>\n        <!--/.Card-->\n\n    </div>\n\n    <div class=\"col-md-9\">\n\n        <!--Projects section v.2-->\n        <section class=\"section text-center pb-3\">\n            <!--Section heading-->\n            <!-- <h2 class=\"section-heading h1 pt-4\"><strong>Latest projects:</strong></h2> -->\n            <!--Section description-->\n\n        </section>\n        <!--/Projects section v.2-->\n    </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/views/profile/profile1/profile1.component.scss":
/***/ (function(module, exports) {

module.exports = ".card.card-cascade .view.gradient-card-header {\n  padding: 1rem 1rem;\n  text-align: center; }\n\n.card.card-cascade h3,\n.card.card-cascade h4 {\n  margin-bottom: 0px; }\n\n.blue-gradient {\n  background: linear-gradient(40deg, #45cafc, #4285f4); }\n\n.font-bold {\n  font-weight: 600; }\n\n.card.card-cascade .view {\n  -webkit-box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15), 0 3px 12px 0 rgba(0, 0, 0, 0.15);\n          box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15), 0 3px 12px 0 rgba(0, 0, 0, 0.15); }\n"

/***/ }),

/***/ "./src/app/views/profile/profile1/profile1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Profile1Component = (function () {
    function Profile1Component(route) {
        this.route = route;
        this.imagesBasic = [
            {
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
                thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
                description: 'Image 1'
            },
            {
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
                thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
                description: 'Image 2'
            },
            {
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
                thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
                description: 'Image 3'
            },
            {
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
                thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
                description: 'Image 4'
            },
            {
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
                thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
                description: 'Image 5'
            },
            {
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
                thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
                description: 'Image 6'
            },
            {
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
                thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
                description: 'Image 7'
            }
        ];
    }
    Profile1Component.prototype.ngOnInit = function () {
        this.sub = this.route.params.subscribe(function (params) {
            // this.id = + params['id']; // (+) converts string 'id' to a number
            console.log(params);
            // In a real app: dispatch action to load the details here.
        });
    };
    Profile1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-profile1',
            template: __webpack_require__("./src/app/views/profile/profile1/profile1.component.html"),
            styles: [__webpack_require__("./src/app/views/profile/profile1/profile1.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Profile1Component);
    return Profile1Component;
}());



/***/ }),

/***/ "./src/app/views/views.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_calendar__ = __webpack_require__("./node_modules/angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_layout_footer_footer_component__ = __webpack_require__("./src/app/main-layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__css_typography_typography_component__ = __webpack_require__("./src/app/views/css/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__css_icons_icons_component__ = __webpack_require__("./src/app/views/css/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("./src/app/views/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__css_grid_grid_component__ = __webpack_require__("./src/app/views/css/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__css_media_object_media_object_component__ = __webpack_require__("./src/app/views/css/media-object/media-object.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__css_utilities_utilities_component__ = __webpack_require__("./src/app/views/css/utilities/utilities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__css_images_images_component__ = __webpack_require__("./src/app/views/css/images/images.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__css_colors_colors_component__ = __webpack_require__("./src/app/views/css/colors/colors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__css_shadow_shadow_component__ = __webpack_require__("./src/app/views/css/shadow/shadow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__profile_profile1_profile1_component__ = __webpack_require__("./src/app/views/profile/profile1/profile1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__profile_profile_component__ = __webpack_require__("./src/app/views/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var ViewsModule = (function () {
    function ViewsModule() {
    }
    ViewsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                    // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
                    apiKey: ''
                }),
                __WEBPACK_IMPORTED_MODULE_8_angular_calendar__["a" /* CalendarModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__main_layout_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__css_typography_typography_component__["a" /* TypographyComponent */],
                __WEBPACK_IMPORTED_MODULE_12__css_icons_icons_component__["a" /* IconsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__css_grid_grid_component__["a" /* GridComponent */],
                __WEBPACK_IMPORTED_MODULE_15__css_media_object_media_object_component__["a" /* MediaObjectComponent */],
                __WEBPACK_IMPORTED_MODULE_16__css_utilities_utilities_component__["a" /* UtilitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__css_images_images_component__["a" /* ImagesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__css_colors_colors_component__["a" /* ColorsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__css_shadow_shadow_component__["a" /* ShadowComponent */],
                __WEBPACK_IMPORTED_MODULE_20__profile_profile1_profile1_component__["a" /* Profile1Component */],
                __WEBPACK_IMPORTED_MODULE_21__profile_profile_component__["a" /* ProfileComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__main_layout_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__css_typography_typography_component__["a" /* TypographyComponent */],
                __WEBPACK_IMPORTED_MODULE_12__css_icons_icons_component__["a" /* IconsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__css_grid_grid_component__["a" /* GridComponent */],
                __WEBPACK_IMPORTED_MODULE_15__css_media_object_media_object_component__["a" /* MediaObjectComponent */],
                __WEBPACK_IMPORTED_MODULE_16__css_utilities_utilities_component__["a" /* UtilitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__css_images_images_component__["a" /* ImagesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__css_colors_colors_component__["a" /* ColorsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__css_shadow_shadow_component__["a" /* ShadowComponent */],
                __WEBPACK_IMPORTED_MODULE_21__profile_profile_component__["a" /* ProfileComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], ViewsModule);
    return ViewsModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map