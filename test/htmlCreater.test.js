const {
    htmlCreater,
    callMembers

  } = require('../index.js')

  describe("htmlCreater", () => {

    describe("init", () => {

        it("Check loop function if members.choice==='I dont want to add any team members'", () => {
  
            callMembers('Team Manager').then((answer)=>{

            answer.members='I dont want to add any team members'
                htmlCreater().then((results)=>{
                    
                    expect(results).toBe([]);
                 
                  })

            })
          
          
          })

    })

  })