import app from '../../lib';

app.directive('phoneBook', phoneBook);
    
function phoneBook () {
    return {
        templateUrl: 'directives/phonebook/phonebook.html',
        scope:{

        },
        controller: function($scope, myFactory, $location){
            if (localStorage.phonebook){
                myFactory.phonebook = JSON.parse(localStorage.phonebook);
            }

            $scope.myFactory = myFactory;
            myFactory.currentId = -1;

            $scope.getGlobalIndex = function(person){
                let personIndex;
                myFactory.phonebook.forEach( (item, i) => {
                    if (item === person){
                        personIndex = i;
                    }
                });
                return +personIndex+1;
            }
        }
    }
}

export default app;