import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ProjectList from './ProjectList';

describe('Project List content', () => {
  it('contains a sub-component for each piece of card data when shallowly rendered', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<ProjectList />);
    const result = renderer.getRenderOutput();
    const shallowContents = result.props.children;
    expect(result.type).toBe('div');
    expect(shallowContents.length).toBeGreaterThanOrEqual(3);
    expect(shallowContents[0]).toMatchInlineSnapshot(`
      <ProjectCard
        deployedUrl="https://mind-drift.netlify.com"
        description="Meditation through guided breathing."
        imageUrl="https://github.com/DaveTrost/dave-trost/raw/master/src/assets/mind-drift.gif"
        sourceUrl="https://github.com/mindDrift"
        title="mindDrift"
      />
    `);
  });
});
