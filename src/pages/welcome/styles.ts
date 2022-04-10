import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${theme.colors.primary};
  padding: 0 0px;
`;

export const Logo = styled.Image.attrs({resizeMode: 'cover'})`
  width: 250px;
  height: 250px;
  justify-content: center;
  align-items: center;
`;

export const ButtonToHome = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${theme.colors.background};
  border-radius: 10px;
  padding: 5px 60px;
`;

export const TitleButton = styled.Text`
  font-size: 18px;
  color: ${theme.colors.text.dark};
  font-family: 'Poppins-Bold';
`;
