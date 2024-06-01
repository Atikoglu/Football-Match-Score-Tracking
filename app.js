function increaseScoreA () {
    console.log("skorA")
    const teamScore=document.getElementById("teamA-score")
    let score=parseInt(teamScore.innerHTML)
    teamScore.innerHTML=++score
}

function increaseScoreB () {
    const teamScore=document.getElementById("teamB-score")
    let score=parseInt(teamScore.innerHTML)
    teamScore.innerHTML=++score
}

function decreaseScoreA () {
    const teamScore=document.getElementById("teamA-score")
    let score=parseInt(teamScore.innerHTML)
    if (score > 0) {
        teamScore.innerHTML=score-1
    } else {
        alert("Not Identified!")
    }
}

function decreaseScoreB () {
    const teamScore=document.getElementById("teamB-score")
    let score=parseInt(teamScore.innerHTML)
    if (score > 0) {
         score=teamScore.innerHTML=score-1
    } else {
        alert("Not Indifined!")
    }
}

function changeNameA () {
    const enterName=prompt("Enter the team name.")
    if (enterName.length !==0) {
        teamName=document.getElementById("teamA-name")
        teamName.innerHTML=enterName
    } else (
        alert("Please enter the team name!")
    )
}

function changeNameB () {
    const enterName=prompt("Enter the team name.")
    if (enterName.length !==0) {
        teamName=document.getElementById("teamB-name")
        teamName.innerHTML=enterName
    } else {
        alert("Please enter the team name!")
    }
}

function updateScoreA () {
    const enterScore=prompt("Enter team score.")
    let score=parseInt(enterScore)
    if (isNaN(score) || score < 0 ) {
        alert("Not Indifined!")
    } else {
        const teamScore=document.getElementById("teamA-score")
        teamScore.innerHTML=score
    }
}

function updateScoreB () {
    const enterScore=prompt("Enter team score.")
    let score=parseInt(enterScore)
    if (isNaN(score) || score < 0 ) { 
        alert("Not Indıfined")
    } else {
        const teamScore=document.getElementById("teamB-score")
        teamScore.innerHTML=score
    }
}

function resetScoreA () {
    const teamScore=document.getElementById("teamA-score")
    teamScore.innerHTML=0
}

function resetScoreB () {
    const teamScore=document.getElementById("teamB-score")
    teamScore.innerHTML=0
}