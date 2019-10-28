import {
    PASSIVE,
    AUGMENT,
    ACTION,
    newStat,
    RED,
    GREEN,
    BLUE
} from './constants';

export default {
    equipped: {
        action1: null,
        augment1: null,
        action2: null,
        augment2: null,
    },
    shieldOfRetribution: [
        [{
                hide: true
            },
            {
                hide: true
            },
            {
                title: "Railgun",
                tree: RED,
                type: ACTION,
                description: "This weapon fires electrified high-velocity projectiles that deal Shock Damage.",
                image: require('../assets/images/skills/moze/RailGun.png'),
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
                title: "Selfless Vengeance",
                tree: RED,
                type: PASSIVE,
                maxRanks: 5,
                image: require('../assets/images/skills/moze/SelflessVengeance.png'),
                description: "When reloading, lose a small bit of health to grant additional Incendiary Damage to you and allies for a period of time.",
                stats: [
                    newStat("Current Health Removed", [1, 2, 3, 4, 5], "", "%"),
                    newStat("Bonus Incendiary Damage", [3, 6, 9, 12, 15], "+", "%"),
                    newStat("Duration", [5, 5, 5, 5, 5], "", "seconds"),
                ]

            },
            {
                title: "Security Bear",
                tree: RED,
                type: PASSIVE,
                maxRanks: 1,
                image: require('../assets/images/skills/moze/SecurityBear.png'),
                description: "Grants Iron Bear a bubble shield that reduces damage taken, and can be reactivated after a time.",
                stats: [
                    newStat("20% of Iron Bear Max Health added as Shields Bubble Recharge Delay", [5], "", "seconds"),
                ]
            },
            {
                title: "Armored Infantry",
                tree: RED,
                type: PASSIVE,
                maxRanks: 5,
                image: require('../assets/images/skills/moze/ArmoredInfantry.png'),
                description: "While shield is active, gain Damage Reduction and increased Gun Damage.",
                stats: [
                    newStat("Damage Reduction", [3, 6, 8, 11, 13], "+", "%"),
                    newStat("Gun Damage", [3, 6, 9, 12, 15], "+", "%"),
                ]
            },
            {
                hide: true
            },
        ],
        [{
                title: "Hell on Rails",
                tree: RED,
                type: AUGMENT,
                description: "Railgun now fires superheated rounds that deal Incendiary Damage, but drain +30% fuel per shot.",
                image: require('../assets/images/skills/moze/HellOnRails.png'),
            },
            {
                title: "Drowning in Brass",
                tree: RED,
                type: PASSIVE,
                maxRanks: 5,
                image: require('../assets/images/skills/moze/DrowningBrass.png'),
                description: "Kill Skill - Grants a stack of Drowning in Brass for each kill that reduces Fire Rate but increases Gun Damage for you and allies.",
                stats: [
                    newStat("Moze Fire Rate", [0.5, 1, 1.5, 2, 2.5], "-", "% per stack"),
                    newStat("Gun Damage", [4, 8, 12, 16, 20], "+", "% per stack"),
                    newStat("Max Drowning in Brass Stacks", [3, 3, 3, 3, 3], "", "Stacks"),
                    newStat("Drowning in Brass Duration", [15, 15, 15, 15, 15], "", "seconds"),
                ]
            },
            {
                title: "Thin Red Line",
                tree: RED,
                type: PASSIVE,
                maxRanks: 3,
                image: require('../assets/images/skills/moze/ThinRedLine.png'),
                description: "Reserve a portion of Moze's health, converting that same amount to Maximum Shields.",
                stats: [
                    newStat("Current Effect", [20, 40, 60], "+", "% Max Health Reserved and added to Max Shields"),
                ]
            },
            {
                title: "Vladof Ingenuity",
                tree: RED,
                type: PASSIVE,
                maxRanks: 5,
                image: require('../assets/images/skills/moze/VladofIngenuity.png'),
                description: "Moze's Maximum Shield is increased, and she gains resistance to Shock Damage.",
                stats: [
                    newStat("Shock Damage Resistance", [15, 26, 35, 42, 47], "+", "%"),
                    newStat("Max Shield", [6, 12, 18, 24, 30], "+", "%"),
                ]
            },
            {
                title: "Bear Fist",
                tree: RED,
                type: AUGMENT,
                image: require('../assets/images/skills/moze/BearFist.png'),
                description: "Deal massive damage to a single target at close range with this pneumatic fist.",
            },
        ],
        [{
                title: "Capacitive Armature",
                tree: RED,
                type: AUGMENT,
                image: require('../assets/images/skills/moze/CapacitiveArmature.png'),
                description: "When Railgun hits an enemy, it chains to nearby enemies, dealing reduced Shock Damage to more targets.",
                stats: [
                    newStat("Splinter Damage", [75], "-", "%"),
                ]
            },
            {
                title: "Full Can of Whoop-Ass",
                tree: RED,
                type: PASSIVE,
                maxRanks: 1,
                image: require('../assets/images/skills/moze/FullCanWhoopAss.png'),
                description: "Entering Iron Bear causes Moze's and her allies' shields to immediately begin recharging at an increased Shield Recharge Rate.",
                stats: [
                    newStat("Shield Recharge Rate", [25], "+", "%"),
                ]
            },
            {
                title: "Experimental Munitions",
                tree: RED,
                type: PASSIVE,
                maxRanks: 1,
                image: require('../assets/images/skills/moze/ExperimentalMunitions.png'),
                description: "Whenever Moze scores a Critical Hit, she deals bonus Incendiary Damage.",
                stats: [
                    newStat("Bonus Incendiary Damage", [10], "+", "% of damage dealt"),
                ]
            },
            {
                hide: true,
            },
            {
                title: "Wild Swing",
                tree: RED,
                type: AUGMENT,
                image: require('../assets/images/skills/moze/WildSwing.png'),
                description: "Whenever Bear Fist hits an enemy, it does random bonus Elemental Damage to it and all nearby enemies.",
                stats: [
                    newStat("Elemental Damage", [35], "+", "% of damage dealt"),
                ]
            },
        ],
        [{
                title: "Corrosive Sabot Round",
                tree: RED,
                type: AUGMENT,
                image: require('../assets/images/skills/moze/CorrosiveSabotRound.png'),
                description: "Railgun now fires a specialty round that deals reduced damage and explodes after a short delay.",
                stats: [
                    newStat("Railgun Damage", [50], "-", "%"),
                    newStat("Fuel Drain", [50], "-", "%"),
                    newStat("Magazine Size", [2], "+", ""),
                    newStat("Converts to Corrosive Damage", [], "", ""),
                ]
            },
            {
                title: "Behind the Iron Curtain",
                tree: RED,
                type: PASSIVE,
                maxRanks: 3,
                image: require('../assets/images/skills/moze/BehindCurtain.png'),
                description: "Moze's Shield Recharge Delay is reduced, and her Shield Recharge Rate is increased.",
                stats: [
                    newStat("Shield Recharge Rate", [7, 14, 21], "+", "%"),
                    newStat("Shield Recharge Delay", [7, 14, 19], "-", "%"),
                ]
            },
            {
                hide: true
            },
            {
                title: "Desperate Measures",
                tree: RED,
                type: PASSIVE,
                maxRanks: 3,
                image: require('../assets/images/skills/moze/DesperateMeasures.png'),
                description: "Moze's Gun Damage is increased depending on how low her health is. The lower her health, the greater the increase.",
                stats: [
                    newStat("Gun Damage", [17, 33, 50], "up to +", "%"),
                ]
            },
            {
                title: "Close the Distance",
                tree: RED,
                type: AUGMENT,
                image: require('../assets/images/skills/moze/CloseDistance.png'),
                description: "Instead of punching, Bear Fist now launches its fist forward and grabs enemies at greatly increased range, dealing Shock Damage and pulling them back to Iron Bear.",
            },
        ],
        [{
                hide: true
            },
            {
                title: "Phalanx Doctrine",
                tree: RED,
                type: PASSIVE,
                maxRanks: 5,
                image: require('../assets/images/skills/moze/PhalanxDoctrine.png'),
                description: "After killing an enemy, Moze gains a stack of Phalanx Doctrine. For each stack, Moze's Maximum Shield and Gun Damage are increased. Each stack lasts 30 seconds. There is no stack limit.",
                stats: [
                    newStat("Max Shields", [3, 6, 9, 12, 15], "+", "% per stack"),
                    newStat("Gun Damage", [2, 4, 6, 8, 10], "+", "% per stack"),
                    newStat("Phalanx Doctrine Duration", [30, 30, 30, 30, 30], "", "seconds"),
                ]
            },
            {
                title: "Force Feedback",
                tree: RED,
                type: PASSIVE,
                maxRanks: 1,
                image: require('../assets/images/skills/moze/ForceFeedback.png'),
                description: "Whenever Moze scores a Critical Kill, her shields immediately begin recharging.",
            },
            {
                hide: true,
            },
            {
                title: "Shockhammer",
                tree: RED,
                type: AUGMENT,
                image: require('../assets/images/skills/moze/Shockhammer.png'),
                description: "Bear Fist is now capable of sustained rapid fire punching. Also, Bear Fist has reduced Fuel Drain and deals Bonus Shock Damage with each hit.",
                stats: [
                    newStat("Shock Damage", [19], "+", "% of damage dealt"),
                    newStat("Fuel Drain", [40], "-", "%"),
                ]
            },
        ],
        [{
                hide: true
            },
            {
                hide: true
            },
            {
                title: "Tenacious Defense",
                tree: RED,
                type: PASSIVE,
                maxRanks: 1,
                image: require('../assets/images/skills/moze/TenaciousDef.png'),
                description: "Whenever Moze's shield is fully depleted, she instantly restores a portion, and her Gun Damage is increased for a short time. This skill can only trigger after a full shield recharge.",
                stats: [
                    newStat("Restores", [40], "+", "% of Max Shield"),
                    newStat("Tenacious Defense Duration", [30], "", "seconds"),
                    newStat("Gun Damage", [30], "+", "%"),
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
    bottomlessMags: [
        [{
                hide: true
            },
            {
                hide: true
            },
            {
                title: "Minigun",
                tree: GREEN,
                type: ACTION,
                image: require('../assets/images/skills/moze/MiniGun.png'),
                description: "The Minigun is capable of sustained rapid fire. Firing for long periods will overheat it, rendering it inoperable for a few seconds.",
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
                title: "Cloud of Lead",
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 5,
                image: require('../assets/images/skills/moze/CloudLead.png'),
                description: "Occasionally, Moze's and Iron Bear's shots will deal additional Incendiary Damage and won't consume ammo.",
                stats: [
                    newStat("Every 8 shots does not consume ammo", [], "", ""),
                    newStat("Bonus Incendiary Damage", [2.25, 4.5, 6.75, 9, 11.25], "+", "%"),
                ]
            },
            {
                title: "Dakka Bear",
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 1,
                image: require('../assets/images/skills/moze/DakkaBear.png'),
                description: "Adds a manned turret to the back of Iron Bear.",
            },
            {
                title: "Matched Set",
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 5,
                image: require('../assets/images/skills/moze/MatchingSet.png'),
                description: "Moze's currently equipped weapon gains a stacking bonus to Magazine Size and Decreased Heat Per Shot for every piece of equipped gear that has a matching manufacturer.",
                stats: [
                    newStat("Heat Per Shot", [2, 4, 6, 9, 11], "-", "%"),
                    newStat("Magazine Size", [2, 4, 6, 8, 10], "+", "%"),
                ]
            },
            {
                hide: true
            },
        ],
        [{
                title: "Let Off Some Steam",
                tree: GREEN,
                type: AUGMENT,
                image: require('../assets/images/skills/moze/LetOffSteam.png'),
                description: "Minigun deals more damage as heat increases, and can be fired for longer before overheating.",
                stats: [
                    newStat("Damage", [80], "Up to +", "%"),
                    newStat("Minigun Heat Capacity", [35], "+", "%"),
                ]
            },
            {
                title: "Stoke the Embers",
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 3,
                image: require('../assets/images/skills/moze/StokeTheEmbers.png'),
                description: "Increases Moze and Iron Bear's Incendiary Damage.",
                stats: [
                    newStat("Incendiary Damage", [10, 20, 30], "+", "%"),
                ]
            },
            {
                title: "Redistribution",
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 1,
                image: require('../assets/images/skills/moze/Redistribution.png'),
                description: "After Moze scores a Critical Hit, she regenerates ammo for a few seconds.",
                stats: [
                    newStat("Ammo Regeneration", [5], "+", "% of magazine"),
                    newStat("Redistribution Duration", [3], "", "seconds"),
                ]
            },
            {
                title: "Scrappy",
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 5,
                image: require('../assets/images/skills/moze/Scrappy.png'),
                description: "While moving, Moze's Handling, Weapon Swap, and Mode Switch Speed are increased.",
                stats: [
                    newStat("Weapon Swap Speed", [16, 27.5, 36.3, 43.2, 48.7], "+", "%"),
                    newStat("Mode Switch Speed", [16, 27.5, 36.3, 43.2, 48.7], "+", "%"),
                    newStat("Handling", [10.7, 19.4, 26.5, 32.4, 37.5], "+", "%"),
                ]
            },
            {
                title: "Salamander",
                tree: GREEN,
                type: AUGMENT,
                image: require('../assets/images/skills/moze/Salamander.png'),
                description: "The Salamander is a flamethrower that deals Incendiary Damage to enemies at close range. The Salamander has infinite ammo but drains fuel with use.",
            },
        ],
        [{
                title: "General Winter",
                tree: GREEN,
                type: AUGMENT,
                image: require('../assets/images/skills/moze/GeneralWinter.png'),
                description: "Minigun fires Cryo Rounds which reduce Heat Gain and Fuel Drain, but deal reduced damage.",
                stats: [
                    newStat("Converts to Cryo Damage", [], "", ""),
                    newStat("Fuel Drain", [40], "-", "%"),
                    newStat("Minigun Damage", [30], "-", "%"),
                    newStat("Cryo Efficiency", [20], "+", "%"),
                ]
            },
            {
                title: "Rushin' Offensive",
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 1,
                image: require('../assets/images/skills/moze/RushinOffensive.png'),
                description: "Moze can sprint and shoot at the same time.",
            },
            {
                title: "Scorching RPM's",
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 5,
                image: require('../assets/images/skills/moze/ScorchingRPMs.png'),
                description: "Moze gains increased Fire Rate and Critical Hit Damage.",
                stats: [
                    newStat("Fire Rate", [3, 6, 9, 12, 15], "+", "%"),
                    newStat("Critical Hit Damage", [4, 8, 12, 16, 20], "+", "%"),
                ]
            },
            {
                hide: true,
            },
            {
                title: "Fuel Economy",
                tree: GREEN,
                type: AUGMENT,
                image: require('../assets/images/skills/moze/FuelEconomy.png'),
                description: "Reduces Salamander's Fuel Drain. Additionally, Iron Bear's Movement Speed is increased after damaging an enemy with Salamander.",
                stats: [
                    newStat("Movement Speed", [25], "+", "%"),
                    newStat("Fuel Drain", [25], "-", "%"),
                ]
            },
        ],
        [{
                title: "Exploding. Bullets.",
                tree: GREEN,
                type: AUGMENT,
                image: require('../assets/images/skills/moze/ExplodingBullets.png'),
                description: "Minigun fires Explosive Rounds that deal increased Splash Damage, but its Fire Rate is decreased.",
                stats: [
                    newStat("Minigun Fire Rate", [75], "-", "%"),
                    newStat("Minigun Damage", [126], "+", "%"),
                ]
            },
            {
                hide: true
            },
            {
                title: "The Iron Bank",
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 5,
                image: require('../assets/images/skills/moze/IronBank.png'),
                description: "Increases Moze's Magazine Size.",
                stats: [
                    newStat("Magazine Size", [7, 14, 21, 28, 35], "+", "%"),
                ]
            },
            {
                title: "Specialist Bear",
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 1,
                image: require('../assets/images/skills/moze/SpecialistBear.png'),
                description: "Equipping two of the same Weapons on Iron Bear increases the damage they deal.",
                stats: [
                    newStat("Iron Bear Damage", [25], "+", "%"),
                ]
            },
            {
                title: "Chemical Warfare",
                tree: GREEN,
                type: AUGMENT,
                image: require('../assets/images/skills/moze/ChemicalWarfare.png'),
                description: "The Salamander now deals Corrosive Damage. Additionally, Salamander's Melt Damage is increased.",
                stats: [
                    newStat("Converts to Corrosive Damage", [], "", ""),
                    newStat("Melt Damage", [50], "+", "%"),
                ]
            },
        ],
        [{
                hide: true
            },
            {
                title: "Some for the Road",
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 1,
                image: require('../assets/images/skills/moze/SomeForRoad.png'),
                description: "Moze gains infinite ammo for a few seconds after exiting Iron Bear.",
                stats: [
                    newStat("Some for the Road duration", [5], "", "seconds"),
                ]
            },
            {
                title: "Click, Click..",
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 3,
                image: require('../assets/images/skills/moze/ClickClick.png'),
                description: "Moze gains increased Gun Damage as her magazine empties. If Moze has a COV gun equipped, she gains Gun Damage as the heat increases.",
                stats: [
                    newStat("Gun Damage", [12, 24, 36], "up to +", "%"),
                ]
            },
            {
                hide: true,
            },
            {
                title: "Molten Roar",
                tree: GREEN,
                type: AUGMENT,
                image: require('../assets/images/skills/moze/MoltenRoar.png'),
                description: "The Salamander burst-fires 3 projectiles with increased Fuel Drain, the first of which leaves a large Incendiary area.",
                stats: [
                    newStat("Fuel Drain", [25], "+", "%"),
                ]
            },
        ],
        [{
                hide: true
            },
            {
                hide: true
            },
            {
                title: "Forge",
                tree: GREEN,
                type: PASSIVE,
                maxRanks: 1,
                image: require('../assets/images/skills/moze/Forge.png'),
                description: "Moze constantly regenerates ammo for her currently equipped weapon.",
                stats: [
                    newStat("Ammo Regeneration", [5], "+", "% of magazine per sec"),
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
    demolitionWoman: [
        [{
                hide: true
            },
            {
                hide: true
            },
            {
                title: "V-35 Grenade Launcher",
                tree: BLUE,
                type: ACTION,
                image: require('../assets/images/skills/moze/V_35.png'),
                description: "The V-35 is a semi-automatic grenade launcher. Its grenades are not affected by Moze's equipped grenade mod.",
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
                title: "Fire in the Skag Den",
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 5,
                image: require('../assets/images/skills/moze/FireSkagDen.png'),
                description: "Whenever Moze deals Splash Damage, she deals bonus Incendiary Damage.",
                stats: [
                    newStat("Bonus Incendiary Damage", [3, 6, 9, 12, 15], "+", "%"),
                ]
            },
            {
                title: "Deadlines",
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 3,
                image: require('../assets/images/skills/moze/Deadlines.png'),
                description: "Firing Iron Bear Weapons drains less Fuel. Killing an enemy while Iron Bear is active increases Fuel. This skill has diminishing returns.",
                stats: [
                    newStat("Fuel Drain", [12, 22, 30], "-", "%"),
                    newStat("Fuel Returned", [2, 4, 6], "Up to", "%"),
                ]
            },
            {
                title: "Grizzled",
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 5,
                image: require('../assets/images/skills/moze/Grizzled.png'),
                description: "Killing an enemy reduces Moze's remaining Active Skill Cooldown Time. This skill has diminishing returns.",
                stats: [
                    newStat("Iron Bear Cooldown Time", [1, 2, 3, 4, 5], "-", "seconds"),
                ]
            },
            {
                hide: true
            },
        ],
        [{
                title: "Shaped Charge",
                tree: BLUE,
                type: AUGMENT,
                image: require('../assets/images/skills/moze/ShapedCharge.png'),
                description: "Direct hits with the V-35 deal increased damage.",
                stats: [
                    newStat("Direct Hit Damage", [35], "+", "%"),
                ]
            },
            {
                title: "Means of Destruction",
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 3,
                image: require('../assets/images/skills/moze/MeansOfDestruction.png'),
                description: "Whenever Moze deals Splash Damage, there is a chance to add ammo to her currently equipped weapon's magazine, with a smaller chance to return a grenade.",
                stats: [
                    newStat("Ammo Chance", [3.3, 6.7, 10], "+", "%"),
                    newStat("Grenade Chance", [2, 4, 6], "+", "%"),
                ]
            },
            {
                title: "Torgue Cross-Promotion",
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 3,
                image: require('../assets/images/skills/moze/TorgueCrossPromo.png'),
                description: "All Splash Damage dealt by Moze has a chance to double in size.",
                stats: [
                    newStat("Chance to double Splash Damage Radius", [3, 6, 9, 12, 15], "+", "%"),
                ]
            },
            {
                title: "Stainless Steel Bear",
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 5,
                image: require('../assets/images/skills/moze/StainlessSteel.png'),
                description: "Iron Bear gains additional armor and increased Maximum Fuel.",
                stats: [
                    newStat("Iron Bear Armored", [6, 12, 18, 24, 30], "+", "%"),
                    newStat("Maximum Fuel", [4, 8, 12, 16, 20], "+", "%"),
                ]
            },
            {
                title: "Vanquisher Rocket Pod",
                tree: BLUE,
                type: AUGMENT,
                image: require('../assets/images/skills/moze/Vanquisher.png'),
                description: "The Vanquisher Rocket Pod is a rocket launcher capable of rapid-firing volleys of unguided explosive rockets.",
            },
        ],
        [{
                title: "Musical Chairs",
                tree: BLUE,
                type: AUGMENT,
                image: require('../assets/images/skills/moze/MusicalChairs.png'),
                description: "Occasionally, the V-35 fires a Singularity Grenade that pulls in nearby enemies before exploding.",
                stats: [
                    newStat("Singularity", [], "Every 7th grenade", ""),
                ]
            },
            {
                title: "Pull the Holy Pin",
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 3,
                image: require('../assets/images/skills/moze/PullTheHolyPin.png'),
                description: "Moze's grenades have a chance to score a Critical Hit, dealing greatly increased damage. Sources of Critical Hit Damage do not affect grenade Critical Hits.",
                stats: [
                    newStat("Critical Hit Chance", [10, 20, 30], "+", "%"),
                ]
            },
            {
                title: "Auto Bear",
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 1,
                image: require('../assets/images/skills/moze/AutoBear.png'),
                description: "After Moze exits Iron Bear, it will remain deployed in place for a short time. While Auto Bear is active, it will attack enemies until its duration ends, then self-destruct.",
                stats: [
                    newStat("Auto Bear Duration", [15], "", "seconds"),
                ]
            },
            {
                hide: true,
            },
            {
                title: "Active Tracking",
                tree: BLUE,
                type: AUGMENT,
                image: require('../assets/images/skills/moze/ActiveTracking.png'),
                description: "The Vanquisher Rocket Pod now fires homing rocket volleys and has increased Reload Speed. Can target up to 6 enemies.",
                stats: [
                    newStat("Reload Speed", [25], "+", "%"),
                ]
            },
        ],
        [{
                title: "Lock and Speedload",
                tree: BLUE,
                type: AUGMENT,
                image: require('../assets/images/skills/moze/LockSpeedLoad.png'),
                description: "The V-35's Reload Speed is greatly increased and it now fires a 5-round burst.",
                stats: [
                    newStat("Reload Speed", [25], "+", "%"),
                ]
            },
            {
                title: "Vampyr",
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 5,
                image: require('../assets/images/skills/moze/Vampyr.png'),
                description: "Whenever Moze damages an enemy with a thrown grenade, for every enemy hit, she restores a portion of her missing health.",
                stats: [
                    newStat("Restored portion of missing health per enemy hit", [4, 8, 12, 16, 20], "+", "%"),
                ]
            },
            {
                hide: true
            },
            {
                title: "Why Can't I Carry All These Grenades?",
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 3,
                image: require('../assets/images/skills/moze/WhyCantICarry.png'),
                description: "Increases Moze's grenade carrying capacity.",
                stats: [
                    newStat("Grenade Capacity", [1, 2, 3], "+", ""),
                ]
            },
            {
                title: "Target Softening",
                tree: BLUE,
                type: AUGMENT,
                image: require('../assets/images/skills/moze/TargetSoftening.png'),
                description: "The Vanquisher Rocket Pod deals greatly reduced damage per rocket, but fires in a 6-rocket spread. Additionally, enemies hit by Vanquisher Rocket Pod rockets take increased damage.",
                stats: [
                    newStat("Enemy Damage Taken", [15], "+", "%"),
                    newStat("Damage", [74], "-", "%"),
                ]
            },
        ],
        [{
                hide: true
            },
            {
                title: "To The Last",
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 1,
                image: require('../assets/images/skills/moze/ToTheLast.png'),
                description: "Moze gains the ability to throw grenades while in Fight For Your Life. If she threw a grenade before gaining Second Wind, a grenade is refunded.",
            },
            {
                title: "Explosive Punctuation",
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 5,
                image: require('../assets/images/skills/moze/ExplosivePunctuation.png'),
                description: "When Moze deals Splash Damage, her Action Skill Cooldown Rate is briefly increased.",
                stats: [
                    newStat("Action Skill Cooldown Rate", [5, 10, 15, 20, 25], "+", "%"),
                ]
            },
            {
                hide: true,
            },
            {
                title: "Hammerdown Protocol",
                tree: BLUE,
                type: AUGMENT,
                image: require('../assets/images/skills/moze/Hammerdown.png'),
                description: "Instead of a volley of conventional rockets, the Vanquisher Rocket Pod launches a single rocket with a nuclear warhead, dealing massive Radiation Damage.",
                stats: [
                    newStat("Damage", [380], "+", "%"),
                    newStat("Magazine Size", [1], "", ""),
                ]
            },
        ],
        [{
                hide: true
            },
            {
                hide: true
            },
            {
                title: "Short Fuse",
                tree: BLUE,
                type: PASSIVE,
                maxRanks: 1,
                image: require('../assets/images/skills/moze/ShortFuse.png'),
                description: "Whenever Moze deals Gun Damage, there is a chance of a secondary explosion centered on the target.",
                stats: [
                    newStat("Secondary Explosion Chance", [20], "", "%"),
                    newStat("Secondary Explosion Damage", [75], "", "% of Gun Damage"),
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