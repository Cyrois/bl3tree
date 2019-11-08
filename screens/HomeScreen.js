import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Alert,
  ImageBackground
} from 'react-native';

import SkillButton from '../components/SkillButton.js';
import BranchShelf from '../components/BranchShelf.js';
import Branch from '../components/Branch.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as actions } from '../actions';
import { PASSIVE, AUGMENT, ACTION, PET, FLAK, MOZE, ZANE, AMARA, YELLOW_FONT, RED_BG, TITLE_FONT, TEXT_FONT, ELEMENT, GREEN, RED, BLUE, MAX_POINTS } from '../data/constants';
import { TOGGLE_QUICK_SELECT } from '../types.js';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

class HomeScreen extends React.Component {
  _getSkillBackgroundImage(skillType) {
    switch (skillType) {
        case PASSIVE:
          return require("../assets/images/backgrounds/skill-bg-passive-disabled.png")
        case AUGMENT:
          return require("../assets/images/backgrounds/skill-bg-augment-disabled.png")
        case ACTION:
          return require("../assets/images/backgrounds/skill-bg-action-default.png")
        case ELEMENT:
          return require("../assets/images/backgrounds/skill-bg-pet-default.png")
        case PET:
          return require("../assets/images/backgrounds/skill-bg-pet-default.png")
    }
  }

  _setModal(visible, skill, rowIndex = 0, pressedEquippedSkill = false) {
    this.props.setModalSkill({modalVisible: visible, modalSkill: skill, showingEquippedSkill: pressedEquippedSkill, rowIndex: rowIndex})
  }

  _onSkillPress = (skill, rowIndex) => {
    if(this.props.quickSelectEnabled && skill.type === PASSIVE) {
      if(!this.props.ranked[skill.title] || this.props.ranked[skill.title] < skill.maxRanks) {
        this._setModal(true, "")
        this.props.rankSkill(skill, 1, rowIndex)
        this._setModal(false, "")
      }
    } else {
      this._setModal(true, skill, rowIndex)
    }
  }

  _isAbleToUseSkill = (skill, rowIndex) => {
    if(skill.title) {
      rowIndex = rowIndex ? rowIndex : this.props.rowIndex
      if(rowIndex <= 1) {
        return true
      }
  
      let totalPointsForBranch = 0;
      for(let i = 1; i < rowIndex; i++) {
        totalPointsForBranch += this.props.pointsSpent[skill.tree][`row${i}`]
      }
      if(totalPointsForBranch >= (rowIndex - 1) * 5) {
        return true
      }
    }
    return false
  }

  _isEquippedSkill = (skill) => {
    const keys = Object.keys(this.props[this.props.selectedHero].equipped)
    for (const key of keys) {
      if(this.props[this.props.selectedHero].equipped[key] && (skill.title === this.props[this.props.selectedHero].equipped[key].title)) {
        return true
      }
    }
    return false;
  }

  _unselectSkill = (skillTitle) => {
    const equippedSkills = {...this.props[this.props.selectedHero].equipped}
    for(const key in equippedSkills) {
      if(equippedSkills[key] && equippedSkills[key].title === skillTitle) {
        equippedSkills[key] = null
      }
    }
    this.props.removeSkill(this.props.selectedHero, equippedSkills)
    this._setModal(false, "")
  }

  _normalize = string => string.replace(/\s/g, "").toLowerCase()

  _insertTree = (row, rowIndex, color) => {
    return (
      <View key={"row_" + rowIndex} style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {
          row.map((skill, colIndex) => {
            // Leaving here in case I need to regenerate the if statements
            // if(skill.stats ) {
            //   skill.stats.forEach(element => {
            //     let ifStatement = this._normalize(element.type+element.preText+element.postText)
            //     let print = `if(statType === "${ifStatement}") {return {type: "${element.type}", preText: '${element.preText}', postText: '${element.postText}'}}`
            //     console.log(print)
            //   });
            // }
            skill.tree = color
            return (
              <View style={styles.skillContainer} key={"col_" + colIndex}>
                {
                  !skill.hide && (
                    <SkillButton skill={skill} canUpgrade={this._isAbleToUseSkill(skill, rowIndex)} onSkillPress={() => this._onSkillPress(skill, rowIndex)}></SkillButton>
                  )
                }
              </View>
            )
          })
        }
      </View>
    )
  }

  _calculateTreeBgProgress = (treeColor, initialTop = 20) => {
    let totalPointsForColor = 0;
    for (let i = 1; i < 6; i++) {
      totalPointsForColor += this.props.pointsSpent[treeColor][`row${i}`]
    }
    if(totalPointsForColor == 25) {
      return '100%'  
    }
    return "" + (initialTop + 3 * totalPointsForColor) + '%'
  }

