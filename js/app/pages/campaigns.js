export const campaigns = {
    data() {
        return {
            parent: "",
        };
    },

    mounted() {
        this.parent = this.$parent.$parent;

        if (!this.parent.user || !this.parent.user.auth) {
            this.parent.page('/');
        }
    },

    template: `
        <div>
            Campaigns
        </div>
    `
};
