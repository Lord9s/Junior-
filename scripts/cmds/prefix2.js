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
 if (event.body && event.body.toLowerCase() === "prefix2","jnr","bot","jayden") {
 return message.reply({
 body: `🤡𝑱𝒖𝒏𝒊𝒐𝒓 𝑺𝒚𝒔𝒕𝒆𝒎😶‍🌫️𝑷𝒓𝒆𝒇𝒊𝒙🤡:↠%1↞\n●▬▬▬▬▬▬๑۩۩๑▬▬▬▬▬▬●\n🖤👽𝑷𝒂𝒓𝒕 𝑻𝒊𝒎𝒆 𝒑𝒓𝒆𝒇𝒊𝒙🖤:⇨%2⇦\n●▬▬▬▬▬▬๑۩۩๑▬▬▬▬▬▬●\n☘𝑀𝑌 𝐶𝑅𝐸𝐴𝑇𝑂𝑅☘\n●▬▬▬▬▬▬๑۩۩๑▬▬▬▬▬▬●\n🥷𝑳𝒐𝒓𝒅 𝑲𝒊𝒏𝒈 𝑱𝒖𝒏𝒊𝒐𝒓🥷\n●▬▬▬▬▬▬๑۩۩๑▬▬▬▬▬▬●\n🙋🙆𝘵𝘺𝘱𝘦 %1𝘩𝘦𝘭𝘱 𝘵𝘰 𝘴𝘦𝘦 𝘢𝘭𝘭 𝘮𝘺 𝘤𝘰𝘮𝘮𝘢𝘯𝘥𝘴🙆🙋`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/RgUibvr.jpeg")
 });
 }
 }
}
