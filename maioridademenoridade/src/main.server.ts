import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './maioroumenoridade/app';
import { config } from './maioroumenoridade/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(App, config, context);

export default bootstrap;
