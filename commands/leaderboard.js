// File: commands/leaderboard.js

const { MessageEmbed } = require('discord.js');
const Player = require('../models/Player');  // Ensure this path is correct based on your project structure

module.exports = {
  name: 'leaderboard',
  description: 'Displays the top 10 players based on fragments collected.',
  
  async execute(interaction) {
    try {
      // Retrieve the top 10 leaderboard data from the database
      const leaderboardData = await Player.find().sort({ fragments: -1 }).limit(10);

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

    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      await interaction.reply({ content: 'There was an error while fetching the leaderboard!', ephemeral: true });
    }
  },
};
