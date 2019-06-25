$("#start-button").click(function (e) { 
    game.start();
    e.preventDefault();
});

$(document).click("#end", function(){
    game.done();
});

var questionsArray = [{
    question: 'How many stripes are on the United States Flag?',
    answers: ['13', '12', '14', '11'],
    correctAnswer: '13'
}, {
    question: 'What nationality is Celine Dion?',
    answers: ['French', 'Canadian', 'British', 'Italian'],
    correctAnswer: 'Canadian'
}, {
    question: 'Who is the current U.S Speaker of the House?',
    answers: ['Mitch McConnell', 'John Boehner', 'Nancy Pelosi', 'Paul Ryan'],
    correctAnswer: 'Nancy Pelosi'
}, {
    question: 'What was the date of the Attack on Pearl Harbor?',
    answers: ['December 7th, 1943', 'December 7th, 1942', 'December 8th, 1942', 'December 7th, 1941'],
    correctAnswer: 'December 7th, 1941'
}, {
    question: 'What does the CIA stands for?',
    answers: ['Central Information Agency', 'Central Inspection Advisory', 'Central Intelligence Agency', 'Central Interrogation Agency'],
    correctAnswer: 'Central Intelligence Agency'
}, {
    question: 'Which is NOT a member of the Avengers?',
    answers: ['Captain America', 'Captain Planet', 'Captain Marvel', 'Captain Flint'],
    correctAnswer: 'Captain Planet'
}, {
    question: 'What is the capital of South Korea?',
    answers: ['Seoul', 'Tokyo', 'Manila', 'Pyongyang'],
    correctAnswer: 'Seoul'
}, {
    question: 'Who wrote \'To Kill A Mockingbird\'?',
    answers: ['George R. R. Martin', 'Mark Twain', 'Ernest Hemingway', 'Harper Lee'],
    correctAnswer: 'Harper Lee'
}, {
    question: 'What is the symbol in CSS and jQuery that stands for \'Universal Selector\'?',
    answers: ['~', '*', '@', '^'],
    correctAnswer: 'Archie'
}, {
    question: 'What color comes from when you mix Blue and Yellow?',
    answers: ['Teal', 'Olive', 'Green', 'Blue-green'],
    correctAnswer: 'Green'
}, {
    question: 'Which is NOT an American Brand name car?',
    answers: ['Audi', 'Ford', 'Chevrolet', 'Cadillac'],
    correctAnswer: 'Archie'
}, {
    question: 'Which animal is native only to Australia?',
    answers: ['Bison', 'Beaver', 'Koala', 'Lion'],
    correctAnswer: 'Koala'
},{
    question: 'Which programming language is named after a precious gemstone?',
    answers: ['Python', 'Ruby on Rails', 'JavaScript', 'PHP'],
    correctAnswer: 'Ruby on Rails'
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
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
        $("#subwrapper").prepend("<h2>Time Remaining: <span id='counter'>60</span> Seconds</h2>");
        $("#start-button").remove();
        for(var i = 0; i < questionsArray.length; i++) {
            $("#subwrapper").append("<h2>"+questionsArray[i].question+"</h2>");
            for(var j = 0; j < questionsArray[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question "+i+"' value='"+questionsArray[i].answers[j]+"'>"+questionsArray[i].answers[j]);
            }
        }
    },
    done: function () {
        $.each($("input[name='question-0]':checked"), function(){
            if($(this).val()==questionsArray[0].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1]':checked"), function(){
            if($(this).val()==questionsArray[1].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2]':checked"), function(){
            if($(this).val()==questionsArray[2].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3]':checked"), function(){
            if($(this).val()==questionsArray[3].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4]':checked"), function(){
            if($(this).val()==questionsArray[4].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5]':checked"), function(){
            if($(this).val()==questionsArray[5].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6]':checked"), function(){
            if($(this).val()==questionsArray[6].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7]':checked"), function(){
            if($(this).val()==questionsArray[7].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-8]':checked"), function(){
            if($(this).val()==questionsArray[8].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-9]':checked"), function(){
            if($(this).val()==questionsArray[9].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-10]':checked"), function(){
            if($(this).val()==questionsArray[10].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-11]':checked"), function(){
            if($(this).val()==questionsArray[11].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-12]':checked"), function(){
            if($(this).val()==questionsArray[12].correctAnswer) {
                game.counter++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-13]':checked"), function(){
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