const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'List all available commands and provide information about the game.',
  execute(message) {
    const embed = new MessageEmbed()
      .setTitle('Space Race Game Help')
      .setDescription('Welcome to Space Race! Here are the available commands:')
      .addField('/start', 'Start a space trip.')
      .addField('/resources', 'Gather resources.')
      .addField('/inventory', 'View your inventory.')
      .addField('/shop', 'Visit the shop.')
      .addField('/upgrade', 'Upgrade your ship.')
      .setColor('#00FF00');

    message.channel.send({ embeds: [embed] });
  },
};
