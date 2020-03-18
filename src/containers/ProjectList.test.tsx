import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ProjectList from './ProjectList';

describe('Project List content', () => {
  it('contains a sub-component for each piece of card data when shallowly rendered', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<ProjectList />);
    const result = renderer.getRenderOutput();
    const shallowContentLevel1 = result.props.children;
    const shallowContentLevel2 = shallowContentLevel1[1].props.children;
    expect(result.type).toBe('div');
    expect(shallowContentLevel1[0].type).toBe('h3');
    expect(shallowContentLevel1[1].type).toBe('div');
    expect(shallowContentLevel2.length).toBeGreaterThanOrEqual(3);
  });
});
