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
  /*-*/{id:1, round: 1, fTeam:'-',sTeam:'-',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
    {id:2, round: 1, fTeam:'1.PT',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '-', surname: '', goal:0, cl:''},]},
    {id:3, round: 1, fTeam:'3.EL',sTeam:'2.SE',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
    {id:4, round: 1, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
    {id:5, round: 1, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
    {id:6, round: 1, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
    {id:7, round: 1, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
  /*-*/{id:8, round: 1, fTeam:'-',sTeam:'-',fTeamScore:0, sTeamScore:0, goals:[{name: '-', surname: '-', goal:0, cl:'-'}]},
  /*-*/{id:9, round: 1, fTeam:'-',sTeam:'-',fTeamScore:0, sTeamScore:0, goals:[{name: '-', surname: '-', goal:0, cl:'-'}]},
    {id:10, round: 1, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
    {id:11, round: 1, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
    {id:12, round: 1, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
  /*-*/{id:13, round: 1, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '-', surname: '-', goal:0, cl:'-'}]},
    {id:14, round: 1, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
    {id:15, round: 1, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
  /*-*/{id:16, round: 1, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '-', surname: '-', goal:0, cl:'-'}]},
  
/*second round */
      {id:17, round: 2, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:18, round: 2, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:19, round: 2, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:20, round: 2, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:21, round: 2, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:22, round: 2, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:23, round: 2, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:24, round: 2, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0 , goals:[{name: '', surname: '', goal:0, cl:''}]},
      //quarter finals-round 3
      /*25-28 */
      {id:25, round: 3, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:26, round: 3, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:27, round: 3, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:28, round: 3, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
   //semi finals
      /*29-30 */
  {id:29, round: 4, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
  {id:30, round: 4, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
   //finals
      /*31 */
  {id:31, round: 5, fTeam:'3.RT',sTeam:'2.S',fTeamScore:2, sTeamScore:2, goals:[{name: '', surname: '', goal:0, cl:''}]},
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
  //res.render('index')
//res.render('qualifications')
res.render('qualifications',{fround:firstRound})
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
