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
import { PASSIVE, AUGMENT, ACTION, PET, FLAK, MOZE, ZANE, AMARA, RED_BG, YELLOW_FONT, TITLE_FONT } from '../data/constants';

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
    this.props.removeSkill("flak", equippedSkills)
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
                        <Image
                          source={require('../assets/images/skills/adrenaline.png')}
                          style={styles.skillImage} 
                          resizeMode='contain'/>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.skillContainerAction}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.flak.equipped.action, true, "an action")}>
                      <ImageBackground source={this._getSkillBackgroundImage(ACTION)} 
                          style={styles.skillImageBg}
                          resizeMode='contain'>
                        <Image
                          source={require('../assets/images/skills/adrenaline.png')}
                          style={styles.skillImage} 
                          resizeMode='contain'/>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.skillContainerAugment}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.flak.equipped.augment1, true, "an augment")}>
                      <ImageBackground source={this._getSkillBackgroundImage(AUGMENT)} 
                          style={styles.skillImageBg}
                          resizeMode='contain'>
                        <Image
                          source={require('../assets/images/skills/adrenaline.png')}
                          style={styles.skillImage} 
                          resizeMode='contain'/>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.skillContainerAugment}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.flak.equipped.augment2, true, "an augment")}>
                      <ImageBackground source={this._getSkillBackgroundImage(AUGMENT)} 
                          style={styles.skillImageBg}
                          resizeMode='contain'>
                        <Image
                          source={require('../assets/images/skills/adrenaline.png')}
                          style={styles.skillImage} 
                          resizeMode='contain'/>
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
              this.props.stats && Object.keys(this.props.stats).map(stat => {
                return (
                  <View key={stat} style={{marginBottom: 5, flexDirection:'row', flexWrap:'wrap'}}>
                    <Text style={{...styles.defaultFont, ...styles.yellowFont}}>{stat}:</Text>
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
            <View style={styles.outerModal}>
              <View style={styles.innerModal}>
                <Text style={{color:'yellow', fontSize: 30, marginBottom: 10}}>{this.props.modalSkill.title}</Text>
                
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
              </View>
            </View>
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
    color: '#fff',
    height: 800
  },
  statsSummaryHeader: {
    paddingVertical: 10,
    color: YELLOW_FONT, 
    fontSize: 30, 
    textAlign: 'center',
    fontFamily: TITLE_FONT,
  },
  pointsLeftText: {
    marginBottom: 5, 
    flexDirection:'row', 
    flexWrap:'wrap', 
    justifyContent: 'center',
    color: YELLOW_FONT, 
    fontSize: 20, 
    fontFamily: TITLE_FONT,
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
    padding: 30,
    width: '100%'
  },
  skillModalButtons: {
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: '#b0ad00',
    color: '#fff',
    padding: 10
  }
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
