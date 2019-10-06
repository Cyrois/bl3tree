import React from 'react';
import firebase from 'react-native-firebase';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  Image
} from 'react-native';

import TabBarIcon from '../components/TabBarIcon';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators as actions } from '../actions';
import { FLAK, MOZE, ZANE, AMARA, YELLOW_FONT, RED_BG, TITLE_FONT, TEXT_FONT } from '../data/constants';
import { TOGGLE_BUILDS, TOGGLE_ACTIONS } from '../types';

class SettingsScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.buildNameTextInput = React.createRef();
    this.buildsStore = firebase.firestore().collection('builds');
    
    if(this._isUserLoggedIn) {
      this._loadBuilds()
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.setAccountEmail(user.email)
      this._loadBuilds()
    })
  }

  _loadBuilds() {
    let builds = []
    this.buildsStore.where("user", "==", this.props.email).get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            let build = {
              id: doc.id,
              ...doc.data()
            }
            builds.push(build)
        });
    });
    this.props.loadBuilds(builds)
  }

  _toggleActions(toggle) {
    this.props.toggleLandingOptions(toggle)
  }
  
  _toggleBuilds(toggle) {
    this.props.toggleBuilds(toggle)
  }

  _handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.props.email, this.props.password)
      .then(() => console.log("User signed up"))
      .catch(error => console.log("Unable to sign up user"))
  }

  _handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.props.email, this.props.password)
      .then(() => console.log("User signed in"))
      .catch(error => console.log("Unable to sign up user"))
  }

  _isUserLoggedIn = () => {
    let googleUser = firebase.auth().currentUser;
    this.props.setAccountEmail(googleUser.email);
    return !!firebase.auth().currentUser;
  }

  _selectHero(hero) {
    this.props.selectHero(hero)
    this.props.setHeroSelect(false)
  }

  _saveBuild() {
    let build = {
      hero: this.props.selectedHero,
      skills: this.props[this.props.selectedHero].equipped,
      ranked: this.props.ranked
    }
    let document = {
      user: this.props.email,
      name: this.props.buildName,
      build: build,
    }
    this.buildsStore.add(document).then(this._loadBuilds)
  }

  _loadBuildCode(id) {
    console.log(id)
    id = "OhFaCIVtshVd5yFAOUI7"
    this.buildsStore.doc(id).get().then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        this.props.loadBuild(doc.data())
        console.log('Document data:', doc.data());
      }
    })
  }

  _getToggleIcon(toggle) {
    let openedSection = true;
    if(toggle === TOGGLE_ACTIONS) {
      openedSection = this.props.toggleActions
    } else if (toggle === TOGGLE_BUILDS) {
      openedSection = this.props.toggleBuilds
    }

    if(openedSection) {
      return require('../assets/images/chevron-down-white.png')
    } else {
      return require('../assets/images/chevron-right-white.png')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.bl3LogoContainer}>
              <Image
                source={require('../assets/images/bl3Icon.jpeg')}
                style={styles.bl3Logo} /> 
            </View>
            
            {
              this._isUserLoggedIn() && 
                <View>
                  <Text style={{...styles.sectionHeader, fontSize: 14, fontFamily: TEXT_FONT}}>
                    Logged In As: {this.props.email}
                  </Text>
                </View>
            }
            
            <TouchableOpacity
                onPress={() => this.props.toggle(TOGGLE_ACTIONS)}
              >
              <Text style={styles.sectionHeader}>
                Main Menu
              </Text>
              <Image
                source={this._getToggleIcon(TOGGLE_ACTIONS)}
                style={styles.accordianIcon} /> 
            </TouchableOpacity>

            { this.props.toggleActions &&
              <View>
                {
                  !this._isUserLoggedIn &&
                  <TouchableOpacity
                    style={styles.mainButton}
                    onPress={() => this.props.setCreateAccountModal(true)}
                  >
                    <Text style={styles.mainButtonText}> Create Account </Text>
                  </TouchableOpacity>
                }
                
                <View style={styles.divider}></View>

                <TouchableOpacity
                  style={styles.mainButton}
                  onPress={() => {
                    this.buildNameTextInput = true
                    this.props.setSaveBuildModal(true)
                  }}
                >
                  <Text style={styles.mainButtonText}> Save Build </Text>
                </TouchableOpacity>

                <View style={styles.divider}></View>

                <TouchableOpacity
                  style={styles.mainButton}
                  onPress={() => {
                    this.buildNameTextInput = true
                    this.props.loadBuildCodeModal(true)
                  }}
                >
                  <Text style={styles.mainButtonText}> Load Build Code </Text>
                </TouchableOpacity>

                <View style={styles.divider}></View>

                <TouchableOpacity
                  style={styles.mainButton}
                  onPress={() => this.props.setHeroSelect(true)}
                >
                  <Text style={styles.mainButtonText}> Change Hero </Text>
                </TouchableOpacity>
              </View>
            }

            <TouchableOpacity
                onPress={() => this.props.toggle(TOGGLE_BUILDS)}
              >
              <Text style={styles.sectionHeader}>
                Saved Builds
              </Text>
              <Image
                source={this._getToggleIcon(TOGGLE_BUILDS)}
                style={styles.accordianIcon} /> 
            </TouchableOpacity>
            
            { this.props.toggleBuilds &&
              this.props.builds.map((build, index) => {
                return (
                  <View key={build.id}>
                    <TouchableOpacity
                      style={styles.mainButton}
                      onPress={() => {
                        this.buildIdToLoad = build.id
                        this.props.confirmLoadBuild(true)
                      }}
                    >
                      <Text style={styles.mainButtonText}> {build.name} </Text>
                    </TouchableOpacity>
                    
                    {
                      index < (this.props.builds.length - 1) &&
                      <View style={styles.divider}></View>
                    }
                  </View>
                )
              })
            }
        </ScrollView>

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.createAccountModalVisible}
            onRequestClose={() => this.props.setCreateAccountModal(false)}>
            <View style={styles.outerModal}>
              <View style={styles.innerModal}>
                <Text style={styles.modalHeader}>Sign Up</Text>
                  <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={email => this.props.setAccountEmail(email)}
                    value={this.props.email}
                  />
                  <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={password => this.props.setAccountPassword(password)}
                    value={this.props.password}
                  />
                  <TouchableOpacity
                    style={styles.modalBtns}
                    onPress={this._handleSignUp}
                  >
                    <Text style={styles.modalBtnText}> Create New Account </Text>
                  </TouchableOpacity>
                  
                  <View style={{marginTop: 20}}>
                    <Text style={{fontFamily: TEXT_FONT}}> Already have an account? <Text onPress={() => {
                      this.props.setCreateAccountModal(false)
                      this.props.setLoginModal(true)
                      }} style={{color: RED_BG, fontFamily: TEXT_FONT}}> Login </Text>
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={styles.modalBtns}
                    onPress={() => this.props.setCreateAccountModal(false)}
                  >
                    <Text style={styles.modalBtnText}> Cancel </Text>
                  </TouchableOpacity>
                </View>
            </View>
          </Modal>
        </View>

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.saveBuildModalVisible}
            onRequestClose={() => this.props.setSaveBuildModal(false)}>
            <View style={styles.outerModal}>
              <View style={styles.innerModal}>
                <Text style={{...styles.modalHeader, fontSize: 30}}>Name your build:</Text>

                <TextInput
                  autoFocus={!!this.buildNameTextInput}
                  ref={this.buildNameTextInput}
                  placeholder="Type a Name"
                  autoCapitalize="words"
                  style={{...styles.heroBtnText, marginVertical: 50}}
                  onChangeText={buildName => this.props.setCurrentBuildName(buildName)}
                  value={this.props.buildName}
                />
                  
                <TouchableOpacity
                  style={styles.modalBtns}
                  onPress={() => {
                    this._saveBuild()
                    this.props.setSaveBuildModal(false)
                  }}
                >
                  <Text style={styles.modalBtnText}> Save </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.modalBtns}
                  onPress={() => this.props.setSaveBuildModal(false)}
                >
                  <Text style={styles.modalBtnText}> Close </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.loadBuildCodeModalVisible}
            onRequestClose={() => this.props.loadBuildCodeModal(false)}>
            <View style={styles.outerModal}>
              <View style={styles.innerModal}>
                <Text style={{...styles.modalHeader, fontSize: 30}}>Enter Build Code:</Text>

                <TextInput
                  placeholder="Enter Code"
                  style={{...styles.heroBtnText, marginVertical: 50}}
                  onChangeText={code => this.props.setBuildCode(code)}
                  value={this.props.buildCode}
                />
                  
                <TouchableOpacity
                  style={styles.modalBtns}
                  onPress={() => {
                    this._loadBuildCode(this.loadBuildCode)
                    this.props.loadBuildCodeModal(false)
                  }}
                >
                  <Text style={styles.modalBtnText}> Enter </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.modalBtns}
                  onPress={() => this.props.loadBuildCodeModal(false)}
                >
                  <Text style={styles.modalBtnText}> Close </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.heroSelectModalVisible}
            onRequestClose={() => this.props.setHeroSelect(false)}>
            <View style={styles.outerModal}>
              <View style={styles.innerModal}>
  
                  <TouchableOpacity
                    style={styles.modalBtns}
                    onPress={() => this._selectHero(FLAK)}
                  >
                    <Text style={styles.heroBtnText}> Fl4k </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.modalBtns}
                    onPress={() => this._selectHero(MOZE)}
                  >
                    <Text style={styles.heroBtnText}> Moze </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.modalBtns}
                    onPress={() => this._selectHero(ZANE)}
                  >
                    <Text style={styles.heroBtnText}> Zane </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.modalBtns}
                    onPress={() => this._selectHero(AMARA)}
                  >
                    <Text style={styles.heroBtnText}> Amara </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{marginTop: 20, ...styles.modalBtns}}
                    onPress={() => this.props.setHeroSelect(false)}
                  >
                    <Text style={styles.modalBtnText}> Close </Text>
                  </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.confirmLoadModalVisible}
            onRequestClose={() => this.props.confirmLoadBuild(false)}>
            <View style={styles.outerModal}>
              <View style={styles.innerModal}>
                <Text style={styles.modalHeader}>Are you sure?</Text>

                <Text style={styles.mainButtonText}>Unsaved Changes will be lost</Text>
                
                <TouchableOpacity
                  style={{marginTop: 20, ...styles.modalBtns}}
                  onPress={() => {
                    this.props.loadSavedBuild(this.buildIdToLoad)
                    this.props.confirmLoadBuild(false)
                  }}
                >
                  <Text style={styles.modalBtnText}> Continue </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{marginTop: 20, ...styles.modalBtns}}
                  onPress={() => this.props.confirmLoadBuild(false)}
                >
                  <Text style={styles.modalBtnText}> Close </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

