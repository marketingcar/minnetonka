
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Helmet } from 'react-helmet';

    const PageWrapper = ({ children, title, description }) => {
        return (
            <>
                <Helmet>
                    <title>{title ? `${title} | Minnetonka Animal Hospital` : 'Minnetonka Animal Hospital'}</title>
                    {description && <meta name="description" content={description} />}
                </Helmet>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    {children}
                </motion.div>
            </>
        );
    };

    export default PageWrapper;
  