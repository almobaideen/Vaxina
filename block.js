var web3;
var smartAddress="0x74802524c2f62f8F69b433B8E629D6bCC3F4565C";
async function Connect(){
    await window.web3.currentProvider.enable();
    web3 = new Web3(window.web3.currentProvider);
	onInit();
}
///To verify if the browser is running MetaMask
if(typeof web3 !== 'undefined'){
    web3 = new Web3(window.web3.currentProvider);
}

else{
    web3 = new Web3(new Web3.Provider.HttpProvider("http://127.0.0.1:8545"));

}

function checkMeta(){
	if (typeof window.ethereum === 'undefined'){
		alert("Please install MetaMask to access your records");
	}

	else {
		ConnectTest();
	}
}

async function ConnectTest(){
    web3 = new Web3(window.web3.currentProvider);
	metac();
}
///To verify if the browser is running MetaMask
if(typeof web3 !== 'undefined'){
    web3 = new Web3(window.web3.currentProvider);
}

else{
    web3 = new Web3(new Web3.Provider.HttpProvider("http://127.0.0.1:8545"));

}

async function adminConnect(){
    await window.web3.currentProvider.enable();
    web3 = new Web3(window.web3.currentProvider);
	window.location.assign("AccountAdmin.html");
	alert("Login Successfully");
}
///To verify if the browser is running MetaMask
if(typeof web3 !== 'undefined'){
    web3 = new Web3(window.web3.currentProvider);
}

else{
    web3 = new Web3(new Web3.Provider.HttpProvider("http://127.0.0.1:8545"));
}

async function metac(){
	await window.ethereum.enable();
	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
	checkfa(accounts[0]);
	window.ethereum.on('accountsChanged', function (accounts) {
		// Time to reload your interface with accounts[0]!
	   });
	}




function checkfa(userAccount){
	var userAccount = userAccount;
	var userData = contract.methods.ownerAddress(userAccount).call({from: userAccount}).then(function(result){
		if (result == true){
			adminConnect();
		}
		else {
			Connect();
		}
		return result;
	});  	
}



function ress(){
	window.location.reload();
}
var abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "getUsers",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getUserPermissionCounter",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "searchUserformation",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "userCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "doctorList",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "appointments",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "date",
				"type": "string"
			},
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_doctor",
				"type": "address"
			},
			{
				"name": "_uaeId",
				"type": "string"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_phone",
				"type": "string"
			},
			{
				"name": "_gender",
				"type": "string"
			},
			{
				"name": "_email",
				"type": "string"
			},
			{
				"name": "_qualification",
				"type": "string"
			},
			{
				"name": "_major",
				"type": "string"
			}
		],
		"name": "editDoctor",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_doctor",
				"type": "address"
			},
			{
				"name": "_uaeId",
				"type": "string"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_phone",
				"type": "string"
			},
			{
				"name": "_gender",
				"type": "string"
			},
			{
				"name": "_email",
				"type": "string"
			},
			{
				"name": "_qualification",
				"type": "string"
			},
			{
				"name": "_major",
				"type": "string"
			}
		],
		"name": "doctorRegistration",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "checkUser",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_admin",
				"type": "address"
			}
		],
		"name": "ownerAddress",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "givePermissionByUser",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address1",
				"type": "address"
			},
			{
				"name": "_doctor",
				"type": "address"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_vaccine",
				"type": "string"
			},
			{
				"name": "_description",
				"type": "string"
			},
			{
				"name": "_typeOfVaccine",
				"type": "string"
			},
			{
				"name": "_creationDate",
				"type": "uint256"
			}
		],
		"name": "createVaccineRecord",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getUsersandDoctors",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			},
			{
				"name": "",
				"type": "address[]"
			},
			{
				"components": [
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "date",
						"type": "string"
					},
					{
						"name": "userAddress",
						"type": "address"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getUserAppointments",
		"outputs": [
			{
				"components": [
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "date",
						"type": "string"
					},
					{
						"name": "userAddress",
						"type": "address"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "userRevokePermission",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_user",
				"type": "address"
			},
			{
				"name": "_uaeId",
				"type": "string"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_phone",
				"type": "string"
			},
			{
				"name": "_gender",
				"type": "string"
			},
			{
				"name": "_dob",
				"type": "string"
			},
			{
				"name": "_addr",
				"type": "string"
			},
			{
				"name": "_email",
				"type": "string"
			},
			{
				"name": "_nomineeName",
				"type": "string"
			},
			{
				"name": "_nomineeContact",
				"type": "string"
			}
		],
		"name": "userRegistration",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_user",
				"type": "address"
			},
			{
				"name": "_uaeId",
				"type": "string"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_phone",
				"type": "string"
			},
			{
				"name": "_gender",
				"type": "string"
			},
			{
				"name": "_dob",
				"type": "string"
			},
			{
				"name": "_addr",
				"type": "string"
			},
			{
				"name": "_email",
				"type": "string"
			},
			{
				"name": "_nomineeName",
				"type": "string"
			},
			{
				"name": "_nomineeContact",
				"type": "string"
			}
		],
		"name": "editUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "doctorCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getDoctorCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "checkDoctor",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAppointments",
		"outputs": [
			{
				"components": [
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "date",
						"type": "string"
					},
					{
						"name": "userAddress",
						"type": "address"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "vaccinationRecordsCounter",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "MoHPermissionCounter",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userList",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getDoctors",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getUserCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "mohAdress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address1",
				"type": "address"
			},
			{
				"name": "_address2",
				"type": "address"
			}
		],
		"name": "MoHRevokePermission",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "userPermissionCounter",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "searchDoctor",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address1",
				"type": "address"
			},
			{
				"name": "_address2",
				"type": "address"
			}
		],
		"name": "givePermissionByMoH",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address1",
				"type": "address"
			},
			{
				"name": "_address2",
				"type": "address"
			}
		],
		"name": "givePermissionToVaccinate",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMoHPermissionCounter",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_vaccineName",
				"type": "string"
			},
			{
				"name": "_date",
				"type": "string"
			},
			{
				"name": "_userAddress",
				"type": "address"
			}
		],
		"name": "createvaccinationAppointment",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "MoHVaccinationPermissionCounter",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address1",
				"type": "address"
			},
			{
				"name": "_address2",
				"type": "address"
			}
		],
		"name": "revokePermissionToVaccinate",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			},
			{
				"name": "_vaccineNameInput",
				"type": "string"
			}
		],
		"name": "getVaccinationInfo",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];


