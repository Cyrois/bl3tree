import { PASSIVE, AUGMENT, ACTION, PET } from './constants';
const newStat = (type, value, description) => {return {type, value, description}}

export default {
    equipped: {
        action1: null,
        augment1: null,
        augment2: null,
        action2: null,
        augment3: null,
        augment4: null,
    },
    doubledAgent: [
        [{
                hide: true
            },
            {
                hide: true
            },
            {
                title: "Railgun",
                type: ACTION,
                description: "This weapon fires electrified high-velocity projectiles that deal Shock Damage",
            },
            {
                hide: true
            },
            {
                hide: true
            },
        ],
        [
            {
                hide: true
            },
            {
                title: "Selfless Vengeance",
                type: PASSIVE,
                maxRanks: 5,
                description: "When reloading, lose a small bit of health to grant additional Incendiary Damage to you and allies for a period of time.",
                stats: [
                    newStat("Current Health Removed", [1.0], "+", "%"),
                ]
            },
            {
                title: "Security Bear",
                type: PASSIVE,
                maxRanks: 1,
                description: "Grants Iron Bear a bubble shield that reduces damage taken, and can be reactivated after a time.",
                stats: [
                    newStat("20% of Iron Bear Max Health added as Shields Bubble Recharge Delay", 5, "5 sec"),
                ]
            },
            {
                title: "Armored Infantry",
                type: PASSIVE,
                maxRanks: 5,
                description: "While shield is active, gain Damage Reduction and increased Gun Damage.",
                stats: [
                    newStat("Damage Reduction", 3, "+3.0%"),
                    newStat("Gun Damage", 3, "+3.0%"),
                ]
            },
            {
                hide: true
            },
        ],
        [
            {
                title: "Hell on Rails",
                type: AUGMENT,
                description: "Railgun now fires superheated rounds that deal Incendiary Damage, but drain +30% fuel per shot.",
            },
            {
                title: "Browning in Brass",
                type: PASSIVE,
                maxRanks: 5,
                description: "Kill Skill - Grants a stack of Drowning in Bass for each kill that reduces Fire Rate but increases Gun Damage for you and allies.",
                stats: [
                    newStat("Moze Fire Rate", -0.5, "+0.5% per stack"),
                    newStat("Gun Damage", 4.0, "+4.0% per stack"),
                    newStat("Max Drowning in Brass Stacks", 3, ""),
                    newStat("Drowning in Brass Duration", 15, "15 seconds"),
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
                hide: true,
            },
        ],
        [
            {
                title: "Hell on Rails",
                type: AUGMENT,
                description: "Railgun now fires superheated rounds that deal Incendiary Damage, but drain +30% fuel per shot.",
            },
            {
                hide: true,
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
                hide: true,
            },
            {
                title: "Head Count",
                type: AUGMENT,
                maxRanks: 5,
                description: "Chance for Action Skill Cooldown to be reduced when scoring a Critical Hit",
                stats: [
                    newStat("Critical Hit Damage", 4, "+4%"),
                    newStat("Handling", 17, "+17%"),
                ]
            },
        ],
        [
            {
                title: "Hell on Rails",
                type: AUGMENT,
                description: "Railgun now fires superheated rounds that deal Incendiary Damage, but drain +30% fuel per shot.",
            },
            {
                title: "Browning in Brass",
                type: PASSIVE,
                maxRanks: 5,
                description: "Kill Skill - Grants a stack of Drowning in Bass for each kill that reduces Fire Rate but increases Gun Damage for you and allies.",
                stats: [
                    newStat("Moze Fire Rate", -0.5, "+0.5% per stack"),
                    newStat("Gun Damage", 4.0, "+4.0% per stack"),
                    newStat("Max Drowning in Brass Stacks", 3, ""),
                    newStat("Drowning in Brass Duration", 15, "15 seconds"),
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
            {
                title: "Head Count",
                type: AUGMENT,
                maxRanks: 5,
                description: "Chance for Action Skill Cooldown to be reduced when scoring a Critical Hit",
                stats: [
                    newStat("Critical Hit Damage", 4, "+4%"),
                    newStat("Handling", 17, "+17%"),
                ]
            },
        ],
        [
            {
                hide: true
            },
            {
                title: "Browning in Brass",
                type: PASSIVE,
                maxRanks: 5,
                description: "Kill Skill - Grants a stack of Drowning in Bass for each kill that reduces Fire Rate but increases Gun Damage for you and allies.",
                stats: [
                    newStat("Moze Fire Rate", -0.5, "+0.5% per stack"),
                    newStat("Gun Damage", 4.0, "+4.0% per stack"),
                    newStat("Max Drowning in Brass Stacks", 3, ""),
                    newStat("Drowning in Brass Duration", 15, "15 seconds"),
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
            {
                hide: true,
            },
        ],
        [
            {
                hide: true
            },
            {
                hide: true
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
                hide: true
            },
            {
                hide: true
            },
        ],
    ],
    hitman: [
        [{
                hide: true
            },
            {
                hide: true
            },
            {
                title: "Railgun",
                type: ACTION,
                description: "This weapon fires electrified high-velocity projectiles that deal Shock Damage",
            },
            {
                hide: true
            },
            {
                hide: true
            },
        ],
        [
            {
                hide: true
            },
            {
                title: "Selfless Vengeance",
                type: PASSIVE,
                maxRanks: 5,
                description: "When reloading, lose a small bit of health to grant additional Incendiary Damage to you and allies for a period of time.",
                stats: [
                    newStat("Current Health Removed", [1.0], "+", "%"),
                ]
            },
            {
                title: "Security Bear",
                type: PASSIVE,
                maxRanks: 1,
                description: "Grants Iron Bear a bubble shield that reduces damage taken, and can be reactivated after a time.",
                stats: [
                    newStat("20% of Iron Bear Max Health added as Shields Bubble Recharge Delay", 5, "5 sec"),
                ]
            },
            {
                title: "Armored Infantry",
                type: PASSIVE,
                maxRanks: 5,
                description: "While shield is active, gain Damage Reduction and increased Gun Damage.",
                stats: [
                    newStat("Damage Reduction", 3, "+3.0%"),
                    newStat("Gun Damage", 3, "+3.0%"),
                ]
            },
            {
                hide: true
            },
        ],
        [
            {
                title: "Hell on Rails",
                type: AUGMENT,
                description: "Railgun now fires superheated rounds that deal Incendiary Damage, but drain +30% fuel per shot.",
            },
            {
                title: "Browning in Brass",
                type: PASSIVE,
                maxRanks: 5,
                description: "Kill Skill - Grants a stack of Drowning in Bass for each kill that reduces Fire Rate but increases Gun Damage for you and allies.",
                stats: [
                    newStat("Moze Fire Rate", -0.5, "+0.5% per stack"),
                    newStat("Gun Damage", 4.0, "+4.0% per stack"),
                    newStat("Max Drowning in Brass Stacks", 3, ""),
                    newStat("Drowning in Brass Duration", 15, "15 seconds"),
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
                hide: true,
            },
        ],
        [
            {
                title: "Hell on Rails",
                type: AUGMENT,
                description: "Railgun now fires superheated rounds that deal Incendiary Damage, but drain +30% fuel per shot.",
            },
            {
                hide: true,
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
                hide: true,
            },
            {
                title: "Head Count",
                type: AUGMENT,
                maxRanks: 5,
                description: "Chance for Action Skill Cooldown to be reduced when scoring a Critical Hit",
                stats: [
                    newStat("Critical Hit Damage", 4, "+4%"),
                    newStat("Handling", 17, "+17%"),
                ]
            },
        ],
        [
            {
                title: "Hell on Rails",
                type: AUGMENT,
                description: "Railgun now fires superheated rounds that deal Incendiary Damage, but drain +30% fuel per shot.",
            },
            {
                title: "Browning in Brass",
                type: PASSIVE,
                maxRanks: 5,
                description: "Kill Skill - Grants a stack of Drowning in Bass for each kill that reduces Fire Rate but increases Gun Damage for you and allies.",
                stats: [
                    newStat("Moze Fire Rate", -0.5, "+0.5% per stack"),
                    newStat("Gun Damage", 4.0, "+4.0% per stack"),
                    newStat("Max Drowning in Brass Stacks", 3, ""),
                    newStat("Drowning in Brass Duration", 15, "15 seconds"),
                ]
            },
            {
                hide: true,
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
                type: AUGMENT,
                maxRanks: 5,
                description: "Chance for Action Skill Cooldown to be reduced when scoring a Critical Hit",
                stats: [
                    newStat("Critical Hit Damage", 4, "+4%"),
                    newStat("Handling", 17, "+17%"),
                ]
            },
        ],
        [
            {
                hide: true
            },
            {
                hide: true,
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
                hide: true,
            },
            {
                hide: true,
            },
        ],
        [
            {
                hide: true
            },
            {
                hide: true
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
                hide: true
            },
            {
                hide: true
            },
        ],
    ],
    underCover: [
        [{
                hide: true
            },
            {
                hide: true
            },
            {
                title: "Railgun",
                type: ACTION,
                description: "This weapon fires electrified high-velocity projectiles that deal Shock Damage",
            },
            {
                hide: true
            },
            {
                hide: true
            },
        ],
        [
            {
                hide: true
            },
            {
                title: "Selfless Vengeance",
                type: PASSIVE,
                maxRanks: 5,
                description: "When reloading, lose a small bit of health to grant additional Incendiary Damage to you and allies for a period of time.",
                stats: [
                    newStat("Current Health Removed", [1.0], "+", "%"),
                ]
            },
            {
                title: "Security Bear",
                type: PASSIVE,
                maxRanks: 1,
                description: "Grants Iron Bear a bubble shield that reduces damage taken, and can be reactivated after a time.",
                stats: [
                    newStat("20% of Iron Bear Max Health added as Shields Bubble Recharge Delay", 5, "5 sec"),
                ]
            },
            {
                title: "Armored Infantry",
                type: PASSIVE,
                maxRanks: 5,
                description: "While shield is active, gain Damage Reduction and increased Gun Damage.",
                stats: [
                    newStat("Damage Reduction", 3, "+3.0%"),
                    newStat("Gun Damage", 3, "+3.0%"),
                ]
            },
            {
                hide: true
            },
        ],
        [
            {
                title: "Hell on Rails",
                type: AUGMENT,
                description: "Railgun now fires superheated rounds that deal Incendiary Damage, but drain +30% fuel per shot.",
            },
            {
                title: "Browning in Brass",
                type: PASSIVE,
                maxRanks: 5,
                description: "Kill Skill - Grants a stack of Drowning in Bass for each kill that reduces Fire Rate but increases Gun Damage for you and allies.",
                stats: [
                    newStat("Moze Fire Rate", -0.5, "+0.5% per stack"),
                    newStat("Gun Damage", 4.0, "+4.0% per stack"),
                    newStat("Max Drowning in Brass Stacks", 3, ""),
                    newStat("Drowning in Brass Duration", 15, "15 seconds"),
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
                hide: true,
            },
        ],
        [
            {
                title: "Hell on Rails",
                type: AUGMENT,
                description: "Railgun now fires superheated rounds that deal Incendiary Damage, but drain +30% fuel per shot.",
            },
            {
                hide: true,
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
                hide: true,
            },
            {
                title: "Head Count",
                type: AUGMENT,
                maxRanks: 5,
                description: "Chance for Action Skill Cooldown to be reduced when scoring a Critical Hit",
                stats: [
                    newStat("Critical Hit Damage", 4, "+4%"),
                    newStat("Handling", 17, "+17%"),
                ]
            },
        ],
        [
            {
                title: "Hell on Rails",
                type: AUGMENT,
                description: "Railgun now fires superheated rounds that deal Incendiary Damage, but drain +30% fuel per shot.",
            },
            {
                title: "Browning in Brass",
                type: PASSIVE,
                maxRanks: 5,
                description: "Kill Skill - Grants a stack of Drowning in Bass for each kill that reduces Fire Rate but increases Gun Damage for you and allies.",
                stats: [
                    newStat("Moze Fire Rate", -0.5, "+0.5% per stack"),
                    newStat("Gun Damage", 4.0, "+4.0% per stack"),
                    newStat("Max Drowning in Brass Stacks", 3, ""),
                    newStat("Drowning in Brass Duration", 15, "15 seconds"),
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
            {
                title: "Head Count",
                type: AUGMENT,
                maxRanks: 5,
                description: "Chance for Action Skill Cooldown to be reduced when scoring a Critical Hit",
                stats: [
                    newStat("Critical Hit Damage", 4, "+4%"),
                    newStat("Handling", 17, "+17%"),
                ]
            },
        ],
        [
            {
                hide: true
            },
            {
                title: "Browning in Brass",
                type: PASSIVE,
                maxRanks: 5,
                description: "Kill Skill - Grants a stack of Drowning in Bass for each kill that reduces Fire Rate but increases Gun Damage for you and allies.",
                stats: [
                    newStat("Moze Fire Rate", -0.5, "+0.5% per stack"),
                    newStat("Gun Damage", 4.0, "+4.0% per stack"),
                    newStat("Max Drowning in Brass Stacks", 3, ""),
                    newStat("Drowning in Brass Duration", 15, "15 seconds"),
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
            {
                hide: true,
            },
        ],
        [
            {
                hide: true
            },
            {
                hide: true
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
                hide: true
            },
            {
                hide: true
            },
        ],
    ],

}