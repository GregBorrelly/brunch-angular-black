exports.config = 
{
    conventions:
    {
        ignored: /.+\.spec\.js/
    },
    
    files:
    {
        javascripts:
        {
            joinTo:
            {
                "js/app.js": /^app/,
                "js/vendor.js": /^(vendor|bower_components)/
            },
            order:
            {
                after: 'app/core/app.js'
            }
        },
        
        stylesheets:
        {
            joinTo:
            {
                "css/common.css": /^app/
            }
        },
        
        templates:
        {
            joinTo: 
            {
                "js/templates.js": /^app/
            }
        }
    },
    
    modules:
    {
        wrapper: false,
        definition: false
    }
}