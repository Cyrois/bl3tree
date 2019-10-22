import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';

import { GREEN, RED, BLUE } from '../data/constants';

class Branch extends React.Component {
  constructor(props) {
    super(props);
  }
  
  _getBranch(color) {
    switch (color) {
      case GREEN:
        return require("../assets/images/backgrounds/branch-bg-green.png")
      case RED:
        return require("../assets/images/backgrounds/branch-bg-orange.png")
      case BLUE:
        return require("../assets/images/backgrounds/branch-bg-blue.png")
    }
  }

  render() {
    return (
      <View style={styles.branch}>
        <ImageBackground resizeMode='stretch' source={this._getBranch(this.props.color)} 
            style={{width: '100%', height: '100%'}}>
        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  branch: {
    position: 'absolute', 
    top: '11%',
    height: '96%', 
    width: '66%', 
    alignSelf: 'center', 
    zIndex: 100,
  },
});

export default Branch;
