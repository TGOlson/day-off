var D3 = {

  color: d3.scale.category20c(),
  width: $(window).width() - 5,
  height: $(window).height() - 5,
  svg: null,

  init: function(){
    D3.setSvgCanvas()
    D3.setClickEvents()
    D3.setTimeEvents()
    D3.setResizeEvents()
  },

  setSvgCanvas: function(width, height){
    D3.svg = d3.select("body").append("svg")
    .attr("width", D3.width)
    .attr("height", D3.height)

    D3.svg.append("rect")
    .attr("width", D3.width)
    .attr("height", D3.height)
  },

  setTimeEvents: function(){
    var e = { 
      clientX: D3.width / 2,
      clientY: D3.height / 2
    }
    setInterval( function(){ D3.appendNewCircle(e) }, 10)
  },

  setClickEvents: function(keywordID){
    $('body').on('click', D3.appendNewCircle)
  },

  setResizeEvents: function(){
    $(window).resize(function(){
      $('svg')[0].width.baseVal.value = $(window).width() - 5
      $('svg')[0].height.baseVal.value = $(window).height() - 5
      D3.width = $(window).width() - 5
      D3.height = $(window).height() - 5
    })
  },

  appendNewCircle: function(){
    var xLoc = D3.width / 2 - 10
    var yLoc = D3.height / 2 - 10

    D3.svg.insert("circle", "rect")
    .attr("cx", xLoc + Math.random() * 20)
    .attr("cy", yLoc + Math.random() * 20)
    .attr("r", 40)
    .style("stroke", D3.color(Math.floor( Math.random()*20 + 1 )))
    .style("stroke-opacity", .5)
    .style('fill', 'none')
    .transition()
    .duration( Math.random() * 2000 + 1000 )
    .ease(Math.sqrt)
    .attr("r", Math.random() * 1000 + 100 )
    .style("stroke-opacity", 1e-6)
    .remove()
  },

  stop: function(){
    $('svg').remove()
  }
}


$(function(){
  D3.init()
})
