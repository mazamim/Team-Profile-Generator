const inquirer = require("inquirer");
const fs = require("fs");
const path=require('path')
const displayStartUP = require("./util/startup.js");
const createHtml=require('./util/genrateHtml.js')
const {emptyInput,emailVerification,phoneVerification}=require('./util/validation.js')


function returnQuestionArray(memberType){

return ( questions=
[
  {
    type: "input",
    name: `${memberType}_name`,
    message: `What is the ${memberType}’s name?`,
    validate: emptyInput,
  },
  {
    type: "input",
    name: `${memberType}_id`,
    message: `What is the ${memberType}’s id?`,
    validate: emptyInput
  },
  {
    type: "input",
    name: `${memberType}_email`,
    message: `What is the ${memberType}’s email?`,
    validate: emailVerification
  },

  {
    type: "rawlist",
    name: "members",
    message: "Which type of team member would you like to add?",
    choices: [
      "Engineer",
      "Intern",
      new inquirer.Separator(),
      "I dont want to add any team members",
    ]
  }
])


}





displayStartUP();

Array.prototype.insert = function ( index, item ) {
  this.splice( index, 0, item );
}

async function callMembers(memberType) {

  if (memberType === ''|| memberType===null){
      console.log('Member type cannot be blank..')
      error= new Error('Member type cannot be blank..')
      return error
  }

  const additionalTeamMangerQuestion=
    {
      type: "input",
      name: `${memberType}_office_num`,
      message: `What is the ${memberType}'s office number?`,
      validate: phoneVerification
    }

    const additionalEngineerMangerQuestion=
    {
      type: "input",
      name: `${memberType}_github`,
      message: `What is the ${memberType}'s github accountr?`,
      validate: emptyInput
    }

    const additionalinternQuestion=
    {
      type: "input",
      name: `${memberType}_school`,
      message: `What is the ${memberType}'s school name?`,
      validate: emptyInput
    }
  

  const clonedQuestion = returnQuestionArray(memberType)
  if (memberType==='Engineer'){
     clonedQuestion.insert(3, additionalEngineerMangerQuestion);
  }

  if (memberType==='Intern'){
    clonedQuestion.insert(3, additionalinternQuestion);
 }

 if (memberType==='Team_Manager'){
  clonedQuestion.insert(3, additionalTeamMangerQuestion);
}
 
  const answer = await inquirer.prompt(clonedQuestion);

  return answer;
}


async function htmlCreater() {
  var members = [];
  runFirst = true;
  isRequired = true;
  let mem;
  while (true) {
    if (runFirst) {
      mem = "Team_Manager";
    }

    const response = await callMembers(mem);

    if (response.members === "I dont want to add any team members") {
      members.push(response);
      // const main = members.shift();
      // main.members = members;
      isRequired = false;
    
      const content = createHtml(members);
      writeToFile('index.html', content)
      require('child_process').exec(`start "" ${path.join(__dirname,"index.html")}`);
      break;
    } else {
      mem = response.members;
      members.push(response);
      runFirst = false;
    }
  }
}



function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    console.log(error);
  });
}

htmlCreater();

module.exports={callMembers,htmlCreater}
