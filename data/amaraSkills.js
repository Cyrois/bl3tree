import { PASSIVE, AUGMENT, ACTION, ELEMENT, newStat } from './constants';

export default {
    equipped: {
        action1: null,
        augment1: null,
        action2: null,
    },
    brawl: [
        [{
                hide: true
            },
            {
                hide: true
            },
            {
                title: "Phaseslam",
                type: ACTION,
                description: "Leap into the air and slam into the ground, dealing damage to and knocking up all nearby enemies.",
				stats: [
                    newStat("Cooldown", [35], "", "seconds"),
                    newStat("Damage", [98], "", ""),
                ]
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
                title: "Root to Rise",
                type: PASSIVE,
                maxRanks: 5,
                description: "Increases Maximum Health.",
                stats: [
                    newStat("Max Health", [8,16,24,32,40], "+", "%"),
                ]
            },
            {
                title: "Personal Space",
                type: PASSIVE,
                maxRanks: 3,
                description: "Weapon shots deal bonus damage, increasing with proximity to the target.",
                stats: [
                    newStat("Bonus Damage", [12,24,36], "up to", "% of damage dealt"),
                ]
            },
            {
                title: "Clarity",
                type: PASSIVE,
                maxRanks: 5,
                description: "Constantly regenerate health. The lower her health, the more powerful the regeneration. After using an action skill, this bonus is doubled for a few seconds.",
                stats: [
                    newStat("Health Regeneration", [1,2,3,4,5], "Up to", "% of missing health per second"),
					newStat("Duration", [5,5,5,5,5], "", "seconds"),
                ]
            },
            {
                hide: true
            },
        ],
        [
            {
                hide: true,
            },
            {
                title: "Arms Deal",
                type: PASSIVE,
                maxRanks: 5,
                description: "Increase Splash Damage and take reduced Splash Damage.",
                stats: [
                    newStat("Splash Damage", [4,8,12,16,20], "+", "%"),
                    newStat("Splash Damage Reduction", [12,21,28,35,40], "+", "%"),
                ]
            },
            {
                title: "Samsara",
                type: PASSIVE,
                maxRanks: 3,
                description: "Gain 1 stack of Samsara when you deal damage to an enemy with your action skill. Each stack increases Gun Damage and Health Regeneration. Stacks decay after a few seconds.",
                stats: [
                    newStat("Gun Damage", [1.7,3.3,5], "+", "% per enemy damaged"),
                    newStat("Health Regeneration", [1.7,3.3,5], "+", "% of Max Health per second; per enemy damaged"),
                    newStat("Max Stacks", [5,5,5], "", "stacks"),
					newStat("Duration", [20,20,20], "", "seconds"),
                ]
            },
            {
                title: "Helping Hand(s)",
                type: PASSIVE,
                maxRanks: 5,
                description: "For a few seconds after using her action skill, Amara's arms remain active and grant her damage reduction.",
                stats: [
                    newStat("Damage Reduction", [12,21,28,35,40], "+", "%"),
                    newStat("Duration", [15,15,15,15,15], "", "seconds"),
                ]
            },
            {
                title: "Blight Tiger",
                type: ELEMENT,
                description: "Converts Amara's action skill to corrosive damage."
            },
        ],
        [
            {
                title: "Fracture",
                type: ACTION,
                description: "Amara summons a handful of fists that erupt from the ground, dealing damage to enemies in front of her.",
				stats: [
                    newStat("Cooldown", [28], "", "seconds"),
                    newStat("Damage", [88], "", ""),
                ]
            },
            {
                title: "Mindfulness",
                type: PASSIVE,
                maxRanks: 3,
                description: "Whenever Amara takes damage, she gains a stack of Mindfulness, improving her Shield Regeneration Delay and Movement Speed. Stacks decay after a few seconds.",
                stats: [
                    newStat("Shield Regeneration Delay", [9,17,23], "-", "%"),
                    newStat("Movement Speed", [1.4,2.8,4.2], "+", "%"),
                    newStat("Duration", [5,5,5], "", "seconds"),
					newStat("Max Stacks", [25,25,25], "", "stacks"),
                ]
            },
            {
                title: "Find Your Center",
                type: PASSIVE,
				maxRanks: 1,
                description: "Increases Melee Damage and, for a few seconds after using her action skill, increased melee range.",
                stats: [
                    newStat("Melee Damage", [100], "+", "%"),
                    newStat("Melee Range", [75], "+", "%"),
					newStat("Duration", [20], "", "seconds"),
                ]
            },
            {
                title: "Vigor",
                type: PASSIVE,
				maxRanks: 3,
                description: "Killing an enemy with Amara's action skill grants all allies increased movement speed for a few seconds.",
				stats: [
                    newStat("Team Movement Speed", [3.3,6.7,10], "+", "%"),
                    newStat("Duration", [8,8,8], "", "seconds"),
                ]
            },
            {
                title: "Revelation",
                type: AUGMENT,
                maxRanks: 5,
                description: "Action Skill now creates a Nova when it damages enemies, dealing damage to all nearby enemies.",
                stats: [
                    newStat("Action Skill Duration", [15], "-", "%"),
                    newStat("Nova Damage", [18], "", ""),
                ]
            },
        ],
        [
            {
                title: "Downfall",
                type: ACTION,
                description: "Amara leaps into the air and shoots an Elemental Beam directly below her, followed by a Slam.",
                stats: [
                    newStat("Cooldown", [47], "", "seconds"),
                    newStat("Damage", [95], "", ""),
					newStat("Beam Damage", [14], "", "per second"),
                ]
            },
            {
                hide: true
            },
            {
                title: "One with Nature",
                type: PASSIVE,
                maxRanks: 5,
                description: "Increases Max Health and Elemental Damage Resistance to her Action Skill Element.",
                stats: [
                    newStat("Max Health", [5,10,15,20,25], "+", "%"),
                    newStat("Elemental Damage Resistance", [12,21,28,35,40], "+", "%"),
                ]
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
                title: "Do unto Others",
                type: PASSIVE,
                maxRanks: 1,
                description: "Whenever an enemy damages Amara, she automatically throws an energy orb at them, dealing Action Skill Elemental Damage.",
                stats: [
                    newStat("Cooldown", [8], "", "seconds"),
                ]
            },
            {
                title: "Jab Cross",
                type: PASSIVE,
                maxRanks: 5,
                description: "Whenever dealing melee damage, gain increased Action Skill Damage and Gun Damage for a few seconds.",
                stats: [
                    newStat("Gun Damage", [3,6,9,12,15], "+", "%"),
                    newStat("Action Skill Damage", [15,30,45,60,75], "+", "%"),
					newStat("Duration", [10,10,10,10,10], "", "seconds"),
                ]
            },
            {
                title: "Guardian Angel",
                type: PASSIVE,
				maxRanks: 1,
                description: "In Fight for your Life, Amara immediately gains a Second Wind and creates an Action Skill Elemental Nova that knocks back nearby enemies.",
                stats: [
                    newStat("Revived Health", [50], "", "%"),
                    newStat("Cooldown", [120], "", "seconds"),
                ]
            },
            {
                title: "Glamour",
                type: AUGMENT,
                description: "Enemies damaged by Amara's action skill become confused and temporarily attack their allies. However, the Action Skill Cooldown will be increased. If Amara targets an enemy with Phasegrasp, enemies near the Grapsed target will be confused as well.",
                stats: [
                    newStat("Confuse Duration", [8], "", "seconds"),
                    newStat("Cooldown", [20], "+", "%"),
                    newStat("Damage", [30], "-", "%"),
                ]
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
                title: "Blitz",
                type: PASSIVE,
                maxRanks: 1,
                description: "",
                stats: [
                    newStat("Cooldown", [8], "", "seconds"),
                    newStat("Melee Damage", [100], "+", "%"),
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
    mysticalAssault: [
        [
            {
                hide: true
            },
            {
                hide: true
            },
            {
                title: "Phasecast",
                type: ACTION,
                description: "Send forward an Astral Projection of Amara.",
				stats: [
                    newStat("Cooldown", [28], "", "seconds"),
					newStat("Damage", [92], "", ""),
                ]
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
                title: "Do Harm",
                type: PASSIVE,
                maxRanks: 5,
                description: "Killing an enemy gives a stack of Rush. Activating her Action Skill consumes all Rush stacks. For every stack consumed, Amara's Action Skill Damage is temporarily increased.",
                stats: [
                    newStat("Action Skill Damage", [0.9,1.8,2.7,3.6,4.5], "+", "% per stack consumed"),
					newStat("Max Rush Stacks", [10,10,10,10,10], "", "stacks"),
					newStat("Duration", [20,20,20,20,20], "", "seconds"),
                ]
            },
            {
                title: "Fast Hands",
                type: PASSIVE,
                maxRanks: 3,
                description: "Reload Speed, Weapon Swap Speed and Mode Switch Speed improved.",
                stats: [
                    newStat("Reload Speed", [7,14,19], "+", "%"),
					newStat("Weapon Swap Speed", [16,28,36], "+", "%"),
					newStat("Mode Switch Speed", [16,28,36], "+", "%"),
                ]
            },
            {
                title: "Violent Tapestry",
                type: PASSIVE,
                maxRanks: 5,
                description: "Applying a Status Effect grants Amara a stack of Rush. Activating her action skill consumes all Rush stacks. For every stack of Rush consumed, Amara's Status Effect Chance is temporarily increased.",
                stats: [
                    newStat("Effect Chance", [0.6,1.2,1.8,2.4,3], "+", "% per stack consumed"),
                    newStat("Max stacks", [10,10,10,10,10], "", "stacks"),
					newStat("Duration", [20,20,20,20,20], "", "seconds"),
                ]
            },
            {
                hide: true
            },
        ],
        [
            {
                hide: true,
            },
            {
                title: "Alacrity",
                type: PASSIVE,
                maxRanks: 5,
                description: "Increases Reload Speed for every stack of Rush. After consuming Rush stacks, this bonus is increased for a few seconds.",
                stats: [
                    newStat("Reload Speed", [0.4,0.8,1.2,1.6,2], "+", "% per stack"),
                    newStat("Reload Speed after action skill use", [0.6,1.2,1.8,2.3,2.9], "+", "% per stack"),
                    newStat("Duration", [8,8,8,8,8], "", "seconds"),
                ]
            },
            {
                title: "Transcend",
                type: PASSIVE,
                maxRanks: 3,
                description: "Increases Accuracy and Critical Hit Damage for a few seconds after activating Amara's Action Skill.",
                stats: [
                    newStat("Accuracy", [17,29,38], "+", "%"),
                    newStat("Critical Hit Damage", [9,18,27], "+", "%"),
                    newStat("Duration", [12,12,12], "", "seconds"),
                ]
            },
            {
                title: "Restless",
                type: PASSIVE,
                maxRanks: 5,
                description: "Increases Action Skill Cooldown Rates",
                stats: [
                    newStat("Cooldown Rate", [5,10,15,20,25], "+", "%"),
                ]
            },
            {
                title: "Soul Sap",
                type: AUGMENT,
                description: "A portion of damage dealt by Amara's Action Skill is returned to her or a nearby ally as health.",
                stats: [
                    newStat("Life Steal", [30], "", "% of all skill damage dealt"),
                ]
            },
        ],
        [
            {
                title: "Deliverance",
                type: ACTION,
                description: "When Astral Projection hits an enemy, it releases homing Elemental Projectiles that trigger her Action Skill Elemental Effect on enemies.",
				stats: [
                    newStat("Elemental Projectiles", [3], "", "per enemy hit"),
					newStat("Damage", [86], "", ""),
					newStat("Cooldown", [28], "", "seconds"),
                ]
            },
            {
                hide: true,
            },
            {
                title: "Ascendant",
                type: PASSIVE,
                maxRanks: 1,
                description: "All Action Skill Augments gain increased effects.",
                stats: [
                    newStat("Soul Sap Lifesteal", [20], "+", "%"),
                    newStat("Allure Radius", [100], "+", "%"),
                    newStat("Glamour Duration", [50], "+", "%"),
					newStat("Stillness of Mind", [0.75], "Breaks", "seconds after being damaged"),
					newStat("Revelation Damage", [25], "+", "%"),
                ]
            },
            {
                hide: true,
            },
            {
                title: "Stillness of Mind",
                type: AUGMENT,
                description: "Enemies damaged by Amara's Action Skill become phaselocked until they are damaged or the duration ends. Action Skill Cooldown is increased.",
                stats: [
                    newStat("Cooldown", [15], "+", "%"),
                    newStat("Damage", [25], "-", "%"),
					newStat("Max Duration", [6], "", "seconds"),
                ]
            },
        ],
        [
            {
                title: "Reverberation",
                type: ACTION,
                description: "Increases damage dealt for every enemy Amara's Astral Projection hits.",
                stats: [
                    newStat("Damage Bonus", [50], "+", "% per enemy hit"),
                    newStat("Damage", [88], "", ""),
                    newStat("Cooldown", [30], "", "seconds"),
                ]
            },
            {
                title: "From Rest",
                type: PASSIVE,
                maxRanks: 3,
                description: "Improves Fire Rate and Charge Time.",
                stats: [
                    newStat("Fire Rate", [4,8,12], "+", "%"),
                    newStat("Charge Time", [21,34,44], "+", "%"),
                ]
            },
            {
                title: "Laid Bare",
                type: PASSIVE,
                maxRanks: 3,
                description: "Enemies take increased damage from all sources for a few seconds after being damaged by Amara's Action Skill",
                stats: [
                    newStat("Damage Increase", [8.3,16.7,25], "+", "%"),
                    newStat("Duration", [8,8,8], "", "seconds"),
                ]
            },
            {
                title: "Wrath",
                type: PASSIVE,
                maxRanks: 3,
                description: "Increases Gun Damage. This effect is increased for a few seconds after Amara's action skill.",
                stats: [
                    newStat("Gun Damage", [6.7,13.3,20], "+", "%"),
                    newStat("Gun Damage after action skill use", [6.7,13.3,20], "+", "%"),
					newStat("Duration", [8,8,8], "", "seconds"),
                ]
            },
            {
                hide: true,
            },
        ],
        [
            {
                hide: true,
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
                hide: true
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
                type: ACTION,
                description: "Chance for Action Skill Cooldown to be reduced when scoring a Critical Hit",
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
    fistOfTheElements: [
        [{
                hide: true
            },
            {
                hide: true
            },
            {
                title: "Phaseslam",
                type: ACTION,
                description: "Leap into the air and slam into the ground, dealing damage to and knocking up all nearby enemies.",
				stats: [
                    newStat("Cooldown", [35], "", "seconds"),
                    newStat("Damage", [98], "", ""),
                ]
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
                title: "Root to Rise",
                type: PASSIVE,
                maxRanks: 5,
                description: "Increases Maximum Health.",
                stats: [
                    newStat("Max Health", [8,16,24,32,40], "+", "%"),
                ]
            },
            {
                title: "Personal Space",
                type: PASSIVE,
                maxRanks: 3,
                description: "Weapon shots deal bonus damage, increasing with proximity to the target.",
                stats: [
                    newStat("Bonus Damage", [12,24,36], "up to", "% of damage dealt"),
                ]
            },
            {
                title: "Clarity",
                type: PASSIVE,
                maxRanks: 5,
                description: "Constantly regenerate health. The lower her health, the more powerful the regeneration. After using an action skill, this bonus is doubled for a few seconds.",
                stats: [
                    newStat("Health Regeneration", [1,2,3,4,5], "Up to", "% of missing health per second"),
					newStat("Duration", [5,5,5,5,5], "", "seconds"),
                ]
            },
            {
                hide: true
            },
        ],
        [
            {
                hide: true,
            },
            {
                title: "Arms Deal",
                type: PASSIVE,
                maxRanks: 5,
                description: "Increase Splash Damage and take reduced Splash Damage.",
                stats: [
                    newStat("Splash Damage", [4,8,12,16,20], "+", "%"),
                    newStat("Splash Damage Reduction", [12,21,28,35,40], "+", "%"),
                ]
            },
            {
                title: "Samsara",
                type: PASSIVE,
                maxRanks: 3,
                description: "Gain 1 stack of Samsara when you deal damage to an enemy with your action skill. Each stack increases Gun Damage and Health Regeneration. Stacks decay after a few seconds.",
                stats: [
                    newStat("Gun Damage", [1.7,3.3,5], "+", "% per enemy damaged"),
                    newStat("Health Regeneration", [1.7,3.3,5], "+", "% of Max Health per second; per enemy damaged"),
                    newStat("Max Stacks", [5,5,5], "", "stacks"),
					newStat("Duration", [20,20,20], "", "seconds"),
                ]
            },
            {
                title: "Helping Hand(s)",
                type: PASSIVE,
                maxRanks: 5,
                description: "For a few seconds after using her action skill, Amara's arms remain active and grant her damage reduction.",
                stats: [
                    newStat("Damage Reduction", [12,21,28,35,40], "+", "%"),
                    newStat("Duration", [15,15,15,15,15], "", "seconds"),
                ]
            },
            {
                title: "Blight Tiger",
                type: ELEMENT,
                description: "Converts Amara's action skill to corrosive damage."
            },
        ],
        [
            {
                title: "Fracture",
                type: ACTION,
                description: "Amara summons a handful of fists that erupt from the ground, dealing damage to enemies in front of her.",
				stats: [
                    newStat("Cooldown", [28], "", "seconds"),
                    newStat("Damage", [88], "", ""),
                ]
            },
            {
                hide: true,
            },
            {
                title: "Mindfulness",
                type: PASSIVE,
                maxRanks: 3,
                description: "Whenever Amara takes damage, she gains a stack of Mindfulness, improving her Shield Regeneration Delay and Movement Speed. Stacks decay after a few seconds.",
                stats: [
                    newStat("Shield Regeneration Delay", [9,17,23], "-", "%"),
                    newStat("Movement Speed", [1.4,2.8,4.2], "+", "%"),
                    newStat("Duration", [5,5,5], "", "seconds"),
					newStat("Max Stacks", [25,25,25], "", "stacks"),
                ]
            },
            {
                hide: true,
            },
            {
                title: "Find Your Center",
                type: AUGMENT,
				maxRanks: 1,
                description: "Increases Melee Damage and, for a few seconds after using her action skill, increased melee range.",
                stats: [
                    newStat("Melee Damage", [100], "+", "%"),
                    newStat("Melee Range", [75], "+", "%"),
					newStat("Duration", [20], "", "seconds"),
                ]
            },
        ],
        [
            {
                hide:true
            },
            {
                title: "Vigor",
                type: PASSIVE,
				maxRanks: 3,
                description: "Killing an enemy with Amara's action skill grants all allies increased movement speed for a few seconds.",
				stats: [
                    newStat("Team Movement Speed", [3.3,6.7,10], "+", "%"),
                    newStat("Duration", [8,8,8], "", "seconds"),
                ]
            },
            {
                title: "Revelation",
                type: PASSIVE,
                maxRanks: 5,
                description: "Action Skill now creates a Nova when it damages enemies, dealing damage to all nearby enemies.",
                stats: [
                    newStat("Action Skill Duration", [15], "-", "%"),
                    newStat("Nova Damage", [18], "", ""),
                ]
            },
            {
                title: "Downfall",
                type: PASSIVE,
                description: "Amara leaps into the air and shoots an Elemental Beam directly below her, followed by a Slam.",
                stats: [
                    newStat("Cooldown", [47], "", "seconds"),
                    newStat("Damage", [95], "", ""),
					newStat("Beam Damage", [14], "", "per second"),
                ]
            },
            {
                title: "One with Nature",
                type: ACTION,
                maxRanks: 5,
                description: "Increases Max Health and Elemental Damage Resistance to her Action Skill Element.",
                stats: [
                    newStat("Max Health", [5,10,15,20,25], "+", "%"),
                    newStat("Elemental Damage Resistance", [12,21,28,35,40], "+", "%"),
                ]
            },
        ],
        [
            {
                title: "Do unto Others",
                type: ACTION,
                maxRanks: 1,
                description: "Whenever an enemy damages Amara, she automatically throws an energy orb at them, dealing Action Skill Elemental Damage.",
                stats: [
                    newStat("Cooldown", [8], "", "seconds"),
                ]
            },
            {
                title: "Jab Cross",
                type: PASSIVE,
                maxRanks: 5,
                description: "Whenever dealing melee damage, gain increased Action Skill Damage and Gun Damage for a few seconds.",
                stats: [
                    newStat("Gun Damage", [3,6,9,12,15], "+", "%"),
                    newStat("Action Skill Damage", [15,30,45,60,75], "+", "%"),
					newStat("Duration", [10,10,10,10,10], "", "seconds"),
                ]
            },
            {
                hide: true
            },
            {
                title: "Guardian Angel",
                type: PASSIVE,
				maxRanks: 1,
                description: "In Fight for your Life, Amara immediately gains a Second Wind and creates an Action Skill Elemental Nova that knocks back nearby enemies.",
                stats: [
                    newStat("Revived Health", [50], "", "%"),
                    newStat("Cooldown", [120], "", "seconds"),
                ]
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
                hide: true
            },
            {
                title: "Glamour",
                type: PASSIVE,
                maxRanks: 1,
                description: "Enemies damaged by Amara's action skill become confused and temporarily attack their allies. However, the Action Skill Cooldown will be increased. If Amara targets an enemy with Phasegrasp, enemies near the Grapsed target will be confused as well.",
                stats: [
                    newStat("Confuse Duration", [8], "", "seconds"),
                    newStat("Cooldown", [20], "+", "%"),
                    newStat("Damage", [30], "-", "%"),
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