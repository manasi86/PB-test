# PB-test

Steps to start with project 

1. Download node from https://nodejs.org/en/download/

2. git clone the project. 

3. in terminal, go to the project folder 'PR -test'.

4.` npm install `         ( it will instll all dependencies for the project)

5.`npm run cy:open `      ( it will open the cypress runner to run tests)

6. create a cypress.env.json file and enter value in following syntax:
 `  {
   "url": "",
   "username": "",
   "pass": """,
   "email": "",
   "password" : ""
   }`


**Code Description** : 

**Cypress Custom commands**

I have created few custom commands in Cypress as they have been widely used:

*visitURLUsingAuthentication()*

*visitURLUsingHref(href:any)*

*getElementByClass(selector: string)*

*getElementByDataTestId(selector: string)*

*closeCookiesBanner()*

*getElementById(selector: string)*


**I have separated the tests in 4 different suites based on the link name in navigation header.** Each test suite has
a spec.ts file. 

In utils folder, Helper files have been created for each and every page and contains functions only related to 
the page visited. 

I have made sure final assertions are visible in test case. 


Obstacles: 
 - Getting elements using class name or frequent use of parent & child elements is not a good practise. But I have 
no other way because dats-testid were not used for the elements. These tests cases will be flaky if location of few elements changes. 
 - Some of the text matching assertions were diificult due to use of multiple &nbsp; after the text or with multiple
spaces before and after text. 


