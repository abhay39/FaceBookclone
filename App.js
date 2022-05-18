import { StyleSheet, Text, View,StatusBar,ScrollView } from 'react-native'
import React from 'react'
import AppBar from './components/AppBar'
import styled from 'styled-components/native'

import ToolBar from './components/ToolBar'
import Users from './components/Users'
import Story from './components/Story'
import Feed from './components/Feed'




const Container = styled.SafeAreaView`
  flex: 1;
`

const App = () => {
  return (
    <>
    <StatusBar  backgroundColor="#FFFFFF"
    barStyle="dark-content" />
    
      <Container>
        <ScrollView>
          <AppBar />
          <ToolBar />
          <Users />
          <Story />
          <Feed />
        </ScrollView>
      </Container>
    </>
  )
}

export default App

const styles = StyleSheet.create({})