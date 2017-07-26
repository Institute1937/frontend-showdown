import { h } from 'hyperapp';

const Index = module.exports = ({state, actions}) => {

  return (
    <div>
     <div onclick={() => actions.router.go(`/kendal`)}>go to d3 stuff</div>
     </div>
  )
};