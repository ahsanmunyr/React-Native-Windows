import { StyleSheet, Text, View } from "react-native";
import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ModalContainer from "../ModalContainer";
import Locationised from "../Locationised";
import VerticalSpace from "../VerticalSpace";
import DropDownSelectionContainer from "../filterComponents/DropDownSelectionContainer";
import BottomButtonModel from "../BottomButtonModel";
import { COLORS, FONTS, commonStyles } from "../../../constant/theme";
import { useDispatch, useSelector } from "react-redux";
import HorizontalSpace from "../HorizontalSpace";
import { allClear, saveFilterObj } from "../../../redux/reducers/saveFilter";
import { genericRatio, hardScreenNavigation } from "../../../helper/helper";
import { Separator } from "../../index";
import { logout } from './../../../redux/reducers/user'

const LogoutModal = forwardRef(({navigation, header}, ref) => {
  const ListRef = useRef({});
  const dispatch = useDispatch()
  const filterCbVisibility = useCallback(() => {
    ListRef.current["modalRef"].show();
  }, [ListRef]);

  const filterCbVisibilityHide = useCallback(() => {
    ListRef.current["modalRef"].hide();
  }, [ListRef]);

  useImperativeHandle(
    ref,
    () => {
      return {
        open: filterCbVisibility,
      };
    },
    []
  );

  function logoutF(){
    dispatch(logout())
    hardScreenNavigation(navigation, "Login")
  }

  return (
    <ModalContainer ref={(ref) => (ListRef.current["modalRef"] = ref)} headerTitle={'Logout'} >
      <View style={styles.main}>
        <Text style={[FONTS.body3, { fontWeight: "600" }]}>
          Are you sure you want to log out?
        </Text>
        <View style={styles.btnGroup}>
          <BottomButtonModel
            title={"Cancel"}
            cb={filterCbVisibilityHide}
            textStyle={[
              FONTS.body4,
              { color: "black", fontFamily: "Inter-Medium", fontWeight: "800" },
            ]}
            container={[
              styles.LoginButtonContainer,
              { backgroundColor: COLORS.Line },
            ]}
          />
          <BottomButtonModel
            title={"Yes, Logout"}
            cb={logoutF}
            textStyle={[
              FONTS.body4,
              {
                color: COLORS.secondary,
                fontFamily: "Inter-Medium",
                fontWeight: "800",
              },
            ]}
            container={[
              styles.LoginButtonContainer,
              { backgroundColor: COLORS.primary },
            ]}
          />
        </View>
      </View>
      {/* <View style={{ width: 100, height: 100, backgroundColor:'red' }}></View> */}
    </ModalContainer>
  );
});

export default memo(LogoutModal);

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: genericRatio(150),
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    width: "90%",
    height: genericRatio(50),
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
  },
  btnGroup: {
    width: "94%",
    height: genericRatio(50),
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  LoginButtonContainer: {
    borderRadius: 5,
    width: "45%",
  },
  modalHeader: {
    textAlign: "center",
    fontWeight: "800",
    color: "black",
  },
  OTP: { width: "80%", flexDirection: "row", justifyContent: "space-between" },
  OTPCodeBox: {
    width: 50,
    height: 50,
    backgroundColor: "#F3F4F6",
    color: COLORS.black,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    borderColor: "#E5E7EB",
  },
});
