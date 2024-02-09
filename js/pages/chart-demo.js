document.addEventListener('DOMContentLoaded', function () {
  var newDates = [
      "01.01.2024", "02.01.2024", "03.01.2024", "04.01.2024", "05.01.2024",
      "06.01.2024", "07.01.2024", "08.01.2024", "09.01.2024", "10.01.2024",
      "11.01.2024", "12.01.2024", "13.01.2024", "14.01.2024", "15.01.2024",
      "16.01.2024", "17.01.2024", "18.01.2024", "19.01.2024", "20.01.2024",
      "21.01.2024", "22.01.2024", "23.01.2024", "24.01.2024", "25.01.2024",
      "26.01.2024", "27.01.2024", "28.01.2024", "29.01.2024", "30.01.2024",
      "31.01.2024"
  ];

  var newData = [
      56807.88, 12976440.08, 2848339.54, 8353668.94, 9533527.71,
      24706.60, 1876.74, 20349856.47, 11009053.77, 7697484.10,
      9940196.01, 14061050.14, 9402.01, 42304.37, 3410254.29,
      28420304.11, 27255916.68, 23042739.72, 10929659.42, 42715.95,
      239.59, 14415186.40, 9608915.82, 16706541.93, 30981653.00,
      36891976.68, 3140.99, 11823.23, 22502400.79, 16900107.33,
      23274855.68
  ];

  var basicAreaOption = {
      series: [{
          name: "AR",
          data: newData
      }],
      chart: {
          type: "area",
          height: 170,
          zoom: {
              enabled: false
          },
          toolbar: {
              show: false // Hide the toolbar
          }
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth'
      },
      xaxis: {
          categories: newDates,
          labels: {
              show: false // Hide X-axis labels
          },
          axisBorder: {
              show: false // Hide X-axis border
          },
          axisTicks: {
              show: false // Hide X-axis ticks
          }
      },
      yaxis: {
          labels: {
              show: false // Hide Y-axis labels
          },
          axisBorder: {
              show: false // Hide Y-axis border
          },
          axisTicks: {
              show: false // Hide Y-axis ticks
          }
      },
      grid: {
          show: false // Hide grid lines
      },
      tooltip: {
          enabled: true, // Enable tooltips to show data on hover
          x: {
              format: 'dd.mmm.yyyy' // Date format for tooltip
          },
          y: {
              formatter: function (val) {
                  return val.toLocaleString(); // Format numbers with commas
              }
          }
      },
      legend: {
          show: false // Hide legend
      }
  };

  var chart = new ApexCharts(document.querySelector("#basic-area-chart"), basicAreaOption);
  chart.render();
});


document.addEventListener('DOMContentLoaded', function () {
  var newDates = [
      "01.01.2024", "02.01.2024", "03.01.2024", "04.01.2024", "05.01.2024",
      "06.01.2024", "07.01.2024", "08.01.2024", "09.01.2024", "10.01.2024",
      "11.01.2024", "12.01.2024", "13.01.2024", "14.01.2024", "15.01.2024",
      "16.01.2024", "17.01.2024", "18.01.2024", "19.01.2024", "20.01.2024",
      "21.01.2024", "22.01.2024", "23.01.2024", "24.01.2024", "25.01.2024",
      "26.01.2024", "27.01.2024", "28.01.2024", "29.01.2024", "30.01.2024",
      "31.01.2024"
  ];

  var newData = [
      -492.12, -9228193.81, -14638272.02, -7604146.73, -42917936.49,
      -3943.40, 1876.74, 5847737.62, -30541240.25, 2326246.83,
      -9926385.19, -1138697.36, 9402.01, 42304.37, 2463685.26,
      8203046.84, -17478936.91, 50458.16, -16275726.42, 23615.95,
      239.59, -4694010.38, 4419382.70, 3862579.40, -5280274.26,
      29828677.77, 3140.99, 11823.23, 15179341.28, 7496329.03,
      -2323419.36
  ];

  var basicAreaOption = {
      series: [{
          name: "Operating Cashflow",
          data: newData,
          color: "#FF0000" // Set series color to red
      }],
      chart: {
          type: "area",
          height: 170,
          zoom: {
              enabled: false
          },
          toolbar: {
              show: false // Hide the toolbar
          }
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth'
      },
      xaxis: {
          categories: newDates,
          labels: {
              show: false // Hide X-axis labels
          },
          axisBorder: {
              show: false // Hide X-axis border
          },
          axisTicks: {
              show: false // Hide X-axis ticks
          }
      },
      yaxis: {
          labels: {
              show: false // Hide Y-axis labels
          },
          axisBorder: {
              show: false // Hide Y-axis border
          },
          axisTicks: {
              show: false // Hide Y-axis ticks
          }
      },
      grid: {
          show: false // Hide grid lines
      },
      tooltip: {
          enabled: true, // Enable tooltips to show data on hover
          x: {
              format: 'dd.mmm.yyyy' // Date format for tooltip
          },
          y: {
              formatter: function (val) {
                  return val.toLocaleString(); // Format numbers with commas
              }
          }
      },
      legend: {
          show: false // Hide legend
      }
  };

  var chart = new ApexCharts(document.querySelector("#basic-area-chart2"), basicAreaOption);
  chart.render();
});





