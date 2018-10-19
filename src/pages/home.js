import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { Form, Item, Label, Input } from 'native-base'
export default class Homepage extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                </Form>
                <TextInput placeholder="Try select/copy/paste" style={{ height: 70, width: 300, borderWidth: 2 }} />
                <Item>
                    <Input placeholder="Try select/copy/paste" style={{ width: 300, borderWidth: 2, zIndex: 10 }} />
                </Item>
            </View>
        )
    }
}