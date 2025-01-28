console.clear();

var obj = {
    firstname:'praveen',
    lastname:'gubbala',
    getFullName:function(){
        console.log(this.firstname+" "+this.lastname)
    }
}
obj.getFullName();

var obj2 = {
    firstname:'Sachin',
    lastname:'Tendulkar'
}
obj.getFullName.call(obj2)


