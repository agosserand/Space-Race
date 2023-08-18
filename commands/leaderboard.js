const { MessageEmbed } = require('discord.js');
const Player = require('./Player'); // Adjusted the path here

module.exports = {
  name: 'leaderboard',
  description: 'Displays the top 10 players based on fragments collected.',
  async execute(interaction) {
    // Retrieve the top 10 leaderboard data from the database
    const leaderboardData = await getTop10LeaderboardData();

    // Create an embed to display the leaderboard
    const leaderboardEmbed = new MessageEmbed()
      .setTitle('🚀 Space Race Leaderboard 🚀')
      .setDescription('Top 10 players based on fragments collected:')
      .setColor('#0099ff');

    // Add the leaderboard entries to the embed
    leaderboardData.forEach((entry, index) => {
      leaderboardEmbed.addField(`${index + 1}. ${entry.discordID}`, `Fragments: ${entry.fragments}`);
    });

    // Reply to the interaction with the embed
    await interaction.reply({ embeds: [leaderboardEmbed] });
  },
};

// Function to retrieve the top 10 leaderboard data from the database
async function getTop10LeaderboardData() {
  return await Player.find().sort({ fragments: -1 }).limit(10);
}
