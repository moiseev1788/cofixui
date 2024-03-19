import MapCard from './MapCard.vue';

export default {
    title: 'MapGrid/MapCard',
    component: MapCard,
    argTypes: {
        name: {
            control: 'text'
        },
        number: {
            control: 'text'
        },
        img: {
            control: 'text'
        }
    },
};

const Template = (args) => ({
    components: { MapCard },
    setup() {
      return { args };
    },
    template: '<MapCard img="AM.png" title="Армения" number="2" />',
});

export const mapCard = Template.bind({});
mapCard.args = {
};