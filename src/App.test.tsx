import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';
// import Header from './components/Header';
// import ScrollingBio from './components/ScrollingBio';
import Bio from './components/Bio';
import ProjectList from './containers/ProjectList';
import SkillList from './containers/SkillList';
import Contact from './components/Contact';
import Footer from './components/FooterComp';

describe('App contents', () => {
  it('contains the sub-components when shallowly rendered', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    const shallowContents = result.props.children;
    expect(result.type).toBe('div');
    expect(shallowContents).toEqual([
      <Bio />,
      <ProjectList />,
      <SkillList />,
      <Contact />,
      <Footer />,
    ]);
  });
});
