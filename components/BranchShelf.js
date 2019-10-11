import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';

import { GREEN, RED, BLUE } from '../data/constants';

class BranchShelf extends React.Component {
  constructor(props) {
    super(props);
  }
  
  _getShelf(color) {
    switch (color) {
      case GREEN:
        return require("../assets/images/backgrounds/branch-shelf-r-green.png")
      case RED:
        return require("../assets/images/backgrounds/branch-shelf-r-orange.png")
      case BLUE:
        return require("../assets/images/backgrounds/branch-shelf-r-blue.png")
    }
  }

  render() {
    if(this.props.flipped) {
      return (
        <View style={{...styles.defaultShelf, left: this.props.horizontal, top: this.props.top}}>
          <ImageBackground resizeMode='contain' source={this._getShelf(this.props.color)} 
              style={{height: '100%', width: '100%', transform: [{scaleX: -1}]}}>
          </ImageBackground>
        </View>
      );  
    }
    return (
      <View style={{...styles.defaultShelf, right: this.props.horizontal, top: this.props.top}}>
        <ImageBackground resizeMode='contain' source={this._getShelf(this.props.color)} 
            style={{height: '100%', width: '100%'}}>
        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  branch: {
    position: 'absolute', 
    top: '10%',
    height: '96%', 
    width: '66%', 
    alignSelf: 'center', 
    zIndex: 100,
  },
  defaultShelf: {
    height: '10.5%', 
    width: '18%', 
    position: 'absolute',
    zIndex: 200,
  },
  flippedShelf: {
    height: '100%', 
    width: '100%', 
    transform:[{scaleX: -1}],
    zIndex: 200,
  },
});

export default BranchShelf;
