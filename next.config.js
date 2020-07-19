module.exports = {
    experimental: {
        sassOptions: {
            prependData: `
            
            // Colors
            $ssis-blue: #174E94;

            // Other
            $transition-duration: 0.2s;
            
            // Style Reset
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            `
        }
    }
}
