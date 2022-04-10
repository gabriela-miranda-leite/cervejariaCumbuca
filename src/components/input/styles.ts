import styled from 'styled-components/native';
import {TextInput} from 'react-native';

import {theme} from '../../styles/theme';

export const Container = styled.View`
  width: 100%;
  padding: 5px 10px;
`;

export const Label = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 12px;
  color: ${theme.colors.primary};
`;

export const Input = styled(TextInput)`
  font-family: 'Poppins-Italic';
  font-size: 12px;
  height: 30px;
  padding: 0px 5px;

  border-radius: 5px;
  background-color: ${theme.colors.text.light};
`;

export const ErrorText = styled.Text`
  margin: 5px 0;
  font-family: 'Poppins-Bold';
  font-size: 12px;
  color: ${theme.colors.error};
`;
