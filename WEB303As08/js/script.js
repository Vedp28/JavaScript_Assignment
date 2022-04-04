$(document).ready(function(){
    $('#search').keyup(function(){
        $('#result').html('');
        let a = $('#search').val();
        let b = new RegExp(search, "i");
        $.getJSON('index.json', function(data){
            $.each(data, function(_key, value){
                if(value.fname.search(b) != -1)
                {
                    $('#result').append('<li class="list-item"> '+value.fname+' '+value.lname+' '+value.played+' '+value.age+' '+value.income+'')
                }
            });
        })
    })
    $.getJSON("index.json", function(data){
        let index_data = '';
        $.each(data, function(key, value){
            index_data += '<tr>';
            index_data += '<td>'+value.fname+'</td>';
            index_data += '<td>'+value.lname+'</td>';
            index_data += '<td>'+value.played+'</td>';
            index_data += '<td>'+value.age+'</td>';
            index_data += '<td>'+value.income+'</td>';
        });
        $('#table').append(index_data);
    });

    $("#but1").click(function(e){
        $("#table tr:not(:first-child)").filter(function (e) {
            let x = $(this).find("td:eq(1)").text();
            
                if (x.includes("A") || x.includes("B") || x.includes("C") || x.includes("D") || x.includes("E") || x.includes("F") || x.includes("G") || x.includes("H") || x.includes("I") || x.includes("J") || x.includes("K") || x.includes("L") || x.includes("M")) {
                    $(this).show();
                }
                else
                {
                    $(this).hide();
                }
                y = $('tr:visible').length;

                $('#button1').text(`( ${y - 1} )`);
                $('#button2').text("");
        });
    });
        
    $("#but2").click(function(e){ 
        $("#table tr:not(:first-child)").filter(function (e) {
            var x = $(this).find("td:eq(1)").text();
            
            if (x.includes("O") || x.includes("P") || x.includes("Q") || x.includes("R") || x.includes("S") || x.includes("T") || x.includes("U") || x.includes("V") || x.includes("W") || x.includes("X") || x.includes("Y") || x.includes("Z")) {
                $(this).show();
            }
            else
            {
                $(this).hide();
            }
            y = $('tr:visible').length;

            $('#button2').text(`( ${y - 1} )`);
            $('#button1').text("");
        });
    });
});