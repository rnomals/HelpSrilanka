var Result = function ()
{
    //-----------------------------------------------------------------------------------------------------------------
    this.__construct = function () {
        console.log('Result Created');
    };


    //-----------------------------------------------------------------------------------------------------------------
this.success=function (msg) {
    console.log('success');
    if(typeof msg==='undefined'){
        $("#sucess_alert").html('Project created Successfully!');
    }
    $("#success_alert").show();

};

    //---------------------------------------------------------------------------------------------------------------

    this.error=function (msg) {
        console.log('Error');
        $("#error").show();

    };

    //---------------------------------------------------------------------------------------------------------------

    this.__construct();
};