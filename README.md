# Team-Profile-Generator
A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.


#Table of Contents
Tasks
Installation
Usage
Credits
License
How to Contribute

#Tasks
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated


#Installation
git clone https://github.com/mazamim/Team-Profile-Generator.git
then
run npm install for dependency installation

#Usage
![1](https://user-images.githubusercontent.com/53158763/152712684-1f5e0481-9f65-4f68-af96-be6d70924e98.jpg)
![2](https://user-images.githubusercontent.com/53158763/152712695-76eee3d0-e555-4bef-bf8f-d1609dd5802e.jpg)
![3](https://user-images.githubusercontent.com/53158763/152713137-e0b40078-ed3f-49ad-bfe6-81b5d52d4fb9.jpg)


![4](https://user-images.githubusercontent.com/53158763/152713097-01a8a1dd-12c1-4845-afbf-29f9041c798e.jpg)

#Credits
🏆 inquirer https://www.npmjs.com/package/inquirer
🏆 jest https://www.npmjs.com/package/jest

#License
License: MIT

#How to Contribute
contact on mazamim91@gmail.com for contribute to this project