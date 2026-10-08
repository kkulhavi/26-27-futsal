const express = require('express')
const app = express()
app.set('view engine', 'ejs');

var bodyParser = require('body-parser')

app.use(express.static("public"));

const port = process.env.PORT||3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var countFinals=0
var countQualif=0
var countBest=0
var countAbout=0

const fruits=['apple','pear','plum','raspberry']
const items=[
    {name:'iPhone', price: 800, category:'mobile', brand:'Apple', url:'http://abc'},
    {name:'A70', price: 400, category:'mobile', brand:'Samsung', url:'http://abc'},
    {name:'A71', price: 500, category:'mobile', brand:'Samsung', url:'http://abc'},
    {name:'S21', price: 700, category:'mobile', brand:'Samsung', url:'http://abc'},
    {name:'HP gamer', price: 1700, category:'desktop', brand:'HP', url:'http://abc'}

]
const firstRound=[
  /*-*/{id:1, round: 1, fTeam:'2.S',sTeam:'3.EL',fTeamScore:0, sTeamScore:2, goals:[{name: 'Stjepan', surname: 'Bina', goal:2, cl:'3.EL'}]},
    {id:2, round: 1, fTeam:'2.MT',sTeam:'1.S',fTeamScore:0, sTeamScore:0, goals:[{name: '-', surname: 'Alandžak', goal:4, cl:'2.MT'},{name: '-', surname: 'Đinić', goal:1, cl:'2.MT'},]},
    {id:3, round: 1, fTeam:'2.PT',sTeam:'2.RT',fTeamScore:2, sTeamScore:1, goals:[{name: '-', surname: 'Štajgler ', goal:1, cl:'2.PT'}, {name: '-', surname: 'Bešlić', goal:1, cl:'2.PT'},{name: '-', surname: 'Bičak', goal:1, cl:'2.RT'},]},
    {id:4, round: 1, fTeam:'1.MT',sTeam:'3:MT',fTeamScore:0, sTeamScore:1, goals:[{name: '-', surname: 'Piščević', goal:1, cl:'3.MT'}]},
    {id:5, round: 1, fTeam:'3.EL',sTeam:'1.P',fTeamScore:3, sTeamScore:2, goals:[{name: '-', surname: 'Plavček', goal:2, cl:'3.EL'}, {name: '-', surname: 'Tomašković', goal:1, cl:'3.EL'}, {name: '-', surname:'Havliček', goal:1, cl:'1.P'}, {name: '-',surname:'Skalnik', goal:1, cl:'1.P'}]},
    {id:6, round: 1, fTeam:'4.RT',sTeam:'4.PT',fTeamScore:9, sTeamScore:0, goals:[{name: 'Ivano', surname:'Ivančić', goal:2, cl:'3.RT'}, {name: 'Leo', surname:'Putak', goal:1, cl:'3.RT'}, {name: 'Lukas', surname:'Brdal', goal:1, cl:'3.RT'}, {name: 'Karlo', surname:'Đurđević', goal:2, cl:'3.RT'},{name: 'David', surname:'Krmela', goal:2, cl:'3.RT'},{name: 'Ivan', surname:'Zbožinek', goal:1, cl:'3.RT'}]},
    {id:7, round: 1, fTeam:'1.EL',sTeam:'3.S',fTeamScore:0, sTeamScore:3, goals:[{name: '-', surname: 'Matić', goal:2, cl:'3.S'},{name: '-', surname: 'Brainterbach', goal:1, cl:'3.EL'},]},
  /*-*/{id:8, round: 1, fTeam:'-',sTeam:'-',fTeamScore:0, sTeamScore:2, goals:[{name: '-', surname: '-', goal:1, cl:'-'}]},
  /*-*/{id:9, round: 1, fTeam:'-',sTeam:'-',fTeamScore:0, sTeamScore:2, goals:[{name: '-', surname: '-', goal:1, cl:'-'}]},
    {id:10, round: 1, fTeam:'2.P',sTeam:'1.SP',fTeamScore:9, sTeamScore:0, goals:[{name: '-', surname: 'Lefelman', goal:2, cl:'2.P'},{name: '-', surname: 'Djonović', goal:1, cl:'2.P'},{name: '-', surname: 'Ivić ', goal:5, cl:'2.P'},{name: '-', surname: 'Lovrić', goal:1, cl:'2.P'},]},
    {id:11, round: 1, fTeam:'3.PT',sTeam:'2.SP',fTeamScore:6, sTeamScore:1, goals:[{name: '-', surname: 'Šinko', goal:4, cl:'3.PT'},{name: '-', surname: 'Šimala', goal:2, cl:'3.PT'},{name: '-', surname: 'Seferović', goal:1, cl:'2.SP'}]},
    {id:12, round: 1, fTeam:'1.PT',sTeam:'3.P',fTeamScore:2, sTeamScore:1, goals:[{name: '-', surname: 'Božina', goal:1, cl:'1.PT'},{name: '-', surname: 'Novotni', goal:1, cl:'1.PT'},{name: '-', surname: 'Poklečki', goal:1, cl:'3.P'}]},
  /*-*/{id:13, round: 1, fTeam:'-',sTeam:'-',fTeamScore:0, sTeamScore:2, goals:[{name: '-', surname: '-', goal:1, cl:'-'}]},
    {id:14, round: 1, fTeam:'3.SP',sTeam:'1.RT',fTeamScore:1, sTeamScore:4, goals:[{name: 'Borna', surname: 'Žabić', goal:1, cl:'1.RT'}]},
    {id:15, round: 1, fTeam:'2.EL',sTeam:'KM',fTeamScore:10, sTeamScore:0, goals:[{name: '-', surname: 'Plaušić', goal:1, cl:'2.EL'},{name: 'Noa', surname: 'Ereiz', goal:4, cl:'2.EL'},{name: '-', surname: 'Ilinković', goal:2, cl:'2.EL'},{name: '-', surname: 'Borojević', goal:1, cl:'2.EL'},{name: '-', surname: 'Vicić', goal:1, cl:'2.EL'},{name: '-', surname: 'Đolić', goal:1, cl:'2.EL'}]},
  /*-*/{id:16, round: 1, fTeam:'-',sTeam:'-',fTeamScore:0, sTeamScore:2, goals:[{name: '-', surname: '-', goal:1, cl:'-'}]},
  
/*second round */
      {id:17, round: 2, fTeam:'Prof',sTeam:'2.MT',fTeamScore:6, sTeamScore:0, goals:[{name: '-', surname: 'Đilas', goal:1, cl:'Prof'},{name: 'Tomislav', surname: 'Brletić', goal:3, cl:'Prof'},{name: 'Dražen', surname: 'Hušek', goal:2, cl:'Prof'},]},
      {id:18, round: 2, fTeam:'2.PT',sTeam:'3.MT',fTeamScore:2, sTeamScore:8, goals:[{name: '-', surname: 'Kranjec', goal:1, cl:'3.MT'},{name: '-', surname: 'Mateš', goal:2, cl:'3.MT'},{name: '-', surname: 'Piščević', goal:3, cl:'3.MT'},{name: '-', surname: 'Ježinec', goal:2, cl:'3.MT'},{name: '-', surname: 'Salaj', goal:1, cl:'2.PT'},{name: '-', surname: 'Ribarić', goal:1, cl:'2.PT'}]},
      {id:19, round: 2, fTeam:'1.P',sTeam:'3.RT',fTeamScore:0, sTeamScore:5, goals:[{name: 'Lukas', surname: 'Brdal', goal:2, cl:'3.RT'},{name: 'Ivano', surname: 'Ivančić', goal:2, cl:'3.RT'},{name: 'David', surname: 'Krmela', goal:1, cl:'3.RT'}]},
      {id:20, round: 2, fTeam:'3.SP',sTeam:'4.RT',fTeamScore:2, sTeamScore:7, goals:[{name: 'Patrik', surname: 'Broš', goal:1, cl:'4.RT'},{name: 'Toni', surname: 'Čimiris', goal:2, cl:'4.RT'},{name: 'David', surname: 'Dubravac', goal:1, cl:'4.RT'},{name: 'Dean', surname: 'Rončević', goal:2, cl:'4.RT'},{name: 'Mihael', surname: 'Malina', goal:1, cl:'4.RT'},{name: '-', surname: 'Đorđević', goal:1, cl:'2.SP'},{name: '-', surname: 'Matić', goal:1, cl:'2.SP'}]},
      {id:21, round: 2, fTeam:'2.S',sTeam:'2.P',fTeamScore:4, sTeamScore:1, goals:[{name: 'Ivan', surname: 'Gegić ', goal:2, cl:'2.S'},{name: 'Goran', surname: 'Ivić', goal:1, cl:'2.S'},{name: 'Ivan', surname: 'Vicić ', goal:1, cl:'2.S'},{name: '-', surname: 'Ivić ', goal:1, cl:'2.P'},]},
      {id:22, round: 2, fTeam:'3.PT',sTeam:'1.PT',fTeamScore:0, sTeamScore:1, goals:[{name: 'Josip', surname: 'Novotni', goal:1, cl:'1.PT'},]},
      {id:23, round: 2, fTeam:'4.EL',sTeam:'3.SP',fTeamScore:2, sTeamScore:2, goals:[{name: 'Sebastian', surname: 'Čengić', goal:1, cl:'4.EL'},{name: 'Ivan', surname: 'Benković', goal:1, cl:'4.EL'},{name: 'Dario', surname: 'Simonović', goal:1, cl:'3.SP'},{name: 'Ivan', surname: 'Radić', goal:1, cl:'3.SP'},]},
      {id:24, round: 2, fTeam:'2.EL',sTeam:'4.MT',fTeamScore:3, sTeamScore:2 , goals:[{name: 'Noa', surname: 'Ereiz', goal:2, cl:'2.EL'},{name: '-', surname: 'Parag', goal:1, cl:'2.EL'}]},
      //quarter finals-round 3
      /*25-28 */
      {id:25, round: 3, fTeam:'Prof',sTeam:'3.MT',fTeamScore:5, sTeamScore:0, goals:[{name: 'Tomislav', surname: 'Brletić', goal:3, cl:'Prof'},{name: 'Branko', surname: 'Blažević', goal:1, cl:'Prof'},{name: '-', surname: 'Đilas', goal:1, cl:'Prof'}]},
      {id:26, round: 3, fTeam:'3.RT',sTeam:'4.RT',fTeamScore:4, sTeamScore:2, goals:[{name: 'Lukas', surname: 'Brdal', goal:1, cl:'3.RT'},{name: 'David', surname: 'Krmela', goal:1, cl:'3.RT'},{name: 'Ivano', surname: 'Ivančić', goal:2, cl:'3.RT'}, {name: 'Toni', surname: 'Čimiris', goal:1, cl:'4.RT'}, {name: 'David', surname: 'Dubravac', goal:1, cl:'4.RT'}]},
      {id:27, round: 3, fTeam:'2.S',sTeam:'1.PT',fTeamScore:0, sTeamScore:1, goals:[{name: 'Goran', surname: 'Ivić', goal:1, cl:'2.S'}]},
      {id:28, round: 3, fTeam:'4.EL',sTeam:'2.EL',fTeamScore:0, sTeamScore:0, goals:[{name: 'Stjepan', surname: 'Bina', goal:2, cl:'4.EL'}, {name: 'Noa', surname: 'Ereiz', goal:1, cl:'2.EL'}]},
   //semi finals
      /*29-30 */
  {id:29, round: 4, fTeam:'Prof',sTeam:'3.RT',fTeamScore:2, sTeamScore:5, goals:[{name: 'Danko', surname: 'Tomašek',  goal:1, cl:'Prof'},{name: 'Branko', surname: 'Blažević',  goal:1, cl:'Prof'},{name: 'Ivano', surname: 'Ivančić', goal:3, cl:'3.RT'},{name: 'Lukas', surname: 'Brdal', goal:2, cl:'3.RT'}]},
  {id:30, round: 4, fTeam:'2.S',sTeam:'4.EL',fTeamScore:2, sTeamScore:1, goals:[{name: 'Ivan', surname: 'Vicić ', goal:1, cl:'2.S'},{name: 'Ivan', surname: 'Gegić ', goal:1, cl:'2.S'},{name: 'Stjepan', surname: 'Bina', goal:1, cl:'4.EL'}]},
   //finals
      /*31 */
  {id:31, round: 5, fTeam:'3.RT',sTeam:'2.S',fTeamScore:2, sTeamScore:2, goals:[{name: 'Ivano', surname: 'Ivančić', goal:2, cl:'3.RT'},{name: '-', surname: 'Cetl', goal:1, cl:'2.S'},{name: 'Ivan', surname: 'Gegić ', goal:1, cl:'2.S'}]}
]
/*vicić,ivić,gegić 2.sp jedan razmak */


