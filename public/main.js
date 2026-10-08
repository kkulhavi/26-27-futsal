   
let bpList = document.getElementById('bp-space');
const lnkIndex=document.querySelector('#lnkIndex')
const lnkBestPlayers=document.querySelector('#lnkBestPlayers')
const lnkAbout=document.querySelector('#lnkAbout')

const containerPage = document.querySelector('.container');
const bestPlayersPage = document.querySelector('.best-players');
const aboutPage = document.querySelector('.about');

/*
lnkBestPlayers.addEventListener('click',()=>{
    containerPage.classList.add('dn')
    bestPlayersPage.classList.remove('dn')
    //aboutPage.classList.add('dn')
})
lnkIndex.addEventListener('click',()=>{
    containerPage.classList.remove('dn')
    bestPlayersPage.classList.add('dn')
    //aboutPage.classList.add('dn')
})

lnkAbout.addEventListener('click',()=>{
    containerPage.classList.add('dn')
    bestPlayersPage.classList.add('dn')
    aboutPage.classList.remove('dn')
})
*/



// {id:2, round: 1, fTeam:'3.P',sTeam:'1.PT',fTeamScore:4, sTeamScore:1, goals:[{name: 'Jozo', surname:'Pejčin', goal:2, cl:'3.P'}, {name: 'Antonio', surname:'AAA', goal:1, cl:'2.P'}, {name: 'Kevin', surname:'KKK', goal:1, cl:'3.P'}, {name: 'Ivan', surname: 'Salaj', goal:1, cl:'1.PT'}]},
const firstRound=[
    //-{id:1, round: 1, fTeam:'2.S',sTeam:'3.EL',fTeamScore:0, sTeamScore:2, goals:[{name: 'Stjepan', surname: 'Bina', goal:2, cl:'3.EL'}]},
    {id:2, round: 1, fTeam:'2.MT',sTeam:'1.S',fTeamScore:0, sTeamScore:0, goals:[]},
    {id:3, round: 1, fTeam:'3.S',sTeam:'1.EL',fTeamScore:4, sTeamScore:0, goals:[{name: 'Marko', surname: 'Vuk ', goal:1, cl:'3.S'}, {name: 'Dejan', surname: 'Borojević', goal:1, cl:'3.S'}, {name: 'Robert', surname: 'Batković', goal:1, cl:'3.S'}, {name: 'Antonio', surname: 'Josipović', goal:1, cl:'3.S'}]},
    {id:4, round: 1, fTeam:'1.P',sTeam:'2.SP',fTeamScore:6, sTeamScore:4, goals:[{name: 'Ivan', surname: 'Ivić', goal:1, cl:'1.P'}, {name: 'Leon', surname: 'Mihajlović', goal:1, cl:'2.SP'}]},
    {id:5, round: 1, fTeam:'2.EL',sTeam:'1.SP',fTeamScore:10, sTeamScore:1, goals:[{name: 'David', surname: 'Bliznac', goal:6, cl:'2.EL'}, {name: 'Gabrijel', surname: 'Kolić', goal:2, cl:'2.EL'}, {name: 'Saša', surname:'Kabljanac', goal:2, cl:'2.EL'}, {name: 'Gabrijel',surname:'GGG', goal:1, cl:'1.SP'}]},
    {id:6, round: 1, fTeam:'2.PT',sTeam:'4.PT',fTeamScore:0, sTeamScore:1, goals:[{name: 'Vjekoslav', surname:'Pavičić', goal:1, cl:'4.PT'}]},
    {id:7, round: 1, fTeam:'3.RT',sTeam:'2.MT',fTeamScore:2, sTeamScore:0, goals:[{name: 'David', surname: 'Dubravac', goal:1, cl:'3.RT'}, {name: 'Toni', surname: 'Čimiris', goal:1, cl:'3.RT'}]},
    //-{id:8, round: 1, fTeam:'1.RT',sTeam:'2.P',fTeamScore:2, sTeamScore:0, goals:[{name: 'Franjo', surname: 'Đorđević', goal:1, cl:'1.RT'}, {name: 'Antonio', surname: 'Bičak', goal:1, cl:'1.RT'}]},
    //-{id:9, round: 1, fTeam:'3.PT',sTeam:'2.S',fTeamScore:1, sTeamScore:0, goals:[{name: 'Valentino', surname: 'Tolić', goal:1, cl:'3.PT'}]},
    {id:10, round: 1, fTeam:'3.MT',sTeam:'K/M',fTeamScore:1, sTeamScore:0, goals:[{name: 'Dragan', surname: 'DDD', goal:1, cl:'3.MT'}]},
    {id:11, round: 1, fTeam:'1.MT',sTeam:'2.RT',fTeamScore:0, sTeamScore:2, goals:[{name: 'David', surname: 'Krmela', goal:1, cl:'2.RT'}]},
    {id:12, round: 1, fTeam:'1.MT',sTeam:'2.RT',fTeamScore:0, sTeamScore:2, goals:[{name: 'David', surname: 'Krmela', goal:1, cl:'2.RT'}]},
    //-{id:13, round: 1, fTeam:'1.MT',sTeam:'2.RT',fTeamScore:0, sTeamScore:2, goals:[{name: 'David', surname: 'Krmela', goal:1, cl:'2.RT'}]},
    {id:14, round: 1, fTeam:'3.SP',sTeam:'1.RT',fTeamScore:1, sTeamScore:4, goals:[{name: 'Borna', surname: 'Žabić', goal:1, cl:'1.RT'}]},
    {id:15, round: 1, fTeam:'1.MT',sTeam:'2.RT',fTeamScore:0, sTeamScore:2, goals:[{name: 'David', surname: 'Krmela', goal:1, cl:'2.RT'}]},
    //-{id:16, round: 1, fTeam:'1.MT',sTeam:'2.RT',fTeamScore:0, sTeamScore:2, goals:[{name: 'David', surname: 'Krmela', goal:1, cl:'2.RT'}]}
    
  ]
