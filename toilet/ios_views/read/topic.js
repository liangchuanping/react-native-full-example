import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

//阅读模块
class topic extends Component {

    render() {
        return (
            <View>
                <Text style={styles.text}>专题</Text>
            </View>
        );
    }

}

//样式表
const styles = StyleSheet.create({
    text: {
        fontSize: 60,
        color: 'red',
        textAlign: 'center'
    }
});

module.exports = topic;
