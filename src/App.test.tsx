import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

describe('App contents', () => {
  it('contains the sub-components when shallowly rendered', () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    const shallowContents = result.props.children;
    expect(result.type).toBe('div');
    expect(shallowContents.length).toBeGreaterThanOrEqual(7);
    // Check for the footer at the very end of App
    expect(shallowContents[shallowContents.length - 1]).toMatchInlineSnapshot(
      `<FooterComp />`
    );
  });
});
