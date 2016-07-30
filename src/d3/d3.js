var svg = d3.select("svg");

svg.selectAll("text")
  .data(['Hello, World!'])
  .enter()
  .append("text")
  .attr("dx", 10)
  .attr("dy", 10)
  .text(function (a){
    return a
  });
