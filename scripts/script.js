// var x  = document.getElementById("scn").value;
// var y = false;
// var z = '';
//
// var k ;
// var calc = {
// del : function(){
//         scn.value =scn.value.slice(0, scn.value.length-1);
//         // scn.value = x;
// },
// off : function () {
//     x = ""
//     scn.value = x;
//     },
//
//  num : function(a){
//         scn.value += a;
//          if(a == "SIN"){
//                  k = 'sin';
//                  y = true;
//          }
//         //  alert(y)
//          if(y && a != "SIN"){
//                  z += a;
//          }
//
//     }
// }
//
// var ans = function () {
//         console.log(z);
//         if(k == 'sin'){
//                scn.value= eval(Math.sin(eval(z)));
//         } else{
//        scn.value = eval(scn.value);
//         }
//         y = false;
//     }
//
// function mathFunction(){
//
// }



var oo = ss.value;

var b = ["SIN", "COS", "LOG", oo, "^"],
    n = "",
    k = false,
    x = "",
    r = "",
    l = "",
    s = '',
    pw,
    power,
    c = false,
    pDisplay = function() {
        expr_answer.setAttribute('maxlength', '3')
        expr.textContent = "";
        nDate = new Date;
        expr_answer.innerHTML = "<p id='nDate'>" + nDate + "</p><p id='nDate'>Press power button to <input type='button' onclick='ac()' value='ON' class='button red bt'></p>";
    },
    set_on = function() {
        power = true;
        expr.textContent = 0;
        expr_answer.textContent = "";
    };

//function replay(myA, myB, myC){
//	if(myA==b[0]|| myA ==b[1]|| myA == b[2]){
//	    myC = true;
//	   }
//}


pDisplay();


var num = function(a) {
    if (power == true) {
        if (expr.textContent == "0") {
            expr.textContent = "";
        }
        expr.textContent += a;
        console.log(b[2].length)
        console.log(b[3].length)

        console.log(a.length)
        if (a == b[0] || a == b[1] || a == b[2] || a == b[3] || a == b[4]) {
            c = true;
            k = true;
            n = a;
        } else {
            k = false;
        }

        if (c && !k) {
            if (n == b[0]) {
                x += a;
            } else if (n == b[1]) {
                r += a;
            } else if (n == b[2]) {
                l += a;

            } else if (n == b[3]) {
                s += a;
            } else if (n == b[4]) {
                pw += a;
            }


        }

        if (expr_answer.textContent == 'Error') {
            expr_answer.textContent = "";
        }
    }

}

if (expr.textContent == "SQL") {
    expr_answer.textContent = eval(Math.sqrt(expr.textContent));
}
var ans = function() {
    if (power == true) {

        if (n == b[0]) {

            expr_answer.textContent = eval(Math.sin(eval(x)));
        } else if (n == b[1]) {
            expr_answer.textContent = eval(Math.cos(eval(r)));
        } else if (n == b[2]) {
            expr_answer.textContent = eval(Math.cos(eval(l)));
        } else if (n == b[3]) {
            expr_answer.textContent = eval(Math.sqrt(eval(s)));
        } else if (n == b[4]) {
            console.log(pw)
            expr_answer.textContent = eval(Math.pow(pw, expr.textContent));
        }


        if (expr.textContent == "PI") {
            expr_answer.textContent = eval(Math.PI);
        }

        if (expr.textContent == "") {
            expr_answer.innerHTML = "<span class='err'>Error</span>";
        } else if (!c && !k) {
            console.log("awsedrtfyuhji")
            expr_answer.innerHTML = eval(expr.textContent)
        }
    }
}



var del = function() {
    expr.textContent = expr.textContent.slice(0, expr.textContent.length - 1);
    expr_answer.textContent = "";
}

var off = function() {
    if (of.value == "OFF") {
        of.value = "ON";
        power = false;
        pDisplay();
    } else if (of.value = "ON") {
        of.value = "OFF";
        set_on();
    }
}
var ac = function() {
    set_on();
}