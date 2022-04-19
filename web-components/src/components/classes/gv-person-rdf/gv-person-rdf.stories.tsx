export default {
    title: `Classes components/Person Rdf`
};

const Template = (args) => `
    <gv-person-rdf 
        pk-entity="${args.pkEntity}"
    ></gv-person-rdf>
`

export const PersonRdf = Template.bind({})
PersonRdf.args = {
    pkEntity: 'i836415'
}