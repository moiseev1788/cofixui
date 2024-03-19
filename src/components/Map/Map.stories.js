import Map from './Map.vue';

export default {
    title: 'Map',
    component: Map,
};

const Template = (args) => ({
    components: { Map },
    setup() {
      return { args };
    },
    template: '<Map />',
});

export const map = Template.bind({});
map.args = {};