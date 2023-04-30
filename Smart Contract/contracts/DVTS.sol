pragma solidity ^0.7.6;


contract DVTS {
    
    struct User{
        string uaeId;
        string name;
        string phone;
        string gender;
        string dob;
        string addr;
        string sex;
        string email;
        string nomineeName;
        string nomineeContact;
        address eAddress;
        uint date;
        //Vaccination records; 

    }

    struct Doctor{
        string uaeId;
        string name;
        string phone;
        string gender;
        string dob;
        string addr;
        string sex;
        string email;
        string qualification;
        string major;
        address eAddress;
        uint date;

        //Orginazation org; 
    }


/*
    struct Vaccination{
        address userAddr;
        address doctorAddr;
        string date;
        string time;
        string vaccine;
        string description;
        string typeOfVaccine;
        string supplier;
        string status;
        address eAddress;
        uint creationDate;
    }
    */

    
    address public owner;
    address[] public userList;
    address[] public doctorList;
    //address[] public vaccinationList;

    mapping(address => User) user;
    mapping(address => Doctor) doctor;
    //mapping(address => Vaccination) vaccination;

    mapping(address=>mapping(address=>bool)) isApproved;
    mapping(address => bool) isUser;
    mapping(address => bool) isDoctor;
    //mapping(address => uint) VaccinationPerUser;



    uint256 public userCount = 0;
    uint256 public doctorCount = 0;
    //uint256 public vaccinationCount = 0;
    uint256 public permissionCounter = 0;
    address public mohAdress = "0xc50C6297f56b033633C30354A854b074749cd2dC";
    
    function DVTS() public {
        owner = msg.sender;
    }
    
    function userRegistration(string _uaeId, string _name, string _phone, string _gender, string _dob, string _addr, string _sex, string _email, string _nomineeName, string _nomineeContact) public {
        require(!isUser[msg.sender]);
        var u = user[msg.sender];
        
        u.uaeId = _uaeId;
        u.name = _name;
        u.phone = _phone;
        u.gender = _gender;
        u.dob = _dob;
        u.addr = _addr;
        u.sex = _sex;
        u.email = _email;
        u.nomineeName = _nomineeName;
        u.nomineeContact = _nomineeContact;
        u.eAddress = msg.sender;
        u.date = block.timestamp;
        
        userList.push(msg.sender);
        isUser[msg.sender] = true;
        isApproved[msg.sender][msg.sender] = true;
        userCount++;
    }
    

      function editUser(address _user, string _uaeId, string _name, string _phone, string _gender, string _dob, string _addr, string _sex, string _email, string _nomineeName, string _nomineeContact) public {
        require(msg.sender == mohAdress);
        var u = user[_user];
        
        u.uaeId = _uaeId;
        u.name = _name;
        u.phone = _phone;
        u.gender = _gender;
        u.dob = _dob;
        u.addr = _addr;
        u.sex = _sex;
        u.email = _email;
        u.nomineeName = _nomineeName;
        u.nomineeContact = _nomineeContact;
        u.eAddress = _doctor;   
    }

    //Retrieve patient details from doctor registration page and store the details into the blockchain
    function setDoctor(string _ic, string _name, string _phone, string _gender, string _dob, string _qualification, string _major) public {
        require(!isDoctor[msg.sender]);
        var d = doctors[msg.sender];
        
        d.uaeId = _uaeId;
        d.name = _name;
        d.phone = _phone;
        d.gender = _gender;
        d.dob = _dob;
        d.qualification = _qualification;
        d.major = _major;
        d.addr = msg.sender;
        d.date = block.timestamp;
        
        doctorList.push(msg.sender);
        isDoctor[msg.sender] = true;
        doctorCount++;
    }

    //Allows doctors to edit their existing profile
    function editDoctor(address _doctor, string _ic, string _name, string _phone, string _gender, string _dob, string _qualification, string _major) public {
        require(msg.sender == mohAdress);
        var d = doctor[_doctor];
        
        d.uaeId = _uaeId;
        d.name = _name;
        d.phone = _phone;
        d.gender = _gender;
        d.dob = _dob;
        d.qualification = _qualification;
        d.major = _major;
        d.addr = _doctor;
    }
/*
    //Retrieve Vaccination details from Vaccination page and store the details into the blockchain
    function setVaccination(address _addr, string _date, string _time, string _diagnosis, string _prescription, string _description, string _status) public {
        require(isDoctor[msg.sender]);
        var a = Vaccinations[_addr];
        
        a.doctoraddr = msg.sender;
        a.patientaddr = _addr;
        a.date = _date;
        a.time = _time;
        a.diagnosis = _diagnosis;
        a.prescription = _prescription; 
        a.description = _description;
        a.status = _status;
        a.creationDate = block.timestamp;

        VaccinationList.push(_addr);
        VaccinationCount++;
        VaccinationPerPatient[_addr]++;
    }
    


    //Retrieve Vaccination details from Vaccination page and store the details into the blockchain
    function updateVaccination(address _addr, string _date, string _time, string _diagnosis, string _prescription, string _description, string _status) public {
        require(isDoctor[msg.sender]);
        var a = Vaccinations[_addr];
        
        a.doctoraddr = msg.sender;
        a.patientaddr = _addr;
        a.date = _date;
        a.time = _time;
        a.diagnosis = _diagnosis;
        a.prescription = _prescription; 
        a.description = _description;
        a.status = _status;
    }
*/ 

    //Owner of the record must give permission to doctor only they are allowed to view records
    function givePermission(address _address) public returns(bool success) {
        isApproved[msg.sender][_address] = true;
        permissionGrantedCount++;
        return true;
    }

    //Owner of the record can take away the permission granted to doctors to view records
    function RevokePermission(address _address) public returns(bool success) {
        isApproved[msg.sender][_address] = false;
        return true;
    }

    //Retrieve a list of all patients address
    function getUsers() public view returns(address[]) {
        return userList;
    }

    //Retrieve a list of all doctors address
    function getDoctors() public view returns(address[]) {
        return doctorList;
    }

    /*//Retrieve a list of all Vaccinations address
    function getVaccinations() public view returns(address[]) {
        return VaccinationList;
    }*/
    
    //Search patient details by entering a patient address (Only record owner or doctor with permission will be allowed to access)
    function searchPatientinformation(address _address) public view returns(string, string, string, string, string, string, string, string, string, string) {
        require(isApproved[_address][msg.sender]);
        var u = user[_address];
        return (u.uaeId, u.name, u.phone, u.gender, u.dob, u.addr, u.sex, u.email, u.nomineeName, u.nomineeContact);
    }

    

    //Search doctor details by entering a doctor address (Only doctor will be allowed to access)
    function searchDoctor(address _address) public view returns(string, string, string, string, string, string, string) {
        require(isDoctor[_address]);
        var d = doctor[_address];
        
        return (d.uaeId, d.name, d.phone, d.gender = _gender, d.dob, d.qualification, d.major);
    }
    
    /*
    //Search Vaccination details by entering a patient address
    function searchVaccination(address _address) public view returns(address, string, string, string, string, string, string, string) {
        var a = Vaccinations[_address];
        var d = doctors[a.doctoraddr];

        return (a.doctoraddr, d.name, a.date, a.time, a.diagnosis, a.prescription, a.description, a.status);
    }
    */

    //Search patient record creation date by entering a patient address
    function searchRecordDate(address _address) public view returns(uint) {
        var p = patients[_address];
        
        return (p.date);
    }

    //Search doctor profile creation date by entering a patient address
    function searchDoctorDate(address _address) public view returns(uint) {
        var d = doctors[_address];
        
        return (d.date);
    }

    //Search Vaccination creation date by entering a patient address
    function searchVaccinationDate(address _address) public view returns(uint) {
        var a = Vaccinations[_address];
        
        return (a.creationDate);
    }

    //Retrieve patient count
    function getPatientCount() public view returns(uint256) {
        return patientCount;
    }

    //Retrieve doctor count
    function getDoctorCount() public view returns(uint256) {
        return doctorCount;
    }

    //Retrieve Vaccination count
    function getVaccinationCount() public view returns(uint256) {
        return VaccinationCount;
    }

    //Retrieve permission granted count
    function getPermissionGrantedCount() public view returns(uint256) {
        return permissionGrantedCount;
    }

    //Retrieve permission granted count
    function getVaccinationPerPatient(address _address) public view returns(uint256) {
        return VaccinationPerPatient[_address];
    }
}