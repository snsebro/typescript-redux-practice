import { useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const AsteroidsList: React.FC = () => {
    const [searchInput, setSearchInput] = useState('')
    const { searchAsteroids } = useActions()
    const {data, error, loading} = useTypedSelector((state) => state.asteroids)

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        searchAsteroids(searchInput)
    }

    return <div>
        <form onSubmit={onSubmit}>
            <input value={searchInput} onChange={e => setSearchInput(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading ? <p>{data}</p> : null}
    </div>
};

export default AsteroidsList;