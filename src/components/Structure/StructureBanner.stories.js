import StructureBanner from './StructureBanner.vue';

export default {
    title: 'Structure/StructureBanner',
    component: StructureBanner,
};

const Template = (args) => ({
    components: { StructureBanner },
    setup() {
      return { args };
    },
    template: '<StructureBanner />',
});

export const structureBanner = Template.bind({});
structureBanner.args = {};