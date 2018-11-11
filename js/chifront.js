(function ($) {
  // Init global DOM elements, functions and arrays
  window.app = {el : {}, fn : {}};
  app.el['window'] = $(window);

  app.el['window'].on('load', function () {
	  // Preloader
	  // app.el['loader'].delay(0).fadeOut();
    // app.el['mask'].delay(500).fadeOut("slow");

    const $serviceGraph = $('#service-graph')
    if ($serviceGraph.length > 0) {
      // initialize image map
      $serviceGraph.imageMap()

      // initialize default showed target
      const defaultShowingTargetId = '#regulatory-and-compliance'
      showTargetInCenterServiceBox(defaultShowingTargetId)

      $($serviceGraph.attr('usemap')).find('area').on('hover', function (e) {
        e.preventDefault()
        const $this = $(this)
        const targetId = $this.attr('href')
        showTargetInCenterServiceBox(targetId)
      })
    }

    const serviceChartCtx = document.getElementById('ServicesChart');
    const serviceChart = new Chart(serviceChartCtx, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets:[
          {
            label: "My First Dataset",
            data: [300,50,100],
            backgroundColor: ["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"]
          }
        ]
      },
      options: {
        labels: {
          fontSize: 14,
          fontColor: '#fff',
          arc: true,
        }
      }
    });
  })

  function showTargetInCenterServiceBox (targetId) {
    const $serviceGraphContent = $('#service-graph-content')
    const $targetContent = $(targetId)
    const $targetImg = $(targetId + '-img')
    $serviceGraphContent.html($targetImg.html() + ' ' + $targetContent.html())
  }

})(jQuery)
