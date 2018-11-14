function populate(){
    if (Quiz.isEnded) {
        showScores();
    }else{
        //show quqestion
        var element = document.getElementById('question');
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById('choice' + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);

            
            
        };
        showProgress();
        
    }
};

function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
};

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length; 
}

function showScores(){
    var gameOverHtml = "<h3>Result</h4>";
    game += "<h4 id= 'score'>Your Scores:" + quiz.scores + "</h4>";
    var element = document.getElementById('quiz');
    element.innerHTML = gameOverHtml;


}

// this uses the question function defined in the questions.js file
var questions = [
    new Question("Which one is not an object oriented programming language?", ["java", "c#", "c++", "c"], "java"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "Css", "Xml"], "Css"),
    new Question("There are ______ main components of object oriented programming", ["1", "6", "2", "4"], "4"),
    new Question("Which language is used for web apps", ["Python", "Java", "Javascript", "All"], "All"),
    new Question("MVC is a ______", ["Library", "Framework", "Language", "All"], "Framework")
];

var quiz = new Quiz(questions);

populate();