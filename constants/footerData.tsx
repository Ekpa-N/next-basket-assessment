const footerData:{
    title: string;
    list:{
        title:string,
        route: string
    }[];
}[]= [
    {
        title:"Company Info",
        list: [
            {
                title: "About Us",
                route:""
            },
            {
                title: "Carrier",
                route:""
            },
            {
                title: "We are hiring",
                route:""
            },
            {
                title: "Blog",
                route:""
            },
        ]
    },
    {
        title:"Legal",
        list: [
            {
                title: "About Us",
                route:""
            },
            {
                title: "Carrier",
                route:""
            },
            {
                title: "We are hiring",
                route:""
            },
            {
                title: "Blog",
                route:""
            },
        ]
    },
    {
        title:"Features",
        list: [
            {
                title: "Business Marketing",
                route:""
            },
            {
                title: "User Analytics",
                route:""
            },
            {
                title: "Live Chat",
                route:""
            },
            {
                title: "Unlimited Support",
                route:""
            },
        ]
    },
    {
        title:"Resources",
        list: [
            {
                title: "IOS & Android",
                route:""
            },
            {
                title: "Watch a demo",
                route:""
            },
            {
                title: "Customers",
                route:""
            },
            {
                title: "Api",
                route:""
            },
        ]
    },
]

const socialIcons:string[] = [
    "../images/footer-items/facebook.svg",
    "../images/footer-items/instagram.svg",
    "../images/footer-items/twitter.svg",
]

export {footerData, socialIcons}