import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';

import { connect } from 'react-redux';
import { PASSIVE, AUGMENT, ACTION, PET, FLAK, MOZE, ZANE, AMARA, TITLE_FONT, ELEMENT } from '../data/constants';

class SkillButton extends React.Component {
    constructor(props) {
        super(props);
    }

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
          case ELEMENT:
          return require("../assets/images/backgrounds/skill-bg-pet-default.png")
        }
    }

  render() {
    return (
        <TouchableOpacity onPress={this.props.onSkillPress}>
            <ImageBackground resizeMode='contain' source={this._getSkillBackgroundImage(this.props.skill.type)} 
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
      width: "100%",
      height: "100%",
    },
    skillImage: {
      width: "80%",
      height: "70%",
      marginTop: 12,
      marginLeft: 5.5,
      resizeMode: 'contain',
    },
    pointslotBg: {
      width: 38,
      height: 26,
      position: 'absolute',
      right: -4,
      bottom: 0,
      resizeMode: 'contain',
    },
    pointslotText: {
      color: '#fff',
      fontSize: 22,
      paddingLeft: 9,
      paddingTop: 2,
      fontFamily: TITLE_FONT,
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
