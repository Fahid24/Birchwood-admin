import { useEffect, useState } from "react";

const useTools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/photos'

        fetch(url)
            .then(res => res.json())
            .then(data => {

                setTools(data)
            })
    }, [tools])
    return [tools]
}

export default useTools;