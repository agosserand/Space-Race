const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'Space Shop',
  description: 'Displays the space marketplace',
  async execute(message) {
    const spaceshipArt = `

    `;

    const embed = new MessageEmbed()
      .setTitle('Space Shop')
      .setDescription(spaceshipArt + '\nWelcome to the Space Shop! Here you can buy various items and upgrades using fragments 🪨F.')
      .addField('Fuel Cells', `100 🪨F`, true)
      .addField('Pickaxe', `50 🪨F`, true)
      .addField('Payload System Level 1', `500 🪨F`, true)
      .addField('Payload System Level 2', `2000 🪨F`, true)
      .addField('Payload System Level 3', `4500 🪨F`, true)
      .addField('Payload System Level 4', `9000 🪨F`, true)
      .addField('Cosmetics', 'Stickers, flames, camos, etc.', false)
      .addField('Pet on the Ship', '5000 🪨F', true)
      .setFooter('Use /buy <item> to purchase an item.')
      .setColor('#0099ff');

    // Attach the image to the message
    const attachment = new Discord.MessageAttachment('path_to_your_image.png'); // Replace 'path_to_your_image.png' with the path to your local image
    embed.setImage('attachment://path_to_your_image.png'); // Use the same path as above

    message.channel.send({ embeds: [embed], files: [attachment] });
  },
};
