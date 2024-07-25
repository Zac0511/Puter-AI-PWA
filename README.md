# Puter-AI-PWA

![Puter AI PWA logo](https://puter-ai.puter.site/icons/windows11/Square44x44Logo.targetsize-64.png)

A PWA that allows you to easily talk to Puter's AI

![GitHub Release](https://img.shields.io/github/v/release/Zac0511/Puter-AI-PWA?label=latest%20version) ![GitHub repo size](https://img.shields.io/github/repo-size/Zac0511/Puter-AI-PWA) ![GitHub License](https://img.shields.io/github/license/Zac0511/Puter-AI-PWA)

[![cozy_64h](https://github.com/user-attachments/assets/b6f66a23-d565-4945-ac14-3742b5754b02)](https://puter.com/app/ai-chat) 

![compact_46h](https://github.com/user-attachments/assets/8f0fdb87-66ec-440d-a6a3-c233c55580a2)


## Functionalities 
The Puter AI PWA allows you to easily talk to the **[Puter](https://github.com/HeyPuter/puter) artificial intelligence**, based on GPT 4o Mini.

It can speak in multiple languages.

## Account
Puter AI needs a **Puter account**.

In case you don't have an account, just try to send a message, and you will be logged on to a guest account.

Each Puter accout gets **1000 ai credits per month** (1 message = 1 credit)

**⚠️ Warning :** Guest accounts only have 100 credits. If you want to send a lot of messages, it is recommended to use a Puter account.

If you want to use your already existing Puter account, or sign out, click the `Settings` button, then click `Log out of your Puter account`

If you want to create a Puter account, go to [puter.com](https://puter.com)

## Powered by Puter
This app would not be possible without [**Puter**](https://github.com/HeyPuter/puter).

In case you don't know what Puter is, it's a web-based operating system, like a computer in the cloud.

Puter has an SDK called **[Puter.js](https://docs.puter.com/)**, allowing any website to have access to AI functionalities, and store files on the user's Puter PC. And Puter is open source too !

The Puter.js LLM is made with GPT 4o Mini, allowing the app to use a powerful AI, for free.

## Google Material Design V3
This app's UI is powered by **Google Material Design V3**, a clean UI, with rounded courners, etc...

Material Design is open source, which is why it is used in this PWA.

The only page of the website which does not use Material Design is `offline.html`. Why ? Material Design is on Google Server's, and this page is made to be saved locally, and showed to the user if he's offline, which needs to have an UI that works offline.

## Other informations
### Special files
The main app is the `index.html` file, but you might have noticed `index-iframe.html` and `index-puter.html`. Those are for the following reasons :
* `index-iframe.html` is a modified version of `index.html`, **removing the settings button**, and replacing it with an "Open full app" button. Useful when integrating the app in a website.
* `index-puter.html` is a modified version of `index.html`, **completly deleting** the settings button. Made for being in a Puter app.

### Hosting
While this app is powered by Puter, it is also **hosted on Puter**!

In Puter, you can just right-click a folder and publish it as a website, so that's how this is hosted.

### URL Parameters
This PWA has the parameter `?message`. This means that if you type `https://puter-ai.puter.site/?message=hello how are you`, the message "hello how are you" will be sended when the app starts.

### Microsoft Edge sidebar compatibility
This PWA is compatible with the Edge sidebar, which means you can have Puter AI directly in your sidebar.

### Helped by PWA Builder
The manifest file has been partially made by [PWA Builder](https://www.pwabuilder.com/), a website allowing a user to easily create a PWA's manifest file.

### Partially made by AI
Some parts of this app are made by the following AIs :

- ChatGPT
- Puter AI (yes really)
