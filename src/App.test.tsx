import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';
import Header from './components/Header';
import ScrollingBio from './components/ScrollingBio';
import ProjectList from './containers/ProjectList';

describe('App contents', () => {
  it('contains the sub-components when shallowly rendered', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    const shallowContents = result.props.children;
    expect(result.type).toBe('div');
    expect(shallowContents).toEqual([
      <Header />,
      <ScrollingBio />,
      <ProjectList />,
    ]);
  });
});
