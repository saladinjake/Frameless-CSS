// Transforms a component to a higher level functional component with mixins
import { useLocation, useParams, useNavigate } from "react-router-dom";
 import {  useEffect,  useRef } from "react";
export const withRouter = (SmartComponent: any) => {
  return (props: any) => {
    // Form pages can inject more encapsulated functionality here
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams()
    const previousLocationRef = useRef<any>(null)
    useEffect(() => {
      previousLocationRef.current = location
    }, [location])
    return (
      <SmartComponent
        {...props}
        previous
        location={location} // current location
        navigate={navigate}
        params={params}
        nextLocation={location}
        previousLocation={previousLocationRef}
      />
    )
  }
}