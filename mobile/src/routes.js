// Externas
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

// Internas
import Main from './pages/Main';
import Profile from './pages/Profile';

//

const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main,
            navigationOptions:{
                title:'WazeDev'
            }
        },
        Profile:{
            screen: Profile,
            navigationOptions:{
                title:'Perfil no Github'
            }
        }
    },{
        defaultNavigationOptions:{
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: '#7d40e7'
            }
        }
    })
);

export default Routes;