var contract = new web3.eth.Contract(abi,smartAddress);


function userRegistration(){
	web3.eth.getAccounts().then(function(account){
        return contract.methods.ownerAddress(account[0]).call({from: account[0]});
    }).then(function(tmp){
        if (tmp == true){
			userRegistrationn();
		}
		else {
			alert("You are not Authorized!!");
			window.location.assign("index.html")
		}
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })

}


function userRegistrationn(){
    var uaeIdAdmin = document.getElementById("uaeIdAdmin").value;
	var nameadmin = document.getElementById("nameadmin").value;
	var eAddressAdmin = document.getElementById("eAddressAdmin").value;
	var emailAdmin = document.getElementById("emailAdmin").value;
	var phoneAdmin = document.getElementById("phoneAdmin").value;
	var genderAdmin = document.getElementById("genderAdmin").value;
	var dobAdmin = document.getElementById("dobAdmin").value;
	var addrAdmin = document.getElementById("addrAdmin").value;
	var nomineeNameAdmin = document.getElementById("nomineeNameAdmin").value;
	var nomineeContactAdmin = document.getElementById("nomineeContactAdmin").value;

	web3.eth.getAccounts().then(function(account){
        return contract.methods.userRegistration(eAddressAdmin, uaeIdAdmin, nameadmin, phoneAdmin, genderAdmin, dobAdmin, addrAdmin, emailAdmin, nomineeNameAdmin, nomineeContactAdmin).send({from: account[0]});
    }).then(function(tmp){
        $("#uaeIdAdmin").val("");
		$("#nameadmin").val("");
		$("#eAddressAdmin").val("");
		$("#emailAdmin").val("");
		$("#phoneAdmin").val("");
		$("#genderAdmin").val("");
		$("#dobAdmin").val("");
		$("#addrAdmin").val("");
		$("#nomineeNameAdmin").val("");
		$("#nomineeContactAdmin").val("");
		alert("Successful Registration");
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })
}

function doctorRegistration(){
	web3.eth.getAccounts().then(function(account){
        return contract.methods.ownerAddress(account[0]).call({from: account[0]});
    }).then(function(tmp){
        if (tmp == true){
			doctorRegistrationn();
		}
		else {
			alert("You are not Authorized!!");
			window.location.assign("index.html")
		}
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })

}


