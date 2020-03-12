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
    expect(shallowContents).toMatchInlineSnapshot(`
      Array [
        <ProjectCard
          deployedUrl="https://mind-drift.netlify.com"
          description="Meditation through guided breathing."
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgSeQQ9jv82BGb_RLI2gA0mJBjJwbdgjLXEgTXF_N8xDLnKKrd"
          sourceUrl="https://github.com/mindDrift"
          title="mindDrift"
        />,
      ]
    `);
  });
});
