/*
   \      /   /\    \  /  | |\   |    /\
    \    /   /__\    \/   | | \  |   /__\
     \  /   /    \   /\   | |  \ |  /    \
      \/   /      \ /  \  | |   \| /      \

By Wesam Almobaideen & Mohammad Alyafie
*/

pragma solidity ^0.8.14;
pragma experimental ABIEncoderV2;



contract Vaxina {
    
    struct User{
        string id;
        string name;
        string phone;
        string gender;
        string dob;
        string addr;
        string email;
        string nomineeName;
        string nomineeContact;
        address eAddress;
    }

    struct Doctor{
        string id;
        string name;
        string phone;
        string gender;
        string addr;
        string email;
        string role;
        string department;
        address eAddress;
    }


    struct Vaccination{
        string name;
        string vaccine;
        string description;
        string typeOfVaccine;
        uint creationDate;
        address userEadderss;
        address doctorEaddress;
    }

    struct vaccinationAppointment{
        string name;
        string date;
        address userAddress; 
    }

    
    address public owner;
    address[] public userList;
    address[] public doctorList;
    vaccinationAppointment[] public appointments;


    mapping(address => User) user;
    mapping(address => Doctor) doctor;
    mapping(address => Vaccination[]) vaccinations;
    mapping(address => vaccinationAppointment[]) vaccinationAppointments;
    mapping(address=>mapping(address=>bool)) isApproved;
    mapping(address=>mapping(address=>bool)) isApprovedByMoH;
    mapping(address => bool) isUser;
    mapping(address => bool) isDoctor;
    mapping(address => bool) isVaccine;



    uint256 public userCount = 0;
    uint256 public doctorCount = 0;
    uint256 public MoHPermissionCounter = 0;
    uint256 public MoHVaccinationPermissionCounter = 0;
    uint256 public userPermissionCounter = 0;
    uint256 public vaccinationRecordsCounter = 0;

    address public mohAdress = 0xCEF072C86122cf4Ac8b587c3B2E643D50cC856aF;
    

    function ownerAddress(address _admin) public view returns(bool) {
        address admin = _admin;
        if (admin == mohAdress){
            return true;
        }
        else {
            return false;
        }
    }

    
    function userRegistration(address _user, string _id, string _name, string _phone, string _gender, string _dob, string _addr, string _email, string _nomineeName, string _nomineeContact) public {
        require(msg.sender == mohAdress);
        require(!isUser[_user]);
        var u = user[_user];
        
        u.id = _id;
        u.name = _name;
        u.phone = _phone;
        u.gender = _gender;
        u.dob = _dob;
        u.addr = _addr;
        u.email = _email;
        u.nomineeName = _nomineeName;
        u.nomineeContact = _nomineeContact;
        u.eAddress = _user;
        
        
        userList.push(_user);
        isUser[_user] = true;
        isApproved[_user][_user] = true;
        isApproved[_user][mohAdress] = true;
        userCount++;

    }

    
    

      function editUser(address _user, string _id, string _name, string _phone, string _gender, string _dob, string _addr, string _email, string _nomineeName, string _nomineeContact) public {
        require(msg.sender == mohAdress);
        require(isUser[_user]);
        var u = user[_user];
        
        u.id = _id;
        u.name = _name;
        u.phone = _phone;
        u.gender = _gender;
        u.dob = _dob;
        u.addr = _addr;
        u.email = _email;
        u.nomineeName = _nomineeName;
        u.nomineeContact = _nomineeContact;
        u.eAddress = _user;  
    }

    function doctorRegistration(address _doctor, string _id, string _name, string _phone, string _gender, string _email, string _role, string _department) public {
        require(msg.sender == mohAdress);
        require(!isDoctor[_doctor]);
        var d = doctor[_doctor];
        
        d.id = _id;
        d.name = _name;
        d.phone = _phone;
        d.gender = _gender;
        d.email = _email;
        d.role = _role;
        d.department = _department;
        d.eAddress = _doctor;
        
        
        doctorList.push(_doctor);
        isDoctor[_doctor] = true;
        isApproved[_doctor][_doctor] = true;
        isApproved[_doctor][mohAdress] = true;
        doctorCount++;
    }

    function editDoctor(address _doctor, string _id, string _name, string _phone, string _gender, string _email, string _role, string _department) public {
        require(msg.sender == mohAdress);
        require(isDoctor[_doctor]);
        var d = doctor[_doctor];
        
        d.id = _id;
        d.name = _name;
        d.phone = _phone;
        d.gender = _gender;
        d.email = _email;
        d.role = _role;
        d.department = _department;
        d.eAddress = _doctor;
    }

    function createVaccineRecord(address _address1, address _doctor, string _name, string _vaccine, string _description, string _typeOfVaccine, uint _creationDate) public {
        require((msg.sender == mohAdress) || (isApprovedByMoH[_address1][msg.sender]));
        
        vaccinations[_address1].push(Vaccination({
            name: _name,
            vaccine: _vaccine,
            description: _description,
            typeOfVaccine: _typeOfVaccine,
            creationDate: _creationDate,
            userEadderss: _address1,
            doctorEaddress: _doctor
        }));

        vaccinationRecordsCounter++;
    }

    function createvaccinationAppointment(string _vaccineName, string _date, address _userAddress) public {
        require(isUser[_userAddress]);
        vaccinationAppointments[_userAddress].push(vaccinationAppointment({
            name: _vaccineName,
            date: _date,
            userAddress: _userAddress
        }));

        appointments.push(vaccinationAppointment({
            name: _vaccineName,
            date: _date,
            userAddress: _userAddress
        }));


    }

    function getAppointments() public view returns (vaccinationAppointment[]){
        require(msg.sender == mohAdress);
        return (appointments);
    }

    function getUserAppointments(address _address) public view returns (vaccinationAppointment[]){
        require(msg.sender == mohAdress);
        return (vaccinationAppointments[_address]);

    }

    function getVaccinationInfo(address _address, string _vaccineNameInput) public view returns(string, string, string, string, uint256, address, address) {
        require(isApproved[_address][msg.sender]);
        var k = vaccinations[_address];
        var v = k[k.length - 1];
        for (uint i = 0; i < k.length; i++) {
            var svaccine = k[i];
            var vaccineName = svaccine.vaccine;
            if (keccak256(abi.encodePacked(vaccineName)) == keccak256(abi.encodePacked(_vaccineNameInput))) {
                return (svaccine.vaccine, svaccine.name, svaccine.description, svaccine.typeOfVaccine, svaccine.creationDate, svaccine.userEadderss, svaccine.doctorEaddress);
            }
            else {
                return (v.vaccine, v.name, v.description, v.typeOfVaccine, v.creationDate, v.userEadderss, v.doctorEaddress);
            }
        }
    }


    function givePermissionByUser(address _address) public returns(bool success) {
        isApproved[msg.sender][_address] = true;
        userPermissionCounter++;
        return true;
    }

    function givePermissionByMoH(address _address1, address _address2) public returns(bool success) {
        require(msg.sender == mohAdress);
        isApproved[_address1][_address2] = true;
        MoHPermissionCounter++;
        return true;
    }

    function givePermissionToVaccinate(address _address1, address _address2) public returns(bool success) {
        require(msg.sender == mohAdress);
        require(isDoctor[_address2]);
        isApprovedByMoH[_address1][_address2] = true;
        MoHVaccinationPermissionCounter++;
        return true;
    }

    function revokePermissionToVaccinate(address _address1, address _address2) public returns(bool success) {
        require(msg.sender == mohAdress);
        require(isDoctor[_address2]);
        isApprovedByMoH[_address1][_address2] = false;
        MoHVaccinationPermissionCounter--;
        return false;
    }

    function userRevokePermission(address _address) public returns(bool success) {
        isApproved[msg.sender][_address] = false;
        return true;
    }

    function MoHRevokePermission(address _address1, address _address2) public returns(bool success) {
        require(msg.sender == mohAdress);
        isApproved[_address1][_address2] = false;
        return true;
    }


    function getUsers() public view returns(address[]) {
        require(msg.sender == mohAdress);
        return userList;
    }


    function getDoctors() public view returns(address[]) {
        require(msg.sender == mohAdress);
        return doctorList;
    }

    function getUsersandDoctors() public view returns(address[], address[], vaccinationAppointment[]) {
        require(msg.sender == mohAdress);
        return (userList, doctorList, appointments);
    }
  
    function searchUserformation(address _address) public view returns(string, string, string, string, string, string, string, address) {
        require(isApproved[_address][msg.sender]);
        var u = user[_address];
        return (u.id, u.name, u.email, u.phone, u.gender, u.dob, u.addr, u.eAddress);
    }


    function searchDoctor(address _address) public view returns(string, string, string, string, string, string, string, address) {
        require(isApproved[_address][msg.sender]);
        require(isDoctor[_address]);
        var d = doctor[_address];
        
        return (d.id, d.name, d.phone, d.gender, d.addr, d.email, d.role, d.department, d.eAddress);
    }
    


    function getUserCount() public view returns(uint256) {
        return userCount;
    }

    function getDoctorCount() public view returns(uint256) {
        return doctorCount;
    }

    
    function getUserPermissionCounter() public view returns(uint256) {
        return userPermissionCounter;
    }

    function getMoHPermissionCounter() public view returns(uint256) {
        return MoHPermissionCounter;
    }

    function checkDoctor(address _address) public view returns(bool success) {
        for (uint i = 0; i < doctorList.length; i++) {
            if (isDoctor[_address] == true) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    function checkUser(address _address) public view returns(bool success) {
        for (uint i = 0; i < userList.length; i++) {
            if (isUser[_address] == true) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}