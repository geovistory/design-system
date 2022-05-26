export default {
    title: 'Advanced Components/Card',
}

const Template = () => `
<geov-card height="400px" width="400px">
    <geov-heading variant="h1">This is a card</geov-heading>
    <geov-text variant="subtitle">with a description</geov-heading>
</geov-card>


<geov-card>
    <geov-heading variant="h3">This is a card</geov-heading>
    <geov-text variant="description">with a description</geov-heading>
</geov-card>

`

export const Card = Template.bind({});