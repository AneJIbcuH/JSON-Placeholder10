const app = Vue.createApp({
  data() {
    return {
      newUser: {
        name: '',
        username: '',
        email: '',
        phone: '', 
        website: '',
        company: {
          name: ''
        },
        address: {
          suite: '',
          street: '',
          city: '',
          zipcode: ''
        }      
      },
      x: 1,
      info: '',
      fullInfo: {
        address: {
          suite: '',
          street: '',
          city: '',
          zipcode: ''
        },
       company: {
          name: ''
        }
      },
      name: '',
      pers: '',
      requestURL: 'https://jsonplaceholder.typicode.com/users'
    }
  },
  // computed: {
  //       userName() {
  //         return this.users = this.info
  //         console.log(users)
  //       } 
  //     },
  methods: {
    getFullInfo(index) {
      console.log(this.info[index])
      this.fullInfo = this.info[index]
      this.pageFull()
    },
    pageAll() {
      this.x = 1
    },
    pageCreate() {
      this.x = 2
    },
    pageFull() {
      this.x = 3
    },
    getData() {
      axios.get(this.requestURL).then(res => (this.info = res.data))
    },
    createUser() {
      // console.log(Object.values(this.newUser).filter(el => el !== '').find(el => el.values == ''))
      console.log(!Object.values(this.newUser).some(el => el.name == '' || el.suite == '' || el.street == '' || el.city == '' || el.zipcode == ''))
      if ((!Object.values(this.newUser).some(el => el == '')) && (!Object.values(this.newUser).some(el => el.name == '' || el.suite == '' || el.street == '' || el.city == '' || el.zipcode == ''))) {
        this.info.push(this.newUser)
        this.newUser = {
        name: '',
        username: '',
        email: '',
        phone: '', 
        website: '',
        company: {
          name: ''
        },
        address: {
          suite: '',
          street: '',
          city: '',
          zipcode: ''
        }
        
        }
        this.pageAll()
      }
    }
 }
})

app.mount('#app')