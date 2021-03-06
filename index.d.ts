/// 
import 'bootstrap';
import 'vendor/filesaver';
import 'lodash-src';
import 'angular-strap';
import 'angular-route';
import 'angular-sanitize';
import 'angular-dragdrop';
import 'angular-bindonce';
import 'angular-ui';

declare global {
  interface Window {
    grafanaBootData: any,
    System: {
      import: Function
    }
  }
}

export declare class GrafanaApp {
    registerFunctions: any;
    ngModuleDependencies: any[];
    preBootModules: any[];
    constructor();
    useModule(module: any): any;
    init(): void;
}
declare var _default: GrafanaApp;
export default _default;
