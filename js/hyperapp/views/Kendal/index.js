import { h } from 'hyperapp';
import * as d3 from 'd3v4';

const Index = module.exports = ({state, actions}) => {
// export default (state, actions) => {

  const onClick = (svg,colour) => {
    const square = d3.select(svg);
    square.style("fill", colour);
    actions.addColour({colour})
  }

  return (
    <div>
    <svg  width="300px" height="150px">
      <rect x="20" y="20" width="20px" height="20" rx="5" ry="5" oncreate={svg => d3.select(svg).on("click", () => onClick(svg,'yellow'))}/>
      <text x="20" y="20" fill="yellow">{state.yellow}</text>
      <rect x="60" y="20" width="20px" height="20" rx="5" ry="5" oncreate={svg => d3.select(svg).on("click", () => onClick(svg,'pink'))}/>
      <text x="40" y="20" fill="pink">{state.pink}</text>
      <rect x="100" y="20" width="20px" height="20" rx="5" ry="5" oncreate={svg => d3.select(svg).on("click", () => onClick(svg,'orange'))}/>
      <text x="60" y="20" fill="orange">{state.orange}</text>
    </svg>
    <div onclick={() => actions.router.go(`/`)}>back</div>
    </div>
  )
};
