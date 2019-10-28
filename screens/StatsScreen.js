import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableHighlight,
  Alert,
  ImageBackground
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as actions } from '../actions';
import { PASSIVE, AUGMENT, ACTION, PET, FLAK, MOZE, ZANE, AMARA, RED_BG, YELLOW_FONT, TITLE_FONT, TEXT_FONT } from '../data/constants';

class StatsScreen extends React.Component {
  _getSkillBackgroundImage(skillType) {
    switch (skillType) {
      case PASSIVE:
        return require("../assets/images/backgrounds/skill-bg-passive-disabled.png")
      case AUGMENT:
        return require("../assets/images/backgrounds/skill-bg-augment.png")
      case ACTION:
        return require("../assets/images/backgrounds/skill-bg-action-default.png")
      case PET:
        return require("../assets/images/backgrounds/skill-bg-pet-default.png")
    }
  }

  _onSkillPress = (skill, pressedEquippedSkill = false, textToShow = "") => {
    if(!skill || skill === null) {
      Alert.alert(
        'Oops!',
        `Please select ${textToShow} first`,
      );
    } else {
      this._setModal(true, skill, pressedEquippedSkill)
    }
  }

  _setModal(visible, skill, pressedEquippedSkill = true) {
    this.props.setSelectedModalSkill({selectedSkillModalVisible: visible, modalSkill: skill, showingEquippedSkill: pressedEquippedSkill})
  }

