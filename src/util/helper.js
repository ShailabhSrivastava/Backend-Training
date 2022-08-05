function Dt(){
   const day= new Date();
   const dd=day.getDate();
   const mm=day.getMonth()+1;
   const yyyy=day.getFullYear();
   console.log(dd,"/",mm,"/",yyyy);}
    Dt();
    
    function Mn(){
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const a = new Date();
    let month = months[a.getMonth()];
    console.log(month);
    }
    Mn();
   
   
     function Bt() {
        console.log('Plutonium, W3D5, the topic being taught today is Node.Js')
     }
     Bt();
   
     module.exports.printDate = Dt;
     module.exports.printMonth = Mn;
     module.exports.getBatchInfo = Bt;