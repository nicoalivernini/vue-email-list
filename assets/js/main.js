// Genera 10 mail tramite API e stampale in una lista

var app = new Vue ({

  el: '#root',
  data: {
    indirizzoMail: [],

  },//Chiusura data
  methods: {
    newMail: function () {
      for (var i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          this.indirizzoMail.push(response.data.response)
        });
      }
    },

    clearMail: function () {
      this.indirizzoMail = [];
    }


  }//Chiusura Methods
})//Chiusura Vue
