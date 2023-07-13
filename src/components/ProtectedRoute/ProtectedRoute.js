import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ element: Component, ...props }) => {
    return (
        props.renderIf ? <Component {...props} /> : <Navigate to={props.pathToNavigate} replace />
    )
}

export default ProtectedRouteElement;
