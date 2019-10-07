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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as actions } from '../actions';
import { PASSIVE, AUGMENT, ACTION, PET, FLAK, MOZE, ZANE, AMARA, YELLOW_FONT, RED_BG, TITLE_FONT, TEXT_FONT, ELEMENT } from '../data/constants';
import { TOGGLE_QUICK_SELECT } from '../types.js';

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

  _setModal(visible, skill, pressedEquippedSkill = false) {
    this.props.setModalSkill({modalVisible: visible, modalSkill: skill, showingEquippedSkill: pressedEquippedSkill})
  }

  _onSkillPress = (skill, pressedEquippedSkill = false, textToShow = "") => {
    if(!skill || skill === null) {
      Alert.alert(
        'Oops!',
        `Please select ${textToShow} first`,
      );
    } else {
      if(this.props.quickSelectEnabled && skill.type === PASSIVE) {
        if(!this.props.ranked[skill.title] || this.props.ranked[skill.title] < skill.maxRanks) {
          this._setModal(true, "")
          this.props.rankSkill(skill, 1)
          this._setModal(false, "")
        }
      } else {
        this._setModal(true, skill, pressedEquippedSkill)
      }
    }
  }

  _isAbleToUseSkill = (skill) => {
    if(skill.row == 0) {
      return true;
    }
    let pointsUsedForTree = this.props.pointsSpent[skill.tree]
    let pointsRequired = skill.row ? (skill.row - 1) * 5 : 0;
    if(pointsUsedForTree >= pointsRequired) {
      return true
    } else {
      return false;
    }
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
    for(key in equippedSkills) {
      if(equippedSkills[key] && equippedSkills[key].title === skillTitle) {
        equippedSkills[key] = null
      }
    }
    this.props.removeSkill("flak", equippedSkills)
    this._setModal(false, "")
  }

  _insertTree = (row, index) => {
    return (
      <View key={"row_" + index} style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {
          row.map((skill, index) => {
            return (
              <View style={styles.skillContainer} key={"col_" + index}>
                {
                  !skill.hide && (
                    <SkillButton skill={skill} onSkillPress={() => this._onSkillPress(skill)}></SkillButton>
                  )
                }
              </View>
            )
          })
        }
      </View>
    )
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
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                      <View>
                        <Text style={styles.treeTitle}>
                          Stalker
                        </Text>
                      </View>
                    </View>
                    {
                      this.props.flak.stalker.map(this._insertTree)
                    }
                  </View>

                  <View style={{...styles.redSkillTree, ...styles.treeContainer}}>
                    <Text style={styles.treeTitle}>
                      Hunter
                    </Text>
                    {
                      this.props.flak.hunter.map(this._insertTree)
                    }
                  </View>

                  <View style={{...styles.blueSkillTree, ...styles.treeContainer}}>
                    <Text style={styles.treeTitle}>
                      Master
                    </Text>
                    {
                      this.props.flak.master.map(this._insertTree)
                    }
                  </View>
                </View>
              }

              {
                this.props.selectedHero === MOZE &&
                <View>
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <View style={styles.skillContainer}>
                      <TouchableOpacity onPress={() => this._onSkillPress(this.props.moze.equipped.pet, true, "an action")}>
                        <Image
                          source={require('../assets/images/skills/rise_to_the_occasion.png')}
                          style={styles.skillImage} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.skillContainer}>
                    </View>
                    <View style={styles.skillContainer}>
                    </View>
                    <View style={styles.skillContainer}>
                      <TouchableOpacity onPress={() => this._onSkillPress(this.props.moze.equipped.augment2, true, "an action")}>
                        <Image
                          source={require('../assets/images/skills/rise_to_the_occasion.png')}
                          style={styles.skillImage} />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <View style={styles.skillContainer}>
                      <TouchableOpacity onPress={() => this._onSkillPress(this.props.moze.equipped.pet, true, "an augment")}>
                        <Image
                          source={require('../assets/images/skills/rise_to_the_occasion.png')}
                          style={styles.skillImage} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.skillContainer}>
                    </View>
                    <View style={styles.skillContainer}>
                    </View>
                    <View style={styles.skillContainer}>
                      <TouchableOpacity onPress={() => this._onSkillPress(this.props.moze.equipped.augment2, true, "an augment")}>
                        <Image
                          source={require('../assets/images/skills/rise_to_the_occasion.png')}
                          style={styles.skillImage} />
                      </TouchableOpacity>
                    </View>
                  </View>

                  {
                    this.props.moze.shieldOfRetribution.map(this._insertTree)
                  }

                  {
                    this.props.moze.bottomlessMags.map(this._insertTree)
                  }

                  {
                    this.props.moze.demolitionWoman.map(this._insertTree)
                  }
                </View>
              }

              {
                this.props.selectedHero === ZANE &&
                <View>
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <View style={styles.skillContainer}>
                      <TouchableOpacity onPress={() => this._onSkillPress(this.props.moze.equipped.pet, true, "an action")}>
                        <Image
                          source={require('../assets/images/skills/rise_to_the_occasion.png')}
                          style={styles.skillImage} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.skillContainer}>
                    </View>
                    <View style={styles.skillContainer}>
                    </View>
                    <View style={styles.skillContainer}>
                      <TouchableOpacity onPress={() => this._onSkillPress(this.props.moze.equipped.augment2, true, "an action")}>
                        <Image
                          source={require('../assets/images/skills/rise_to_the_occasion.png')}
                          style={styles.skillImage} />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <View style={styles.skillContainer}>
                      <TouchableOpacity onPress={() => this._onSkillPress(this.props.moze.equipped.pet, true, "an augment")}>
                        <Image
                          source={require('../assets/images/skills/rise_to_the_occasion.png')}
                          style={styles.skillImage} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.skillContainer}>
                    </View>
                    <View style={styles.skillContainer}>
                    </View>
                    <View style={styles.skillContainer}>
                      <TouchableOpacity onPress={() => this._onSkillPress(this.props.moze.equipped.augment2, true, "an augment")}>
                        <Image
                          source={require('../assets/images/skills/rise_to_the_occasion.png')}
                          style={styles.skillImage} />
                      </TouchableOpacity>
                    </View>
                  </View>

                  {
                    this.props.zane.underCover.map(this._insertTree)
                  }

                  {
                    this.props.zane.doubledAgent.map(this._insertTree)
                  }

                  {
                    this.props.zane.hitman.map(this._insertTree)
                  }
                </View>
              }

