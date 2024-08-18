const { Buffer } = require("buffer");
const bs58 = require("bs58");
const forge = require("node-forge");
const elliptic = require("elliptic");
const { ec } = elliptic;

function splitPemCertificates(pemString) {
    // Define the start and end delimiters for PEM certificates
    const certBegin = '-----BEGIN CERTIFICATE-----';
    const certEnd = '-----END CERTIFICATE-----';

    // Initialize an array to hold the individual certificates
    const certificates = [];

    // Use a regular expression to match certificates between the delimiters
    const regex = new RegExp(`${certBegin}[\\s\\S]*?${certEnd}`, 'g');

    let match;
    while ((match = regex.exec(pemString)) !== null) {
        // Add each certificate to the array
        certificates.push(match[0]);
    }

    return certificates;
}

function parse() {
    let certs=document.getElementById("certInput").value;
    cert_list=splitPemCertificates(certs);
    console.log(cert_list[0])
    let certificate = forge.pki.certificateFromPem(cert_list[0]);
    let issuer = certificate.issuer.attributes.map(attr => `${attr.name}: ${attr.value}`).join(', ');
    let subject = certificate.subject.attributes.map(attr => `${attr.name}: ${attr.value}`).join(', ');
    console.log(subject + " signed by " + issuer);


    console.log(certificate);
    }
document.getElementById("verifyButton").addEventListener("click", parse);