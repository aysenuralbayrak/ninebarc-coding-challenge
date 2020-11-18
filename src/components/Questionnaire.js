import React, { Component } from 'react';
import * as Survey from 'survey-react';

class Questionnaire extends Component {
    json = {
        "pageNextText": "Next",
        "pagePrevText": "Back",
        "showQuestionNumbers": "off",
        "showNavigationButtons": "bottom",
        "pages": [
            {   
                "name": "starting-page",
                "elements": [
                    {
                        "type": "html",
                        "name": "question21",
                        "html": "<div class=\"starting-message\"><h1>Welcome to Berlin!</h1><h3>Click next and find out which ticket you need to buy on public transport</h3></div>"
                    }
                ],
            },
            {
                "name": "page1",
                "elements": [
                    {
                        "type": "text",
                        "name": "question1",
                        "title": "Your Name :",
                        "isRequired": true
                    }
                ],
            },
            {
                "name": "page2",
                "elements": [
                    {
                        "type": "radiogroup",
                        "name": "question2",
                        "title": "For which fare zone do you need a ticket?",
                        "description": "If you do not know about the zones, you can find information in here :  https://www.bvg.de/fare-overview",
                        "choices": [
                            {
                                "value": "item1",
                                "text": "AB"
                            },
                            {
                                "value": "item2",
                                "text": "BC"
                            },
                            {
                                "value": "item3",
                                "text": "ABC"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "page3",
                "elements": [
                    {
                        "type": "radiogroup",
                        "name": "question3",
                        "title": "How long do you need a transportation ticket?",
                        "choices": [
                            {
                                "value": "item1",
                                "text": "A few hours"
                            },
                            {
                                "value": "item2",
                                "text": "Whole day"
                            },
                            {
                                "value": "item3",
                                "text": "A week"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "page4",
                "elements": [
                    {
                        "type": "radiogroup",
                        "name": "question4",
                        "title": "Will your trip take more than three stations?",
                        "choices": [
                            {
                                "value": "item1",
                                "text": "Yes"
                            },
                            {
                                "value": "item2",
                                "text": "No"
                            }
                        ]
                    }
                ],
                "visibleIf": "{question3} == 'item1'"
            },
            {
                "name": "page5",
                "elements": [
                    {
                        "type": "radiogroup",
                        "name": "question5",
                        "title": "Are you planning more than three trip?",
                        "choices": [
                            {
                                "value": "item1",
                                "text": "Yes"
                            },
                            {
                                "value": "item2",
                                "text": "No"
                            }
                        ]
                    }
                ],
                "visibleIf": "{question4} = 'item1'"
            },
            {
                "name": "page6",
                "elements": [
                    {
                        "type": "html",
                        "name": "question6",
                        "html": "<div class=\"ticket-message\"> You should buy \"4-trip-ticket for AB zone\"<div/>"
                    }
                ],
                "visibleIf": "{question2} = 'item1' and {question5} = 'item1'"
            },
            {
                "name": "page7",
                "elements": [
                    {
                        "type": "html",
                        "name": "question7",
                        "html": "<div class=\"ticket-message\"> You should buy \"4-trip-ticket for BC zone\"<div/>"
                    }
                ],
                "visibleIf": "{question2} = 'item2' and {question5} = 'item1'"
            },
            {
                "name": "page8",
                "elements": [
                    {
                        "type": "html",
                        "name": "question8",
                        "html": "<div class=\"ticket-message\"> You should buy \"4-trip-ticket for ABC zone\"<div/>"
                    }
                ],
                "visibleIf": "{question2} = 'item3' and {question5} = 'item1'"
            },
            {
                "name": "page9",
                "elements": [
                    {
                        "type": "html",
                        "name": "question9",
                        "html": "<div class=\"ticket-message\"> You should buy \"Single Ticket for AB zone\"<div/>"
                    }
                ],
                "visibleIf": "{question2} = 'item1' and {question5} = 'item2'"
            },
            {
                "name": "page10",
                "elements": [
                    {
                        "type": "html",
                        "name": "question10",
                        "html": "<div class=\"ticket-message\"> You should buy \"Single Ticket for BC zone\"<div/>"
                    }
                ],
                "visibleIf": "{question2} = 'item2' and {question5} = 'item2'"
            },
            {
                "name": "page11",
                "elements": [
                    {
                        "type": "html",
                        "name": "question11",
                        "html": "<div class=\"ticket-message\"> You should buy \"Single Ticket for ABC zone\"<div/>"
                    }
                ],
                "visibleIf": "{question2} = 'item3' and {question5} = 'item2'"
            },
            {
                "name": "page12",
                "elements": [
                    {
                        "type": "html",
                        "name": "question12",
                        "html": "<div class=\"ticket-message\"> You should buy \"Short Trip Ticket for AB zone\"<div/>"
                    }
                ],
                "visibleIf": "{question4} = 'item2' and {question2} = 'item1'"
            },
            {
                "name": "page13",
                "elements": [
                    {
                        "type": "html",
                        "name": "question13",
                        "html": "<div class=\"ticket-message\"> You should buy \"Single Ticket for BC zone\"<div/>"
                    }
                ],
                "visibleIf": "{question4} = 'item2' and {question2} = 'item2'"
            },
            {
                "name": "page14",
                "elements": [
                    {
                        "type": "html",
                        "name": "question14",
                        "html": "<div class=\"ticket-message\"> You should buy \"Single Ticket for ABC zone\"<div/>"
                    }
                ],
                "visibleIf": "{question4} = 'item2' and {question2} = 'item3'"
            },
            {
                "name": "page15",
                "elements": [
                    {
                        "type": "html",
                        "name": "question15",
                        "html": "<div class=\"ticket-message\"> You should buy \"Day Ticket for AB zone\"<div/>"
                    }
                ],
                "visibleIf": "{question3} = 'item2' and {question2} = 'item1'"
            },
            {
                "name": "page16",
                "elements": [
                    {
                        "type": "html",
                        "name": "question16",
                        "html": "<div class=\"ticket-message\"> You should buy \"Day Ticket for BC zone\"<div/>"
                    }
                ],
                "visibleIf": "{question3} = 'item2' and {question2} = 'item2'"
            },
            {
                "name": "page17",
                "elements": [
                    {
                        "type": "html",
                        "name": "question17",
                        "html": "<div class=\"ticket-message\"> You should buy \"Day Ticket for ABC zone\"<div/>"
                    }
                ],
                "visibleIf": "{question2} = 'item3' and {question3} = 'item2'"
            },
            {
                "name": "page18",
                "elements": [
                    {
                        "type": "html",
                        "name": "question18",
                        "html": "<div class=\"ticket-message\"> You should buy \"7 Day Ticket for AB zone\"<div/>"
                    }
                ],
                "visibleIf": "{question2} = 'item1' and {question3} = 'item3'"
            },
            {
                "name": "page19",
                "elements": [
                    {
                        "type": "html",
                        "name": "question19",
                        "html": "<div class=\"ticket-message\"> You should buy \"7 Day Ticket for BC zone\"<div/>"
                    }
                ],
                "visibleIf": "{question2} = 'item2' and {question3} = 'item3'"
            },
            {
                "name": "page20",
                "elements": [
                    {
                        "type": "html",
                        "name": "question20",
                        "html": "<div class=\"ticket-message\"> You should buy \"7 Day Ticket for ABC zone\"<div/>"
                    }
                ],
                "visibleIf": "{question2} = 'item3' and {question3} = 'item3'"
            }
        ]
    }
    onComplete(survey, options) {
        //Write survey results into database
        console.log("Survey results: " + JSON.stringify(survey.data));
    }
    render() {
        var model = new Survey.Model(this.json);
        return (<Survey.Survey model={model} onComplete={this.onComplete} />);
    }

}
export default Questionnaire;