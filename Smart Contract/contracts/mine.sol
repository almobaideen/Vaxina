pragma solidity ^0.4.17;

contract vaccinationRecord {

    address[] public vaccinationList;
    mapping(address=>mapping(address=>uint256)) vaccinationRecords;

    struct Vaccination{
        string date;
        string time;
        string vaccine;
        string description;
        string typeOfVaccine;
        string supplier;
        string status;
        address recordEaddress;
        uint creationDate;
        address userEadderss;
        address doctorEaddress;
    }
    

}



