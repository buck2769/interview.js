When scoring for screening, to continue engaging a candidate, a rating of 3/5 or better is required for role level 4/5 for senior level. Time box the interview to allow 10 mins for candidate to ask questions. End the interview short if candidate scores less than 3/5 in the first 10-15 mins. If the candidate doesn’t get it move on to next question, don’t teach anything; just ask them to think about it, you’ve have time to ask questions at the end.



First 10-15 mins...
For Front End Web Developer, I look for solid (pass/fail) knowledge on the following topics:


1) Describe CSS Box Model.
2) Explain JS Closure. (Ask about benefits and disadvantages, see pre-screening info if available)
3) Describe MVC.
4) SCM, Git? Explain your workflow. (Ask about stashing, rebase, merge, pull.) 
5) Explain `this`, used in JavaScript. (Can also ask about .call(), .apply() or inheritance.) 


Senior Level Questions
* Name the 9 native object constructors provided by JavaScript itself. 
(acronym as hint for interviewer... FARBSNODE)
* Which of the above return primitive objects when using a literal assignment (not using new operator)? 
(underlined in interviewer hint above)
* Complex objects (not primitive) are assigned (stored) by ____________ . 
(fill in the blank, prompt to ask for clarity if needed)
* What is the difference between global variables and the global `head` object, e.g. coding for a browser or in node.js; what is the context of `this` in a browser? (hint type this in a browser console.)
* Why are functions considered first class objects?  Assess candidate’s understanding of JavaScript as a functional language.


* How does session state data impacted the scalability of a server?
* What is JSONP? Why would you use it? Can you explain how it works?
* Let's discuss (in pseudocode) how to write an algorithm to determine if a number is a prime number? Tell me what the code would look like.



Second 10-5 mins...
* How to you keep up w/ current trends?
* What IDE/Text Editor is your favorite? Try to convince me, why that is the best tool? What feature enhances your productivity? Tell me how that works.
* Have you ever for pleasure or for learning read the source code of jQuery?
* Experience w/ mobile Web
* Experience w/ CSS3 animation
* Check sense of humor, question like “Do you know the html5 gang sign”, or “What is the proper way to code, tabs or spaces?”
* List a few of the best ways to increase page load time (Performance Optimization).
* How do you organize your code?
* Explain how to use ‘event delegation’ with jQuery.


Last 10 mins
Do you have any questions? (I expect that remote candidates will ask about how to work with team.)


Handoff
Score of my top 5 questions (for the position), then adjust (star) rating +/- 1 point based on other questions and the questions that the candidate asked.


Extended Screening by 3 Engineers
After the 1st screening is passed, 3-4 of 5 points or better, a follow up 1 hour interview with three engineers is held to evaluate how well the candidate knows code. The objective is learn about the candidate’s thought process in building web applications. Below is a list of question to get the conversation moving; ideally questions that are open ended and have related follow up questions based on the answers are preferred. Of the questions below it may be good for the interviewer’s to choose the topics they will be speaking to, e.g. one on JS, another on HTML/CSS, another on general questions, etc. Ask candidate to explain their reasoning or for more detail in the answers they provide.


General Web Dev -
What's the coolest thing you've ever coded, what are you most proud of?
What browser do you primarily develop in and what developer tools do you use?
What are your favorite parts about the developer tools you use?
How would you optimize a websites assets/resources?
What is your preferred development environment? (OS, Editor, Browsers, Tools etc.)
Name 3 ways to decrease page load. (perceived or actual load time)
What tools do you use to test your code's performance?
If you jumped on a project and they used tabs and you used spaces, what would you do?
If you could master one technology this year, what would it be?
If not Web Development, what would you be doing?
jQuery: a great library or the greatest library? Discuss.


HTML -
Consider HTML5 as an open web platform. What are the building blocks of HTML5?
Describe the primary difference between the div and span tags?
What is semantic markup?
Can you use XHTML syntax in HTML5?
What are data- attributes good for?


CSS - 
Explain the difference between visibility:hidden and display:none?
What are the various clearing techniques and which is appropriate for what context? (infamous clearfix)
Have you ever used a grid system, and if so, what do you prefer?
Have you used or implemented media queries or mobile specific layouts/CSS?
What are some of the "gotchas" for writing efficient CSS?
Do you have experience using a CSS preprocessor? (SASS, LESS) If so, describe what you like and dislike about the CSS preprocessors you have used.
How would you implement a web design comp that uses non-standard fonts?


RWD (Responsive Web Design) - 
What are the major inflection points in RWD?


JavaScript - 
Explain the difference between == and ===. What is the value of the each expression below?
    0 == false
    0 === false
    1 == "1"
    1 === "1"


What's the difference between .call and .apply? Is there something better?
When would you use document.write()?
Explain "hoisting".
Describe event bubbling.
Explain event delegation.
Do you write unit tests? If so, what test library do you use? (Use TDD / BDD?)
Can you explain how inheritance works in JavaScript? (Describe inheritance patterns in JavaScript.)
Why is extending built in JavaScript objects not a good idea?
Describe the module pattern in Javascript?   Give examples of other design patterns.
What's a typical use case for anonymous functions?
What is AJAX?
Explain the same-origin policy with regards to JavaScript.
Do Ajax applications always deliver a better experience than traditional web applications?
Have you ever looked at the source code of the libraries/frameworks you use?
When do you optimize your code?
Have you ever used JavaScript templating?
What are some pros and cons of Single Page Applications?


Patterns - 
Are there any guidelines you follow to organize your code in an app based on an MVC pattern.
What is your favorite pattern?


Node.js -
What is the default module system used by Node.js?
What is likely the most used framework used for building Node.js applications?
What is mongoose?
Name 3 of the most often npm dependencies in a Node.js application.


Linux - 
What is `rsync` used for? 
How about `scp`?
How do you read arguments in a shell program?
Tell us about your `dotfiles`.
What is your preferred search tool on the command line?


PHP - 
Explain the use the static keyword.
Explain a closure.


MySQL -
Can you save your connection settings to a conf file?


Modeling - 
Use cacoo.com/diagrams and model a solution using a class diagram or sequence diagram


Reference / Links

1. https://gist.github.com/91e2b43e448bd8c0fce6 
2. https://github.com/darcyclarke/Front-end-Developer-Interview-Questions
3. http://james.padolsey.com/javascript/javascript-interview-questions/


1. http://www.quirksmode.org/js/this.html 
2. https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Closures
3. http://www.w3.org/TR/CSS2/box.html

