module.exports = {
    env: process.env.NODE_ENV || 'development',
    jsSourceDir: './app/scripts',
    outputClientDir: "./build",
    docOutputDir: "./doc",
    sass: {
        src: "./app/resources/sass/app.scss",
        watch: "./app/resources/sass/**/*.scss",
        dest: "/css"
    },
    vendorCss: {
        src: [
            'app/resources/css/app.css',
            'bower_components/angular-toastr/dist/angular-toastr.css',
            'node_modules/ui-select/dist/select.min.css',
            'app/resources/css/selectize.css',
            'app/resources/css/select2.css'
        ],
        dest: "/css",
        output: "vendor.min.css"
    },
    js: {
        src: './app/scripts/app.js',
        watch: './app/scripts/**/*.js',
        dest: '/js'
    },
    vendorJs: {
        src: [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/angular/angular.min.js',
            'bower_components/angular-ui-router/release/angular-ui-router.min.js',
            'bower_components/angular-bootstrap/ui-bootstrap.min.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'bower_components/nanoscroller/bin/javascripts/jquery.nanoscroller.js',
            'bower_components/angular-nanoscroller/scrollable.js',
            "bower_components/angular-animate/angular-animate.js",
            'bower_components/angular-toastr/dist/angular-toastr.tpls.js',
            'bower_components/angular-messages/angular-messages.js',
            'bower_components/ng-file-upload/ng-file-upload-all.min.js',
            'bower_components/angular-ui-validate/dist/validate.min.js',
            'node_modules/ui-select/dist/select.min.js',
            'node_modules/angular-sanitize/angular-sanitize.js' 
        ],
        dest: "/js",
        output: "vendor.min.js"
    },
    template: {
        src: "./app/**/*.html",
        watch: "./app/scripts/**/*.html"
    },
    indexHtml: {
        src: "./app/index.html",
        watch: "./app/index.html"
    },
    fonts: {
        src: [
            './app/resources/css/fonts/font-awesome/*',
            './app/resources/css/fonts/glyphicons/*'
        ],
        dest: '/css/fonts/'
    },
    images: {
        src: './app/resources/images/*',
        watch: './app/resources/images/*',
        dest: '/images'
    }
};
