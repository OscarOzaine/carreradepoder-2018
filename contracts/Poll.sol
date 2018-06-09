pragma solidity ^0.4.4;

contract Poll {

    //*****************
    // Structure
    //*****************

    struct Voter {
        bool voted;  // if true, that person already voted
        uint proposalVoted;   // index of the voted proposal
        uint voterIndex;   // index of the voter array
    }

    // This is a type for a single proposal.
    struct Proposal {
        string name;   // proposal name
        bool truc;      //if only one variable, the struct is replace by the first argument type
    }


    //*****************
    // State variables
    //*****************

    string public question;
    mapping(bytes32 => Voter) public voters;
    bytes32[] public votersHash;
    Proposal[] public proposals;


    //*****************
    // Events
    //*****************

    event NewVote(
        bytes32 voter,
        string proposalName
    );


    //*****************
    // Constructor
    //*****************

    constructor(string _question) {
        question = _question;
    }


    //*****************
    // Getters
    //*****************

    function proposalsCount() public constant returns (uint) {
        return proposals.length;
    }

    function votersHashCount() public constant returns (uint) {
        return votersHash.length;
    }

    function numberOfVote() public constant returns (uint) {
        return votersHashCount();
    }

    function numberOfVoteForProposal(uint proposal) public constant returns (uint) {
        uint voteCount = 0;
        for (uint i = 0; i < votersHash.length; i++) {
            bytes32 voter = votersHash[i];
            Voter vote = voters[voter];
            if (vote.proposalVoted == proposal && vote.voted == true) {
                voteCount++;
            }
        }
        return voteCount;
    }

    function numberOfVotePerProposal() public constant returns (uint[]) {
        //init return structure
        uint[] memory votePerProposal = new uint[](proposals.length);
        for (uint i = 0; i < votePerProposal.length; i++) {
          votePerProposal[i] = 0;
        }

        //count
        for (i = 0; i < votersHash.length; i++) {
            bytes32 voter = votersHash[i];
            Voter vote = voters[voter];
            if (vote.voted == true) {
                votePerProposal[vote.proposalVoted]++;
            }
        }
        return votePerProposal;
    }


    //*****************
    // Actions
    //*****************

    function addProposal(string name) {
        proposals.push(Proposal({
            name: name,
            truc: true
        }));
    }

    function vote(bytes32 voter, uint proposal) public returns (bool) {
        Voter sender = voters[voter];

        //remove old vote
        if (sender.voted != true) {
          sender.voterIndex = votersHash.length;
          votersHash.push(voter);
        }

        //vote
        sender.proposalVoted = proposal;
        sender.voted = true;

        NewVote(voter, proposals[proposal].name);

        return true;
    }

}