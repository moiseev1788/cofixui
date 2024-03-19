import InvestStructure from './InvestStructure.vue';

export default {
    title: 'Structure/InvestStructure',
    component: InvestStructure,
};

const Template = (args) => ({
    components: { InvestStructure },
    setup() {
      return { args };
    },
    template: '<InvestStructure />',
});

export const investStructure = Template.bind({});
investStructure.args = {};