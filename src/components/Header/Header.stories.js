import Header from './Header.vue';

export default {
    title: 'Header',
    component: Header,
};

const Template = (args) => ({
    components: { Header },
    setup() {
      return { args };
    },
    template: '<Header />',
});

export const header = Template.bind({});
header.args = {};