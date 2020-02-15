import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(29,29,29,0)',
    },
    title:{
        fontSize: 24,
        color: 'rgb(0,0,0)',
        lineHeight: 24,
        textAlign: 'center',

    },
    cardContainer:{
        flex: 10,
        alignSelf: 'center',
        flexDirection: 'column',
        padding: 10,
        height: 270,
        width: 300,
        borderRadius: 10,
        borderColor: '#000',

    },
    member:{
        padding:8,
        fontSize: 14,
        color: 'rgb(0,0,0)',
        lineHeight: 20,
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 200,
        height: 150,
        resizeMode: 'contain',
        marginTop: 10,
        marginLeft: -10,
    },
    welcomeText:{
        fontSize: 24,
        color: 'rgb(0,0,0)',
        lineHeight: 24,
        textAlign: 'center',
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    getStartedText: {
        padding:10,
        fontSize: 14,
        color: 'rgb(0,0,0)',
        lineHeight: 20,
        textAlign: 'center',
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 10,
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal:10,
        width: '100%',
    },
    button:{
        backgroundColor: 'rgba(88,88,88,0.71)',


    },
   
    
});
