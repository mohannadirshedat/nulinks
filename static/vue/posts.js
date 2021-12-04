let app = new Vue({
    el: "#posts_tag",
    delimiters: ['[[', ']]'],
    data() {
        return {
            disable: false,
            myTitle: 'Welcome!',
            limit: 3,
            offset: 0,
            posts: [],
            masks: [],
            loading: true,
            errored: false
        }
    },

    filters: {
        truncate: function(text, length, suffix) {

            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        },
    },


    beforeMount() {
        this.getPosts();

    },
    mounted() {

    },



    methods: {
        getPosts() {
            axios.get('http://localhost:8000/en/posts/api/', {
                params: {
                    offset: this.offset++,
                    limit: this.limit,
                }
            }).then(res => {
                res.data && (this.posts = [...this.posts, res.data])
            }).catch(error => {
                console.log(error)
            })
        }
    },
    watch: {
        page(value) {
            this.disable = value > 3
        }
    },
    Like(){
    console.log("LIKED")
    }
})