const bestPlayers=[
    
  //...firstRound[0].goals,
  ...firstRound[1].goals,
  ...firstRound[2].goals,
  ...firstRound[3].goals,
  ...firstRound[4].goals,
  ...firstRound[5].goals, 
  ...firstRound[6].goals, 
  ...firstRound[9].goals,
  ...firstRound[10].goals,
  ...firstRound[11].goals, 
  //...firstRound[11].goals, 
  //...firstRound[12].goals, 
  ...firstRound[13].goals, 
  ...firstRound[14].goals,
  //...firstRound[15].goals, 

  /*second round */
  ...firstRound[16].goals, 
  ...firstRound[17].goals, 
  ...firstRound[18].goals, 
  ...firstRound[19].goals, 
  ...firstRound[20].goals, 
  ...firstRound[21].goals, 
  ...firstRound[22].goals, 
  ...firstRound[23].goals, 
  

  /*quarter */
  ...firstRound[24].goals, 
  ...firstRound[25].goals, 
  ...firstRound[26].goals, 
  ...firstRound[27].goals, 
    /*semi */
    ...firstRound[28].goals, 
    ...firstRound[29].goals, 
    /*finals */
    ...firstRound[30].goals, 
   
]
const bestPlayers1st=[
    
  //...firstRound[0].goals,
  ...firstRound[1].goals,
  ...firstRound[2].goals,
  ...firstRound[3].goals,
  ...firstRound[4].goals,
  ...firstRound[5].goals, 
  ...firstRound[6].goals, 
  ...firstRound[9].goals,
  ...firstRound[10].goals,
  ...firstRound[11].goals, 
  //...firstRound[11].goals, 
  //...firstRound[12].goals, 
  ...firstRound[13].goals, 
  ...firstRound[14].goals,
  //...firstRound[15].goals, 
]
  /*2nd */
  var bestPlayers2nd=[
    ...firstRound[16].goals, 
  ...firstRound[17].goals, 
  ...firstRound[18].goals, 
  ...firstRound[19].goals, 
  ...firstRound[20].goals, 
  ...firstRound[21].goals, 
  ...firstRound[22].goals, 
  ...firstRound[23].goals, 
     
  ]
  /*quarter */
  var bestPlayersQuarter=[
  ...firstRound[24].goals, 
  ...firstRound[25].goals, 
  ...firstRound[26].goals, 
  ...firstRound[27].goals, 
]

