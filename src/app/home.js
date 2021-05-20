import React from 'react';
import { appConfig } from '../config/inversify.depedencies';
import { withDependency } from '../di.context';

function Home({appConfig}) {
    return (
        <div>
            {appConfig.baseUrl}
        </div>
    );
}

export default withDependency(Home, [appConfig]);
// export default Home;