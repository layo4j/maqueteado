const Controller = {
    showPromociones() {
      const data = Model.getPromociones();
      document.getElementById("resultado").innerText = data;
    },
  
    showOpiniones() {
      const data = Model.getOpiniones();
      document.getElementById("resultado").innerText = data;
    }
  };
  