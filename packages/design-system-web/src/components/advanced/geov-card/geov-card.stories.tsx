export default {
    title: '04 - Advanced Components/Card',
}

const Template = () => `
<geov-card height="400px" width="400px">
    <geov-heading h-1>This is a card</geov-heading>
    <geov-text subtitle>with a description</geov-heading>
</geov-card>


<geov-card>
    <geov-heading h-3>This is a card</geov-heading>
    <geov-text description>with a description</geov-heading>
</geov-card>

`

export const Card = Template.bind({});