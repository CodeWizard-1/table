$(function () {
    function newFun (element, newArr, newVaribl){
        var newClass = "."+element;
        $(newClass).attr(newArr,newVaribl);
    }
    newFun('logo','title','NewTextThere')
});