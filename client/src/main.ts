import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

// Hot Module Replacement
import { bootloader } from '@angularclass/hmr';

if (process.env.ENV === 'production') {
  enableProdMode();
}

/*
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule);
}

// needed for hmr (hot module replacement)
// in prod this is replace for document ready
bootloader(main);