const bestPlayers2ndQuarter=[

  /*second round */
  ...firstRound[16].goals, 
  ...firstRound[17].goals, 
  ...firstRound[18].goals, 
  ...firstRound[19].goals, 
  ...firstRound[20].goals, 
  ...firstRound[21].goals, 
  ...firstRound[22].goals, 
  ...firstRound[23].goals, 
  

  /*quarter */
  ...firstRound[24].goals, 
  ...firstRound[25].goals, 
  ...firstRound[26].goals, 
  ...firstRound[27].goals, 
  /*semi */
  ...firstRound[28].goals, 
  ...firstRound[29].goals, 
  /*finals */
  ...firstRound[30].goals, 
   
]

const totalScore=bestPlayers.reduce((total, player)=>total+player.goal,0)
const totalScore1st=bestPlayers1st.reduce((total, player)=>total+player.goal,0)
const totalScore2nd=bestPlayers2nd.reduce((total, player)=>total+player.goal,0)
const totalScoreQuarter=bestPlayersQuarter.reduce((total, player)=>total+player.goal,0)
const totalScore2ndQuarter=bestPlayers2ndQuarter.reduce((total, player)=>total+player.goal,0)


//ukupno
var result = [];
bestPlayers.reduce(function(res, value) {
  if (!res[value.surname]) {
    res[value.surname] = { name: value.name, surname: value.surname, goal: 0, cl:value.cl};
    result.push(res[value.surname])
  }
  res[value.surname].goal += value.goal;
  return res;
}, {});
//1st
var result1st = [];
bestPlayers1st.reduce(function(res, value) {
  if (!res[value.surname]) {
    res[value.surname] = { name: value.name, surname: value.surname, goal: 0, cl:value.cl};
    result1st.push(res[value.surname])
  }
  res[value.surname].goal += value.goal;
  return res;
}, {});
//2nd
var result2nd = [];
bestPlayers2nd.reduce(function(res, value) {
  if (!res[value.surname]) {
    res[value.surname] = { name: value.name, surname: value.surname, goal: 0, cl:value.cl};
    result2nd.push(res[value.surname])
  }
  res[value.surname].goal += value.goal;
  return res;
}, {});
//quarter
var resultQuarter = [];
bestPlayersQuarter.reduce(function(res, value) {
  if (!res[value.surname]) {
    res[value.surname] = { name: value.name, surname: value.surname, goal: 0, cl:value.cl};
    resultQuarter.push(res[value.surname])
  }
  res[value.surname].goal += value.goal;
  return res;
}, {});
//2nd+quarter
var result2ndQuarter = [];
bestPlayers2ndQuarter.reduce(function(res, value) {
  if (!res[value.surname]) {
    res[value.surname] = { name: value.name, surname: value.surname, goal: 0, cl:value.cl};
    result2ndQuarter.push(res[value.surname])
  }
  res[value.surname].goal += value.goal;
  return res;
}, {});



