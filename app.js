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


const firstRound=[
    {id:1, round: 1, fTeam:'-',sTeam:'-',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
    {id:2, round: 1, fTeam:'1.PT',sTeam:'2.MT',fTeamScore:0, sTeamScore:4, goals:[{name: 'Leni', surname: 'Šelir', goal:3, cl:'2.MT'},{name: 'Marko', surname: 'Čović', goal:1, cl:'2.MT'}]},
    {id:3, round: 1, fTeam:'3.EL',sTeam:'2.SE',fTeamScore:2, sTeamScore:1, goals:[{name: 'Tin', surname: 'Horak', goal:1, cl:'3.EL'},{name: 'Tadej', surname: 'Rukavina', goal:1, cl:'3.EL'},{name: 'Marko', surname: 'Kovačević', goal:1, cl:'2.SE'}]},
    {id:4, round: 1, fTeam:'1.MT',sTeam:'3.PT',fTeamScore:1, sTeamScore:1,pen1:0,pen2:1, goals:[{name: 'Gabrijel', surname: 'Doljanin', goal:1, cl:'3.PT'}, {name: 'Luka', surname: 'Ogujić', goal:1, cl:'3.MT'}]},
    {id:5, round: 1, fTeam:'3.SP',sTeam:'1.RT',fTeamScore:3, sTeamScore:1, goals:[{name: 'Gabriel', surname: 'Jozić', goal:1, cl:'1.RT'}, {name: 'Ivan', surname: 'Branković', goal:3, cl:'3.SP'}]},
    {id:6, round: 1, fTeam:'2.PT',sTeam:'2.EL',fTeamScore:1, sTeamScore:8, goals:[{name: 'Ivano', surname: 'Rekić', goal:1, cl:'2.PT'},{name: 'Ivan', surname: 'Mlinar', goal:1, cl:'2.EL'},{name: 'Lukas', surname: 'Tutić', goal:2, cl:'2.EL'},{name: 'Ante', surname: 'Jurić', goal:3, cl:'2.EL'},{name: 'Samuel', surname: 'Kaličanec', goal:2, cl:'2.EL'}]},
    {id:7, round: 1, fTeam:'KM',sTeam:'2.P',fTeamScore:0, sTeamScore:14, goals:[{name: 'Tin', surname: 'Putak', goal:7, cl:'2.P'},{name: 'Leon', surname: 'Gorupec', goal:5, cl:'2.P'},{name: '', surname: 'Ivić', goal:2, cl:'2.P'},]},
    {id:8, round: 1, fTeam:'-',sTeam:'4.EL',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:'-'}]},
    {id:9, round: 1, fTeam:'-',sTeam:'-',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:'-'}]},
    {id:10, round: 1, fTeam:'3.P',sTeam:'1.SE',fTeamScore:4, sTeamScore:2, goals:[{name: 'Mateo', surname: 'Tomić', goal:1, cl:'1.SE'},{name: 'Nemanja', surname: 'Konjević', goal:1, cl:'1.SE'},{name: 'Kristijan', surname: 'Jozić', goal:1, cl:'1.SE'},{name: 'Dario', surname: 'Krluk', goal:2, cl:'3.P'}, {name: 'Luka', surname: 'Dobrić', goal:2, cl:'3.P'},]},
    {id:11, round: 1, fTeam:'1.EL',sTeam:'2.S',fTeamScore:0, sTeamScore:2, goals:[{name: 'Gabrijel', surname: 'Jurkić', goal:1, cl:'2.S'}, {name: '-', surname: 'autogol', goal:1, cl:'1.EL'}]},
    {id:12, round: 1, fTeam:'2.RT',sTeam:'4.RT',fTeamScore:0, sTeamScore:2, goals:[{name: 'Mateo', surname: 'Sivonjić', goal:1, cl:'4.RT'}, {name: 'Matej', surname: 'Medaković', goal:1, cl:'4.RT'}]},
    {id:13, round: 1, fTeam:'1.P',sTeam:'3.SA',fTeamScore:5, sTeamScore:2, goals:[{name: 'Dorian', surname: 'Stojčević', goal:1, cl:'1.P'}, {name: 'Mario', surname: 'Šilarić', goal:4, cl:'1.P'}, {name: 'Bruno', surname: 'Marijanović', goal:1, cl:'3.SA'},{name: 'Mateo', surname: 'Bukać', goal:1, cl:'3.SA'}]},
    {id:14, round: 1, fTeam:'1.S',sTeam:'3.RT',fTeamScore:0, sTeamScore:3, goals:[{name: 'Patrik', surname: 'Vacka', goal:2, cl:'3.RT'}, {name: 'Antun', surname: 'Ristić', goal:1, cl:'3.RT'}]},
    {id:15, round: 1, fTeam:'3.S',sTeam:'4.PT',fTeamScore:3, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
    {id:16, round: 1, fTeam:'-',sTeam:'PROF',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:'-'}]},
  