function doctorRegistrationn(){
    var uaeIddR = document.getElementById("uaeIddR").value;
	var namedR = document.getElementById("namedR").value;
	var emaildR = document.getElementById("emaildR").value;
	var genderdR = document.getElementById("genderdR").value;
	var phonedR = document.getElementById("phonedR").value;
	var qualificationdR = document.getElementById("qualificationdR").value;
	var majordR = document.getElementById("majordR").value;
	var eAddressdR = document.getElementById("eAddressdR").value;


	web3.eth.getAccounts().then(function(account){
        return contract.methods.doctorRegistration(eAddressdR, uaeIddR, namedR, phonedR, genderdR, emaildR, qualificationdR, majordR).send({from: account[0]});
    }).then(function(tmp){
        $("#uaeIddR").val("");
		$("#namedR").val("");
		$("#emaildR").val("");
		$("#genderdR").val("");
		$("#phonedR").val("");
		$("#qualificationdR").val("");
		$("#majordR").val("");
		$("#eAddressdR").val("");
		alert("Successful Registration");
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })
}

function doctorEditing(){
	web3.eth.getAccounts().then(function(account){
        return contract.methods.ownerAddress(account[0]).call({from: account[0]});
    }).then(function(tmp){
        if (tmp == true){
			doctorEditingg();
		}
		else {
			alert("You are not Authorized!!");
			window.location.assign("index.html")
		}
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })

}

function doctorEditingg(){
    var uaeIdd = document.getElementById("uaeIdd").value;
	var named = document.getElementById("named").value;
	var emaild = document.getElementById("emaild").value;
	var genderd = document.getElementById("genderd").value;
	var phoned = document.getElementById("phoned").value;
	var qualificationd = document.getElementById("qualificationd").value;
	var majord = document.getElementById("majord").value;
	var eAddressd = document.getElementById("eAddressd").value;


	web3.eth.getAccounts().then(function(account){
        return contract.methods.editDoctor(eAddressd, uaeIdd, named, phoned, genderd, emaild, qualificationd, majord).send({from: account[0]});
    }).then(function(tmp){
        $("#uaeIdd").val("");
		$("#named").val("");
		$("#emaild").val("");
		$("#genderd").val("");
		$("#phoned").val("");
		$("#qualificationd").val("");
		$("#majord").val("");
		$("#eAddressd").val("");
		alert("Successful Registration");
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })
}

function userEditing(){
	web3.eth.getAccounts().then(function(account){
        return contract.methods.ownerAddress(account[0]).call({from: account[0]});
    }).then(function(tmp){
        if (tmp == true){
			userEditingg();
		}
		else {
			alert("You are not Authorized!!");
			window.location.assign("index.html")
		}
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })

}

function userEditingg(){
    var uaeIdAdminE = document.getElementById("uaeIdAdminE").value;
	var nameadminE = document.getElementById("nameadminE").value;
	var eAddressAdminE = document.getElementById("eAddressAdminE").value;
	var emailAdminE = document.getElementById("emailAdminE").value;
	var phoneAdminE = document.getElementById("phoneAdminE").value;
	var genderAdminE = document.getElementById("genderAdminE").value;
	var dobAdminE = document.getElementById("dobAdminE").value;
	var addrAdminE = document.getElementById("addrAdminE").value;
	var nomineeNameAdminE = document.getElementById("nomineeNameAdminE").value;
	var nomineeContactAdminE = document.getElementById("nomineeContactAdminE").value;

	web3.eth.getAccounts().then(function(account){
        return contract.methods.editUser(eAddressAdminE, uaeIdAdminE, nameadminE, phoneAdminE, genderAdminE, dobAdminE, addrAdminE, emailAdminE, nomineeNameAdminE, nomineeContactAdminE).send({from: account[0]});
    }).then(function(tmp){
        $("#uaeIdAdminE").val(""); 
		$("#nameadminE").val("");
		$("#eAddressAdminE").val("");
		$("#emailAdminE").val("");
		$("#phoneAdminE").val("");
		$("#genderAdminE").val("");
		$("#dobAdminE").val("");
		$("#addrAdminE").val("");
		$("#nomineeNameAdminE").val("");
		$("#nomineeContactAdminE").val("");
		alert("Successful Modification");
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })
}



function createVaccine(){
    var namevr = document.getElementById("namevr").value;
	var vaccine = document.getElementById("vaccine").value;
	var typeOfVaccine = document.getElementById("typeOfVaccine").value;
	var vdescription = document.getElementById("vdescription").value;
	var creationDate = document.getElementById("creationDate").value;
	var userEadderss = document.getElementById("userEadderss").value;
	var doctorEaddress = document.getElementById("doctorEaddress").value;


	web3.eth.getAccounts().then(function(account){
        return contract.methods.createVaccineRecord(userEadderss, doctorEaddress, namevr, vaccine, vdescription, typeOfVaccine, creationDate).send({from: account[0]});
    }).then(function(tmp){
		$("#namevr").val("");
        $("#vaccine").val(""); 
		$("#typeOfVaccine").val("");
		$("#vdescription").val("");
		$("#creationDate").val("");
		$("#userEadderss").val("");
		$("#doctorEaddress").val("");;
		alert("Successful Vaccination Creation");
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })
}

