import TestimonailsCard from './TestimonailsCard.vue';

export default {
    title: 'Testimonails/TestimonailsCard',
    component: TestimonailsCard,
    argTypes: {
        name: {
            control: 'text'
        },
        imagesPeople: {
            control: 'text'
        }
    },
};

const Template = (args) => ({
    components: { TestimonailsCard },
    setup() {
      return { args };
    },
    template: '<TestimonailsCard images-people="VK.png" name="Варвара Клиджан">Cofix достаточно четкие прописанные стандарты, бизнес-процессы, какие-то мануалы, к которым всегда можно обратится, если даже ты новичок в бизнесе. Это очень помогло, потому что это уберегает от большого количества ошибок.</TestimonailsCard>',
});

export const testimonailsCard = Template.bind({});
testimonailsCard.args = {
};