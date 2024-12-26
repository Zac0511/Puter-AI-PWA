# Security Policy - Puter AI PWA

This document outlines the security measures implemented in the Puter AI Progressive Web App (PWA) to safeguard user data and maintain application integrity.

### Limited Scope and Dependency on Puter API
The Puter AI PWA primarily serves as a frontend interface for interacting with the Puter API. The app itself has a limited scope and does not perform complex computations or handle large amounts of data. As a result, most potential security vulnerabilities are likely to originate from the Puter API itself.

### Ephemeral Conversations and Data Minimization
To protect user privacy, the Puter AI PWA does not store any conversation history. All interactions with the AI are processed in real-time and discarded upon completion. This significantly reduces the risk of sensitive data being compromised in the event of a security breach.

### Security Measures
* **Secure Communication:** All communication between the PWA and the Puter API is encrypted using HTTPS.
* **Limited Input Validation:** While the PWA does not perform extensive input validation on text inputs, it relies on the Puter API's built-in safeguards to handle potentially malicious input.
* **Dependency Management:** External dependencies, such as the Puter API, Google Material Design, and Noto Sans font, are sourced from trusted providers and kept up-to-date.
* **No Local Storage of Sensitive Data:** The PWA avoids storing any sensitive data locally on the user's device. Temporary data, such as user preferences, is stored securely using browser mechanisms.

### Reporting Security Vulnerabilities
* **Puter API Vulnerabilities:** To report security vulnerabilities related to the Puter API, please contact [security@puter.com](mailto:security@puter.com). 
* **PWA Vulnerabilities:** To report security vulnerabilities specific to the PWA itself, please use the "Report a vulnerability" button on the GitHub repository.

### User Responsibilities
* **Keep Software Updated:** Users should ensure that their browsers and operating systems are up-to-date with the latest security patches.
* **Strong Passwords:** If a Puter account is created, users should choose strong, unique passwords.
* **Avoid Phishing Attacks:** Users should be cautious of phishing attempts and avoid clicking on suspicious links or downloading unknown files.

### Conclusion
While the Puter AI PWA itself has a limited attack surface, the security of the overall system is dependent on the security of the Puter API. By adhering to industry best practices and maintaining a strong focus on user privacy, we strive to provide a secure and reliable user experience. However, it's important to note that no system is entirely immune to security risks. Users are encouraged to practice good online hygiene and report any suspected vulnerabilities promptly.

***

*This security policy is AI-generated, please create an issue if there is a problem with it*