/*second round */
      {id:17, round: 2, fTeam:'4.MT',sTeam:'2.MT',fTeamScore:2, sTeamScore:3, goals:[{name: 'Marko', surname: 'Čović', goal:2, cl:'2:MT'},{name: 'Leni', surname: 'Šelir', goal:1, cl:'2.MT'},{name: 'Borna', surname: 'Kočiš', goal:2, cl:'4.MT'}]},
      {id:18, round: 2, fTeam:'3.EL',sTeam:'3.PT',fTeamScore:4, sTeamScore:1, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:19, round: 2, fTeam:'3.SP',sTeam:'2.EL',fTeamScore:3, sTeamScore:5, goals:[{name: 'Bekim', surname: 'Sahiti', goal:1, cl:'3.SP'},{name: 'Robert', surname: 'Bahunek', goal:1, cl:'3.SP'},{name: 'Ivo', surname: 'Ilinović', goal:1, cl:'3.SP'},{name: 'Ante', surname: 'Jurić', goal:1, cl:'2.EL'},{name: 'Lukas', surname: 'Tutić', goal:2, cl:'2.EL'},{name: 'Luka', surname: 'Bernašek', goal:2, cl:'2.EL'},]},
      {id:20, round: 2, fTeam:'2.P',sTeam:'4.EL',fTeamScore:0, sTeamScore:2, goals:[{name: 'Marko', surname: 'Flanjak', goal:2, cl:'4.EL'}]},
      {id:21, round: 2, fTeam:'3.MT',sTeam:'3.P',fTeamScore:4, sTeamScore:1, goals:[{name: 'Leon', surname: 'Rendić', goal:2, cl:'3.MT'},{name: 'Vanja', surname: 'Horvat', goal:2, cl:'3.MT'},{name: 'Igor', surname: 'Jaković', goal:1, cl:'3.P'},]},
      {id:22, round: 2, fTeam:'2.S',sTeam:'4.RT',fTeamScore:1, sTeamScore:10, goals:[{name: 'Stefan', surname: 'Radulović', goal:8, cl:'4.RT'},{name: 'Matej', surname: 'Medaković', goal:2, cl:'4.RT'},{name: 'Ivo', surname: 'Grgić', goal:1, cl:'2.S'},]},
      {id:23, round: 2, fTeam:'1.P',sTeam:'3.RT',fTeamScore:0, sTeamScore:14, goals:[{name: 'Patrik', surname: 'Vacka', goal:7, cl:'3.RT'},{name: 'Niko', surname: 'Cindrić', goal:2, cl:'3.RT'},{name: 'Jakov', surname: 'Gudelj', goal:1, cl:'3.RT'},{name: 'Bruno', surname: 'Balog', goal:1, cl:'3.RT'},{name: 'Borna', surname: 'Krivsky', goal:3, cl:'3.RT'},]},
      {id:24, round: 2, fTeam:'3.S',sTeam:'PROF',fTeamScore:1, sTeamScore:5 , goals:[{name: 'Matej', surname: 'Bubnjić', goal:1, cl:'PROF'},{name: 'Tomislav', surname: 'Brletić', goal:2, cl:'PROF'},{name: 'Danko', surname: 'Tomašek', goal:1, cl:'PROF'},{name: 'Branko', surname: 'Blažević', goal:1, cl:'PROF'},{name: 'Erik', surname: 'Živanović', goal:1, cl:'3.S'},]},
  //quarter finals-round 3
      /*25-28 */
      {id:25, round: 3, fTeam:'2.MT',sTeam:'3.EL',fTeamScore:2, sTeamScore:2, pen1:3, pen2:2, goals:[{name: 'Tin', surname: 'Horak', goal:1, cl:'3.EL'},{name: 'Teo', surname: 'Sivonjić', goal:1, cl:'3.EL'},{name: 'Marko', surname: 'Čović', goal:1, cl:'2.MT'},{name: 'Patrik', surname: 'Finek', goal:1, cl:'2.MT'}]},
      {id:26, round: 3, fTeam:'2.EL',sTeam:'4.EL',fTeamScore:2, sTeamScore:2, pen1:2, pen2:3, goals:[{name: 'Ivan', surname: 'Mlinar', goal:1, cl:'2.EL'},{name: 'Lukas', surname: 'Tutić', goal:1, cl:'2.EL'},{name: 'Marko', surname: 'Džolić', goal:2, cl:'4.EL'}]},
      {id:27, round: 3, fTeam:'-',sTeam:'-',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:28, round: 3, fTeam:'-',sTeam:'-',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
   //semi finals
      /*29-30 */
  {id:29, round: 4, fTeam:'2.MT',sTeam:'4,EL',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
  {id:30, round: 4, fTeam:'-',sTeam:'-',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
   //finals
      /*31 */
  {id:31, round: 5, fTeam:'-',sTeam:'-',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
]
/*
function resultFormat(firstRo){
    
}
*/


const bestPlayers=[
    
  ...firstRound[0].goals,
  ...firstRound[1].goals,
  ...firstRound[2].goals,
  ...firstRound[3].goals,
  ...firstRound[4].goals,
  ...firstRound[5].goals, 
  ...firstRound[6].goals, 
  ...firstRound[9].goals,
  ...firstRound[10].goals,
  ...firstRound[11].goals, 
  ...firstRound[12].goals, 
  ...firstRound[13].goals, 
  ...firstRound[14].goals,
  ...firstRound[15].goals, 

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
    
  ...firstRound[0].goals,
  ...firstRound[1].goals,
  ...firstRound[2].goals,
  ...firstRound[3].goals,
  ...firstRound[4].goals,
  ...firstRound[5].goals, 
  ...firstRound[6].goals, 
  ...firstRound[9].goals,
  ...firstRound[10].goals,
  ...firstRound[11].goals, 
  ...firstRound[11].goals, 
  ...firstRound[12].goals, 
  ...firstRound[13].goals, 
  ...firstRound[14].goals,
  ...firstRound[15].goals, 
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
  res.render('index',{fround:firstRound})
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
  res.render('about',{dev:'Krunoslav Kulhavi', judge:'Borna Kočiš, Andrija Mlinar, Nikola Kolić, Marko Čović, Marko Flanjak', writer:'-', idea:'Danko Tomašek'})
})


app.get('/stats', (req, res) => {
  res.render('statistics',{countFinals,countQualif, countBest,countAbout})
})

app.get('/api', (req, res) => {
  res.json(firstRound)
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








/*
const firstRound=[
    {id:1, round: 1, fTeam:'-',sTeam:'-',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
    {id:2, round: 1, fTeam:'1.PT',sTeam:'2.MT',fTeamScore:0, sTeamScore:0, goals:[{name: '-', surname: '', goal:0, cl:''},]},
    {id:3, round: 1, fTeam:'3.EL',sTeam:'2.SE',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
    {id:4, round: 1, fTeam:'1.MT',sTeam:'3.PT',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
    {id:5, round: 1, fTeam:'3.SP',sTeam:'1.RT',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
    {id:6, round: 1, fTeam:'2.PT',sTeam:'2.EL',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
    {id:7, round: 1, fTeam:'KM',sTeam:'2.P',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
  {id:8, round: 1, fTeam:'-',sTeam:'4.EL',fTeamScore:0, sTeamScore:0, goals:[{name: '-', surname: '-', goal:0, cl:'-'}]},
  {id:9, round: 1, fTeam:'-',sTeam:'-',fTeamScore:0, sTeamScore:0, goals:[{name: '-', surname: '-', goal:0, cl:'-'}]},
    {id:10, round: 1, fTeam:'3.P',sTeam:'1.SE',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
    {id:11, round: 1, fTeam:'1.EL',sTeam:'2.S',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
    {id:12, round: 1, fTeam:'2.RT',sTeam:'4.RT',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
  {id:13, round: 1, fTeam:'1.P',sTeam:'3.SA',fTeamScore:0, sTeamScore:0, goals:[{name: '-', surname: '-', goal:0, cl:'-'}]},
    {id:14, round: 1, fTeam:'1.S',sTeam:'3.RT',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
    {id:15, round: 1, fTeam:'3.S',sTeam:'4.PT',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
  {id:16, round: 1, fTeam:'-',sTeam:'PROF',fTeamScore:0, sTeamScore:0, goals:[{name: '-', surname: '-', goal:0, cl:'-'}]},
  

      {id:17, round: 2, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:18, round: 2, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:19, round: 2, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:20, round: 2, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:21, round: 2, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:22, round: 2, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:23, round: 2, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:24, round: 2, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0 , goals:[{name: '', surname: '', goal:0, cl:''}]},
      //quarter finals-round 3
     
      {id:25, round: 3, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:26, round: 3, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:27, round: 3, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
      {id:28, round: 3, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
   //semi finals
     
  {id:29, round: 4, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
  {id:30, round: 4, fTeam:'',sTeam:'',fTeamScore:0, sTeamScore:0, goals:[{name: '', surname: '', goal:0, cl:''}]},
   //finals
      
  {id:31, round: 5, fTeam:'3.RT',sTeam:'2.S',fTeamScore:2, sTeamScore:2, goals:[{name: '', surname: '', goal:0, cl:''}]},
]



*/
