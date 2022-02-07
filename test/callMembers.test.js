const {
    callMembers

  } = require('../index.js')


  describe("callMembers", () => {

    describe("init", () => {

      it("should return array of qustions if the input is not blank", () => {
  
        callMembers("Team Manger").then((results)=>{
          expect(results).toBe([]);
       
        })
  
      
      })
  
    })


  })