  _unselectSkill = (skillTitle) => {
    const equippedSkills = {...this.props[this.props.selectedHero].equipped}
    for(key in equippedSkills) {
      if(equippedSkills[key] && equippedSkills[key].title === skillTitle) {
        equippedSkills[key] = null
      }
    }
    this.props.removeSkill(this.props.selectedHero, equippedSkills)
    this._setModal(false, "")
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.selectedSkillsContainer}>
            <Text style={styles.sectionHeader}>{
              this.props.selectedHero === FLAK ? "FL4K" : this.props.selectedHero.toUpperCase()
              }
            </Text>
            {
              this.props.selectedHero === FLAK &&
              <View style={{height: '10%'}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                  <View style={styles.skillContainerAction}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.flak.equipped.pet, true, "a pet")}>
                      <ImageBackground source={this._getSkillBackgroundImage(PET)} 
                          style={styles.skillImageBg}
                          resizeMode='contain'>
                        {
                          this.props.flak.equipped.pet &&
                          <Image
                            source={this.props.flak.equipped.pet.image}
                            style={styles.skillImage} 
                            resizeMode='contain'/>
                        }
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.skillContainerAction}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.flak.equipped.action1, true, "an action")}>
                      <ImageBackground source={this._getSkillBackgroundImage(ACTION)} 
                          style={styles.skillImageBg}
                          resizeMode='contain'>
                        {
                          this.props.flak.equipped.action1 &&
                          <Image
                            source={this.props.flak.equipped.action1.image}
                            style={styles.skillImage} 
                            resizeMode='contain'/>
                        }
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.skillContainerAugment}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.flak.equipped.augment1, true, "an augment")}>
                      <ImageBackground source={this._getSkillBackgroundImage(AUGMENT)} 
                          style={styles.skillImageBg}
                          resizeMode='contain'>
                        {
                          this.props.flak.equipped.augment1 &&
                          <Image
                            source={this.props.flak.equipped.augment1.image}
                            style={styles.skillImage} 
                            resizeMode='contain'/>
                        }
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.skillContainerAugment}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.flak.equipped.augment2, true, "an augment")}>
                      <ImageBackground source={this._getSkillBackgroundImage(AUGMENT)} 
                          style={styles.skillImageBg}
                          resizeMode='contain'>
                        {
                          this.props.flak.equipped.augment2 &&
                          <Image
                            source={this.props.flak.equipped.augment2.image}
                            style={styles.skillImage} 
                            resizeMode='contain'/>
                        }
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            }

            {
              this.props.selectedHero === MOZE &&
              <View style={{height: '16%'}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                  <View style={styles.skillContainerAction}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.moze.equipped.action1, true, "an action")}>
                      <ImageBackground source={this._getSkillBackgroundImage(ACTION)} 
                          style={styles.skillImageBg}
                          resizeMode='contain'>
                        {
                          this.props.moze.equipped.action1 &&
                          <Image
                            source={this.props.moze.equipped.action1.image}
                            style={styles.skillImage} 
                            resizeMode='contain'/>
                        }
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.skillContainerAugment}>
                  </View>
                  <View style={styles.skillContainerAction}>
                  </View>
                  <View style={styles.skillContainerAugment}>
                  <TouchableOpacity onPress={() => this._onSkillPress(this.props.moze.equipped.action2, true, "an action")}>
                      <ImageBackground source={this._getSkillBackgroundImage(ACTION)} 
                          style={styles.skillImageBg}
                          resizeMode='contain'>
                        {
                          this.props.moze.equipped.action2 &&
                          <Image
                            source={this.props.moze.equipped.action2.image}
                            style={styles.skillImage} 
                            resizeMode='contain'/>
                        }
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                  <View style={styles.skillContainerAugment}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.moze.equipped.augment1, true, "an augment")}>
                      <ImageBackground source={this._getSkillBackgroundImage(AUGMENT)} 
                          style={styles.skillImageBg}
                          resizeMode='contain'>
                        {
                          this.props.moze.equipped.augment1 &&
                          <Image
                            source={this.props.moze.equipped.augment1.image}
                            style={styles.skillImage} 
                            resizeMode='contain'/>
                        }
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.skillContainerAction}>
                  </View>
                  <View style={styles.skillContainerAction}>
                  </View>
                  <View style={styles.skillContainerAugment}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.moze.equipped.augment2, true, "an augment")}>
                      <ImageBackground source={this._getSkillBackgroundImage(AUGMENT)} 
                          style={styles.skillImageBg}
                          resizeMode='contain'>
                        {
                          this.props.moze.equipped.augment2 &&
                          <Image
                            source={this.props.moze.equipped.augment2.image}
                            style={styles.skillImage} 
                            resizeMode='contain'/>
                        }
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            }

            {
              this.props.selectedHero === ZANE &&
              <View style={{height: '22%'}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                  <View style={styles.skillContainerAction}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.zane.equipped.action1, true, "an action")}>
                      <ImageBackground source={this._getSkillBackgroundImage(ACTION)} 
                          style={styles.skillImageBg}
                          resizeMode='contain'>
                        {
                          this.props.zane.equipped.action1 &&
                          <Image
                            source={this.props.zane.equipped.action1.image}
                            style={styles.skillImage} 
                            resizeMode='contain'/>
                        }
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.skillContainerAugment}>
                  </View>
                  <View style={styles.skillContainerAction}>
                  </View>
                  <View style={styles.skillContainerAugment}>
                  <TouchableOpacity onPress={() => this._onSkillPress(this.props.zane.equipped.action2, true, "an action")}>
                      <ImageBackground source={this._getSkillBackgroundImage(ACTION)} 
                          style={styles.skillImageBg}
                          resizeMode='contain'>
                        {
                          this.props.zane.equipped.action2 &&
                          <Image
                            source={this.props.zane.equipped.action2.image}
                            style={styles.skillImage} 
                            resizeMode='contain'/>
                        }
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                  <View style={styles.skillContainerAugment}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.zane.equipped.augment1, true, "an augment")}>
                      <ImageBackground source={this._getSkillBackgroundImage(AUGMENT)} 
                          style={styles.skillImageBg}
                          resizeMode='contain'>
                        {
                          this.props.zane.equipped.augment1 &&
                          <Image
                            source={this.props.zane.equipped.augment1.image}
                            style={styles.skillImage} 
                            resizeMode='contain'/>
                        }
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.skillContainerAction}>
                  </View>
                  <View style={styles.skillContainerAction}>
                  </View>
                  <View style={styles.skillContainerAugment}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.zane.equipped.augment2, true, "an augment")}>
                      <ImageBackground source={this._getSkillBackgroundImage(AUGMENT)} 
                          style={styles.skillImageBg}
                          resizeMode='contain'>
                        {
                          this.props.zane.equipped.augment2 &&
                          <Image
                            source={this.props.zane.equipped.augment2.image}
                            style={styles.skillImage} 
                            resizeMode='contain'/>
                        }
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                  <View style={styles.skillContainerAugment}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.zane.equipped.augment3, true, "an augment")}>
                      <ImageBackground source={this._getSkillBackgroundImage(AUGMENT)} 
                          style={styles.skillImageBg}
                          resizeMode='contain'>
                        {
                          this.props.zane.equipped.augment3 &&
                          <Image
                            source={this.props.zane.equipped.augment3.image}
                            style={styles.skillImage} 
                            resizeMode='contain'/>
                        }
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.skillContainerAction}>
                  </View>
                  <View style={styles.skillContainerAction}>
                  </View>
                  <View style={styles.skillContainerAugment}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.zane.equipped.augment4, true, "an augment")}>
                      <ImageBackground source={this._getSkillBackgroundImage(AUGMENT)} 
                          style={styles.skillImageBg}
                          resizeMode='contain'>
                        {
                          this.props.zane.equipped.augment4 &&
                          <Image
                            source={this.props.zane.equipped.augment4.image}
                            style={styles.skillImage} 
                            resizeMode='contain'/>
                        }
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            }

            {
              this.props.selectedHero === AMARA &&
              <View style={{height: '10%'}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                  <View style={styles.skillContainerAction}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.amara.equipped.action1, true, "an action")}>
                      <ImageBackground source={this._getSkillBackgroundImage(ACTION)} 
                          style={styles.skillImageBg}
                          resizeMode='contain'>
                        {
                          this.props.amara.equipped.action1 &&
                          <Image
                            source={this.props.amara.equipped.action1.image}
                            style={styles.skillImage} 
                            resizeMode='contain'/>
                        }
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.skillContainerAugment}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.amara.equipped.augment1, true, "an augment")}>
                      <ImageBackground source={this._getSkillBackgroundImage(AUGMENT)} 
                          style={styles.skillImageBg}
                          resizeMode='contain'>
                        {
                          this.props.amara.equipped.augment1 &&
                          <Image
                            source={this.props.amara.equipped.augment1.image}
                            style={styles.skillImage} 
                            resizeMode='contain'/>
                        }
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.skillContainerAction}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.amara.equipped.element1, true, "an action element")}>
                      <ImageBackground source={this._getSkillBackgroundImage(PET)} 
                          style={styles.skillImageBg}
                          resizeMode='contain'>
                        {
                          this.props.amara.equipped.element1 &&
                          <Image
                            source={this.props.amara.equipped.element1.image}
                            style={styles.skillImage} 
                            resizeMode='contain'/>
                        }
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            }
          </View>

          <View style={styles.statsSummaryContainer}>
            <Text style={styles.statsSummaryHeader}>STATS SUMMARY</Text>

            <View style={styles.pointsLeftText}>
              <Text style={styles.pointsLeftText}>Points Left:</Text>
              <Text style={styles.pointsLeftText}> {this.props.pointsLeft}</Text>
            </View>
            
            {
              this.props.stats && Object.keys(this.props.stats).sort().map(stat => {
                return (
                  <View key={stat} style={{marginBottom: 8, flexDirection:'row', flexWrap:'wrap'}}>
                    <Text style={{...styles.defaultFont, ...styles.yellowFont, fontWeight: 'bold'}}>{stat}:</Text>
                    <Text style={styles.defaultFont}> {this.props.stats[stat]}</Text>
                  </View>
                )
              })
            }
          </View>
        </ScrollView>

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.selectedSkillModalVisible}
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
                
                <Text style={{color:'#fff', marginBottom: 10}}>
                  {
                    this.props.modalSkill.type === ACTION && 'Action Skill' ||
                    this.props.modalSkill.type === AUGMENT && 'Action Skill Augment' ||
                    this.props.modalSkill.type === PET && 'Pet'
                  }
                </Text>

                <Text style={{color:'#fff', marginBottom: 10}}>{this.props.modalSkill.description}</Text>

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
  
                { this.props.showingEquippedSkill && 
                    <TouchableOpacity
                      style={styles.skillModalButtons}
                      onPress={() => this._unselectSkill(this.props.modalSkill.title)}
                    >
                      <Text> Unselect </Text>
                    </TouchableOpacity>
                }

                <TouchableOpacity
                  style={styles.skillModalButtons}
                  onPress={() => this._setModal(false, "")}
                >
                  <Text> Close </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </View>
        
      </View>
    );
  }
}

