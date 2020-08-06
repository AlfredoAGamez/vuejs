app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo!',
    },
    beforeCreate: function() {
        console.log('llamado beforeCreate');
    },
    created: function() {
        console.log('llamado beforeCreate');
    },

    beforeMount: function() {
        console.log('llamado beforeMount')
    },
    mounted: function() {
        console.log('llamado mounted')
    },
    beforeUpdate: function() {
        console.log('llamado beforeudate')

    },
    updated: function() {
        console.log('llamado bupdated')
    },

    BeforeDestroy: function() {
        console.log('llamado beforeDestroy')
    },

    destroyed: function() {
        console.log('llamado destroyed')
    }
})