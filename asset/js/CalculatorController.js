function CalculatorController($scope) {
    $scope.view = "";
//    $scope.operators=[];
//    $scope.num = [];
    var result;
    var decimalAdded = false;
    $scope.operators= ['+', '-', 'x', '÷'];
    $scope.setValue = function(value) {
//        if(value == '+-')
//        {
//            var newNum = parseFloat($scope.num[ $scope.num.length -1]);
//            newNum = parseFloat(-newNum);
//            $scope.num = $scope.num.slice(0,$scope.operators.length -2);
//            $scope.num.push(newNum);
//        }
        var lastElement = $scope.view.slice(-1);
        if( $scope.view == '' && value == '-')
            $scope.view += value;
        if(value == '+' || value == '-' || value == 'x' || value == '/')
            {

                if (lastElement == '+' || lastElement == '-' || lastElement == 'x' || lastElement == '/' || lastElement == '.' || lastElement == '')
                {}else{
                    $scope.view += value;
//                    $scope.operators.push(value);
                    decimalAdded = false;
                }
            }else if(value == '.' && lastElement != '+' && lastElement != '-' && lastElement != 'x' && lastElement != '/' && lastElement != '.') {
                        if(!decimalAdded) {
                            $scope.view  += value;
                            decimalAdded = true;
                        }
                  }else if(value !='.' && value !='0'){
                    $scope.view += value;
//                    $scope.num = $scope.view.split(/x|\+|\-|\//);
                 }else if(value == '0' && lastElement != '/'){
					$scope.view += value;
				 }
    };

    $scope.result = function()
    {
         var lastChar = $scope.view[$scope.view.length - 1];
         if( $scope.operators.indexOf(lastChar) > -1 || lastChar == '.')
             $scope.view =  $scope.view.replace(/.$/g, '');
         result = $scope.view.replace(/x/g, '*').replace(/÷/g, '/'); 
         $scope.view = eval(result).toString();
//        numOperators = $scope.operators.length;
//        for(var i=0 ;i<numOperators ;i++)
//        {
//            if( $scope.operators[i] == 'x' || $scope.operators[i] == '/'){
//                result = $scope.operators[i] == 'x' ? (parseFloat($scope.num[i]) * parseFloat($scope.num[i+1])) : (parseFloat($scope.num[i])/parseFloat($scope.num[i+1]));
//                var str1 = $scope.operators.slice(0,i);
//                var str2 = $scope.operators.slice(i+1,numOperators);
//                $scope.operators = str1.concat(str2);
//                var str3 = $scope.num.slice(0,i);
//                str3.push(result);
//                var str4 = $scope.num.slice(i+2,numOperators +1);
//                $scope.num = str3.concat(str4);
//                --i;
//            }
//        }
//            newNumOperators = $scope.operators.length;
//            for(var i=0 ;i<newNumOperators ;i++)
//            {
//                if( $scope.operators[i] == '+' || $scope.operators[i] == '-'){
//                    result = $scope.operators[i] == '+' ? (parseFloat($scope.num[i]) + parseFloat($scope.num[i+1])) : (parseFloat($scope.num[i]) - parseFloat($scope.num[i+1]));
//                    var str1 = $scope.operators.slice(0,i);
//                    var str2 = $scope.operators.slice(i+1,newNumOperators);
//                    $scope.operators = str1.concat(str2);
//                    var str3 = $scope.num.slice(0,i);
//                    str3.push(result);
//                    var str4 = $scope.num.slice(i+2,newNumOperators +1);
//                    $scope.num = str3.concat(str4);
//                    --i;
//                }
//            }
//        $scope.view = result.toString();
//        console.log($scope.operators);
//        console.log( $scope.num);
    };

    $scope.reset = function()
    {
        $scope.view = "";
        decimalAdded = false;
        $("input").val('');
//        $scope.operators=[];
//        $scope.num = [];
    };

    $scope.remove = function()
    {
        var lastElement = $scope.view.slice(-1);
        $scope.view = $scope.view.slice(0,-1);
        if(lastElement == '+' || lastElement == '-' || lastElement == 'x' || lastElement == '/' || lastElement == '.'  )
        {
            decimalAdded = decimalAdded ? false : true;
        }

        console.log(decimalAdded);
    };

	onkeyup = function(e) {
			switch (e.keyCode) {
						case 48 :
						$scope.setValue('0');
                        $("input").val($scope.view);
						break;
						case 49:
						$scope.setValue('1');
                            $("input").val($scope.view);
							break;
						case 50 :
						$scope.setValue('2');
                            $("input").val($scope.view);
						break;
						case 51 :
						$scope.setValue('3');
                            $("input").val($scope.view);
						break;
						case 52 :
						$scope.setValue('4');
                            $("input").val($scope.view);
						break;
						case 53 :
						$scope.setValue('5');
                            $("input").val($scope.view);
						break;
						case 54 :
						$scope.setValue('6');
                            $("input").val($scope.view);
						break;
						case 55 :
						$scope.setValue('7');
                            $("input").val($scope.view);
						break;
						case 56 :
						$scope.setValue('8');
                            $("input").val($scope.view);
						break;
						case 57 :
						$scope.setValue('9');
                            $("input").val($scope.view);
						break;
						case 191 :
						$scope.setValue('/');
                            $("input").val($scope.view);
						break;
						case 88 :
						$scope.setValue('x');
                            $("input").val($scope.view);
						break;
						case 189 :
						$scope.setValue('-');
                            $("input").val($scope.view);
						break;
						case 187 :
						$scope.setValue('+');
                            $("input").val($scope.view);
						break;
						case 8 :
						$scope.remove();
                            $("input").val($scope.view);
						break;
						case 190 :
						$scope.setValue('.');
                            $("input").val($scope.view);
						break;
						case 13 :
						$scope.result();
                            $("input").val($scope.view);
						break;
			}
	};

//    jQuery(function ()
//    {
//        jQuery("input").on("keydown", function (e)
//        {
//            var key = e.charCode || e.keyCode || 0; console.log($scope.view);
//            if(     key == 191 ||
//                    key == 88 ||
//                    key == 189 ||
//                    key == 187 ||
//                    key == 8 ||
//                    key == 190 ||
//                    key == 13 ||
//                    (key >= 48 && key <= 57))
//            {
//            var lastElement = $scope.view.slice(-1); console.log(lastElement);
//            if( $scope.view == '' && e.keyCode == 189)
//                $scope.view += String.fromCharCode(e.keyCode);
//                return ;
//            if( e.keyCode == 187 ||  e.keyCode == 189 ||  e.keyCode == 88 ||  e.keyCode == 191)
//            {
//                if (lastElement == '+' || lastElement == '-' || lastElement == 'x' || lastElement == '/' || lastElement == '.' || lastElement == '')
//                {
//                    e.preventDefault() ;
//                }else{
//                    $scope.view += String.fromCharCode(e.keyCode);
//                    return ;
//                    decimalAdded = false;
//                }
//            }else if( e.keyCode == 190 && lastElement != '+' && lastElement != '-' && lastElement != 'x' && lastElement != '/' && lastElement != '.') {
//                if(!decimalAdded) {
//                    $scope.view  += String.fromCharCode(e.keyCode);
//                    decimalAdded = true;
//                    return key == e.keyCode;
//                }
//            }else if( e.keyCode !=190 &&  e.keyCode !=48){
//                $scope.view +=  String.fromCharCode(e.keyCode);
//                return key == e.keyCode;
//            }else if(e.keyCode == 48 && lastElement != 189){
//                $scope.view += String.fromCharCode(e.keyCode);
//                return key == e.keyCode;
//            }
//        }else  e.preventDefault();
//            return (
//                key == 191 ||
//                    key == 88 ||
//                    key == 173 ||
//                    key == 187 ||
//                    key == 8 ||
//                    key == 190 ||
//                    key == 13 ||
//                    (key >= 48 && key <= 57));

//        });
//    });
};
