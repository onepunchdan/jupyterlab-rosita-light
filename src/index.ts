import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @onepunchdan/jupyterlab-rosita-light extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '@onepunchdan/jupyterlab-rosita-light',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension @onepunchdan/jupyterlab-rosita-light is activated!');
    const style = '@onepunchdan/jupyterlab-rosita-light/index.css';

    manager.register({
      name: '@onepunchdan/jupyterlab-rosita-light',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
