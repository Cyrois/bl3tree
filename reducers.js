import { SET_CHARACTER, ADD_SKILL, ADD_STAT, SET_MODAL_SKILL, RANK_SKILL, REMOVE_SKILL, SET_HERO_SELECT, SELECT_HERO, TOGGLE_QUICK_SELECT, RESET, SET_SAVE_BUILD_MODAL, SET_CREATE_ACCOUNT_MODAL, SET_ACCOUNT_PASSWORD, SET_ACCOUNT_EMAIL, SET_CHARACTER_SKILL, SET_SELECTED_MODAL_SKILL, TOGGLE_ACTIONS, TOGGLE_BUILDS, TOGGLE, SET_CURRENT_BUILD_NAME, LOAD_BUILDS, LOAD_SAVED_BUILD, SET_CONFIRM_LOAD, LOAD_BUILD_CODE, SET_BUILD_CODE, LOAD_BUILD } from './types.js';
import { PASSIVE, AUGMENT, ACTION, PET, FLAK, MOZE, ZANE, AMARA, MAX_POINTS } from './data/constants';
import flakSkills from './data/flakSkills.js';
import mozeSkills from './data/mozeSkills.js';
import zaneSkills from './data/zaneSkills.js';
import amaraSkills from './data/amaraSkills.js';

const newStat = (type, value, description) => {return {type, value, description}}

//Initial State
const intialState = {
    modalVisible: false,
    selectedSkillModalVisible: false,
    modalSkill: {},
    showingEquippedSkill: false,
    setSelectedModalSkill: false,
    pointsLeft: MAX_POINTS,
    pointsSpent: {
      'green': 0,
      'red': 0,
      'blue': 0
    },
    ranked: {},
    stats: {},
    flak: flakSkills,
    moze: mozeSkills,
    zane: zaneSkills,
    amara: amaraSkills,
    createAccountModalVisible: false,
    email: '',
    password: '',
    buildName: '',
    buildCode: '',
    builds: [],
    saveBuildModalVisible: false,
    heroSelectModalVisible: false,
    loadBuildCodeModalVisible: false,
    confirmLoadModalVisible: false,
    selectedHero: FLAK,
    quickSelectEnabled: false,
    toggleActions: true,
    toggleBuilds: true,
}

//Helper Functions
const applySetCharacter = state => {
    return {
        ...state,
    }
}

const reset = state => {
  return {
      ...state,
      ranked: {},
      stats: {}
  }
}

const applyAddSkill = state => {
  const newState = {...state}
  newState[character].equipped = equippedSkills
  return newState
}

const applyRemoveSkill = (state, character, equippedSkills) => {
  const newState = {...state}
  newState[character].equipped = equippedSkills
  return newState
}

const applyRankSkill = (state, skill, amount) => {
  const newState = {...state}
  let newAmount = newState.ranked[skill.title] ? newState.ranked[skill.title] : 0
  let oldAmount = newAmount
  
  //Calculate the ranked skill
  newAmount += amount
  if(newAmount >= skill.maxRanks) {
    newAmount = skill.maxRanks
  } else if(newAmount <= 0) {
    newAmount = 0
  }
  newState.ranked[skill.title] = newAmount
  
  //Calculate points
  let delta = newAmount - oldAmount
  let pointsLeft = newState.pointsLeft
  newState.pointsLeft = pointsLeft - delta

  let pointsSpent = newState.pointsSpent[skill.tree]
  newState.pointsSpent[skill.tree] = pointsSpent + delta
  
  //Calculate the skill stats
  for(const stat of skill.stats) {
    let newStatCount = newState.stats[stat.type] ? newState.stats[stat.type] : 0
    newState.stats[stat.type] = newStatCount + (stat.value * amount)
  }
  
  return newState
}

const applyAddStat = state => {
    return {
        ...state,
    }
}

const setModalSkill = (state, modalData, showingEquippedSkill) => {
    return {
        ...state,
        ...modalData,
        ...showingEquippedSkill,
    }
}

const setSelectedModalSkill = (state, modalData, selectedSkillModalVisible) => {
  return {
      ...state,
      ...modalData,
      ...selectedSkillModalVisible,
  }
}

const setCharacterSkill = (state, data) => {
  const { character, skillType, slot, skill } = data
  const newState = {...state}
  newState[character].equipped["" + skillType + slot] = skill
  return newState
}

