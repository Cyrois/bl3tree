import {
    PASSIVE,
    AUGMENT,
    ACTION,
    ELEMENT,
    newStat,
    GREEN,
    RED,
    BLUE
} from './constants';

export default {
    equipped: {
        action1: null,
        augment1: null,
        element1: {
            title: "Shockra",
            type: ELEMENT,
            tree: BLUE,
            image: require('../assets/images/skills/amara/Shockra.png'),
            description: "Converts your action skill damage to shock damage."
        },
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
                tree: GREEN,
                image: require('../assets/images/skills/amara/PhaseSlam.png'),
                description: "Leap into the air and slam into the ground, dealing damage to and knocking up all nearby enemies.",
				stats: [
                    newStat("Cooldown", [35], "", " seconds"),
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
                tree: GREEN,
                maxRanks: 5,
                image: require('../assets/images/skills/amara/RootsToRise.png'),
                description: "Increases Maximum Health.",
                stats: [
                    newStat("Max Health", [8,16,24,32,40], "+", "%"),
                ]
            },
            {
                title: "Personal Space",
                type: PASSIVE,
                tree: GREEN,
                maxRanks: 3,
                image: require('../assets/images/skills/amara/PersonalSpace.png'),
                description: "Weapon shots deal bonus damage, increasing with proximity to the target.",
                stats: [
                    newStat("Bonus Damage", [12,24,36], "up to", "% of damage dealt"),
                ]
            },
            {
                title: "Clarity",
                type: PASSIVE,
                tree: GREEN,
                maxRanks: 5,
                image: require('../assets/images/skills/amara/Clarity.png'),
                description: "Constantly regenerate health. The lower her health, the more powerful the regeneration. After using an action skill, this bonus is doubled for a few seconds.",
                stats: [
                    newStat("Health Regeneration", [1,2,3,4,5], "Up to", "% of missing health per second"),
					newStat("Duration", [5,5,5,5,5], "", " seconds"),
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
                tree: GREEN,
                maxRanks: 5,
                image: require('../assets/images/skills/amara/ArmsDeal.png'),
                description: "Increase Splash Damage and take reduced Splash Damage.",
                stats: [
                    newStat("Splash Damage", [4,8,12,16,20], "+", "%"),
                    newStat("Splash Damage Reduction", [12,21,28,35,40], "+", "%"),
                ]
            },
            {
                title: "Samsara",
                type: PASSIVE,
                tree: GREEN,
                maxRanks: 3,
                image: require('../assets/images/skills/amara/Samsara.png'),
                description: "Gain 1 stack of Samsara when you deal damage to an enemy with your action skill. Each stack increases Gun Damage and Health Regeneration. Stacks decay after a few seconds.",
                stats: [
                    newStat("Gun Damage", [1.7,3.3,5], "+", "% per enemy damaged"),
                    newStat("Health Regeneration", [1.7,3.3,5], "+", "% of Max Health per second; per enemy damaged"),
                    newStat("Max Stacks", [5,5,5], "", "stacks"),
					newStat("Duration", [20,20,20], "", " seconds"),
                ]
            },
            {
                title: "Helping Hand(s)",
                type: PASSIVE,
                tree: GREEN,
                maxRanks: 5,
                image: require('../assets/images/skills/amara/HelpingHands.png'),
                description: "For a few seconds after using her action skill, Amara's arms remain active and grant her damage reduction.",
                stats: [
                    newStat("Damage Reduction", [12,21,28,35,40], "+", "%"),
                    newStat("Duration", [15,15,15,15,15], "", " seconds"),
                ]
            },
            {
                title: "Blight Tiger",
                type: ELEMENT,
                tree: GREEN,
                image: require('../assets/images/skills/amara/BlightTiger.png'),
                description: "Converts Amara's action skill to corrosive damage."
            },
        ],
        [
            {
                title: "Fracture",
                type: ACTION,
                tree: GREEN,
                image: require('../assets/images/skills/amara/Fracture.png'),
                description: "Amara summons a handful of fists that erupt from the ground, dealing damage to enemies in front of her.",
				stats: [
                    newStat("Cooldown", [28], "", " seconds"),
                    newStat("Damage", [88], "", ""),
                ]
            },
            {
                title: "Mindfulness",
                type: PASSIVE,
                tree: GREEN,
                maxRanks: 3,
                image: require('../assets/images/skills/amara/Mindfulness.png'),
                description: "Whenever Amara takes damage, she gains a stack of Mindfulness, improving her Shield Regeneration Delay and Movement Speed. Stacks decay after a few seconds.",
                stats: [
                    newStat("Shield Regeneration Delay", [9,17,23], "-", "%"),
                    newStat("Movement Speed", [1.4,2.8,4.2], "+", "%"),
                    newStat("Duration", [5,5,5], "", " seconds"),
					newStat("Max Stacks", [25,25,25], "", "stacks"),
                ]
            },
            {
                title: "Find Your Center",
                type: PASSIVE,
                tree: GREEN,
				maxRanks: 1,
                image: require('../assets/images/skills/amara/FindYourCenter.png'),
                description: "Increases Melee Damage and, for a few seconds after using her action skill, increased melee range.",
                stats: [
                    newStat("Melee Damage", [100], "+", "%"),
                    newStat("Melee Range", [75], "+", "%"),
					newStat("Duration", [20], "", " seconds"),
                ]
            },
            {
                title: "Vigor",
                type: PASSIVE,
                tree: GREEN,
				maxRanks: 3,
                image: require('../assets/images/skills/amara/Vigor.png'),
                description: "Killing an enemy with Amara's action skill grants all allies increased movement speed for a few seconds.",
				stats: [
                    newStat("Team Movement Speed", [3.3,6.7,10], "+", "%"),
                    newStat("Duration", [8,8,8], "", " seconds"),
                ]
            },
            {
                title: "Revelation",
                type: AUGMENT,
                tree: GREEN,
                maxRanks: 5,
                image: require('../assets/images/skills/amara/Revelation.png'),
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
                tree: GREEN,
                image: require('../assets/images/skills/amara/Downfall.png'),
                description: "Amara leaps into the air and shoots an Elemental Beam directly below her, followed by a Slam.",
                stats: [
                    newStat("Cooldown", [47], "", " seconds"),
                    newStat("Damage", [95], "", ""),
					newStat("Beam Damage", [14], "", " per second"),
                ]
            },
            {
                hide: true
            },
            {
                title: "One with Nature",
                type: PASSIVE,
                tree: GREEN,
                maxRanks: 5,
                image: require('../assets/images/skills/amara/OneWithNature.png'),
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
                tree: GREEN,
                maxRanks: 1,
                image: require('../assets/images/skills/amara/DoUntoOthers.png'),
                description: "Whenever an enemy damages Amara, she automatically throws an energy orb at them, dealing Action Skill Elemental Damage.",
                stats: [
                    newStat("Cooldown", [8], "", " seconds"),
                ]
            },
            {
                title: "Jab Cross",
                type: PASSIVE,
                tree: GREEN,
                maxRanks: 5,
                image: require('../assets/images/skills/amara/JabCross.png'),
                description: "Whenever dealing melee damage, gain increased Action Skill Damage and Gun Damage for a few seconds.",
                stats: [
                    newStat("Gun Damage", [3,6,9,12,15], "+", "%"),
                    newStat("Action Skill Damage", [15,30,45,60,75], "+", "%"),
					newStat("Duration", [10,10,10,10,10], "", " seconds"),
                ]
            },
            {
                title: "Guardian Angel",
                type: PASSIVE,
                tree: GREEN,
				maxRanks: 1,
                image: require('../assets/images/skills/amara/GuardianAngel.png'),
                description: "In Fight for your Life, Amara immediately gains a Second Wind and creates an Action Skill Elemental Nova that knocks back nearby enemies.",
                stats: [
                    newStat("Revived Health", [50], "", "%"),
                    newStat("Cooldown", [120], "", " seconds"),
                ]
            },
            {
                title: "Glamour",
                type: AUGMENT,
                tree: GREEN,
                image: require('../assets/images/skills/amara/Glamour.png'),
                description: "Enemies damaged by Amara's action skill become confused and temporarily attack their allies. However, the Action Skill Cooldown will be increased. If Amara targets an enemy with Phasegrasp, enemies near the Grapsed target will be confused as well.",
                stats: [
                    newStat("Confuse Duration", [8], "", " seconds"),
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
                tree: GREEN,
                maxRanks: 1,
                image: require('../assets/images/skills/amara/Blitz.png'),
                description: "",
                stats: [
                    newStat("Cooldown", [8], "", " seconds"),
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
                title: "Shockra",
                type: ELEMENT,
                tree: BLUE,
                image: require('../assets/images/skills/amara/Shockra.png'),
                description: "Converts your action skill damage to shock damage."
            },
            {
                title: "Phasecast",
                type: ACTION,
                tree: BLUE,
                image: require('../assets/images/skills/amara/PhaseCast.png'),
                description: "Send forward an Astral Projection of Amara.",
				stats: [
                    newStat("Cooldown", [28], "", " seconds"),
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
                tree: BLUE,
                maxRanks: 5,
                image: require('../assets/images/skills/amara/DoHarm.png'),
                description: "Killing an enemy gives a stack of Rush. Activating her Action Skill consumes all Rush stacks. For every stack consumed, Amara's Action Skill Damage is temporarily increased.",
                stats: [
                    newStat("Action Skill Damage", [0.9,1.8,2.7,3.6,4.5], "+", "% per stack consumed"),
					newStat("Max Rush Stacks", [10,10,10,10,10], "", "stacks"),
					newStat("Duration", [20,20,20,20,20], "", " seconds"),
                ]
            },
            {
                title: "Fast Hands",
                type: PASSIVE,
                tree: BLUE,
                maxRanks: 3,
                image: require('../assets/images/skills/amara/FastHands.png'),
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
                tree: BLUE,
                maxRanks: 5,
                image: require('../assets/images/skills/amara/ViolentTapestry.png'),
                description: "Applying a Status Effect grants Amara a stack of Rush. Activating her action skill consumes all Rush stacks. For every stack of Rush consumed, Amara's Status Effect Chance is temporarily increased.",
                stats: [
                    newStat("Effect Chance", [0.6,1.2,1.8,2.4,3], "+", "% per stack consumed"),
                    newStat("Max stacks", [10,10,10,10,10], "", "stacks"),
					newStat("Duration", [20,20,20,20,20], "", " seconds"),
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
                tree: BLUE,
                maxRanks: 5,
                image: require('../assets/images/skills/amara/Alacrity.png'),
                description: "Increases Reload Speed for every stack of Rush. After consuming Rush stacks, this bonus is increased for a few seconds.",
                stats: [
                    newStat("Reload Speed", [0.4,0.8,1.2,1.6,2], "+", "% per stack"),
                    newStat("Reload Speed after action skill use", [0.6,1.2,1.8,2.3,2.9], "+", "% per stack"),
                    newStat("Duration", [8,8,8,8,8], "", " seconds"),
                ]
            },
            {
                title: "Transcend",
                type: PASSIVE,
                tree: BLUE,
                maxRanks: 3,
                image: require('../assets/images/skills/amara/Transcend.png'),
                description: "Increases Accuracy and Critical Hit Damage for a few seconds after activating Amara's Action Skill.",
                stats: [
                    newStat("Accuracy", [17,29,38], "+", "%"),
                    newStat("Critical Hit Damage", [9,18,27], "+", "%"),
                    newStat("Duration", [12,12,12], "", " seconds"),
                ]
            },
            {
                title: "Restless",
                type: PASSIVE,
                tree: BLUE,
                maxRanks: 5,
                image: require('../assets/images/skills/amara/Restless.png'),
                description: "Increases Action Skill Cooldown Rates",
                stats: [
                    newStat("Cooldown Rate", [5,10,15,20,25], "+", "%"),
                ]
            },
            {
                title: "Soul Sap",
                type: AUGMENT,
                tree: BLUE,
                image: require('../assets/images/skills/amara/SoulSap.png'),
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
                tree: BLUE,
                image: require('../assets/images/skills/amara/Deliverance.png'),
                description: "When Astral Projection hits an enemy, it releases homing Elemental Projectiles that trigger her Action Skill Elemental Effect on enemies.",
				stats: [
                    newStat("Elemental Projectiles", [3], "", " per enemy hit"),
					newStat("Damage", [86], "", ""),
					newStat("Cooldown", [28], "", " seconds"),
                ]
            },
            {
                hide: true,
            },
            {
                title: "Ascendant",
                type: PASSIVE,
                tree: BLUE,
                maxRanks: 1,
                image: require('../assets/images/skills/amara/Ascendant.png'),
                description: "All Action Skill Augments gain increased effects.",
                stats: [
                    newStat("Soul Sap Lifesteal", [20], "+", "%"),
                    newStat("Allure Radius", [100], "+", "%"),
                    newStat("Glamour Duration", [50], "+", "%"),
					newStat("Stillness of Mind", [0.75], "Breaks ", " seconds after being damaged"),
					newStat("Revelation Damage", [25], "+", "%"),
                ]
            },
            {
                hide: true,
            },
            {
                title: "Stillness of Mind",
                type: AUGMENT,
                tree: BLUE,
                image: require('../assets/images/skills/amara/StillnessOfMind.png'),
                description: "Enemies damaged by Amara's Action Skill become phaselocked until they are damaged or the duration ends. Action Skill Cooldown is increased.",
                stats: [
                    newStat("Cooldown", [15], "+", "%"),
                    newStat("Damage", [25], "-", "%"),
					newStat("Max Duration", [6], "", " seconds"),
                ]
            },
        ],
        [
            {
                title: "Reverberation",
                type: ACTION,
                tree: BLUE,
                image: require('../assets/images/skills/amara/Reverberation.png'),
                description: "Increases damage dealt for every enemy Amara's Astral Projection hits.",
                stats: [
                    newStat("Damage Bonus", [50], "+", "% per enemy hit"),
                    newStat("Damage", [88], "", ""),
                    newStat("Cooldown", [30], "", " seconds"),
                ]
            },
            {
                title: "From Rest",
                type: PASSIVE,
                tree: BLUE,
                maxRanks: 3,
                image: require('../assets/images/skills/amara/FromRest.png'),
                description: "Improves Fire Rate and Charge Time.",
                stats: [
                    newStat("Fire Rate", [4,8,12], "+", "%"),
                    newStat("Charge Time", [21,34,44], "+", "%"),
                ]
            },
            {
                title: "Laid Bare",
                type: PASSIVE,
                tree: BLUE,
                maxRanks: 3,
                image: require('../assets/images/skills/amara/LaidBare.png'),
                description: "Enemies take increased damage from all sources for a few seconds after being damaged by Amara's Action Skill",
                stats: [
                    newStat("Damage Increase", [8.3,16.7,25], "+", "%"),
                    newStat("Duration", [8,8,8], "", " seconds"),
                ]
            },
            {
                title: "Wrath",
                type: PASSIVE,
                tree: BLUE,
                maxRanks: 3,
                image: require('../assets/images/skills/amara/Wraith.png'),
                description: "Increases Gun Damage. This effect is increased for a few seconds after Amara's action skill.",
                stats: [
                    newStat("Gun Damage", [6.7,13.3,20], "+", "%"),
                    newStat("Gun Damage after action skill use", [6.7,13.3,20], "+", "%"),
					newStat("Duration", [8,8,8], "", " seconds"),
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
                title: "Remnant",
                type: PASSIVE,
                tree: BLUE,
                maxRanks: 3,
                image: require('../assets/images/skills/amara/Remnant.png'),
                description: "When Amara kills an enemy with a Gun or Action Skill, she creates a homing projectile that seeks out a new enemy, dealing her Action Skill Elemental Damage and Overkill Damage.",
                stats: [
                    newStat("Remnant Damage", [9,18,26], "", ""),
                ]
            },
            {
                hide: true
            },
            {
                title: "Awakening",
                type: PASSIVE,
                tree: BLUE,
                maxRanks: 3,
                image: require('../assets/images/skills/amara/Awakening.png'),
                description: "Amara's Rush stacks gain increased effectiveness.",
                stats: [
                    newStat("Rush Stack Effectiveness", [10,20,30], "+", "%"),
                ]
            },
            {
                title: "Tandava",
                type: AUGMENT,
                tree: BLUE,
                image: require('../assets/images/skills/amara/Tandava.png'),
                description: "Amara sends forward an Astral Projection of herself. When it hits a target, it explodes, damaging all nearby enemies.",
				stats: [
                    newStat("Cooldown", [35], "", " seconds"),
                    newStat("Damage", [91], "", ""),
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
                title: "Avatar",
                type: PASSIVE,
                tree: BLUE,
                maxRanks: 1,
                image: require('../assets/images/skills/amara/Avatar.png'),
                description: "Amara's Action Skill can be activated while it's cooling down. This skill may only be used once per completed cooldown. Additionally, increases Amara's Max Rush Stacks. Upon killing an enemy with an Action Skill, it refunds half her Rush Stacks.",
                stats: [
                    newStat("Bonus Rush Stacks", [10], "+", ""),
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
                title: "Phasegrasp",
                type: ACTION,
                tree: RED,
                image: require('../assets/images/skills/amara/PhaseGrasp.png'),
                description: "Amara summons a giant fist that bursts from the ground and locks the targeted enemy in place. Enemies immune to this still take instant damage instead.",
				stats: [
                    newStat("Skill Duration", [7], "", " seconds"),
                    newStat("Grasp Immune Damage", [28], "", ""),
                    newStat("Cooldown", [16], "", " seconds"),
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
                title: "Anima",
                type: PASSIVE,
                tree: RED,
                maxRanks: 5,
                image: require('../assets/images/skills/amara/Anima.png'),
                description: "Amara's Status Effects deal increased damage over time and have increased duration. Her Action Skill Status Effect deals further increased damage.",
                stats: [
                    newStat("Action Skill Status Effect Damage", [8,16,24,32,40], "+", "%"),
                    newStat("Status Effect Damage", [4,8,12,16,20], "+", "%"),
                    newStat("Status Effect Duration", [20,40,60,80,100], "+", "%"),
                ]
            },
            {
                title: "Steady Hand(s)",
                type: PASSIVE,
                tree: RED,
                maxRanks: 3,
                image: require('../assets/images/skills/amara/SteadyHands.png'),
                description: "Amara gains increased Weapon Handling and Accuracy.",
                stats: [
                    newStat("Handling", [14,24,32], "+", "%"),
					newStat("Accuracy", [13,23,31], "+", "%"),
                ]
            },
            {
                title: "Infusion",
                type: PASSIVE,
                tree: RED,
                maxRanks: 5,
                image: require('../assets/images/skills/amara/Infusion.png'),
                description: "Convert a portion of damage dealt by Amara's weapons into her Action Skill Element.",
                stats: [
                    newStat("Converted Damage", [8,16,24,32,40], "", "%"),
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
                title: "Tempest",
                type: PASSIVE,
                tree: RED,
                maxRanks: 5,
                image: require('../assets/images/skills/amara/Tempest.png'),
                description: "Amara deals increased Elemental Damage. Shock Damage is further increased.",
                stats: [
                    newStat("Shock Damage", [4,8,12,16,20], "+", "%"),
                    newStat("Elemental Damage", [6,12,18,24,30], "+", "%"),
                ]
            },
            {
                title: "Illuminated Fist",
                type: PASSIVE,
                tree: RED,
                maxRanks: 1,
                image: require('../assets/images/skills/amara/IlluminatedFist.png'),
                description: "Amara gains increased Melee Damage and her Melee Damage is converted to her Action Skill Element.",
                stats: [
                    newStat("Melee Damage", [75], "+", "%"),
                ]
            },
            {
                title: "Wildfire",
                type: PASSIVE,
                tree: RED,
                maxRanks: 5,
                image: require('../assets/images/skills/amara/Wildfire.png'),
                description: "Whenever Amara applies a Status Effect to an enemy, it has a chance to spread to a nearby enemy.",
                stats: [
                    newStat("Spread Chance", [8,16,24,32,40], "+", "%"),
                ]
            },
            {
                title: "Soulfire",
                type: ELEMENT,
                tree: RED,
                image: require('../assets/images/skills/amara/SoulFire.png'),
                description: "Converts Amara's Action Skill to Incendiary Damage."
            },
        ],
        [
            {
                title: "The Eternal Fist",
                type: ACTION,
                tree: RED,
                image: require('../assets/images/skills/amara/TheEternalFist.png'),
                description: "Amara summons a giant fist that bursts from the ground and locks the targeted enemy in place. Whenever the Grasped enemy is killed, a new fist seeks out and Grasps a new target.",
				stats: [
                    newStat("Bonus Targets", [4], "Up to +", ""),
                    newStat("Grasp Immune Damage", [28], "", ""),
					newStat("Cooldown", [20], "", " seconds"),
                ]
            },
            {
                hide: true,
            },
            {
                title: "Dread",
                type: PASSIVE,
                tree: RED,
                maxRanks: 1,
                image: require('../assets/images/skills/amara/Dread.png'),
                description: "Amara's Gun Damage is increased for a few seconds after an enemy is Grasped. Whenever any player kills a Grasped enemy, their weapon is reloaded.",
                stats: [
                    newStat("Gun Damage", [15], "+", "%"),
                    newStat("Duration", [8], "", " seconds"),
                ]
            },
            {
                hide: true,
            },
            {
                title: "Allure",
                type: AUGMENT,
                tree: RED,
                image: require('../assets/images/skills/amara/Allure.png'),
                description: "Amara's Action Skill creates a singularity that pulls in enemies.",
                stats: [
                    newStat("Action Skill Damage", [20], "-", "%"),
					newStat("Duration", [2.5], "", " seconds"),
                ]
            },
        ],
        [
            {
                hide:true
            },
            {
                title: "Indiscriminate",
                type: PASSIVE,
                tree: RED,
				maxRanks: 3,
                image: require('../assets/images/skills/amara/Indiscriminate.png'),
                description: "Amara's bullets that damage enemies have a chance to ricochet and deal decreased damage. Ricochet Chance and Damage are increased if the target is currently affected by Phasegrasp or Stillness of Mind.",
				stats: [
                    newStat("Team Movement Speed", [3.3,6.7,10], "+", "%"),
                    newStat("Duration", [8,8,8], "", " seconds"),
                ]
            },
            {
                title: "Deep Well",
                type: PASSIVE,
                tree: RED,
                maxRanks: 1,
                image: require('../assets/images/skills/amara/DeepWell.png'),
                description: "Amara gains increased Magazine Size with elemental weapons.",
                stats: [
                    newStat("Magazine Size", [20], "+", "%"),
                ]
            },
            {
                title: "Catharsis",
                type: PASSIVE,
                tree: RED,
                maxRanks: 3,
                image: require('../assets/images/skills/amara/Catharsis.png'),
                description: "Whenever Amara triggers an elemental effect on an enemy, when that enemy dies it explodes, dealing her attuned element damage along with current elemental afflictions.",
                stats: [
                    newStat("Damage", [4], "", ""),
					newStat("Cooldown", [8], "", " seconds"),
                ]
            },
            {
                title: "Ties That Bind",
                type: AUGMENT,
                tree: RED,
                image: require('../assets/images/skills/amara/TiesThatBind.png'),
                description: "Amara summons a giant fist that bursts from the ground and locks the enemy in place. Enemies that near the Grasped target are linked, sharing damage.",
                stats: [
                    newStat("Link Damage", [35], "", "% of damage dealt"),
                    newStat("Grasp Immune Damage", [34], "", ""),
					newStat("Cooldown", [18], "", " seconds"),
                ]
            },
        ],
        [
            {
                title: "Fist Over Matter",
                type: AUGMENT,
                tree: RED,
                image: require('../assets/images/skills/amara/FistOverMatter.png'),
                description: "Amara summons a giant fist that bursts from the ground and locks the enemy in place. After Grasping the enemy, large fists appear and constantly smash the area, dealing damage.",
                stats: [
                    newStat("Damage", [35], "", ""),
					newStat("Grasp Immune Damage", [39], "", ""),
					newStat("Cooldown", [28], "", " seconds"),
                ]
            },
            {
                title: "Sustainment",
                type: PASSIVE,
                tree: RED,
				maxRanks: 5,
                image: require('../assets/images/skills/amara/Sustainment.png'),
                description: "Amara gains Life Steal whenever she deals Elemental Damage with her weapon.",
                stats: [
                    newStat("Life Steal", [4,8,12,16,20], "", "% of damage dealt"),
                ]
            },
            {
                hide: true
            },
            {
                title: "Conflux",
                type: PASSIVE,
                tree: RED,
                maxRanks: 5,
                image: require('../assets/images/skills/amara/Conflux.png'),
                description: "Whenever Amara applies a Status Effect to an enemy, she gains a chance to randomly Electrocute, Ignite, or Melt that enemy.",
                stats: [
                    newStat("Extra Effect Chance", [7,14,21,28,35], "", "%"),
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
                title: "Forceful Expression",
                type: PASSIVE,
                tree: RED,
                maxRanks: 1,
                image: require('../assets/images/skills/amara/ForcefulExpression.png'),
                description: "Amara's guns deal Bonus Elemental Damage based on her Action Skill Element.",
                stats: [
                    newStat("Bonus Elemental Damage", [18], "", "% of Damage Dealt"),
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