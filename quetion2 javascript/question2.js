
const matchList = [
  ["mu", "city"],
  ["munchen", "mu"],
  ["city", "munchen"],
];

const resultMatch = [1, 0, 1]; // 1 means home wins, 0 means away wins

const generateWinner = () => {
  // Object to store the scores for each team
  const scores = {};

  // Iterate through each match and result
  for (let i = 0; i < matchList.length; i++) {
    const homeTeam = matchList[i][0];
    const awayTeam = matchList[i][1];
    const result = resultMatch[i];

    // If home team wins
    if (result === 0) {
      scores[homeTeam] = (scores[homeTeam] ?? 0) + 3; // Add 3 points to home team
    }
    // If away team wins
    else if (result === 1) {
      scores[awayTeam] = (scores[awayTeam] ?? 0) + 3; // Add 3 points to away team
    }
  }

  // Find the team with the highest score
  let winner = "";
  let maxScore = 0;
  for (const team in scores) {
    if (scores[team] > maxScore) {
      maxScore = scores[team];
      winner = team;
    }
  }

  return winner;
};

const winner = generateWinner();
console.log("Winner:", winner); // Output will now correctly reflect the winning team
