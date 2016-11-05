import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { QModule } from "./modules/q.module";

const platform = platformBrowserDynamic();

platform.bootstrapModule(QModule);