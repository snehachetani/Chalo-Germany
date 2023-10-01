let animation = new TimelineMax({repeat: -1, repeatDelay: 1});

animation.from('.branch', 2, {scaleY: 0, ease: Power1.easeOut}, 'branch')
    .staggerFrom('.leaves span', 0.25, {scale: 0, ease: Power1.easeOut}, 0.25, 0.25, 'branch');

animation = new TimelineMax({repeat: -1, repeatDelay: 0.5});

animation.from('.arrow', 4, {scaleY: 0, ease: Power1.easeOut}, 'arrow')
    .staggerFrom('.node span', 0.5, {scale: 0, ease: Power1.easeOut}, 0.5, 0.5, 'arrow')
    .to(['.arrow', '.node span'], 1, {autoAlpha: 0});