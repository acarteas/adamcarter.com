# Autograder
In an attempt to lighten the load of grading, I began work on my own auto grader in the fall of 2018.  While several solutions to the problem already exist, they often force students into a set of test cases with rigid conditions for "pass" and "fail."  While this is how professional programmers encounter testing (it either works or it doesn't), I don't think it works as well in an academic setting where partial credit is the norm.  

Like other auto graders, my auto grader runs students' programs against a series of tests.  However, unlike others, the actual grading is still done by a human.  For each test case, the auto grader records the results and displays them to the grader.  In doing so, the grader is able to assign partial credit for a "mostly correct" solution.  Of course, the downside is that a human must still be involved in the process; however, I find that the amount of time required drops from several hours to a few minutes.  

## Source
[View source on github](https://github.com/acarteas/autograder)

## Technology
* Python 3