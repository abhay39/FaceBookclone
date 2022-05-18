import { StatusBar } from 'expo-status-bar';


import styled from 'styled-components/native';
import {Feather, MaterialCommunityIcons} from "@expo/vector-icons";

const Container = styled.View`
  width: 100%;
  height: 100px;
  padding: 0 11px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

const Text = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #3a86e9;
    letter-spacing:  -0.3px;
`
const Row = styled.View`
    flex-direction: row;
`

const Button = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #EEEEEE;
    align-items: center;
    justify-content: center;
    margin-left: 16px;
`

const AppBar = () => {
  return (
    <Container>
      <Text>facebook</Text>
      <Row>
        <Button>
            <Feather name="search" size={29} color='black' />
        </Button>
        <Button>
            <MaterialCommunityIcons name="facebook-messenger" size={29} color='black' />
        </Button>
      </Row>
      </Container>
  );
}

export default AppBar;
