const ctx = document.getElementById('myChartOuter');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Mission Planning','Upgrade Media','NAVAID/Flightline Equip','EFB','Mx Laptops','SLN','CMS','JWICS','MILCOM','VIASAT','SATCOM Direct','EACN','DV Home Network','VIASAT','Network Devices','Host Devices','Personal Devices','Host Devices','Network Devices', 'ARINC'],
    datasets: [{
      label: 'Outer',
      data: [24,24,24,24,24,12,12,12,12,12,12,12,12,12,30,30,30,30,30,30],
      borderWidth: 1,
      borderColor:'black',
      // backgroundColor: ['Pink', 'Red', 'Gray', 'Orange']
    }, {
        labels:['Air Gap','Direct Connect','Services','SATCOM','Gateway','Travel Kit','Personal','MCS','Avionics Bus'],
        type:'pie',
        label:'Middle',
        data:[72,48,36,36,36,60,30,60,30],
        borderWidth:1,
        borderColor:'black',
    }, {
        labels:['Mission Support Systems','Transport','Customer','Aircraft Network'],
        type:'pie',
        label:'Inner',
        data:[120,108,90,90],
    }],
  },
  options: {
    cutout:'20%',
  }
});

