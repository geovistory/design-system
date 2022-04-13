export default {
    title: `Base components/Button`
};

const Template = (args) => `<gv-button>${args.text}</gv-button>`

export const Button = Template.bind({})
Button.args = {
    text: 'A random Button'
}