export class MenuModel{
    name:string = "";
    icon?:string;
    url?:string;
    isTitle: boolean = false;
    subMenus: MenuModel[] = [];
}

export const Menus: MenuModel[] = [
    {
        name: "Ana Sayfa",
        icon: "fas fa-solid fa-home",
        url: "/",
        isTitle: false,
        subMenus: []
    },
    {
        name: "Ana Grup",
        icon: "fa-solid fa-trowel-bricks",
        isTitle: false,
        subMenus:[
            {
                name: "Müşteriler",
                icon: "fa-solid  fa-users",
                url: "/customers",
                isTitle: false,
                subMenus:[]
            }
        ]
    }
    // {
    //     name: "Admin",
    //     url: "/",
    //     isTitle: true,
    //     subMenus: []
    // }
]