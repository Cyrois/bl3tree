import {
    PASSIVE,
    AUGMENT,
    ACTION,
    PET,
    GREEN,
    RED,
    BLUE,
} from './constants';
const newStat = (type, values, preText = "+", postText = "") => {
    return {
        type,
        values,
        preText,
        postText
    }
}

export default {
    equipped: {
        pet: null,
        action: null,
        augment1: null,
        augment2: null,
    },
    stalker: [
        [{
                hide: true
            },
            {
                title: "Jabber Sidekick",
                row: 0,
                type: PET,
                description: "Pet is armed with a Pistol, and increases player's Movement Speed. Can be commanded to throw a Radiation Barrel at enemies.",
                image: require('../assets/images/skills/stalker/BasicJabbermon.png'),
            },
            {
                title: "Fade Away",
                row: 0,
                type: ACTION,
                description: "Grants cloaking, allowing you to fire 3 shots while cloaked, which are automatic +200% damage critical hits. Movement Speed is increased by +25%, and Health Regeneration by +3% of Max HP while Cloaking for 15 seconds with a 45 second cooldown.",
                image: require('../assets/images/skills/stalker/FadeAway.png'),
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
                title: "Self-Repairing System",
                row: 1,
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 5,
                description: "Maximum Health is increased, and constantly regenerates health.",
                image: require('../assets/images/skills/stalker/SelfRepairingSystem.png'),
                stats: [
                    newStat("Max Health", [6,9,12,15,18], "+", "%"),
                    newStat("Health Regeneration", [0.3, 0.6, 0.9, 1.2, 1.5], "+" , "% of Max Health/sec"),
                ]
            },
            {
                title: "Sic 'Em",
                row: 1,
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 3,
                description: "Lowers Attack Command Cooldown and increases Damage.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Attack Command Damage", 10, "+10%"),
                    newStat("Attack Command Cooldown", -10, "-10%"),
                ]
            },
            {
                title: "Furious Attack",
                row: 1,
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 5,
                description: "Hunter Skill - Gain stack of Furious Attacks after shooting an enemy, which increases Handling and Gun Damage.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Handling", 1, "+1.0% per stack"),
                    newStat("Gun Damage", 0.4, "+0.4% per stack"),
                    newStat("Furious Attack Stacks", 10, "10"),
                    newStat("Furious Attack Duration", 10, "4 seconds"),
                ]
            },
            {
                hide: true
            },
        ],
        [{
                title: "Guerillas in the Mist",
                row: 2,
                tree: GREEN,
                type: AUGMENT,
                description: "Fade Away no longer ends after attacking, but Critical Hit Damage is lowered by 50% and Skill Duration is reduced by 8 seconds",
                image: require('../assets/images/skills/adrenaline.png'),
            },
            {
                title: "Eager to Impress",
                row: 2,
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 5,
                description: "Kill Skill - Action Skill Cooldown Time is reduced after killing an enemy, even more when Pet kills an enemy, and Attack Command cooldown is refreshed.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Pet Kill Cooldown Time", -0.5, "-0.5 seconds"),
                    newStat("Fl4k Kill Cooldown Time", -0.25, "-0.25 seconds"),
                ]
            },
            {
                title: "All My BFF's",
                row: 2,
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 3,
                description: "Allies share a portion of player's total Health Regeneration, and Pet shares twice the amount.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Allies share Fl4k's Health Regeneration", 17, "+17%"),
                ]
            },
            {
                title: "Overclocked",
                row: 2,
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 5,
                description: "Gain increased Fire Rate, even more after reloading.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Fire Rate after Reloading", 2, "+2%"),
                    newStat("Fire Rate", 2, "+2%"),
                    newStat("Overclocked Duration", 4, "4 seconds"),
                ]
            },
            {
                hide: true
            },
        ],
        [{
                title: "Not My Circus",
                row: 3,
                tree: GREEN,
                type: AUGMENT,
                description: "Pet will taunt for 6 seconds after Fade Away ends, drawing the attention of all enemies in a radius. Pet also gains +80% Damage Reduction.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Health Returned", 7, "7% of Max Health"),
                ]
            },
            {
                hide: true
            },
            {
                title: "Lick the Wounds",
                row: 3,
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 1,
                description: "When attempting to Fight for Your Life, Pet will attempt to revive player.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: []
            },
            {
                title: "Turn Tail and Run",
                row: 3,
                tree: GREEN,
                type: PASSIVE,
                description: "Regenerate health and gain Damage Reduction when moving, and gain Gun Damage and Fire Rate when standing still.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Damage Reduction While Moving", 6.5, "+6.5%"),
                    newStat("Health Regeneration While Moving", 0.3, "0.3% of Max Health/sec"),
                    newStat("Gun Damage While Still", 8.3, "8.3%"),
                    newStat("Fire Rate While Still", 4.0, "+4.0%"),
                ]
            },
            {
                title: "Beefcake Jabber",
                row: 3,
                tree: GREEN,
                type: PET,
                description: "Beefcake Jabber equips a Shotgun, increases player's Movement Speed by +5% and Maximum Health by +10%, and can be commanded to summon a melee weapon to knock enemies back.",
                image: require('../assets/images/skills/adrenaline.png'),
            },
        ],
        [{
                title: "Until You Are Dead",
                row: 4,
                tree: GREEN,
                type: AUGMENT,
                description: "The Health Regen and Movement Speed of Fade Away will persist for 10 seconds after the skill has ended.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: []
            },
            {
                title: "The Fast and the Furryous",
                row: 4,
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 3,
                description: "Gun Damage and Movement Speed are increased while above half health.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Gun Damage", 8, "+8%"),
                    newStat("Movement Speed", +3.3, "+3.3%"),
                ]
            },
            {
                hide: true
            },
            {
                title: "Hidden Machine",
                row: 4,
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 3,
                description: "Deal increased Damage against an enemy that is not targeting player.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Damage", 6, "+6%"),
                ]
            },
            {
                title: "Gunslinger Jabber",
                row: 4,
                tree: GREEN,
                type: PET,
                description: "Gunslinger Jabber equips an SMG, increases player's Movement Speed by +5% and Critical Hit Damage by +5%. Can be commanded to use a Rocket Launcher to attack.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: []
            },
        ],
        [{
                title: "Unblinking Eye",
                row: 5,
                tree: GREEN,
                type: AUGMENT,
                description: "Successive hits on the same target will increase Critical Damage by +75% per hit, and reset every 3 hits.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: []
            },
            {
                hide: true
            },
            {
                title: "Rage and Recover",
                row: 5,
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 5,
                description: "Kill Skill - Player and Pet regenerate health after killing an enemy.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Health Regeneration", 1.6, "+1.6% of Missing Health/sec"),
                    newStat("Rage and Recover Duration", 3, "3 seconds"),
                ]
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
                title: "Megavore",
                row: 6,
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 1,
                description: "Gain increased Damage for you and your pet when activating and Action Skill. Damage is doubled when at full health.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Damage", 25, "+25%"),
                    newStat("The Power Inside Duration", 15, "15 seconds"),
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
    hunter: [
        [{
                hide: true
            },
            {
                title: "Spiderant Centurion",
                row: 0,
                type: PET,
                description: "Summoning this loyal pet will cause FL4K to constantly regenerate +1% of Max Health per sec.",
                image: require('../assets/images/skills/SelfRepairingSystem.png'),
            },
            {
                title: "Rakk Attack",
                row: 0,
                type: ACTION,
                description: "Sends forth 2 Rakk to divebomb the target. The skill has multiple charges and deals 35 damage with a 18 second cooldown.",
                image: require('../assets/images/skills/hunter/Rakk_Attack!.jpg'),
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
                row: 1,
                tree: RED,
                title: "Interplanetary Stalker",
                type: PASSIVE,
                maxRanks: 5,
                description: "Hunter Kill Skill: Gains a stack of Interplanetary Stalker when an enemy is killed, which gives a bonus to all damage dealt. Gains a unique stacking bonus depending on the type of enemy killed.",
                image: require('../assets/images/skills/hunter/Interplanetary_Stalker.jpg'),
                stats: [
                    newStat("Damage", 2, "2+% /stack", ),
                    newStat("Human Bonus", 3, "+3 Action Skill Damage /stack", ),
                    newStat("Robot Bonus", 1.5, "+1.5% Corrosive Damage/Stack"),
                    newStat("Beast Bonus", 2, "+2% Movement Speed /stack"),
                ]
            },
            {
                row: 1,
                tree: RED,
                title: "Leave No Trace",
                type: PASSIVE,
                maxRanks: 3,
                description: "After scoring a critical hit, chance for 1 ammo to be added to magazine.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Chance to add ammo", 12, "+12%"),
                ]
            },
            {
                row: 1,
                tree: RED,
                title: "Second Intention",
                type: PASSIVE,
                maxRanks: 5,
                description: "Hunter Kill Skill: Gain increased reload speed when an enemy is killed, bonus increases if critical kill",
                image: require('../assets/images/skills/adrenaline.png'),
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
                row: 2,
                tree: RED,
                title: "Rakk Open a Cold One",
                type: AUGMENT,
                description: "Converts Rakk damage to Cryo Damage",
                image: require('../assets/images/skills/adrenaline.png'),
            },
            {
                row: 2,
                tree: RED,
                title: "Hunter's Eye",
                type: PASSIVE,
                maxRanks: 5,
                description: "Gain bonuses when fighting different types of enemies",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Critical Hit Damage", 3, "+3% vs. Humans"),
                    newStat("Armor Damage", 6, "+6% vs. Robots"),
                    newStat("Damage Reduction", 5, "+5% vs. Beasts"),
                ]
            },
            {
                row: 2,
                tree: RED,
                title: "Head Count",
                type: PASSIVE,
                maxRanks: 3,
                description: "Chance for Action Skill Cooldown to be reduced when scoring a Critical Hit",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Critical Hit Damage", 3, "% vs. Humans"),
                    newStat("Cooldown Time Reduction Chance", 10, "+10%"),
                    newStat("Cooldown Time", -2, "-2s"),
                ]
            },
            {
                row: 2,
                tree: RED,
                title: "Ambush Predator",
                type: PASSIVE,
                maxRanks: 5,
                description: "Weapon Handling and Critical Hit Damage are increased when no enemies are nearby.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Critical Hit Damage", 4, "+4%"),
                    newStat("Handling", 17, "+17%"),
                ]
            },
            {
                hide: true
            },
        ],
        [{
                row: 3,
                tree: RED,
                title: "Falconer's Feast",
                type: AUGMENT,
                description: "When the Rakk damages an enemy, 7% of max health is restored to player.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Health Returned", 7, "7% of Max Health"),
                ]
            },
            {
                hide: true
            },
            {
                row: 3,
                tree: RED,
                title: "Two F4ng",
                type: PASSIVE,
                maxRanks: 5,
                description: "Gain the chance to fire an extra projectile per shot.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Extra Projectile Chance", 5, "+5%"),
                ]
            },
            {
                hide: true
            },
            {
                row: 3,
                tree: RED,
                title: "Spiderant Scorcher",
                type: PET,
                description: "Spiderant Scorcher occasionally deals +10% Incendiary Damage to all enemies nearby, and also grants Elemental Resistance in addition to +1% of Max Health Regen.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Health Regeneration", 1, "+1.0% of Max Health/sec"),
                    newStat("Elemental Damage", 10, "+10.0%"),
                ]
            },
        ],
        [{
                row: 4,
                tree: RED,
                title: "Flock 'N Load",
                type: AUGMENT,
                description: "Fl4k sends forward additional Rakk",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Additional Rakk", 2, "+2"),
                ]
            },
            {
                row: 4,
                tree: RED,
                title: "Big Game",
                type: PASSIVE,
                maxRanks: 3,
                description: "Hunter Skills become much more effective with longer duration.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Hunter Skill Effects", 10, "+10%"),
                    newStat("Hunter Skill Duration", 33, "+33%"),
                ]
            },
            {
                hide: true
            },
            {
                row: 4,
                tree: RED,
                title: "The Most Dangerous Game",
                type: PASSIVE,
                maxRanks: 3,
                description: "Hunter Kill Skill - Gain increased Critical Hit Damage, Gun Damage, and Handling when killing a Badass or stronger enemy, in addition to a cash reward.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Gun Damage", 8, "+8%"),
                    newStat("Critical Hit Damage", 3.3, "+3.3%"),
                    newStat("Handling", 14.3, "+14.3%"),
                    newStat("Duration", 120, "120 seconds"),
                ]
            },
            {
                row: 4,
                tree: RED,
                title: "Spiderant Countess",
                type: PET,
                description: "Spiderant Countess adds +5% Damage reduction to player, and burrows to attack with Corrosive Damage.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Health Regeneration", 1, "+1.0% of Max Health/sec"),
                    newStat("Damage Reduction", 5, "+5.0%"),
                ]
            },
        ],
        [{
                row: 5,
                tree: RED,
                title: "Rakkcelerate",
                type: AUGMENT,
                description: "Rakks have +20% Cooldown Rate and gains 1 additional charge.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Gun Damage", 8, "+8%"),
                    newStat("Critical Hit Damage", 3.3, "+3.3%"),
                    newStat("Handling", 14.3, "+14.3%"),
                    newStat("Duration", 120, "120 seconds"),
                ]
            },
            {
                hide: true
            },
            {
                row: 5,
                tree: RED,
                title: "Galactic Shadow",
                type: PASSIVE,
                maxRanks: 1,
                description: "Deal increased Critical Hit Damage while making enemies less likely to target player.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Critical Hit Damage", 15, "+15%"),
                ]
            },
            {
                row: 5,
                tree: RED,
                title: "Grim Harvest",
                type: PASSIVE,
                maxRanks: 5,
                description: "Gain increased Gun Damage and Action Skill Damage.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Gun Damage", 3, "+3%"),
                    newStat("Action Skill Damage", 5, "+5%"),
                ]
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
                row: 6,
                tree: RED,
                title: "Megavore",
                type: PASSIVE,
                maxRanks: 1,
                description: "Gain the chance to score a Critical Hit against any part of an enemy.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Cirtical Hit Damage", 20, "+20%"),
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
    master: [
        [{
                hide: true
            },
            {
                title: "Guard Skag",
                row: 0,
                type: PET,
                description: "Increases your damage by 5, Skag can vomit acid onto enemies.",
                image: require('../assets/images/skills/adrenaline.png'),
            },
            {
                title: "Gamma Burst",
                row: 0,
                type: ACTION,
                description: "Create a rift at target location to teleport your pet through and deal 56 radiation damage to nearby enemies for 20 seconds with a 30 second cooldown. Will also irradiate pet, causing it to grow and size and deal radiation damage on attack. Can also be used to revive downed or dead pet, but doubles the cooldown time.",
                image: require('../assets/images/skills/adrenaline.png'),
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
                title: "Ferocity",
                row: 1,
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 5,
                description: "Increases Pet Damage.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Pet Damage", 10, "+10%"),
                ]
            },
            {
                title: "Persistence Hunter",
                row: 1,
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 3,
                description: "Increases Gun Damage and Action Skill Duration.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Gun Damage", 4, "+4%"),
                    newStat("Action Skill Duration", 15, "+15%"),
                ]
            },
            {
                title: "Go for the Eyes!",
                row: 1,
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 5,
                description: "Pet's first attack is an automatic Critical Hit.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Pet Critical Hit Damage", 15, "+15%"),
                ]
            },
            {
                hide: true
            },
        ],
        [{
                title: "Atomic Aroma",
                row: 2,
                tree: BLUE,
                type: AUGMENT,
                description: "Gamma Burst surrounds pet with a Radiation Aura that deals 4 Radiation damage per second.",
                image: require('../assets/images/skills/adrenaline.png'),
            },
            {
                title: "Who Rescued Who?",
                row: 2,
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 5,
                description: "Regenerate health whenever pet attacks, and vice-versa.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Converts +1.0% of Damage Dealth into Pet Health", 1.0, "Converts +1.0% of Damage Dealth into Pet Health"),
                    newStat("Health Regeneration", 0.4, "+0.4% of Max Health/sec"),
                ]
            },
            {
                title: "He Bites!",
                row: 2,
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 3,
                description: "When pet takes damage, some damage is returned to attacker.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Damage Reflected", 5, "+5%"),
                ]
            },
            {
                title: "Frenzy",
                row: 2,
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 5,
                description: "Hunter Skill - When pet deals damage, gains a stack of Frenzy that increases damage.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Damage", 0.8, "+0.8% per stack"),
                    newStat("Max Frenzy Stacks", 10, ""),
                ]
            },
            {
                hide: true
            },
        ],
        [{
                title: "Empathic Rage",
                row: 3,
                tree: BLUE,
                type: AUGMENT,
                description: "Player damage is increased during Gamma Burst by 20.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: []
            },
            {
                hide: true
            },
            {
                title: "Psycho Head on a Stick",
                row: 3,
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 1,
                description: "Hunter Kill Skill - Pet gains increase Movement Speed and Damage when player kills an enemy.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Pet Movement Speed", 12, "+12%"),
                    newStat("Pet Damage", 10, "+10%"),
                    newStat("Psycho Head On a Stick Duraction", 8, "8 seconds"),
                ]
            },
            {
                title: "Hive Mind",
                row: 3,
                tree: BLUE,
                type: PASSIVE,
                description: "When damage is taken, a portion is shared to the pet instead.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Damage Shared", 6.5, "+6.5%"),
                ]
            },
            {
                title: "Great Horned Skag",
                row: 3,
                tree: BLUE,
                type: PET,
                description: "Great Horned Skag increases player's Damage by 5 and +10% Gun Damage, and can be commanded to charge into enemies to send them into the air.",
                image: require('../assets/images/skills/adrenaline.png'),
            },
        ],
        [{
                title: "Endurance",
                row: 4,
                tree: BLUE,
                type: AUGMENT,
                description: "When player or pet kills an enemy during Gamma Burst, the duration is extended by 3 seconds, and pet damage is increased by +10% up to 5 times.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: []
            },
            {
                hide: true
            },
            {
                title: "Barbaric Yawp",
                row: 4,
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 5,
                description: "Increases power of Pet Bonuses granted to player.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Pet Bonuses", 20, "+20%"),
                ]
            },
            {
                title: "Mutated Defenses",
                row: 4,
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 1,
                description: "When pet is at low health, it gains Damage Reduction and Health Regeneration.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Damage Reduction", 30, "+30%"),
                    newStat("Health Regeneration", 40, "+40% of Max Pet Health"),
                    newStat("Mutated Defenses Cooldown", 15, ""),
                ]
            },
            {
                title: "Eridian Skag",
                row: 4,
                tree: BLUE,
                type: PET,
                description: "Eridian Skag will increase player's Damage by 5 and +5% Fire Rate, and can pull enemies into a Singularity.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: []
            },
        ],
        [{
                title: "Burst Aid",
                row: 5,
                tree: BLUE,
                type: AUGMENT,
                description: "The rift remains after using Gamma Burst for the duration of the skill, and will heal allies for +20% of Max Health per second.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: []
            },
            {
                title: "Pack Tactics",
                row: 5,
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 3,
                description: "All damage dealt by player and pet are increased, and Max Health is increased.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Pet and Fl4k Damage", 5, "+5%"),
                    newStat("Pet and Fl4k Maximum Health", 5, "+5%"),
                ]
            },
            {
                hide: true
            },
            {
                title: "Shared Spirit",
                row: 5,
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 1,
                description: "When at low health, a portion of all damage is shared to pet instead.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Damage Shared", 50, "+50%"),
                ]
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
                title: "Dominance",
                row: 6,
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 1,
                description: "Melee Override Skill - Establishes dominance over an enemy, turning it to an ally (time is doubled if enemy is a beast), and will constantly lose health until dead.",
                image: require('../assets/images/skills/adrenaline.png'),
                stats: [
                    newStat("Dominance Duration", 12, "12 seconds"),
                    newStat("Target loses 2% of Max Health/sec", 2, "Target loses 2% of Max Health/sec"),
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