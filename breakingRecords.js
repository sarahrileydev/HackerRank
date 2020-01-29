function breakingRecords(scores) {
  let minBreak = 0;
  let maxBreak = 0;
  let breakScores = [];

  let minScore = 0;
  let maxScore = 0;

  if (scores[0] < scores[1]) {
    minScore = scores[0];
    maxScore = scores[1];
    maxBreak++;
  } else if(scores[0] > scores[1]) {
    minScore = scores[1];
    maxScore = scores[0];
    minBreak++;
  }else{
    minScore = scores[0];
    maxScore = scores[0];
  }

  for (let i = 2; i < scores.length; i++) {
    if (scores[i] < minScore) {
      minScore = scores[i];
      minBreak++;
    } else if (scores[i] > maxScore) {
      maxScore = scores[i];
      maxBreak++;
    }
  }
  breakScores.push(maxBreak, minBreak);
  console.log(breakScores)
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
