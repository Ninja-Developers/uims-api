const checkLogin = require('./session')

class UimsApi{
    constructor() {

    }
    
     /**
     * 
     * @param {*} param
     * @returns true or false  
     */

    async login({uid,password}){
        let url = await checkLogin({uid,password})
        let regex = new RegExp('https://uims.cuchd.in/uims/Login.aspx?')

        if(regex.test(url)){
            return false
        }

        return true
    }
}

module.exports = UimsApi
