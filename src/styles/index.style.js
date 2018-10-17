import { StyleSheet } from 'react-native';

export const colors = {
    black: '#1a1917',
    red: '#c51c22',
    gray: '#808080',
    littleGray: '#b3b3b3',
    lightGray: '#f2f2f2',
    background1: '#B721FF',
    background2: '#21D4FD',
    white: '#ffffff',
    gradientColorFirst: '#ffffff',
    gradientColorSecond: '#e6e6e6'
};

export default StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: colors.red
    },
    oneFlexRow: {
      flex: 1,
      flexDirection: 'row'
    },
    quarterFlex: {
      flex: 0.2
    },
    halfFlex: {
      flex: 0.6
    },
    containFlex: {
      resizeMode: 'contain',
      flex: 1,
      marginTop: 15,
      marginRight: 5,
      marginLeft: 5,
    },
    teamName: {
      fontSize: 16,
      textAlign: 'center',
      paddingBottom: 15,
    },
    card: {
      height: 100,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#fff',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 4,
      elevation: 1,
      marginLeft: 8,
      paddingLeft: 2,
      paddingRight: 2,
      marginRight: 8,
      marginTop: 10,
      backgroundColor: '#ffffff'
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    SliderView: {
        flex: 1
    },
    HeaderView: {
        backgroundColor: colors.red
    },
    WebViewPart: {
        flex: 3.1,
        backgroundColor: colors.white
    },
    SliderPart: {
        flex: 2.83,
        overflow: 'hidden',
        backgroundColor: colors.white
    },
    TabStyle: {
        backgroundColor: colors.red
    },
    GrayColor: {
        backgroundColor: colors.gradientColorSecond
    },
    ScrollNotif: {
        backgroundColor: colors.gradientColorSecond,
    },
    exampleContainer: {
        paddingVertical: 5,
        backgroundColor: colors.gradientColorSecond
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleDark: {
        color: colors.red
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        overflow: 'hidden' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    },
    activeButton: {
        backgroundColor: '#c51c22',
        marginLeft: 5,
        marginTop: 5,
        marginRight: 5,
        flex: 3
    },
    inActiveButton: {
        backgroundColor: '#ffffff',
        marginLeft: 5,
        marginTop: 5,
        marginRight: 5,
        flex: 3
    },
    inActiveText: {
        color: colors.red,
    }
});
