import { Injectable } from '@angular/core';

interface Quiz{
    question: string;
    answer: { option: string, correct: boolean } [];
}

@Injectable({
  providedIn: 'root'
})


export class QuizService {
  quizzes: Quiz[] = [
    {
      question: 'Inside which HTML element do we put the JavaScript?',
      answer: [
        { option: '<javascript>', correct: false },
        { option: '<script>', correct: true },
        { option: '<js>', correct: false },
        { option: '<scripting>', correct: false },
        
      ]
    },
    {
      question: 'What is the correct JavaScript syntax to change the content of the HTML element below?'

      ,
      answer: [
        { option: 'document.getElement("p").innerHTML= "Hello World!"', correct: false },
        { option: '#demo.innerHTML="Hello World!"', correct: false },
        { option: 'document.getElementById("p").innerHTML= "Hello World!"', correct: true },
        { option: 'document.getElementByName("p").innerHTML= "Hello World!"', correct: false },
      ]
    },
    {
      question: 'Is JavaScript case-sensitive?',
      answer: [
        { option: 'Yes', correct: true },
        { option: 'No', correct: false },
        { option: 'None of the above', correct: false },
        { option: 'All of the above', correct: false },
        
      ]
    },
    {
      question: 'Which of the following is not Javascript frameworks or libraries?',
      answer: [
        { option: 'Polymer', correct: false },
        { option: 'Meteor', correct: false },
        {option: 'Cassandra', correct: true},
        {option: 'JQuery', correct: true},
        
      ]
    },

    {
      question: 'What is TypeScript?',
      answer: [
        { option: 'A Language based on Javascript', correct: true },
        { option: 'script that runs on browser', correct: false },
        {option: 'A DataType Collection of Javascript', correct: false},
        {option: 'None of the above', correct: false},
        
      ]
    },

    {
      question: 'What is defination of an undefined value in JavaScript?',
      answer: [
        { option: 'Variable used in the code doest exist', correct: false },
        { option: 'Property doesnt exist', correct: false },
        {option: 'Variable is not assigned to any value', correct: false},
        {option: 'All of the above', correct: true},
        
      ]
    },
    {
      question: 'Among the following, which one is a ternary operator in JavaScript?',
      answer: [
        { option: '#', correct: false },
        { option: ': :', correct: false },
        {option: '&:', correct: false},
        {option: '?:', correct: true},
        
      ]
    },
    
    {
      question: 'What is the difference between == and === ?',
      answer: [
        { option: '=== throws syntex error', correct: false },
        { option: '== checks values only, === checks types as well', correct: true },
        {option: '=== is reference type check only', correct: false},
        {option: 'Both are same', correct: false},
        
      ]
    },
    {
      question: 'What does javascript use instead of == and !=?',
      answer: [
        { option: 'It uses bitwise checking', correct: false },
        { option: 'It uses equalto()', correct: false },
        {option: 'It uses === and !== instead', correct: true},
        {option: 'It uses equals() and notequals() instead', correct: false},
        
      ]
    },

    {
      question: 'What is the difference between let and var?',
      answer: [
        { option: 'let has local scope', correct: true },
        { option: 'Both are same', correct: false },
        {option: 'var is new data type', correct: false},
        {option: 'let consumes more cpu and ram', correct: false},
        
      ]
    },

    {
      question: 'JavaScript is a ___ -side programming language',
      answer: [
        { option: 'Client', correct: false },
        { option: 'Server', correct: false },
        {option: 'Both', correct: true},
        {option: 'None', correct: false},
        
      ]
    },

    {
      question: 'Which of the following will write the message “Hello DataFlair!” in an alert box?',
      answer: [
        { option: 'alertBox(“Hello DataFlair!”);', correct: false },
        { option: 'alert(Hello DataFlair!);', correct: false },
        {option: 'msgAlert(“Hello DataFlair!”);', correct: false},
        {option: 'alert(“Hello DataFlair!”);', correct: true},
        
      ]
    },

    
    {
      question: 'How do you find the minimum of x and y using JavaScript',
      answer: [
        { option: ' min(x,y);;', correct: false },
        { option: 'Math.min(x,y)', correct: true },
        {option: ' Math.min(xy)', correct: false},
        {option: 'min(xy);', correct: false},
        
      ]
    },

    {
      question: 'Which of the following is correct about Abstract Factory design pattern',
      answer: [
        { option: ' HTMLForms', correct: false },
        { option: 'Winforms', correct: false },
        { option: ' Forms', correct: false },
        { option: 'Webforms', correct: true },
       
      ]
    },
    {
      question: 'Which of the following object is not an ASP component?',
      answer: [
        { option: 'Counter', correct: false },
        { option: 'LinkCounter', correct: true },
        { option: 'AdRotator', correct: false },
        { option: 'File Access', correct: false }
      ]
    },
    {
      question: 'The first event triggers in an aspx page is.',
      answer: [
        { option: 'Page_Load()', correct: false },
        { option: 'Init()', correct: false },
        { option: 'Page_click()', correct: false },
        { option: 'Page_Init()', correct: true },
        
      ]
    },
    {
      question: 'What will the following code return: Boolean(10 > 9)',
      answer: [
        { option: 'True', correct: false },
        { option: 'False', correct: false },
        { option: 'NaN', correct: true },
        { option: 'number', correct: false },
       
      ]
    },
    {
      question: 'Difference between Response.Write() andResponse.Output.Write().',
      answer: [
        { option: 'Response.Output.Write() allows you to buffer output', correct: false },
        { option: 'Response.Output.Write() allows you to flush output', correct: false },
        { option: ' Response.Output.Write() allows you to write formatted ', correct: false },
        { option: ' Response.Output.Write() allows you to write formatted output', correct: true },
      ]
    },
    {
      question: 'Which of the following tool is used to manage the GAC?',
      answer: [
        { option: ' RegSvr.exe', correct: false },
        { option: ' GacUtil.exe ', correct: true },
        { option: 'GacSvr32.exe', correct: false },
        { option: 'GacMgr.exe', correct: false }
      ]
    },
    {
      question: 'What class does the ASP.NET Web Form class inherit from by default?',
      answer: [
        { option: ' System.Web.UI.Page', correct: true },
        { option: 'System.Web.UI.Form', correct: false },
        { option: 'System.Web.GUI.Page', correct: false },
        { option: ' System.Web.Form', correct: false }
      ]
    }
  ]



  getQuizzes(){
    return this.quizzes;
  }
}
