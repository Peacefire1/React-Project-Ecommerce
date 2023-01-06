import { Children } from "react";

const menus = [
    {
        title: "Home",
        position: 1 ,
        children: [
            {
                title:"Home children 1",
                position:1
            },
            {
                title:"Home children 2",
                position:2
            },
            {
                title:"Home children 3",
                position:3
            }
        ]
    },

    {
        title: "Catalog",
        position: 2,
        children: [
            {
                title:"Catalog children 1",
                position:1
            },
            {
                title:"Catalog children 2",
                position:2
            },
            {
                title:"Catalog children 3",
                position:3
            }
        ]
    },
    {
        title: "Blog",
        position: 3,
        children: [
            
        ]
    },

    {
        title: "Pages",
        position: 4,
        children: [
            {
                title:"Pages children 1",
                position:1
            },
            {
                title:"Pages children 2",
                position:2
            },
            {
                title:"Pages children 3",
                position:3
            }
        ]
    },

    {
        title: "About Us",
        position: 5,
        children:[]
        
    },
]

export default menus ;