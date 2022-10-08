new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ', ' + this.name;
        }
    }
});
