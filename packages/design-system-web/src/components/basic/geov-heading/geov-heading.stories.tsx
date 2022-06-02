export default {
    title: '03 - BASIC COMPONENTS/Headings',
}

const Template = () => `
<geov-heading h-1>Heading 1</geov-heading>
<geov-heading h-2>Heading 2</geov-heading>
<geov-heading h-3>Heading 3</geov-heading>

<div style="background:black; padding:1rem">
    <geov-heading h-1 light>Heading 1</geov-heading>
    <geov-heading h-2 light>Heading 2</geov-heading>
    <geov-heading h-3 light>Heading 3</geov-heading>
</div>
`

export const Headings = Template.bind({});