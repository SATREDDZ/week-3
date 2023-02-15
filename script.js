function paramaters() {
    var btn = document.getElementById("btn");
    var city = document.getElementById("city").value;
    let wData = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=2e00b1206d110fdab330c7336ee1849e&units=metric`
    );
    var cname = document.getElementById("cname");
    var max = document.getElementById("max");
    var min = document.getElementById("min");
  
    wData.then((res) => {
      res.json().then((data) => {
        let temperature = [];
        let wArray = data.list;
        // console.log(min);
        // console.log(max);
        for (i = 0; i < wArray.length; i = i + 8) {
          // console.log(data);
          cname.innerHTML = data.city.country;
          max.innerHTML = wArray[i].main.temp_max;
          min.innerHTML = wArray[i].main.temp_min;
          temperature[i] = wArray[i].main.temp;
          console.log(
            wArray[i].main.temp,
            wArray[i].main.temp_min,
            wArray[i].main.temp_max
          );
        }
        console.log(temperature);
      });
    });
  }
  
  function plot(date, temparr) {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: date,
        datasets: [
          {
            label: "temperature",
            data: temparr,
            borderWidth: 1,
          },
        ],
      },
    });
  }
 