SettingsScreen.navigationOptions = {
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
  bl3LogoContainer: {
    marginVertical: 40,
    alignItems: 'center',
  },
  sectionHeader: {
    fontSize: 40, 
    textAlign: 'center', 
    backgroundColor: RED_BG,
    color: YELLOW_FONT,
    paddingVertical: 10,
    fontFamily: TITLE_FONT
  },
  mainButton: {
    marginVertical: 10,
    alignItems: 'center',
    padding: 10,
  },
  mainButtonText: {
    fontSize: 16,
    // fontFamily: "Monsterrat"
  },
  outerModal: {
    backgroundColor: 'rgba(80,80,80,0.96)',
    paddingTop: '25%',
    paddingBottom: '10%',
    paddingHorizontal: 20,
    height: '100%',
  },
  innerModal: {
    backgroundColor: '#fff',
    padding: 20,
    width: '100%'
  },
  modalHeader: {
    color: RED_BG, 
    fontSize: 40, 
    fontFamily: TEXT_FONT
  },
  modalBtns: {
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: RED_BG,
    padding: 10
  },
  modalBtnText: {
    color: YELLOW_FONT,
    fontFamily: TEXT_FONT
  },
  heroBtnText: {
    fontSize: 30, 
    textAlign: 'center', 
    backgroundColor: RED_BG,
    color: YELLOW_FONT,
    paddingVertical: 5,
    fontFamily: TITLE_FONT
  },
  textInput: {
    fontFamily: TEXT_FONT
  },
  divider: {
    borderColor: '#dedede', 
    borderWidth: 1, 
    marginHorizontal: 20
  },
  accordianIcon: {
    position:'absolute', 
    top: '30%', 
    right: 20, 
    width: 24, 
    height: 24
  }
});

