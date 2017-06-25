import app from '../../lib';

app.directive('changePerson', phoneBook);

function phoneBook () {
    return {
        templateUrl: 'directives/change-person/change-person.html',
        scope:{

        },
        controller: function($scope, myFactory, $routeParams){
            if (myFactory.currentId > -1){
                $scope.name = myFactory.phonebook[myFactory.currentId].name;
                $scope.surname = myFactory.phonebook[myFactory.currentId].surname;
                $scope.email = myFactory.phonebook[myFactory.currentId].email;
                $scope.phone = myFactory.phonebook[myFactory.currentId].phone;
                $scope.info = myFactory.phonebook[myFactory.currentId].info;
            }

            console.log("change person");
            $scope.save = function () {
                let data = {
                    name:$scope.name || "",
                    surname:$scope.surname || "",
                    email:$scope.email || "",
                    phone:$scope.phone || "",
                    info:$scope.info || ""
                };
                console.log("save changes");
                if (myFactory.phonebook[myFactory.currentId]){
                    myFactory.phonebook[myFactory.currentId] = data;
                } else {
                    myFactory.phonebook.push(data);
                }
                myFactory.currentId = -1;
                localStorage.phonebook = JSON.stringify(myFactory.phonebook);
                history.back();
            }
        }
    }
}

export default app;
