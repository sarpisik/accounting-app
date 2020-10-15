import './LoadEnv'; // Must be the first import
import { App } from '@app';
import logger from '@shared/Logger';

// Start the server
const port = Number(process.env.PORT || 3000);
new App().init().then((app) => {
    app.listen(port, () => {
        logger.info('Express server started on port: ' + port);
    });
});
