$.getJSON("/data",function(d){
    alert(JSON.stringify(d));
    $("#name").text(d.name);
})