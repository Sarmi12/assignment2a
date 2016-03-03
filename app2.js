var quizModule = angular.module('QuizApp', []);

quizModule.controller('QuizAppController',['$scope', 'studentListService', 'questionListService', 
        function($scope, studentListService, questionListService){
    
    var qac = this;

    qac.student_completed = [];
    
    qac.questions = [];
    qac.questions_completed = [];
    
    qac.getNextQuestion = function(){
        
        if(qac.questions.length > 0){
            var index = Math.floor(Math.random() * qac.questions.length);
            
            qac.selected_question = qac.questions[index];
            
            qac.questions_completed.push(qac.selected_question);
            
            // http://www.w3schools.com/jsref/jsref_obj_array.asp
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
    
    //use service 
    
    qac.getStudents = function(){
        studentListService.getStudentList()
        .then(
            //what to do if $http.get was successful
            function(response){
                console.log(response.data);
                qac.students = response.data;
                qac.getNext();                
            },
            //what to do if $http.get was unsuccessful            
            function(response){
                console.log(response);                
                qac.students = [];
            }
        );
    }
    

    qac.getStudents();    

}]);

/////LIST of STUDENTS //
quizModule.factory('studentListService', ['$http', function($http){

    //factory allows us to specify an object to send back
    var studentListService = {};

    //get current rest conditions
    studentListService.getStudentList = function(){
        return $http.get("students.json");
    };
    
    return studentListService;
}]);

/////LIST of QUESTIONS/
quizModule.factory('questionListService', ['$http', function($http){

    //It allows us to specify an object to send back
    var questionListService = {};

    questionListService.getQuestion = function(){
        return $http.get("questions.json");
    };
    
    return questionListService;
    
}]);
    
   