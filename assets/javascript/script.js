$("#start-button").click(function (e) { 
    game.start();
    e.preventDefault();
});

$(document).click("#end", function(){
    game.done();
});

var questionsArray = [{
    question: 'WHat is your name?',
    answers: ['Taylor', 'Archie', 'Nick', 'Joyce'],
    correctAnswer: 'Archie'
}, {
    question: 'WHat is your name?',
    answers: ['Taylor', 'Archie', 'Nick', 'Joyce'],
    correctAnswer: 'Archie'
}, {
    question: 'WHat is your name?',
    answers: ['Taylor', 'Archie', 'Nick', 'Joyce'],
    correctAnswer: 'Archie'
}, {
    question: 'WHat is your name?',
    answers: ['Taylor', 'Archie', 'Nick', 'Joyce'],
    correctAnswer: 'Archie'
}, {
    question: 'WHat is your name?',
    answers: ['Taylor', 'Archie', 'Nick', 'Joyce'],
    correctAnswer: 'Archie'
}, {
    question: 'WHat is your name?',
    answers: ['Taylor', 'Archie', 'Nick', 'Joyce'],
    correctAnswer: 'Archie'
}, {
    question: 'WHat is your name?',
    answers: ['Taylor', 'Archie', 'Nick', 'Joyce'],
    correctAnswer: 'Archie'
}, {
    question: 'WHat is your name?',
    answers: ['Taylor', 'Archie', 'Nick', 'Joyce'],
    correctAnswer: 'Archie'
}, {
    question: 'WHat is your name?',
    answers: ['Taylor', 'Archie', 'Nick', 'Joyce'],
    correctAnswer: 'Archie'
}, {
    question: 'WHat is your name?',
    answers: ['Taylor', 'Archie', 'Nick', 'Joyce'],
    correctAnswer: 'Archie'
}, {
    question: 'WHat is your name?',
    answers: ['Taylor', 'Archie', 'Nick', 'Joyce'],
    correctAnswer: 'Archie'
}, {
    question: 'WHat is your name?',
    answers: ['Taylor', 'Archie', 'Nick', 'Joyce'],
    correctAnswer: 'Archie'
},{
    question: 'WHat is your name?',
    answers: ['Taylor', 'Archie', 'Nick', 'Joyce'],
    correctAnswer: 'Archie'
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countDown: function() {
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter <= 0) {
            console.log("Time is Up!!");
            game.done();
        }
        $("#subwrapper").append("<br><button id='done-button'>DONE</button>");
    },
    start: function() {
        timer = setInterval(game.countDown, 1000);
        $("#subwrapper").prepend("<h2>Time Remaining: <span id='counter'>120</span> Seconds</h2>");
        $("#start-button").remove();
        for(var i = 0; i < questionsArray.length; i++) {
            $("#subwrapper").append("<h2>"+questionsArray[i].question+"</h2>");
            for(var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question "+i+"' value='"+question[i].answers[j]+"'>"+question[i].answers[j])
            }
        }
    },
    done: function () {
        $.each($("input[name="question-0]":checked"), function(){
            if($(this).val()==questionsArray[0].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name="question-1]":checked"), function(){
            if($(this).val()==questionsArray[1].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name="question-2]":checked"), function(){
            if($(this).val()==questionsArray[2].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name="question-3]":checked"), function(){
            if($(this).val()==questionsArray[3].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name="question-4]":checked"), function(){
            if($(this).val()==questionsArray[4].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name="question-5]":checked"), function(){
            if($(this).val()==questionsArray[5].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name="question-6]":checked"), function(){
            if($(this).val()==questionsArray[6].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name="question-7]":checked"), function(){
            if($(this).val()==questionsArray[7].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name="question-8]":checked"), function(){
            if($(this).val()==questionsArray[8].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name="question-9]":checked"), function(){
            if($(this).val()==questionsArray[9].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name="question-10]":checked"), function(){
            if($(this).val()==questionsArray[10].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name="question-11]":checked"), function(){
            if($(this).val()==questionsArray[11].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name="question-12]":checked"), function(){
            if($(this).val()==questionsArray[12].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name="question-13]":checked"), function(){
            if($(this).val()==questionsArray[13].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        })
        
    this.result();
    },
    result: function(){
        clearInterval(timer);
        $("#subwrapper h2").remove();
        $("#subwrapper").html("<h2>All Done!</h2>");
        $("#subwrapper").append("<h3>Correct Answer: "+this.correct+"</h3>");
        $("#subwrapper").append("<h3>Incorrect Answer: "+this.incorrect+"</h3>");
        $("#subwrapper").append("<h3>Unanswered: "+(questionsArray.length-(this.incorrect+this.correct))+"</h3>");
    }
};