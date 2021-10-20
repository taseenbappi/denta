import { useEffect, useState } from "react";

const useServices = () => {

    const [services, setServices] = useState([]);
    // load services data from json
    useEffect(() => {
        fetch('./fakeData/services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return [services, setServices];


}
export default useServices;