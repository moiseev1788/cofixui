import Service from './Service.vue';

export default {
    title: 'Service',
    component: Service,
};

const Template = (args) => ({
    components: { Service },
    setup() {
      return { args };
    },
    template: '<Service />',
});

export const service = Template.bind({});
service.args = {};