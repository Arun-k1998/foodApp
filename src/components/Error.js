import {useRouteError} from 'react-router-dom'

const Error = ()=>{

    const error = useRouteError()
    return (
        <>
        <di>Oops</di>
        <di>{error.status+" : "+ error.statusText}</di>
        </>
    )
}
export default Error
