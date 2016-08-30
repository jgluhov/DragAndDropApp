/**
 * Created by JGluhov on 8/30/2016.
 */
(function (window, document) {
    'use strict';

    var self = this,
        cabinetElements,
        dashboardElement,
        MAX = 32;

    cabinetElements = document.querySelectorAll('.cabinet');
    dashboardElement = document.querySelector('.dashboard');

    dashboardElement.addEventListener('click', function (e) {
        var element;

        element = e.target;

        if(element.classList.contains('btn-add')) {
            btnAddClickHandler.call(self, e);
        }

        if(element.classList.contains('btn-init')) {
            btnInitClickHandler.call(self, e);
        }
    });

    function addBoxes(count) {
        var box,
            i;

        for(i = 0; i < count; i++) {
            box = new Box(i + 1);

            cabinetElements[0].appendChild(box.getBoxElement());
        }
    }

    function btnAddClickHandler() {
        var box,
            count;

        count = Box.getBoxesCount();

        box = new Box(count + 1);

        cabinetElements[0].appendChild(box.getBoxElement())
    }

    function btnInitClickHandler() {
        addBoxes(MAX);
    }



})(window, document);