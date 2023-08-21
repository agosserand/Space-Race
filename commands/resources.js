// File: commands/resources.js

const { MessageEmbed } = require('discord.js');
const Player = require('../models/Player');

module.exports = {
  name: 'resources',
  description: 'Gather resources.',
  async execute(message, args) {
    // Retrieve the player's data from the database
    const player = await Player.findOne({ discordID: message.author.id });

    // Check if the player has a pickaxe
    if (player.inventory.pickaxe <= 0) {
      return message.reply('You need a pickaxe to gather resources!');
    }

    // Determine the amount of resources gathered
    const resourcesGathered = getRandomResources();

    // Update the player's fragments
    player.fragments += resourcesGathered;

    // Decrease the pickaxe durability
    player.inventory.pickaxe -= 1;

    // Save the updated player data
    await player.save();

    // Create an embed to display the resources gathered
    const resourcesEmbed = new MessageEmbed()
      .setTitle('🪨 Resources Gathered 🪨')
      .setDescription(`You gathered ${resourcesGathered} fragments!`)
      .setColor('#0099ff');

    // Send the embed to the channel
    message.channel.send({ embeds: [resourcesEmbed] });
  },
};

// Function to determine the amount of resources gathered (you can customize this logic)
function getRandomResources() {
  return Math.floor(Math.random() * (30 - 15 + 1)) + 15; // Random number
}