var total_confirm;
var total_rec;
var total_dec;
var tem = "";

fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data => {
        var t_confirm = data.Global.TotalConfirmed;
        var t_deaths = data.Global.TotalDeaths;
        var t_recover = data.Global.TotalRecovered;
        data.Countries.forEach(element => {
            tem += "<tr>";
            tem += "<td>" + element.Country + "</td>"
            tem += "<td>" + element.TotalConfirmed + "</td>"
            tem += "<td>" + element.TotalRecovered + "</td>"
            tem += "<td>" + element.TotalDeaths + "</td></tr>"


        });
        document.getElementById("abc").innerHTML = tem;

        document.getElementById("con").innerHTML = t_confirm;
        document.getElementById("rec").innerHTML = t_recover;
        document.getElementById("dec").innerHTML = t_deaths;
    });




function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