//group by goals, then compare by surname
//var groupByGoalAndSortBySurnameAsc=result.sort((a,b)=>b.goal-a.goal||a.surname.localeCompare(b.surname))
var groupByGoalAndSortBySurnameAsc=result.sort((a,b)=>b.goal-a.goal||new Intl.Collator().compare(a.surname,b.surname))
var groupByGoalAndSortBySurnameQuarterAsc=resultQuarter.sort((a,b)=>b.goal-a.goal||new Intl.Collator().compare(a.surname,b.surname))
var groupByGoalAndSortBySurname2ndAsc=result2nd.sort((a,b)=>b.goal-a.goal||new Intl.Collator().compare(a.surname,b.surname))
var groupByGoalAndSortBySurname1stAsc=result1st.sort((a,b)=>b.goal-a.goal||new Intl.Collator().compare(a.surname,b.surname))
var groupByGoalAndSortBySurname2ndQuarterAsc=result2ndQuarter.sort((a,b)=>b.goal-a.goal||new Intl.Collator().compare(a.surname,b.surname))

app.get('/', (req, res) => {
  countFinals++
  res.render('index')
  //res.render('qualifications',{fround:firstRound})
})
app.get('/finals', (req, res) => {
  res.render('index')
})
app.get('/bestplayers', (req, res) => {
  countBest++
  res.render('bestplayers',{bp:groupByGoalAndSortBySurnameAsc, total:totalScore, y1:'',y2:'',yq:'',y2q:'',y:'y'})
})
app.get('/bestplayers2ndquarter', (req, res) => {
  countBest++
  res.render('bestplayers',{bp:groupByGoalAndSortBySurname2ndQuarterAsc, total:totalScore2ndQuarter, y1:'',y2:'',yq:'',y2q:'y',y:''})
})
app.get('/bestplayer1st', (req, res) => {
  countBest++
  res.render('bestplayers',{bp:groupByGoalAndSortBySurname1stAsc, total:totalScore1st, y1:'y',y2:'',yq:'',y2q:'',y:''})
})
app.get('/bestplayer2nd', (req, res) => {
  countBest++
  res.render('bestplayers',{bp:groupByGoalAndSortBySurname2ndAsc, total:totalScore2nd, y1:'',y2:'y',yq:'',y2q:'',y:''})
})
app.get('/bestplayersquarter', (req, res) => {
  countBest++
  res.render('bestplayers',{bp:groupByGoalAndSortBySurnameQuarterAsc, total:totalScoreQuarter, y1:'',y2:'',yq:'y',y2q:'',y:''})
})
app.get('/qualifications', (req, res) => {
  countQualif++
  res.render('qualifications',{fround:firstRound})
})
app.get('/about', (req, res) => {
  countAbout++
  res.render('about',{dev:'Krunoslav Kulhavi', judge:'Mihael Malina, David Dubravac, Ivan Benković, Donatto Matković, David Vacka', writer:'Dean Rončević, Toni Čimiris, Patrik Broš, David Vacka', idea:'Danko Tomašek'})
})


app.get('/stats', (req, res) => {
  res.render('statistics',{countFinals,countQualif, countBest,countAbout})
})





app.post('/info', (req, res) => {
  console.log(req.body.id)
  
  //res.send(items.sort((a,b)=>a.price-b.price))
  //res.send(items.filter(a=>a.price>500))
  //res.send(items.filter(a=>a.brand==='Samsung'))
  res.send(firstRound.filter(a=>a.id===req.body.id)) 
})

app.get('/mobile', (req, res) => {
  //res.send(items.sort((a,b)=>a.price-b.price))
  //res.send(items.filter(a=>a.price>500))
  //res.send(items.filter(a=>a.brand==='Samsung'))
  res.send(items.filter(a=>a.category!='mobile')) 
})

app.get('/total',(req,res)=>{
    const total=items.reduce((acc,value)=>acc+value.price,0)
    res.send(total.toString())
})

app.listen(port)