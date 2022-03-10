import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialState, url) => {

    const [data, setData] = useState(initialState)

    useEffect(() => {
        getData();
    }, [url]);

    const getData = () => {
        axios.get(url)
            .then((response) => {
                setData(response.data)
                
            })
            .catch((error) => {
                alert('Ocorreu um erro, tente novamente!')
            })
    }
    return [data, setData,getData]
}
export default useRequestData


