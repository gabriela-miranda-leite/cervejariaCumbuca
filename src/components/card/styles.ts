import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

import {theme} from '../../styles/theme';

interface IconProps {
  trash?: boolean;
}

interface SideProps {
  rightSide?: boolean;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: row;

  padding: 10px;

  height: 90px;
  background-color: ${theme.colors.card};
  border-radius: 8px;

  margin-bottom: 15px;
`;

export const NameProduct = styled.Text`
  font-family: 'Poppins-Bold';
  color: ${theme.colors.primary};
  font-size: 16px;
`;

export const ValueUnityProduct = styled.Text`
  font-family: 'Poppins-Bold';
  color: ${theme.colors.text.dark};
  font-size: 12px;
`;

export const ValueTotalProducts = styled.Text`
  font-family: 'Poppins-Bold';
  color: ${theme.colors.text.dark};
  font-size: 14px;
`;

export const HalfWrapper = styled.View<SideProps>`
  width: ${({rightSide}) => (rightSide ? '30%' : '70%')};
  flex-direction: column;
  align-items: ${({rightSide}) => (rightSide ? 'flex-end' : 'flex-start')};
  justify-content: space-between;
`;

export const MultiButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const QuantityContainer = styled.View`
  height: 20px;
  width: 20px;

  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.background};
`;

export const QuantityProduct = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 12px;
  color: ${theme.colors.text.dark};
`;

export const Button = styled.TouchableOpacity<IconProps>`
  height: 25px;
  width: 25px;
  align-items: center;
  justify-content: center;
  z-index: 2;

  border-radius: 5px;
  background-color: ${({trash}) =>
    trash ? theme.colors.error : theme.colors.primary};
`;
export const IconMulti = styled(Icon)``;
