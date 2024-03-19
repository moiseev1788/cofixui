import Franchise from './Franchise.vue';

export default {
    title: 'Franchise',
    component: Franchise,
    argTypes: {
    }
};

const Template = (args) => ({
    components: { Franchise },
    setup() {
      return { args };
    },
    template: '<Franchise />',
});

export const franchise = Template.bind({});
franchise.args = {
    percent: '33',
};
  