/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GemGiveaway, GemGiveawayInterface } from "../GemGiveaway";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_collection",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "firstWeeklyGiveawayStart",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "chooseRandomPairs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "claimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "collection",
    outputs: [
      {
        internalType: "contract IERC721Burnable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pairs",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "winners",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610f9a380380610f9a83398101604081905261002f916100d8565b600080546001600160a01b031916339081178255604051909182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35060018055600280546001600160a01b0319166001600160a01b03841617905560005b61014a8110156100ce5780600482815481106100b0576100b0610112565b600091825260209091200155806100c681610128565b915050610092565b5060055550610151565b600080604083850312156100eb57600080fd5b82516001600160a01b038116811461010257600080fd5b6020939093015192949293505050565b634e487b7160e01b600052603260045260246000fd5b600060001982141561014a57634e487b7160e01b600052601160045260246000fd5b5060010190565b610e3a806101606000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063b91ac78811610066578063b91ac78814610109578063d03cfab31461012a578063dbe7e3bd14610132578063f2fde38b14610155578063f3fef3a31461016857600080fd5b80634e71d92d146100a3578063715018a6146100ad5780637de1e536146100b55780638da5cb5b146100e5578063a2fb1175146100f6575b600080fd5b6100ab61017b565b005b6100ab6104ed565b6002546100c8906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6000546001600160a01b03166100c8565b6100c8610104366004610bfa565b610561565b61011c610117366004610bfa565b610581565b6040519081526020016100dc565b6100ab6105a2565b610145610140366004610bfa565b61067a565b60405190151581526020016100dc565b6100ab610163366004610c2b565b6106a4565b6100ab610176366004610c4f565b61078e565b600260015414156101d35760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260015560005b60288110156102525733600782602881106101f8576101f8610c7b565b01546001600160a01b03161480156102365750602f816028811061021e5761021e610c7b565b602081049091015460ff601f9092166101000a900416155b1561024057610252565b8061024a81610ca7565b9150506101db565b602881106102a25760405162461bcd60e51b815260206004820152601860248201527f4e6f742077696e6e657220666f722074686973207765656b000000000000000060448201526064016101ca565b60006102af601483610cd8565b60066102bc601485610cec565b815481106102cc576102cc610c7b565b906000526020600020015460146102e39190610d00565b6102ed9190610d1f565b6002546040516331a9108f60e11b81526004810183905291925033916001600160a01b0390911690636352211e9060240160206040518083038186803b15801561033657600080fd5b505afa15801561034a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036e9190610d37565b6001600160a01b0316146103b65760405162461bcd60e51b815260206004820152600f60248201526e4f776e65727368697020697373756560881b60448201526064016101ca565b6001602f83602881106103cb576103cb610c7b565b602081049091018054921515601f9092166101000a91820260ff90920219909216179055600254604051630852cd8d60e31b81526001600160a01b03909116906342966c689061042390849060040190815260200190565b600060405180830381600087803b15801561043d57600080fd5b505af1158015610451573d6000803e3d6000fd5b5050600354604051600093503392508381818185875af1925050503d8060008114610498576040519150601f19603f3d011682016040523d82523d6000602084013e61049d565b606091505b50509050806104e45760405162461bcd60e51b815260206004820152601360248201527208cc2d2d8cac840e8de40e6cadcc84082ac82b606b1b60448201526064016101ca565b50506001805550565b6000546001600160a01b031633146105175760405162461bcd60e51b81526004016101ca90610d54565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6007816028811061057157600080fd5b01546001600160a01b0316905081565b6006818154811061059157600080fd5b600091825260209091200154905081565b6000546001600160a01b031633146105cc5760405162461bcd60e51b81526004016101ca90610d54565b426005541080156105e05750600454600211155b61062c5760405162461bcd60e51b815260206004820152601f60248201527f5765656b6c79206769766561776179206e6f742073746172746564207965740060448201526064016101ca565b62093a80600560008282546106419190610d1f565b909155506028905061065b6729a2241af62c000047610d89565b6106659190610cec565b600355610670610856565b610678610856565b565b602f816028811061068a57600080fd5b60209182820401919006915054906101000a900460ff1681565b6000546001600160a01b031633146106ce5760405162461bcd60e51b81526004016101ca90610d54565b6001600160a01b0381166107335760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016101ca565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146107b85760405162461bcd60e51b81526004016101ca90610d54565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610805576040519150601f19603f3d011682016040523d82523d6000602084013e61080a565b606091505b50509050806108515760405162461bcd60e51b815260206004820152601360248201527208cc2d2d8cac840e8de40e6cadcc84082ac82b606b1b60448201526064016101ca565b505050565b60048054600354604051600093610874924492429290602001610da0565b6040516020818303038152906040528051906020012060001c6108979190610cd8565b90506000600482815481106108ae576108ae610c7b565b90600052602060002001549050600460016004805490506108cf9190610d89565b815481106108df576108df610c7b565b9060005260206000200154600483815481106108fd576108fd610c7b565b600091825260209091200155600480548061091a5761091a610dee565b600082815260208120820160001990810182905590910190915560068054600181018255918190527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f9091018290555461097690600290610cd8565b610bf65760005b601481101561085157600254600680546001600160a01b0390921691636352211e9184916109ad90600190610d89565b815481106109bd576109bd610c7b565b906000526020600020015460146109d49190610d00565b6109de9190610d1f565b6040518263ffffffff1660e01b81526004016109fc91815260200190565b60206040518083038186803b158015610a1457600080fd5b505afa158015610a28573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4c9190610d37565b60078260288110610a5f57610a5f610c7b565b0180546001600160a01b0319166001600160a01b0392831617905560028054600680549190931692636352211e928592610a999190610d89565b81548110610aa957610aa9610c7b565b90600052602060002001546014610ac09190610d00565b610aca9190610d1f565b6040518263ffffffff1660e01b8152600401610ae891815260200190565b60206040518083038186803b158015610b0057600080fd5b505afa158015610b14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b389190610d37565b6007610b45836014610d1f565b60288110610b5557610b55610c7b565b0180546001600160a01b0319166001600160a01b03929092169190911790556000602f610b83836014610d1f565b60288110610b9357610b93610c7b565b602091828204019190066101000a81548160ff0219169083151502179055602f8260288110610bc457610bc4610c7b565b602091828204019190066101000a81548160ff0219169083151502179055508080610bee90610ca7565b91505061097d565b5050565b600060208284031215610c0c57600080fd5b5035919050565b6001600160a01b0381168114610c2857600080fd5b50565b600060208284031215610c3d57600080fd5b8135610c4881610c13565b9392505050565b60008060408385031215610c6257600080fd5b8235610c6d81610c13565b946020939093013593505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415610cbb57610cbb610c91565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082610ce757610ce7610cc2565b500690565b600082610cfb57610cfb610cc2565b500490565b6000816000190483118215151615610d1a57610d1a610c91565b500290565b60008219821115610d3257610d32610c91565b500190565b600060208284031215610d4957600080fd5b8151610c4881610c13565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082821015610d9b57610d9b610c91565b500390565b848152600060208581840152846040840152606083018454856000528260002060005b82811015610ddf57815484529284019260019182019101610dc3565b50919998505050505050505050565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220fa4982999ae3d92c7bbc033e53009642bf9d2d8130f1a98bb84c12e886fa71d964736f6c63430008090033";

export class GemGiveaway__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _collection: string,
    firstWeeklyGiveawayStart: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GemGiveaway> {
    return super.deploy(
      _collection,
      firstWeeklyGiveawayStart,
      overrides || {}
    ) as Promise<GemGiveaway>;
  }
  getDeployTransaction(
    _collection: string,
    firstWeeklyGiveawayStart: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _collection,
      firstWeeklyGiveawayStart,
      overrides || {}
    );
  }
  attach(address: string): GemGiveaway {
    return super.attach(address) as GemGiveaway;
  }
  connect(signer: Signer): GemGiveaway__factory {
    return super.connect(signer) as GemGiveaway__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GemGiveawayInterface {
    return new utils.Interface(_abi) as GemGiveawayInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GemGiveaway {
    return new Contract(address, _abi, signerOrProvider) as GemGiveaway;
  }
}
