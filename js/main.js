;(function(){
    var containsMarkdown = function containsMarkdown() {
        return !!document.querySelector('[data-markdown]');
    };
    var parent = window.top;

    Reveal.initialize({
        center: false,
        dependencies : [
            { src : 'plugin/markdown/marked.js', condition : containsMarkdown },
            { src : 'plugin/markdown/markdown.js', condition : containsMarkdown },
            { src : 'plugin/zoom-js/zoom.js', async: true },
            { src : 'plugin/notes/notes.js', async: true },
            {
                src : 'plugin/highlight/highlight.js',
                async : true,
                callback : function initHighlight() {
                    hljs.initHighlightingOnLoad();
                }
            }
        ],
        transition: 'slide',
        transitionSpeed: 'fast'
    });
    if (!parent.bound) {
        parent.bound = true;
        var start = new Date();
        var timer = parent.document.querySelector('.timer');
        var label = parent.document.querySelector('.speaker-controls-time > .label');
        var timePerColumn = 2600 / Reveal.getTotalSlides();
        Reveal.addEventListener('slidechanged', function(event) {
            var now = new Date();
            var elapsed = (now.getTime() - start.getTime()) / 1000;
            var currentIndex = event.indexh;
            var target = currentIndex * timePerColumn;
            timer.style.color = elapsed >= target ? '#0F0' : '#C74F4F';

            if (elapsed < target) {
                label.innerHTML = 'Time ~ ' + ((target - elapsed) / 60).toFixed(2) + ' Minutes Too Fast';
            } else {
                label.innerHTML = 'Time ~ ' + ((elapsed - target) / 60).toFixed(2) + ' Minutes Buffer';
            }
        });
    }
}());