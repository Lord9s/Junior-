
module.exports = {
  config: {
    name: "join2",
    aliases: ['lord2s', 'jnr'],
    version: "1.0",
    author: "Lord King",
    countDown: 5,
    role: 2,
    shortDescription: {
      en: "Add user to support group",
    },
    longDescription: {
      en: "This command adds the user to the group where the bot exists",
    },
    category: "owner",
    guide: {
      en: "To use this command, simply type !join <threadID>.",
    },
  },

  onStart: async function ({ api, args, message, event, Users }) {
    const ownerId = "61560050885709"; // Replace with your bot owner's Facebook ID

    const supportGroupId = args[0];
    if (!supportGroupId) {
      api.sendMessage("Veuillez ajouter l'ID du groupe.....🔴.", event.threadID);
      return;
    }

    const threadID = event.threadID;
    const userID = event.senderID;

    // Owner check
    if (userID !== ownerId) {
      try {
        const userInfo = await Users.getData(userID);
        const userName = userInfo.name;
        const facebookLink = `https://www.facebook.com/${userID}`;
        api.sendMessage(`Commande "join" utilisée par un utilisateur non autorisé : ${userName} (${facebookLink})`, ownerId);
      } catch (err) {
        console.error("Error fetching user info:", err);
        api.sendMessage(`Commande "join" utilisée par un utilisateur non autorisé (erreur lors de la récupération des informations utilisateur)`, ownerId);
      }
      return;
    }

    try {
      const threadInfo = await api.getThreadInfo(supportGroupId);
      const participantIDs = threadInfo.participantIDs;
      if (participantIDs.includes(userID)) {
        api.sendMessage(
          "Boss.....vous êtes déjà dans le groupe🍀Vérifiez votre boîte de message.....🍷",
          threadID
        );
      } else {
        api.addUserToGroup(userID, supportGroupId, (err) => {
          if (err) {
            console.error("🔴| Failed to add user to support group:", err);
            api.sendMessage("Groupe introuvable......🙅Veuillez m'ajouter puis réessayer...🍷", threadID);
          } else {
            api.sendMessage(
              "Boss....vous avez été ajouté au groupe🔴.",
              threadID
            );
          }
        });
      }
    } catch (error) {
      console.error("Error interacting with group:", error);
      api.sendMessage("Une erreur s'est produite lors de l'interaction avec le groupe.", threadID);
    }
  },
};
