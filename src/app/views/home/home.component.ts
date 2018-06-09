import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from '../../util/web3.service';
import { MatSnackBar } from '@angular/material';
import sha256, { Hash, HMAC } from "fast-sha256";

declare let require: any;
declare const Buffer

const poll_artifacts = require('../../../../build/contracts/Poll.json');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@Component({
  selector: 'modal',
  templateUrl: './../../shared/components/modal/modal.component.html'
})

export class HomeComponent implements OnInit {

  @Input() type = '';
  @Input() side = '';
  @Input() size = '';

  candidates = [
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

  Poll: any;
  votesPerProposal: any;
  selectedCandidate: any;
  percentagePerProposal: any;
  firstCandidatePercentage: any;
  homeStyle: any;
  percentagePerProposalStyleOne: any;
  percentagePerProposalStyleTwo: any;
  percentagePerProposalStyleThree: any;
  percentagePerProposalStyleFour: any;
  descriptionTitle: any;
  descriptionText: any;

  constructor(private router: Router, private web3Service: Web3Service) {}

  ngOnInit(): void {
    this.candidates = this.candidates;

    this.web3Service.artifactsToContract(poll_artifacts)
      .then((PollAbstraction) => {
        this.Poll = PollAbstraction;
        this.getVotes();
        console.log(this.Poll);
      });
  }

  voteClick(id, img: any)
  {
    img.src = this.candidates[id-1].image;
    this.selectedCandidate = id;
  }

  async voteCandidate(name: any) {
    var account = this.web3Service.accounts[0];
    const deployedMetaCoin = await this.Poll.deployed();
    //deployedMetaCoin.defaults({from: this.web3Service.web3.eth.coinbase});

    let voterName = name.value;
    let voterHash = Buffer.from(voterName).toString('hex');

    var proposalsCount = await deployedMetaCoin.vote(voterHash, this.selectedCandidate - 1, {from: account});
  }

  
  async getVotes() {

    try {
      const deployedMetaCoin = await this.Poll.deployed();

      var numberOfVotePerProposal = await deployedMetaCoin.numberOfVotePerProposal();
      var proposals = await deployedMetaCoin.numberOfVotePerProposal();

      this.votesPerProposal = numberOfVotePerProposal;

      var totalVotes = 0;
      for(let i = 0; i < this.votesPerProposal.length; i++) {
        totalVotes += this.votesPerProposal[i]['c'][0];
      }

      var votePercentageOne = this.votesPerProposal[0]['c'][0] / totalVotes * 100;
      var votePercentageTwo = this.votesPerProposal[1]['c'][0] / totalVotes * 100;
      var votePercentageThree = this.votesPerProposal[2]['c'][0] / totalVotes * 100;
      var votePercentageFour = this.votesPerProposal[3]['c'][0] / totalVotes * 100;

      this.firstCandidatePercentage = 33;

      this.percentagePerProposal = [
        votePercentageOne.toFixed(2), 
        votePercentageTwo.toFixed(2), 
        votePercentageThree.toFixed(2), 
        votePercentageFour.toFixed(2)
      ];

      this.percentagePerProposalStyleOne = {'width': votePercentageOne + '%'};
      this.percentagePerProposalStyleTwo = {'width': votePercentageTwo + '%'};
      this.percentagePerProposalStyleThree = {'width': votePercentageThree + '%'};
      this.percentagePerProposalStyleFour = {'width': votePercentageFour + '%'};

    } catch (e) {
      console.log(e);
    }
    
  }

  async checkVoters() {
    var account = "0x1889e65dda92Fbe183F93F9D0232F4b6F09765B3";
    try {
      console.log(this.votesPerProposal);
    } catch (e) {
      console.log(e);
    }
  }

  async createContract() {
    var account = "0x1889e65dda92Fbe183F93F9D0232F4b6F09765B3";
    try {
      const deployedMetaCoin = await this.Poll.deployed();
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

      //Vote
      //.then(_ => {
        //let voterName = "Ozaine"
        //let voterHash = "0x" + shajs('sha256').update(voterName, 'utf8').digest('hex')
        //return vote.vote(voterHash, proposal)
      //})

      //get number of vote
      //.then(_ => {
        //return vote.numberOfVote
      //})
      //.then(numberOfVote => {
        //console.log(numberOfVote + " total votes");
      //})

      //.catch(error => {
        //console.log(error)
      //})
      
    } catch (e) {
      console.log(e);
    }
  }

}

