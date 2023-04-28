import { useState } from "react";


const useError = () => {
    const [error, setError] = useState(false);

    return { error, setError }

}

export default useError