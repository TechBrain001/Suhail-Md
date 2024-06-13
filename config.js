const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349052214752";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_59_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ2LFxuICAgICAgICA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDk4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM1LFxuICAgICAgICA2MixcbiAgICAgICAgMjA2LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUyLFxuICAgICAgICA3NixcbiAgICAgICAgMTE4LFxuICAgICAgICA2NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA5NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU0LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDcwLFxuICAgICAgICA1NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY0LFxuICAgICAgICA2OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDg1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyNixcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MixcbiAgICAgICAgNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNixcbiAgICAgICAgMTAxLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjksXG4gICAgICAgIDU1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAxODksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDc0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MixcbiAgICAgICAgNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtMWhtTW5MbFVmby8zdE1MZjVtOUh2QVNXeXJNRTl1c3NNM25SdWhMS0VNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNTIyMTQ3NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFCM0QyNTM3ODY1NEIyQjFBNTgzNzY1NERFRjAyOUU3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODI0MDM2M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNTIyMTQ3NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU2QTk5RTVBMkM1QUVGN0ZBMEE3RUM4QzM5MkY0MkEzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODI0MDM2M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwenFDUmZ5RlRNYWhFYlFWT1laaE5RXCIsXG4gIFwicGhvbmVJZFwiOiBcImUxODE3NTc4LTNiZmQtNGQxNy1hYTRmLThlYTUwZTc2NGY2N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICAxNSxcbiAgICAgIDE5MCxcbiAgICAgIDIyMyxcbiAgICAgIDE1MixcbiAgICAgIDE4NixcbiAgICAgIDIwOCxcbiAgICAgIDIwNCxcbiAgICAgIDI5LFxuICAgICAgMTIsXG4gICAgICAyNDMsXG4gICAgICAyMzMsXG4gICAgICAxMzksXG4gICAgICAxOTMsXG4gICAgICAxNDAsXG4gICAgICAyNyxcbiAgICAgIDIzOCxcbiAgICAgIDE1NixcbiAgICAgIDExOCxcbiAgICAgIDI0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTQsXG4gICAgICAxNDAsXG4gICAgICAyNTIsXG4gICAgICAxMyxcbiAgICAgIDE4MSxcbiAgICAgIDIyLFxuICAgICAgNDIsXG4gICAgICA3MSxcbiAgICAgIDg0LFxuICAgICAgMTAyLFxuICAgICAgMjIwLFxuICAgICAgMTU4LFxuICAgICAgNDcsXG4gICAgICAxMzcsXG4gICAgICA5OSxcbiAgICAgIDE4MSxcbiAgICAgIDE0LFxuICAgICAgNSxcbiAgICAgIDE1MSxcbiAgICAgIDIzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIUEVIS1RLSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA1MjIxNDc1MjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NDM0MDcyNTc5MjkwODozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05hRTlOOERFT0tJcWJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYXRGMVNWaUEzRzhTZkxCVWxLemhUMTk3dnk1cVdUUDhUdWRUQlBXMUJrST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSRGdJbWUvcDBoTDZQT1d2K3lHRzB1Ykl0a2tTQUxwUmduMytzbTFDLzB6N1lEMkFnYXRNWXE1eG93UkJRQjU0M1Mxa1VoSzVicHBZdGtuZmFxR09EUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHbUlNTzBKVFNncWlOOVRvbEFhbUZsaldiZlhWYWpua0syUTdaWlo5QjZ4Rk83cU1lSXNtVjE4NncyRDZxaUtkcVErdCtWSHZTMG5UWlFPSWxBOHBnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDUyMjE0NzUyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODI0MDM1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5TRVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTlNFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVFdwdG1McytuSTAvOWpnL29MdVFINGF6eldxYnBHbXEzVC9TaVB2TWtEZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDA2NDM2OTUwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgyNDAzNjMwMDVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
