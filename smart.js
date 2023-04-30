var web3;
var address="0x37f409FDC42bc155B1d2bdE8a756F52854cF8818";
var mohAddress = "0x1b565d29dC08203F98136F910c6A0f70929D1e46";

async function Connect(){
    await window.web3.currentProvider.enable();
    web3 = new Web3(window.web3.currentProvider);
}

if(typeof web3 !== 'undefine'){
    web3 = new Web3(window.web3.currentProvider);
}

else{
    web3 = new Web3(new Web3.Provider.HttpProvider("http://127.0.0.1:8545"));
}

var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "amt",
				"type": "int256"
			}
		],
		"name": "deposite_money",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amt",
				"type": "int256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];


var contract = new web3.eth.Contract(abi,address);



function userRegistration()


function deposite(){
    var inputval = document.getElementById("amount").value;

    web3.eth.getAccounts().then(function(account){
        return contract.methods.deposite_money(inputval).send({from: mohAddress});
    }).then(function(tmp){
        $("#amount").val("");
		show_balance();
    }).catch(function(tmp){
        alert(tmp);
    })
}

function withdraw(){
    var inputval = document.getElementById("amount").value;

    web3.eth.getAccounts().then(function(account){
        return contract.methods.withdraw(inputval).send({from: mohAddress});
    }).then(function(tmp){
        $("#amount").val("");
		show_balance();
    }).catch(function(tmp){
        alert(tmp);
    })

}

function show_balance(){
    contract.methods.getBalance().call().then(function(balance){
        $("#balance").html(balance);
    })
}