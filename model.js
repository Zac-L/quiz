game {
    difficulty
    numberOfRounds
    roundsPlayed
    askedQuestions
    newRound()
    getResults()
    displayName()
    displayScore()
    startGame()
    setup()
}

player {
    name
    score
    consecutiveAnswers
    getUserName()
}

question {
    question
    answer 
    difficulty 
    subject 
}

round {
    subject
    activePlayer
    numberOfQuestions
    numberOfQuestionsAsked
    updateScore()
    askQuestion()
    checkAnswer()
}