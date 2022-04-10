import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {theme} from '../../styles/theme';

export const Container = styled.View`
  height: 50px;

  flex-direction: row;
  align-items: center;

  margin: -30px 20px 20px;

  border-radius: 8px;
  background-color: ${theme.colors.text.light};
`;

export const SearchIcon = styled(Icon)`
  margin: 0 10px;
`;

export const SearchInput = styled(TextInput)`
  flex: 1;
  font-family: 'Poppins-Italic';
  font-size: 14px;
`;
