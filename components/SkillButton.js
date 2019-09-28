import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';

import { connect } from 'react-redux';
import { PASSIVE, AUGMENT, ACTION, PET, FLAK, MOZE, ZANE, AMARA } from '../data/constants';

class SkillButton extends React.Component {
    constructor(props) {
        super(props);
    }

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

  render() {
    return (
        <TouchableOpacity onPress={this.props.onSkillPress}>
            <ImageBackground source={this._getSkillBackgroundImage(this.props.skill.type)} 
                style={styles.skillImageBg}>
            <Image
                source={this.props.skill.image}
                style={styles.skillImage} /> 
            </ImageBackground>
            { this.props.skill.type === PASSIVE &&
            <ImageBackground source={require("../assets/images/backgrounds/pointslot-default.png")} 
                style={styles.pointslotBg}>
                <Text style={styles.pointslotText}>{this.props.ranked[this.props.skill.title] ? this.props.ranked[this.props.skill.title] : 0}/{this.props.skill.maxRanks}</Text>
            </ImageBackground>
            }
        </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
    skillImageBg: {
      margin: 2,
      width: "90%",
      height: "90%",
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
});

mapStateToProps = state => {
return { ... state }
}

mapDispatchToProps = dispatch => {
return {
}
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillButton);
