// React Clean Architecture


import { forwardRef, useImperativeHandle, useState, ComponentType } from "react"
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



        return (
            <>
                <WrappedComponent
                    {...(props as P)}
                    options={{ ...defaultOptions }}
                    domReady={domReady}
                >
                    <RemixedComponent when={(rehyDrationPass: any, errorSafe: any) => domReady
                        && rehyDrationPass && errorSafe
                    }>

                        {({ flagComponent, isLoading, childComponent, ...rest }: { flagComponent: any, isLoading: boolean, childComponent: any }) => (
                            <>
                                {props.children({
                                    ...props,
                                    ...rest,
                                    flagComponent,
                                    isLoading: (props.isLoading),
                                    childComponent: props.childComponent,
                                    // more props mixins
                                })}
                            </>

                        )}
                    </RemixedComponent>
                </WrappedComponent>
            </>
        );
    });



};