{
                this.props.selectedHero === AMARA &&
                <View>
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <View style={styles.skillContainer}>
                      <TouchableOpacity onPress={() => this._onSkillPress(this.props.moze.equipped.pet, true, "an action")}>
                        <Image
                          source={require('../assets/images/skills/rise_to_the_occasion.png')}
                          style={styles.skillImage} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.skillContainer}>
                    </View>
                    <View style={styles.skillContainer}>
                    </View>
                    <View style={styles.skillContainer}>
                      <TouchableOpacity onPress={() => this._onSkillPress(this.props.moze.equipped.augment2, true, "an action")}>
                        <Image
                          source={require('../assets/images/skills/rise_to_the_occasion.png')}
                          style={styles.skillImage} />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <View style={styles.skillContainer}>
                      <TouchableOpacity onPress={() => this._onSkillPress(this.props.moze.equipped.pet, true, "an augment")}>
                        <Image
                          source={require('../assets/images/skills/rise_to_the_occasion.png')}
                          style={styles.skillImage} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.skillContainer}>
                    </View>
                    <View style={styles.skillContainer}>
                    </View>
                    <View style={styles.skillContainer}>
                      <TouchableOpacity onPress={() => this._onSkillPress(this.props.moze.equipped.augment2, true, "an augment")}>
                        <Image
                          source={require('../assets/images/skills/rise_to_the_occasion.png')}
                          style={styles.skillImage} />
                      </TouchableOpacity>
                    </View>
                  </View>

                  {
                    this.props.amara.mysticalAssault.map(this._insertTree)
                  }

                  {
                    this.props.amara.fistOfTheElements.map(this._insertTree)
                  }

                  {
                    this.props.amara.brawl.map(this._insertTree)
                  }
                </View>
              }

              <View style={styles.resetPointsBtnContainer}>
                <TouchableOpacity
                  style={styles.resetPointsBtn}
                  onPress={() => this.props.reset()}
                >
                  <Text style={styles.resetPointsText}> Reset Points </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.resetPointsBtnContainer}>
                <TouchableOpacity
                  style={styles.resetPointsBtn}
                  onPress={() => this.props.toggle(TOGGLE_QUICK_SELECT)}
                >
                  <Text style={styles.resetPointsText}> {this.props.quickSelectEnabled ? "Disable Quick Select" : "Enable Quick Select"} </Text>
                  <Text style={styles.resetPointsText}> (Auto Rank Up) </Text>
                </TouchableOpacity>
              </View>
          </ScrollView>
        </View>
        

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.modalVisible}
            onRequestClose={() => {
              this._setModal(false, "");
            }}>
            <View style={styles.outerModal}>
              <View style={styles.innerModal}>
                <Text style={styles.modalSkillTitle}>{this.props.modalSkill.title}</Text>

                <View style={styles.modalSkillContainer}>
                  <ImageBackground source={this._getSkillBackgroundImage(this.props.modalSkill.type)} 
                      style={styles.modalSkillImageBg}>
                  <Image
                      source={this.props.modalSkill.image}
                      style={styles.modalSkillImage} /> 
                  </ImageBackground>
                </View>
                
                <Text style={{...styles.defaultFont, marginBottom: 10, fontSize: 18}}>
                  {
                    this.props.modalSkill.type === PASSIVE && 'Passive Ability' ||
                    this.props.modalSkill.type === ACTION && 'Action Skill' ||
                    this.props.modalSkill.type === AUGMENT && 'Action Skill Augment' ||
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
                  <Text style={styles.defaultFont}>Current Rank:</Text>
                }
                {this.props.modalSkill.stats && 
                  this.props.modalSkill.stats.map(stat => {
                    return (
                      <View key={stat.type} style={{flexDirection:'row', flexWrap:'wrap'}}>
                        { !!(this.props.ranked[this.props.modalSkill.title] && this.props.ranked[this.props.modalSkill.title] > 0) &&
                          <View style={{marginTop: 5}}>
                            <Text style={{...styles.defaultFont, color:YELLOW_FONT}}>{stat.type}:</Text>
                            <Text style={styles.defaultFont}> {stat.preText}{stat.values[this.props.ranked[this.props.modalSkill.title] ? this.props.ranked[this.props.modalSkill.title] - 1 : 1]}{stat.postText}</Text>
                          </View>
                        }
                      </View>
                    )
                  })
                }

                { this.props.modalSkill.type === PASSIVE && (!this.props.ranked[this.props.modalSkill.title] || this.props.ranked[this.props.modalSkill.title] < this.props.modalSkill.maxRanks) &&
                  <Text style={{...styles.defaultFont, marginVertical: 10}}>Next Rank:</Text>
                }
                {this.props.modalSkill.stats && 
                  this.props.modalSkill.stats.map(stat => {
                    return (
                      <View key={stat.type} style={{marginBottom: 5, flexDirection:'row', flexWrap:'wrap'}}>
                        { (!this.props.ranked[this.props.modalSkill.title] || this.props.ranked[this.props.modalSkill.title] < this.props.modalSkill.maxRanks) &&
                          <View>
                            <Text style={{...styles.defaultFont, color:YELLOW_FONT}}>{stat.type}:</Text>
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
                    <Text style={{...styles.defaultFont, ...styles.skillModalBtnText}}> Unselect </Text>
                  </TouchableOpacity>
                }

                <View>
                  {!this._isAbleToUseSkill(this.props.modalSkill) &&
                    <Text style={{color:'orange'}}>Spend more points to unlock this skill.</Text>
                  }
                  
                  {this.props.modalSkill.type === PASSIVE && this._isAbleToUseSkill(this.props.modalSkill) &&
                    <View style={{height: 60}}>
                      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{}}>
                          <TouchableOpacity
                            style={styles.skillModalButtons}
                            onPress={() => {
                              this._setModal(false, "")
                              this.props.rankSkill(this.props.modalSkill, this.props.modalSkill.maxRanks * -1)
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
                              this.props.rankSkill(this.props.modalSkill, -1)
                              this._setModal(true, this.props.modalSkill)
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
                              this.props.rankSkill(this.props.modalSkill, 1)
                              this._setModal(true, this.props.modalSkill)
                            }}>
                            <Text style={{...styles.defaultFont, color: 'black'}}> +1</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={{}}>
                          <TouchableOpacity
                            style={styles.skillModalButtons}
                            onPress={() => {
                              this._setModal(false, "")
                              this.props.rankSkill(this.props.modalSkill, this.props.modalSkill.maxRanks)
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
                    this.props.modalSkill.type === ACTION && this._isAbleToUseSkill(this.props.modalSkill) && !this._isEquippedSkill(this.props.modalSkill) &&
                    <TouchableOpacity
                      style={styles.skillModalButtons}
                      onPress={() => {
                        this.props.setCharacterSkill(this.props.selectedHero, ACTION, "", this.props.modalSkill)
                        this._setModal(false, "")
                      }}
                    >
                      <Text> Equip </Text>
                    </TouchableOpacity>
                  }

                  {
                    this.props.modalSkill.type === AUGMENT && this._isAbleToUseSkill(this.props.modalSkill) && !this._isEquippedSkill(this.props.modalSkill) &&
                    <TouchableOpacity
                      style={styles.skillModalButtons}
                      onPress={() => {
                        this.props.setCharacterSkill(this.props.selectedHero, AUGMENT, "1", this.props.modalSkill)
                        this._setModal(false, "")
                      }}
                    >
                      <Text> Equip Slot 1 </Text>
                    </TouchableOpacity>
                  }

                  {
                    this.props.modalSkill.type === AUGMENT && this._isAbleToUseSkill(this.props.modalSkill) && !this._isEquippedSkill(this.props.modalSkill) &&
                    <TouchableOpacity
                      style={styles.skillModalButtons}
                      onPress={() => {
                        this.props.setCharacterSkill(this.props.selectedHero, AUGMENT, "2", this.props.modalSkill)
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
              </View>
            </View>
          </Modal>
        </View>
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
    paddingTop: 30,
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

  //TREES
  treeContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingRight: 5,
    paddingLeft: 5,
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
  treeTitle: {
    fontSize: 30, 
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 15,
    color:YELLOW_FONT, 
    textAlign: 'center', 
    fontFamily: TITLE_FONT
  },

  //MODAL
  skillContainer: {
    width: '20%',
    height: 86,
    resizeMode: 'contain',
    padding: 2,
    marginTop: 5,
    marginHorizontal: 4,
  },
  skillImageBg: {
    margin: 2,
    resizeMode: 'contain',
  },
  pointslotBg: {
    width: 36,
    height: 25,
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 9000,
    resizeMode: 'contain',
  },
  pointslotText: {
    color: '#fff',
    fontSize: 16,
    paddingLeft: 6,
    paddingTop: 1,
  },
  skillImage: {
    width: "90%",
    height: "75%",
    marginTop: 4,
    resizeMode: 'contain',
    zIndex: 9999
  },

  //BOTTOM BTNS
  resetPointsBtnContainer: {
    backgroundColor: 'rgba(3, 59, 135, 0.75)',
    color: 'rgba(3, 59, 135, 0.5)',
    padding: 10,
  },
  resetPointsBtn: {
    backgroundColor: 'rgba(3, 59, 135, 0.75)',
    padding: 10,
    marginHorizontal: 40,
    marginBottom: 10,
    borderWidth: 3,
    borderRadius: 4,
    borderColor: '#fff',
    textAlign: 'center',
  },
  resetPointsText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },


  // Modal Styles
  outerModal: {
    backgroundColor: 'rgba(80,80,80,0.96)',
    paddingTop: '20%',
    paddingBottom: '10%',
    paddingHorizontal: 20,
    height: '100%',
  },
  innerModal: {
    backgroundColor: 'rgb(3, 59, 135)',
    borderRadius: 5,
    borderWidth: 5,
    borderColor: YELLOW_FONT,
    padding: 30,
    width: '100%'
  },
  skillModalButtons: {
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: YELLOW_FONT,
    color: '#fff',
    padding: 10
  },
  skillModalBtnText: {
  },
  modalSkillTitle: {
    color: YELLOW_FONT, 
    fontSize: 30, 
    marginBottom: 10, 
    fontFamily: "YoungPatriotSemi-Bold"
  },
  modalSkillContainer: {
    width: 90,
    height: 100,
    position: 'absolute',
    top: -50,
    right: 20,
  },
  modalSkillImageBg: {
    margin: 2,
    resizeMode: 'contain',
  },
  modalSkillImage: {
    width: "90%",
    height: "78%",
    marginTop: 8,
    marginLeft: 4,
    resizeMode: 'contain',
    zIndex: 90000
  },
  defaultFont: {
    fontFamily: TEXT_FONT,
    color: '#fff'
  }
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
    addStat: bindActionCreators(actions.addStat, dispatch),
    reset: bindActionCreators(actions.reset, dispatch),
    setModalSkill: bindActionCreators(actions.setModalSkill, dispatch),
    toggle: bindActionCreators(actions.toggle, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
