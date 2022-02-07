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

      it("should return error message as 'Member type cannot be blank..' if the parameter is empty", () => {
  
        callMembers("")
        .then((results)=>{ })
        .catch((error)=>{ 
            expect(error).toBe('Member type cannot be blank..')
        })
      
      })


      it("should return error message as 'Member type cannot be blank..' if the parameter is empty", () => {
  
        callMembers()
        .then((results)=>{ })
        .catch((error)=>{ 
            expect(error).toBe('Member type cannot be blank..')
        })
      
      })
  
    })


  })

