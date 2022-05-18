import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import Avatar from './Avatar'
import {Ionicons} from '@expo/vector-icons';

const Container = styled.View`
  width: 100%;
  height: 92px;
  padding: 0 11px;
`
const Row = styled.View`
    flex-direction: row;
    width: 100%;
    background: #FFFFFF;
    padding: 0 0;
    align-items: center;
`
const Input = styled.TextInput`
    width: 100%;
    height: 50px;
    padding: 0 10px;
`
const Divider = styled.View`
    width: 100px;
    height: 0.5px;
    background: #F0F0F0;
`
const Menu = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 40px;
`
const MenuText = styled.Text`
    padding-left: 11px;
    font-weight: 500;
    font-size: 12px;

`

const Separator = styled.View`
    width: 1px;
    height: 26px;
    background: #F0F0F0;
`

const BottomDivider = styled.View`
	width: 100%;
	height: 9px;
	background: #f0f2f5;
`

const ToolBar = () => {
  return (
    <>
    
        <Container>
            <Row>
                <Avatar 
                    source={require('../assets/user2.jpg')}
                />
                <Input 
                    placeholder="What's on your mind?"
                />
            </Row>
            <Divider />
            <Row>
                <Menu>
                    <Ionicons name="ios-videocam" size={24} color="#F44337" />
                    <MenuText>
                        Live   
                    </MenuText>
                </Menu>
                <Separator />
                <Menu>
                    <Ionicons name="ios-images" size={24} color="#4CAF50" />
                    <MenuText>Photo</MenuText>
                </Menu>
                <Separator />
                <Menu>
                    <Ionicons name="videocam-outline" size={24} color="#E141FC" />
                    <MenuText>Video</MenuText>
                </Menu>
            </Row>
        </Container>
        <BottomDivider />
    </>
  )
}

export default ToolBar

const styles = StyleSheet.create({})