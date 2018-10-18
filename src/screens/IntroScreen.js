import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

export default class IntroScreen extends Component {
    _onEnter = () => {
        this.props.navigation.navigate('Account');

    };

    render() {
        return (
            <View style={{flex: 1}}>
                <LinearGradient
                    colors={['#3E486C', '#28304C']}
                    style={{flex: 1}}
                >
                    <TouchableOpacity
                        style={styles.container}
                        onPress={this._onEnter}
                    >
                        <Text h1 style={styles.title}>HENA</Text>
                        <Text h6 style={styles.subtitle}>THE GENESIS OF MOBILE ECOSYSTEM</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#FFF'
    },
    subtitle: {
        color: '#FFF'
    }
});