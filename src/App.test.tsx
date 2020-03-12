import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';
// import Header from './components/Header';
// import ScrollingBio from './components/ScrollingBio';
import ProjectList from './containers/ProjectList';
import SkillList from './containers/SkillList';

describe('App contents', () => {
  it('contains the sub-components when shallowly rendered', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    const shallowContents = result.props.children;
    expect(result.type).toBe('div');
    expect(shallowContents).toEqual([
      <SkillList />,
      <ProjectList />,
    ]);
  });
});
