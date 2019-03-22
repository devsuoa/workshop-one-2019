import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export class TestComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            age: this.props.age
        }
    }
    render() {
        return(
            <View>
                <Text>Hello my name is {this.state.name}!</Text>
                <Text>My age is {this.state.age}!</Text>
                <TouchableOpacity onPress={this.ageUp}>
                    <Text>Click me to age up!</Text>    
                </TouchableOpacity>
            </View>
        )
    }

    ageUp = () => {
        let currentAge = this.state.age;
        currentAge++;

        this.setState({
            age: currentAge
        })
    }
}