document.addEventListener('DOMContentLoaded', function () {
  var newDates = [
      "01.01.2024", "02.01.2024", "03.01.2024", "04.01.2024", "05.01.2024",
      "06.01.2024", "07.01.2024", "08.01.2024", "09.01.2024", "10.01.2024",
      "11.01.2024", "12.01.2024", "13.01.2024", "14.01.2024", "15.01.2024",
      "16.01.2024", "17.01.2024", "18.01.2024", "19.01.2024", "20.01.2024",
      "21.01.2024", "22.01.2024", "23.01.2024", "24.01.2024", "25.01.2024",
      "26.01.2024", "27.01.2024", "28.01.2024", "29.01.2024", "30.01.2024",
      "31.01.2024"
  ];

  var newData = [
      -57300.00, -22204633.89, -17486611.56, -15957815.67, -52451464.20,
      -28650.00, 0.00, -14502118.85, -41550294.02, -5371237.27,
      -19866581.20, -15199747.50, 0.00, 0.00, -946569.03,
      -20217257.27, -44734853.59, -22992281.56, -27205385.84, -19100.00,
      0.00, -19109196.78, -5189533.12, -12843962.53, -36261927.27,
      -7063298.91, 0.00, 0.00, -7323059.51, -9403778.30, -25598275.04
  ];

  var basicAreaOption = {
      series: [{
          name: "AP",
          data: newData
      }],
      chart: {
          type: "area",
          height: 170,
          zoom: {
              enabled: false
          },
          toolbar: {
              show: false // Hide the toolbar
          }
      },
      colors: ['#A020F0'], // Set the chart color to purple
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth'
      },
      xaxis: {
          categories: newDates,
          labels: {
              show: false // Hide X-axis labels
          },
          axisBorder: {
              show: false // Hide X-axis border
          },
          axisTicks: {
              show: false // Hide X-axis ticks
          }
      },
      yaxis: {
          labels: {
              show: false // Hide Y-axis labels
          },
          axisBorder: {
              show: false // Hide Y-axis border
          },
          axisTicks: {
              show: false // Hide Y-axis ticks
          }
      },
      grid: {
          show: false // Hide grid lines
      },
      tooltip: {
          enabled: true, // Enable tooltips to show data on hover
          x: {
              format: 'dd.mmm.yyyy' // Date format for tooltip
          },
          y: {
              formatter: function (val) {
                  return val.toLocaleString(); // Format numbers with commas
              }
          }
      },
      legend: {
          show: false // Hide legend
      }
  };

  var chart = new ApexCharts(document.querySelector("#basic-area-chart3"), basicAreaOption);
  chart.render();
});