const secondRound=[

    /*17-24 */
    {id:17, round: 2, fTeam:'3.SP',sTeam:'3.EL',fTeamScore:1, sTeamScore:0, goals:[{name: 'Sebastijan', surname: 'Baschiera', goal:1, cl:'3.SP'}]},
    {id:18, round: 2, fTeam:'3.MT',sTeam:'3.PT',fTeamScore:2, sTeamScore:2, goals:[{name: 'Stjepan', surname: 'Sekulić', goal:1, cl:'3.MT'},{name: 'Gabrijel', surname: 'Kajzogaj', goal:1, cl:'3.MT'},{name: 'Petar', surname: 'Križan', goal:1, cl:'3.PT'},{name: 'Dorijan', surname: 'Špoljarić', goal:1, cl:'3.PT'}]},
    {id:19, round: 2, fTeam:'4.RT',sTeam:'4.PT',fTeamScore:1, sTeamScore:0, goals:[{name: 'Valentino', surname: 'Mihalinac', goal:1, cl:'4.RT'}]},
    {id:20, round: 2, fTeam:'4.MT',sTeam:'3.S',fTeamScore:3, sTeamScore:2, goals:[{name: 'Gabrijel', surname: 'Sudetić', goal:1, cl:'4.MT'}, {name: 'Marko', surname: 'Vuk ', goal:1, cl:'3.S'}]},
    {id:21, round: 2, fTeam:'PROF',sTeam:'3.P',fTeamScore:1, sTeamScore:0, goals:[{name: 'Danko', surname: 'Tomašek', goal:1, cl:'Prof'}]},
    {id:22, round: 2, fTeam:'1.P',sTeam:'2.RT',fTeamScore:3, sTeamScore:1, goals:[{name: 'Renato', surname: 'Lefelman', goal:1, cl:'1.P'}, {name: 'Lukas', surname: 'Brdal', goal:1, cl:'2.RT'}]},
    {id:23, round: 2, fTeam:'4.EL',sTeam:'3.RT',fTeamScore:5, sTeamScore:3, goals:[{name: 'Teo', surname: 'Duvnjak', goal:3, cl:'4.EL'}, {name: 'David', surname: 'Dubravac', goal:2, cl:'3.RT'}, {name: 'Toni', surname: 'Čimiris', goal:1, cl:'3.RT'}]},
    {id:24, round: 2, fTeam:'2.EL',sTeam:'1.RT',fTeamScore:3, sTeamScore:2 , goals:[]},
        //quarter finals-round 3
        /*25-28 */
    {id:25, round: 3, fTeam:'3.SP',sTeam:'3.MT',fTeamScore:0, sTeamScore:0, goals:[{name: 'Stjepan', surname: 'Sekulić', goal:1, cl:'3.MT'}]},
    {id:26, round: 3, fTeam:'4.RT',sTeam:'4.MT',fTeamScore:1, sTeamScore:0, goals:[{name: 'Valentino', surname: 'Mihalinac', goal:1, cl:'4.RT'}]},
    {id:27, round: 3, fTeam:'PROF',sTeam:'1.P',fTeamScore:0, sTeamScore:0, goals:[{name: 'Danko', surname: 'Tomašek', goal:1, cl:'Prof'}, {name: 'Branko', surname: 'Blažević', goal:1, cl:'Prof'}, {name: 'Dražen', surname: 'Hušek', goal:2, cl:'Prof'}, {name: 'Tomislav', surname: 'Brletić', goal:3, cl:'Prof'}, {name: 'Karlo', surname: 'Lovrić', goal:1, cl:'1.P'}]},
    {id:28, round: 3, fTeam:'4.EL',sTeam:'2.EL',fTeamScore:0, sTeamScore:0, goals:[{name: 'Teo', surname: 'Duvnjak', goal:1, cl:'4.EL'}, {name: 'David', surname: 'Bliznac', goal:2, cl:'2.EL'}]},
     //semi finals
        /*29-30 */
    {id:29, round: 4, fTeam:'3:MT',sTeam:'4.RT',fTeamScore:0, sTeamScore:1, goals:[{name: 'Luka', surname: 'Vuk', goal:1, cl:'4.RT'}]},
    {id:30, round: 4, fTeam:'PROF',sTeam:'2.EL',fTeamScore:5, sTeamScore:0, goals:[{name: 'Danko', surname: 'Tomašek', goal:2, cl:'Prof'}, {name: 'Branko', surname: 'Blažević', goal:1, cl:'Prof'}, {name: 'Dražen', surname: 'Hušek', goal:1, cl:'Prof'}, {name: 'Tomislav', surname: 'Brletić', goal:1, cl:'Prof'}]},
     //finals
        /*31 */
    {id:31, round: 5, fTeam:'4.RT',sTeam:'PROF',fTeamScore:5, sTeamScore:0, goals:[{name: 'Danko', surname: 'Tomašek', goal:1, cl:'Prof'}, {name: 'Tomislav', surname: 'Brletić', goal:1, cl:'Prof'}]},

]


