function App(name, memory, state){

    //Declare your instance variables here.
    this.name = name;
    this.memory = memory;
    this.state = state;

    //Declare the instance function open here.
    this.open = function(){

        this.state = 'active';

    };
    //Declare the instance function sleep he1re.
    this.sleep = function()
    {
        if(this.state == 'active')
        {
            this.state = 'sleep';
            this.memory = this.memory / 2;
        }
    };


    //Declare the instance function active here.
    this.active = function()
    {
        if(this.state == 'sleep')
        {
            this.state = 'active';
            this.memory = this.memory * 2;
        }
    };


    //Declare the instance function close here.
    this.close == function()
    {
        if(this.state != null)
        {
            this.state = null;
            this.memory = 0;
        }
    }



}

//Use the constructor to create 4 App objects below.
var angry_birds = new App('angry birds', 50, null);
var bad_piggies = new App('bad piggies', 30, null);
var grey_poupon = new App('grey poupon', 10, null);
var orange_cake = new App('orange cake', 40, null);

//Declare an array named appList, and place all 4 of your apps in that array.
//The order does not matter.
var app_list = [];

app_list.unshift(angry_birds);
app_list.unshift(bad_piggies);
app_list.unshift(grey_poupon);
app_list.unshift(orange_cake);
