(function(){



    "use strict";

    angular
         .module('StarterApp')
         .controller('MenuCtrl', function($scope, $log, $state,classifiedsFactory3, $http,$mdSidenav,$mdToast,$mdDialog, NgMap){


    
       
      $scope.objects= classifiedsFactory3.ref;
       
       $scope.objects.$loaded().then(function(objects){
        $scope.categories=getcategories($scope.objects)
       });

$scope.category='';



$scope.filterr = function(category){
                $scope.category = category;
            };


 
 $scope.navi=function(){
     $mdSidenav('left').open();


 }
 $scope.clo=function(){
     $mdSidenav('left').close();
     
 }

$scope.naviR=function(){
     $mdSidenav('right').open();


 }
 $scope.cloR=function(){
     $mdSidenav('right').close();
     
 }



 /*
$scope.editing=function(object){ //editclassified 
    var id= object.$id; //id var tskes id of current object
       $scope.object=$scope.objects.$getRecord(id);// so does thi
    $scope.value=true;
    $scope.navi();
    $scope.objects1 = $scope.object;//objects1 is ng-model
    $scope.objects.$save($scope.objects1);//objects1 now will havedats ehich will be passed to objects
    }


$scope.dele=function(event, object){ //this is how dialogue is made
    var confirm = $mdDialog.confirm()
    .title("plz don't kill me")
    .ok('fuck yeah')
    .cancel('leave it')
    .targetEvent(event); //after confirm only it will either delete orwill keep it
    $mdDialog.show(confirm).then(function() {
        $scope.objects.$remove(object); //only code required to delete the item
    }


)
};
    



$scope.finished=function(){ //saveEdit
    $scope.objects.$save($scope.object).then(function(){
    $scope.value=false;
    $scope.objects1={};
    display("finished editing");
    $scope.clo();
})
}
*/
function getcategories(objects){
    var categories = [];
    angular.forEach(objects, function(item) //forEach is inbuilt angular function
    {
        angular.forEach(item.categories, function(category){
            categories.push(category);


        });
    });
    return _.uniq(categories);
}

     






    $scope.order = [];
    $scope.new = {};
    $scope.totOrders = 0;

    var url = window.location.protocol + "://" + window.location.host + "/" + window.location.pathname;

    $scope.getDate = function () {
        var today = new Date();
        var mm = today.getMonth() + 1;
        var dd = today.getDate();
        var yyyy = today.getFullYear();

        var date = dd + "/" + mm + "/" + yyyy

        return date
    };



      

        $scope.itemsToBuy = [];

$scope.updateTotalPrice = function(){
    $scope.totalPrice = 0;

if (itemsToBuy.length > 0) {
    for (var i = 0; i < $scope.itemsToBuy.length; i++) {
        $scope.totalPrice += $scope.itemsToBuy[i].price;
    }
  }
}

      
        $scope.addToShoppingList = function (id){
            var itemToAdd = $scope.objects[id];
            itemToAdd.quantity = 1;
            $scope.itemsToBuy.push(itemToAdd);
            $scope.objects.splice(id, 1);
            //localStorage.setItem("data", JSON.stringify($scope.itemsToBuy));
        };

        $scope.removeFromCart = function (id) {
            $scope.objects.push($scope.itemsToBuy[id]);
            $scope.itemsToBuy.splice(id, 1);
        };

        $scope.itemsToBuy = [];
//JSON.parse(localStorage.getItem("data"))

        $scope.getTotal = function () {
            var total = 0;

            if ($scope.itemsToBuy.length > 0) {
                for (var i = 0; i < $scope.itemsToBuy.length; i++) {
                    var product = $scope.itemsToBuy[i];
                    total += (product.price * product.quantity);
                }
            }
            return total.toFixed(2) + '$';
        };

        $scope.$watch('itemsToBuy', function () {
            $scope.totalPrice = $scope.getTotal();
        }, true);


        $scope.checkLength = function () {
            return $scope.itemsToBuy.length;
        };

        $scope.clearCart = function () {
            for (var i = 0; i < $scope.itemsToBuy.length; i++) {
                $scope.objects.push($scope.itemsToBuy[i]);
            }
            $scope.itemsToBuy = [];
        };

        $scope.confirmOrder = function () {
            window.alert("Your order is accepted.");
        }


        $scope.addQuantity = function (id) {
            if ($scope.itemsToBuy[id].quantity < 15) {
                $scope.itemsToBuy[id].quantity++;
                
            } 
        }


        $scope.removeQuantity = function (id) {
            if ($scope.itemsToBuy[id].quantity > 0) {
                $scope.itemsToBuy[id].quantity--;
            }
        }



























})

     })()