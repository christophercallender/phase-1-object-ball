function gameObject() {
  return {
      home: {
          teamName: 'Brooklyn Nets',
          colors: ['black', 'white'],
          players: {
              'Alan Anderson': {
                  number: 0,
                  shoe: 16,
                  points: 22,
                  rebounds: 12,
                  assists: 12,
                  steals: 3,
                  blocks: 1,
                  slamDunks: 1
              },
              'Reggie Evans': {
                  number: 30,
                  shoe: 14,
                  points: 12,
                  rebounds: 12,
                  assists: 12,
                  steals: 12,
                  blocks: 12,
                  slamDunks: 7
              },
              'Brook Lopez': {
                  number: 11,
                  shoe: 17,
                  points: 17,
                  rebounds: 19,
                  assists: 10,
                  steals: 3,
                  blocks: 1,
                  slamDunks: 15
              },
              'Mason Plumlee': {
                  number: 1,
                  shoe: 19,
                  points: 26,
                  rebounds: 12,
                  assists: 6,
                  steals: 3,
                  blocks: 8,
                  slamDunks: 5
              },
              'Jason Terry': {
                  number: 31,
                  shoe: 15,
                  points: 19,
                  rebounds: 2,
                  assists: 2,
                  steals: 4,
                  blocks: 11,
                  slamDunks: 1
              }
          }
      },
      away: {
          teamName: 'Charlotte Hornets',
          colors: ['turquoise', 'purple'],
          players: {
              'Jeff Adrien': {
                  number: 4,
                  shoe: 18,
                  points: 10,
                  rebounds: 1,
                  assists: 1,
                  steals: 2,
                  blocks: 7,
                  slamDunks: 2
              },
              'Bismak Biyombo': {
                  number: 0,
                  shoe: 16,
                  points: 12,
                  rebounds: 4,
                  assists: 7,
                  steals: 7,
                  blocks: 15,
                  slamDunks: 10
              },
              'DeSagna Diop': {
                  number: 2,
                  shoe: 14,
                  points: 24,
                  rebounds: 12,
                  assists: 12,
                  steals: 4,
                  blocks: 5,
                  slamDunks: 5
              },
              'Ben Gordon': {
                  number: 8,
                  shoe: 15,
                  points: 33,
                  rebounds: 3,
                  assists: 2,
                  steals: 1,
                  blocks: 1,
                  slamDunks: 0
              },
              'Brendan Haywood': {
                  number: 33,
                  shoe: 15,
                  points: 6,
                  rebounds: 12,
                  assists: 12,
                  steals: 2,
                  blocks: 5,
                  slamDunks: 12
              }
          }
      }
  }
}

const allTeams = gameObject()
const homeTeam = gameObject()['home']
const awayTeam = gameObject()['away']
const allPlayers = Object.assign({}, homeTeam['players'], awayTeam['players'])
const homePlayers = Object.assign({}, homeTeam['players'])
const awayPlayers = Object.assign({}, awayTeam['players'])
// console.log('allTeams:', allTeams)
// console.log('homeTeam:', homeTeam)
// console.log('awayTeam:', awayTeam)
// console.log('allPlayers:', allPlayers)
// console.log('homePlayers:', homePlayers)
// console.log('awayPlayers:', awayPlayers)

function numPointsScored(playerName) {
  for(const player in allPlayers){
      if(player === playerName) return allPlayers[playerName]['points']
  }
}
// console.log(numPointsScored('Alan Anderson'))

function shoeSize(playerName) {
  for(const player in allPlayers){
      if(player === playerName) return allPlayers[playerName]['shoe']
  }
}
// console.log(shoeSize('Alan Anderson'))

function teamColors(teamTitle) {
  if (homeTeam['teamName'] === teamTitle) {
      return homeTeam['colors']
  } else {
      return awayTeam['colors']
  }
}
// console.log(teamColors('Brooklyn Nets'))
// console.log(teamColors('Charlotte Hornets'))

function teamNames() {
  return [homeTeam['teamName'], awayTeam['teamName']]
}
// console.log(teamNames())

function playerNumbers(teamTitle) {
  let homeNumbers = [];
  let awayNumbers = [];
  if (homeTeam['teamName'] === teamTitle) {
      for(const player in homePlayers) {
      homeNumbers.push(homePlayers[player]['number'])
      } return homeNumbers
  } else {
      for(const player in awayPlayers) {
      awayNumbers.push(awayPlayers[player]['number'])
      } return awayNumbers
  }
}
// console.log(playerNumbers('Brooklyn Nets'))
// console.log(playerNumbers('Charlotte Hornets'))

function playerStats(playerName) {
  return allPlayers[playerName]
}
// console.log(playerStats('Alan Anderson'))

function bigShoeRebounds() {
  const biggestShoePlayer = []
  for(const player in allPlayers) {
      biggestShoePlayer.push({player: player, shoe: allPlayers[player]['shoe'], rebounds: allPlayers[player]['rebounds']});
      biggestShoePlayer.sort((a, b) => a.shoe - b.shoe);
  } return Object.entries(biggestShoePlayer.slice(biggestShoePlayer.length - 1)[0])[2][1]
}
// console.log(bigShoeRebounds())

function mostPointsScored() {
  const highestScoringPlayer = []
  for(const player in allPlayers) {
      highestScoringPlayer.push({player: player, points: allPlayers[player]['points']});
      highestScoringPlayer.sort((a, b) => a.points - b.points);
  } return Object.entries(highestScoringPlayer.slice(highestScoringPlayer.length - 1)[0])[0][1]
}
// console.log(mostPointsScored())

function winningTeam() {
  if(homeTeamPointsSum() > awayTeamPointsSum()) {
      return allTeams['home']['teamName']
  } else {
      return allTeams['away']['teamName']
  }
}
// console.log(winningTeam())

          function homeTeamPointsSum() {
              const homeTeamPoints = [];
              for(const player in homePlayers) {
                  homeTeamPoints.push(homePlayers[player]['points']);
                  // console.log(homePlayers[player]['points'])
              } let homeTeamPointsSum = 0;
              for(const number of homeTeamPoints) {
                  homeTeamPointsSum += number;
              } return homeTeamPointsSum
          }
          // console.log(homeTeamPointsSum())

          function awayTeamPointsSum() {
              const awayTeamPoints = [];
              for(const player in awayPlayers) {
                  awayTeamPoints.push(awayPlayers[player]['points']);
                  // console.log(awayPlayers[player]['points'])
              } let awayTeamPointsSum = 0;
              for(const number of awayTeamPoints) {
                  awayTeamPointsSum += number;
              } return awayTeamPointsSum
          }
          // console.log(awayTeamPointsSum())

function playerWithLongestName() {
  const playerNames = []
  for(const player in allPlayers) {
      playerNames.push({player: [player][0], length: [player.length][0]});
      playerNames.sort((a, b) => a.length - b.length)
  } return Object.entries(playerNames.slice(playerNames.length - 1)[0])[0][1]
}
// console.log(playerWithLongestName())

function doesLongNameStealATon() {
  if(playerWithLongestName() === playerWithMostSteals()) {
      return true
  }
}
// console.log(doesLongNameStealATon())

          function playerWithMostSteals() {
              const playerWithMostSteals = []
              for(const player in allPlayers) {
                  playerWithMostSteals.push({player: player, points: allPlayers[player]['steals']});
                  playerWithMostSteals.sort((a, b) => a.steals - b.steals);
              } return Object.entries(playerWithMostSteals.slice(playerWithMostSteals.length - 1)[0])[0][1]
          }
          // console.log(playerWithMostSteals())
