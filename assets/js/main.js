// Genera 10 mail tramite API e stampale in una lista

var app = new Vue ({

  el: '#root',
  data: {
    mails: 10,
    indirizzo: [],

  },//Chiusura data
  methods: {
    indirizzoEmail: function () {
      for (var i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          this.indirizzo.push(response.data.response)
        });
      }
      //console.log(this.indirizzo);
      }


  }//Chiusura Methods
})//Chiusura Vue
