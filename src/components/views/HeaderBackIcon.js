import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { memo } from "react";
import DrawableBtn from "./DrawableBtn";
import { COLORS, FONTS, commonStyles } from "../../constant/theme";
import { genericRatio } from "../../helper/helper";
import HorizontalSpace from "./HorizontalSpace";
import { profileIcons } from "../../constant/icon";
import { AntDesign, Ionicons, settingIcon } from '../../constant/icon'
const HeaderBackIcon = ({ barTitle = "", backBtn, cb = ()=>{} }) => {
  return (
    <View style={backBtn ? styles.header : [styles.header,{justifyContent: 'center'}]}>
      {backBtn && (
        <TouchableOpacity onPress={cb}>
           <AntDesign name={'arrowleft'} color={'#000000'} size={genericRatio(30)} />
        {/* <Image source={profileIcons.ArrowBack} style={[styles.imageIconSize]} /> */}
        </TouchableOpacity>
      )}
      <Text style={[FONTS.h2, styles.profileHeading, commonStyles.textFamily700]}>{barTitle}</Text>
    </View>
  );
};

export default memo(HeaderBackIcon);

const styles = StyleSheet.create({
  header: {
    height: 80,
    justifyContent: 'space-around',
    flexDirection:'column',
    alignItems: "flex-start",
    paddingHorizontal: "5%",
    // backgroundColor:'red'
  },
  profileHeading: {
    color: "black",
    fontWeight: "800",
  },
  imageIconSize: {
    height: genericRatio(25),
    width: genericRatio(25),
  },
});
