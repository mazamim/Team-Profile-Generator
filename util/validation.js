const emptyInput = (name) => {
    if (name !== "") {
        return true;
      }
    
    else {
      console.log(`Input cant be blank`);
      return false;
    } 
     
    }
    
    
    const emailVerification=(name)=>{
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(name)) {
        return true;
      }
    
    else {
      console.log(`Not in Format`);
      return false;
    } 
    
    }
    
    const phoneVerification=(name)=>{
      if (name.match(/^\d{10}$/)) {
        return true;
      }
    
    else {
      console.log(`Not in Format`);
      return false;
    } 
    
    }

    module.exports={emptyInput,emailVerification,phoneVerification}