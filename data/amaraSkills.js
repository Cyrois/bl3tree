import { PASSIVE, AUGMENT, ACTION, PET } from './constants';
const newStat = (type, value, description) => {return {type, value, description}}

export default {
    equipped: {
        action1: null,
        augment1: null,
        action2: null,
        augment2: null,
    },
    hunter: [
        [{
                hide: true
            },
            {
                hide: true
            },
            {
                title: "Railgun",
                type: "action",
                description: "",
            },
            {
                hide: true
            },
            {
                hide: true
            },
        ],
        [{
                hide: true
            },
            {
                title: "Interplanetary Stalker",
                type: PASSIVE,
                maxRanks: 5,
                description: "Hunter Kill Skill: Gains a stack of Interplanetary Stalker when an enemy is killed, which gives a bonus to all damage dealt. Gains a unique stacking bonus depending on the type of enemy killed.",
                stats: [
                    newStat("Damage", 2, "2+% /stack", ),
                    newStat("Human Bonus", 3, "+3 Action Skill Damage /stack", ),
                    newStat("Robot Bonus", 1.5, "+1.5% Corrosive Damage/Stack"),
                    newStat("Beast Bonus", 2, "+2% Movement Speed /stack"),
                ]
            },
            {
                title: "Leave No Trace",
                type: PASSIVE,
                maxRanks: 3,
                description: "After scoring a critical hit, chance for 1 ammo to be added to magazine.",
                stats: [
                    newStat("Chance to add ammo", 12, "+12%"),
                ]
            },
            {
                title: "Second Intention",
                type: PASSIVE,
                maxRanks: 5,
                description: "Hunter Kill Skill: Gain increased reload speed when an enemy is killed, bonus increases if critical kill",
                stats: [
                    newStat("Reload Speed", 3, "+3%"),
                    newStat("Critical Kill Reload Speed", 6, "+6%"),
                    newStat("Critical Kill Reload", 5, "5 seconds"),
                ]
            },
            {
                hide: true
            },
        ],
        [{
                title: "Rakk Open a Cold One",
                type: "augment",
                description: "Converts Rakk damage to Cryo Damage",
            },
            {
                title: "Hunter's Eye",
                type: PASSIVE,
                maxRanks: 5,
                description: "Gain bonuses when fighting different types of enemies",
                stats: [
                    newStat("Critical Hit Damage", 3, "+3% vs. Humans"),
                    newStat("Armor Damage", 6, "+6% vs. Robots"),
                    newStat("Damage Reduction", 5, "+5% vs. Beasts"),
                ]
            },
            {
                title: "Head Count",
                type: PASSIVE,
                maxRanks: 3,
                description: "Chance for Action Skill Cooldown to be reduced when scoring a Critical Hit",
                stats: [
                    newStat("Critical Hit Damage", 3, "% vs. Humans"),
                    newStat("Cooldown Time Reduction Chance", 10, "+10%"),
                    newStat("Cooldown Time", -2, "-2s"),
                ]
            },
            {
                title: "Head Count",
                type: PASSIVE,
                maxRanks: 5,
                description: "Chance for Action Skill Cooldown to be reduced when scoring a Critical Hit",
                stats: [
                    newStat("Critical Hit Damage", 4, "+4%"),
                    newStat("Handling", 17, "+17%"),
                ]
            },
            {
                title: "Head Count",
                type: PASSIVE,
                maxRanks: 5,
                description: "Chance for Action Skill Cooldown to be reduced when scoring a Critical Hit",
                stats: [
                    newStat("Critical Hit Damage", 4, "+4%"),
                    newStat("Handling", 17, "+17%"),
                ]
            },
        ],
        [{},
            {
                hide: true
            },
            {
                title: "Sic'em"
            },
            {
                title: "Furious Attack"
            },
            {},
        ],
        [{},
            {
                title: "Self-Repairing System"
            },
            {
                hide: true
            },
            {
                title: "Furious Attack"
            },
            {},
        ],
        [{},
            {
                hide: true
            },
            {
                title: "Sic'em"
            },
            {
                hide: true
            },
            {
                hide: true
            },
        ],
        [{
                hide: true
            },
            {
                hide: true
            },
            {
                title: "Sic'em"
            },
            {
                hide: true
            },
            {
                hide: true
            },
        ],
    ],
    red: [

    ],
    blue: [

    ],

}