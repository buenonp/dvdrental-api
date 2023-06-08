import express from 'express';

import { container } from 'tsyringe';

import { FilmController } from '../controllers/FilmController';

const router = express.Router();

const filmController: FilmController = container.resolve('FilmController');

router.get('/', (req, res) => filmController.getItems(req, res));
router.get('/:id', (req, res) => filmController.getItemById(req, res));
router.post('/', (req, res) => filmController.createItem(req, res));
router.put('/:id', (req, res) => filmController.updateItem(req, res));
router.delete('/:id', (req, res) => filmController.deleteItem(req, res));

export default router;
