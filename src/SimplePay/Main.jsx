import React from 'react';
import '@simplepay-ai/widget';

const Main = () => {
    // Styles en ligne
    const styles = {
        container: {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
        },
        body: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Utilisez vh pour la compatibilité
        },
        appContainer: {
            margin: '0 auto',
            width: '100%',
            height: '600px',
            maxWidth: '390px',
            borderRadius: '6px',
            overflow: 'hidden',
            border: '1px solid #e4e4e7',
        },
        '@media (max-width: 768px)': {
            appContainer: {
                height: '100%',
                maxWidth: 'unset',
                borderRadius: '0',
                border: '0',
            },
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.body}>
                <div style={styles.appContainer}>
                    <payment-app
                        price="0.8"
                        appId="eb651bb3-6e26-4f1d-9549-d96540300d8e"
                        clientId="707533d2-971d-4cd6-a2a5-9c6dd44c0fe5"
                        invoiceId=""
                        backToStoreUrl="https://simplepay.ai"
                        serverUrl="https://api.simplepay.ai/invoice"
                        dark
                    ></payment-app>
                </div>
            </div>
        </div>
        
    );
};

export default Main;
