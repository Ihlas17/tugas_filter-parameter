function panggilFilterParameters(value) {
    var arr = [
      {negara: 'Indonesia', benua: 'Asia'},
      {negara: 'Jerman', benua: 'Eropa'},
      {negara: 'Spanyol', benua: 'Eropa'},
      {negara: 'Korea', benua: 'Asia'},
      {negara: 'Portugal', benua: 'Eropa'},
      {negara: 'Amerika Serikat', benua: 'Amerika'},
    ];


   
    var benuaEropa = arr.filter(function benua(item) {
         // Tulis Code Kamu Disini
         if(item.benua=='Asia'){
             return true
         }
              
    });
   
    console.log(benuaEropa);
   }
panggilFilterParameters()