AFRAME.registerComponent("books",{
  init:function(){
    this.booksContainer = this.el;
    this.createCards();
  },

  createCards:function(){
    const thumbNailsRef=[
      {
        id:"doctor-strange",
        title : "Doctor Strange",
        url : "./assets/thumbnails/doctorstrange.jpg",
      },
      {
        id:"wonder-woman",
        title : "Wonder Woman",
        url : "./assets/thumbnails/wonderwoman.jpg",
      },
      {
        id:"black-panther",
        title : "Black Panther",
        url : "./assets/thumbnails/blackpanther.jpg",
      },
      {
        id:"avengers",
        title : "Avengers",
        url : "./assets/thumbnails/avengers.jpeg",
      },
    ];

    let previousXPos = -60;

    for(var item of thumbNailsRef){
      const posX = previousXPos + 25;
      const posY = 10;
      const posZ = -40;
      const position = {x:posX,y:posY,z:posZ};
      previousXPos = posX;

      const borderEl = this.createBorder(position, item.id);

      const thumbnail = this.createThumbNail(item);
      borderEl.appendChild(thumbnail)

      const titleEl = this.createTitle(position,item);
      borderEl.appendChild(titleEl)

      this.booksContainer.appendChild(borderEl)
    }
  }, 

  createBorder:function(position, id){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id)
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry", {
        primitive:"plane", width: 22, height: 30
    })
    entityEl.setAttribute("position", position)
    entityEl.setAttribute("material", {color: "pink", opacity: 0.4})
    return entityEl
  },

  createThumbNail:function(item){
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true)
      entityEl.setAttribute("geometry", {primitive: "plane", width: 20, height:28})
      entityEl.setAttribute("material", {src:item.url})
      return entityEl
  }, 

  createTitle:function(position, item){
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", 
      {font:"exo2bold", 
       align: "center",
       width: 60,
       color: "purple", 
       value: item.title});
       const elpos = position;
       elpos.y = -30
       entityEl.setAttribute("position", elpos)
       entityEl.setAttribute("visible", true)
       return entityEl
  }
}

)