function createVaccineap(){
	web3.eth.getAccounts().then(function(account){
        return contract.methods.ownerAddress(account[0]).call({from: account[0]});
    }).then(function(tmp){
        if (tmp == true){
			createVaccineapp();
		}
		else {
			alert("You are not Authorized!!");
			window.location.assign("index.html")
		}
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })

}

function createVaccineapp(){
    var namevrap = document.getElementById("namevrap").value;
	var vaccineap = document.getElementById("vaccineap").value;
	var typeOfVaccineap = document.getElementById("typeOfVaccineap").value;
	var vdescriptionap = document.getElementById("vdescriptionap").value;
	var creationDateap = document.getElementById("creationDateap").value;
	var userEadderssap = document.getElementById("userEadderssap").value;
	var doctorEaddressap = document.getElementById("doctorEaddressap").value;


	web3.eth.getAccounts().then(function(account){
        return contract.methods.createVaccineRecord(userEadderssap, doctorEaddressap, namevrap, vaccineap, vdescriptionap, typeOfVaccineap, creationDateap).send({from: account[0]});
    }).then(function(tmp){							
		$("#namevrap").val("");
        $("#vaccineap").val(""); 
		$("#typeOfVaccineap").val("");
		$("#vdescriptionap").val("");
		$("#creationDateap").val("");
		$("#userEadderssap").val("");
		$("#doctorEaddressap").val("");;
		alert("Successful Vaccination Creation");
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })
}


function vaccineRecord(){
	web3.eth.getAccounts().then(function(account){
        return contract.methods.checkUser(account[0]).call({from: account[0]});
    }).then(function(tmp){
        if (tmp == true){
			vaccineRecordd();
		}
		else {
			alert("You are not Authorized!!");
			window.location.assign("index.html")
		}
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })
}

async function vaccineRecordd() {
	await window.ethereum.enable();
	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
	user_name(accounts[0]);
	window.ethereum.on('accountsChanged', function (accounts) {
		// Time to reload your interface with accounts[0]!
	   });
}



function user_name(userAccount){
	var userAccount = userAccount;
	var uservaccinename = document.getElementById("uservaccinename").value;
	var nameRecord = document.getElementById("nameRecord");
	var vaccineR = document.getElementById("vaccineR");
	var typeOfVaccineR = document.getElementById("typeOfVaccineR");
	var creationDateR = document.getElementById("creationDateR");
	var vdescriptionR = document.getElementById("vdescriptionR");
	var userEadderssR = document.getElementById("userEadderssR");
	var doctorEaddressR = document.getElementById("doctorEaddressR");
	var finallist = new Array();
	var userData = contract.methods.getVaccinationInfo(userAccount,uservaccinename).call({from: userAccount}).then(function(result){
		finallist[0] = result[0];
		finallist[1] = result[1];
		finallist[2] = result[2];
		finallist[3] = result[3];
		finallist[4] = result[4];
		finallist[5] = result[5];
		finallist[6] = result[6];
	
		nameRecord.textContent = result[1];
		vaccineR.textContent = result[0];
		vdescriptionR.textContent = result[2];
		typeOfVaccineR.textContent = result[3];
		creationDateR.textContent = result[4];
		userEadderssR.textContent = result[5];
		doctorEaddressR.textContent = result[6];
		return finallist;
	}).catch(function(result){
        alert("You Don't have any Vaccination Records!!");
    })	

}

function adRecords(){
	web3.eth.getAccounts().then(function(account){
        return contract.methods.ownerAddress(account[0]).call({from: account[0]});
    }).then(function(tmp){
        if (tmp == true){
			vaccineRecordForDoctor();
		}
		else {
			alert("You are not Authorized!!");
			window.location.assign("index.html")
		}
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })
	
}

function vaccineRecordForDoctorrr(){
		var drecordsSubmit = document.getElementById("drecordsSubmit").value;
		web3.eth.getAccounts().then(function(account){
			return contract.methods.checkUser(drecordsSubmit).call({from: account[0]});
		}).then(function(tmp){
			if (tmp == true){
				vaccineRecordForDoctor();
			}
			else {
				alert("The address is not registered");
			}
		}).catch(function(tmp){
			alert("Please enter a valid  address!!");
		})
}

