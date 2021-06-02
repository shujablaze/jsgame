var activePlayer,roundScore,totalScore,active;


document.querySelector('.bttn-reset').addEventListener('click',reset);


function reset()
	{
	activePlayer=0;
	totalScore=[0,0];
	roundScore=0;
	active=true;
		document.querySelector('.Current-score-0').textContent=0;
		document.querySelector('.Current-score-1').textContent=0;
		document.querySelector('.Player-total-0').textContent=0;
		document.querySelector('.Player-total-1').textContent=0;
		document.querySelector('.Player-head-0').textContent='Player 1'
		document.querySelector('.Player-head-1').textContent='Player 2'
		document.querySelector('.dice-image').style.display='block';


	}

reset();


function nextPlayer()
{
	roundScore=0;
	activePlayer===0 ? activePlayer=1:activePlayer=0;
	document.querySelector('.Current-score-0').textContent=0;
	document.querySelector('.Current-score-1').textContent=0;
	document.querySelector('.player-0-panel').classList.toggle('panel-border');
	document.querySelector('.player-1-panel').classList.toggle('panel-border');
}

document.querySelector('.bttn-roll').addEventListener('click',function()
{   if (active)
	{
		dice=Math.floor((Math.random()*6)+1);
		console.log(dice);
		document.querySelector('.dice-image').style.display='block';
		document.querySelector('.dice-image').src='dice-'+dice+'.png';

		if (dice!==1)
			{	
				roundScore+=dice;
				document.querySelector('.Current-score-'+activePlayer).textContent=roundScore;
			}
		else
			{	
				nextPlayer();


			}
	}
});


document.querySelector('.bttn-hold').addEventListener('click',function(){
	if (active)
	{	document.querySelector('.dice-image').style.display='none';
		totalScore[activePlayer]+=roundScore;
		document.querySelector('.Player-total-'+activePlayer).textContent=totalScore[activePlayer];
		
		if (totalScore[activePlayer]>=100){
			active=false;
			document.querySelector('.Player-head-'+activePlayer).textContent='Winner';
			document.querySelector('.dice-image').style.display='none';
		}
		else{
		nextPlayer()
		}
	}
});

