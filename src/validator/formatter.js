 function TRIM(){
   let text = "     Shailabh Srivastava     ";
   let result = text.trim();
   console.log(result);
 }
 TRIM();

 function LOWERCASE() {
    let text = "SHAILABH SRIVASTAVA"
    let result = text.toLowerCase();
    console.log(result);
 }
 LOWERCASE();

 function UPPERCASE() {
    let text = "shailabh srivastava"
    let result = text.toUpperCase();
    console.log(result);
 }
 UPPERCASE();

 module.exports.LowerCase = LOWERCASE;
 module.exports.UpperCase = UPPERCASE;
 module.exports.Trim = TRIM;

