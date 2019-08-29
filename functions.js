document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("start").addEventListener("click", function () {
        var input = Number(document.getElementById("input").value), width, temp = [], content = "<table>";
        if (input % 2 == 0) {
            width = input * 2 + 1;
        }
        else {
            width = input * 2 - 1;
        }
        while (temp.length < width) {
            temp.push(0);
        }
        temp[Math.floor(width / 2)] = 1;
        content += tableRow(temp);
        for (var i = 1; i < input; i++) {
            var temp2 = temp.slice(0, width);
            for (var i2 = 0; i2 < width; i2++) {
                temp[i2] = 0;
                if (i2 > 0) {
                    temp[i2] += temp2[i2 - 1];
                }
                if (i2 < width - 1) {
                    temp[i2] += temp2[i2 + 1];
                }
            }
            content += tableRow(temp);
        }
        content += "</table>";
        document.getElementById("print").innerHTML = content;
    });
    function tableRow(temp) {
        var content = "<tr>";
        for (var i in temp) {
            content += "<td>";
            if (temp[i] > 0) {
                content += temp[i];
            }
            content += "</td>";
        }
        content += "</tr>";
        return content;
    }
});
