import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const AddTokenButton = ({ onPress }) => (
    <TouchableOpacity
        style={{marginRight: 10}}
        onPress={onPress}
    >
        <Icon name={'ios-add-circle'} size={32} />
    </TouchableOpacity>
);

export default class WalletScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "Wallet",
        headerRight: <AddTokenButton onPress={navigation.getParam('onAddToken')}/>,
        headerStyle: {
            backgroundColor: 'red'
        }
    });

    componentWillMount() {
        this.props.navigation.setParams({ onAddToken: this._onAddToken });
    }

    _onAddToken = () => {
        this.props.navigation.navigate('Add');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Wallet</Text>
                <Text>Token list</Text>
                <Button
                    title={'Token'}
                    onPress={() => this.props.navigation.navigate('Token')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});