import React from 'react';
import { render } from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SkillList from './SkillList';

describe('Skill List content', () => {
  it('contains a component for each skill category when shallowly rendered', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<SkillList />);
    const result = renderer.getRenderOutput();
    const shallowContentLevel1 = result.props.children;
    const shallowContentLevel2 = shallowContentLevel1[1].props.children;
    expect(result.type).toBe('div');
    expect(shallowContentLevel1[0].type).toBe('h3');
    expect(shallowContentLevel1[1].type).toBe('div');
    expect(shallowContentLevel2.length).toBeGreaterThanOrEqual(4);
    expect(shallowContentLevel2[0].type).toMatchInlineSnapshot(`[Function]`);
  });

  it('contains 4 specific categories', () => {
    const { getByText } = render(<SkillList />);
    const languagesCategory = getByText(/Typescript/i);
    const frontendCategory = getByText(/Bootstrap/i);
    const backendCategory = getByText(/Express/i);
    const toolsCategory = getByText(/Github/i);
    expect(languagesCategory).toBeInTheDocument();
    expect(frontendCategory).toBeInTheDocument();
    expect(backendCategory).toBeInTheDocument();
    expect(toolsCategory).toBeInTheDocument();
  });
});
