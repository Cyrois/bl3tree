import { SET_CHARACTER, ADD_SKILL, ADD_STAT, SET_MODAL_SKILL, SET_FLAK_PET, SET_FLAK_ACTION, SET_FLAK_AUGMENT, RANK_SKILL, REMOVE_SKILL, SET_HERO_SELECT, SELECT_HERO, TOGGLE_QUICK_SELECT, RESET, SET_SAVE_BUILD_MODAL, SET_CREATE_ACCOUNT_MODAL, SET_ACCOUNT_EMAIL, SET_ACCOUNT_PASSWORD, SET_CHARACTER_SKILL, SET_SELECTED_MODAL_SKILL, TOGGLE, SET_CURRENT_BUILD_NAME } from './types.js';

const setCharacter = () => {
    return {
        type: SET_CHARACTER
    }
}

const reset = () => {
    return {
        type: RESET
    }
}

const addSkill = (character) =>  {
    return {
        type: ADD_SKILL
    }
}

const removeSkill = (character, equippedSkills) =>  {
    return {
        type: REMOVE_SKILL,
        character: character,
        equippedSkills: equippedSkills
    }
}

const rankSkill = (skill, amount) =>  {
    return {
        type: RANK_SKILL,
        skill: skill,
        amount: amount
    }
}

const addStat = () =>  {
    return {
        type: ADD_STAT
    }
}

const setModalSkill = (modalData, pressedEquippedSkill = false) =>  {
    return {
        type: SET_MODAL_SKILL,
        data: modalData,
        showingEquippedSkill: pressedEquippedSkill,
    }
}

const setSelectedModalSkill = (modalData, pressedEquippedSkill = false) =>  {
    return {
        type: SET_SELECTED_MODAL_SKILL,
        data: modalData,
        showingStatSkill: pressedEquippedSkill,
    }
}

const setCharacterSkill = (character, skillType, slot, skill) =>  {
    return {
        type: SET_CHARACTER_SKILL,
        data: {
            character: character,
            skillType: skillType,
            slot: slot,
            skill: skill
        },
    }
}

const setCreateAccountModal = (visible) =>  {
    return {
        type: SET_CREATE_ACCOUNT_MODAL,
        data: visible,
    }
}

const setAccountEmail = (email) =>  {
    return {
        type: SET_ACCOUNT_EMAIL,
        data: email,
    }
}

const setAccountPassword = (password) =>  {
    return {
        type: SET_ACCOUNT_PASSWORD,
        data: password,
    }
}

const setCurrentBuildName = (buildName) =>  {
    return {
        type: SET_CURRENT_BUILD_NAME,
        data: buildName,
    }
}

const setSaveBuildModal = (visible) =>  {
    return {
        type: SET_SAVE_BUILD_MODAL,
        data: visible,
    }
}

const setHeroSelect = (visible) =>  {
    return {
        type: SET_HERO_SELECT,
        data: visible,
    }
}

const selectHero = (hero) =>  {
    return {
        type: SELECT_HERO,
        data: hero,
    }
}

const toggle = (type) =>  {
    return {
        type: TOGGLE,
        data: type,
    }
}

const actionCreators = {
    setCharacter,
    reset,
    addSkill,
    removeSkill,
    rankSkill,
    addStat,
    setModalSkill,
    setSelectedModalSkill,
    setCharacterSkill,

    setCreateAccountModal,
    setAccountEmail,
    setAccountPassword,
    setCurrentBuildName,
    setSaveBuildModal,
    setHeroSelect,
    selectHero,
    toggle
}

export { actionCreators };