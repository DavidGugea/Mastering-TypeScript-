# Mastering TypeScript by Nathan Rozentals

## 1. Up and Running Quickly
## 2. Exploring the TypeSystem
## 3. Interfaces, Classes, Inheritance, and Modules
## 4. Generics and Advanced Type Inference
## 5. Asynchronous Language Features
## 6. Decorators
## 7. Integration with JavaScript
## 8. Strict Compiler Options
## 9. Using Observables to Transform Data
## 10. Test-Driven Development
## 11. Angular
## 12. React
## 13. Vue
## 14. Node and Express
## 15. An AWS Serverless API
## 16. Micro Front-ends

---
---

# 1. Up and Running Quickly

\-

# 2. Exploring the TypeSystem

\-

# 3. Interfaces, Classes, Inheritance, and Modules

\-

## 4. Generics and Advanced Type Inference

\-

## 5. Asynchronous Language Features

\-

## 6. Decorators

\-

## 7. Integration with JavaScript

\-

## 8. Strict Compiler Options

\-

## 9. Using Observables to Transform Data

\-

## 10. Test-Driven Development

## The testing paradigm
Test-driven development (TDD) is really a way of thinking, or a paradigm if you like, that should be baked into any standard development process. This paradigm starts with tests and drives the momentum of a piece of production code through these tests. TDD means asking the question "How do I know that I have solved the problem?", instead of just "How do I solve the problem?". This is an important idea to grasp. We write code in order to solve a problem, but we should also be able to prove that we have solved the problem through the use of automated tests.

The basic steps of a test-driven approach are as follows:

* Write a test that fails.
* Run the test to ensure that it fails.
* Write code to make the test pass.
* Run the test to see that it now passes.
* Run all tests to see that the new code does not break other tests.
* Repeat.

Using TDD is really a mindset. Some developers follow this approach and write tests first, while others write their code and their tests afterward. Then, there are some that don't write tests at all. If you fall into the last category, then hopefully the techniques presented in this chapter will help you to get started in the right direction.

There are so many excuses out there for not writing unit tests. Things such as "the test framework was not in our original quote," or "it will add 20% to the development time," or "the tests are outdated, so we don't run them anymore." The truth is, though, that in this day and age, we cannot afford not to write unit tests. Applications grow in size and complexity, and requirements change over time. An application that has a good suite of tests can be modified far more quickly, and will be more resilient to future requirement changes than one that does not have tests. This is when the real cost savings of unit testing becomes apparent. By writing unit tests for your application, you are future-proofing it, and ensuring that any change to the code base over time does not break existing functionality.

We also want to write applications that stand the test of time. The code we write now could be in a production environment for years to come, which means that sometimes, you will need to make enhancements or bug fixes to code that was written years ago. Tests can also help to explain a piece of code, as well as the limitations put on allowed ranges for variables, or under exactly which circumstances a particular piece of code will execute.

Ideally, our tests should run within a Continuous Integration, or CI, environment. This means that as soon as we check a piece of code into source control, a CI server will extract the latest version, build it from scratch, and run all of the tests for the code in an automated fashion. Having a suite of tests will not really help unless they are run regularly, and having a CI server run automated tests on every check-in will ensure that our checked-in code always passes all of our tests.

## Unit, integration and acceptance tests

Automated tests can be broken up into three general areas, or types of tests – unit tests, integration tests, and acceptance tests. We can also describe these tests as either black-box or white-box tests. White-box tests are where the internal logic or structure of the code are known to the tester. Black-box tests, on the other hand, are tests where the internal design or logic are not known to the tester.

## Unit tests

A unit test is typically a white-box test where all of the external interfaces to a block of code are mocked or stubbed out. If we are testing some code that does an asynchronous call to load a block of JSON, for example, unit testing of this code would require mocking out the returned JSON. This technique ensures that the object under test is always given a known set of data. When new requirements come along, this known set of data can grow and expand, of course. Objects under test should be designed to interact with interfaces, so that those interfaces can be easily mocked or stubbed in a unit test scenario.

## Integration tests

Integration tests are another form of white-box tests that allow the object under test to run in an environment close to how it would look in a real deployment. In our earlier example, where some code needs to do an asynchronous call to load a block of JSON data, an integration test would need to actually call the REST services that generated the JSON. If this REST service relied upon data from a database, then the integration test would need data in the database that matched the integration test scenario. If we were to describe a unit test as having a boundary around the object under test, then an integration test is an expansion of this boundary to include dependent objects or services.

Building automated integration tests for your applications will improve the quality of your product immensely. Consider the case for the scenario we have been discussing – where a block of code calls a REST service for some JSON data. Someone could easily change the structure of the JSON data that the REST service returns. Our unit tests would still pass, as they are not actually calling the REST service, but our application would be broken because the returned JSON is not what we are expecting.

Without integration tests, these types of errors will only be picked up in the later stages of manual testing, or possibly only in production. The later a failure in our system is identified, the more expensive it is to fix.

## Acceptance tests

Acceptance tests are black-box tests and are generally scenario-based. They may incorporate multiple user screens or user interactions in order to pass. Although these tests are generally carried out by a testing team, they can be automated fairly easily with the wealth of modern testing tools that are readily available.

Automating acceptance testing is really the holy grail of the testing tree. Humans can easily make mistakes and using a testing team to repeatedly run hundreds of acceptance tests is not always reliable, is expensive, and takes a long time. Computers are very good at doing repetitive tasks over and over again, and they can also do them faster than humans. Having an automated acceptance test suite the runs overnight, for example, can give the development team early access to any test failures, which will reduce costs immensely. Having a full suite of automated acceptance tests also proves that the application works, and that new features have not inadvertently broken older ones

## 11. Angular

\-

## 12. React
\-
