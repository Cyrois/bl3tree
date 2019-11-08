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
  Image,
  Clipboard
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
    
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.props.setAccountEmail(user.email)
        this.props.setAccountId(user.uid);
        this._loadBuilds()
      }
    })
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.props.setAccountEmail(user.email)
        this.props.setAccountId(user.uid);
        this._loadBuilds()
      }
    })
  }

  _loadBuilds() {
    let builds = []
    if(!this.buildsStore) {
      this.buildsStore = firebase.firestore().collection('builds');
    }
    this.buildsStore.where("user", "==", this.props.userId).get()
      .then(querySnapshot => {
          querySnapshot.forEach(doc => {
              let build = {
                id: doc.id,
                ...doc.data()
              }
              builds.push(build)
          });
          console.log(builds)
          this.props.loadBuilds(builds)
      });
  }

  _toggleActions(toggle) {
    this.props.toggleLandingOptions(toggle)
  }
  
  _toggleBuilds(toggle) {
    this.props.toggleBuilds(toggle)
  }

  _handleSignUp = () => {
    this.props.setCreateError("")
    if(!this.props.email) {
      this.props.setCreateError('Please enter your email')
      return
    } else if(!this.props.password) {
      this.props.setCreateError('Please enter your password')
      return
    } else if(this.props.password !== this.props.confirmPassword) {
      this.props.setCreateError("Your passwords don't match, please re-type them.")
      return
    } else {
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.props.email, this.props.password)
      .then(() => {
        this.props.setCreateAccountModal(false)
        this.props.setCreateError('')
      })
      .catch(error => {
        console.log(error)
        this.props.setCreateError(error.message)
      })
    }
  }

  _handleSignIn = () => {
    if(!this.props.email) {
      // this.props.setCreateError('Please enter your email')
      return
    } else if(!this.props.password) {
      // this.props.setCreateError('Please enter your password')
      return
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.props.email, this.props.password)
        .then(() => {
          this.props.setLoginModal(false)
          this.props.setCreateError('')
          this._loadBuilds()
        })
        .catch(error => {
          console.log(error)
          if(error.code === "auth/unknown") {
            this.props.setLoginError("We detected something unusual, please try again later.")
          } else {
            this.props.setLoginError(error.message)
          }
        })
    }
  }

  _handleForgotPassword = () => {
    firebase.auth().sendPasswordResetEmail(this.props.email)
      .then(function (user) {
        this.setForgotPasswordModal(false)
        alert('Please check your email...')
      }).catch(function (e) {
        console.log(e)
      })
  }

  _handleLogout = () => {
    firebase.auth().signOut()
      .then(() => {
        this.props.setAccountEmail("")
        this.props.setAccountPassword("")
        this.props.setAccountId("")
        this.props.loadBuilds([])
      })
  }

  _isUserLoggedIn = () => {
    return !!firebase.auth().currentUser;
  }

  _selectHero(hero) {
    this.props.selectHero(hero)
    this.props.setHeroSelect(false)
  }

  _saveBuild() {
    if(this._isUserLoggedIn()) {
      if(Array.isArray(this.props.builds) && this.props.builds.length > 10) {
        this.props.setSaveBuildError("You have reached the maximum of 10 builds, please delete a build before saving a new one.")
        return
      }
      let build = {
        hero: this.props.selectedHero,
        skills: this.props[this.props.selectedHero].equipped,
        ranked: this.props.ranked
      }
      let document = {
        user: this.props.userId,
        name: this.props.buildName,
        build: build,
      }
      this.buildsStore.add(document)
        .then(() => this._loadBuilds())
        .catch(error => this.props.setSaveBuildError("An error occured while saving your build."))
    }
  }

  _loadBuildCode(id) {
    this.buildsStore.doc(id).get().then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        this.props.loadBuild(doc.data())
        console.log('Document data:', doc.data());
      }
    })
  }

  _deleteSavedBuild(id) {
    this.buildsStore.doc(id).delete().then(() => this._loadBuilds()).catch(error => console.log(error))
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
                source={require('../assets/images/bl3Logo.jpeg')}
                style={styles.bl3Logo} /> 
            </View>

            {
              this._isUserLoggedIn() &&
              <TouchableOpacity
                style={styles.logoutBtn}
                onPress={this._handleLogout}
              >
                <Text style={{}}> Logout </Text>
              </TouchableOpacity>
            }
            
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
                  !this._isUserLoggedIn() &&
                  <TouchableOpacity
                    style={styles.mainButton}
                    onPress={() => this.props.setCreateAccountModal(true)}
                  >
                    <Text style={styles.mainButtonText}> Create Account </Text>
                  </TouchableOpacity>
                }
                
                {
                  !this._isUserLoggedIn() &&
                  <View style={styles.divider}></View>
                }

                {
                  !this._isUserLoggedIn() &&
                  <TouchableOpacity
                    style={styles.mainButton}
                    onPress={() => this.props.setLoginModal(true)}
                  >
                    <Text style={styles.mainButtonText}> Log In </Text>
                  </TouchableOpacity>
                }
                
                {
                  !this._isUserLoggedIn() &&
                  <View style={styles.divider}></View>
                }

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
            
            { this.props.toggleBuilds && this._isUserLoggedIn() &&
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

            {
              this._isUserLoggedIn() && 
              Array.isArray(this.props.builds) && this.props.builds.length === 0 &&
              <View>
                <View style={styles.divider}></View>
                <TouchableOpacity
                  style={styles.mainButton}
                  onPress={this._loadBuilds}
                >
                  <Text style={styles.mainButtonText}>Reload builds</Text>
                </TouchableOpacity>
              </View>
            }
        </ScrollView>

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.createAccountModalVisible}
            onRequestClose={() => this.props.setCreateAccountModal(false)}>
            <TouchableOpacity style={styles.outerModal} onPress={() => {this.props.setCreateAccountModal(false)}}>
              <TouchableOpacity style={styles.innerModal} onPress={(e) => {e.preventDefault()}} activeOpacity={1}>
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

                <TextInput
                  secureTextEntry
                  placeholder="Confirm Password"
                  autoCapitalize="none"
                  style={styles.textInput}
                  onChangeText={password => this.props.setConfirmPassword(password)}
                  value={this.props.confirmPassword}
                />

                {
                  !!this.props.createAccountError &&
                  <Text>{this.props.createAccountError}</Text>
                }
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
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </View>

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.loginModalVisible}
            onRequestClose={() => this.props.setLoginModal(false)}>
            <TouchableOpacity style={styles.outerModal} onPress={() => {this.props.setLoginModal(false)}}>
              <TouchableOpacity style={styles.innerModal} onPress={(e) => {e.preventDefault()}} activeOpacity={1}>
                <Text style={styles.modalHeader}>Login</Text>

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

                {
                  !!this.props.loginAccountError &&
                  <Text>{this.props.loginAccountError}</Text>
                }
                <TouchableOpacity
                  style={styles.modalBtns}
                  onPress={this._handleSignIn}
                >
                  <Text style={styles.modalBtnText}> Sign In </Text>
                </TouchableOpacity>
                
                <View style={{marginTop: 20}}>
                  <Text style={{fontFamily: TEXT_FONT}}> Don't have an account? <Text onPress={() => {
                    this.props.setCreateAccountModal(true)
                    this.props.setLoginModal(false)
                    }} style={{color: RED_BG, fontFamily: TEXT_FONT}}> Sign Up </Text>
                  </Text>
                </View>

                <View style={{marginTop: 10, marginBottom: 10}}>
                  <Text style={{fontFamily: TEXT_FONT}}> Forgot your password? <Text onPress={() => {
                    this.props.setForgotPasswordModal(true)
                    this.props.setLoginModal(false)
                    }} style={{color: RED_BG, fontFamily: TEXT_FONT}}> Reset Password </Text>
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.modalBtns}
                  onPress={() => this.props.setLoginModal(false)}
                >
                  <Text style={styles.modalBtnText}> Cancel </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </View>

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.forgotPasswordModalVisible}
            onRequestClose={() => this.props.setForgotPasswordModal(false)}>
            <TouchableOpacity style={styles.outerModal} onPress={() => {this.props.setForgotPasswordModal(false)}}>
              <TouchableOpacity style={styles.innerModal} onPress={(e) => {e.preventDefault()}} activeOpacity={1}>
                <Text style={styles.modalHeader}>Reset Password</Text>

                <TextInput
                  placeholder="Email"
                  autoCapitalize="none"
                  style={styles.textInput}
                  onChangeText={email => this.props.setAccountEmail(email)}
                  value={this.props.email}
                />

                <TouchableOpacity
                  style={styles.modalBtns}
                  onPress={this._handleForgotPassword}
                >
                  <Text style={styles.modalBtnText}> Send Reset Link </Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={styles.modalBtns}
                  onPress={() => this.props.setForgotPasswordModal(false)}
                >
                  <Text style={styles.modalBtnText}> Cancel </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </View>
        
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.saveBuildModalVisible}
            onRequestClose={() => this.props.setSaveBuildModal(false)}>
            <TouchableOpacity style={styles.outerModal} onPress={() => {this.props.setSaveBuildModal(false)}}>
              <TouchableOpacity style={styles.innerModal} onPress={(e) => {e.preventDefault()}} activeOpacity={1}>
                {
                  !this._isUserLoggedIn && 
                  <Text>Please login before using this function</Text>  
                }

                {
                  this._isUserLoggedIn && 
                  <View>
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

                    {
                      !!this.props.saveBuildError &&
                      <Text>{this.props.saveBuildError}</Text>
                    }

                    {
                      !this._isUserLoggedIn() &&
                      <Text style={{alignSelf: 'center'}}>Please sign in before saving your build.</Text>
                    }
                      
                    <TouchableOpacity
                      disabled={!this._isUserLoggedIn()}
                      style={styles.modalBtns}
                      onPress={() => {
                        this._saveBuild()
                        this.props.setSaveBuildModal(false)
                      }}
                    >
                      <Text style={styles.modalBtnText}> Save </Text>
                    </TouchableOpacity>
                  </View>
                }

                <TouchableOpacity
                  style={styles.modalBtns}
                  onPress={() => this.props.setSaveBuildModal(false)}
                >
                  <Text style={styles.modalBtnText}> Close </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </View>

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.loadBuildCodeModalVisible}
            onRequestClose={() => this.props.loadBuildCodeModal(false)}>
            <TouchableOpacity style={styles.outerModal} onPress={() => {this.props.loadBuildCodeModal(false)}}>
              <TouchableOpacity style={styles.innerModal} onPress={(e) => {e.preventDefault()}} activeOpacity={1}>
                <Text style={{...styles.modalHeader, fontSize: 30}}>Enter Build Code:</Text>

                <Text style={{...styles.mainButtonText, marginTop: 10}}>Warning: Unsaved Changes will be lost</Text>
                
                <Text style={{...styles.mainButtonText, marginTop: 10}}>Loading a build code does not save it, you must save it as one of your own builds.</Text>

                <TextInput
                  placeholder="Enter Code"
                  style={{...styles.heroBtnText, marginVertical: 40, fontFamily: TEXT_FONT}}
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
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </View>

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.heroSelectModalVisible}
            onRequestClose={() => this.props.setHeroSelect(false)}>
            <TouchableOpacity style={styles.outerModal} onPress={() => {this.props.setHeroSelect(false)}}>
              <TouchableOpacity style={styles.innerModal} onPress={(e) => {e.preventDefault()}} activeOpacity={1}>
                  <Text style={{...styles.modalHeader, fontSize: 30}}>Select Hero:</Text>

                  <Text style={{...styles.mainButtonText, marginVertical: 10}}>Unsaved Changes will be lost</Text>

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
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </View>

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.confirmLoadModalVisible}
            onRequestClose={() => this.props.confirmLoadBuild(false)}>
            <TouchableOpacity style={styles.outerModal} onPress={() => {this.props.confirmLoadBuild(false)}}>
              <TouchableOpacity style={styles.innerModal} onPress={(e) => {e.preventDefault()}} activeOpacity={1}>
                <Text style={styles.modalHeader}>Select an Option:</Text>

                <Text style={{...styles.mainButtonText, marginTop: 10}}>Warning: Unsaved Changes will be lost</Text>
                
                <TouchableOpacity
                  style={{marginTop: 20, ...styles.modalBtns}}
                  onPress={() => {
                    this.props.loadSavedBuild(this.buildIdToLoad)
                    this.props.confirmLoadBuild(false)
                  }}
                >
                  <Text style={styles.modalBtnText}> Load Build </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{marginTop: 20, ...styles.modalBtns}}
                  onPress={() => {
                    Clipboard.setString(this.buildIdToLoad);
                    this.props.confirmLoadBuild(false)
                  }}
                >
                  <Text style={styles.modalBtnText}> Copy Shareable Code </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{marginTop: 20, ...styles.modalBtns}}
                  onPress={() => {
                    this.props.confirmLoadBuild(false)
                    this.props.deleteBuildModal(true)
                  }}
                >
                  <Text style={styles.modalBtnText}> Delete Build </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{marginTop: 20, ...styles.modalBtns}}
                  onPress={() => this.props.confirmLoadBuild(false)}
                >
                  <Text style={styles.modalBtnText}> Close </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </View>

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.confirmDeleteModalVisible}
            onRequestClose={() => this.props.deleteBuildModal(false)}>
            <TouchableOpacity style={styles.outerModal} onPress={() => {this.props.deleteBuildModal(false)}}>
              <TouchableOpacity style={styles.innerModal} onPress={(e) => {e.preventDefault()}} activeOpacity={1}>
                <Text style={styles.modalHeader}>Are you sure?</Text>

                <TouchableOpacity
                  style={{marginTop: 20, ...styles.modalBtns}}
                  onPress={() => {
                    this._deleteSavedBuild(this.buildIdToLoad)
                    this.props.deleteBuildModal(false)
                  }}
                >
                  <Text style={styles.modalBtnText}> Delete Build </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{marginTop: 20, ...styles.modalBtns}}
                  onPress={() => this.props.deleteBuildModal(false)}
                >
                  <Text style={styles.modalBtnText}> Close </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </TouchableOpacity>
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
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
    marginTop: -2,
    paddingBottom: 30,
  },
  contentContainer: {
    
  },
  bl3LogoContainer: {
    marginVertical: 40,
    alignItems: 'center',
  },

  //Logout
  logoutBtn: {
    position: 'absolute',
    right: 10,
    top: 20,
  },

  //Menu
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
    borderRadius: 5,
    borderWidth: 5,
    borderColor: RED_BG,
    padding: 20,
    width: '100%'
  },
  modalHeader: {
    color: RED_BG, 
    fontSize: 40, 
    fontFamily: TEXT_FONT,
    marginBottom: 10,
  },
  modalBtns: {
    marginVertical: 10,
    borderRadius: 4,
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
    fontFamily: TEXT_FONT,
    marginVertical: 0,
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
    setCreateError: bindActionCreators(actions.setCreateError, dispatch),
    setLoginModal: bindActionCreators(actions.setLoginModal, dispatch),
    setLoginError: bindActionCreators(actions.setLoginError, dispatch),
    setForgotPasswordModal: bindActionCreators(actions.setForgotPasswordModal, dispatch),
    setAccountEmail: bindActionCreators(actions.setAccountEmail, dispatch),
    setAccountPassword: bindActionCreators(actions.setAccountPassword, dispatch),
    setConfirmPassword: bindActionCreators(actions.setConfirmPassword, dispatch),
    setAccountId: bindActionCreators(actions.setAccountId, dispatch),
    setCurrentBuildName: bindActionCreators(actions.setCurrentBuildName, dispatch),
    loadBuilds: bindActionCreators(actions.loadBuilds, dispatch),
    loadBuild: bindActionCreators(actions.loadBuild, dispatch),
    loadSavedBuild: bindActionCreators(actions.loadSavedBuild, dispatch),
    loadBuildCodeModal: bindActionCreators(actions.loadBuildCodeModal, dispatch),
    deleteBuildModal: bindActionCreators(actions.deleteBuildModal, dispatch),
    setBuildCode: bindActionCreators(actions.setBuildCode, dispatch),
    confirmLoadBuild: bindActionCreators(actions.confirmLoadBuild, dispatch),
    setSaveBuildModal: bindActionCreators(actions.setSaveBuildModal, dispatch),
    setSaveBuildError: bindActionCreators(actions.setSaveBuildError, dispatch),
    setHeroSelect: bindActionCreators(actions.setHeroSelect, dispatch),
    selectHero: bindActionCreators(actions.selectHero, dispatch),
    toggle: bindActionCreators(actions.toggle, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