  _calculateTreeBgImageProgress = (treeColor, initialTop = 30.9) => {
    let totalPointsForColor = 0;
    for (let i = 1; i < 6; i++) {
      totalPointsForColor += this.props.pointsSpent[treeColor][`row${i}`]
    }
    if(totalPointsForColor == 25) {
      return '100%'  
    }
    return "" + (initialTop + 2.7 * totalPointsForColor) + '%'
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <ScrollView
            contentContainerStyle={styles.contentContainer}>
              <View style={styles.heroContainer}>
                <Text style={styles.characterHeader}>{
                  this.props.selectedHero === FLAK ? "FL4K" : this.props.selectedHero.toUpperCase()
                  }
                </Text>
              </View>

              {
                this.props.selectedHero === FLAK &&
                <View>
                  <View style={{...styles.greenSkillTree, ...styles.treeContainer}}>
                    <View style={{...styles.skillProgress, ...styles.greenSkillTree, height: this._calculateTreeBgProgress(GREEN)}}></View>
                    <ImageBackground resizeMode='stretch' source={require("../assets/images/branch-progress.png")} 
                      style={{...styles.skillProgress, ...styles.skillProgressImg, top: this._calculateTreeBgImageProgress(GREEN)}}></ImageBackground>
                    <Text style={styles.treeTitle}>
                      Stalker
                    </Text>

                    <BranchShelf color={GREEN} horizontal='4.5%' top='48.5%'></BranchShelf>
                    <BranchShelf color={GREEN} horizontal='4.5%' top='61.5%'></BranchShelf>
                    <BranchShelf color={GREEN} horizontal='4.5%' top='35%' flipped={true}></BranchShelf>
                    <BranchShelf color={GREEN} horizontal='4.5%' top='48.5%' flipped={true}></BranchShelf>
                    <BranchShelf color={GREEN} horizontal='4.5%' top='61.5%' flipped={true}></BranchShelf>
                    <BranchShelf color={GREEN} horizontal='4.5%' top='75%' flipped={true}></BranchShelf>
                    <Branch color={GREEN}></Branch>

                    <View style={{width: '100%', margin: 'auto', alignSelf: 'center', zIndex: 300}}>
                      {
                        this.props.flak.stalker.map((row, rowIndex) => this._insertTree(row, rowIndex, GREEN))
                      }
                    </View>
                  </View>

                  <View style={{...styles.redSkillTree, ...styles.treeContainer}}>
                    <View style={{...styles.skillProgress, ...styles.redSkillTree, height: this._calculateTreeBgProgress(RED)}}></View>
                    <ImageBackground resizeMode='stretch' source={require("../assets/images/branch-progress.png")} 
                      style={{...styles.skillProgress, ...styles.skillProgressImg, top: this._calculateTreeBgImageProgress(RED)}}></ImageBackground>
                    <Text style={styles.treeTitle}>
                      Hunter
                    </Text>

                    <BranchShelf color={RED} horizontal='4.5%' top='48.5%'></BranchShelf>
                    <BranchShelf color={RED} horizontal='4.5%' top='61.5%'></BranchShelf>
                    <BranchShelf color={RED} horizontal='4.5%' top='35%' flipped={true}></BranchShelf>
                    <BranchShelf color={RED} horizontal='4.5%' top='48.5%' flipped={true}></BranchShelf>
                    <BranchShelf color={RED} horizontal='4.5%' top='61.5%' flipped={true}></BranchShelf>
                    <BranchShelf color={RED} horizontal='4.5%' top='75%' flipped={true}></BranchShelf>
                    <Branch color={RED}></Branch>

                    <View style={{width: '100%', margin: 'auto', alignSelf: 'center', zIndex: 300}}>
                      {
                        this.props.flak.hunter.map((row, rowIndex) => this._insertTree(row, rowIndex, RED))
                      }
                    </View>
                  </View>

                  <View style={{...styles.blueSkillTree, ...styles.treeContainer}}>
                    <View style={{...styles.skillProgress, ...styles.blueSkillTree, height: this._calculateTreeBgProgress(BLUE)}}></View>
                    <ImageBackground resizeMode='stretch' source={require("../assets/images/branch-progress.png")} 
                      style={{...styles.skillProgress, ...styles.skillProgressImg, top: this._calculateTreeBgImageProgress(BLUE)}}></ImageBackground>
                    <Text style={styles.treeTitle}>
                      Master
                    </Text>
                    
                    <BranchShelf color={BLUE} horizontal='4.5%' top='48.5%'></BranchShelf>
                    <BranchShelf color={BLUE} horizontal='4.5%' top='61.5%'></BranchShelf>
                    <BranchShelf color={BLUE} horizontal='4.5%' top='35%' flipped={true}></BranchShelf>
                    <BranchShelf color={BLUE} horizontal='4.5%' top='48.5%' flipped={true}></BranchShelf>
                    <BranchShelf color={BLUE} horizontal='4.5%' top='61.5%' flipped={true}></BranchShelf>
                    <BranchShelf color={BLUE} horizontal='4.5%' top='75%' flipped={true}></BranchShelf>
                    <Branch color={BLUE}></Branch>

                    <View style={{width: '100%', margin: 'auto', alignSelf: 'center', zIndex: 300}}>
                      {
                        this.props.flak.master.map((row, rowIndex) => this._insertTree(row, rowIndex, BLUE))
                      }
                    </View>
                  </View>
                </View>
              }

              {
                this.props.selectedHero === MOZE &&
                <View>
                  <View style={{...styles.redSkillTree, ...styles.treeContainer}}>
                    <View style={{...styles.skillProgress, ...styles.redSkillTree, height: this._calculateTreeBgProgress(RED)}}></View>
                    <ImageBackground resizeMode='stretch' source={require("../assets/images/branch-progress.png")} 
                      style={{...styles.skillProgress, ...styles.skillProgressImg, top: this._calculateTreeBgImageProgress(RED)}}></ImageBackground>
                    <Text style={styles.treeTitle}>
                      Sheild of Retribution
                    </Text>

                    <BranchShelf color={RED} horizontal='4.5%' top='35%'></BranchShelf>
                    <BranchShelf color={RED} horizontal='4.5%' top='48.5%'></BranchShelf>
                    <BranchShelf color={RED} horizontal='4.5%' top='61.5%'></BranchShelf>
                    <BranchShelf color={RED} horizontal='4.5%' top='75%'></BranchShelf>
                    <BranchShelf color={RED} horizontal='4.5%' top='35%' flipped={true}></BranchShelf>
                    <BranchShelf color={RED} horizontal='4.5%' top='48.5%' flipped={true}></BranchShelf>
                    <BranchShelf color={RED} horizontal='4.5%' top='61.5%' flipped={true}></BranchShelf>
                    <Branch color={RED}></Branch>

                    <View style={{width: '100%', margin: 'auto', alignSelf: 'center', zIndex: 300}}>
                      {
                        this.props.moze.shieldOfRetribution.map((row, rowIndex) => this._insertTree(row, rowIndex, RED))
                      }
                    </View>
                  </View>

                  <View style={{...styles.greenSkillTree, ...styles.treeContainer}}>
                    <View style={{...styles.skillProgress, ...styles.greenSkillTree, height: this._calculateTreeBgProgress(GREEN)}}></View>
                    <ImageBackground resizeMode='stretch' source={require("../assets/images/branch-progress.png")} 
                      style={{...styles.skillProgress, ...styles.skillProgressImg, top: this._calculateTreeBgImageProgress(GREEN)}}></ImageBackground>
                    <Text style={styles.treeTitle}>
                      Bottomless Mags
                    </Text>

                    <BranchShelf color={GREEN} horizontal='4.5%' top='35%'></BranchShelf>
                    <BranchShelf color={GREEN} horizontal='4.5%' top='48.5%'></BranchShelf>
                    <BranchShelf color={GREEN} horizontal='4.5%' top='61.5%'></BranchShelf>
                    <BranchShelf color={GREEN} horizontal='4.5%' top='75%'></BranchShelf>
                    <BranchShelf color={GREEN} horizontal='4.5%' top='35%' flipped={true}></BranchShelf>
                    <BranchShelf color={GREEN} horizontal='4.5%' top='48.5%' flipped={true}></BranchShelf>
                    <BranchShelf color={GREEN} horizontal='4.5%' top='61.5%' flipped={true}></BranchShelf>
                    <Branch color={GREEN}></Branch>

                    <View style={{width: '100%', margin: 'auto', alignSelf: 'center', zIndex: 300}}>
                      {
                        this.props.moze.bottomlessMags.map((row, rowIndex) => this._insertTree(row, rowIndex, GREEN))
                      }
                    </View>
                  </View>

                  <View style={{...styles.blueSkillTree, ...styles.treeContainer}}>
                    <View style={{...styles.skillProgress, ...styles.blueSkillTree, height: this._calculateTreeBgProgress(BLUE)}}></View>
                    <ImageBackground resizeMode='stretch' source={require("../assets/images/branch-progress.png")} 
                      style={{...styles.skillProgress, ...styles.skillProgressImg, top: this._calculateTreeBgImageProgress(BLUE)}}></ImageBackground>
                    <Text style={styles.treeTitle}>
                      Demolition Woman
                    </Text>

                    <BranchShelf color={BLUE} horizontal='4.5%' top='35%'></BranchShelf>
                    <BranchShelf color={BLUE} horizontal='4.5%' top='48.5%'></BranchShelf>
                    <BranchShelf color={BLUE} horizontal='4.5%' top='61.5%'></BranchShelf>
                    <BranchShelf color={BLUE} horizontal='4.5%' top='75%'></BranchShelf>
                    <BranchShelf color={BLUE} horizontal='4.5%' top='35%' flipped={true}></BranchShelf>
                    <BranchShelf color={BLUE} horizontal='4.5%' top='48.5%' flipped={true}></BranchShelf>
                    <BranchShelf color={BLUE} horizontal='4.5%' top='61.5%' flipped={true}></BranchShelf>
                    <Branch color={BLUE}></Branch>

                    <View style={{width: '100%', margin: 'auto', alignSelf: 'center', zIndex: 300}}>
                      {
                        this.props.moze.demolitionWoman.map((row, rowIndex) => this._insertTree(row, rowIndex, BLUE))
                      }
                    </View>
                  </View>
                </View>
              }

              {
                this.props.selectedHero === ZANE &&
                <View>
                  <View style={{...styles.treeContainer, ...styles.redSkillTree}}>
                    <View style={{...styles.skillProgress, ...styles.redSkillTree, height: this._calculateTreeBgProgress(RED)}}></View>
                    <ImageBackground resizeMode='stretch' source={require("../assets/images/branch-progress.png")} 
                      style={{...styles.skillProgress, ...styles.skillProgressImg, top: this._calculateTreeBgImageProgress(RED)}}></ImageBackground>
                    <Text style={styles.treeTitle}>
                      Doubled Agent
                    </Text>

                    <BranchShelf color={RED} horizontal='4.5%' top='48.5%'></BranchShelf>
                    <BranchShelf color={RED} horizontal='4.5%' top='61.5%'></BranchShelf>
                    <BranchShelf color={RED} horizontal='4.5%' top='35%' flipped={true}></BranchShelf>
                    <BranchShelf color={RED} horizontal='4.5%' top='48.5%' flipped={true}></BranchShelf>
                    <BranchShelf color={RED} horizontal='4.5%' top='61.5%' flipped={true}></BranchShelf>
                    <Branch color={RED}></Branch>

                    <View style={{width: '100%', margin: 'auto', alignSelf: 'center', zIndex: 300}}>
                      {
                        this.props.zane.doubledAgent.map((row, rowIndex) => this._insertTree(row, rowIndex, RED))
                      }
                    </View>
                  </View>

                  <View style={{...styles.blueSkillTree, ...styles.treeContainer}}>
                    <View style={{...styles.skillProgress, ...styles.blueSkillTree, height: this._calculateTreeBgProgress(BLUE)}}></View>
                    <ImageBackground resizeMode='stretch' source={require("../assets/images/branch-progress.png")} 
                      style={{...styles.skillProgress, ...styles.skillProgressImg, top: this._calculateTreeBgImageProgress(BLUE)}}></ImageBackground>
                    <Text style={styles.treeTitle}>
                      Hitman
                    </Text>

                    <BranchShelf color={BLUE} horizontal='4.5%' top='48.5%'></BranchShelf>
                    <BranchShelf color={BLUE} horizontal='4.5%' top='61.5%'></BranchShelf>
                    <BranchShelf color={BLUE} horizontal='4.5%' top='35%' flipped={true}></BranchShelf>
                    <BranchShelf color={BLUE} horizontal='4.5%' top='48.5%' flipped={true}></BranchShelf>
                    <BranchShelf color={BLUE} horizontal='4.5%' top='61.5%' flipped={true}></BranchShelf>
                    <Branch color={BLUE}></Branch>

                    <View style={{width: '100%', margin: 'auto', alignSelf: 'center', zIndex: 300}}>
                      {
                        this.props.zane.hitman.map((row, rowIndex) => this._insertTree(row, rowIndex, BLUE))
                      }
                    </View>
                  </View>

                  <View style={{...styles.greenSkillTree, ...styles.treeContainer}}>
                    <View style={{...styles.skillProgress, ...styles.greenSkillTree, height: this._calculateTreeBgProgress(GREEN)}}></View>
                    <ImageBackground resizeMode='stretch' source={require("../assets/images/branch-progress.png")} 
                      style={{...styles.skillProgress, ...styles.skillProgressImg, top: this._calculateTreeBgImageProgress(GREEN)}}></ImageBackground>
                    <Text style={styles.treeTitle}>
                      Under Cover
                    </Text>

                    <BranchShelf color={GREEN} horizontal='4.5%' top='48.5%'></BranchShelf>
                    <BranchShelf color={GREEN} horizontal='4.5%' top='61.5%'></BranchShelf>
                    <BranchShelf color={GREEN} horizontal='4.5%' top='35%' flipped={true}></BranchShelf>
                    <BranchShelf color={GREEN} horizontal='4.5%' top='48.5%' flipped={true}></BranchShelf>
                    <BranchShelf color={GREEN} horizontal='4.5%' top='61.5%' flipped={true}></BranchShelf>
                    <Branch color={GREEN}></Branch>

                    <View style={{width: '100%', margin: 'auto', alignSelf: 'center', zIndex: 300}}>
                      {
                        this.props.zane.underCover.map((row, rowIndex) => this._insertTree(row, rowIndex, GREEN))
                      }
                    </View>
                  </View>
                </View>
              }

              {
                this.props.selectedHero === AMARA &&
                <View>
                  <View style={{...styles.blueSkillTree, ...styles.treeContainer}}>
                    <View style={{...styles.skillProgress, ...styles.blueSkillTree, height: this._calculateTreeBgProgress(BLUE)}}></View>
                    <ImageBackground resizeMode='stretch' source={require("../assets/images/branch-progress.png")} 
                      style={{...styles.skillProgress, ...styles.skillProgressImg, top: this._calculateTreeBgImageProgress(BLUE)}}></ImageBackground>
                    <Text style={styles.treeTitle}>
                      Mystical Assault
                    </Text>

                    <BranchShelf color={BLUE} horizontal='4.5%' top='35%'></BranchShelf>
                    <BranchShelf color={BLUE} horizontal='4.5%' top='48.5%'></BranchShelf>
                    <BranchShelf color={BLUE} horizontal='4.5%' top='75%'></BranchShelf>
                    <BranchShelf color={BLUE} horizontal='4.5%' top='48.5%' flipped={true}></BranchShelf>
                    <BranchShelf color={BLUE} horizontal='4.5%' top='61.5%' flipped={true}></BranchShelf>
                    <Branch color={BLUE}></Branch>

                    <View style={{width: '100%', margin: 'auto', alignSelf: 'center', zIndex: 300}}>
                      {
                        this.props.amara.mysticalAssault.map((row, rowIndex) => this._insertTree(row, rowIndex, BLUE))
                      }
                    </View>
                  </View>

                  <View style={{...styles.redSkillTree, ...styles.treeContainer}}>
                    <View style={{...styles.skillProgress, ...styles.redSkillTree, height: this._calculateTreeBgProgress(RED)}}></View>
                    <ImageBackground resizeMode='stretch' source={require("../assets/images/branch-progress.png")} 
                      style={{...styles.skillProgress, ...styles.skillProgressImg, top: this._calculateTreeBgImageProgress(RED)}}></ImageBackground>
                    <Text style={styles.treeTitle}>
                      Fist of the Elements
                    </Text>

                    <BranchShelf color={RED} horizontal='4.5%' top='35%'></BranchShelf>
                    <BranchShelf color={RED} horizontal='4.5%' top='48.5%'></BranchShelf>
                    <BranchShelf color={RED} horizontal='4.5%' top='61.5%'></BranchShelf>
                    <BranchShelf color={RED} horizontal='4.5%' top='48.5%' flipped={true}></BranchShelf>
                    <BranchShelf color={RED} horizontal='4.5%' top='75%' flipped={true}></BranchShelf>
                    <Branch color={RED}></Branch>

                    <View style={{width: '100%', margin: 'auto', alignSelf: 'center', zIndex: 300}}>
                      {
                        this.props.amara.fistOfTheElements.map((row, rowIndex) => this._insertTree(row, rowIndex, RED))
                      }
                    </View>
                  </View>

                  <View style={{...styles.greenSkillTree, ...styles.treeContainer}}>
                    <View style={{...styles.skillProgress, ...styles.greenSkillTree, height: this._calculateTreeBgProgress(GREEN)}}></View>
                    <ImageBackground resizeMode='stretch' source={require("../assets/images/branch-progress.png")} 
                      style={{...styles.skillProgress, ...styles.skillProgressImg, top: this._calculateTreeBgImageProgress(GREEN)}}></ImageBackground>
                    <Text style={styles.treeTitle}>
                      Brawl
                    </Text>

                    <BranchShelf color={GREEN} horizontal='4.5%' top='35%'></BranchShelf>
                    <BranchShelf color={GREEN} horizontal='4.5%' top='48.5%'></BranchShelf>
                    <BranchShelf color={GREEN} horizontal='4.5%' top='75%'></BranchShelf>
                    <BranchShelf color={GREEN} horizontal='4.5%' top='48.5%' flipped={true}></BranchShelf>
                    <BranchShelf color={GREEN} horizontal='4.5%' top='61.5%' flipped={true}></BranchShelf>
                    <Branch color={GREEN}></Branch>

                    <View style={{width: '100%', margin: 'auto', alignSelf: 'center', zIndex: 300}}>
                      {
                        this.props.amara.brawl.map((row, rowIndex) => this._insertTree(row, rowIndex, GREEN))
                      }
                    </View>
                  </View>
                </View>
              }

              <View style={styles.resetPointsBtnContainer}>
                <TouchableOpacity
                  style={styles.resetPointsBtn}
                  onPress={() => this.props.toggle(TOGGLE_QUICK_SELECT)}
                >
                  <Text style={styles.resetPointsText}> {this.props.quickSelectEnabled ? "Disable Quick Select" : "Enable Quick Select"} </Text>
                  <Text style={styles.resetPointsText}> (Auto Rank Up) </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.resetPointsBtnContainer}>
                <TouchableOpacity
                  style={styles.resetPointsBtn}
                  onPress={() => this.props.reset()}
                >
                  <Text style={styles.resetPointsText}> Reset Points </Text>
                </TouchableOpacity>
              </View>
          </ScrollView>

