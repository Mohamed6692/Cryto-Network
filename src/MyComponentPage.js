import React , { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@simplepay-ai/widget';
import Main from './SimplePay/Main';
import Editor from '@monaco-editor/react';



import * as monaco from 'monaco-editor';

monaco.editor.defineTheme('customNight', {
    base: 'vs-dark', // Utiliser un thème de base sombre
    inherit: true,
    rules: [
        { token: 'comment', foreground: '#072155' }, // Exemple de personnalisation
        { token: '', foreground: '#072155' }, // Couleur par défaut en blanc
    ],
    colors: {
        'editor.foreground': '##072155', // Couleur du texte
        'editor.background': '##072155', // Couleur de fond
    }
});





function MyComponentPage() {

  const [inputText, setInputText] = useState('');
  const [codeOutput, setCodeOutput] = useState('');

  const handleProcessText = () => {
    // Traitement du texte ici
    setCodeOutput(inputText); // Exemple : mettre le texte d'entrée dans la zone de code
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeOutput);
    alert('Code copied to clipboard!');
  };

  const handleLinkClick = (link) => {
    // Logique pour gérer le clic sur le lien
    console.log(`Clicked on: ${link}`);
    // Ajoutez votre logique de navigation ou autre ici
  };

  
  const handleRevert = () => {
    setInputText(''); // Effacer le champ de texte d'entrée
    setCodeOutput(''); // Effacer la zone de sortie de code
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Crypto - ICO Crypto, Blockchain & Cryptocurrency Web Template</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="shortcut icon" type="image/x-icon" href="./assets/img/favicon.png" />
      <link rel="stylesheet" href="./assets/css/bootstrap-5.0.0-alpha-1.min.css" />
      <link rel="stylesheet" href="./assets/css/LineIcons.2.0.css" />
      <link rel="stylesheet" href="./assets/css/animate.css" />
      <link rel="stylesheet" href="./assets/css/main.css" />

      <div>
        {/* Internet Explorer upgrade warning */}
        {/*[if lte IE 9]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
        <![endif]*/}

        {/* Preloader */}
        <div className="preloader d-none">
          <div className="loader">
            <div className="ytp-spinner">
              <div className="ytp-spinner-container">
                <div className="ytp-spinner-rotator">
                  <div className="ytp-spinner-left">
                    <div className="ytp-spinner-circle"></div>
                  </div>
                  <div className="ytp-spinner-right">
                    <div className="ytp-spinner-circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <header className="header navbar-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <img src={`${process.env.PUBLIC_URL}/assets/img/logo.svg`} alt="Logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                  <ul id="nav" className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="page-scroll active" href="#docs">Docs</a>
                    </li>
                    
                    <li className="nav-item">
                      <a className="page-scroll" href="#blockchain">Select Blockchain</a>
                    </li>

                    <li className="nav-item">
                      <a className="page-scroll" href="#wallet">Connect wallet</a>
                    </li>

                  </ul>
                </div> {/* navbar collapse */}
              </nav> {/* navbar */}
            </div>
          </div> {/* row */}
        </div> {/* container */}
      </header>
      {/* ========================= header end ========================= */}





     


      {/* ========================= hero-section start ========================= */}
      <section id="home" className="hero-section">
        <div className="shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            
          <div className="container">
          <h3 style={{ color: 'white' }}>Crypto</h3>
                  <div className="row mt-2">
                    {/* Input Section */}
                    <div className="col-lg-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Enter a code"
                          value={inputText}
                          onChange={(e) => setInputText(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Enter a code</label>
                      </div>
                      <button className="btn btn-primary mb-3" style={{ width: '300px' }} onClick={handleProcessText}>
                        Process Text
                      </button>

                      
                      <Main/>
                    </div>

                    {/* Output Section - Styled as Code Editor */}
                    <div className="col-lg-6">
                    <Editor
                         height="300px"
                        defaultLanguage="javascript"
                        value={codeOutput}
                        theme="customNight" // Appliquez le thème personnalisé
                        options={{
                            readOnly: true,
                            lineNumbers: 'on',
                        }}
                    />
                      {/* Boutons */}
                      <div className="d-flex justify-content-start mt-2">
                        <button className="btn btn-secondary me-2" onClick={copyToClipboard}>
                          Copy Code
                        </button>
                        <button className="btn btn-secondary" onClick={handleRevert}>
                          Revert
                        </button>
                      </div>

                        {/* Boîte d'instructions semi-transparente */}
                        <div
                          style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent
                            padding: '20px',
                            borderRadius: '8px',
                            color: 'white',
                            marginBottom: '20px',
                            marginTop: '100px',
                            lineHeight: '1.5', // Hauteur des lignes
                            textAlign: 'left',
                          }}
                        >
                         <h4>Instructions for SimplePay</h4>
                          <ol> {/* Align text properly */}
                            <li style={{ marginLeft: '10px' }}>Step 1: Enter the required code in the input field.</li>
                            <li style={{ marginLeft: '10px' }}>Step 2: Click the "Process Text" button to process your input.</li>
                            <li style={{ marginLeft: '10px' }}>Step 3: Use the "Copy Code" button to copy the output code.</li>
                            <li style={{ marginLeft: '10px' }}>Step 4: You can revert the changes using the "Revert" button.</li>
                          </ol>
                        </div>
                </div>
                      
                  </div>
                </div>
            
          </div>
        </div>
      </section>


        {/* JS scripts */}
        <script src="./assets/js/bootstrap.bundle-5.0.0.alpha-1-min.js"></script>
        <script src="./assets/js/contact-form.js"></script>
        <script src="./assets/js/wow.min.js"></script>
        <script src="./assets/js/main.js"></script>
      </div>
    </div>
  );
}

export default MyComponentPage;