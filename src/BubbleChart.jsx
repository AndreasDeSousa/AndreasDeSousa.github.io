import React from "react";
import * as d3 from "d3";

const radiusScale = d3.scaleSqrt().range([1, 50]).domain([0, 100]);
const width = 200;
const height = 150;

class BubbleChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data, hovered: null };
  }
  componentDidMount() {
    d3.forceSimulation()
      .nodes(this.props.data)
      .velocityDecay(0.5)
      .force("x", d3.forceX().strength(0.05))
      .force("y", d3.forceY().strength(0.05))
      .force(
        "collide",
        d3.forceCollide((d) => {
          return radiusScale(d.occurence / 10) + 11;
        })
      )
      .on("tick", () => {
        this.setState({ ...this.props.data });
      });
  }

  render() {
    return (
      <svg
        width={width}
        height={height}
        style={{ overflow: "visible", marginLeft: "-70px" }}
      >
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          {this.state.data.map((item, index) => (
            <g key={`bubble-${item.name} ${index}`}>
              <circle
                r={10 + radiusScale(item.occurence / 10)}
                cx={item.x}
                cy={item.y}
                fill={"white"}
              />
              <image
                x={`${
                  item.x ? item.x - (item.occurence === 30 ? 12.5 : 20) : 0
                }`}
                y={`${
                  item.y ? item.y - (item.occurence === 30 ? 12.5 : 20) : 0
                }`}
                href={item.link}
                height={item.occurence === 30 ? 25 : 40}
                width={item.occurence === 30 ? 25 : 40}
              />
            </g>
          ))}
        </g>
      </svg>
    );
  }
}

export default BubbleChart;