const semiFinals=[
    /*29,30 */
   
]
const finals=[
    {id:31, round: 5, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
]


const bestPlayers=[
    
    //...firstRound[0].goals,
    //...firstRound[1].goals, 
    //...firstRound[2].goals, 
    //...firstRound[3].goals,
    //...firstRound[4].goals,
    //...firstRound[5].goals, 
    //...firstRound[6].goals, 
    //...firstRound[7].goals,
    //...firstRound[8].goals,
    ...firstRound[9].goals, 
    //...firstRound[10].goals, 
    //...firstRound[11].goals, 
    //...firstRound[12].goals, 
    //...firstRound[13].goals, 
    //...firstRound[13].goals,
    //...firstRound[15].goals, 
    
    //...secondRound[0].goals,
    //...secondRound[1].goals,
    //...secondRound[2].goals,
    //...secondRound[3].goals,  
    //...secondRound[4].goals,
    //...secondRound[5].goals,
    //...secondRound[6].goals,
    //...secondRound[7].goals  
]


//const bestPlayersReduce=bestPlayers.reduce((total, player)=>total+player.goal,[])


  
  var result = [];
  bestPlayers.reduce(function(res, value) {
    if (!res[value.surname]) {
      res[value.surname] = { name: value.name, surname: value.surname, goal: 0, cl:value.cl };
      result.push(res[value.surname])
    }
    res[value.surname].goal += value.goal;
    return res;
  }, {});
  
//console.log(result)

//console.log(bestPlayers)

const resultDsc=result.sort((a,b)=>b.goal-a.goal)
/*
resultDsc.forEach((player,i) => {
    bpList.innerHTML+=`<tr>
        <td>${i+1}</td>
        <td>${player.surname}</td>
        <td>${player.name}</td>
        <td> ${player.goal}</td>
        <td> ${player.cl}</td>
        </tr>`
})
*/

//when page is loaded
getScorers(1)

function getDetails(id){

    let alertTextPenalties=''
    let alertText=secondRound[id].goals.map(p=>'\n'+p.name+' '+p.surname+' '+p.cl+' ⚽: '+p.goal)
    if(id==1){
        //alertTextPenalties='\n\npenali\nGabrijel Kajzogaj 3.mt ⚽🦶: 1,\nStjepan Sekulić 3.mt ⚽🦶: 1'
        //alert(alertText+alertTextPenalties)
        return 0
        }
    else if(id==3){
        //alertTextPenalties='\n\npenali\nMarko Vuk 3.s ⚽🦶: 1,\nSven Valentić 4.mt ⚽🦶: 1,\nGabrijel Sudetić 4.mt ⚽🦶: 1'
        //alert(alertText+alertTextPenalties)
        return 0
    }
    else if(id==6){
        //alertTextPenalties='\n\npenali\nMatija Hartman 4.el ⚽🦶: 1,\nMateo Sadovek 4.el ⚽🦶: 1'
        //alert(alertText+alertTextPenalties)
        return 0
    }
    else if(id==7){
        //alertTextPenalties='\npenali\nDavid Bliznac 2.el ⚽🦶: 1,\nTin Petr 2.el ⚽🦶: 1,\nIvano Tomašković 2.el ⚽🦶: 1, \nFranjo Đorđević 1.rt ⚽🦶: 1, \nAntonio Bičak 1.rt ⚽🦶: 1'
        //alert(alertText+alertTextPenalties)
        return 0
    }
    else
        //alert(alertText)
        return 0
}

function checkStates(bPlayer){
    console.log('->'+bPlayer.surname+': '+bPlayer.goal)
let bp=bPlayer.surname
    let bestPlayersPrevious=[            
    ...firstRound[9].goals,
    ...secondRound[0].goals,
    ...secondRound[1].goals,
    ...secondRound[2].goals,
    ...secondRound[3].goals,  
    ...secondRound[4].goals,
    ...secondRound[5].goals,
    ...secondRound[6].goals,
    ...secondRound[7].goals,
    ...secondRound[8].goals,
    ...secondRound[9].goals,  
    ...secondRound[10].goals,  
    ...secondRound[11].goals,
    ...secondRound[12].goals,
    ...secondRound[13].goals
]

    let result1 = [];
    bestPlayersPrevious.reduce(function(res, value) {
        if (!res[value.surname]) {
        res[value.surname] = { name: value.name, surname: value.surname, goal: 0, cl:value.cl };
        result1.push(res[value.surname])
        }
        res[value.surname].goal += value.goal;
        return res;
    }, {});
    
    let ret='<span class="new-entry"><abbr title="novi ulaz">new</abbr></span>'
    result1.map((player,i)=>{
        //console.log(bPlayer.surname===player.surname)
        if(bPlayer.surname===player.surname)
            if(bPlayer.goal===player.goal)
                ret='<abbr title="nema promjene">🟡</abbr>'
            else if(bPlayer.goal>player.goal)
                ret='<abbr  title="porast">🔼</abbr>'
            else
                ret='🔻'
            
    }) 
    return ret
}

function getScorers(ii){
    let bestPlayers=[]
    let i=parseInt(ii)
    if(i===1){
        bpList.innerHTML=''
        bestPlayers=[       
            //...secondRound[0].goals,
            //...secondRound[1].goals,
            //...secondRound[2].goals,
            //...secondRound[3].goals,  
            //...secondRound[4].goals,
            //...secondRound[5].goals,
            //...secondRound[6].goals,
            //...secondRound[7].goals,
            //...secondRound[8].goals,
            //...secondRound[9].goals,  
            //...secondRound[10].goals,  
            //...secondRound[11].goals,
            //...secondRound[12].goals,
            //...secondRound[13].goals,
            //...secondRound[14].goals
        ]
    }
    if(i==2){
        bpList.innerHTML=''
        bestPlayers=[       
            //...firstRound[0].goals,
            //...firstRound[1].goals, 
            //...firstRound[2].goals, 
            //...firstRound[3].goals,
            //...firstRound[4].goals,
            //...firstRound[5].goals, 
            //...firstRound[6].goals, 
            //...firstRound[7].goals,
           // ...firstRound[8].goals,
            //...firstRound[9].goals, 
            //...firstRound[10].goals 
        ]
    }
    if(i==3){
        bpList.innerHTML=''
        bestPlayers=[ 
            /*      
            ...firstRound[0].goals,
            ...firstRound[1].goals, 
            ...firstRound[2].goals, 
            ...firstRound[3].goals,
            ...firstRound[4].goals,
            ...firstRound[5].goals, 
            ...firstRound[6].goals, 
            ...firstRound[7].goals,
            ...firstRound[8].goals,
            ...firstRound[9].goals, 
            ...firstRound[10].goals, 
            
            ...secondRound[0].goals,
            ...secondRound[1].goals,
            ...secondRound[2].goals,
            ...secondRound[3].goals,  
            ...secondRound[4].goals,
            ...secondRound[5].goals,
            ...secondRound[6].goals,
            ...secondRound[7].goals, 
            ...secondRound[8].goals, 
            ...secondRound[9].goals, 
            ...secondRound[10].goals, 
            ...secondRound[11].goals,
            ...secondRound[12].goals,
            ...secondRound[13].goals,
            ...secondRound[14].goals
            */
        ]
    }
    if(i==4){
        bpList.innerHTML=''
        bestPlayers=[       
            //...secondRound[8].goals, 
            //...secondRound[9].goals, 
            //...secondRound[10].goals, 
            //...secondRound[11].goals
        ]
    }

    var result = [];
    bestPlayers.reduce(function(res, value) {
        if (!res[value.surname]) {
        res[value.surname] = { name: value.name, surname: value.surname, goal: 0, cl:value.cl };
        result.push(res[value.surname])
        }
        res[value.surname].goal += value.goal;
        return res;
    }, {});

const resultDsc=result.sort((a,b)=>b.goal-a.goal)

resultDsc.forEach((player,index) => {
    bpList.innerHTML+=`<tr>      
        <td>${index+1}. ${i===1?checkStates(resultDsc[index]):''}</td>
        <td>${player.surname}</td>
        <td>${player.name}</td>
        <td> ${player.goal}</td>
        <td> ${player.cl}</td>
        </tr>`
})}


