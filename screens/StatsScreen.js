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
import { PASSIVE, AUGMENT, ACTION, PET, FLAK, MOZE, ZANE, AMARA } from '../data/constants';

class StatsScreen extends React.Component {
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
            <Text style={{color:'#fff', fontSize: 40, textAlign: 'center'}}>{
              this.props.selectedHero === FLAK ? "FL4K" : this.props.selectedHero.toUpperCase()
              }
            </Text>
            {
              this.props.selectedHero === FLAK &&
              <View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                  <View style={styles.skillContainer}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.flak.equipped.pet, true, "a pet")}>
                      <ImageBackground source={this._getSkillBackgroundImage(PET)} 
                          style={styles.skillImageBg}>
                        <Image
                          source={require('../assets/images/skills/adrenaline.png')}
                          style={styles.skillImage} />
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.skillContainer}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.flak.equipped.action, true, "an action")}>
                      <ImageBackground source={this._getSkillBackgroundImage(ACTION)} 
                          style={styles.skillImageBg}>
                        <Image
                          source={require('../assets/images/skills/adrenaline.png')}
                          style={styles.skillImage} />
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.skillContainer}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.flak.equipped.augment1, true, "an augment")}>
                      <ImageBackground source={this._getSkillBackgroundImage(AUGMENT)} 
                          style={styles.skillImageBg}>
                        <Image
                          source={require('../assets/images/skills/adrenaline.png')}
                          style={styles.skillImage} />
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.skillContainer}>
                    <TouchableOpacity onPress={() => this._onSkillPress(this.props.flak.equipped.augment2, true, "an augment")}>
                      <ImageBackground source={this._getSkillBackgroundImage(AUGMENT)} 
                          style={styles.skillImageBg}>
                        <Image
                          source={require('../assets/images/skills/adrenaline.png')}
                          style={styles.skillImage} />
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            }
          </View>

          <View style={styles.statsSummaryContainer}>
            <Text style={{color:'#fff', fontSize: 30, textAlign: 'center'}}>STATS SUMMARY</Text>

            <View style={{marginBottom: 5, flexDirection:'row', flexWrap:'wrap', justifyContent: 'center'}}>
              <Text style={styles.defaultFont}>Points Left:</Text>
              <Text style={styles.defaultFont}> {this.props.pointsLeft}</Text>
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
    paddingTop: 30,
    marginTop: -2,
  },
  contentContainer: {
  },
  defaultFont: {
    color:'#fff', 
    fontSize: 20
  },
  yellowFont: {
    color:'yellow', 
  },
  skillContainer: {
    width: '18%',
    height: 80,
    resizeMode: 'contain',
    marginTop: 5,
    marginHorizontal: 4,
  },
  skillImageBg: {
    margin: 2,
    width: "90%",
    height: "90%",
    resizeMode: 'contain',
  },
  skillImage: {
    width: "80%",
    height: "65%",
    marginTop: 7,
    marginLeft: 3,
    resizeMode: 'contain',
  },
  selectedSkillsContainer: {
    backgroundColor: 'rgba(30, 39, 58, 0.5)'
  },
  statsSummaryContainer: {
    backgroundColor: 'rgb(3, 59, 135)',
    paddingHorizontal: 20,
    color: '#fff',
    height: 800
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
