import MapGrid from './MapGrid.vue';

export default {
    title: 'MapGrid/MapGrid',
    component: MapGrid,
};

const Template = (args) => ({
    components: { MapGrid },
    setup() {
      return { args };
    },
    template: '<MapGrid v-bind="args" />',
});

export const mapGrid = Template.bind({});
mapGrid.args = {};