          <ImageBackground source={require("../assets/images/backgrounds/pointslot-default.png")} 
            resizeMode='contain'
            style={styles.pointslotBg}>
            <Text style={{...styles.pointslotText, paddingLeft: this.props.pointsLeft < 39 ? 11 : 15}}>{MAX_POINTS - this.props.pointsLeft}/{MAX_POINTS}</Text>
          </ImageBackground>
        </View>
        

        <ScrollView>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.modalVisible}
            onRequestClose={() => {
              this._setModal(false, "");
            }}>
            <TouchableOpacity style={styles.outerModal} onPress={() => {this._setModal(false, "")}}>
              <TouchableOpacity style={styles.innerModal} onPress={(e) => {e.preventDefault()}} activeOpacity={1}>
                <Text style={styles.modalSkillTitle}>{this.props.modalSkill.title}</Text>

                <View style={styles.modalSkillContainer}>
                  <ImageBackground source={this._getSkillBackgroundImage(this.props.modalSkill.type)} 
                      style={styles.modalSkillImageBg}
                      resizeMode='contain'>
                  <Image
                      source={this.props.modalSkill.image}
                      style={styles.modalSkillImage} 
                      resizeMode='contain'/> 
                  </ImageBackground>
                </View>
                
                <Text style={{...styles.defaultFont, marginBottom: 10, fontSize: 18}}>
                  {
                    this.props.modalSkill.type === PASSIVE && 'Passive Ability' ||
                    this.props.modalSkill.type === ACTION && 'Action Skill' ||
                    this.props.modalSkill.type === AUGMENT && 'Action Skill Augment' ||
                    this.props.modalSkill.type === ELEMENT && 'Action Skill Element' ||
                    this.props.modalSkill.type === PET && 'Pet'
                  }
                </Text>

                <Text style={{...styles.defaultFont, marginBottom: 10}}>{this.props.modalSkill.description}</Text>

                {this.props.modalSkill.type === PASSIVE && 
                  <Text style={{...styles.defaultFont, marginBottom: 10}}>
                    Rank: {this.props.ranked[this.props.modalSkill.title] ? this.props.ranked[this.props.modalSkill.title] : 0}/{this.props.modalSkill.maxRanks}
                  </Text>
                }

                { !!(this.props.ranked[this.props.modalSkill.title] && this.props.ranked[this.props.modalSkill.title] > 0) &&
                  (Array.isArray(this.props.modalSkill.stats) && !!this.props.modalSkill.stats.length) &&
                  <Text style={{...styles.defaultFont, marginBottom: 4}}>Current Rank:</Text>
                }
                {this.props.modalSkill.stats && 
                  this.props.modalSkill.stats.map(stat => {
                    return (
                      <View key={stat.type}>
                        { !!(this.props.ranked[this.props.modalSkill.title] && this.props.ranked[this.props.modalSkill.title] > 0) &&
                          <View style={{marginBottom: 2, flexDirection:'row', flexWrap:'wrap'}}>
                            <Text style={{...styles.defaultFont, color:YELLOW_FONT}}>{stat.type}: </Text>
                            <Text style={styles.defaultFont}> {stat.preText}{stat.values[this.props.ranked[this.props.modalSkill.title] ? this.props.ranked[this.props.modalSkill.title] - 1 : 0]}{stat.postText}</Text>
                          </View>
                        }
                      </View>
                    )
                  })
                }

                { (!this.props.ranked[this.props.modalSkill.title] || this.props.ranked[this.props.modalSkill.title] < this.props.modalSkill.maxRanks) &&
                  (Array.isArray(this.props.modalSkill.stats) && !!this.props.modalSkill.stats.length) &&
                  <Text style={{...styles.defaultFont, marginTop: 10, marginBottom: 4}}>Next Rank:</Text>
                }
                { this.props.modalSkill.stats && 
                  (Array.isArray(this.props.modalSkill.stats) && !!this.props.modalSkill.stats.length) &&
                  this.props.modalSkill.stats.map(stat => {
                    return (
                      <View key={stat.type}>
                        { (!this.props.ranked[this.props.modalSkill.title] || this.props.ranked[this.props.modalSkill.title] < this.props.modalSkill.maxRanks) &&
                          <View style={{marginBottom: 2, flexDirection:'row', flexWrap:'wrap'}}>
                            <Text style={{...styles.defaultFont, color:YELLOW_FONT}}>{stat.type}: </Text>
                            <Text style={styles.defaultFont}>
                              {stat.preText}{stat.values[this.props.ranked[this.props.modalSkill.title] ? this.props.ranked[this.props.modalSkill.title] : 0]}{stat.postText}
                            </Text>
                          </View>
                        }
                      </View>
                    )
                  })
                }
                
                { this._isEquippedSkill(this.props.modalSkill) && 
                  <TouchableOpacity
                    style={styles.skillModalButtons}
                    onPress={() => this._unselectSkill(this.props.modalSkill.title)}
                  >
                    <Text style={{...styles.defaultFont, ...styles.skillModalBtnText, color: 'black'}}> Unselect </Text>
                  </TouchableOpacity>
                }

                <View>
                  {!this._isAbleToUseSkill(this.props.modalSkill) &&
                    <Text style={{color:'orange', marginVertical: 10, fontWeight: 'bold'}}>Spend more points to unlock this skill.</Text>
                  }
                  
                  {this.props.modalSkill.type === PASSIVE && this._isAbleToUseSkill(this.props.modalSkill) &&
                    <View style={{height: 60}}>
                      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{}}>
                          <TouchableOpacity
                            style={styles.skillModalButtons}
                            onPress={() => {
                              this._setModal(false, "")
                              this.props.rankSkill(this.props.modalSkill, (this.props.ranked[this.props.modalSkill.title] ? this.props.ranked[this.props.modalSkill.title] : 0) * -1, this.props.rowIndex)
                              this._setModal(false, "")
                            }}>
                            <Text style={{...styles.defaultFont, color: 'black'}}> Clear </Text>
                          </TouchableOpacity>
                        </View>
                        <View style={{}}>
                          <TouchableOpacity
                            style={styles.skillModalButtons}
                            onPress={() => {
                              this._setModal(false, "")
                              this.props.rankSkill(this.props.modalSkill, -1, this.props.rowIndex)
                              this._setModal(true, this.props.modalSkill, this.props.rowIndex)
                            }}
                          >
                            <Text style={{...styles.defaultFont, color: 'black'}}> -1 </Text>
                          </TouchableOpacity>
                        </View>
                        <View style={{}}>
                          <TouchableOpacity
                            style={styles.skillModalButtons}
                            onPress={() => {
                              this._setModal(false, "")
                              this.props.rankSkill(this.props.modalSkill, 1, this.props.rowIndex)
                              this._setModal(true, this.props.modalSkill, this.props.rowIndex)
                            }}>
                            <Text style={{...styles.defaultFont, color: 'black'}}> +1</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={{}}>
                          <TouchableOpacity
                            style={styles.skillModalButtons}
                            onPress={() => {
                              this._setModal(false, "")
                              this.props.rankSkill(this.props.modalSkill, this.props.modalSkill.maxRanks, this.props.rowIndex)
                              this._setModal(false, "")
                            }}
                          >
                            <Text style={{...styles.defaultFont, color: 'black'}}> Max </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  }

                  {
                    this.props.modalSkill.type === PET && this._isAbleToUseSkill(this.props.modalSkill) && !this._isEquippedSkill(this.props.modalSkill) &&
                    <TouchableOpacity
                      style={styles.skillModalButtons}
                      onPress={() => {
                        this.props.setCharacterSkill(this.props.selectedHero, PET, "", this.props.modalSkill)
                        this._setModal(false, "")
                      }}
                    >
                      <Text style={{...styles.defaultFont, color: 'black'}}> Assign Pet </Text>
                    </TouchableOpacity>
                  }

                  {
                    this.props.modalSkill.type === ELEMENT && this._isAbleToUseSkill(this.props.modalSkill) && !this._isEquippedSkill(this.props.modalSkill) &&
                    <TouchableOpacity
                      style={styles.skillModalButtons}
                      onPress={() => {
                        this.props.setCharacterSkill(this.props.selectedHero, ELEMENT, "1", this.props.modalSkill)
                        this._setModal(false, "")
                      }}
                    >
                      <Text style={{...styles.defaultFont, color: 'black'}}> Equip Element </Text>
                    </TouchableOpacity>
                  }

                  {
                    this.props.modalSkill.type === ACTION && this._isAbleToUseSkill(this.props.modalSkill) && !this._isEquippedSkill(this.props.modalSkill) &&
                    <TouchableOpacity
                      style={styles.skillModalButtons}
                      onPress={() => {
                        this.props.setCharacterSkill(this.props.selectedHero, ACTION, "1", this.props.modalSkill)
                        this._setModal(false, "")
                      }}
                    >
                      <Text style={{...styles.defaultFont, color: 'black'}}> Equip Slot 1 </Text>
                    </TouchableOpacity>
                  }

                  {
                    this.props.modalSkill.type === ACTION && 
                    this._isAbleToUseSkill(this.props.modalSkill) && 
                    !this._isEquippedSkill(this.props.modalSkill) &&
                    (this.props.selectedHero === MOZE || this.props.selectedHero === ZANE) && 
                    <TouchableOpacity
                      style={styles.skillModalButtons}
                      onPress={() => {
                        this.props.setCharacterSkill(this.props.selectedHero, ACTION, "2", this.props.modalSkill)
                        this._setModal(false, "")
                      }}
                    >
                      <Text style={{...styles.defaultFont, color: 'black'}}> Equip Slot 2 </Text>
                    </TouchableOpacity>
                  }

                  {
                    this.props.modalSkill.type === AUGMENT && 
                    this._isAbleToUseSkill(this.props.modalSkill) && 
                    !this._isEquippedSkill(this.props.modalSkill) &&
                    <TouchableOpacity
                      style={styles.skillModalButtons}
                      onPress={() => {
                        let slot = "1"
                        if(this.props.selectedHero === ZANE) {
                          if(this.props.zane.equipped.action1 && this.props.zane.equipped.action1.tree === this.props.modalSkill.tree) {
                            slot = "1"
                          } else if(this.props.zane.equipped.action2 && this.props.zane.equipped.action2.tree === this.props.modalSkill.tree) {
                            slot = "3"
                          } else {
                            slot = ""
                          }
                        }
                        this.props.setCharacterSkill(this.props.selectedHero, AUGMENT, slot, this.props.modalSkill)
                        this._setModal(false, "")
                      }}
                    >
                      <Text> Equip Slot 1 </Text>
                    </TouchableOpacity>
                  }

                  {
                    this.props.modalSkill.type === AUGMENT && 
                    this._isAbleToUseSkill(this.props.modalSkill) && 
                    !this._isEquippedSkill(this.props.modalSkill) &&
                    (this.props.selectedHero === MOZE || this.props.selectedHero === ZANE) && 
                    <TouchableOpacity
                      style={styles.skillModalButtons}
                      onPress={() => {
                        let slot = "2"
                        if(this.props.selectedHero === ZANE) {
                          if(this.props.zane.equipped.action1 && this.props.zane.equipped.action1.tree === this.props.modalSkill.tree) {
                            slot = "2"
                          } else if(this.props.zane.equipped.action2 && this.props.zane.equipped.action2.tree === this.props.modalSkill.tree) {
                            slot = "4"
                          } else {
                            slot = ""
                          }
                        }
                        this.props.setCharacterSkill(this.props.selectedHero, AUGMENT, slot, this.props.modalSkill)
                        this._setModal(false, "")
                      }}
                    >
                      <Text> Equip Slot 2 </Text>
                    </TouchableOpacity>
                  }
                  
                  <TouchableOpacity
                    style={styles.skillModalButtons}
                    onPress={() => this._setModal(false, "")}
                  >
                    <Text style={{...styles.defaultFont, color: 'black'}}> Close </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
    marginTop: -2,
  },
  contentContainer: {
    
  },
  heroContainer: {
    backgroundColor: 'rgba(30, 39, 58, 0.5)'
  },
  characterHeader: {
    color:YELLOW_FONT, 
    backgroundColor: RED_BG, 
    fontSize: 40, 
    textAlign: 'center', 
    fontFamily: TITLE_FONT,
    paddingVertical: 10,
  },

  //Points Used
  pointslotBg: {
    width: 60,
    height: 36,
    position: 'absolute',
    right: 2,
    top: 14,
  },
  pointslotText: {
    color: '#fff',
    fontSize: 22,
    paddingTop: 7,
    fontFamily: TITLE_FONT,
  },

  //TREES
  treeContainer: {
    paddingBottom: 60,
    paddingRight: 5,
    paddingLeft: 10,
    // backgroundColor: 'rgba(38, 41, 43, 0.75)',
  },
  greenSkillTree: {
    backgroundColor: 'rgba(69, 133, 4, 0.75)',
  },
  redSkillTree: {
    backgroundColor: 'rgba(99, 33, 6, 0.75)',
  },
  blueSkillTree: {
    backgroundColor: 'rgba(3, 59, 135, 0.75)',
  },
  skillProgress: {
    minHeight: '20%',
    maxHeight: '90%', 
    width: '64%', 
    position: 'absolute', 
    top: '16%', 
    left: '20%'
  },
  skillProgressImg: {
    width: '80%', 
    height: 20
  },
  
  treeTitle: {
    fontSize: 30, 
    textAlign: 'center',
    paddingTop: 15,
    color:YELLOW_FONT, 
    textAlign: 'center', 
    fontFamily: TITLE_FONT
  },

  //Skills
  skillContainer: {
    width: '16%',
    height: 86,
    padding: 2,
    marginHorizontal: Platform.OS === 'ios' ? -12 : -18,
  },

  //BOTTOM BTNS
  resetPointsBtnContainer: {
    backgroundColor: RED_BG,
    color: YELLOW_FONT,
    paddingTop: 20,
  },
  resetPointsBtn: {
    backgroundColor: YELLOW_FONT,
    padding: 10,
    marginHorizontal: 40,
    marginBottom: 10,
    borderWidth: 3,
    borderRadius: 4,
    borderColor: 'black',
    textAlign: 'center',
  },
  resetPointsText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },


  // Modal Styles
  outerModal: {
    backgroundColor: 'rgba(80,80,80,0.96)',
    paddingTop: '25%',
    paddingBottom: '10%',
    paddingHorizontal: 10,
    height: '100%',
  },
  innerModal: {
    backgroundColor: 'rgb(3, 59, 135)',
    borderRadius: 5,
    borderWidth: 5,
    borderColor: YELLOW_FONT,
    padding: 20,
    width: '100%'
  },
  skillModalButtons: {
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: YELLOW_FONT,
    color: '#fff',
    padding: 10,
    borderRadius: 2,
  },
  modalSkillTitle: {
    color: YELLOW_FONT, 
    fontSize: 30, 
    marginBottom: 10, 
    fontFamily: TITLE_FONT,
  },
  modalSkillContainer: {
    width: 90,
    height: 100,
    position: 'absolute',
    top: -58,
    right: 20,
  },
  modalSkillImageBg: {
  },
  modalSkillImage: {
    width: "90%",
    height: "78%",
    marginTop: 6,
    marginLeft: 4,
    resizeMode: 'contain',
    zIndex: 90000
  },
  defaultFont: {
    fontFamily: TEXT_FONT,
    color: '#fff'
  },
});

mapStateToProps = state => {
  return { ... state }
}

mapDispatchToProps = dispatch => {
  return {
    setCharacter: bindActionCreators(actions.setCharacter, dispatch),
    setCharacterSkill: bindActionCreators(actions.setCharacterSkill, dispatch),
    addSkill: bindActionCreators(actions.addSkill, dispatch),
    removeSkill: bindActionCreators(actions.removeSkill, dispatch),
    rankSkill: bindActionCreators(actions.rankSkill, dispatch),
    reset: bindActionCreators(actions.reset, dispatch),
    setModalSkill: bindActionCreators(actions.setModalSkill, dispatch),
    toggle: bindActionCreators(actions.toggle, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
