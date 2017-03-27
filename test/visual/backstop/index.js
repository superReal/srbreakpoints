// Create BackstopJS settings
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    id: 'srbreakpoints',
    viewports: [
        {
            name: 'xs end',
            width: 479,
            height: 500,
        },
        {
            name: 's start',
            width: 480,
            height: 500,
        },
        {
            name: 's end',
            width: 767,
            height: 500,
        },
        {
            name: 'm start',
            width: 768,
            height: 500,
        },
        {
            name: 'm end',
            width: 1023,
            height: 500,
        },
        {
            name: 'l start',
            width: 1024,
            height: 500,
        },
        {
            name: 'l end',
            width: 1279,
            height: 500,
        },
        {
            name: 'xl start',
            width: 1280,
            height: 500,
        },
        {
            name: 'xl end',
            width: 1399,
            height: 500,
        },
        {
            name: 'xxl start',
            width: 1400,
            height: 500,
        },
    ],
    scenarios: [
        {
            label: 'tests',
            url: 'test/visual/dist/index.html',
            selectors: [
                '#test_content_responsive .test-wrapper',
                '#test_content_between .test-wrapper',
                '#test_content_only .test-wrapper',
            ],
            delay: 0,
            misMatchThreshold: 0,
            onReadyScript: 'on-before.js',
        },
    ],
    paths: {
        bitmaps_reference: 'test/visual/backstop/references',
        bitmaps_test: 'test/visual/backstop/tests',
        casper_scripts: 'test/visual/backstop/casper-scripts',
        html_report: 'test/visual/backstop/html-report',
        ci_report: 'test/visual/backstop/ci-report',
    },
    casperFlags: [],
    engine: 'phantomjs',
    report: devMode ? ['browser'] : ['CI'],
    debug: false,
};
