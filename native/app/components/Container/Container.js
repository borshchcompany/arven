import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

import styles from "./styles";

export default (Container = ({ children, style }) => (
  <KeyboardAwareScrollView style={[styles.container, style]} accessible={false}>
    {children}
  </KeyboardAwareScrollView>
));