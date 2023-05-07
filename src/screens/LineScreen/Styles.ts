import styled from 'styled-components/native';

export const Container = styled.View`
    padding-vertical: 10px;
    padding-horizontal: 24px;
    flex: 1;
  `;

export  const ButtonContainer = styled.View`
    margin-top: 20px;
    padding-horizontal: 16px;
    padding-vertical: 8px;
    border-radius: 10px;
  `;

export const FlatListContainer = styled.View`
    width: 100%;
    border-radius: 10px;
    margin-top: 20px;
  `;

export const ListItemText = styled.Text`
    font-size: 16px;
    color: #333;
  `;

export const ListItem = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-horizontal: 20px;
    padding-vertical: 10px;
    width: 50%;
  `;

export const ListContainer = styled.View`
    width: 100%;
    height: 100%;
  `;

export const ListItemContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-vertical: 10px;
    border-bottom-width: 1px;
    border-bottom-color: #ccc;
  `;

export const Badge = styled.View`
    background-color: green;
    border-radius: 8px;
    padding-horizontal: 8px;
    padding-vertical: 4px;
  `;

  export const BadgeText = styled.Text`
    color: white;
    font-weight: bold;
  `;