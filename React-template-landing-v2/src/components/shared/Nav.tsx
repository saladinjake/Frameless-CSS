import { withReadyComponentObserver } from "../../utils/withReadyComponent"
import { getNavMenu, IMenuItem } from "../../api/menu.api"
import { useEffect, useState } from "react"


export const WazoHeaderBranding = withReadyComponentObserver(({ domReady, }: any

) => {
    const [menu, setMenu] = useState<IMenuItem | any
    >([])

  
    useEffect(() => {
        async function loadMenu() {
            try {
                const menuItems = await getNavMenu()
                setMenu(menuItems)
                // setDomReady(true)
            } catch (err: any) { }
        }
        loadMenu()
    }, [])


    if(!domReady) return <>Loading...</>
 
    return (
        <header className="bg-white shadow">
            <div className="container flex items-center justify-between py-4">

                <a href="#" className="logo flex items-center p-2">
                    <img src="./img/svg/logo.svg" />
                </a>

                <nav className="nav hidden items-center md:flex space-x-8">
                    {menu.map((item: IMenuItem) => {

                        return (
                            <a href="#" className="text-gray-700 hover:text-primary transition">{item.name}</a>
                        )
                    })}
                </nav>
                <a href="#" className="btn btn-primary">Join Waitlist</a>

                <div className="md:hidden">
                    <input type="checkbox" id="menu-toggle" className="hidden" />
                    <label className="cursor-pointer text-2xl text-gray-700 hover:text-primary transition"
                        aria-label="Toggle menu">&#9776;</label>
                    <nav id="mobile-menu"
                        className="mobile-menu absolute top-full left-0 w-full bg-white shadow-md overflow-hidden max-h-0">

                        {menu.map((item: IMenuItem) => {

                            return (

                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">{item.name}</a>

                            )
                        })}
                    </nav>


                </div>
            </div>
        </header>


    )
})