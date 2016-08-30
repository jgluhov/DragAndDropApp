/**
 * Created by JGluhov on 8/30/2016.
 */
(function (window, document) {
    'use strict';

    function Box(boxLabel) {
        if(!(this instanceof Box)) {
            return new Box(boxLabel);
        }

        var element = createBoxElement();

        function createBoxElement() {
            var box,
                label;

            box = document.createElement('div');
            label = document.createElement('span');

            box.classList.add('box');

            label.textContent = boxLabel;

            box.appendChild(label);

            box.addEventListener('mouseenter', onMouseEnterHandler);
            box.addEventListener('mouseleave', onMouseLeaveHandler);

            Box.count += 1;

            return box;
        }

        function onMouseEnterHandler(e) {
            var element;

            element = e.target;
            element.classList.add('hovered');
        }

        function onMouseLeaveHandler(e) {
            var element;

            element = e.target;
            element.classList.remove('hovered');
        }

        this.getBoxElement = function () {
            return element;
        };
    }

    Box.count = 0;

    Box.getBoxesCount = function () {
        return Box.count;
    };

    window.Box = Box;

})(window, document);