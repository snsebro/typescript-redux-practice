import { Provider } from 'react-redux'
import { store } from '../state'
import AsteroidsList from './AsteroidsList'

const App = () => {
    return <Provider store={store}>
        <div>
            <h1>Search Asteroids</h1>
            <AsteroidsList />
        </div>
    </Provider>
}

export default App