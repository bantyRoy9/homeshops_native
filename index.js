/**
 * @BANTI
 */

import {AppRegistry,useColorScheme} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/Redux/Store';
import { PaperProvider } from 'react-native-paper';
import { darkTheme,defaultTheme } from './src/DefaultLayout/ThemeColorProps';
import ErrorBoundary from './src/Components/ErrorBoundry';
const ReduxProvider = () => {
    const themeModeDark = useColorScheme() === 'dark'
    return(
        <Provider store={store}>
            <PaperProvider theme={themeModeDark ? darkTheme : defaultTheme}>
                <ErrorBoundary>
                <App />
                </ErrorBoundary>
            </PaperProvider>
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => ReduxProvider);
