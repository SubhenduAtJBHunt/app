export class DB {
    public static courses = [
        {
            courseId : 1,
            courseName : "Angular",
            questions : [
                {
                    questionId : 1,
                    questionText : "Angular Js is based on",
                    options : [
                        {
                            optionText : "MVC Architecture",
                            isCorrect : false
                        },
                        {
                            optionText : "Decorator pattern",
                            isCorrect : false
                        },
                        {
                            optionText : "MVVM Architectural pattern",
                            isCorrect : true
                        },
                        {
                            optionText : "Observer Pattern",
                            isCorrect : false
                        }
                    ]
                },
                {
                    questionId : 2,
                    questionText : "AngularJS expressions are written using",
                    options : [
                        {
                            optionText : "(expression)",
                            isCorrect : false
                        },
                        {
                            optionText : "{{expression}}",
                            isCorrect : true
                        },
                        {
                            optionText : "{{{expression}}}",
                            isCorrect : false
                        },
                        {
                            optionText : "[expression]",
                            isCorrect : false
                        }
                    ]
                },
                {
                    questionId : 3,
                    questionText : "Which directive initializes an AngularJS application?",
                    options : [
                        {
                            optionText : "ng-init",
                            isCorrect : false
                        },
                        {
                            optionText : "ng-app",
                            isCorrect : true
                        },
                        {
                            optionText : "ngSrc",
                            isCorrect : false
                        },
                        {
                            optionText : "ng-start",
                            isCorrect : false
                        }
                    ]
                },
                {
                    questionId : 4,
                    questionText : "Which of following is not valid AngularJs Filter",
                    options : [
                        {
                            optionText : "lowercase",
                            isCorrect : false
                        },
                        {
                            optionText : "orderby",
                            isCorrect : false
                        },
                        {
                            optionText : "email",
                            isCorrect : true
                        },
                        {
                            optionText : "currency",
                            isCorrect : false
                        }
                    ]
                },
                {
                    questionId : 5,
                    questionText : "How do you share data between controller and view using:",
                    options : [
                        {
                            optionText : "Model",
                            isCorrect : false
                        },
                        {
                            optionText : "services",
                            isCorrect : true
                        },
                        {
                            optionText : "factory",
                            isCorrect : false
                        },
                        {
                            optionText : "$scope",
                            isCorrect : false
                        }
                    ]
                },
                {
                    questionId : 6,
                    questionText : "Angular is a cross platform framework",
                    options : [
                        {
                            optionText : "True",
                            isCorrect : true
                        },
                        {
                            optionText : "False",
                            isCorrect : false
                        }
                    ]
                },
                {
                    questionId : 7,
                    questionText : "Angular is entirely component based. Controllers and $scope are no longer used. They have been replaced by . . . . . . . and . . . . . . . .",
                    options : [
                        {
                            optionText : "components, controllers",
                            isCorrect : false
                        },
                        {
                            optionText : "$scopes, components",
                            isCorrect : false
                        },
                        {
                            optionText : "controllers, directives",
                            isCorrect : false
                        },
                        {
                            optionText : "components, directives",
                            isCorrect : true
                        }
                    ]
                },
                {
                    questionId : 8,
                    questionText : "Angular still does not provide nested components.",
                    options : [
                        {
                            optionText : "True",
                            isCorrect : false
                        },
                        {
                            optionText : "False",
                            isCorrect : true
                        }
                    ]
                },
                {
                    questionId : 9,
                    questionText : "Angular components can be described using . . . . . . A . . . . . . is a way to do some meta-programming",
                    options : [
                        {
                            optionText : "controllers, controller",
                            isCorrect : false
                        },
                        {
                            optionText : "loaders, loader",
                            isCorrect : false
                        },
                        {
                            optionText : "typescripts, typescript",
                            isCorrect : false
                        },
                        {
                            optionText : "decorators, decorator",
                            isCorrect : true
                        }
                    ]
                },
                {
                    questionId : 10,
                    questionText : "Angular uses . . . . . . . . syntax for built-in directives.",
                    options : [
                        {
                            optionText : "Pascal case",
                            isCorrect : false
                        },
                        {
                            optionText : "Snake case",
                            isCorrect : false
                        },
                        {
                            optionText : "Camel case",
                            isCorrect : true
                        },
                        {
                            optionText : "Underscore case",
                            isCorrect : false
                        }
                    ]
                },
                {
                    questionId : 11,
                    questionText : "You can use languages like . . . . . . . . . to write Angular code.",
                    options : [
                        {
                            optionText : "ES5",
                            isCorrect : false
                        },
                        {
                            optionText : "ES6",
                            isCorrect : false
                        },
                        {
                            optionText : "TypeScriptor",
                            isCorrect : false
                        },
                        {
                            optionText : "All of the above",
                            isCorrect : true
                        }
                    ]
                },
                {
                    questionId : 12,
                    questionText : "Angular uses . . . . . . . . . for fast views on mobile.",
                    options : [
                        {
                            optionText : "client side rendering",
                            isCorrect : false
                        },
                        {
                            optionText : "server side rendering",
                            isCorrect : true
                        }
                    ]
                },
                {
                    questionId : 13,
                    questionText : "The . . . . . . . . . . directive substitutes the normal href property and makes it easie to work with route links in Angular",
                    options : [
                        {
                            optionText : "RouterLink",
                            isCorrect : true
                        },
                        {
                            optionText : "RouterRend",
                            isCorrect : false
                        },
                        {
                            optionText : "RouterLike",
                            isCorrect : false
                        },
                        {
                            optionText : "RouterLayer",
                            isCorrect : false
                        }
                    ]
                }
            ]
        },
        {
            courseId : 2,
            courseName : "Core Java",
            questions : [
                {
                    questionId : 6,
                    questionText : "In java control statements break, continue, return, try-catch-finally and assert belongs to?",
                    options : [
                        {
                            optionText : "Selection statements",
                            isCorrect : false
                        },
                        {
                            optionText : "Loop Statements",
                            isCorrect : false
                        },
                        {
                            optionText : "Transfer statements",
                            isCorrect : true
                        },
                        {
                            optionText : "Pause Statement",
                            isCorrect : false
                        }
                    ]
                },
                {
                    questionId : 7,
                    questionText : "What is byte code in Java",
                    options : [
                        {
                            optionText : "Code generated by a Java compiler",
                            isCorrect : true
                        },
                        {
                            optionText : "Code generated by a Java Virtual Machine",
                            isCorrect : false
                        },
                        {
                            optionText : "Name of Java source code file",
                            isCorrect : false
                        },
                        {
                            optionText : "Block of code written inside a class",
                            isCorrect : false
                        }
                    ]
                },
                {
                    questionId : 8,
                    questionText : "Which of the following are not Java keywords",
                    options : [
                        {
                            optionText : "double",
                            isCorrect : false
                        },
                        {
                            optionText : "switch",
                            isCorrect : false
                        },
                        {
                            optionText : "then",
                            isCorrect : true
                        },
                        {
                            optionText : "instanceof",
                            isCorrect : false
                        }
                    ]
                },
                {
                    questionId : 9,
                    questionText : "Which of these is returned by operator '&' ?",
                    options : [
                        {
                            optionText : "Integer",
                            isCorrect : false
                        },
                        {
                            optionText : "Character",
                            isCorrect : true
                        },
                        {
                            optionText : "Boolean",
                            isCorrect : false
                        },
                        {
                            optionText : "Float",
                            isCorrect : false
                        }
                    ]
                },
                {
                    questionId : 10,
                    questionText : "Which variables are created when an object is created with the use of the keyword 'new' and destroyed when the object is destroyed?",
                    options : [
                        {
                            optionText : "Local variables",
                            isCorrect : false
                        },
                        {
                            optionText : "Instance variables",
                            isCorrect : true
                        },
                        {
                            optionText : "Class Variables",
                            isCorrect : false
                        },
                        {
                            optionText : "Static variables",
                            isCorrect : false
                        }
                    ]
                }
            ]
        }
    ]
}