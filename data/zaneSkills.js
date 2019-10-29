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
                title: "Digi-Clone",
                type: ACTION,
                tree: RED,
                image: require('../assets/images/skills/zane/DigiClone.png'),
                description: "Spawn a Digi-Clone of Zane. This Clone stays in place, but distracts and fires at enemies. Zane may swap places with his clone.",
				stats: [
                    newStat("Duration", [15], "", " seconds"),
					newStat("Cooldown", [28], "", " seconds"),
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
                title: "Synchronicity",
                type: PASSIVE,
                tree: RED,
                maxRanks: 5,
                image: require('../assets/images/skills/zane/Synchronicity.png'),
                description: "Whenever one or more of Zane's action skills are active, he gains increased Gun Damage for each active action skill.",
                stats: [
                    newStat("Gun Damage", [4,8,12,16,20], "+", "% per active action skill"),
                ]
            },
            {
                title: "Praemunitus",
                type: PASSIVE,
                tree: RED,
                maxRanks: 3,
                image: require('../assets/images/skills/zane/Praemunitus.png'),
                description: "Zane and his Digi-Clone gain increased Magazine Size.",
                stats: [
                    newStat("Magazine Size", [8.3,16.7,25], "+", "%"),
                ]
            },
            {
                title: "Borrowed Time",
                type: PASSIVE,
                tree: RED,
                maxRanks: 5,
                image: require('../assets/images/skills/zane/BorrowedTime.png'),
                description: "Zane gains increased Action Skill Duration for every Action Skill.",
                stats: [
                    newStat("Action Skill Duration", [3,6,9,12,15], "+", "% per active action skill."),
                    newStat("Gun Damage", 3, "+3.0%"),
                ]
            }, 
            {
                hide: true
            },
        ],
        [
            {
                title: "Binary System",
                type: AUGMENT,
                tree: RED,
                image: require('../assets/images/skills/zane/BinarySystem.png'),
                description: "Whenever Zane swaps places with his Clone, a Cryo Nova is triggered around Zane and his Clone.",
                stats: [
                    newStat("Nova Damage", [46], "", ""),
                ]
            },
            {
                title: "Donnybrook",
                type: PASSIVE,
                tree: RED,
                maxRanks: 5,
                image: require('../assets/images/skills/zane/DonnyBrook.png'),
                description: "Whenever Zane kills an enemy, he and his Digi-Clone receive increased Gun Damage and gain Health Regeneration for a few seconds.",
                stats: [
                    newStat("Health Regeneration", [0.5,1,1.5,2,2.5], "+", "% of missing health per sec"),
                    newStat("Gun Damage", [3,6,9,12,15], "+", "%"),
                    newStat("Duration", [8,8,8,8,8], "", " seconds"),
                ]
            },
            {
                title: "Fractal Frags",
                type: PASSIVE,
                tree: RED,
                maxRanks: 3,
                image: require('../assets/images/skills/zane/FractalFrags.png'),
                description: "Digi-Clone throws a copy of current Grenade Mod when first activated. Digi-Clone drops free Grenade if killed. Digi-Clone can throw another grenade is enemy is killed.",
                stats: [
                    newStat("Grenade Chance", [30], "", "%"),
                ]
            },
            {
                title: "Duct Tape Mod",
                type: PASSIVE,
                tree: RED,
                maxRanks: 5,
                image: require('../assets/images/skills/zane/DuctTapeMod.png'),
                description: "First shot fired from Zane's gun has a chance to also fire a grenade. Chance is higher the more grenades in capacity.",
                stats: [
                    newStat("Grenade Chance", [4,8,12,16,20], "", "up to 20%"),
                    newStat("Cooldown", [8,8,8,8,8], "", " seconds"),
                ]
            },
            {
                hide: true,
            },
        ],
        [
            {
                title: "Schadenfreude",
                type: AUGMENT,
                tree: RED,
                image: require('../assets/images/skills/zane/SchadenFreude.png'),
                description: "Whenever Zane's clone takes damage, his shield is restored by a portion of that damage.",
				stats: [
                    newStat("Shields Restored", [100], "+", "% of Digi-Clone damage"),
                ]
            },
            {
                hide: true,
            },
            {
                title: "Quick Breather",
                type: PASSIVE,
                tree: RED,
                maxRanks: 1,
                image: require('../assets/images/skills/zane/QuickBreather.png'),
                description: "Zane's shield immediately recharges when swapping places with his clone.",
            },
            {
                hide: true,
            },
            {
                title: "Which One's Real?",
                type: AUGMENT,
                tree: RED,
                image: require('../assets/images/skills/zane/WhichOnesReal.png'),
                description: "Enemies are more likely to target the clone for a few seconds after it's summoned and after swapping places.",
                stats: [
                    newStat("Duration", [4], "", " seconds"),
                ]
            },
        ],
        [
            {
                title: "Doppelbanger",
                type: AUGMENT,
                tree: RED,
                image: require('../assets/images/skills/zane/DoppelBanger.png'),
                description: "You may command your clone to self-destruct, dealing Fire Damage to all nearby enemies. More damage is dealt them more Action Skill time remaining.",
				stats: [
                    newStat("Damage", [280], "Up to", ""),
                ]
            },
            {
                title: "Pocket Full of Grenades",
                type: PASSIVE,
                tree: RED,
                maxRanks: 3,
                image: require('../assets/images/skills/zane/PocketFull.png'),
                description: "Gain Grenade Regeneration after killing an enemy.",
                stats: [
                    newStat("Grenade Regeneration", [7,13,20], "", "% per sec"),
                    newStat("Duration", [8,8,8], "", " seconds"),
                ]
            },
            {
                title: "Old-U",
                type: PASSIVE,
                tree: RED,
                maxRanks: 1,
                image: require('../assets/images/skills/zane/OldU.png'),
                description: "During Fight For Your Life you may destroy your Digi-Clone to gain a Second Wind with full health.",
				stats: [
                    newStat("Max Health Restored", [100], "", "% of Max Health"),
                ]
            },
            {
                title: "Supersonic Man",
                type: PASSIVE,
                tree: RED,
                maxRanks: 3,
                image: require('../assets/images/skills/zane/SupersonicMan.png'),
                description: "Gain increased Movement Speed for each active Action Skill.",
                stats: [
                    newStat("Movement Speed", [4,8,12], "+", "% per active action skill"),
                ]
            },
            {
                title: "Digital Distribution",
                type: AUGMENT,
                tree: RED,
                image: require('../assets/images/skills/zane/DigitalDistribution.png'),
                description: "If Zane takes health damage while the clone is active, a portion of that damage is shared to his clone instead.",
                stats: [
                    newStat("Shared Health Damage", [75], "+", "%"),
                ]
            },
        ],
        [
            {
                hide: true
            },
            {
                title: "Like a Ghost",
                type: PASSIVE,
                tree: RED,
                maxRanks: 3,
                image: require('../assets/images/skills/zane/LikeAGhost.png'),
                description: "Gain the chance for Zane and his Digi-Clone to ignore bullets. Chance is increased after activating an Action Skill, and stacks.",
                stats: [
                    newStat("Ignore Bullet Chance", [2,4,6], "", "%"),
                    newStat("Additional Ignore Bullet Chance", [3,6,9], "", "%"),
                    newStat("Duration", [8,8,8], "", " seconds"),
                ]
            },
            {
                title: "Boom. Enhance.",
                type: PASSIVE,
                tree: RED,
                maxRanks: 1,
                image: require('../assets/images/skills/zane/BoomEnhance.png'),
                description: "Digi-Clone consumes up to 3 Grenades when summoned. For every grenade consumed, Digi-Clone gains increased Gun Damage, Max Health, Fire Rate, and Reload Speed.",
                stats: [
                    newStat("Gun Damage", [20], "+", "% per grenade"),
                    newStat("Max Health", [81], "+", "% per grenade"),
					newStat("Fire Rate", [5], "+", "% per grenade"),
                    newStat("Reload Speed", [31], "+", "% per grenade"),
					newStat("Digi-Clone Duration", [25], "+", "% per grenade"),
                ]
            },
            {
                title: "Trick of the Light",
                type: PASSIVE,
                tree: RED,
                maxRanks: 5,
                image: require('../assets/images/skills/zane/TrickOfLight.png'),
                description: "Deal Bonus Shock Damage to enemies that aren't targeting Zane.",
                stats: [
                    newStat("Bonus Damage", [6,12,18], "+", "% of damage dealt"),
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
                title: "Double Barrel",
                type: PASSIVE,
                tree: RED,
                maxRanks: 1,
                image: require('../assets/images/skills/zane/DoubleBarrel.png'),
                description: "Equip the clone with a copy of Zane's current weapon when activated. Swapping placed causes Zane and clone to gain increased Gun Damage.",
                stats: [
                    newStat("Gun Damage", [20], "+", "%"),
                    newStat("Item Duping", [100], "+", "%"),
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
                title: "SNTNL",
                type: ACTION,
                tree: BLUE,
                image: require('../assets/images/skills/zane/SNTNL.png'),
                description: "Send into battle an automated SNTNL drone that continually flies through the environment and attacks enemies with its Machine Guns.",
				stats: [
                    newStat("Duration", [24], "", " seconds"),
					newStat("Cooldown", [60], "", " seconds"),
					newStat("Machine Gun Damage", [4], "", "")
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
                title: "Violent Speed",
                type: PASSIVE,
                tree: BLUE,
                maxRanks: 5,
                image: require('../assets/images/skills/zane/ViolentSpeed.png'),
                description: "Increases Movement Speed after killing an enemy.",
                stats: [
                    newStat("Movement Speed", [4,8,12,16,20], "+", "%"),
					newStat("Duration", [8,8,8,8,8], "", " seconds"),
                ]
            },
            {
                title: "Cold Bore",
                type: PASSIVE,
                tree: BLUE,
                maxRanks: 5,
                image: require('../assets/images/skills/zane/ColdBore.png'),
                description: "Gain increased Weapon Swap Speed. Shot fired after swapping weapons deals Bonus Cryo Damage.",
                stats: [
                    newStat("Weapon Swap Speed", [13,23,31,38,43], "+", "%"),
					newStat("Bonus Cryo Damage", [6,12,18,24,30], "+", "%"),
                ]
            },
            {
                title: "Violent Momentum",
                type: PASSIVE,
                tree: BLUE,
                maxRanks: 5,
                image: require('../assets/images/skills/zane/ViolentMomentum.png'),
                description: "Gun Damage is increased while moving. Gun Damage bonus increases the greater the move speed.",
                stats: [
                    newStat("Gun Damage", [4,8,12,16,20], "+", "% at default walk speed"),
                ]
            },
            {
                hide: true
            },
        ],
        [
            {
                title: "Winter's Drone",
                type: AUGMENT,
                tree: BLUE,
                image: require('../assets/images/skills/zane/WintersDrone.png'),
                description: "Converts SNTNL's primary weapons to Cryo Damage.",
				stats: [
                    newStat("Drone Damage", [20], "-", "%"),
                ]
            },
            {
                title: "Cool Hand",
                type: PASSIVE,
                tree: BLUE,
                maxRanks: 5,
                image: require('../assets/images/skills/zane/CoolHand.png'),
                description: "Gain increased Reload Speed, and gain bonus Reload Speed after killing an enemy.",
                stats: [
                    newStat("Reload Speed", [2.9,5.7,8.3,10.7,13], "+", "%"),
                    newStat("Reload Speed", [4,7,11,14,17], "+", "% after kill"),
                    newStat("Duration", [8,8,8,8,8], "15 seconds"),
                ]
            },
            {
                title: "Drone Delivery",
                type: PASSIVE,
                tree: BLUE,
                maxRanks: 1,
                image: require('../assets/images/skills/zane/DroneDelivery.png'),
                description: "SNTNL will occasionally drop a free Grenade based on your current mod while attacking enemies.",
                stats: [
                    newStat("Cooldown", [15], "", " seconds"),
                ]
            },
            {
                title: "Salvation",
                type: PASSIVE,
                tree: BLUE,
                maxRanks: 5,
                image: require('../assets/images/skills/zane/Salvation.png'),
                description: "Weapons gain Life Steal after killing an enemy.",
                stats: [
                    newStat("Life Steal", [2,4,6,8,10], "+", "% of damage dealt"),
                    newStat("Duration", [8,8,8,8,8], "", " seconds"),
                ]
            },
            {
                hide: true,
            },
        ],
        [
            {
                title: "Bad Dose",
                type: AUGMENT,
                tree: BLUE,
                image: require('../assets/images/skills/zane/BadDose.png'),
                description: "SNTNL occasionally shoots out a beam of Radiation that weakens enemies and buffs Zane. Each weakened enemy increases Zane's Movement speed and Fire Rate, while weakening the enemies.",
                stats: [
                    newStat("Fire Rate", [2], "+", "% per enemy"),
                    newStat("Movement Speed", [6], "+", "% per enemy"),
                    newStat("Damage", [4], "", "per second"),
					newStat("Duration", [12], "", " seconds"),
                    newStat("Cooldown", [8], "", " seconds"),
                ]
            },
            {
                hide: true,
            },
            {
                title: "Death Follows Close",
                type: PASSIVE,
                tree: BLUE,
                maxRanks: 1,
                image: require('../assets/images/skills/zane/DeathFollowsClose.png'),
                description: "All Kill Skills gain increased Effect and Duration.",
				stats: [
                    newStat("Kill Skill Duration", [7], "+", " seconds"),
                    newStat("Kill Skill Bonus", [25], "+", "%"),
                ]
            },
            {
                hide: true,
            },
            {
                title: "Static Field",
                type: AUGMENT,
                tree: BLUE,
                image: require('../assets/images/skills/zane/StaticField.png'),
                description: "SNTNL emits a static field that sends a Shock Beam to nearby opponents, draining their shields and replenishing Zane's.",
                stats: [
                    newStat("Shield Damage", [2], "", "per second"),
                    newStat("Cooldown", [2], "", " seconds"),
                ]
            },
        ],
        [
            {
                title: "Boomsday",
                type: AUGMENT,
                tree: BLUE,
                image: require('../assets/images/skills/zane/BoomsDay.png'),
                description: "SNTNL adds a Rocket Pod to its primary weapons, allowing it to shoot Rockets as well as Machine Guns.",
                stats: [
                    newStat("Rocket Damage", [21], "", ""),
                ]
            },
            {
                title: "Violent Violence",
                type: PASSIVE,
                tree: BLUE,
                maxRanks: 5,
                image: require('../assets/images/skills/zane/ViolentViolence.png'),
                description: "Gain increased Fire Rate after killing an enemy.",
                stats: [
                    newStat("Fire Rate", [4,8,12,16,20], "+", "%"),
                    newStat("Duration", [8,8,8,8,8], "", " seconds"),
                ]
            },
            {
                hide: true,
            },
            {
                title: "Playing Dirty",
                type: PASSIVE,
                tree: BLUE,
                maxRanks: 5,
                image: require('../assets/images/skills/zane/PlayingDirty.png'),
                description: "Your next five shots have a chance to fire an additional projectile after killing an enemy.",
                stats: [
                    newStat("Extra Shot Chance", [10,20,30,40,50], "", "%"),
                ]
            },
            {
                title: "Almighty Ordnance",
                type: AUGMENT,
                tree: BLUE,
                image: require('../assets/images/skills/zane/AlmightyOrdnance.png'),
                description: "SNTNL fires a missile barrage at an area, and if an enemy is killed, the duration is reset. Can only be used once per Action Skill use.",
                stats: [
                    newStat("Missile Damage", [32], "", ""),
                    newStat("Missiles per Barrage", [4], "", ""),
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
                title: "Good Misfortune",
                type: PASSIVE,
                tree: BLUE,
                maxRanks: 3,
                image: require('../assets/images/skills/zane/GoodMisfortune.png'),
                description: "Zane's Action Skill Duration increases after killing an enemy, with diminishing returns.",
                stats: [
                    newStat("Duration Return", [4], "up to", "% max duration"),
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
                title: "Seein' Red",
                type: PASSIVE,
                tree: BLUE,
                maxRanks: 1,
                image: require('../assets/images/skills/zane/SeeingRed.png'),
                description: "Activating an Action Skill automatically activates all of Zane's Kill Skills.",
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
                title: "Barrier",
                type: ACTION,
                tree: GREEN,
                image: require('../assets/images/skills/zane/Barrier.png'),
                description: "Drop a deployable Barrier that blocks incoming projectiles. Zane and his allies can shoot through the Barrier, dealing increased Gun Damage. Additionally, you may pick it up, decreasing it's size and bonus effects.",
				stats: [
                    newStat("Duration", [14], "", " seconds"),
					newStat("Cooldown", [24], "", " seconds"),
					newStat("Damage Amp", [25], "+", "%"),
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
                title: "Adrenaline",
                type: PASSIVE,
                tree: GREEN,
                maxRanks: 5,
                image: require('../assets/images/skills/zane/Adrenaline.png'),
                description: "Gain increased Action Skill Cooldown Rate. Bonus is based on the amount of shield, with a bigger bonus the fuller the shield.",
                stats: [
                    newStat("Action Skill Cooldown Rate", [7, 14, 21, 28, 35], "Up to +", "%"),
                ]
            },
            {
                title: "Hearty Stock",
                type: PASSIVE,
                tree: GREEN,
                maxRanks: 3,
                image: require('../assets/images/skills/zane/HeartyStock.png'),
                description: "Gain increased Maximum Shield Capacity.",
                stats: [
                    newStat("Max Sheilds", [10, 20, 30], "+", "%"),
                ]
            },
            {
                title: "Ready for Action",
                type: PASSIVE,
                tree: GREEN,
                maxRanks: 5,
                image: require('../assets/images/skills/zane/ReadyForAction.png'),
                description: "Gain improved Shield Recharge Rate and Shield Recharge Delay.",
                stats: [
                    newStat("Sheild Recharge Rate:", [6,12,18,24,30], "+", "%"),
                    newStat("Sheild Recharge Delay:", [7,14,19,24,29], "-", "%"),
                ]
            },
            {
                hide: true
            },
        ],
        [
            {
                title: "Charged Relay",
                type: AUGMENT,
                tree: GREEN,
                image: require('../assets/images/skills/zane/ChargedRelay.png'),
                description: "Whenever Zane or an ally touches the Barrier, they gain increased Movement Speed and Fire Rate.",
				stats: [
                    newStat("Reload Speed", [20], "+", "%"),
                    newStat("Movement Speed", [11], "+", "%"),
                    newStat("Duration", [8], "", " seconds after moving away from Barrier"),
                ]
            },
            {
                title: "Brain Freeze",
                type: PASSIVE,
                tree: GREEN,
                maxRanks: 5,
                image: require('../assets/images/skills/zane/BrainFreeze.png'),
                description: "Chance to slow enemies when a Critical Hit is scored against them.",
                stats: [
                    newStat("Slow Chance", [4.0, 8.0, 12.0, 16.0, 20.0], "+", "%"),
                ]
            },
            {
                title: "Stiff Upper Lip",
                type: PASSIVE,
                tree: GREEN,
                maxRanks: 3,
                image: require('../assets/images/skills/zane/StiffUpperLip.png'),
                description: "Gain Damage Resistance against the type of damage dealt to Zane.",
                stats: [
                    newStat("Damage Resistance", [6.0, 12.0, 16.0], "+", "%"),
                ]
            },
            {
                title: "Rise to the Occasion",
                type: PASSIVE,
                tree: GREEN,
                maxRanks: 5,
                image: require('../assets/images/skills/zane/RiseToTheOccasion.png'),
                description: "Gain Health Regeneration. The lower Zane's shield, the higher the bonus, but does not gain any health regen when shields are full.",
                stats: [
                    newStat("Health Regeneration", [1.0, 2.0, 3.0, 4.0, 5.0], "up to +", "% of Max Health / sec"),
                ]
            },
            {
                hide: true,
            },
        ],
        [
            {
                title: "Nanites or Some Shite",
                type: AUGMENT,
                tree: GREEN,
                image: require('../assets/images/skills/zane/NanitesOrSomeShit.png'),
                description: "When near the barrier, Zane and allies gain increased Health Regeneration, Reload Speed, and improved Shield Recharge Delay. More Health is regenerated the lower health is.",
                stats: [
                    newStat("Health Regeneration", [4], "up to ", "% of Max Health/sec"),
                    newStat("Shield Recharge Delay", [33], "-", "%"),
                    newStat("Reload Speed", [11], "+", "%"),
                ]
            },
            {
                hide: true,
            },
            {
                title: "Confident Competence",
                type: PASSIVE,
                tree: GREEN,
                maxRanks: 1,
                image: require('../assets/images/skills/zane/ConfidentCompetence.png'),
                description: "Gain increased Gun Damage and Accuracy while shields are active. Bonus based on the greater amount of shield active.",
                stats: [
                    newStat("Gun Damage", [20], "up to +", "%"),
                    newStat("Accuracy", [33], "up to +", "%"),
                ]
            },
            {
                hide: true,
            },
            {
                title: "All-rounder",
                type: AUGMENT,
                tree: GREEN,
                image: require('../assets/images/skills/zane/AllRounder.png'),
                description: "Zane's Barrier becomes a dome, covering all sides.",
                stats: [
                    newStat("Cooldown", [20], "+", "%"),
                ]
            },
        ],
        [
            {
                title: "Retaliation",
                type: AUGMENT,
                tree: GREEN,
                image: require('../assets/images/skills/zane/Retaliation.png'),
                description: "	Zane and allies near the Barrier gain increased Gun Damage for a few seconds after the Barrier takes damage.",
                stats: [
                    newStat("Gun Damage", [10], "+", "%"),
                    newStat("Duration", [3], "", " seconds"),
                ]
            },
            {
                title: "Really Expensive Jacket",
                type: PASSIVE,
                tree: GREEN,
                maxRanks: 1,
                image: require('../assets/images/skills/zane/ReallyExpensiveJacket.png'),
                description: "Elemental damage over time effects applied to Zane have reduced duration.",
                stats: [
                    newStat("Status Effect Duration", [50], "-", "%"),
                ]
            },
            {
                title: "Best Served Cold",
                type: PASSIVE,
                tree: GREEN,
                maxRanks: 5,
                image: require('../assets/images/skills/zane/BestServedCold.png'),
                description: "Creates a Cryo Nova whenever an enemy is killed, dealing damage to all nearby enemies.",
                stats: [
                    newStat("Damage", [2,4,6,8,11], "", ""),
                    newStat("Cooldown", [3], "", " seconds"),
                ]
            },
            {
                title: "Futility Belt",
                type: PASSIVE,
                tree: GREEN,
                maxRanks: 1,
                image: require('../assets/images/skills/zane/FutilityBelt.png'),
                description: "Gain resistance to non-elemental damage. All elemental damage converted to non-elemental damage after killing an enemy.",
                stats: [
                    newStat("Damage Reduction", [15.0], "+", "%"),
                    newStat("Duration", [8], "", " seconds"),
                ]
            },
            {
                title: "Deterrence Field",
                type: AUGMENT,
                tree: GREEN,
                maxRanks: 5,
                image: require('../assets/images/skills/zane/DeterrenceField.png'),
                description: "Enemies that touch the Barrier take Shock Damage and are Staggered.",
                stats: [
                    newStat("Shock Damage", [27], "", ""),
                ]
            },
        ],
        [
            {
                hide: true
            },
            {
                title: "Refreshment",
                type: PASSIVE,
                tree: GREEN,
                maxRanks: 3,
                image: require('../assets/images/skills/zane/Refreshment.png'),
                description: "Gain some damage dealt back as health when attacking a frozen enemy.",
                stats: [
                    newStat("Life Steal", [8,16,24], "", "% of damage dealt"),
                ]
            },
            {
                title: "Calm, Cool, Collected",
                type: PASSIVE,
                tree: GREEN,
                maxRanks: 1,
                image: require('../assets/images/skills/zane/CalmCoolCollected.png'),
                description: "When Zane freezes an enemy, his shields instantly begin recharging. If shields are full, health regenerates. If health is full, Action Skill Cooldowns and Durations are immediately reset.",
                stats: [
                    newStat("Health Regeneration", [3], "up to ", "% of max health/sec"),
                    newStat("Regeneration Duration", [3], "", " seconds"),
                ]
            },
            {
                title: "Nerves of Steel",
                type: PASSIVE,
                tree: GREEN,
                maxRanks: 3,
                image: require('../assets/images/skills/zane/NervesOfSteel.png'),
                description: "Gain increases Accuracy and Handling. Bigger bonus the longer shield is at full.",
                stats: [
                    newStat("Accuracy", [2.0, 4.0, 6.0], "+", "% per second"),
                    newStat("Handling", [2.4, 4.8, 7.0], "+", "% per second"),
                    newStat("Max Stacks", [15, 15, 15], "", ""),
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
                title: "Distributed Denial",
                type: PASSIVE,
                tree: GREEN,
                maxRanks: 1,
                image: require('../assets/images/skills/zane/DistributedDenial.png'),
                description: "Zane's Barrier gains the effects of equipped Shield Mod. Shield effects are applies to all allies near the barrier, Bonuses to Zane are reduced.",
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