import { createStackNavigator, HeaderStyleInterpolator } from 'react-navigation-stack';

import DamageScreen from '../screens/DamageScreen';
import ReviewDetails from '../screens/ReviewDetails';

const screens = {
    Damage: {
        screen: DamageScreen,
        navigationOptions: {
            // title:'Damages'
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'ReviewDetails'
        },

    }

}
const Damageroute = createStackNavigator(screens);
export default Damageroute;