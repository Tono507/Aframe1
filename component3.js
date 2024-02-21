AFRAME.registerComponent('hello', {
    //esto dice que estos son los parametros que te pueden poner
    schema: {
        //message sera un componente de tipo string que por defecto vale Hello!
        message: {type: 'string', default: 'Hello!'}
      },

    init: function () {
        //aqui decimos que imprimamos en consola el componente message
        console.log(this.data.message);
    }
  });