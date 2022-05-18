import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
    width: 40px;
    height: 40px;
    position: relative;
`
const User = styled.Image`
    height: 40px;
    width: 40px;
    border-radius: 20px;
`

const Avatar = ({source}) => {
  return (
    <Container>
        <User source={source}/>
    </Container>
  )
}

export default Avatar

const styles = StyleSheet.create({})