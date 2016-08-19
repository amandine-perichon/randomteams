export default function (members, numberTeams) {
  let membersPerTeam = Math.ceil(members.length / numberTeams)
  console.log(membersPerTeam)
  if (membersPerTeam * numberTeams > members.length) {
    membersPerTeam = membersPerTeam - 1
  }
  console.log(membersPerTeam)
  let teams = []
  for (let i = 1; i <= numberTeams -1; i++) {
    let team = []
    for (let j = 0; j < membersPerTeam; j++) {
      let index = Math.floor(Math.random() * (members.length -1))
      team.push(members[index])
      members = members.slice(0, index).concat(members.slice(index + 1, members.length))
    }
    teams.push(team)
  }
  if (members.length !== 0) {
    teams.push(members)
  }
  return teams
}

// console.log(randomTeams(["Amandine", "Sam", "Jana", "Kamon", "Justin", "Erwin", "Sash", "Prem", "Tim", "Siobhan", "Julia"], 3))
// console.log(randomTeams(["Amandine", "Sam", "Jana"], 3))
// console.log(randomTeams(["Amandine", "Sam", "Jana", "Tim"], 3))