function vaccineRecordForDoctorr(){
	var drecordsSubmit = document.getElementById("drecordsSubmit").value;
	if (drecordsSubmit == null || drecordsSubmit == "") {
		alert("Please Enter the User Address!!");
	}

	else{
		web3.eth.getAccounts().then(function(account){
			return contract.methods.checkDoctor(account[0]).call({from: account[0]});
		}).then(function(tmp){
			if (tmp == true){
				vaccineRecordForDoctorrr();
			}
			else {
				alert("You are not Authorized!!");
				window.location.assign("index.html")
			}
		}).catch(function(tmp){
			alert("Please enter a valid  address!!");
		})
 
	}	
}

async function vaccineRecordForDoctor() {
	await window.ethereum.enable();
	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
	doctorvur(accounts[0]);
	window.ethereum.on('accountsChanged', function (accounts) {
		// Time to reload your interface with accounts[0]!
	   });
}

function doctorvur(userAccount){
	
	var userAccount = userAccount;
	var doctorvaccinename = document.getElementById("doctorvaccinename").value;
	var drecordsSubmit = document.getElementById("drecordsSubmit").value;


	var nameRecordu = document.getElementById("nameRecordu");
	var vaccineRu = document.getElementById("vaccineRu");
	var typeOfVaccineRu = document.getElementById("typeOfVaccineRu");
	var creationDateRu = document.getElementById("creationDateRu");
	var vdescriptionRu = document.getElementById("vdescriptionRu");
	var userEadderssRu = document.getElementById("userEadderssRu");
	var doctorEaddressRu = document.getElementById("doctorEaddressRu");
	var userData = contract.methods.getVaccinationInfo(drecordsSubmit,doctorvaccinename).call({from: userAccount}).then(function(result){

		nameRecordu.textContent = result[1];
		vaccineRu.textContent = result[0];
		vdescriptionRu.textContent = result[2];
		typeOfVaccineRu.textContent = result[3];
		creationDateRu.textContent = result[4];
		userEadderssRu.textContent = result[5];
		doctorEaddressRu.textContent = result[6];
		return result;
	}).catch(function(result){
		alert("You are not Authorized!!!!");
	})	
}

function vaccineRecordForUser(){
	var urecordsSubmit = document.getElementById("urecordsSubmit").value;

	if (urecordsSubmit == null || urecordsSubmit == "") {
		alert("Please enter the user Address!!");
	}

	else{
		web3.eth.getAccounts().then(function(account){
			return contract.methods.checkUser(account[0]).call({from: account[0]});
		}).then(function(tmp){
			if (tmp == true){
				vaccineRecordForUserr();
			}
			else {
				alert("You are not Authorized!!");
				window.location.assign("index.html")
			}
		}).catch(function(tmp){
			alert("You are not Authorized!!");
		})
	}

}

function vaccineRecordForUserr(){
	var urecordsSubmit = document.getElementById("urecordsSubmit").value;
		web3.eth.getAccounts().then(function(account){
			return contract.methods.checkUser(urecordsSubmit).call({from: account[0]});
		}).then(function(tmp){
			if (tmp == true){
				vaccineRecordForUserrr();
			}
			else {
				alert("The address is not registered");
			}
		}).catch(function(tmp){
			alert("Please enter a valid  address!!");
		})
}



async function vaccineRecordForUserrr() {
	await window.ethereum.enable();
	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
	uservur(accounts[0]);
	window.ethereum.on('accountsChanged', function (accounts) {
		// Time to reload your interface with accounts[0]!
	   });
}

function uservur(userAccount){
	var userAccount = userAccount;
	var uservaccinename2 = document.getElementById("uservaccinename2").value;
	var urecordsSubmit = document.getElementById("urecordsSubmit").value;
	var unameRecordu = document.getElementById("unameRecordu");
	var uvaccineRu = document.getElementById("uvaccineRu");
	var utypeOfVaccineRu = document.getElementById("utypeOfVaccineRu");
	var ucreationDateRu = document.getElementById("ucreationDateRu");
	var uvdescriptionRu = document.getElementById("uvdescriptionRu");
	var uuserEadderssRu = document.getElementById("uuserEadderssRu");
	var udoctorEaddressRu = document.getElementById("udoctorEaddressRu");
	var userData = contract.methods.getVaccinationInfo(urecordsSubmit,uservaccinename2).call({from: userAccount}).then(function(result){
		unameRecordu.textContent = result[1];
		uvaccineRu.textContent = result[0];
		uvdescriptionRu.textContent = result[2];
		utypeOfVaccineRu.textContent = result[3];
		ucreationDateRu.textContent = result[4];
		uuserEadderssRu.textContent = result[5];
		udoctorEaddressRu.textContent = result[6];
		return result;
	});  	
}

