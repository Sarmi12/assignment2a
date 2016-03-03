var quizModule = angular.module('QuizApp', []);

quizModule.controller('QuizAppController',['$scope', function($scope){
    
    var qac = this;

    qac.students = 
    [
       {
          name:"Jeffry Smith",
          correct:0,
          wrong:0
       },
       {
          name:"Brandon Luck",
          correct:0,
          wrong:0
       },
       {
          name:"Mary Hunter",
          correct:0,
          wrong:0
       },
       {
          name:"Sarmi Thapa",
          correct:0,
          wrong:0
       },
       {
          name:"Jon Ford",
          correct:0,
          wrong:0
       },
       {
          name:"Tylor Lamb",
          correct:0,
          wrong:0
       },
       {
          name:"Benjamin Hair",
          correct:0,
          wrong:0
       },
       {
          name:"Damian Mcdaniel",
          correct:0,
          wrong:0
       },
       {
          name:"James Bond",
          correct:0,
          wrong:0
       },
       {
          name:"Kashmir Reddy",
          correct:0,
          wrong:0
       },
       {
          name:"Asha Nurani",
          correct:0,
          wrong:0
       },
       {
          name:"Saru Aryal",
          correct:0,
          wrong:0
       },
       {
          name:"Natasha Pahari",
          correct:0,
          wrong:0
       },
       {
          name:"Bindu Sapkota",
          correct:0,
          wrong:0
       },
       {
          name:"Kishor Bhujel",
          correct:0,
          wrong:0
       },
       {
          name:"Jack Kitchen",
          correct:0,
          wrong:0
       },
       {
          name:"Jill Babb",
          correct:0,
          wrong:0
       },
       {
          name:"Kristi Mainali",
          correct:0,
          wrong:0
       },
       {
          name:"Ginger Sander",
          correct:0,
          wrong:0
       },
       {
          name:"Gilligan Bush",
          correct:0,
          wrong:0
       }
    ];

qac.students_completed = [];
    
    qac.questions = 
    [       
        {
            question: "What is the capital of Texas?",
            answer: "Austin"
        },
        {
            question: "How many states are in the U.S.?",
            answer: "50"
        },
        {
            question: "What is the name of the current President?",
            answer: "Barack Obama"
        },
        {
            question: "What color is the sky?",
            answer: "Blue"
        }, 
        {
            question: "What color is the Moon?",
            answer: "Gray"
        },
        {
            question: "How many stars are in the U.S. flag?",
            answer: "50"
        },
        {
            question: "What is the capital of California?",
            answer: "Sacramento"
        },
        {
            question: "What is the name of the previous President?",
            answer: "George W. Bush"
        },
        {
            question: "What color is the tree?",
            answer: "Green"
        }, 
        {
            question: "What color is the sun?",
            answer: "Orange"
        },
        {
            question: "What is the capital of Nepal?",
            answer: "Kathmandu"
        },
        {
            question: "How many planets in our solar system?",
            answer: "8"
        },
        {
            question: "Who is the president of WTAMU?",
            answer: "Patrick O'Brien"
        },
        {
            question: "What is the name of the instructor for CIDM 4385?",
            answer: "Jeffry Babb"
        }, 
        {
            question: "What color is the ocean?",
            answer: "Blue"
        },
        {
            question: "How many colors are in the rainbow?",
            answer: "7"
        },
        {
            question: "What is the capital of New York?",
            answer: "Albany"
        },
        {
            question: "What is the name of the best CIDM instructor at WTAMU?",
            answer: "Jeffry Babb"
        },
        {
            question: "What color is grass?",
            answer: "Green"
        }, 
        {
            question: "What is the capital of India?",
            answer: "New Delhi"
        },
    ];
    
    qac.questions_completed = [];
    
    qac.getNextQuestion = function(){
        
        if(qac.questions.length > 0){
            var index = Math.floor(Math.random() * qac.questions.length);
            
            qac.selected_question = qac.questions[index];
            
            qac.questions_completed.push(qac.selected_question);
            
            //read about splice here: http://www.w3schools.com/jsref/jsref_obj_array.asp
            qac.questions.splice(index, 1);            
        }
        else{
            qac.questions = qac.questions_completed;
            qac.questions_completed = [];
        }

    }
    
    qac.getNextStudent = function(){
        
        if(qac.students.length > 0){
            var index = Math.floor(Math.random() * qac.students.length);
             
            qac.selected_student = qac.students[index];
             
            qac.students_completed.push(qac.selected_student);
             
            qac.students.splice(index, 1);
        }
        else{
            qac.students = qac.students_completed;
            qac.students_completed = [];
        }
    }
    
    qac.getNext = function(){
        qac.getNextQuestion();
        qac.getNextStudent();
    }
    
    qac.doCorrect = function(){
        qac.selected_student.correct++;
        qac.getNext();
    }
    
    qac.doWrong = function(){
        qac.selected_student.wrong++;
        qac.getNext();        
    }
    
    qac.getNext();
    
}]);