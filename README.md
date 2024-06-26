<h1 align="center" style="color:white; background-color:black">Sharp Probe</h1>
<h4 align="center">[Probe for climate data acquisition using MQTT. This project was developed as SEL0373 course final project.]</h4>

<p align="center">
        <a href="https://sharpprobe-fernando-zanchettas-projects.vercel.app/">
    <img src="https://img.shields.io/badge/Sharp-Probe-black?style=for-the-badge"/>
    </a>
    <a href="https://sel.eesc.usp.br/">
    <img src="https://img.shields.io/badge/Linked%20to-SEL--EESC--USP-black?style=for-the-badge"/>
    </a>
    <a href="https://github.com/FernandoCZanchetta/SEL0373/blob/dev/LICENSE">
    <img src="https://img.shields.io/github/license/FernandoCZanchetta/SEL0373?style=for-the-badge"/>
    </a>
    <a href="https://github.com/FernandoCZanchetta/SEL0373/issues">
    <img src="https://img.shields.io/github/issues/FernandoCZanchetta/SEL0373?style=for-the-badge"/>
    </a>
    <a href="https://github.com/FernandoCZanchetta/SEL0373/commits/dev">
    <img src="https://img.shields.io/github/commit-activity/m/FernandoCZanchetta/SEL0373?style=for-the-badge">
    </a>
    <a href="https://github.com/FernandoCZanchetta/SEL0373/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/FernandoCZanchetta/SEL0373?style=for-the-badge"/>
    </a>
    <a href="https://github.com/FernandoCZanchetta/SEL0373/commits/dev">
    <img src="https://img.shields.io/github/last-commit/FernandoCZanchetta/SEL0373?style=for-the-badge"/>
    </a>
    <a href="https://github.com/FernandoCZanchetta/SEL0373/issues">
    <img src="https://img.shields.io/github/issues-raw/FernandoCZanchetta/SEL0373?style=for-the-badge" />
    </a>
    <a href="https://github.com/FernandoCZanchetta/SEL0373/pulls">
    <img src = "https://img.shields.io/github/issues-pr-raw/FernandoCZanchetta/SEL0373?style=for-the-badge">
    </a>
</p>

<p align="center">
    <a href="#environment-and-tools">Environment and Tools</a> •
    <a href="#steps-to-run-and-debug">Steps to run and debug</a> •
</p>

## Environment and tools

`Add list of dependencies and software needed to run this project (if possible add the versions that were used in development).`

## Steps to run and debug

`A simple list of steps indicating how one can run and test the project.`

## Principles and purpose

`This is a Electrical Engeneering project of the School of Engineering of São Carlos, from the subject SEL0373 - Projects in Internet of Things. This project has the purpose of recreating, in a smaller scale, a space probe that is capable of acquiring data such as climate, location, height and taking photos and sending this collected information to a website.`

`The project is divided in two parts, the first being the probe itself, that is made using a ESP32-S3-DevKitC-1 with the following external sensors and peripherals: GNSS, NEO-M8N, BME280, MPU6050, DHT22, Buzzer and a OV8258 camera. The firmware of the probe is a RTOS that organizes all the collected data and sends it to a server.`

`The second part of the project is responsible of collecting the data in the server and displaying it in a website. The data is stored in a MongoDB Database, that receives and sends information to the probe. The data received are all from the sensors, which consists as enviromental information: current date and time, humidity, temperature and probe information: acceleration, angle, geographical coordinates. The website is created on the open-source web application framework Angular, based on Javascript. The website which is accessible in the link down below, collects the information sent to the server and displays it in the frontpage, also it has the button "Requisitar Foto" to send a MQTT message to the probe, via server, that when receives it, takes a photo and sends it back to the website that displays it.`



---

![Projeto IoT (1)-1](https://github.com/FernandoCZanchetta/SEL0373/assets/97488352/8e2142ff-6f87-4c10-bd34-8ed7d33f6676)
![Projeto IoT (1)-2](https://github.com/FernandoCZanchetta/SEL0373/assets/97488352/364b2dd3-d43d-4e6a-90b2-a6c5d692b747)

<p align="center">
    <a href="https://sharpprobe-fernando-zanchettas-projects.vercel.app/">
    <img src="https://img.shields.io/badge/Check%20out-Sharp Probe Oficial Website-black?style=for-the-badge" />
    </a>
