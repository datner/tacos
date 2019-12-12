import useFetch from 'utils/useFetch';

const TacoFetcher = ({children}) => {
    const response = useFetch("http://taco-randomizer.herokuapp.com/random/")
    return children(response)
}

export default TacoFetcher
