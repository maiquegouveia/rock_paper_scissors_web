
// Rock = 0
// Paper = 1
// Scissors = 2

let userPoints = 0
let computerPoints = 0

function getUserChoice(userChoice){
    let computerChoice = Math.floor(Math.random() * 3)
    let list = ['Rock', 'Paper', 'Scissors']
    if (userChoice != computerChoice){
        if ((userChoice == 0) && (computerChoice == 2)){
            window.alert("The computer chose " + list[computerChoice] +  ". You won!")
            userPoints += 1
            document.getElementById('userPoints').innerHTML = "User Points: " + userPoints

        } else if((userChoice == 1) && (computerChoice == 0)){
            window.alert("The computer chose " + list[computerChoice] +  ". You won!")
            userPoints += 1
            document.getElementById('userPoints').innerHTML = "User Points: " + userPoints
        
        } else if((userChoice == 2) && (computerChoice == 1)){
            window.alert("The computer chose " + list[computerChoice] +  ". You won!")
            userPoints += 1
            document.getElementById('userPoints').innerHTML = "User Points: " + userPoints

        } else {
            window.alert("The computer chose " + list[computerChoice] +  ". You lost!")
            computerPoints += 1
            document.getElementById('computerPoints').innerHTML = "Computer Points: " + computerPoints
        }
    } else {
        window.alert("The computer chose " + list[computerChoice] + ". You tied!")
    }
    
}