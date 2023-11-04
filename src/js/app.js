import TicTacToeModel from './model.js';
import TicTacToeView from './view.js';
import TicTacToeController from './controller.js';

window.addEventListener('DOMContentLoaded', () => {
    const model = new TicTacToeModel();
    const view = new TicTacToeView(model);
    const controller = new TicTacToeController(model, view);

    // view.init();
    controller.init();
    view.addClickListener(controller.handleUserAction.bind(controller));
    view.addResetClickListener(controller.handleResetBoard.bind(controller));
});



