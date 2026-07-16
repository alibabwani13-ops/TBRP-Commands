require("dotenv").config();

const {
    Client,
    GatewayIntentBits,
    EmbedBuilder,
    ActionRowBuilder,
    StringSelectMenuBuilder,
    Events
} = require("discord.js");

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

const BANNER_URL = "YOUR_BANNER_URL";


client.once(Events.ClientReady, async () => {
    console.log(`${client.user.tag} is online!`);

    const channel = await client.channels.fetch("1519440480490750035");

    const embed = new EmbedBuilder()
        .setColor("#1E90FF")
        .setImage("https://cdn.discordapp.com/attachments/1519211423329292350/1527136981463601213/2E938977-BA25-485C-BBF4-C5DC3D9D0A48.png?ex=6a5990a5&is=6a583f25&hm=9c3b6d61e0057219d6a43c5462f166ecd9d92d16892103fe7d48d13549f1ad16&")
        .setTitle("👑 Tampa Bay Roleplay")
        .setDescription(`
We ask all community members to review these regulations carefully, as every member is expected to know and follow them.

The **Tampa Bay Roleplay Staff Team** expects all members to adhere to these rules and help maintain a professional, realistic, and enjoyable roleplay experience for everyone.

━━━━━━━━━━━━━━━━━━━━━━━━━━
Select a category below to view the regulations.
`)
        .setFooter({
            text: "Tampa Bay Roleplay • Excellence Through Roleplay"
        });


    const menu = new StringSelectMenuBuilder()
        .setCustomId("tbrp_info")
        .setPlaceholder("📘 Make a Selection")
        .addOptions(
            {
                label: "Discord Regulations",
                description: "View Discord server regulations.",
                value: "discord",
                emoji: {
                    id: "1527150384270020729"
                }
            },
            {
                label: "In-game Regulations",
                description: "View ERLC in-game regulations.",
                value: "ingame",
                emoji: {
                    id: "1527150701363466250"
                }
            },
            {
                label: "Restricted Roleplays",
                description: "View restricted roleplay rules.",
                value: "restricted",
                emoji: {
                    id: "1527150582052163694"
                }
            }
        );


    const row = new ActionRowBuilder()
        .addComponents(menu);


    await channel.send({
        embeds: [embed],
        components: [row]
    });
});


client.on(Events.InteractionCreate, async interaction => {

    try {

        if (!interaction.isStringSelectMenu()) return;
        if (interaction.customId !== "tbrp_info") return;


        await interaction.deferReply({
            flags: 64
        });


console.log("Dropdown clicked:", interaction.values[0]);

        let embed;


        if (interaction.values[0] === "discord") {

            embed = new EmbedBuilder()
                .setColor("#1E90FF")
                .setTitle("📜 Discord Regulations")
                .setImage("https://cdn.discordapp.com/attachments/1519211423329292350/1527136981463601213/2E938977-BA25-485C-BBF4-C5DC3D9D0A48.png?ex=6a5990a5&is=6a583f25&hm=9c3b6d61e0057219d6a43c5462f166ecd9d92d16892103fe7d48d13549f1ad16&")
                .setDescription(`
**R.1 | Respect**
Respect all members. No bullying, harassment, or slurs.

**R.2 | Common Sense**
Use common sense. No threats toward members.

**R.3 | Language**
Keep profanity limited. No offensive language or bypassing filters.

**R.4 | Languages**
English only in public channels.

**R.5 | Drama**
Do not start or engage in drama.

**R.6 | Alternate Accounts**
Alt accounts are not allowed.

**R.7 | Gore & Shock Media**
No disturbing images or graphic content.

**R.8 | NSFW**
No NSFW content or inappropriate discussions.

**R.9 | Nicknames**
Nickname must match your Roblox username.

**R.10 | Advertising**
No advertising without approval.

**R.11 | Staff Impersonation**
Do not impersonate staff.

**R.12 | Arguments**
Keep conversations respectful.

**R.13 | Chain of Command**
Do not ping Foundation Team without reason.

**R.14 | Background Noise**
Keep VC noise low.

**R.15 | Mic Clicks**
No excessive microphone clicks.
`);
        }


        if (interaction.values[0] === "ingame") {

            embed = new EmbedBuilder()
                .setColor("#1E90FF")
                .setTitle("🎮 In-Game Regulations")
                .setImage("https://cdn.discordapp.com/attachments/1519211423329292350/1527136981463601213/2E938977-BA25-485C-BBF4-C5DC3D9D0A48.png?ex=6a5990a5&is=6a583f25&hm=9c3b6d61e0057219d6a43c5462f166ecd9d92d16892103fe7d48d13549f1ad16&")
                .setDescription(`
**R.1 | Realistic Roleplay**
Maintain realistic actions and behavior.

**R.2 | FailRP**
Unrealistic actions that break roleplay are prohibited.

**R.3 | RDM**
No random attacks without a valid reason.

**R.4 | VDM**
No using vehicles to harm players.

**R.5 | FearRP**
Value your character's life.

**R.6 | Metagaming**
Do not use outside information.

**R.7 | Powergaming**
Do not force actions onto others.

**R.8 | Random Arrests**
Arrests need a valid reason.

**R.9 | Scene Disruption**
Do not ruin active scenes.

**R.10 | Exploiting**
No glitches or unfair advantages.

**R.11 | Professionalism**
Keep roleplay realistic and respectful.
`);
        }
        if (interaction.values[0] === "restricted") {

            embed = new EmbedBuilder()
                .setColor("#1E90FF")
                .setTitle("🚫 Restricted Roleplays")
                .setImage("https://cdn.discordapp.com/attachments/1519211423329292350/1527136981463601213/2E938977-BA25-485C-BBF4-C5DC3D9D0A48.png?ex=6a5990a5&is=6a583f25&hm=9c3b6d61e0057219d6a43c5462f166ecd9d92d16892103fe7d48d13549f1ad16&")
                .setDescription(`
**R.1 | Sexual Roleplay**
Any sexual, inappropriate, or suggestive roleplay is prohibited.

**R.2 | Bomb Roleplay**
Bomb threats, explosive scenarios, or related roleplay are not allowed.

**R.3 | Discrimination Roleplay**
Racism, hate speech, or discrimination roleplay is prohibited.

**R.4 | Suicide Roleplay**
Self-harm or suicide-related roleplay is not allowed.

**R.5 | I.C.E. Roleplay**
Immigration enforcement roleplay requires staff approval.

**R.6 | Terrorist Roleplay**
Terrorism-related scenarios are prohibited.

**R.7 | Animal Roleplay**
Unrealistic animal roleplay is prohibited.

**R.8 | Mass Casualty Roleplay**
Large-scale disaster roleplay requires staff approval.

**R.9 | Hostage Situations**
Hostage situations must follow server guidelines.

**R.10 | Government/Federal Roleplay**
Restricted government scenarios require authorization.

**R.11 | Trolling Roleplay**
Do not use roleplay to ruin other people's experiences.

**R.12 | Unrealistic Roleplay**
All roleplay must remain realistic.

**R.13 | Staff Authority**
Staff may stop any restricted roleplay.

**R.14 | Community Standards**
Keep all roleplay professional and enjoyable.
`);
        }


        await interaction.editReply({
            embeds: [embed]
        });


    } catch (error) {

        console.error(error);

        if (!interaction.replied && !interaction.deferred) {
            await interaction.reply({
                content: "❌ An error occurred.",
                ephemeral: true
            });
        }
    }
});


client.login(process.env.TOKEN);