async function showmdd() {
	await window.ethereum.enable();
	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
	checkDoctorAP(accounts[0]);
	window.ethereum.on('accountsChanged', function (accounts) {
		// Time to reload your interface with accounts[0]!
	   });
}

async function onInit() {
	await window.ethereum.enable();
	const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
	checkDoctor(accounts[0]);
	window.ethereum.on('accountsChanged', function (accounts) {
		// Time to reload your interface with accounts[0]!
	   });
}

function checkDoctor(userAccount){
	var userAccount = userAccount;
	var userData = contract.methods.checkDoctor(userAccount).call({from: userAccount}).then(function(result){
		if (result == true){
			window.location.assign("AccountDoctor.html");
			
		}
		else {
			checkUser(userAccount);
		}
		return result;
	});  	
}

function checkUser(userAccount){
	var userAccount = userAccount;
	var userData = contract.methods.checkUser(userAccount).call({from: userAccount}).then(function(result){
		if (result == true){
			window.location.assign("Account.html");
		}
		else {
			alert("You Don't have any registered account!!");
		}
		return result;
	});  	
}

function checkDoctorAP(userAccount){
	var userAccount = userAccount;
	var userData = contract.methods.checkDoctor(userAccount).call({from: userAccount}).then(function(result){
		if (result == true){

			doctor_info(userAccount);
		}
		else {

			checkUserAP(userAccount);

		}
		return result;
	});  	
}

function checkUserAP(userAccount){
	var userAccount = userAccount;
	var userData = contract.methods.checkUser(userAccount).call({from: userAccount}).then(function(result){
		if (result == true){
			user_info(userAccount);
		}
		else {
			alert("You Don't have any registered account!!");
			window.location.assign("index.html");
		}
	});  		
}





function searchUAdmin(){
	var userAddressInput = document.getElementById("searchUAdmin").value;

	web3.eth.getAccounts().then(function(account){
        return contract.methods.ownerAddress(account[0]).call({from: account[0]});
    }).then(function(tmp){
        if (tmp == true){
			user_info(userAddressInput);
		}
		else {
			alert("You are not Authorized!!");
			window.location.assign("index.html")
		}
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })
	
}

function searchDAdmin(){
	var doctorAddressInput = document.getElementById("searchDAdmin").value;

	web3.eth.getAccounts().then(function(account){
        return contract.methods.ownerAddress(account[0]).call({from: account[0]});
    }).then(function(tmp){
        if (tmp == true){
			doctor_info(doctorAddressInput);
		}
		else {
			alert("You are not Authorized!!");
			window.location.assign("index.html")
		}
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })
	
}

function doctor_info(userAccount){

	var userAccount = userAccount;
	var uaeIdAccountdd = document.getElementById("uaeIdAccountdd");
	var nameAccountdd = document.getElementById("nameAccountdd");
	var emailAccountdd = document.getElementById("emailAccountdd");
	var phoneAccountdd = document.getElementById("phoneAccountdd");
	var genderAccountdd = document.getElementById("genderAccountdd");
	var eAddressdd = document.getElementById("eAddressdd");
	var qualificationdd = document.getElementById("qualificationdd");
	var majordd = document.getElementById("majordd");
	doctorScriptGenerate(userAccount);
	var finallist = new Array();
	var userData = contract.methods.searchDoctor(userAccount).call({from: userAccount}).then(function(result){
		
		finallist[0] = result[0];
		finallist[1] = result[1];
		finallist[2] = result[2];
		finallist[3] = result[3];
		finallist[4] = result[4];
		finallist[5] = result[5];
		finallist[6] = result[6];
		finallist[7] = result[7];

		uaeIdAccountdd.textContent = result[0];
		nameAccountdd.textContent = result[1];
		phoneAccountdd.textContent = result[2]
		genderAccountdd.textContent = result[3];
		emailAccountdd.textContent = result[4];
		qualificationdd.textContent = result[5];
		majordd.textContent = result[6];
		eAddressdd.textContent = result[7];
		return finallist;
	});  	
}

