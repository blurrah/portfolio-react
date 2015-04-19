import ReactRouter from 'react-router';
import routes from './routes';

export default ReactRouter.create({
    location: ReactRouter.HistoryLocation,
    routes: routes
});