const setCreateAccountModal = (state, modalVisible) => {
  return {
    ...state,
    createAccountModalVisible: modalVisible
  }
}

const setAccountEmail = (state, email) => {
  return {
    ...state,
    email: email
  }
}

const setAccountPassword = (state, password) => {
  return {
    ...state,
    password: password
  }
}

const setCurrentBuildName = (state, buildName) => {
  return {
    ...state,
    buildName: buildName
  }
}

const loadBuilds = (state, builds) => {
  return {
    ...state,
    builds: builds
  }
}

const loadSavedBuild = (state, buildId) => {
  const newState = {...state}
  let buildToLoad = newState.builds.find(build => build.id === buildId);
  return loadBuild(newState, buildToLoad)
}

const loadBuild = (state, buildToLoad) => {
  const newState = {...state}
  let selectedHero = buildToLoad.build.hero
  newState.selectedHero = selectedHero
  newState.ranked = buildToLoad.build.ranked
  newState[selectedHero].equipped = buildToLoad.build.skills
  return newState
}

const loadBuildCodeModal = (state, modalVisible) => {
  return {
    ...state,
    loadBuildCodeModalVisible: modalVisible
  }
}

const setBuildCode = (state, code) => {
  return {
    ...state,
    buildCode: code
  }
}

const setConfirmLoad = (state, modalVisible) => {
  return {
    ...state,
    confirmLoadModalVisible: modalVisible
  }
}

const setSaveBuildModal = (state, modalVisible) => {
  return {
    ...state,
    saveBuildModalVisible: modalVisible
  }
}

const setHeroSelect = (state, modalVisible) => {
  return {
    ...state,
    heroSelectModalVisible: modalVisible
  }
}

const selectHero = (state, hero) => {
  return {
    ...state,
    selectedHero: hero
  }
}

const toggle = (state, type) => {
  const newState = {...state}
  switch (type) {
    case TOGGLE_QUICK_SELECT: 
      newState.quickSelectEnabled = !newState.quickSelectEnabled
      break;
    case TOGGLE_ACTIONS: 
      newState.toggleActions = !newState.toggleActions
      break;
    case TOGGLE_BUILDS: 
      newState.toggleBuilds = !newState.toggleBuilds
      break;
  }
  return newState
}

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_CHARACTER:
      return applySetCharacter(state)
    case RESET:
      return reset(state)
    case ADD_SKILL:
      return applyAddSkill(state. action.character)
    case REMOVE_SKILL:
      return applyRemoveSkill(state, action.character, action.equippedSkills)
    case RANK_SKILL:
      return applyRankSkill(state, action.skill, action.amount)
    case ADD_STAT:
      return applyAddStat(state)
    case SET_MODAL_SKILL:
      return setModalSkill(state, action.data, action.showingEquippedSkill)
    case SET_SELECTED_MODAL_SKILL:
      return setSelectedModalSkill(state, action.data, action.showingEquippedSkill)
    case SET_CHARACTER_SKILL:
      return setCharacterSkill(state, action.data)
    case SET_CREATE_ACCOUNT_MODAL:
      return setCreateAccountModal(state, action.data)
    case SET_ACCOUNT_EMAIL:
      return setAccountEmail(state, action.data)
    case SET_ACCOUNT_PASSWORD:
      return setAccountPassword(state, action.data)
    case SET_CURRENT_BUILD_NAME:
      return setCurrentBuildName(state, action.data)
    case LOAD_BUILDS:
      return loadBuilds(state, action.data)
    case LOAD_BUILD:
      return loadBuild(state, action.data)
    case LOAD_SAVED_BUILD:
      return loadSavedBuild(state, action.data)
    case LOAD_BUILD_CODE:
      return loadBuildCodeModal(state, action.data)
    case SET_BUILD_CODE:
      return setBuildCode(state, action.data)
    case SET_CONFIRM_LOAD:
      return setConfirmLoad(state, action.data)
    case SET_SAVE_BUILD_MODAL:
      return setSaveBuildModal(state, action.data)
    case SET_HERO_SELECT:
      return setHeroSelect(state, action.data)
    case SELECT_HERO:
      return selectHero(state, action.data)
    case TOGGLE:
      return toggle(state, action.data)
    default:
      return state
  }
}

export default reducer

