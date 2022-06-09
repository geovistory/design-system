export default {
    title: 'Headings',
}

const Template = (args) => `
    <h1>HEADING ${args.text}</h1>
`

export const Headings = Template.bind({});
Headings.args = {
    text: "hello"
}