StatsScreen.navigationOptions = {
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
  sectionHeader: {
    fontSize: 40, 
    textAlign: 'center', 
    backgroundColor: RED_BG,
    color: YELLOW_FONT,
    paddingVertical: 10,
    fontFamily: TITLE_FONT
  },
  defaultFont: {
    color:'#fff', 
    fontSize: 20
  },
  yellowFont: {
    color:'yellow', 
  },
  skillContainer: {
    width: '12%',
    height: 86,
    padding: 2,
    marginHorizontal: Platform.OS === 'ios' ? -12 : -18,
  },
  skillContainerAugment: {
    width: '20%',
    height: 76,
    paddingTop: 4,
  },
  skillContainerAction: {
    width: '20%',
    height: 76,
  },
  skillImageBg: {
    width: "100%",
    height: "100%",
  },
  skillImage: {
    width: "80%",
    height: "70%",
    marginTop: 12,
    marginLeft: 7,
    resizeMode: 'contain',
  },
  selectedSkillsContainer: {
    backgroundColor: RED_BG,
  },
  statsSummaryContainer: {
    backgroundColor: 'rgb(3, 59, 135)',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
    color: '#fff',
    minHeight: 800
  },
  statsSummaryHeader: {
    paddingVertical: 10,
    color: YELLOW_FONT, 
    fontSize: 30, 
    textAlign: 'center',
    fontFamily: TITLE_FONT,
  },
  pointsLeftText: {
    marginBottom: 12, 
    flexDirection:'row', 
    flexWrap:'wrap', 
    justifyContent: 'center',
    color: YELLOW_FONT, 
    fontSize: 20, 
    fontFamily: TITLE_FONT,
  },
  
  // Modal Styles
  outerModal: {
    backgroundColor: 'rgba(80,80,80,0.96)',
    paddingTop: '25%',
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
    removeSkill: bindActionCreators(actions.removeSkill, dispatch),
    setSelectedModalSkill: bindActionCreators(actions.setSelectedModalSkill, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatsScreen);
