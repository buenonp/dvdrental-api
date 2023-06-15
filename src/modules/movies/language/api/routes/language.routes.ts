import { Router } from 'express';
import { container } from 'tsyringe';

import baseRoutes from '@/modules/base/base.routes';

const languageRouter = Router();

const languageController = container.resolve('LanguageController');

languageRouter.use('/', baseRoutes(languageController));

export default languageRouter;
