var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#744FC6', '#FF499E'],
                ['#0496FF', '#6B818C']
            ]
        }
    }
});
