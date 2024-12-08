module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "Lord king",// don't change this credit
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "system",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `🎯𝐏𝐑𝐄𝐅𝐈𝐗👻𝐒𝐇𝐈𝐒𝐔𝐈🎯:↠%1↞\n●▬▬▬▬▬▬๑۩۩๑▬▬▬▬▬▬●\n🖤𝐔𝐂𝐇𝐈𝐖𝐀👽𝐒𝐘𝐒𝐓𝐄𝐌🖤:⇨%2⇦\n●▬▬▬▬▬▬๑۩۩๑▬▬▬▬▬▬●\n🏁☘𝑀𝑌 𝐶𝑅𝐸𝐴𝑇𝑂𝑅☘🏁\n●▬▬▬▬▬▬๑۩۩๑▬▬▬▬▬▬●\n🥷𝐔𝐂𝐇𝐈𝐖𝐀 𝐅𝐀𝐌𝐈𝐋𝐘🥷\n●▬▬▬▬▬▬๑۩۩๑▬▬▬▬▬▬●\n👷✨𝘵𝘺𝘱𝘦 %1𝘩𝘦𝘭𝘱 𝘵𝘰 𝘴𝘦𝘦 𝘢𝘭𝘭 𝘮𝘺 𝘤𝘰𝘮𝘮𝘢𝘯𝘥𝘴✨👷`,
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/By078j8/image.gif")
 });
 }
 }
}
