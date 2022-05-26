export default {
    title: 'Basic Components/Buttons',
}

const Template = () => `
<geov-column>
    <geov-row justify="space-around" style="width: 800px">
        <geov-button variant="solid" style="margin-bottom:10px">Solid button</geov-button>
        <geov-button variant="solid" rounded style="margin-bottom:10px">Solid button rounded</geov-button>
    </geov-row>
    
    <geov-row justify="space-around" style="width: 800px">
        <geov-button variant="outline" style="margin-bottom:10px">Outline button</geov-button>
        <geov-button variant="outline" rounded style="margin-bottom:10px">Outline button rounded</geov-button>
    </geov-row>
    
    <geov-row justify="space-around" style="width: 800px">
        <geov-button variant="ghost" style="margin-bottom:10px">Ghost button</geov-button>
        <geov-button variant="ghost" rounded style="margin-bottom:10px">Ghost button rounded</geov-button>
    </geov-row>
    
    <geov-row justify="space-around" style="width: 800px">
        <geov-button variant="solid" icon="github" style="margin-bottom:10px;">Button with icon (start)</geov-button>
        <geov-button variant="solid" rounded icon="github" style="margin-bottom:10px;">Button with icon (start) rounded</geov-button>
    </geov-row>
    
    <geov-row justify="space-around" style="width: 800px">
        <geov-button variant="solid" icon="arrow-right" icon-size="small" icon-pos="end" style="margin-bottom:10px;">Button with icon (end)</geov-button>
        <geov-button variant="solid" rounded icon="arrow-right" icon-size="small" icon-pos="end" style="margin-bottom:10px;">Button with icon (end) rounded</geov-button>
    </geov-row>
    
    <geov-row justify="space-around" style="width: 800px">
        <geov-button variant="solid" href="https://www.geovistory.org" style="margin-bottom:10px;">Link button</geov-button>
        <geov-button variant="solid" rounded href="https://www.geovistory.org" style="margin-bottom:10px;">Link button rounded</geov-button>
    </geov-row>
    
</geov-column>
`

export const Buttons = Template.bind({});