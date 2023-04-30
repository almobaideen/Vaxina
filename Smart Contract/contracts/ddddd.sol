pragma solidity ^0.4.14;
pragma experimental ABIEncoderV2;
//import "./mine.sol";



contract ddddd {
    
    struct User{
        string uaeId;
        string name;
        string phone;
        string gender;
        string dob;
        string addr;
        string email;
        string nomineeName;
        string nomineeContact;
        address eAddress;
        uint date; 

    }

    struct Doctor{
        string uaeId;
        string name;
        string phone;
        string gender;
        string addr;
        string email;
        string qualification;
        string major;
        address eAddress;
        uint date;
    }


    struct Vaccination{
        //string date;
        string name;
        string vaccine;
        string description;
        string typeOfVaccine;
        //string supplier;
        //string status;
        //address recordEaddress;
        uint creationDate;
        address userEadderss;
        address doctorEaddress;
    }

    
    address public owner;
    address[] public userList;
    address[] public doctorList;
    address[] public vaccinationList;
    //string[] public userData;

    mapping(address => User) user;
    mapping(address => Doctor) doctor;
    mapping(address => Vaccination) vaccination;
    //mapping(vaccination => uint256) hihihih;

    mapping(address=>mapping(address=>bool)) isApproved;
    mapping(address=>mapping(address=>bool)) isApprovedByMoH;
    //mapping(address=>mapping(address=>uint256)) vaccinationRecords;
    mapping(address => bool) isUser;
    mapping(address => bool) isDoctor;
    mapping(address => bool) isVaccine;

//TEST

    uint256 public userCount = 0;
    uint256 public doctorCount = 0;
    uint256 public MoHPermissionCounter = 0;
    uint256 public userPermissionCounter = 0;
    uint256 public vaccinationRecordsCounter = 0;

    address public mohAdress = 0xc50C6297f56b033633C30354A854b074749cd2dC;
    
    function ownerAddress(address _admin) public view returns(bool) {
        address admin = _admin;
        if (admin == mohAdress){
            return true;
        }
        else {
            return false;
        }
    }
    
    function userRegistration(address _user, string _uaeId, string _name, string _phone, string _gender, string _dob, string _addr, string _email, string _nomineeName, string _nomineeContact) public {
        require(msg.sender == mohAdress);
        require(!isUser[_user]);
        var u = user[_user];
        
        u.uaeId = _uaeId;
        u.name = _name;
        u.phone = _phone;
        u.gender = _gender;
        u.dob = _dob;
        u.addr = _addr;
        u.email = _email;
        u.nomineeName = _nomineeName;
        u.nomineeContact = _nomineeContact;
        u.eAddress = _user;
        u.date = block.timestamp;
        
        userList.push(_user);
        isUser[_user] = true;
        isApproved[_user][_user] = true;
        isApproved[_user][mohAdress] = true;
        userCount++;

        //string[] userData;
        //userData.push(u.uaeId);
        //userData.push(u.name);
        //userData.push(u.phone);
        //userData.push(u.gender);
        //userData.push(u.dob);
        //userData.push(u.addr);
        //userData.push(u.email);

    }

    
    

      function editUser(address _user, string _uaeId, string _name, string _phone, string _gender, string _dob, string _addr, string _email, string _nomineeName, string _nomineeContact) public {
        require(msg.sender == mohAdress);
        require(isUser[_user]);
        var u = user[_user];
        
        u.uaeId = _uaeId;
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

    function doctorRegistration(address _doctor, string _uaeId, string _name, string _phone, string _gender, string _email, string _qualification, string _major) public {
        require(msg.sender == mohAdress);
        require(!isDoctor[_doctor]);
        var d = doctor[_doctor];
        
        d.uaeId = _uaeId;
        d.name = _name;
        d.phone = _phone;
        d.gender = _gender;
        d.email = _email;
        d.qualification = _qualification;
        d.major = _major;
        d.eAddress = _doctor;
        d.date = block.timestamp;
        
        doctorList.push(_doctor);
        isDoctor[_doctor] = true;
        isApproved[_doctor][_doctor] = true;
        isApproved[_doctor][mohAdress] = true;
        doctorCount++;
    }

    function editDoctor(address _doctor, string _uaeId, string _name, string _phone, string _gender, string _email, string _qualification, string _major) public {
        require(msg.sender == mohAdress);
        require(isDoctor[_doctor]);
        var d = doctor[_doctor];
        
        d.uaeId = _uaeId;
        d.name = _name;
        d.phone = _phone;
        d.gender = _gender;
        d.email = _email;
        d.qualification = _qualification;
        d.major = _major;
        d.eAddress = _doctor;
    }

    function createVaccineRecord(address _address1, address _doctor, string _name, string _vaccine, string _description, string _typeOfVaccine, uint _creationDate) public returns(bool success) {
        require(msg.sender == mohAdress || isApprovedByMoH[_address1][msg.sender]);
        
        require(!isVaccine[_address1]);
        var v = vaccination[_address1];

        v.name = _name;
        v.vaccine = _vaccine;
        v.description = _description;
        v.typeOfVaccine = _typeOfVaccine;
        //v.supplier = _supplier;
        //v.status = _status;
        //v.recordEaddress = _recordEaddress;
        v.creationDate = _creationDate;
        v.userEadderss = _address1;
        v.doctorEaddress = _doctor;

        vaccinationList.push(_address1);
        vaccinationRecordsCounter++;
    }

    function getVaccinationInfo(address _address) public view returns(string, string, string, string, uint256, address, address) {
        require(isApproved[_address][msg.sender]);
        var v = vaccination[_address];
        return (v.vaccine, v.name, v.description, v.typeOfVaccine, v.creationDate, v.userEadderss, v.doctorEaddress);
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
        MoHPermissionCounter++;
        return true;
    }

    function revokePermissionToVaccinate(address _address1, address _address2) public returns(bool success) {
        require(msg.sender == mohAdress);
        require(isDoctor[_address2]);
        isApprovedByMoH[_address1][_address2] = false;
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
        return userList;
    }


    function getDoctors() public view returns(address[]) {
        return doctorList;
    }

  
    function searchUserformation(address _address) public view returns(string, string, string, string, string, string, string, address) {
        require(isApproved[_address][msg.sender]);
        var u = user[_address];
        return (u.uaeId, u.name, u.email, u.phone, u.gender, u.dob, u.addr, u.eAddress);
        //u.sex, u.email, u.nomineeName, u.nomineeContact
    }

    /*
    function userInfo(address _address) public view returns(string[]) {
        require(isApproved[_address][msg.sender]);
        var u = user[_address];
        string[] udata = u.userData;
        return (udata);
        //u.sex, u.email, u.nomineeName, u.nomineeContact
    }
    */


    
    function searchDoctor(address _address) public view returns(string, string, string, string, string, string, string, address) {
        require(isApproved[_address][msg.sender]);
        require(isDoctor[_address]);
        var d = doctor[_address];
        
        return (d.uaeId, d.name, d.phone, d.gender, d.email, d.qualification, d.major, d.eAddress);
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
}