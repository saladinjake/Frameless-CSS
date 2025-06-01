// React Clean Architecture


import { forwardRef, useEffect, useImperativeHandle, useState,  } from "react"
import RemixedComponent from "../components/shared/MixinComponents";

export interface InjectedProps {
    data?: any[];
    children?: any;
    handleChange: (v: any) => void;
    options: Record<string, any>;
}
export function withReadyComponentObserver<P>(WrappedComponent: any) {
    return forwardRef<any, any>(({ children, handleChange, options, ...props }, ref: any) => {
        const defaultOptions = options ? { ...options } : {}
        const [domReady, setDomReady] = useState(false)


        //elevates child component awareness and manipulate its hidden state
        useImperativeHandle(ref, () => ({
            domReady,
            setDomReady,
            //define useful fuction used in the elevated component
            getChildren: () => children,
        }));



         useEffect(()=>{
            setTimeout(()=>setDomReady(true),4000)
         },[])

        return (
            <>
                <WrappedComponent
                    {...(props as P)}
                    options={{ ...defaultOptions }}
                    domReady={domReady}
                    setDomReady={setDomReady}
                >
                    <RemixedComponent when={(rehyDrationPass: any, errorSafe: any) => domReady
                        && rehyDrationPass && errorSafe
                    }>

                        {({ flagComponent, isLoading, childComponent, ...rest }: { flagComponent: any, isLoading: boolean, childComponent: any }) => (
                            <>
                            {props.childComponent}
                            </>

                        )}
                    </RemixedComponent>
                </WrappedComponent>
            </>
        );
    });



};