function user_info(userAccount){
	var userAccount = userAccount;
	var uaeidsc = document.getElementById("uaeIdAccount");
	var namesc = document.getElementById("nameAccount");
	var emailAccount = document.getElementById("emailAccount");
	var phonesc = document.getElementById("phoneAccount");
	var gendersc = document.getElementById("genderAccount");
	var dobsc = document.getElementById("dobAccount");
	var addresssc = document.getElementById("addressAccount");
	var eAddresssc = document.getElementById("eAddressAccount");
	scriptGenerate(userAccount);
	//var nameRecordddd = document.getElementById("nameRecordddd");
	var finallist = new Array();
	var userData = contract.methods.searchUserformation(userAccount).call({from: userAccount}).then(function(result){
		finallist[0] = result[0];
		finallist[1] = result[1];
		finallist[2] = result[2];
		finallist[3] = result[3];
		finallist[4] = result[4];
		finallist[5] = result[5];
		finallist[6] = result[6];
		finallist[7] = result[7];

		uaeidsc.textContent = result[0];
		namesc.textContent = result[1];
		emailAccount.textContent = result[2]
		phonesc.textContent = result[3];
		gendersc.textContent = result[4];
		dobsc.textContent = result[5];
		addresssc.textContent = result[6];
		eAddresssc.textContent = result[7];
		//nameRecordddd.textContent = result[1];
		return finallist;
	});  	
}

function scriptGenerate(userAccount){
	var testtt = new QRCode(document.getElementById("qrcode"), userAccount);
}
function doctorScriptGenerate(userAccount){
	var testttDoctor = new QRCode(document.getElementById("qrcode2"), userAccount);
}

function givingPermission(){
	web3.eth.getAccounts().then(function(account){
        return contract.methods.ownerAddress(account[0]).call({from: account[0]});
    }).then(function(tmp){
        if (tmp == true){
			givingPermissionn();
		}
		else {
			alert("You are not Authorized!!");
			window.location.assign("index.html")
		}
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })
	
}

function givingPermissionn(){
    var userAddressP = document.getElementById("userAddressP").value;
	var doctorAddressP = document.getElementById("doctorAddressP").value;

	web3.eth.getAccounts().then(function(account){
        return contract.methods.givePermissionByMoH(userAddressP, doctorAddressP).send({from: account[0]});
    }).then(function(tmp){
        $("#userAddressP").val("");
		$("#doctorAddressP").val("");
		alert("Permission Granted");
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })
}

function givingPermissiontd(){
	web3.eth.getAccounts().then(function(account){
        return contract.methods.ownerAddress(account[0]).call({from: account[0]});
    }).then(function(tmp){
        if (tmp == true){
			givingPermissiontdd();
		}
		else {
			alert("You are not Authorized!!");
			window.location.assign("index.html")
		}
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })
	
}

function givingPermissiontdd(){
    var userAddressPD = document.getElementById("userAddressPD").value;
	var doctorAddressPD = document.getElementById("doctorAddressPD").value;

	web3.eth.getAccounts().then(function(account){
        return contract.methods.givePermissionToVaccinate(userAddressPD, doctorAddressPD).send({from: account[0]});
    }).then(function(tmp){
        $("#userAddressPD").val("");
		$("#doctorAddressPD").val("");
		alert("Permission Granted");
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })
}


function revokingPermission(){
	web3.eth.getAccounts().then(function(account){
        return contract.methods.ownerAddress(account[0]).call({from: account[0]});
    }).then(function(tmp){
        if (tmp == true){
			revokingPermissionn();
		}
		else {
			alert("You are not Authorized!!");
			window.location.assign("index.html")
		}
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })
	
}

function revokingPermissionn(){
    var userAddressP = document.getElementById("userAddressP").value;
	var doctorAddressP = document.getElementById("doctorAddressP").value;

	web3.eth.getAccounts().then(function(account){
        return contract.methods.MoHRevokePermission(userAddressP, doctorAddressP).send({from: account[0]});
    }).then(function(tmp){
        $("#userAddressP").val("");
		$("#doctorAddressP").val("");
		alert("Permission Revoked");
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })
}

function revokingPermissiontd(){
	web3.eth.getAccounts().then(function(account){
        return contract.methods.ownerAddress(account[0]).call({from: account[0]});
    }).then(function(tmp){
        if (tmp == true){
			revokingPermissiontdd();
		}
		else {
			alert("You are not Authorized!!");
			window.location.assign("index.html")
		}
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })
	
}

function revokingPermissiontdd(){
    var userAddressPD = document.getElementById("userAddressPD").value;
	var doctorAddressPD = document.getElementById("doctorAddressPD").value;
	web3.eth.getAccounts().then(function(account){
        return contract.methods.revokePermissionToVaccinate(userAddressPD, doctorAddressPD).send({from: account[0]});
    }).then(function(tmp){
        $("#userAddressPD").val("");
		$("#doctorAddressPD").val("");
		alert("Permission Granted");
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })
}

