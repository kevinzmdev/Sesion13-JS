

let app = angular.module("myApp", [])

app.controller("myCtrl",function($scope){
    $scope.distancia = 0
    $scope.calcularTarifa=function(){
        if($scope.distancia<=0){
            return 0
        }
        else if($scope.distancia <=300){
            return 250
        } else if($scope.distancia <=1000){
            return 250 + 30*($scope.distancia -300)
        }else{
            return 250 + 30*(1000-300)+20*($scope.distancia -1000)
        }
    }

    $scope.calcularDescuento=function(){
        if($scope.calcularTarifa() >=500){
            return $scope.calcularTarifa()*0.10
        } else {
            return 0
        }
    }
    

    $scope.Pago=function(){       
        return $scope.calcularTarifa() -$scope.calcularDescuento()
    }
})



