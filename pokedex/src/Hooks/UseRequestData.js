import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialState, url) => {

    const [data, setData] = useState(initialState)

    useEffect(() => {
        getData();
    }, [url]);

    const getData = () => {
        axios.get(url, {
                headers: {
                    Authorization: window.localStorage.getItem('token')
                }
            })
            .then((response) => {
                setData(response.data)
                getData()
            })
            .catch((error) => {
                alert('Ocorreu um erro, tente novamente!')
            })
    }
    return [data, getData]
}
export default useRequestData


