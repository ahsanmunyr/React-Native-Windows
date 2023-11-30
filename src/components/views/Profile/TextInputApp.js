import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { memo, useCallback, useMemo, useState, useRef } from "react";
import { commonStyles } from "../../../constant/theme";
import { genericRatio } from "../../../helper/helper";
import { Feather } from "../../../constant/icon";

const TextInputApp = ({
  IconView,
  placeholderText,
  getValueCB,
  value,
  isPasswordFields,

  returnKeyType = "default",
}) => {
  const [textVisibilty, setTextVisibility] = useState(true);
  const toggleDisplayText = useMemo(() => {
    return textVisibilty;
  }, [textVisibilty]);
  const textVisibiltyToggle = useCallback((val) => setTextVisibility(val), []);
  const ShowTogglePasswordSwicthView = useCallback(() => {
    if (!isPasswordFields) return null;
    return (
      <TouchableOpacity
        style={[commonStyles.center, styles.iconContainer]}
        activeOpacity={0.9}
        onPress={() => textVisibiltyToggle(!textVisibilty)}
      >
        <Feather
          name={!toggleDisplayText ? "eye" : "eye-off"}
          color={"#9CA3AF"}
          size={genericRatio(12)}
        />
      </TouchableOpacity>
    );
  }, [isPasswordFields, toggleDisplayText]);

  return (
    <View style={[commonStyles.rowDirection, styles.container]}>
      {IconView && (
        <View style={[commonStyles.center, styles.iconContainer]}>
          {IconView}
        </View>
      )}

      <View style={[commonStyles.fillFullScreen]}>
        <TextInput
          returnKeyType={returnKeyType}
          style={[styles.textInputContainr]}
          placeholder={placeholderText}
          onChangeText={getValueCB}
          defaultValue={value}
          secureTextEntry={isPasswordFields && toggleDisplayText}
          blurOnSubmit={false}
        />
      </View>
      <ShowTogglePasswordSwicthView />
    </View>
  );
};
TextInputApp.defaultProps = {
  IconView: <View />,
  showpasswordToggles: false,
  isPasswordFields: false,
  placeholderText: "",
  getValueCB: () => {},
  value: "",
};
export default memo(TextInputApp);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
  },
  iconContainer: {
    // padding: 10,
    paddingHorizontal: 10,
  },
  textInputContainr: {
    height: genericRatio(40),
    padding: 0,
    paddingLeft: 10,
    borderRadius: 8,
    // backgroundColor: "blue",
  },
});
