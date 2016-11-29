var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
            var self = this;
            change(self);
         function change( el ) {
           if ( el.value === "\u25BC"+ " Περισσότερα ..."  )
           el.value = "\u25BA"+" Λιγότερα ...";
           else
           el.value = "\u25BC"+" Περισσότερα ...";
          }; 
  }
}
