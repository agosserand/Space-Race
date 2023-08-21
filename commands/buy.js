const { MessageEmbed } = require('discord.js');
const Player = require('../models/Player');
const shopItems = require('../data/shopItems.json');

module.exports = {
  name: 'buy',
  description: 'Buy an item from the shop.',
  async execute(interaction) {
    const itemId = interaction.options.getInteger('item_id');
    const item = shopItems.find(i => i.id === itemId);

    if (!item) {
      return interaction.reply({ content: 'That item does not exist!', ephemeral: true });
    }

    const player = await Player.findOne({ discordID: interaction.user.id });

    if (player.fragments < item.price) {
      return interaction.reply({ content: 'You do not have enough fragments to buy this item!', ephemeral: true });
    }

    player.fragments -= item.price;

    // Add the item to the player's inventory or apply its effect
    // This is a basic example, you might need more logic based on your game's requirements
    if (item.name.includes('Pickaxe')) {
      player.inventory.pickaxe += 1;
    } else if (item.name === 'Fuel Cell') {
      player.inventory.fuelCell += 1;
    } else if (item.name === 'Spaceship Upgrade') {
      player.shipLevel += 1;
    }

    await player.save();

    const embed = new MessageEmbed()
      .setTitle('Purchase Successful!')
      .setDescription(`You bought a ${item.name} for ${item.price} fragments!`)
      .setColor('#0099ff');

    interaction.reply({ embeds: [embed] });
  },
};
