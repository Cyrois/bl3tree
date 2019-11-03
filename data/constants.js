//Skill Types
const PASSIVE = 'passive';
const AUGMENT = 'augment';
const ACTION = 'action';
const PET = 'pet';
const ELEMENT = 'element';

//Heros
const FLAK = 'flak';
const MOZE = 'moze';
const ZANE = 'zane';
const AMARA = 'amara';

//TREE COLORS
const GREEN = 'green'
const RED = 'red'
const BLUE = 'blue'

//Stat Enhancements
const MAX_POINTS = 48
const MAX_HEALTH = 'max_health';

//Styles
const TITLE_FONT = "YoungPatriotSemi-Bold"
const TEXT_FONT = "Montserrat"
const YELLOW_FONT = "rgb(255,232,9)"
const RED_BG = "rgb(135, 33, 14)"

//functions
const newStat = (type, values, preText, postText) => {
    return {
        type,
        values,
        preText,
        postText
    }
}

const normalizeStat = stat => normalizeString(stat.type + stat.preText + stat.postText)

const normalizeString = string => string.replace(/\s/g, "").toLowerCase()

const getStatText = (statType) => {
    if(statType === "maxhealth+%") {return {type: 'Max Health', preText: '+', postText: '%'}}
   else if(statType === "healthregeneration+%ofmaxhealth/sec") {return {type: 'Health Regeneration', preText: '+', postText: '% of Max Health/sec'}}
   else if(statType === "attackcommanddamage+%") {return {type: 'Attack Command Damage', preText: '+', postText: '%'}}
   else if(statType === "attackcommandcooldown-%") {return {type: 'Attack Command Cooldown', preText: '-', postText: '%'}}
   else if(statType === "handling+%perstack") {return {type: 'Handling', preText: '+', postText: '% per stack'}}
   else if(statType === "gundamage+%perstack") {return {type: 'Gun Damage', preText: '+', postText: '% per stack'}}
   else if(statType === "furiousattackstacks") {return {type: 'Furious Attack Stacks', preText: '', postText: ''}}
   else if(statType === "furiousattackdurationseconds") {return {type: 'Furious Attack Duration', preText: '', postText: ' seconds'}}
   else if(statType === "petkillcooldowntime-seconds") {return {type: 'Pet Kill Cooldown Time', preText: '-', postText: ' seconds'}}
   else if(statType === "fl4kkillcooldowntime-seconds") {return {type: 'Fl4k Kill Cooldown Time', preText: '-', postText: ' seconds'}}
   else if(statType === "alliessharefl4k'shealthregeneration+%") {return {type: "Allies share Fl4k's Health Regeneration", preText: '+', postText: '%'}}
   else if(statType === "firerateafterreloading+%") {return {type: 'Fire Rate after Reloading', preText: '+', postText: '%'}}
   else if(statType === "firerate+%") {return {type: 'Fire Rate', preText: '+', postText: '%'}}
   else if(statType === "overclockeddurationseconds") {return {type: 'Overclocked Duration', preText: '', postText: ' seconds'}}
   else if(statType === "damagereductionwhilemoving+%") {return {type: 'Damage Reduction While Moving', preText: '+', postText: '%'}}
   else if(statType === "healthregenerationwhilemoving+%ofmaxhealth/sec") {return {type: 'Health Regeneration While Moving', preText: '+', postText: '% of Max Health/sec'}}
   else if(statType === "gundamagewhilestill+%") {return {type: 'Gun Damage While Still', preText: '+', postText: '%'}}
   else if(statType === "fireratewhilestill+%") {return {type: 'Fire Rate While Still', preText: '+', postText: '%'}}
   else if(statType === "gundamage+%") {return {type: 'Gun Damage', preText: '+', postText: '%'}}
   else if(statType === "movementspeed+%") {return {type: 'Movement Speed', preText: '+', postText: '%'}}
   else if(statType === "damage+%") {return {type: 'Damage', preText: '+', postText: '%'}}
   else if(statType === "healthregeneration+%ofmissinghealth/sec") {return {type: 'Health Regeneration', preText: '+', postText: '% of Missing Health/sec'}}
   else if(statType === "rageandrecoverdurationseconds") {return {type: 'Rage and Recover Duration', preText: '', postText: ' seconds'}}
   else if(statType === "damage+%") {return {type: 'Damage', preText: '+', postText: '%'}}
   else if(statType === "thepowerinsidedurationseconds") {return {type: 'The Power Inside Duration', preText: '', postText: ' seconds'}}
   else if(statType === "damage+%/stack") {return {type: 'Damage', preText: '+', postText: '% /stack'}}
   else if(statType === "humanbonus+actionskilldamage/stack") {return {type: 'Human Bonus', preText: '+', postText: 'Action Skill Damage /stack'}}
   else if(statType === "robotbonus+%corrosivedamage/stack") {return {type: 'Robot Bonus', preText: '+', postText: '% Corrosive Damage/Stack'}}
   else if(statType === "beastbonus+%movementspeed/stack") {return {type: 'Beast Bonus', preText: '+', postText: '% Movement Speed /stack'}}
   else if(statType === "chancetoaddammo+%") {return {type: 'Chance to add ammo', preText: '+', postText: '%'}}
   else if(statType === "reloadspeed+%") {return {type: 'Reload Speed', preText: '+', postText: '%'}}
   else if(statType === "criticalkillreloadspeed+%") {return {type: 'Critical Kill Reload Speed', preText: '+', postText: '%'}}
   else if(statType === "criticalkillreloadseconds") {return {type: 'Critical Kill Reload', preText: '', postText: ' seconds'}}
   else if(statType === "criticalhitdamage+%vs.humans") {return {type: 'Critical Hit Damage', preText: '+', postText: '% vs. Humans'}}
   else if(statType === "armordamage+%vs.robots") {return {type: 'Armor Damage', preText: '+', postText: '% vs. Robots'}}
   else if(statType === "damagereduction+%vs.beasts") {return {type: 'Damage Reduction', preText: '+', postText: '% vs. Beasts'}}
   else if(statType === "cooldowntimereductionchance+%") {return {type: 'Cooldown Time Reduction Chance', preText: '+', postText: '%'}}
   else if(statType === "cooldowntimeseconds") {return {type: 'Cooldown Time', preText: '', postText: ' seconds'}}
   else if(statType === "criticalhitdamage+%") {return {type: 'Critical Hit Damage', preText: '+', postText: '%'}}
   else if(statType === "handling+%") {return {type: 'Handling', preText: '+', postText: '%'}}
   else if(statType === "healthreturned%ofmaxhealth") {return {type: 'Health Returned', preText: '', postText: '% of Max Health'}}
   else if(statType === "extraprojectilechance+%") {return {type: 'Extra Projectile Chance', preText: '+', postText: '%'}}
   else if(statType === "healthregeneration+%ofmaxhealth/sec") {return {type: 'Health Regeneration', preText: '+', postText: '% of Max Health/sec'}}
   else if(statType === "elementaldamage+%") {return {type: 'Elemental Damage', preText: '+', postText: '%'}}
   else if(statType === "additionalrakk+") {return {type: 'Additional Rakk', preText: '+', postText: ''}}
   else if(statType === "hunterskilleffects+%") {return {type: 'Hunter Skill Effects', preText: '+', postText: '%'}}
   else if(statType === "hunterskillduration+%") {return {type: 'Hunter Skill Duration', preText: '+', postText: '%'}}
   else if(statType === "gundamage+%") {return {type: 'Gun Damage', preText: '+', postText: '%'}}
   else if(statType === "criticalhitdamage+%") {return {type: 'Critical Hit Damage', preText: '+', postText: '%'}}
   else if(statType === "handling+%") {return {type: 'Handling', preText: '+', postText: '%'}}
   else if(statType === "durationseconds") {return {type: 'Duration', preText: '', postText: ' seconds'}}
   else if(statType === "healthregeneration+%ofmaxhealth/sec") {return {type: 'Health Regeneration', preText: '+', postText: '% of Max Health/sec'}}
   else if(statType === "damagereduction+%") {return {type: 'Damage Reduction', preText: '+', postText: '%'}}
   else if(statType === "criticalhitdamage+%") {return {type: 'Critical Hit Damage', preText: '+', postText: '%'}}
   else if(statType === "gundamage+%") {return {type: 'Gun Damage', preText: '+', postText: '%'}}
   else if(statType === "actionskilldamage+%") {return {type: 'Action Skill Damage', preText: '+', postText: '%'}}
   else if(statType === "criticalhitchance+%") {return {type: 'Critical Hit Chance', preText: '+', postText: '%'}}
   else if(statType === "petdamage+%") {return {type: 'Pet Damage', preText: '+', postText: '%'}}
   else if(statType === "gundamage+%") {return {type: 'Gun Damage', preText: '+', postText: '%'}}
   else if(statType === "actionskillduration+%") {return {type: 'Action Skill Duration', preText: '+', postText: '%'}}
   else if(statType === "petcriticalhitdamage+%") {return {type: 'Pet Critical Hit Damage', preText: '+', postText: '%'}}
   else if(statType === "converts%ofdamagedealthintopethealth+%ofdamagedealthintopethealth") {return {type: 'Converts % of Damage Dealth into Pet Health', preText: '+', postText: '% of Damage Dealth into Pet Health'}}
   else if(statType === "healthregeneration+%ofmaxhealth/sec") {return {type: 'Health Regeneration', preText: '+', postText: '% of Max Health/sec'}}
   else if(statType === "damagereflected+%") {return {type: 'Damage Reflected', preText: '+', postText: '%'}}
   else if(statType === "damage+%/stack") {return {type: 'Damage', preText: '+', postText: '%/ stack'}}
   else if(statType === "maxfrenzystacksstacks") {return {type: 'Max Frenzy Stacks', preText: '', postText: 'stacks'}}
   else if(statType === "playerdamage+%") {return {type: 'Player Damage', preText: '+', postText: '%'}}
   else if(statType === "petmovementspeed+%") {return {type: 'Pet Movement Speed', preText: '+', postText: '%'}}
   else if(statType === "petdamage+%") {return {type: 'Pet Damage', preText: '+', postText: '%'}}
   else if(statType === "psychoheadonastickdurationseconds") {return {type: 'Psycho Head On a Stick Duration', preText: '', postText: ' seconds'}}
   else if(statType === "damageshared+%") {return {type: 'Damage Shared', preText: '+', postText: '%'}}
   else if(statType === "petbonuses+%") {return {type: 'Pet Bonuses', preText: '+', postText: '%'}}
   else if(statType === "damagereduction+%") {return {type: 'Damage Reduction', preText: '+', postText: '%'}}
   else if(statType === "healthregeneration+%ofmaxpethealth") {return {type: 'Health Regeneration', preText: '+', postText: '% of Max Pet Health'}}
   else if(statType === "mutateddefensescooldownseconds") {return {type: 'Mutated Defenses Cooldown', preText: '', postText: ' seconds'}}
   else if(statType === "petandfl4kdamage+%") {return {type: 'Pet and Fl4k Damage', preText: '+', postText: '%'}}
   else if(statType === "petandfl4kmaximumhealth+%") {return {type: 'Pet and Fl4k Maximum Health', preText: '+', postText: '%'}}
   else if(statType === "damageshared+%") {return {type: 'Damage Shared', preText: '+', postText: '%'}}
   else if(statType === "dominancedurationseconds") {return {type: 'Dominance Duration', preText: '', postText: ' seconds'}}
   else if(statType === "targetlosesmaxhealth/sec%oftargetmaxhealth/sec") {return {type: 'Target loses Max Health/sec', preText: '', postText: '% of Target Max Health/sec'}}

   else if(statType === "currenthealthremoved%") {return {type: "Current Health Removed", preText: '', postText: '%'}}
   else if(statType === "bonusincendiarydamage+%") {return {type: "Bonus Incendiary Damage", preText: '+', postText: '%'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "20%ofironbearmaxhealthaddedasshieldsbubblerechargedelayseconds") {return {type: "20% of Iron Bear Max Health added as Shields Bubble Recharge Delay", preText: '', postText: ' seconds'}}
   else if(statType === "damagereduction+%") {return {type: "Damage Reduction", preText: '+', postText: '%'}}
   else if(statType === "gundamage+%") {return {type: "Gun Damage", preText: '+', postText: '%'}}
   else if(statType === "mozefirerate-%perstack") {return {type: "Moze Fire Rate", preText: '-', postText: '% per stack'}}
   else if(statType === "gundamage+%perstack") {return {type: "Gun Damage", preText: '+', postText: '% per stack'}}
   else if(statType === "maxdrowninginbrassstacksstacks") {return {type: "Max Drowning in Brass Stacks", preText: '', postText: 'Stacks'}}
   else if(statType === "drowninginbrassdurationseconds") {return {type: "Drowning in Brass Duration", preText: '', postText: ' seconds'}}
   else if(statType === "currenteffect+%maxhealthreservedandaddedtomaxshields") {return {type: "Current Effect", preText: '+', postText: '% Max Health Reserved and added to Max Shields'}}
   else if(statType === "shockdamageresistance+%") {return {type: "Shock Damage Resistance", preText: '+', postText: '%'}}
   else if(statType === "maxshield+%") {return {type: "Max Shield", preText: '+', postText: '%'}}
   else if(statType === "splinterdamage-%") {return {type: "Splinter Damage", preText: '-', postText: '%'}}
   else if(statType === "shieldrechargerate+%") {return {type: "Shield Recharge Rate", preText: '+', postText: '%'}}
   else if(statType === "bonusincendiarydamage+%ofdamagedealt") {return {type: "Bonus Incendiary Damage", preText: '+', postText: '% of damage dealt'}}
   else if(statType === "elementaldamage+%ofdamagedealt") {return {type: "Elemental Damage", preText: '+', postText: '% of damage dealt'}}
   else if(statType === "railgundamage-%") {return {type: "Railgun Damage", preText: '-', postText: '%'}}
   else if(statType === "fueldrain-%") {return {type: "Fuel Drain", preText: '-', postText: '%'}}
   else if(statType === "magazinesize+") {return {type: "Magazine Size", preText: '+', postText: ''}}
   else if(statType === "convertstocorrosivedamage") {return {type: "Converts to Corrosive Damage", preText: '', postText: ''}}
   else if(statType === "shieldrechargerate+%") {return {type: "Shield Recharge Rate", preText: '+', postText: '%'}}
   else if(statType === "shieldrechargedelay-%") {return {type: "Shield Recharge Delay", preText: '-', postText: '%'}}
   else if(statType === "gundamageupto+%") {return {type: "Gun Damage", preText: 'up to +', postText: '%'}}
   else if(statType === "maxshields+%perstack") {return {type: "Max Shields", preText: '+', postText: '% per stack'}}
   else if(statType === "gundamage+%perstack") {return {type: "Gun Damage", preText: '+', postText: '% per stack'}}
   else if(statType === "phalanxdoctrinedurationseconds") {return {type: "Phalanx Doctrine Duration", preText: '', postText: ' seconds'}}
   else if(statType === "shockdamage+%ofdamagedealt") {return {type: "Shock Damage", preText: '+', postText: '% of damage dealt'}}
   else if(statType === "fueldrain-%") {return {type: "Fuel Drain", preText: '-', postText: '%'}}
   else if(statType === "restores+%ofmaxshield") {return {type: "Restores", preText: '+', postText: '% of Max Shield'}}
   else if(statType === "tenaciousdefensedurationseconds") {return {type: "Tenacious Defense Duration", preText: '', postText: ' seconds'}}
   else if(statType === "gundamage+%") {return {type: "Gun Damage", preText: '+', postText: '%'}}
   else if(statType === "every8shotsdoesnotconsumeammo") {return {type: "Every 8 shots does not consume ammo", preText: '', postText: ''}}
   else if(statType === "bonusincendiarydamage+%") {return {type: "Bonus Incendiary Damage", preText: '+', postText: '%'}}
   else if(statType === "heatpershot-%") {return {type: "Heat Per Shot", preText: '-', postText: '%'}}
   else if(statType === "magazinesize+%") {return {type: "Magazine Size", preText: '+', postText: '%'}}
   else if(statType === "damageupto+%") {return {type: "Damage", preText: 'Up to +', postText: '%'}}
   else if(statType === "minigunheatcapacity+%") {return {type: "Minigun Heat Capacity", preText: '+', postText: '%'}}
   else if(statType === "incendiarydamage+%") {return {type: "Incendiary Damage", preText: '+', postText: '%'}}
   else if(statType === "ammoregeneration+%ofmagazine") {return {type: "Ammo Regeneration", preText: '+', postText: '% of magazine'}}
   else if(statType === "redistributiondurationseconds") {return {type: "Redistribution Duration", preText: '', postText: ' seconds'}}
   else if(statType === "weaponswapspeed+%") {return {type: "Weapon Swap Speed", preText: '+', postText: '%'}}
   else if(statType === "modeswitchspeed+%") {return {type: "Mode Switch Speed", preText: '+', postText: '%'}}
   else if(statType === "handling+%") {return {type: "Handling", preText: '+', postText: '%'}}
   else if(statType === "convertstocryodamage") {return {type: "Converts to Cryo Damage", preText: '', postText: ''}}
   else if(statType === "fueldrain-%") {return {type: "Fuel Drain", preText: '-', postText: '%'}}
   else if(statType === "minigundamage-%") {return {type: "Minigun Damage", preText: '-', postText: '%'}}
   else if(statType === "cryoefficiency+%") {return {type: "Cryo Efficiency", preText: '+', postText: '%'}}
   else if(statType === "firerate+%") {return {type: "Fire Rate", preText: '+', postText: '%'}}
   else if(statType === "criticalhitdamage+%") {return {type: "Critical Hit Damage", preText: '+', postText: '%'}}
   else if(statType === "movementspeed+%") {return {type: "Movement Speed", preText: '+', postText: '%'}}
   else if(statType === "fueldrain-%") {return {type: "Fuel Drain", preText: '-', postText: '%'}}
   else if(statType === "minigunfirerate-%") {return {type: "Minigun Fire Rate", preText: '-', postText: '%'}}
   else if(statType === "minigundamage+%") {return {type: "Minigun Damage", preText: '+', postText: '%'}}
   else if(statType === "magazinesize+%") {return {type: "Magazine Size", preText: '+', postText: '%'}}
   else if(statType === "ironbeardamage+%") {return {type: "Iron Bear Damage", preText: '+', postText: '%'}}
   else if(statType === "convertstocorrosivedamage") {return {type: "Converts to Corrosive Damage", preText: '', postText: ''}}
   else if(statType === "meltdamage+%") {return {type: "Melt Damage", preText: '+', postText: '%'}}
   else if(statType === "somefortheroaddurationseconds") {return {type: "Some for the Road duration", preText: '', postText: ' seconds'}}
   else if(statType === "gundamageupto+%") {return {type: "Gun Damage", preText: 'up to +', postText: '%'}}
   else if(statType === "fueldrain+%") {return {type: "Fuel Drain", preText: '+', postText: '%'}}
   else if(statType === "ammoregeneration+%ofmagazinepersec") {return {type: "Ammo Regeneration", preText: '+', postText: '% of magazine per sec'}}
   else if(statType === "bonusincendiarydamage+%") {return {type: "Bonus Incendiary Damage", preText: '+', postText: '%'}}
   else if(statType === "fueldrain-%") {return {type: "Fuel Drain", preText: '-', postText: '%'}}
   else if(statType === "fuelreturnedupto%") {return {type: "Fuel Returned", preText: 'Up to', postText: '%'}}
   else if(statType === "ironbearcooldowntime-seconds") {return {type: "Iron Bear Cooldown Time", preText: '-', postText: ' seconds'}}
   else if(statType === "directhitdamage+%") {return {type: "Direct Hit Damage", preText: '+', postText: '%'}}
   else if(statType === "ammochance+%") {return {type: "Ammo Chance", preText: '+', postText: '%'}}
   else if(statType === "grenadechance+%") {return {type: "Grenade Chance", preText: '+', postText: '%'}}
   else if(statType === "chancetodoublesplashdamageradius+%") {return {type: "Chance to double Splash Damage Radius", preText: '+', postText: '%'}}
   else if(statType === "ironbeararmored+%") {return {type: "Iron Bear Armored", preText: '+', postText: '%'}}
   else if(statType === "maximumfuel+%") {return {type: "Maximum Fuel", preText: '+', postText: '%'}}
   else if(statType === "singularityevery7thgrenade") {return {type: "Singularity", preText: 'Every 7th grenade', postText: ''}}
   else if(statType === "criticalhitchance+%") {return {type: "Critical Hit Chance", preText: '+', postText: '%'}}
   else if(statType === "autobeardurationseconds") {return {type: "Auto Bear Duration", preText: '', postText: ' seconds'}}
   else if(statType === "reloadspeed+%") {return {type: "Reload Speed", preText: '+', postText: '%'}}
   else if(statType === "reloadspeed+%") {return {type: "Reload Speed", preText: '+', postText: '%'}}
   else if(statType === "restoredportionofmissinghealthperenemyhit+%") {return {type: "Restored portion of missing health per enemy hit", preText: '+', postText: '%'}}
   else if(statType === "grenadecapacity+") {return {type: "Grenade Capacity", preText: '+', postText: ''}}
   else if(statType === "enemydamagetaken+%") {return {type: "Enemy Damage Taken", preText: '+', postText: '%'}}
   else if(statType === "damage-%") {return {type: "Damage", preText: '-', postText: '%'}}
   else if(statType === "actionskillcooldownrate+%") {return {type: "Action Skill Cooldown Rate", preText: '+', postText: '%'}}
   else if(statType === "damage+%") {return {type: "Damage", preText: '+', postText: '%'}}
   else if(statType === "magazinesize") {return {type: "Magazine Size", preText: '', postText: ''}}
   else if(statType === "secondaryexplosionchance%") {return {type: "Secondary Explosion Chance", preText: '', postText: '%'}}
   else if(statType === "secondaryexplosiondamage%ofgundamage") {return {type: "Secondary Explosion Damage", preText: '', postText: '% of Gun Damage'}}

 else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "gundamage+%peractiveactionskill") {return {type: "Gun Damage", preText: '+', postText: '% per active action skill'}}
   else if(statType === "magazinesize+%") {return {type: "Magazine Size", preText: '+', postText: '%'}}
   else if(statType === "actionskillduration+%peractiveactionskill.") {return {type: "Action Skill Duration", preText: '+', postText: '% per active action skill.'}}
   else if(statType === "novadamage") {return {type: "Nova Damage", preText: '', postText: ''}}
   else if(statType === "healthregeneration+%ofmissinghealthpersec") {return {type: "Health Regeneration", preText: '+', postText: '% of missing health per sec'}}
   else if(statType === "gundamage+%") {return {type: "Gun Damage", preText: '+', postText: '%'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "grenadechance%") {return {type: "Grenade Chance", preText: '', postText: '%'}}
   else if(statType === "grenadechanceupto20%") {return {type: "Grenade Chance", preText: '', postText: 'up to 20%'}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "shieldsrestored+%ofdigi-clonedamage") {return {type: "Shields Restored", preText: '+', postText: '% of Digi-Clone damage'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "damageupto") {return {type: "Damage", preText: 'Up to', postText: ''}}
   else if(statType === "grenaderegeneration%persec") {return {type: "Grenade Regeneration", preText: '', postText: '% per sec'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "maxhealthrestored%ofmaxhealth") {return {type: "Max Health Restored", preText: '', postText: '% of Max Health'}}
   else if(statType === "movementspeed+%peractiveactionskill") {return {type: "Movement Speed", preText: '+', postText: '% per active action skill'}}
   else if(statType === "sharedhealthdamage+%") {return {type: "Shared Health Damage", preText: '+', postText: '%'}}
   else if(statType === "ignorebulletchance%") {return {type: "Ignore Bullet Chance", preText: '', postText: '%'}}
   else if(statType === "additionalignorebulletchance%") {return {type: "Additional Ignore Bullet Chance", preText: '', postText: '%'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "clonegundamage+%pergrenade") {return {type: "Clone Gun Damage", preText: '+', postText: '% per grenade'}}
   else if(statType === "clonemaxhealth+%pergrenade") {return {type: "Clone Max Health", preText: '+', postText: '% per grenade'}}
   else if(statType === "clonefirerate+%pergrenade") {return {type: "Clone Fire Rate", preText: '+', postText: '% per grenade'}}
   else if(statType === "clonereloadspeed+%pergrenade") {return {type: "Clone Reload Speed", preText: '+', postText: '% per grenade'}}
   else if(statType === "digi-cloneduration+%pergrenade") {return {type: "Digi-Clone Duration", preText: '+', postText: '% per grenade'}}
   else if(statType === "bonusdamage+%ofdamagedealt") {return {type: "Bonus Damage", preText: '+', postText: '% of damage dealt'}}
   else if(statType === "gundamage+%") {return {type: "Gun Damage", preText: '+', postText: '%'}}
   else if(statType === "itemduping+%") {return {type: "Item Duping", preText: '+', postText: '%'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "machinegundamage") {return {type: "Machine Gun Damage", preText: '', postText: ''}}
   else if(statType === "movementspeed+%") {return {type: "Movement Speed", preText: '+', postText: '%'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "weaponswapspeed+%") {return {type: "Weapon Swap Speed", preText: '+', postText: '%'}}
   else if(statType === "bonuscryodamage+%") {return {type: "Bonus Cryo Damage", preText: '+', postText: '%'}}
   else if(statType === "gundamage+%atdefaultwalkspeed") {return {type: "Gun Damage", preText: '+', postText: '% at default walk speed'}}
   else if(statType === "dronedamage-%") {return {type: "Drone Damage", preText: '-', postText: '%'}}
   else if(statType === "reloadspeed+%") {return {type: "Reload Speed", preText: '+', postText: '%'}}
   else if(statType === "reloadspeed+%afterkill") {return {type: "Reload Speed", preText: '+', postText: '% after kill'}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "lelse ifesteal+%ofdamagedealt") {return {type: "Lelse ife Steal", preText: '+', postText: '% of damage dealt'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "firerate+%perenemy") {return {type: "Fire Rate", preText: '+', postText: '% per enemy'}}
   else if(statType === "movementspeed+%perenemy") {return {type: "Movement Speed", preText: '+', postText: '% per enemy'}}
   else if(statType === "damagepersecond") {return {type: "Damage", preText: '', postText: 'per second'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "killskillduration+seconds") {return {type: "Kill Skill Duration", preText: '+', postText: ' seconds'}}
   else if(statType === "killskillbonus+%") {return {type: "Kill Skill Bonus", preText: '+', postText: '%'}}
   else if(statType === "shielddamagepersecond") {return {type: "Shield Damage", preText: '', postText: 'per second'}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "rocketdamage") {return {type: "Rocket Damage", preText: '', postText: ''}}
   else if(statType === "firerate+%") {return {type: "Fire Rate", preText: '+', postText: '%'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "extrashotchance%") {return {type: "Extra Shot Chance", preText: '', postText: '%'}}
   else if(statType === "missiledamage") {return {type: "Missile Damage", preText: '', postText: ''}}
   else if(statType === "missilesperbarrage") {return {type: "Missiles per Barrage", preText: '', postText: ''}}
   else if(statType === "durationreturnupto%maxduration") {return {type: "Duration Return", preText: 'up to', postText: '% max duration'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "damageamp+%") {return {type: "Damage Amp", preText: '+', postText: '%'}}
   else if(statType === "actionskillcooldownrateupto+%") {return {type: "Action Skill Cooldown Rate", preText: 'Up to +', postText: '%'}}
   else if(statType === "maxsheilds+%") {return {type: "Max Sheilds", preText: '+', postText: '%'}}
   else if(statType === "sheildrechargerate:+%") {return {type: "Sheild Recharge Rate:", preText: '+', postText: '%'}}
   else if(statType === "sheildrechargedelay:-%") {return {type: "Sheild Recharge Delay:", preText: '-', postText: '%'}}
   else if(statType === "reloadspeed+%") {return {type: "Reload Speed", preText: '+', postText: '%'}}
   else if(statType === "movementspeed+%") {return {type: "Movement Speed", preText: '+', postText: '%'}}
   else if(statType === "durationsecondsaftermovingawayfrombarrier") {return {type: "Duration", preText: '', postText: ' seconds after moving away from Barrier'}}
   else if(statType === "slowchance+%") {return {type: "Slow Chance", preText: '+', postText: '%'}}
   else if(statType === "damageresistance+%") {return {type: "Damage Resistance", preText: '+', postText: '%'}}
   else if(statType === "healthregenerationupto+%ofmaxhealth/sec") {return {type: "Health Regeneration", preText: 'up to +', postText: '% of Max Health / sec'}}
   else if(statType === "healthregenerationupto%ofmaxhealth/sec") {return {type: "Health Regeneration", preText: 'up to ', postText: '% of Max Health/sec'}}
   else if(statType === "shieldrechargedelay-%") {return {type: "Shield Recharge Delay", preText: '-', postText: '%'}}
   else if(statType === "reloadspeed+%") {return {type: "Reload Speed", preText: '+', postText: '%'}}
   else if(statType === "gundamageupto+%") {return {type: "Gun Damage", preText: 'up to +', postText: '%'}}
   else if(statType === "accuracyupto+%") {return {type: "Accuracy", preText: 'up to +', postText: '%'}}
   else if(statType === "cooldown+%") {return {type: "Cooldown", preText: '+', postText: '%'}}
   else if(statType === "gundamage+%") {return {type: "Gun Damage", preText: '+', postText: '%'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "statuseffectduration-%") {return {type: "Status Effect Duration", preText: '-', postText: '%'}}
   else if(statType === "damage") {return {type: "Damage", preText: '', postText: ''}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "damagereduction+%") {return {type: "Damage Reduction", preText: '+', postText: '%'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "shockdamage") {return {type: "Shock Damage", preText: '', postText: ''}}
   else if(statType === "lelse ifesteal%ofdamagedealt") {return {type: "Lelse ife Steal", preText: '', postText: '% of damage dealt'}}
   else if(statType === "healthregenerationupto%ofmaxhealth/sec") {return {type: "Health Regeneration", preText: 'up to ', postText: '% of max health/sec'}}
   else if(statType === "regenerationdurationseconds") {return {type: "Regeneration Duration", preText: '', postText: ' seconds'}}
   else if(statType === "accuracy+%persecond") {return {type: "Accuracy", preText: '+', postText: '% per second'}}
   else if(statType === "handling+%persecond") {return {type: "Handling", preText: '+', postText: '% per second'}}
   else if(statType === "maxstacks") {return {type: "Max Stacks", preText: '', postText: ''}}

 else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "damage") {return {type: "Damage", preText: '', postText: ''}}
   else if(statType === "actionskilldamage+%perstackconsumed") {return {type: "Action Skill Damage", preText: '+', postText: '% per stack consumed'}}
   else if(statType === "maxrushstacksstacks") {return {type: "Max Rush Stacks", preText: '', postText: 'stacks'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "reloadspeed+%") {return {type: "Reload Speed", preText: '+', postText: '%'}}
   else if(statType === "weaponswapspeed+%") {return {type: "Weapon Swap Speed", preText: '+', postText: '%'}}
   else if(statType === "modeswitchspeed+%") {return {type: "Mode Switch Speed", preText: '+', postText: '%'}}
   else if(statType === "effectchance+%perstackconsumed") {return {type: "Effect Chance", preText: '+', postText: '% per stack consumed'}}
   else if(statType === "maxstacksstacks") {return {type: "Max stacks", preText: '', postText: 'stacks'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "reloadspeed+%perstack") {return {type: "Reload Speed", preText: '+', postText: '% per stack'}}
   else if(statType === "reloadspeedafteractionskilluse+%perstack") {return {type: "Reload Speed after action skill use", preText: '+', postText: '% per stack'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "accuracy+%") {return {type: "Accuracy", preText: '+', postText: '%'}}
   else if(statType === "criticalhitdamage+%") {return {type: "Critical Hit Damage", preText: '+', postText: '%'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "cooldownrate+%") {return {type: "Cooldown Rate", preText: '+', postText: '%'}}
   else if(statType === "lelse ifesteal%ofallskilldamagedealt") {return {type: "Lelse ife Steal", preText: '', postText: '% of all skill damage dealt'}}
   else if(statType === "elementalprojectilesperenemyhit") {return {type: "Elemental Projectiles", preText: '', postText: 'per enemy hit'}}
   else if(statType === "damage") {return {type: "Damage", preText: '', postText: ''}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "soulsaplelse ifesteal+%") {return {type: "Soul Sap Lelse ifesteal", preText: '+', postText: '%'}}
   else if(statType === "allureradius+%") {return {type: "Allure Radius", preText: '+', postText: '%'}}
   else if(statType === "glamourduration+%") {return {type: "Glamour Duration", preText: '+', postText: '%'}}
   else if(statType === "stillnessofmindbreakssecondsafterbeingdamaged") {return {type: "Stillness of Mind", preText: 'Breaks', postText: 'seconds after being damaged'}}
   else if(statType === "revelationdamage+%") {return {type: "Revelation Damage", preText: '+', postText: '%'}}
   else if(statType === "cooldown+%") {return {type: "Cooldown", preText: '+', postText: '%'}}
   else if(statType === "damage-%") {return {type: "Damage", preText: '-', postText: '%'}}
   else if(statType === "maxdurationseconds") {return {type: "Max Duration", preText: '', postText: ' seconds'}}
   else if(statType === "damagebonus+%perenemyhit") {return {type: "Damage Bonus", preText: '+', postText: '% per enemy hit'}}
   else if(statType === "damage") {return {type: "Damage", preText: '', postText: ''}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "firerate+%") {return {type: "Fire Rate", preText: '+', postText: '%'}}
   else if(statType === "chargetime+%") {return {type: "Charge Time", preText: '+', postText: '%'}}
   else if(statType === "damageincrease+%") {return {type: "Damage Increase", preText: '+', postText: '%'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "gundamage+%") {return {type: "Gun Damage", preText: '+', postText: '%'}}
   else if(statType === "gundamageafteractionskilluse+%") {return {type: "Gun Damage after action skill use", preText: '+', postText: '%'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "remnantdamage") {return {type: "Remnant Damage", preText: '', postText: ''}}
   else if(statType === "rushstackeffectiveness+%") {return {type: "Rush Stack Effectiveness", preText: '+', postText: '%'}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "damage") {return {type: "Damage", preText: '', postText: ''}}
   else if(statType === "bonusrushstacks+") {return {type: "Bonus Rush Stacks", preText: '+', postText: ''}}
   else if(statType === "skilldurationseconds") {return {type: "Skill Duration", preText: '', postText: ' seconds'}}
   else if(statType === "graspimmunedamage") {return {type: "Grasp Immune Damage", preText: '', postText: ''}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "actionskillstatuseffectdamage+%") {return {type: "Action Skill Status Effect Damage", preText: '+', postText: '%'}}
   else if(statType === "statuseffectdamage+%") {return {type: "Status Effect Damage", preText: '+', postText: '%'}}
   else if(statType === "statuseffectduration+%") {return {type: "Status Effect Duration", preText: '+', postText: '%'}}
   else if(statType === "handling+%") {return {type: "Handling", preText: '+', postText: '%'}}
   else if(statType === "accuracy+%") {return {type: "Accuracy", preText: '+', postText: '%'}}
   else if(statType === "converteddamage%") {return {type: "Converted Damage", preText: '', postText: '%'}}
   else if(statType === "shockdamage+%") {return {type: "Shock Damage", preText: '+', postText: '%'}}
   else if(statType === "elementaldamage+%") {return {type: "Elemental Damage", preText: '+', postText: '%'}}
   else if(statType === "meleedamage+%") {return {type: "Melee Damage", preText: '+', postText: '%'}}
   else if(statType === "spreadchance+%") {return {type: "Spread Chance", preText: '+', postText: '%'}}
   else if(statType === "bonustargetsupto+") {return {type: "Bonus Targets", preText: 'Up to +', postText: ''}}
   else if(statType === "graspimmunedamage") {return {type: "Grasp Immune Damage", preText: '', postText: ''}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "gundamage+%") {return {type: "Gun Damage", preText: '+', postText: '%'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "actionskilldamage-%") {return {type: "Action Skill Damage", preText: '-', postText: '%'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "teammovementspeed+%") {return {type: "Team Movement Speed", preText: '+', postText: '%'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "magazinesize+%") {return {type: "Magazine Size", preText: '+', postText: '%'}}
   else if(statType === "damage") {return {type: "Damage", preText: '', postText: ''}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "linkdamage%ofdamagedealt") {return {type: "Link Damage", preText: '', postText: '% of damage dealt'}}
   else if(statType === "graspimmunedamage") {return {type: "Grasp Immune Damage", preText: '', postText: ''}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "damage") {return {type: "Damage", preText: '', postText: ''}}
   else if(statType === "graspimmunedamage") {return {type: "Grasp Immune Damage", preText: '', postText: ''}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "lelse ifesteal%ofdamagedealt") {return {type: "Lelse ife Steal", preText: '', postText: '% of damage dealt'}}
   else if(statType === "extraeffectchance%") {return {type: "Extra Effect Chance", preText: '', postText: '%'}}
   else if(statType === "bonuselementaldamage%ofdamagedealt") {return {type: "Bonus Elemental Damage", preText: '', postText: '% of Damage Dealt'}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "damage") {return {type: "Damage", preText: '', postText: ''}}
   else if(statType === "maxhealth+%") {return {type: "Max Health", preText: '+', postText: '%'}}
   else if(statType === "bonusdamageupto%ofdamagedealt") {return {type: "Bonus Damage", preText: 'up to', postText: '% of damage dealt'}}
   else if(statType === "healthregenerationupto%ofmissinghealthpersecond") {return {type: "Health Regeneration", preText: 'Up to', postText: '% of missing health per second'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "splashdamage+%") {return {type: "Splash Damage", preText: '+', postText: '%'}}
   else if(statType === "splashdamagereduction+%") {return {type: "Splash Damage Reduction", preText: '+', postText: '%'}}
   else if(statType === "gundamage+%perenemydamaged") {return {type: "Gun Damage", preText: '+', postText: '% per enemy damaged'}}
   else if(statType === "healthregeneration+%ofmaxhealthpersecond;perenemydamaged") {return {type: "Health Regeneration", preText: '+', postText: '% of Max Health per second; per enemy damaged'}}
   else if(statType === "maxstacksstacks") {return {type: "Max Stacks", preText: '', postText: 'stacks'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "damagereduction+%") {return {type: "Damage Reduction", preText: '+', postText: '%'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "damage") {return {type: "Damage", preText: '', postText: ''}}
   else if(statType === "shieldregenerationdelay-%") {return {type: "Shield Regeneration Delay", preText: '-', postText: '%'}}
   else if(statType === "movementspeed+%") {return {type: "Movement Speed", preText: '+', postText: '%'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "maxstacksstacks") {return {type: "Max Stacks", preText: '', postText: 'stacks'}}
   else if(statType === "meleedamage+%") {return {type: "Melee Damage", preText: '+', postText: '%'}}
   else if(statType === "meleerange+%") {return {type: "Melee Range", preText: '+', postText: '%'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "teammovementspeed+%") {return {type: "Team Movement Speed", preText: '+', postText: '%'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "actionskillduration-%") {return {type: "Action Skill Duration", preText: '-', postText: '%'}}
   else if(statType === "novadamage") {return {type: "Nova Damage", preText: '', postText: ''}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "damage") {return {type: "Damage", preText: '', postText: ''}}
   else if(statType === "beamdamagepersecond") {return {type: "Beam Damage", preText: '', postText: 'per second'}}
   else if(statType === "maxhealth+%") {return {type: "Max Health", preText: '+', postText: '%'}}
   else if(statType === "elementaldamageresistance+%") {return {type: "Elemental Damage Resistance", preText: '+', postText: '%'}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "gundamage+%") {return {type: "Gun Damage", preText: '+', postText: '%'}}
   else if(statType === "actionskilldamage+%") {return {type: "Action Skill Damage", preText: '+', postText: '%'}}
   else if(statType === "durationseconds") {return {type: "Duration", preText: '', postText: ' seconds'}}
   else if(statType === "revivedhealth%") {return {type: "Revived Health", preText: '', postText: '%'}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "confusedurationseconds") {return {type: "Confuse Duration", preText: '', postText: ' seconds'}}
   else if(statType === "cooldown+%") {return {type: "Cooldown", preText: '+', postText: '%'}}
   else if(statType === "damage-%") {return {type: "Damage", preText: '-', postText: '%'}}
   else if(statType === "cooldownseconds") {return {type: "Cooldown", preText: '', postText: ' seconds'}}
   else if(statType === "meleedamage+%") {return {type: "Melee Damage", preText: '+', postText: '%'}}
}

export {
    PASSIVE,
    AUGMENT,
    ACTION,
    PET,
    ELEMENT,

    FLAK,
    MOZE,
    ZANE,
    AMARA,

    GREEN,
    RED,
    BLUE,

    MAX_POINTS,

    TITLE_FONT,
    TEXT_FONT,
    YELLOW_FONT,
    RED_BG,

    newStat,
    normalizeStat,
    normalizeString,
    getStatText,
};