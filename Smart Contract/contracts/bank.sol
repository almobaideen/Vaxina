pragma solidity ^0.4.24;

contract bank{
    int bal=0;

    function deposite_money(int amt) public{
        bal+=amt;
        
    }

    function withdraw(int amt) public{
        bal-=amt;
    }

    function getBalance() public view returns(int) {
        return bal;
    }
}