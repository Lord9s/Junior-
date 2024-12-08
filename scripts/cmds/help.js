const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "━━━━━━━━━━━━━━━━\n╔╦══• •✠•☘•✠ • •══╦╗\n ʬʆʬ𝘓𝘰𝘳𝘥ʚʆɞ𝘑𝘶𝘯𝘪𝘰𝘳ʬɸʬ\n╚╩══• •✠•☘•✠ • •══╩╝"; // changing this wont change the goatbot V2 of list cmd it is just a decoyy

module.exports = {
  config: {
    name: "help",
    version: "1.17",
    author: "𝘓𝘰𝘳𝘥 𝘬𝘪𝘯𝘨", // original author jayden smith
    countDown: 0,
    role: 0,
    shortDescription: {
      en: "View command usage and list all commands directly",
    },
    longDescription: {
      en: "View command usage and list all commands directly",
    },
    category: "info",
    guide: {
      en: "{pn} / help cmdName ",
    },
    priority: 1,
  },

  onStart: async function ({ message, args, event, threadsData, role }) {
    const { threadID } = event;
    const threadData = await threadsData.get(threadID);
    const prefix = getPrefix(threadID);

    if (args.length === 0) {
      const categories = {};
      let msg = "";

      msg += `╔╦══• •✠•☘•✠ • •══╦╗\n ʬʆʬ𝘓𝘰𝘳𝘥 ʚʆɞ 𝘑𝘶𝘯𝘪𝘰𝘳ʬɸʬ\n╚╩══• •✠•☘•✠ • •══╩╝\n━━━━━━━━━━━━━━━━`; // replace with your name 

      for (const [name, value] of commands) {
        if (value.config.role > 1 && role < value.config.role) continue;

        const category = value.config.category || "𝘜𝘯𝘤𝘢𝘵𝘦𝘨𝘰𝘳𝘪𝘻𝘦𝘥";
        categories[category] = categories[category] || { commands: [] };
        categories[category].commands.push(name);
      }

      Object.keys(categories).forEach((category) => {
        if (category !== "info") {
          msg += `\n💻 💦☞${category.toUpperCase()}☜💦 💻\n`;


          const names = categories[category].commands.sort();
          for (let i = 0; i < names.length; i += 3) {
            const cmds = names.slice(i, i + 3).map((item) => `\n ☠️✨☞ 🍂${item}🍂`);
            msg += `\n ${cmds.join(" ".repeat(Math.max(1, 10 - cmds.join("").length)))}`;
          }

          msg += `\n━━━━━━━━━━━━━━━━`;
        }
      });

      const totalCommands = commands.size;
      msg += `\n𝘤𝘶𝘳𝘳𝘦𝘯𝘵 𝘣𝘰𝘵 𝘏𝘢𝘴 🏁${totalCommands} 𝘤𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘵𝘩𝘢𝘵 𝘤𝘢𝘯 𝘣𝘦 𝘶𝘴𝘦𝘥 𝘣𝘺 𝘺𝘰𝘶.\n`;
      msg += ` 𝘠𝘰𝘶 𝘤𝘢𝘯 𝘛𝘺𝘱𝘦 ${prefix}𝘩𝘦𝘭𝘱 𝘊𝘮𝘥𝘕𝘢𝘮𝘦 𝘵𝘰 𝘴𝘩𝘰𝘸 𝘵𝘩𝘦 𝘥𝘦𝘵𝘢𝘪𝘭𝘴 𝘰𝘧 𝘵𝘩𝘦 𝘤𝘰𝘮𝘮𝘢𝘯𝘥 𝘺𝘰𝘶 𝘸𝘢𝘯𝘵 𝘵𝘰 𝘴𝘦𝘦.\n`;
      msg += `\n╭──── • 👻 • ─────╮\n  𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘣𝘺 𝘓𝘰𝘳𝘥 𝘒𝘪𝘯𝘨 𝘑𝘶𝘯𝘪𝘰𝘳\n╰──── • 👻 • ─────╯`; // its not decoy so change it if you want 

      const helpListImages = [
"http://xbeta.onrender.com/qul0vqhCq.mp4", // add image link here
"http://xbeta.onrender.com/IQtgO3Von.jpg",
"http://xbeta.onrender.com/iE26Ej_6Bq.jpg",
"http://xbeta.onrender.com/c6DgIkwfC.jpg",
"http://xbeta.onrender.com/9TzARCZgQb.jpg",
"http://xbeta.onrender.com/apo2s8x3B.jpg",
"http://xbeta.onrender.com/tgB-C9pnP.jpg",
"http://xbeta.onrender.com/eo99JlzSC.jpg",
"http://xbeta.onrender.com/MxRacR8jcP.jpg",
"http://xbeta.onrender.com/A2buBrHAN.jpg",
"http://xbeta.onrender.com/jTaLJJ3FQ.jpg",
"http://xbeta.onrender.com/FKjOKnuGd.jpg",
"http://xbeta.onrender.com/tUF3UEe5H8.jpg",
"http://xbeta.onrender.com/KYBUJE58a.jpg",
"http://xbeta.onrender.com/kBeaAYj5hW.jpg",
"http://xbeta.onrender.com/QUUdbwtGz.jpg"
        // Add more image links if needed
      ];

      const helpListImage = helpListImages[Math.floor(Math.random() * helpListImages.length)];

      await message.reply({
        body: msg,
        attachment: await global.utils.getStreamFromURL(helpListImage),
      });
    } else {
      const commandName = args[0].toLowerCase();
      const command = commands.get(commandName) || commands.get(aliases.get(commandName));

      if (!command) {
        await message.reply(`𝘊𝘰𝘮𝘮𝘢𝘯𝘥 "${commandName}" 𝘕𝘰𝘵 𝘧𝘰𝘶𝘯𝘥 𝘪𝘯 𝘥𝘢𝘵𝘢 𝘣𝘢𝘴𝘦 𝘵𝘳𝘺 𝘢𝘨𝘢𝘪𝘯 𝘭𝘢𝘵𝘦𝘳 𝘪𝘧 𝘺𝘰𝘶 𝘩𝘢𝘷𝘦 𝘵𝘪𝘮𝘦 𝘰𝘳 𝘢𝘴𝘬 𝘰𝘸𝘯𝘦𝘳 𝘵𝘰 𝘢𝘥𝘥 𝘺𝘰𝘶𝘳 𝘤𝘰𝘮𝘮𝘢𝘯𝘥 𝘺𝘰𝘶 𝘸𝘢𝘯𝘵.`);
      } else {
        const configCommand = command.config;
        const roleText = roleTextToString(configCommand.role);
        const author = configCommand.author || "𝘖𝘯𝘭𝘺 𝘧𝘰𝘳 𝘍𝘢𝘮𝘪𝘭𝘭𝘺";

        const longDescription = configCommand.longDescription ? configCommand.longDescription.en || "𝘕𝘰 𝘥𝘦𝘴𝘤𝘳𝘪𝘱𝘵𝘪𝘰𝘯 𝘴𝘰 𝘵𝘳𝘺 𝘵𝘰 𝘤𝘰𝘯𝘵𝘢𝘤𝘵 𝘰𝘸𝘯𝘦𝘳" : "𝘕𝘰 𝘴𝘪𝘯𝘨𝘭𝘦 𝘥𝘦𝘴𝘤𝘳𝘪𝘱𝘵𝘪𝘰𝘯 𝘢𝘷𝘢𝘭𝘪𝘣𝘭𝘦 𝘵𝘳𝘺 𝘵𝘰 𝘨𝘶𝘴𝘴𝘦𝘴 𝘸𝘩𝘢𝘵 𝘪𝘵 𝘥𝘰𝘦𝘴 𝘰𝘳 𝘫𝘶𝘴𝘵 𝘵𝘦𝘴𝘵 𝘪𝘵";

        const guideBody = configCommand.guide?.en || "𝘛𝘩𝘦𝘳𝘦 𝘪𝘴 𝘯𝘰 𝘨𝘶𝘪𝘥𝘦 𝘢𝘷𝘢𝘪𝘭𝘦𝘣𝘭𝘦 𝘴𝘰 𝘵𝘳𝘺 𝘵𝘰 𝘤𝘰𝘯𝘵𝘢𝘤𝘵 𝘰𝘸𝘯𝘦𝘳 𝘧𝘰𝘳 𝘨𝘶𝘪𝘥𝘦.";
        const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);

        const response = `\n━━━━━𝘉𝘖𝘛━━━━━━━━\n
        ❦ঔৣ☬𝐋𝐨𝐫𝐝 𝐊𝐢𝐧𝐠☬ঔৣ❦
  ۞➪  『${configCommand.name}』
  ⍟➪ 𝙄𝙉𝙁𝙊❁
  ⁂➪  𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙩𝙞𝙤𝙣: 『${longDescription}』
  ❃➪ 𝙊𝙩𝙝𝙚𝙧 𝙣𝙖𝙢𝙚𝙨: 『${configCommand.aliases ? configCommand.aliases.join(", ") : "𝗗𝗼 𝗡𝗼𝘁 𝗛𝗮𝘃𝗲 𝗼𝘁𝗵𝗲𝗿 𝗻𝗮𝗺𝗲𝘀 𝘀𝗼𝗿𝗿𝘆"}』
  ❉➪  𝙍𝙤𝙡𝙚: 『${roleText}』
  ✬➪   𝘼𝙪𝙩𝙝𝙤𝙧: 『${author}』
  ✿➪  𝙐𝙨𝙖𝙜𝙚
  ✰➪ 『${usage}』
  \n━━━━━━━━━━━━━━━━\n 𝗢𝘄𝗻𝗲𝗿 𝗶𝘀➳ : ❦ঔৣ☬𝐋𝐨𝐫𝐝 𝐊𝐢𝐧𝐠☬ঔৣ❦
  `;

        await message.reply(response);
      }
    }
  },
};

function roleTextToString(roleText) {
  switch (roleText) {
    case 0:
      return "0 𝘦𝘷𝘦𝘳𝘺𝘰𝘯𝘦 𝘵𝘰 𝘶𝘴𝘦";
    case 1:
      return "1 𝘎𝘳𝘰𝘶𝘱 𝘢𝘥𝘮𝘪𝘯";
    case 2:
      return "2 𝘈𝘥𝘮𝘪𝘯 𝘣𝘰𝘵𝘴 ";
      case 3:
      return "3 𝘖𝘸𝘯𝘦𝘳 𝘑𝘢𝘺𝘥𝘦𝘯";
    default:
      return " 𝘖𝘯𝘭𝘺 𝘧𝘰𝘳 𝘍𝘢𝘮𝘪𝘭𝘭𝘺 ";
  }
        }
