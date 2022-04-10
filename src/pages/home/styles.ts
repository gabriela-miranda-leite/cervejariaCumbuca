import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
`;

export const TitleWrapper = styled.View`
  background-color: ${theme.colors.primary};
  padding: 60px 20px 40px;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 22px;
  color: ${theme.colors.text.light};
`;

export const FormWrapper = styled.View`
  padding: 10px 0;
  margin: 0 20px;

  border-radius: 8px;
  background-color: ${theme.colors.backgroundLight};
`;

export const ButtonWrapper = styled.View`
  align-items: flex-end;

  margin-right: 20px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  height: 35px;
  width: 30%;
  margin: 10px 0;

  border-radius: 8px;
  background-color: ${theme.colors.primary};

  align-items: center;
  justify-content: center;
`;

export const TitleButton = styled.Text`
  color: ${theme.colors.text.light};
  font-size: 12px;
  font-family: 'Poppins-Bold';
`;

export const NameList = styled.Text`
  margin-bottom: 10px;

  color: ${theme.colors.text.dark};
  font-size: 20px;
  font-family: 'Poppins-Bold';
`;

export const ProductFlatlistContainer = styled.View`
  margin: 0 20px;
`;

export const Separator = styled.View`
  margin-bottom: 5px;
`;

export const EmptyList = styled.View``;

export const EmptyText = styled.Text`
  font-size: 16px;
  color: ${theme.colors.primary}
  font-family: 'Poppins-Bold
`;
