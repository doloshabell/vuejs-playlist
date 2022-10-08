new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja',
        web: 'https://docs.vuejs.id/',
        webTag: '<a href="https://docs.vuejs.id/v2/guide/">Vue JS v2</a>'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ', ' + this.name;
        }
    }
});
