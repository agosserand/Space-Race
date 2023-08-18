const { MessageEmbed } = require('discord.js');
const cooldownManager = require('../utils/cooldownManager');
const rewards = require('../utils/rewards');

module.exports = {
    name: 'start',
    description: 'Starts a new journey and rewards fragments.',
    async execute(message, args) {
        // Check if the user is on cooldown
        if (cooldownManager.isOnCooldown(message.author.id)) {
            const remainingTime = cooldownManager.getRemainingTime(message.author.id);
            return message.reply(`You are on cooldown! Please wait ${remainingTime} seconds.`);
        }

        // Start the journey
        const embed = new MessageEmbed()
            .setTitle('Starting Journey')
            .setDescription('Your journey has begun! Wait for the results...')
            .setImage('path/to/journey/image.png'); // Path to the image for the journey
        message.channel.send({ embeds: [embed] });

        // Wait 10 seconds and send the results
        setTimeout(() => {
            const fragments = rewards.calculateFragments();
            message.channel.send(`Your journey was successful! You earned ${fragments} fragments.`);
            // Update user's fragments and cooldown
            // ...
        }, 10000);
    },
};
