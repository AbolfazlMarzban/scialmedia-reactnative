import { createStackNavigator } from "react-navigation-stack"
import About from '../app/screens/about'

const screens = {
    About:{
        screen: About,
    },
}
const AboutStack = createStackNavigator(screens)


export default AboutStack