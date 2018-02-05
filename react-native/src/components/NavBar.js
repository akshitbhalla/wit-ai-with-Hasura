import React from 'react';
import NavBar, { NavTitle, NavButton } from 'react-native-nav';
import { Icon } from 'native-base';

export default function NavBarCustom() {
  return (
    <NavBar>
        <NavButton onPress={() => alert('Logout by shaking your phone and pressing Refresh (temporary fix)')}>
            
            <Icon name='arrow-back'/>
            
        </NavButton>
        <NavTitle>T61-HPDF</NavTitle>
      <NavButton />
    </NavBar>
  );
}