mapStateToProps = state => {
  return { ... state }
}

mapDispatchToProps = dispatch => {
  return {
    setCreateAccountModal: bindActionCreators(actions.setCreateAccountModal, dispatch),
    setAccountEmail: bindActionCreators(actions.setAccountEmail, dispatch),
    setAccountPassword: bindActionCreators(actions.setAccountPassword, dispatch),
    setCurrentBuildName: bindActionCreators(actions.setCurrentBuildName, dispatch),
    loadBuilds: bindActionCreators(actions.loadBuilds, dispatch),
    loadBuild: bindActionCreators(actions.loadBuild, dispatch),
    loadSavedBuild: bindActionCreators(actions.loadSavedBuild, dispatch),
    loadBuildCodeModal: bindActionCreators(actions.loadBuildCodeModal, dispatch),
    setBuildCode: bindActionCreators(actions.setBuildCode, dispatch),
    confirmLoadBuild: bindActionCreators(actions.confirmLoadBuild, dispatch),
    setSaveBuildModal: bindActionCreators(actions.setSaveBuildModal, dispatch),
    setHeroSelect: bindActionCreators(actions.setHeroSelect, dispatch),
    selectHero: bindActionCreators(actions.selectHero, dispatch),
    toggle: bindActionCreators(actions.toggle, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
