const { log } = require('console')
const  os = require('os')

//info about current user
const user = os.userInfo()


//method returns the system uptime in seconds
console.log(`They system Uptime is ${os.uptime()} seconds`);

const current0S = {
    name: os.type(),
    release:os.totalmem(),
    freeMem: os.freemem(),
}
console.log(current0S)