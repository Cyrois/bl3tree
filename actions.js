import {
    SET_CHARACTER,
    ADD_SKILL,
    SET_MODAL_SKILL,
    RANK_SKILL,
    REMOVE_SKILL,
    SET_HERO_SELECT,
    SELECT_HERO,
    TOGGLE_QUICK_SELECT,
    RESET,
    SET_SAVE_BUILD_MODAL,
    SET_CREATE_ACCOUNT_MODAL,
    SET_FORGOT_PASSWORD_MODAL,
    SET_ACCOUNT_EMAIL,
    SET_ACCOUNT_PASSWORD,
    SET_CHARACTER_SKILL,
    SET_SELECTED_MODAL_SKILL,
    TOGGLE,
    SET_CURRENT_BUILD_NAME,
    LOAD_BUILDS,
    LOAD_SAVED_BUILD,
    SET_CONFIRM_LOAD,
    LOAD_BUILD_CODE,
    SET_BUILD_CODE,
    LOAD_BUILD,
    SET_CONFIRM_DELETE,
    SET_LOGIN_MODAL,
    SET_LOGIN_ERROR,
    SET_CREATE_ERROR,
    SET_ACCOUNT_ID,
    SET_SAVE_BUILD_ERROR,
    SET_CONFIRM_PASSWORD
} from './types.js';

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

const rankSkill = (skill, amount, rowIndex) =>  {
    return {
        type: RANK_SKILL,
        skill: skill,
        amount: amount,
        rowIndex: rowIndex
    }
}

const setModalSkill = (modalData) =>  {
    return {
        type: SET_MODAL_SKILL,
        data: modalData,
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

const setCreateError = (error) =>  {
    return {
        type: SET_CREATE_ERROR,
        data: error,
    }
}

const setLoginModal = (visible) =>  {
    return {
        type: SET_LOGIN_MODAL,
        data: visible,
    }
}

const setLoginError = (error) =>  {
    return {
        type: SET_LOGIN_ERROR,
        data: error,
    }
}

const setForgotPasswordModal = (visible) => {
    return {
        type: SET_FORGOT_PASSWORD_MODAL,
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

const setConfirmPassword = (password) =>  {
    return {
        type: SET_CONFIRM_PASSWORD,
        data: password,
    }
}

const setAccountId = (id) =>  {
    return {
        type: SET_ACCOUNT_ID,
        data: id,
    }
}

const setCurrentBuildName = (buildName) =>  {
    return {
        type: SET_CURRENT_BUILD_NAME,
        data: buildName,
    }
}

const loadBuilds = builds => {
    return {
        type: LOAD_BUILDS,
        data: builds
    }
}

const loadBuild = build => {
    return {
        type: LOAD_BUILD,
        data: build
    }
}

const loadSavedBuild = buildId => {
    return {
        type: LOAD_SAVED_BUILD,
        data: buildId
    }
}

const loadBuildCodeModal = visible => {
    return {
        type: LOAD_BUILD_CODE,
        data: visible
    }
}

const deleteBuildModal = visible => {
    return {
        type: SET_CONFIRM_DELETE,
        data: visible
    }
}

const setBuildCode = code => {
    return {
        type: SET_BUILD_CODE,
        data: code
    }
}

const confirmLoadBuild = visible => {
    return {
        type: SET_CONFIRM_LOAD,
        data: visible
    }
}

const setSaveBuildModal = (visible) =>  {
    return {
        type: SET_SAVE_BUILD_MODAL,
        data: visible,
    }
}

const setSaveBuildError = (error) =>  {
    return {
        type: SET_SAVE_BUILD_ERROR,
        data: error,
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
    setModalSkill,
    setSelectedModalSkill,
    setCharacterSkill,

    setCreateAccountModal,
    setCreateError,
    setLoginModal,
    setLoginError,
    setForgotPasswordModal,
    setAccountEmail,
    setAccountPassword,
    setConfirmPassword, 
    setAccountId,
    setCurrentBuildName,
    loadBuilds,
    loadBuild,
    loadSavedBuild,
    loadBuildCodeModal,
    deleteBuildModal,
    setBuildCode,
    confirmLoadBuild,
    setSaveBuildModal,
    setSaveBuildError,
    setHeroSelect,
    selectHero,
    toggle
}

export { actionCreators };