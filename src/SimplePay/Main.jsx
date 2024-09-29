import React, { useEffect, useState } from 'react';
import '@simplepay-ai/widget';

const Main = () => {
    const [invoiceId, setInvoiceId] = useState('');

    useEffect(() => {
        // Simule la création d'une facture ou récupère l'ID de la facture
        const createInvoice = async () => {
            try {
                // Remplacez par votre logique d'appel d'API pour créer une facture
                const response = await fetch('https://api.simplepay.ai/invoice', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        // vos données de facture ici
                    }),
                });

                if (!response.ok) {
                    throw new Error('Erreur lors de la création de la facture');
                }

                const data = await response.json();
                setInvoiceId(data.invoiceId); // Ajustez selon votre API
            } catch (error) {
                console.error('Erreur de création de la facture :', error);
            }
        };

        createInvoice();
    }, []);

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
            height: '100vh',
        },
        appContainer: {
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
                        appId="eb651bb3-6e26-4f1d-9549-d96540300d8e"
                        clientId="707533d2-971d-4cd6-a2a5-9c6dd44c0fe5"
                        invoiceId={invoiceId} // Utiliser l'ID de la facture ici
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
