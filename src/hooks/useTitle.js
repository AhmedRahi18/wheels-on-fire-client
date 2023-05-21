import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title}-Wheels On Fire`;
    },[title])
}

export default useTitle;