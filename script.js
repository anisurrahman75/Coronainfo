var total_confirm;
var total_rec;
var total_dec;

fetch("https://api.covid19api.com/summary")
    .then(response => response.json())
    .then(data => {
        /*data.Countries.forEach(element => {
            tem += "<tr>";
            tem += "<td>" + element.Country + "</td>"
            tem += "<td>" + element.TotalConfirmed + "</td>"
            tem += "<td>" + element.TotalRecovered + "</td>"
            tem += "<td>" + element.TotalDeaths + "</td></tr>"
        });
        document.getElementById("abc").innerHTML = tem;*/
        var tem = "";
        var t_confirm = data.Global.TotalConfirmed;
        var t_deaths = data.Global.TotalDeaths;
        var t_recover = data.Global.TotalRecovered;
        var arr = [{ t_confirm, t_deaths, t_recover }]
        for (var i = 1; i < 248; i++) {
            var country = data.Countries[i].Country;
            var confirm = data.Countries[i].TotalConfirmed;
            var recover = data.Countries[i].TotalRecovered;
            var decreased = data.Countries[i].TotalDeaths;
            var tem = { country, confirm, recover, decreased };
            arr.push(tem);
        }


        document.getElementById("con").innerHTML = t_confirm;
        document.getElementById("rec").innerHTML = t_recover;
        document.getElementById("dec").innerHTML = t_deaths;

        var tem2 = "";
        for (var i = 1; i < 248; i++) {
            tem2 += "<tr>";
            tem2 += "<td>" + arr[i].country + "</td>"
            tem2 += "<td>" + arr[i].confirm + "</td>"
            tem2 += "<td>" + arr[i].recover + "</td>"
            tem2 += "<td>" + arr[i].decreased + "</td></tr>"
            document.getElementById("abc").innerHTML = tem2;
        }




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