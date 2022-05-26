export default {
    title: 'Advanced Components/Company Card',
}

const Template = (args) => `
<geov-company-card
    name="${args.name}"
    image-url="${args.imageUrl}"
    description="${args.description}"
    website-url="${args.websiteUrl}"
></geov-company-card>
`

export const CompanyCard = Template.bind({});
CompanyCard.args = {
    name: 'LARHRA',
    imageUrl: 'https://www.geovistory.org/larhra-logo.jpg',
    description: 'A French research lab focusing on digital history methods and techniques.',
    websiteUrl: 'http://larhra.ish-lyon.cnrs.fr/axe-de-recherche-en-histoire-numerique'
}