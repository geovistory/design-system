export default {
    title: `Base components/Number`
};

const Template = (args) => `
    <gv-number 
        attribute-number="${args.attributeNumber}"
    >${args.slot}</gv-number>
`

export const Number = Template.bind({})
Number.args = {
    slot: 999,
    attributeNumber: 888,
}   