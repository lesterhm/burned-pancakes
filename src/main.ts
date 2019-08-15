import 'reflect-metadata';
import { Vue } from 'vue-property-decorator';
import { Inject } from 'inversify-props';
import { installVendorPlugins } from './app/vendor';
import { router } from './app/app.router';
import store from './app/app.store';
import App from './app/App.vue';

import './styles/app.scss';

export class AppModule {
    
    constructor() {
        installVendorPlugins();
        this.bootstrap();
    }

    private async bootstrap(): Promise<Vue> {
        let options = {
            el: '#app',
            router: router(),
            store,
            render: create => create(App)
        };

        return new Vue(options);
    }
}

new AppModule();
