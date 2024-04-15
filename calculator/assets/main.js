function calculate(){
    let x = parseFloat(document.getElementById('num1').value);
    let y = parseFloat(document.getElementById('num2').value);
    let op = document.getElementById('operators').value;

    if(isNaN(x) || isNaN(y)){
        document.getElementById('result').value = "Please Enter Valid Numbers";
        result.classList.remove('alert-success')
        result.classList.add('alert-danger')
    }
    else{
        if(op === '+'){
            document.getElementById('result').value = x+y;
            result.classList.remove('alert-danger')
            result.classList.add('alert-success')
        }
        else if(op === '-'){
            document.getElementById('result').value = x-y;
            result.classList.remove('alert-danger')
            result.classList.add('alert-success')
        }
        else if(op === '*'){
            document.getElementById('result').value = x*y;
            result.classList.remove('alert-danger')
            result.classList.add('alert-success')
        }
        else{
            if(x != 0 && y != 0){
                document.getElementById('result').value = x/y;
                result.classList.remove('alert-danger')
                result.classList.add('alert-success')
            }
            else{
                document.getElementById('result').value = "Division by zero is not possible";
                result.classList.remove('alert-success')
                result.classList.add('alert-danger')
            }
        }
    }
}