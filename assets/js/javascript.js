//Check Off Specific Todos by Clicking
$("ul").on("click","li",function()
{
    $(this).toggleClass("completed");
});
//Click on X to Delte a Todo
$("ul").on("click","span",function(event)
{
    $(this).parent().fadeOut(); 
    event.stopPropagation(300,function()
    {
        $(this).remove();
    });
});
$("input[type='text']").keypress(function(event)
{
    if(event.which===13)
    {   //grabbing new todo text from input
        var todoText=$(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> "+todoText+"</li>");
    }
});
$(".fa-plus").click(function()
{
    $("input[type='text']").fadeToggle();
});

var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};
$('#download').click(function () {   
    doc.fromHTML($('#container').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('To-Do.pdf');
});