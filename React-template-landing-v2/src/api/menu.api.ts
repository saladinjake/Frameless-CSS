export interface IMenuItem {
    name: string;
    url: string;
    onClick?: (e:any) => void
}
export const MenuItems  = [

{
    name:"Features", 
    url:"#"
},
    {
    name:"Products", 
    url:"#"
},


{
    name:"Pricing", 
    url:"#"
},

{
    name:"About", 
    url:"#"
}
]
export const getNavMenu = async () => await  Promise.resolve(MenuItems)
