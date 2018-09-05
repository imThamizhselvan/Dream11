import { StyleSheet } from 'react-native';

export const colors = {
    black: '#1a1917',
    red: '#c51c22',
    gray: '#888888',
    gradientColorFirst: '#ffffff',
    gradientColorSecond: '#f1eeee'
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
      flex: 0.25
    },
    halfFlex: {
      flex: 0.5
    },
    containFlex: {
      resizeMode: 'contain',
      flex: 1
    },
    card: {
      height: 100,
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
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
        flex: 4
    },
    exampleContainer: {
        paddingVertical: 10
    },
    exampleContainerDark: {
        backgroundColor: colors.red
    },
    exampleContainerLight: {
        backgroundColor: 'white'
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
    }
});
