export default {
    title: `Classes components/Test`
};

const Template = (args) => `
    <gv-test 
        name="${args.name}" 
        lastname="${args.lastname}" 
        birthdate="${args.birthdate}"
    ></gv-test>
`

export const Test = Template.bind({})
Test.args = {
    name: 'John',
    lastname: 'Doe',
    birthdate: '2005-01-25'
}