function givingPermissionByUser(){
	var doctorAddressPU = document.getElementById("doctorAddressPU").value;
	if (doctorAddressPU == null || doctorAddressPU == ""){
		alert("Please Enter the User Address!!");
	}
	
	else{
	web3.eth.getAccounts().then(function(account){
        return contract.methods.checkUser(account[0]).call({from: account[0]});
    }).then(function(tmp){
        if (tmp == true){
			givingPermissionByUserr();
		}
		else {
			alert("You are not Authorized!!");
			window.location.assign("index.html");
			
		}
    }).catch(function(tmp){
        alert("You are not Authorized!!");
		window.location.assign("index.html");
		
    })
	}
}


function givingPermissionByUserr(){
	var doctorAddressPU = document.getElementById("doctorAddressPU").value;

	web3.eth.getAccounts().then(function(account){
        return contract.methods.givePermissionByUser(doctorAddressPU).send({from: account[0]});
    }).then(function(tmp){
		$("#doctorAddressPU").val("");
		alert("Permission Granted");
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })
}


function revokingPermissionByUser(){
	var doctorAddressPU = document.getElementById("doctorAddressPU").value;

	if (doctorAddressPU == null || doctorAddressPU == ""){
		alert("Please Enter the User Address!!");
	}
	else{
	web3.eth.getAccounts().then(function(account){
        return contract.methods.checkUser(account[0]).call({from: account[0]});
    }).then(function(tmp){
        if (tmp == true){
			revokingPermissionByUserr();
		}
		else {
			alert("You are not Authorized!!");
			window.location.assign("index.html")
		}
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })
	}
}

function revokingPermissionByUserr(){
	var doctorAddressPU = document.getElementById("doctorAddressPU").value;

	web3.eth.getAccounts().then(function(account){
        return contract.methods.userRevokePermission(doctorAddressPU).send({from: account[0]});
    }).then(function(tmp){
		$("#doctorAddressPU").val("");
		alert("Permission Revoked");
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })
}


function viewUserDoctor(){
	web3.eth.getAccounts().then(function(account){
        return contract.methods.ownerAddress(account[0]).call({from: account[0]});
    }).then(function(tmp){
        if (tmp == true){
			viewUserDoctorr();
		}
		else {
			alert("You are not Authorized!!");
			window.location.assign("index.html")
		}
    }).catch(function(tmp){
        alert("You are not Authorized!!");
    })

}

function viewUserDoctorr(){
	let userslist = document.getElementById("userslist");
	let doctorslist = document.getElementById("doctorslist");
	let Appointmentlist = document.getElementById("Appointmentlist");
	let Appointmentlist2 = document.getElementById("Appointmentlist2");

	contract.methods.getUsersandDoctors().call().then(function(result){
		let userlist = result[0];
		let doctorlist = result[1];
		let Appointments = result[2],
		ul = document.createElement('ul');	

		if ((userlist.length != 0) && (doctorlist.length != 0)){
			userlist.forEach((item)=>{
				$(userslist).append($("<li>").html(item));
			  });
			  doctorlist.forEach((item)=>{
				$(doctorslist).append($("<li>").html(item));
			  });
		}

		else if ((userlist.length != 0) && (doctorlist.length == 0)){
			userlist.forEach((item)=>{
				$(userslist).append($("<li>").html(item));
			  });
			$(doctorslist).append($("<li>").html("No Accounts Found"));
		}

		else if ((userlist.length == 0) && (doctorlist.length != 0)){
			$(userslist).append($("<li>").html("No Accounts Found"));
			doctorlist.forEach((item)=>{
				$(doctorslist).append($("<li>").html(item));
			  });
		}

		else{
			let li = document.createElement("li");
			li.innerText = "No Accounts Found";
			userslist.appendChild(li);
			doctorslist.appendChild(li);
		}


		if ((Appointments.length != 0)){

			document.getElementById('Appointmentlist').appendChild(ul);

			Appointments.forEach(item => {
				let li = document.createElement('li');
				ul.appendChild(li);
			
				li.innerHTML += item;
			});
		}

		else{
			let li = document.createElement("li");
			li.innerText = "No Appointmens Found";
			Appointmentlist.appendChild(li);
		}


		return result;
	});


	

	}

	function createAppointment(){
		var vaccineNameApp = document.getElementById("vaccineNameApp").value;
		var vaccineDateA = document.getElementById("vaccineDateA").value;

		web3.eth.getAccounts().then(function(account){
			return contract.methods.createvaccinationAppointment(vaccineNameApp, vaccineDateA ,account[0]).send({from: account[0]});
		}).then(function(tmp){
			$("#vaccineNameApp").val("");
			$("#vaccineDateA").val("");
			alert("Your Appointment is created successfully");
		}).catch(function(tmp){
			alert("You are not Authorized!!");
		})
			
	}

