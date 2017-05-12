alert("Lets solve a quadratic equation and find X");
var a = Number(prompt("Enter value of A but not 0"));
// if (a === 0) {
// alert("it is not a quadratic equation")}
// else{
// var a = Number(prompt("Enter value of A"))}
var b = Number(prompt("Enter value of B"));
var c = Number(prompt("Enter value of C"));



function quadraticEq(a, b, c){
   var d = b * b - 4 * a * c;
    if (d < 0){
        result = "there is no solvings in this situation because d<0";
    }
    if (d > 0){
        var x1 = (- b - Math.sqrt(d)) / (2 * a)
        result = "x1 =" + x1
        var x2 = (-b + Math.sqrt(d)) / (2 * a)
         result += "x2 =" + x2}
    
    if (d === 0){
        var x_root1 = (-(b * b) / (2 * a))
        result = "x_root1 =" + x_root1
        var x_root2 = (-(b * b) / (2 * a))
        result += "x_root2 =" + x_root2}    
    return result;
    
    }
    
    var result = quadraticEq(a, b, c);
    document.write(result);

