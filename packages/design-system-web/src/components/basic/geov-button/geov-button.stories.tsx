export default {
    title: '03 - BASIC COMPONENTS/Buttons',
}

const Template = () => `
<geov-column>
    <geov-row space-around style="width: 800px">
        <geov-button solid style="margin-bottom:10px">Solid button</geov-button>
        <geov-button solid rounded style="margin-bottom:10px">Solid button rounded</geov-button>
    </geov-row>
    
    <geov-row space-around style="width: 800px">
        <geov-button outline style="margin-bottom:10px">Outline button</geov-button>
        <geov-button outline rounded style="margin-bottom:10px">Outline button rounded</geov-button>
    </geov-row>
    
    <geov-row space-around style="width: 800px">
        <geov-button ghost style="margin-bottom:10px">Ghost button</geov-button>
        <geov-button ghost rounded style="margin-bottom:10px">Ghost button rounded</geov-button>
    </geov-row>
    
    <geov-row space-around style="width: 800px">
        <geov-button solid left-icon="github" style="margin-bottom:10px;">Button with icon (left)</geov-button>
        <geov-button solid rounded left-icon="github" style="margin-bottom:10px;">Button with icon (left) rounded</geov-button>
    </geov-row>
    
    <geov-row space-around style="width: 800px">
        <geov-button solid right-icon="arrow-right" style="margin-bottom:10px;">Button with icon (right)</geov-button>
        <geov-button solid rounded right-icon="arrow-right" style="margin-bottom:10px;">Button with icon (right) rounded</geov-button>
    </geov-row>
    
    <geov-row space-around style="width: 800px">
        <geov-button solid href="https://www.geovistory.org" style="margin-bottom:10px;">Link button</geov-button>
        <geov-button solid rounded href="https://www.geovistory.org" style="margin-bottom:10px;">Link button rounded</geov-button>
    </geov-row>
    
</geov-column>
`

export const Buttons = Template.bind({});