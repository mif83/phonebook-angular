/**
 * Created by user on 24.06.17.
 */
import angular from 'angular';

const app = angular.module('phonebook',[require('angular-route')]);


app.factory('myFactory', function () {
    return {
        phonebook:[
            {
                name:"Иван",
                surname:"Иванов",
                email:"ivanov@gmail.com",
                phone:"+380671232334",
                info:""
            },
            {
                name:"Василий",
                surname:"Чапаев",
                email:"chapaev@mail.ru",
                phone:"+380661235534",
                info:""
            },
            {
                name:"Бонопарт",
                surname:"Наполеон",
                email:"imperator@yahoo.com",
                phone:"+38099333555666",
                info:""
            }
        ],
        currentId:-1
    }
});


export default app;