export default {
    title: '04 - Advanced Components/Navbar',
}

const Template = (args) => `
<geov-navbar 
    logo="${args.logo}"  
    height="${args.height}"
    
    links='${JSON.stringify(args.links)}'

    login="${args.login ?? ''}"
    login_href="${args.login_href ?? ''}"
></geov-navbar>
`

export const Navbar = Template.bind({});
Navbar.args = {
    logo: "geovistory",
    height: '80px',

    links: [{
        text: 'About Geovistory',
        href: '/about-geovistory'
    }, {
        text: 'About Us',
        href: '/about-us'
    }],

    login: "Log in",
    login_href: "/login"
}