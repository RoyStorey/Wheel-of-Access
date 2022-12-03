const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'pie',
  data: {

    datasets: [{
      label: ['Mission Planning', 'Upgrade Media', 'NAVAID/Flightline Equip', 'EFB', 'Mx Laptops', 'SLN', 'CMS', 'JWICS', 'MILCOM', 'VIASAT', 'SATCOM Direct', 'EACN', 'DV Home Network', 'VIASAT', 'Network Devices', 'Host Devices', 'Personal Devices', 'Host Devices', 'Network Devices', 'ARINC'],
      data: [24, 24, 24, 24, 24, 12, 12, 12, 12, 12, 12, 12, 12, 12, 30, 30, 30, 30, 30, 30],
      borderWidth: 5,
      borderColor: 'black',
      backgroundColor: ['red', 'red', 'red', 'Green', 'Yellow', 'Gray', 'Gray', 'Gray', 'Gray', 'Gray', 'Gray', 'Green', 'Gray', 'Gray', 'Gray', 'Gray', 'red', 'Gray', 'Gray', 'red'],
      hoverBackgroundColor: 'white',
    }, {
      labels: ['Air Gap', 'Direct Connect', 'Services', 'SATCOM', 'Gateway', 'Travel Kit', 'Personal', 'MCS', 'Avionics Bus'],
      type: 'pie',
      data: [72, 48, 36, 36, 36, 60, 30, 60, 30],
      backgroundColor: ['red', 'red', 'Gray', 'Gray', 'Gray', 'Gray', 'red', 'Gray', 'red'],
      borderWidth: 5,
      borderColor: 'black',
      hoverBackgroundColor: 'white',
    }, {
      labels: ['Mission Support Systems', 'Transport', 'Customer', 'Aircraft Network'],
      type: 'pie',
      data: [120, 108, 90, 90],
      backgroundColor: ['red', 'Gray', 'Gray', 'Gray'],
      borderWidth: 5,
      borderColor: 'black',
      hoverBackgroundColor: 'white',
    }],
  },

  options: {
    responsive: true,
    plugins: {
      // https://www.chartjs.org/docs/latest/samples/other-charts/multi-series-pie.html
      // legend: {
      //   labels: {
      //   },
      // },
      title: {
        color: 'white',
        FontFace: 'sans',
        display: true,
        text: 'Wheel of Access',
      },
    },
    cutout: '10%',
  }
});
