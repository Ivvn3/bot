global.owner = ['6285729882220']  
global.mods = ['6282193222977'] 
global.prems = ['6282193222977']
global.nameowner = 'Enuxch.'
global.numberowner = '6285729882220' 
global.mail = 'ibnuakbar298@gmail.com ' 
global.gc = 'https://chat.whatsapp.com/KUqxC8yMi587oTJUnftHlG'
global.instagram = 'https://instagram.com/apbnu_'
global.wm = '© IvnuGanz'
global.wait = '_*Antosan Sakedap...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp IvnuGanz'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//

global.btc = 'daftar dulu' 

//Daftar terlebih dahulu https://api.botcahx.live

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//

global.lann = 'daftar'


//Daftar https://api.betabotz.org 

global.APIs = {   

  btc: 'https://api.botcahx.live'


}

global.APIKeys = { 

  'https://api.botcahx.live': 'daftar dulu' 

}

//


let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
