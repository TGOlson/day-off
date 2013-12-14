var D3 = {

  color: d3.scale.category20c(),
  width: $(window).width() - 5,
  height: $(window).height() - 5,
  svg: null,

  init: function(){
    this.setSvgCanvas()
    this.setEventForVisuals()
  },

  setSvgCanvas: function(width, height){
    D3.svg = d3.select("body").append("svg")
    .attr("width", D3.width)
    .attr("height", D3.height)

    D3.svg.append("rect")
    .attr("width", D3.width)
    .attr("height", D3.height)
  },

  setEventForVisuals: function(keywordID){
    $('body').on('click', D3.appendNewCircle)
  },

  appendNewCircle: function(e){
    D3.svg.insert("circle", "rect")
    .attr("cx", e.clientX)
    .attr("cy", e.clientY)
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
