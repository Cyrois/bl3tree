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
import { PASSIVE, AUGMENT, ACTION, PET, FLAK, MOZE, ZANE, AMARA } from '../data/constants';

class HomeScreen extends React.Component {
  _getSkillBackgroundImage(skillType) {
    switch (skillType) {
        case PASSIVE:
        return require("../assets/images/backgrounds/skill-bg-passive-disabled.png")
        case AUGMENT:
        return require("../assets/images/backgrounds/skill-bg-augment-disabled.png")
        case ACTION:
        return require("../assets/images/backgrounds/skill-bg-action-default.png")
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
    for (key in this.props[this.props.selectedHero].equipped) {
      if(this.props[this.props.selectedHero].equipped[key] && skill.title === this.props[this.props.selectedHero].equipped[key].title) {
        return true
      } else {
        return false
      }
    }
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
                <Text style={{color:'#fff', fontSize: 40, textAlign: 'center'}}>{
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
                          source={require('../assets/images/rise_to_the_occasion.png')}
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
                          source={require('../assets/images/robot-dev.png')}
                          style={styles.skillImage} />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <View style={styles.skillContainer}>
                      <TouchableOpacity onPress={() => this._onSkillPress(this.props.moze.equipped.pet, true, "an augment")}>
                        <Image
                          source={require('../assets/images/rise_to_the_occasion.png')}
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
                          source={require('../assets/images/robot-dev.png')}
                          style={styles.skillImage} />
                      </TouchableOpacity>
                    </View>
                  </View>

                  {
                    this.props.moze.shieldOfRetribution.map(this._insertTree)
                  }

                  {
                    this.props.moze.shieldOfRetribution.map(this._insertTree)
                  }

                  {
                    this.props.moze.shieldOfRetribution.map(this._insertTree)
                  }
                </View>
              }
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
                <Text style={{color:'yellow', fontSize: 30, marginBottom: 10}}>{this.props.modalSkill.title}</Text>

                <View style={styles.modalSkillContainer}>
                  <ImageBackground source={this._getSkillBackgroundImage(this.props.modalSkill.type)} 
                      style={styles.modalSkillImageBg}>
                  <Image
                      source={this.props.modalSkill.image}
                      style={styles.modalSkillImage} /> 
                  </ImageBackground>
                </View>
                
                <Text style={{color:'#fff', marginBottom: 10}}>
                  {
                    this.props.modalSkill.type === PASSIVE && 'Passive Ability' ||
                    this.props.modalSkill.type === ACTION && 'Action Skill' ||
                    this.props.modalSkill.type === AUGMENT && 'Action Skill Augment' ||
                    this.props.modalSkill.type === PET && 'Pet'
                  }
                </Text>

                <Text style={{color:'#fff', marginBottom: 10}}>{this.props.modalSkill.description}</Text>

                {this.props.modalSkill.type === PASSIVE && 
                  <Text style={{color:'#fff', marginBottom: 10}}>
                    Rank: {this.props.ranked[this.props.modalSkill.title] ? this.props.ranked[this.props.modalSkill.title] : 0}/{this.props.modalSkill.maxRanks}
                  </Text>
                }

                {this.props.modalSkill.stats && 
                  this.props.modalSkill.stats.map(stat => {
                    return (
                      <View key={stat.type} style={{marginBottom: 5, flexDirection:'row', flexWrap:'wrap'}}>
                        <Text style={{color:'yellow'}}>{stat.type}:</Text>
                        <Text style={{color:'#fff'}}> {stat.description}</Text>
                      </View>
                    )
                  })
                }

                { this._isEquippedSkill(this.props.modalSkill) && 
                  <TouchableOpacity
                    style={styles.skillModalButtons}
                    onPress={() => this._unselectSkill(this.props.modalSkill.title)}
                  >
                    <Text> Unselect </Text>
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
                            <Text> Clear </Text>
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
                            <Text> -1 </Text>
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
                            <Text> +1</Text>
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
                            <Text> Max </Text>
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
                      <Text> Assign Pet </Text>
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
                    <Text> Close </Text>
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
  treeContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingRight: 5,
    paddingLeft: 5,
  },
  greenSkillTree: {
    backgroundColor: 'rgba(69, 133, 4, 0.5)',
  },
  redSkillTree: {
    backgroundColor: 'rgba(99, 33, 6, 0.5)',
  },
  blueSkillTree: {
    backgroundColor: 'rgba(3, 59, 135, 0.5)',
  },
  treeTitle: {
    color:'#fff', 
    fontSize: 30, 
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
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
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  outerModal: {
    backgroundColor: 'rgba(80,80,80,0.9)',
    paddingTop: '20%',
    paddingBottom: '10%',
    paddingHorizontal: 20,
    height: '100%',
  },
  innerModal: {
    backgroundColor: 'rgb(3, 59, 135)',
    borderRadius: 5,
    padding: 30,
    width: '100%'
  },
  skillModalButtons: {
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: '#b0ad00',
    color: '#fff',
    padding: 10
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
    setModalSkill: bindActionCreators(actions.setModalSkill, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
